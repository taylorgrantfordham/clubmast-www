import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { format } from 'date-fns';
import { Users, Calendar, Trophy } from 'lucide-react';

export default function ClubDashboard() {
  const { slug } = useParams();
  const { token } = useAuth();
  const [club, setClub] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:4000/api/clubs/${slug}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((res) => res.json())
      .then((data) => {
        setClub(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [slug]);

  if (loading) return <div className="p-8 text-gray-500 animate-pulse">Loading club data...</div>;
  if (!club || club.error) return <div className="p-8 text-red-500">Club not found!</div>;

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <header className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{club.name}</h1>
          <div className="flex gap-4 text-sm text-gray-600">
            <span className="bg-gray-100 px-3 py-1 rounded-full uppercase tracking-wider text-xs font-semibold">{club.sport}</span>
            <span>{club.country}</span>
            <span>{club.teams.length} Squads</span>
          </div>
        </div>
        <button className="px-6 py-2 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-colors">
          Manage Website
        </button>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Upcoming Fixtures */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-emerald-600" />
              Upcoming Fixtures
            </h2>
            <button className="text-sm font-medium text-emerald-600 hover:text-emerald-700">View Calendar</button>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
            {club.fixtures.map((fixture: any) => (
              <div key={fixture.id} className="p-6 border-b border-gray-100 last:border-0 flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer">
                <div className="flex items-center gap-6">
                  <div className="text-center w-16">
                    <div className="text-xs font-bold text-gray-500 uppercase">{format(new Date(fixture.date), 'MMM')}</div>
                    <div className="text-2xl font-bold text-gray-900">{format(new Date(fixture.date), 'dd')}</div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-emerald-600 mb-1">{fixture.type} • {fixture.isHome ? 'Home' : 'Away'}</div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{fixture.isHome ? club.name : fixture.opponent} vs {fixture.isHome ? fixture.opponent : club.name}</h3>
                    <div className="text-sm text-gray-500">{fixture.venue}</div>
                  </div>
                </div>
                <div className="text-right">
                  {fixture.status === 'COMPLETED' ? (
                    <div className="text-2xl font-black text-gray-900 tracking-wider">
                      {fixture.isHome ? fixture.homeScore : fixture.awayScore} - {fixture.isHome ? fixture.awayScore : fixture.homeScore}
                    </div>
                  ) : (
                    <span className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold tracking-wide">SCHEDULED</span>
                  )}
                </div>
              </div>
            ))}
            {club.fixtures.length === 0 && (
              <div className="p-8 text-center text-gray-500">No fixtures scheduled yet.</div>
            )}
          </div>
        </div>

        {/* Right Column: Squads */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-600" />
              Squads
            </h2>
            <button className="text-sm font-medium text-emerald-600 hover:text-emerald-700">Add Team</button>
          </div>
          
          <div className="grid gap-4">
            {club.teams.map((team: any) => (
              <div key={team.id} className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-gray-900">{team.name}</h3>
                  <p className="text-sm text-gray-500">{team.ageGroup} • {team.gender}</p>
                </div>
                <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center border border-gray-200">
                  <Trophy className="w-4 h-4 text-gray-400" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
