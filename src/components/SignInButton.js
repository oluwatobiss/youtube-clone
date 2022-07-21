import { CgProfile } from "react-icons/cg";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

function SignInButton() {
  async function handleClick() {
    const auth = getAuth();
    const authProvider = new GoogleAuthProvider();
    signInWithPopup(auth, authProvider).catch(
      (error) => `Sign-in Error: ${error}`
    );
  }

  return (
    <button className="sign-in-btn" onClick={handleClick}>
      <CgProfile className="sign-in-icon" />
      <span className="sign-in-text">Sign in</span>
    </button>
  );
}

export default SignInButton;
