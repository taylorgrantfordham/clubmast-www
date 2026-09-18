#!/usr/bin/env bash
#
# Build, ship to the origin, purge the edge.
#
# Origin is ukserv03, served over plain HTTP on a dedicated hostname
# (origin.clubmast.com) so the CDN never follows the public vhost's HTTP→HTTPS
# redirect — that redirect resolves back to Bunny and shows up as a 502.
#
# Usage: ./deploy.sh [--skip-build]

set -euo pipefail

HOST="ukserv03"
DOCROOT="/home/clubmast/htdocs/clubmast.com"
PULL_ZONE="6516824"
KEY_FILE="${HOME}/.claude/bunny-api-key.txt"

cd "$(dirname "$0")"

if [[ "${1:-}" != "--skip-build" ]]; then
  echo "→ building"
  npm run build
fi

[[ -d dist ]] || { echo "✗ no dist/ — build first"; exit 1; }

FILES=$(find dist -type f | wc -l | tr -d ' ')
echo "→ uploading ${FILES} files to ${HOST}:${DOCROOT}"

tar -C dist -czf - . | ssh "$HOST" "
  set -e
  rm -rf '${DOCROOT}'/*
  tar -C '${DOCROOT}' -xzf -
  chown -R clubmast:clubmast '${DOCROOT}'
  find '${DOCROOT}' -type d -exec chmod 750 {} \;
  find '${DOCROOT}' -type f -exec chmod 640 {} \;
"

echo "→ verifying origin"
ssh "$HOST" "curl -sS -o /dev/null -w '  origin / → %{http_code}\n' -H 'Host: origin.clubmast.com' http://127.0.0.1/"

if [[ -f "$KEY_FILE" ]]; then
  KEY=$(tr -d '\r\n' < "$KEY_FILE" | grep -oE '[A-Za-z0-9-]{30,}' | head -1)
  echo "→ purging edge"
  curl -sS --max-time 60 -X POST "https://api.bunny.net/pullzone/${PULL_ZONE}/purgeCache" \
    -H "AccessKey: ${KEY}" -H "Content-Length: 0" \
    -o /dev/null -w "  purge → %{http_code}\n"
else
  echo "  ! no Bunny key at ${KEY_FILE} — skipping purge"
fi

echo "→ live check"
sleep 3
for p in / /football/ /product/ /pricing/ /nl/; do
  printf "  %-12s " "$p"
  curl -sS -o /dev/null --max-time 20 \
    -w "%{http_code}  ttfb=%{time_starttransfer}s\n" "https://clubmast.com${p}"
done

echo "✓ deployed"
