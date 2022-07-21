import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";
import { MdKeyboardVoice } from "react-icons/md";
import AppsSettingsSignInBtns from "./AppsSettingsSignInBtns";
import CreateNotificationsProfileBtns from "./CreateNotificationsProfileBtns";
import "../styles/Header.css";

function Header() {
  const [searchTerm, setSearchTerm] = useState("");

  function handleHeaderClick(e) {
    const profileMenu = document.getElementById("profile-menu");
    const profileButton = document.getElementById("profile-btn");
    const headerProfileImage = document.getElementById("header-profile-image");
    const profileMenuIsActive = [...profileMenu.classList].includes("visible");
    if (
      e.target !== profileButton &&
      e.target !== headerProfileImage &&
      profileMenuIsActive
    ) {
      profileMenu.classList.remove("visible");
    }
  }

  function handleMenuBtnClick() {
    const wideSidebar = document.getElementById("wide-sidebar");
    const slimSidebar = document.getElementById("slim-sidebar");
    const gallery = document.getElementById("homepage-video-gallery");

    wideSidebar.classList.toggle("hide-wide-sidebar");
    slimSidebar.classList.toggle("hide-slim-sidebar");
    gallery.classList.toggle("if-wide-sidebar-is-active");
    gallery.classList.toggle("if-slim-sidebar-is-active");
  }

  function handleMouseDown(e) {
    e.currentTarget.style.backgroundColor = "#dedede";
    e.currentTarget.style.border = "0.3px solid #d3d3d3";
  }

  function handleMouseUp(e) {
    e.currentTarget.style.backgroundColor = "transparent";
    e.currentTarget.style.border = "none";
  }

  function handleSubmit(e) {
    e.preventDefault();
    searchTerm &&
      (window.location.href = `https://www.youtube.com/results?search_query=${searchTerm}`);
  }

  return (
    <header onClick={handleHeaderClick}>
      <section className="menu-n-youtube-logo">
        <button
          className="menu-btn"
          onClick={handleMenuBtnClick}
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
            onChange={(e) => setSearchTerm(e.target.value)}
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
      <section>
        <AppsSettingsSignInBtns />
        <CreateNotificationsProfileBtns />
      </section>
    </header>
  );
}

export default Header;
