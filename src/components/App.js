import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import ProfileMenu from "./ProfileMenu";
import Header from "./Header";
import HomepageVideoGallery from "./HomepageVideoGallery";
import Sidebar from "./SideBar";
import "../firebase-config";
import "../styles/App.css";

function App() {
  function closeProfileMenu() {
    const profileMenu = document.getElementById("profile-menu");
    const profileMenuIsActive = [...profileMenu.classList].includes("visible");
    if (profileMenuIsActive) {
      profileMenu.classList.remove("visible");
    }
  }

  function handleClick() {
    closeProfileMenu();
  }

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
      const profileImage = document.getElementById("header-profile-image");
      const watchLaterSidebarLink = document.getElementById(
        "watch-later-sidebar-link"
      );
      const likedVideosSidebarLink = document.getElementById(
        "liked-videos-sidebar-link"
      );

      if (userInfo) {
        // User is signed in!
        const defaultProfilePic = require("../assets/images/profile-user-pngrepo-com.png");
        const profilePicUrl = userInfo.photoURL || defaultProfilePic;

        profileImage.src = profilePicUrl;
        appsSettingsSignInBtns.style.display = "none";
        sidebarSignInSection.style.display = "none";
        createNotificationsProfileBtns.style.display = "flex";
        watchLaterSidebarLink.style.display = "block";
        likedVideosSidebarLink.style.display = "block";
      } else {
        // User is signed out!
        closeProfileMenu();
        createNotificationsProfileBtns.style.display = "none";
        appsSettingsSignInBtns.style.display = "flex";
        sidebarSignInSection.style.display = "block";
        watchLaterSidebarLink.style.display = "none";
        likedVideosSidebarLink.style.display = "none";
      }
    }
  }, []);

  useEffect(() => {
    function handleKeydown(e) {
      if (e.key === "Escape") {
        closeProfileMenu();
      }
    }
    document.addEventListener("keydown", handleKeydown);
    return () => {
      document.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  return (
    <>
      <ProfileMenu />
      <Header />
      <main onClick={handleClick}>
        <Sidebar />
        <HomepageVideoGallery />
      </main>
    </>
  );
}

export default App;
