import ToggleLanguage from "./ToggleLanguage";
import ToggleTheme from "./ToggleTheme";

/**
 *
 * Header Component
 *
 * @returns
 * Header Component
 */
const Header = () => {
  return (
    <header className="header">
      <h1>useContext</h1>
      <h3>Header</h3>
      <div className="button-group">
        <ToggleLanguage />
        <ToggleTheme />
      </div>
    </header>
  );
};

export default Header;
