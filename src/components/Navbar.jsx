import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleItemClick = (item) => {
    setActiveItem(item === activeItem ? null : item);
    setMenuOpen(true);
  };

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Portfolio
      </a>
      <div className={styles.menu}>
        <button
          className={styles.menuBtn}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <img
            src={
              menuOpen
                ? getImageUrl("nav/closeIcon.png")
                : getImageUrl("nav/menuIcon.png")
            }
            alt="menu-button"
          />
        </button>
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}>
          <li>
            <a
              className={`${styles.menuItem} ${
                activeItem === "about" && styles.active
              }`}
              onClick={() => handleItemClick("about")}
            >
              About
            </a>
            {activeItem === "about" && (
              <div className={styles.dropdown}>
                <a href="#about">Submenu item 1</a>
              </div>
            )}
          </li>
          <li>
            <a
              className={`${styles.menuItem} ${
                activeItem === "experience" && styles.active
              }`}
              onClick={() => handleItemClick("experience")}
            >
              Experience
            </a>
            {activeItem === "experience" && (
              <div className={styles.dropdown}>
                <a href="#experience">Submenu item 1</a>
              </div>
            )}
          </li>
          <li>
            <a
              className={`${styles.menuItem} ${
                activeItem === "projects" && styles.active
              }`}
              onClick={() => handleItemClick("projects")}
            >
              Projects
            </a>
            {activeItem === "projects" && (
              <div className={styles.dropdown}>
                <a href="#projects">Submenu item 1</a>
              </div>
            )}
          </li>
          <li>
            <a
              className={`${styles.menuItem} ${
                activeItem === "contact" && styles.active
              }`}
              onClick={() => handleItemClick("contact")}
            >
              Contact
            </a>
            {activeItem === "contact" && (
              <div className={styles.dropdown}>
                <a href="#contact">Submenu item 1</a>
              </div>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};
