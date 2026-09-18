import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { CreditCard, DollarSign, Building } from 'lucide-react';

export default function ClubPayments() {
  const { slug } = useParams();
  const { token } = useAuth();
  
  const [club, setClub] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [connecting, setConnecting] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:4000/api/clubs/${slug}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => {
        setClub(data);
        setLoading(false);
      })
      .catch(console.error);
  }, [slug, token]);

  const connectStripe = async () => {
    setConnecting(true);
    try {
      const res = await fetch(`http://localhost:4000/api/clubs/${club.id}/stripe/onboard`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` }
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url; // Redirect to Stripe
      }
    } catch (err) {
      console.error(err);
      setConnecting(false);
    }
  };

  if (loading) return <div className="p-8 animate-pulse text-gray-500">Loading payment settings...</div>;

  const isConnected = !!club.stripeAccountId;

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
          <CreditCard className="w-6 h-6 text-indigo-600" />
          Financials & Payments
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Stripe Connect Card */}
        <div className={`p-8 rounded-2xl border ${isConnected ? 'bg-indigo-50 border-indigo-100' : 'bg-white border-gray-200 shadow-sm'}`}>
          <div className="flex items-center gap-4 mb-4">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${isConnected ? 'bg-indigo-600' : 'bg-gray-100'}`}>
              <Building className={`w-6 h-6 ${isConnected ? 'text-white' : 'text-gray-400'}`} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">Stripe Connect</h2>
              <p className={`text-sm ${isConnected ? 'text-indigo-600 font-medium' : 'text-gray-500'}`}>
                {isConnected ? 'Account Connected' : 'Not Connected'}
              </p>
            </div>
          </div>
          
          <p className="text-gray-600 mb-8">
            Connect your club's bank account via Stripe to automatically collect match fees, subscriptions, and donations directly from members. We take a flat 50p fee per transaction.
          </p>

          {isConnected ? (
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-xl border border-indigo-100 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase">Available Balance</p>
                  <p className="text-3xl font-black text-gray-900">£1,240.00</p>
                </div>
                <button className="px-4 py-2 bg-indigo-100 text-indigo-700 font-medium rounded-lg hover:bg-indigo-200">
                  Withdraw Funds
                </button>
              </div>
              <p className="text-xs text-indigo-600 text-center">Your account is fully verified and ready to accept payments.</p>
            </div>
          ) : (
            <button 
              onClick={connectStripe}
              disabled={connecting}
              className="w-full py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-colors disabled:opacity-50"
            >
              {connecting ? 'Connecting to Stripe...' : 'Set up Bank Account'}
            </button>
          )}
        </div>

        {/* Recent Transactions */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden flex flex-col">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-gray-400" />
              Recent Transactions
            </h2>
          </div>
          <div className="flex-1 p-8 flex flex-col items-center justify-center text-center">
            {isConnected ? (
              <>
                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                  <DollarSign className="w-8 h-8 text-gray-300" />
                </div>
                <h3 className="text-gray-900 font-bold mb-1">No transactions yet</h3>
                <p className="text-gray-500 text-sm">Once members pay their match fees, they will appear here.</p>
              </>
            ) : (
              <p className="text-gray-500">Connect Stripe to view your transactions.</p>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
