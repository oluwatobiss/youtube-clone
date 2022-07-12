import SignInButton from "./SignInButton";
import { AiOutlineMenu } from "react-icons/ai";
import { MdKeyboardVoice } from "react-icons/md";
import { BsGrid3X3Gap, BsThreeDotsVertical } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import "../styles/Header.css";

function Header() {
  return (
    <header>
      <section className="menu-n-youtube-logo">
        <button className="menu-btn">
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
        <form className="search-form">
          <input type="search" placeholder="Search" />
          <button title="Search">
            <IoIosSearch />
          </button>
        </form>
        <button className="voice-search-btn" title="Search with your voice">
          <MdKeyboardVoice />
        </button>
      </section>
      <section className="apps-settings-signin-btns">
        <button className="youtube-apps-btn" title="YouTube apps">
          <BsGrid3X3Gap />
        </button>
        <button className="settings-btn" title="Settings">
          <BsThreeDotsVertical />
        </button>
        <SignInButton />
      </section>
    </header>
  );
}

export default Header;
