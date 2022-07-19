import { CgProfile } from "react-icons/cg";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import "../firebase-config";

function SignInButton() {
  async function handleClick() {
    const auth = getAuth();
    const authProvider = new GoogleAuthProvider();
    const signInResponse = await signInWithPopup(auth, authProvider);
    const userInfo = signInResponse.user;
    console.log(userInfo);
  }

  return (
    <button className="sign-in-btn" onClick={handleClick}>
      <CgProfile className="sign-in-icon" />
      <span className="sign-in-text">Sign in</span>
    </button>
  );
}

export default SignInButton;
