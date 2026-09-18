import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { format } from 'date-fns';
import { Calendar, Plus, MapPin } from 'lucide-react';

export default function ClubFixtures() {
  const { slug } = useParams();
  const { token } = useAuth();
  
  const [club, setClub] = useState<any>(null);
  const [fixtures, setFixtures] = useState<any[]>([]);
  const [teams, setTeams] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    teamId: '',
    date: '',
    type: 'LEAGUE',
    isHome: true,
    opponent: '',
    venue: ''
  });

  useEffect(() => {
    fetch(`http://localhost:4000/api/clubs/${slug}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(clubData => {
        setClub(clubData);
        return Promise.all([
          fetch(`http://localhost:4000/api/clubs/${clubData.id}/fixtures`, {
            headers: { Authorization: `Bearer ${token}` }
          }).then(res => res.json()),
          fetch(`http://localhost:4000/api/clubs/${clubData.id}/teams`, {
            headers: { Authorization: `Bearer ${token}` }
          }).then(res => res.json())
        ]);
      })
      .then(([fixturesData, teamsData]) => {
        setFixtures(fixturesData);
        setTeams(teamsData);
        if (teamsData.length > 0) {
          setFormData(prev => ({ ...prev, teamId: teamsData[0].id }));
        }
        setLoading(false);
      })
      .catch(console.error);
  }, [slug, token]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:4000/api/teams/${formData.teamId}/fixtures`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}` 
        },
        body: JSON.stringify({
          ...formData,
          date: new Date(formData.date).toISOString()
        })
      });
      
      if (res.ok) {
        await res.json();
        // Since we don't return the populated team relation in the POST route immediately, 
        // we map it manually or refetch. Let's just refetch for simplicity.
        const updated = await fetch(`http://localhost:4000/api/clubs/${club.id}/fixtures`, {
          headers: { Authorization: `Bearer ${token}` }
        }).then(r => r.json());
        
        setFixtures(updated);
        setShowForm(false);
        setFormData({ ...formData, opponent: '', venue: '', date: '' });
      }
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <div className="p-8 animate-pulse text-gray-500">Loading fixtures...</div>;

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
          <Calendar className="w-6 h-6 text-purple-600" />
          Fixture Generator
        </h1>
        <button 
          onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium"
        >
          <Plus className="w-4 h-4" />
          Schedule Match
        </button>
      </div>

      {showForm && (
        <div className="bg-purple-50 border border-purple-100 p-6 rounded-xl">
          <h3 className="font-bold text-purple-900 mb-4">Schedule a New Fixture</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-purple-800 mb-1">Select Squad</label>
                <select 
                  required
                  value={formData.teamId}
                  onChange={e => setFormData({...formData, teamId: e.target.value})}
                  className="w-full px-3 py-2 border border-purple-200 rounded-lg focus:ring-purple-500"
                >
                  {teams.map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-purple-800 mb-1">Date & Time</label>
                <input 
                  type="datetime-local" 
                  required
                  value={formData.date}
                  onChange={e => setFormData({...formData, date: e.target.value})}
                  className="w-full px-3 py-2 border border-purple-200 rounded-lg focus:ring-purple-500"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-medium text-purple-800 mb-1">Home / Away</label>
                <select 
                  value={formData.isHome ? 'true' : 'false'}
                  onChange={e => setFormData({...formData, isHome: e.target.value === 'true'})}
                  className="w-full px-3 py-2 border border-purple-200 rounded-lg focus:ring-purple-500"
                >
                  <option value="true">Home</option>
                  <option value="false">Away</option>
                </select>
              </div>
              <div className="col-span-2">
                <label className="block text-xs font-medium text-purple-800 mb-1">Opposing Team</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Salford City"
                  value={formData.opponent}
                  onChange={e => setFormData({...formData, opponent: e.target.value})}
                  className="w-full px-3 py-2 border border-purple-200 rounded-lg focus:ring-purple-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-purple-800 mb-1">Location / Venue</label>
              <input 
                type="text" 
                placeholder="e.g. Old Trafford"
                value={formData.venue}
                onChange={e => setFormData({...formData, venue: e.target.value})}
                className="w-full px-3 py-2 border border-purple-200 rounded-lg focus:ring-purple-500"
              />
            </div>

            <div className="pt-2 flex justify-end gap-3">
              <button type="button" onClick={() => setShowForm(false)} className="px-4 py-2 text-purple-600 font-medium hover:bg-purple-100 rounded-lg">
                Cancel
              </button>
              <button type="submit" className="px-6 py-2 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700">
                Confirm Fixture
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
        {fixtures.length === 0 ? (
          <div className="p-12 text-center text-gray-500">
            No fixtures scheduled yet. Build your calendar!
          </div>
        ) : (
          <ul className="divide-y divide-gray-100">
            {fixtures.map((fixture) => (
              <li key={fixture.id} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between">
                  
                  <div className="flex items-center gap-6">
                    {/* Date Block */}
                    <div className="text-center w-16 bg-gray-50 p-2 rounded-lg border border-gray-100">
                      <div className="text-xs font-bold text-gray-500 uppercase">{format(new Date(fixture.date), 'MMM')}</div>
                      <div className="text-2xl font-bold text-gray-900">{format(new Date(fixture.date), 'dd')}</div>
                      <div className="text-[10px] font-semibold text-gray-400 mt-1">{format(new Date(fixture.date), 'HH:mm')}</div>
                    </div>
                    
                    {/* Match Info */}
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-semibold text-purple-600 bg-purple-50 px-2 py-0.5 rounded uppercase">
                          {fixture.team?.name || 'Squad'}
                        </span>
                        <span className="text-xs font-medium text-gray-500">{fixture.type}</span>
                      </div>
                      
                      <h3 className="text-lg font-bold text-gray-900">
                        {fixture.isHome ? club.name : fixture.opponent} <span className="text-gray-400 font-normal mx-1">v</span> {fixture.isHome ? fixture.opponent : club.name}
                      </h3>
                      
                      {fixture.venue && (
                        <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">
                          <MapPin className="w-3 h-3" />
                          {fixture.venue}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Status / Score */}
                  <div className="text-right">
                    {fixture.status === 'COMPLETED' ? (
                      <div className="text-2xl font-black text-gray-900 tracking-wider">
                        {fixture.isHome ? fixture.homeScore : fixture.awayScore} - {fixture.isHome ? fixture.awayScore : fixture.homeScore}
                      </div>
                    ) : (
                      <span className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold tracking-wide">
                        {fixture.status}
                      </span>
                    )}
                  </div>
                  
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
