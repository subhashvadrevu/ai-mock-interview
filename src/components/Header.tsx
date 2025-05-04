import { cn } from '@/lib/utils';
import { useAuth } from '@clerk/clerk-react';
import React from 'react';
import Container from './Container';
import LogoContainer from './LogoContainer';
import NavigationRoutes from './NavigationRoutes';
import { NavLink } from 'react-router-dom';
import ProfileContainter from './ProfileContainter';

const Header = () => {
  const { userId } = useAuth();

  return (
    <header className={cn("w-full border-b shadow-sm bg-white mb-4")}>
      <Container>
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-6">
            <LogoContainer />

            {/* Navigation (Desktop) */}
            <nav className="hidden md:flex items-center gap-6">
              <NavigationRoutes />
              {userId && (
                <NavLink
                  to="/generate"
                  className={({ isActive }) =>
                    cn(
                      "text-sm font-medium text-gray-600 hover:text-black transition",
                      isActive && "text-black font-semibold"
                    )
                  }
                >
                  Take an Interview
                </NavLink>
              )}
            </nav>
          </div>

          {/* Right: Profile */}
          <div className="flex items-center gap-4">
            <ProfileContainter />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
