import { Link } from 'react-router-dom';
import { CardIcon } from 'components/icons/CardIcon';
import { HomeIcon } from 'components/icons/HomeIcon';
import { NotificationWithRedDotIcon } from 'components/icons/NotificationWithRedDotIcon';
import { UserIcon } from 'components/icons/UserIcon';

export const BottomNavigationBar = () => {
  return (
    <nav className="nav">
      <ul className="nav__list flex justify-between py-24 px-24">
        <li className="nav__item">
          <Link to="#">
            <HomeIcon />
          </Link>
        </li>
        <li className="nav__item">
          <Link to="#">
            <NotificationWithRedDotIcon />
          </Link>
        </li>
        <li className="nav__item">
          <Link to="#">
            <CardIcon />
          </Link>
        </li>
        <li className="nav__item">
          <Link to="#">
            <UserIcon />
          </Link>
        </li>
      </ul>
    </nav>
  );
};
