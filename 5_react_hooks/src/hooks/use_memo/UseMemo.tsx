import Header from "./components/Header";
import Footer from "./components/Footer";
import "../../styles/contact.css";
import Contact from "./components/Contact";

const UseMemo = () => {
  return (
    <>
      <div className="rootsc">
        <Header />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default UseMemo;
