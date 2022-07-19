import { RiVideoAddLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";

function CreateNotificationsProfileBtns() {
  return (
    <div className="header-right-section-div create-notifications-profile-btns">
      <button className="header-right-section-btn" title="Create">
        <RiVideoAddLine />
      </button>
      <button className="header-right-section-btn" title="Notifications">
        <IoMdNotificationsOutline />
      </button>
      <button className="header-right-section-btn profile-btn">
        <IoMdNotificationsOutline />
      </button>
    </div>
  );
}

export default CreateNotificationsProfileBtns;
