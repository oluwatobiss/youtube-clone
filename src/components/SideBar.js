import { MdHomeFilled } from "react-icons/md";
import AsideNavItemFactory from "./AsideNavItemFactory";

function Sidebar() {
  return (
    <aside>
      <AsideNavItemFactory icon={<MdHomeFilled />} name="Home" />
    </aside>
  );
}

export default Sidebar;
