import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function CreateClub() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { token } = useAuth();
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    // In a real app, this creates a slug automatically
    const payload = {
      ...data,
      slug: (data.name as string).toLowerCase().replace(/\s+/g, '-'),
    };

    try {
      // Point to our Express core-backend API
      const res = await fetch('http://localhost:4000/api/clubs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify(payload),
      });
      
      if (res.ok) {
        // Success!
        navigate('/');
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Create a New Club</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Club Name
          </label>
          <input 
            type="text" 
            name="name" 
            id="name" 
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
            placeholder="e.g. Manchester Wanderers"
          />
        </div>
        
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label htmlFor="sport" className="block text-sm font-medium text-gray-700 mb-1">
              Primary Sport
            </label>
            <select 
              name="sport" 
              id="sport" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
            >
              <option value="football">Football</option>
              <option value="rugby">Rugby</option>
              <option value="cricket">Cricket</option>
              <option value="hockey">Hockey</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
              Country
            </label>
            <select 
              name="country" 
              id="country" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
            >
              <option value="GB">United Kingdom</option>
              <option value="IE">Ireland</option>
              <option value="AU">Australia</option>
              <option value="US">United States</option>
            </select>
          </div>
        </div>

        <button 
          type="submit" 
          disabled={loading}
          className="w-full py-3 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors disabled:opacity-50"
        >
          {loading ? 'Creating...' : 'Create Club & Generate Website'}
        </button>
      </form>
    </div>
  );
}
