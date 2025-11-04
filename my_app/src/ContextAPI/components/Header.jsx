import { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext';

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className={`header ${theme ? 'dark' : 'light'}`}>
      <h1>Theme Switcher</h1>
      <button onClick={toggleTheme}>
        {theme ? 'Light Mode' : 'Dark Mode'}로 전환
      </button>
    </header>
  );
}
