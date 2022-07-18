import WideSideBar from "./WideSideBar";
import SlimSideBar from "./SlimSideBar";
import "../styles/SideBar.css";

function Sidebar() {
  return (
    <aside>
      <WideSideBar />
      <SlimSideBar />
    </aside>
  );
}

export default Sidebar;
