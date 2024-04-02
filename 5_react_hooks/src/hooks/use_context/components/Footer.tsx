import ToggleLanguage from "./ToggleLanguage";
import ToggleTheme from "./ToggleTheme";

const Footer = () => {
  return (
    <footer className="footer">
      <h4>Footer</h4>
      <div className="button-group">
        <ToggleLanguage />
        <ToggleTheme />
      </div>
    </footer>
  );
};

export default Footer;
