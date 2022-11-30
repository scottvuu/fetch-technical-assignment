import { Outlet } from 'react-router';
import { BottomNavigationBar } from './BottomNavigationBar';

export const LayoutMain = () => {
  return (
    <div className="main-content">
      <Outlet />
      <BottomNavigationBar />
    </div>
  );
};
