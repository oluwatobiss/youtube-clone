import { useEffect, useState } from "react";
import { BiDollarCircle } from "react-icons/bi";
import { RiShieldUserLine } from "react-icons/ri";
import { MdOutlineLogin, MdOutlineFeedback } from "react-icons/md";
import { IoSettingsOutline, IoHelpCircleOutline } from "react-icons/io5";
import { onAuthStateChanged, getAuth, signOut } from "firebase/auth";
import MenuItemFactory from "./MenuItemFactory";
import "../styles/ProfileMenu.css";

function ProfileMenu() {
  const [userProfilePhoto, setUserProfilePhoto] = useState(
    require("../assets/images/profile-user-pngrepo-com.png")
  );
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  function handleClick() {
    const auth = getAuth();
    signOut(auth).catch((error) => {
      console.error(`Sign-out Error: ${error}`);
    });
  }

  useEffect(() => {
    function handleAuthStateChange() {
      if (getAuth().currentUser) {
        setUserProfilePhoto(getAuth().currentUser.photoURL);
        setUserName(getAuth().currentUser.displayName);
        setUserEmail(getAuth().currentUser.email);
      }
    }
    onAuthStateChanged(getAuth(), handleAuthStateChange);
  }, []);

  return (
    <div id="profile-menu">
      <section className="user-info-section">
        <span>
          <img alt="" src={userProfilePhoto} className="menu-profile-image" />
        </span>
        <span className="user-info-span">
          <p className="username" title={userName}>
            {userName}
          </p>
          <p className="user-email" title={userEmail}>
            {userEmail}
          </p>
          <div>
            <a
              href="https://myaccount.google.com/"
              title="Manage your Google Account"
              className="manage-account-link"
            >
              Manage your Google Account
            </a>
          </div>
        </span>
      </section>
      <section id="profile-menu-links">
        <section>
          <button className="menu-item-btn" onClick={handleClick}>
            <MenuItemFactory
              divName="wide-sidebar-item-div"
              iconSpanName="wide-sidebar-icon-span"
              icon={<MdOutlineLogin className="menu-item-svg-icon" />}
              text="Sign out"
            />
          </button>
        </section>
        <section>
          <a
            className="menu-item-link"
            href="https://www.youtube.com/paid_memberships"
          >
            <MenuItemFactory
              divName="wide-sidebar-item-div"
              iconSpanName="wide-sidebar-icon-span"
              icon={<BiDollarCircle className="menu-item-svg-icon" />}
              text="Purchases and memberships"
            />
          </a>
          <a
            className="menu-item-link"
            href="https://myaccount.google.com/u/0/yourdata/youtube"
          >
            <MenuItemFactory
              divName="wide-sidebar-item-div"
              iconSpanName="wide-sidebar-icon-span"
              icon={<RiShieldUserLine className="menu-item-svg-icon" />}
              text="Your data in YouTube"
            />
          </a>
        </section>
        <section>
          <a
            className="menu-item-link"
            href="https://www.youtube.com/account"
            title="Settings"
          >
            <MenuItemFactory
              divName="wide-sidebar-item-div"
              iconSpanName="wide-sidebar-icon-span"
              icon={<IoSettingsOutline className="menu-item-svg-icon" />}
              text="Settings"
            />
          </a>
        </section>
        <section>
          <button className="menu-item-btn button" title="Help">
            <MenuItemFactory
              divName="wide-sidebar-item-div"
              iconSpanName="wide-sidebar-icon-span"
              icon={<IoHelpCircleOutline className="menu-item-svg-icon" />}
              text="Help"
            />
          </button>
          <button className="menu-item-btn button" title="Send feedback">
            <MenuItemFactory
              divName="wide-sidebar-item-div"
              iconSpanName="wide-sidebar-icon-span"
              icon={<MdOutlineFeedback className="menu-item-svg-icon" />}
              text="Send feedback"
            />
          </button>
        </section>
      </section>
    </div>
  );
}

export default ProfileMenu;
