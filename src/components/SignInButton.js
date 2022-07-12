import { CgProfile } from "react-icons/cg";

function SignInButton() {
  return (
    <button className="sign-in-btn">
      <CgProfile className="profile-icon" />
      <span className="sign-in-text">SIGN IN</span>
    </button>
  );
}

export default SignInButton;
