import { IoMdNotificationsOutline } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";

function CreateNotificationsProfileBtns() {
  function handleClick(e) {
    const profileMenu = document.getElementById("profile-menu");

    // Get mouse's X-position relative to the viewport:
    const { clientX: mouseXViewportPosition } = e;

    profileMenu.style.left = `${mouseXViewportPosition - 320}px`;
    profileMenu.classList.toggle("visible");
  }

  return (
    <div
      id="create-notifications-profile-btns"
      className="header-right-section-div"
    >
      <button className="header-right-section-btn" title="Create">
        <RiVideoAddLine />
      </button>
      <button className="header-right-section-btn" title="Notifications">
        <IoMdNotificationsOutline />
      </button>
      <button
        id="profile-btn"
        className="header-right-section-btn profile-btn"
        onClick={handleClick}
      >
        <img
          alt="Profile"
          src={require("../assets/images/profile-user-pngrepo-com.png")}
          id="header-profile-image"
        />
      </button>
    </div>
  );
}

export default CreateNotificationsProfileBtns;
