import React, { useEffect } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';

const Layout: React.FC = () => {
  const { pathname } = useLocation();

  // Emulate ScrollRestoration behavior for standard Router
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-gray-900">
        {/* Fixed Navigation for accessibility and segmenting */}
      <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50 h-16">
        <div className="max-w-5xl mx-auto px-4 h-full flex items-center justify-between">
          <NavLink to="/" className="text-xl font-black tracking-tighter text-gray-900 hover:text-blue-600 transition-colors">
            PPL<span className="text-blue-600">GUIDE</span>
          </NavLink>

          <div className="flex space-x-1 md:space-x-6 text-sm md:text-base font-medium">
             {['Push', 'Pull', 'Legs'].map((day) => (
                 <NavLink
                    key={day}
                    to={`/workout/${day.toLowerCase()}`}
                    className={({ isActive }) => 
                        `px-3 py-2 rounded-md transition-colors ${
                            isActive 
                            ? 'bg-gray-900 text-white' 
                            : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
                        }`
                    }
                 >
                     {day}
                 </NavLink>
             ))}
          </div>
        </div>
      </nav>

      {/* Main Content Area with top padding for fixed header */}
      <main className="flex-grow pt-20 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Outlet />
        </div>
      </main>

      <footer className="bg-gray-50 border-t border-gray-200 py-8 text-center">
        <p className="text-gray-400 text-sm">© {new Date().getFullYear()} PPL Guide. Educational Resource.</p>
      </footer>
    </div>
  );
};

export default Layout;