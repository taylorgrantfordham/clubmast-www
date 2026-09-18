import { BrowserRouter, Routes, Route, Navigate, Outlet, Link, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import DashboardHome from './pages/DashboardHome';
import CreateClub from './pages/CreateClub';
import ClubDashboard from './pages/ClubDashboard';
import ClubSquads from './pages/ClubSquads';
import ClubFixtures from './pages/ClubFixtures';
import ClubPayments from './pages/ClubPayments';
import Login from './pages/Login';
import Register from './pages/Register';
import { AuthProvider, useAuth } from './context/AuthContext';
import { LayoutDashboard, Users, Calendar, Settings } from 'lucide-react';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { token } = useAuth();
  if (!token) return <Navigate to="/login" replace />;
  return <>{children}</>;
};

const ClubLayout = () => {
  const location = useLocation();
  const path = location.pathname;
  
  const tabs = [
    { name: 'Overview', href: '', icon: LayoutDashboard },
    { name: 'Squad Manager', href: '/squads', icon: Users },
    { name: 'Fixtures & Results', href: '/fixtures', icon: Calendar },
    { name: 'Payments', href: '/payments', icon: Settings },
  ];

  // We need to parse the base slug url to construct the tabs correctly
  const match = path.match(/(\/clubs\/[^/]+)/);
  const baseUrl = match ? match[1] : '';

  return (
    <div className="space-y-6">
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {tabs.map((tab) => {
            const isActive = path === `${baseUrl}${tab.href}`;
            const Icon = tab.icon;
            return (
              <Link
                key={tab.name}
                to={`${baseUrl}${tab.href}`}
                className={`
                  whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm flex items-center gap-2
                  ${isActive 
                    ? 'border-emerald-500 text-emerald-600' 
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
                `}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-emerald-500' : 'text-gray-400'}`} />
                {tab.name}
              </Link>
            );
          })}
        </nav>
      </div>
      <Outlet />
    </div>
  );
};

function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      >
        <Route index element={<DashboardHome />} />
        <Route path="create" element={<CreateClub />} />
        
        <Route path="clubs/:slug" element={<ClubLayout />}>
          <Route index element={<ClubDashboard />} />
          <Route path="squads" element={<ClubSquads />} />
          <Route path="fixtures" element={<ClubFixtures />} />
          <Route path="payments" element={<ClubPayments />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
}
