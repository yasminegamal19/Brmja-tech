import { memo, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Navbar.modules.css";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { t, i18n } = useTranslation();

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    if (savedLang) i18n.changeLanguage(savedLang);
  }, []);

  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = i18n.language;
    localStorage.setItem("lang", i18n.language);
  }, [i18n.language]);

  const handleAnchorClick = (e, id) => {
    e.preventDefault();

    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 200);
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }

    closeMenu();
  };

  return (
    <nav
      className={`navbar py-2 navbar-expand-lg bg-body-tertiary ${
        i18n.language === "ar" ? "lang-ar" : "lang-en"
      } ${isSticky ? "sticky" : ""}`}
    >
      <div className="container">
        <Link className="navbar-brand" to="/" onClick={closeMenu}>
          <img src="/logo.svg" alt="logo" />
        </Link>

        <button className="navbar-toggler" type="button" onClick={toggleMenu}>
          <span className="navbar-toggler-icon bg-white"></span>
        </button>

        <ul className="navbar-nav desktop-nav">
          <li className="nav-item">
            <a
              className="nav-link"
              href="#home"
              onClick={(e) => handleAnchorClick(e, "home")}
            >
              {t("navbar.home")}
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#about"
              onClick={(e) => handleAnchorClick(e, "about")}
            >
              {t("navbar.about")}
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#services"
              onClick={(e) => handleAnchorClick(e, "services")}
            >
              {t("navbar.services")}
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#portfolio"
              onClick={(e) => handleAnchorClick(e, "portfolio")}
            >
              {t("navbar.portfolio")}
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#hosting"
              onClick={(e) => handleAnchorClick(e, "hosting")}
            >
              {t("navbar.hosting_prices")}
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#contact"
              onClick={(e) => handleAnchorClick(e, "contact")}
            >
              {t("navbar.contact")}
            </a>
          </li>
        </ul>

        <div className="desktop-language-dropdown">
          <button
            className="btn btn-secondary custom-toggle"
            data-bs-toggle="dropdown"
          >
            {i18n.language === "ar" ? "العربية" : "English"}
          </button>
          <ul className="dropdown-menu">
            <li>
              <button
                className="dropdown-item"
                onClick={() => i18n.changeLanguage("ar")}
              >
                {t("navbar.language_ar")}
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                onClick={() => i18n.changeLanguage("en")}
              >
                {t("navbar.language_en")}
              </button>
            </li>
          </ul>
        </div>

        <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
          <button className="close-mobile-menu" onClick={toggleMenu}>
            ×
          </button>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link"
                href="/#home"
                onClick={(e) => handleAnchorClick(e, "home")}
              >
                {t("navbar.home")}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="/#about"
                onClick={(e) => handleAnchorClick(e, "about")}
              >
                {t("navbar.about")}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="/#services"
                onClick={(e) => handleAnchorClick(e, "services")}
              >
                {t("navbar.services")}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="/#portfolio"
                onClick={(e) => handleAnchorClick(e, "portfolio")}
              >
                {t("navbar.portfolio")}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="/#hosting"
                onClick={(e) => handleAnchorClick(e, "hosting")}
              >
                {t("navbar.hosting_prices")}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="/#contact"
                onClick={(e) => handleAnchorClick(e, "contact")}
              >
                {t("navbar.contact")}
              </a>
            </li>
            <li className="nav-item mobile-language">
              <div className="dropdown language-dropdown">
                <button
                  className="btn btn-secondary custom-toggle"
                  data-bs-toggle="dropdown"
                >
                  {i18n.language === "ar" ? "العربية" : "English"}
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => i18n.changeLanguage("ar")}
                    >
                      {t("navbar.language_ar")}
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => i18n.changeLanguage("en")}
                    >
                      {t("navbar.language_en")}
                    </button>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default memo(Navbar);
