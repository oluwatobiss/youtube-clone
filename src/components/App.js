import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Header from "./Header";
import HomepageVideoGallery from "./HomepageVideoGallery";
import Sidebar from "./SideBar";
import "../firebase-config";
import "../styles/App.css";

function App() {
  useEffect(() => {
    // Listen and handle changes to the user's authentication:
    onAuthStateChanged(getAuth(), handleAuthStateChange);

    // Triggers when the auth state change for instance when the user signs-in or signs-out.
    function handleAuthStateChange(userInfo) {
      const createNotificationsProfileBtns = document.getElementById(
        "create-notifications-profile-btns"
      );
      const appsSettingsSignInBtns = document.getElementById(
        "apps-settings-sign-in-btns"
      );
      const sidebarSignInSection = document.getElementById(
        "sidebar-sign-in-section"
      );
      const profileImage = document.getElementById("profile-image");

      if (userInfo) {
        console.log(userInfo);
        // User is signed in!
        const profilePicUrl =
          userInfo.photoURL ||
          require("../assets/images/profile-user-pngrepo-com.png");
        const userName = userInfo.displayName;

        profileImage.src = profilePicUrl;
        appsSettingsSignInBtns.style.display = "none";
        sidebarSignInSection.style.display = "none";
        createNotificationsProfileBtns.style.display = "flex";

        console.log(userName);
      } else {
        // User is signed out!
        createNotificationsProfileBtns.style.display = "none";
        appsSettingsSignInBtns.style.display = "flex";
        sidebarSignInSection.style.display = "block";
      }
    }
  }, []);

  return (
    <>
      <Header />
      <main>
        <Sidebar />
        <HomepageVideoGallery />
      </main>
    </>
  );
}

export default App;
