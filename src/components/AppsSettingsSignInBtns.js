import SignInButton from "./SignInButton";
import { BsGrid3X3Gap, BsThreeDotsVertical } from "react-icons/bs";

function AppsSettingsSignInBtns() {
  return (
    <div id="apps-settings-sign-in-btns" className="header-right-section-div">
      <button className="header-right-section-btn" title="YouTube apps">
        <BsGrid3X3Gap />
      </button>
      <button className="header-right-section-btn" title="Settings">
        <BsThreeDotsVertical />
      </button>
      <SignInButton />
    </div>
  );
}

export default AppsSettingsSignInBtns;
