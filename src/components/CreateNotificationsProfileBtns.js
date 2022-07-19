import { RiVideoAddLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";

function CreateNotificationsProfileBtns() {
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
      <button className="header-right-section-btn profile-btn">
        <img
          alt="Profile"
          src={require("../assets/images/profile-user-pngrepo-com.png")}
          id="profile-image"
        />
      </button>
    </div>
  );
}

export default CreateNotificationsProfileBtns;
