$dirs = Get-ChildItem -Directory -Path "C:\Users\taylo\Documents\GitHub"
foreach ($dir in $dirs) {
  $githubDir = Join-Path $dir.FullName ".github"
  if (Test-Path $githubDir) {
    Remove-Item -Recurse -Force $githubDir
    Write-Host "Removed .github from $($dir.Name)"
  }
  
  $readmePath = Join-Path $dir.FullName "README.md"
  if (Test-Path $readmePath) {
    $append = @"

## Deployment

**DO NOT USE GITHUB ACTIONS.**

This project uses our in-house zero-cost delivery system via `deploy.mjs`.
To deploy to production (Vercel edge + SSH to ukserv), simply run:
\`\`\`bash
node deploy.mjs
\`\`\`
"@
    Add-Content -Path $readmePath -Value $append
    Write-Host "Updated README in $($dir.Name)"
  }
}
