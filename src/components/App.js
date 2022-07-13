import Header from "./Header";
import HomepageVideoGallery from "./HomepageVideoGallery";
import Sidebar from "./SideBar";
import "../styles/App.css";

function App() {
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
