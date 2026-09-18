import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Users, UserPlus, Shield } from 'lucide-react';

export default function ClubSquads() {
  const { slug } = useParams();
  const { token } = useAuth();
  
  const [club, setClub] = useState<any>(null);
  const [teams, setTeams] = useState<any[]>([]);
  const [members, setMembers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
  const [showInvite, setShowInvite] = useState(false);
  const [inviteEmail, setInviteEmail] = useState('');
  const [inviteRole, setInviteRole] = useState('PLAYER');

  useEffect(() => {
    // 1. Fetch the club ID first using the slug
    fetch(`http://localhost:4000/api/clubs/${slug}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(clubData => {
        setClub(clubData);
        
        // 2. Fetch Teams and Members using the clubId
        return Promise.all([
          fetch(`http://localhost:4000/api/clubs/${clubData.id}/teams`, {
            headers: { Authorization: `Bearer ${token}` }
          }).then(res => res.json()),
          fetch(`http://localhost:4000/api/clubs/${clubData.id}/members`, {
            headers: { Authorization: `Bearer ${token}` }
          }).then(res => res.json())
        ]);
      })
      .then(([teamsData, membersData]) => {
        setTeams(teamsData);
        setMembers(membersData);
        setLoading(false);
      })
      .catch(console.error);
  }, [slug, token]);

  const handleInvite = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!club) return;
    
    try {
      const res = await fetch(`http://localhost:4000/api/clubs/${club.id}/members/invite`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}` 
        },
        body: JSON.stringify({ email: inviteEmail, role: inviteRole })
      });
      
      if (res.ok) {
        alert('Invite sent!');
        setShowInvite(false);
        setInviteEmail('');
      } else {
        alert('Failed to send invite.');
      }
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <div className="p-8 animate-pulse text-gray-500">Loading squads...</div>;

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
          <Users className="w-6 h-6 text-blue-600" />
          Squad Manager
        </h1>
        <button 
          onClick={() => setShowInvite(true)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
        >
          <UserPlus className="w-4 h-4" />
          Invite Member
        </button>
      </div>

      {showInvite && (
        <div className="bg-blue-50 border border-blue-100 p-6 rounded-xl">
          <h3 className="font-bold text-blue-900 mb-4">Send an Invitation</h3>
          <form onSubmit={handleInvite} className="flex gap-4 items-end">
            <div className="flex-1">
              <label className="block text-xs font-medium text-blue-800 mb-1">Email Address</label>
              <input 
                type="email" 
                required 
                value={inviteEmail}
                onChange={e => setInviteEmail(e.target.value)}
                className="w-full px-3 py-2 border border-blue-200 rounded-lg focus:ring-blue-500" 
                placeholder="player@example.com" 
              />
            </div>
            <div className="w-48">
              <label className="block text-xs font-medium text-blue-800 mb-1">Role</label>
              <select 
                value={inviteRole}
                onChange={e => setInviteRole(e.target.value)}
                className="w-full px-3 py-2 border border-blue-200 rounded-lg focus:ring-blue-500"
              >
                <option value="PLAYER">Player</option>
                <option value="COACH">Coach</option>
                <option value="PARENT">Parent</option>
                <option value="ADMIN">Admin</option>
              </select>
            </div>
            <button type="submit" className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700">
              Send Invite
            </button>
            <button type="button" onClick={() => setShowInvite(false)} className="px-4 py-2 text-blue-600 font-medium">
              Cancel
            </button>
          </form>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Teams List */}
        <div className="lg:col-span-1 space-y-4">
          <h2 className="font-semibold text-gray-900 uppercase tracking-wider text-xs">Active Squads</h2>
          {teams.map(team => (
            <div key={team.id} className="bg-white p-4 border border-gray-200 rounded-xl shadow-sm hover:border-blue-300 cursor-pointer transition-colors">
              <h3 className="font-bold text-gray-900">{team.name}</h3>
              <p className="text-sm text-gray-500">{team.ageGroup} • {team.gender}</p>
              <div className="mt-3 text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-md inline-block">
                {team.members?.length || 0} Registered Players
              </div>
            </div>
          ))}
          <button className="w-full py-3 border-2 border-dashed border-gray-300 text-gray-500 font-medium rounded-xl hover:border-gray-400 hover:text-gray-700 transition-colors">
            + Create New Squad
          </button>
        </div>

        {/* Members Directory */}
        <div className="lg:col-span-2 space-y-4">
          <h2 className="font-semibold text-gray-900 uppercase tracking-wider text-xs">All Members ({members.length})</h2>
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 font-semibold text-gray-600">Name</th>
                  <th className="px-6 py-3 font-semibold text-gray-600">Role</th>
                  <th className="px-6 py-3 font-semibold text-gray-600">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {members.map(member => (
                  <tr key={member.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="font-medium text-gray-900">
                        {member.user ? `${member.user.firstName} ${member.user.lastName}` : 'Pending User'}
                      </div>
                      <div className="text-gray-500 text-xs">{member.user?.email}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                        {member.role === 'OWNER' && <Shield className="w-3 h-3 text-emerald-600" />}
                        {member.role}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${
                        member.status === 'ACTIVE' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {member.status}
                      </span>
                    </td>
                  </tr>
                ))}
                {members.length === 0 && (
                  <tr>
                    <td colSpan={3} className="px-6 py-8 text-center text-gray-500">
                      No members found. Invite some!
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
