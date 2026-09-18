import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import { Shield, Trophy, Users, ChevronRight } from 'lucide-react';

export default function DashboardHome() {
  const { token } = useAuth();
  const [clubs, setClubs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:4000/api/clubs', {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((res) => res.json())
      .then((data) => {
        setClubs(data);
        setLoading(false);
      });
  }, [token]);

  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back!</h1>
      
      {loading ? (
        <div className="text-gray-500 animate-pulse">Loading your clubs...</div>
      ) : clubs.length > 0 ? (
        <div className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Your Clubs</h2>
          <div className="grid gap-4">
            {clubs.map((club) => (
              <Link 
                key={club.id} 
                to={`/clubs/${club.slug}`}
                className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between hover:border-emerald-500 transition-colors group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 font-bold text-xl uppercase">
                    {club.name.substring(0, 1)}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">{club.name}</h3>
                    <p className="text-sm text-gray-500 uppercase tracking-wide font-medium">{club.sport} • {club.country}</p>
                  </div>
                </div>
                <ChevronRight className="w-6 h-6 text-gray-300 group-hover:text-emerald-500 transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-gray-600 mb-8">You don't have any clubs yet. Let's get started.</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 mb-4">
            <Trophy className="w-5 h-5" />
          </div>
          <h3 className="font-semibold text-gray-900 mb-1">Create your Club</h3>
          <p className="text-sm text-gray-600">Takes less than 90 seconds.</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm opacity-50">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
            <Users className="w-5 h-5" />
          </div>
          <h3 className="font-semibold text-gray-900 mb-1">Invite Members</h3>
          <p className="text-sm text-gray-600">Send invite links to your squads.</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm opacity-50">
          <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mb-4">
            <Shield className="w-5 h-5" />
          </div>
          <h3 className="font-semibold text-gray-900 mb-1">Collect Fees</h3>
          <p className="text-sm text-gray-600">Setup Stripe to collect match fees.</p>
        </div>
      </div>

      <Link 
        to="/create" 
        className="inline-flex items-center justify-center px-6 py-3 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors"
      >
        Claim a new club
      </Link>
    </div>
  );
}
