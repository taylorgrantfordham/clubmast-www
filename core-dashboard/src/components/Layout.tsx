import { Outlet, Link } from 'react-router-dom';
import { LayoutDashboard, PlusCircle, Settings, Users } from 'lucide-react';

export default function Layout() {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200">
        <div className="p-6">
          <h1 className="text-xl font-bold text-emerald-600 flex items-center gap-2">
            <LayoutDashboard className="w-6 h-6" />
            Clubmast
          </h1>
        </div>
        
        <nav className="px-4 py-4 space-y-2">
          <Link to="/" className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
            <Users className="w-5 h-5" />
            My Clubs
          </Link>
          <Link to="/create" className="flex items-center gap-3 px-3 py-2 text-emerald-700 bg-emerald-50 rounded-lg transition-colors">
            <PlusCircle className="w-5 h-5" />
            New Club
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <header className="bg-white border-b border-gray-200 px-8 py-4 flex justify-between items-center">
          <h2 className="text-lg font-medium text-gray-800">Dashboard</h2>
          <button className="p-2 text-gray-500 hover:text-gray-700">
            <Settings className="w-5 h-5" />
          </button>
        </header>
        <main className="p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
