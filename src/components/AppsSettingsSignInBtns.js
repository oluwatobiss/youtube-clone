import SignInButton from "./SignInButton";
import { BsGrid3X3Gap, BsThreeDotsVertical } from "react-icons/bs";

function AppsSettingsSignInBtns() {
  return (
    <>
      <button className="youtube-apps-btn" title="YouTube apps">
        <BsGrid3X3Gap />
      </button>
      <button className="settings-btn" title="Settings">
        <BsThreeDotsVertical />
      </button>
      <SignInButton />
    </>
  );
}

export default AppsSettingsSignInBtns;
