import { getAuth } from "firebase/auth";
import { MdOutlineLogin, MdOutlineFeedback } from "react-icons/md";
import { BiDollarCircle } from "react-icons/bi";
import { RiShieldUserLine } from "react-icons/ri";
import { IoSettingsOutline, IoHelpCircleOutline } from "react-icons/io5";
import MenuItemFactory from "./MenuItemFactory";

function ProfileMenu() {
  const userProfilePhoto = getAuth().currentUser.photoURL;
  const userName = getAuth().currentUser.displayName;
  const userEmail = getAuth().currentUser.email;

  return (
    <div id="profile-menu">
      <section className="user-info-section">
        <span>
          <img alt="" src={userProfilePhoto} className="profile-image" />
        </span>
        <span className="user-info-span">
          <h3 title={userName}>{userName}</h3>
          <p title={userEmail}>{userEmail}</p>
          <div>
            <a
              href="https://myaccount.google.com/"
              title="Manage your Google Account"
              className="channel-link"
            >
              Manage your Google Account
            </a>
          </div>
        </span>
      </section>
      <section>
        <button className="menu-item-btn">
          <MenuItemFactory
            divName="profile-menu-item-div"
            iconSpanName="profile-icon-span"
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
            divName="profile-menu-item-div"
            iconSpanName="profile-icon-span"
            icon={<BiDollarCircle className="menu-item-svg-icon" />}
            text="Purchases and memberships"
          />
        </a>
        <a
          className="menu-item-link"
          href="https://myaccount.google.com/u/0/yourdata/youtube"
        >
          <MenuItemFactory
            divName="profile-menu-item-div"
            iconSpanName="profile-icon-span"
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
            divName="profile-menu-item-div"
            iconSpanName="profile-icon-span"
            icon={<IoSettingsOutline className="menu-item-svg-icon" />}
            text="Settings"
          />
        </a>
      </section>
      <section>
        <button className="menu-item-link button" title="Help">
          <MenuItemFactory
            divName="profile-menu-item-div"
            iconSpanName="profile-icon-span"
            icon={<IoHelpCircleOutline className="menu-item-svg-icon" />}
            text="Help"
          />
        </button>
        <button className="menu-item-link button" title="Send feedback">
          <MenuItemFactory
            divName="profile-menu-item-div"
            iconSpanName="profile-icon-span"
            icon={<MdOutlineFeedback className="menu-item-svg-icon" />}
            text="Send feedback"
          />
        </button>
      </section>
    </div>
  );
}

export default ProfileMenu;
