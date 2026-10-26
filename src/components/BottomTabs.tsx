import { NavLink } from 'react-router-dom';
import './BottomTabs.css';

const tabs = [
  { to: '/', label: 'Início', icon: '' },
  { to: '/favoritos', label: 'Favoritos', icon: '' },
  { to: '/adicionar', label: 'Adicionar', icon: '' },
];

function BottomTabs() {
  return (
    <nav className="bottom-tabs" aria-label="Navegação principal">
      {tabs.map((t) => (
        <NavLink
          key={t.to}
          to={t.to}
          end={t.to === '/'}
          className={({ isActive }) =>
            'tab-item' + (isActive ? ' tab-active' : '')
          }
        >
          <span className="tab-icon">{t.icon}</span>
          <span className="tab-label">{t.label}</span>
        </NavLink>
      ))}
    </nav>
  );
}

export default BottomTabs;