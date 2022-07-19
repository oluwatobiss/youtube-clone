import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { MdKeyboardVoice } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import AppsSettingsSignInBtns from "./AppsSettingsSignInBtns";
import "../styles/Header.css";

function Header() {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    window.location.href = `https://www.youtube.com/results?search_query=${searchTerm}`;
  }

  function handleChange(e) {
    setSearchTerm(e.target.value);
  }

  function handleClick() {
    const wideSidebar = document.getElementById("wide-sidebar");
    const slimSidebar = document.getElementById("slim-sidebar");
    const gallerySection = document.getElementById("homepage-video-gallery");

    wideSidebar.classList.toggle("hide-wide-sidebar");
    slimSidebar.classList.toggle("hide-slim-sidebar");
    gallerySection.classList.toggle("if-wide-sidebar-is-active");
    gallerySection.classList.toggle("if-slim-sidebar-is-active");
  }

  function handleMouseDown(e) {
    e.currentTarget.style.backgroundColor = "#dedede";
    e.currentTarget.style.border = "0.3px solid #d3d3d3";
  }

  function handleMouseUp(e) {
    e.currentTarget.style.backgroundColor = "transparent";
    e.currentTarget.style.border = "none";
  }

  return (
    <header>
      <section className="menu-n-youtube-logo">
        <button
          className="menu-btn"
          onClick={handleClick}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        >
          <AiOutlineMenu />
        </button>
        <img
          className="youtube-logo"
          src={require("../assets/images/youtube-logo.png")}
          alt="YouTube logo"
          title="YouTube Home"
        />
      </section>
      <section className="input-n-voice-search">
        <form className="search-form" onSubmit={handleSubmit}>
          <input
            type="search"
            value={searchTerm}
            onChange={handleChange}
            placeholder="Search"
          />
          <button title="Search">
            <IoIosSearch />
          </button>
        </form>
        <button className="voice-search-btn" title="Search with your voice">
          <MdKeyboardVoice />
        </button>
      </section>
      <section className="header-right-section">
        <AppsSettingsSignInBtns />
      </section>
    </header>
  );
}

export default Header;
