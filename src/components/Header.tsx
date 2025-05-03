import { cn } from '@/lib/utils';
import { useAuth } from '@clerk/clerk-react'
import React from 'react'
import Container from './Container';
import LogoContainer from './LogoContainer';
import NavigationRoutes from './NavigationRoutes';
import { NavLink } from 'react-router-dom';
import ProfileContainter from './ProfileContainter';

const Header = () => {

  const { userId } = useAuth();

  return (
    <header
      className={cn("w-full border-b duration-150 transition-all ease-in-out")}
    >

      <Container>
        <div className='flex items-center gap-4 w-full'>
          
          <LogoContainer />

          <nav className='hidden md:flex items-center gap-3 '>
            <NavigationRoutes />
          </nav>

          <div className='ml-auto flex items-center gap-6'>
            {userId && 
              <NavLink to={"/generate"} className={({isActive}) => cn("text-base text-neutral-600", isActive && "text-neutral-900 font-semibold")}>
                Take an Interview
              </NavLink>
            }
          </div>  
          
          {/* user profile */}
          <div className='ml-auto flex items-center gap-6'>
              <ProfileContainter />
          </div>

        </div>
      </Container>

    </header>
  )
}

export default Header