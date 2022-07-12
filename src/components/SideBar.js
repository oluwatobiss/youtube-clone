import { ReactComponent as YouTubeShortsIcon } from "../assets/images/youtube-shorts.svg";
import AsideNavItemFactory from "./AsideNavItemFactory";
import SignInButton from "./SignInButton";
import {
  MdHomeFilled,
  MdOutlineExplore,
  MdOutlineSubscriptions,
  MdOutlineVideoLibrary,
  MdOutlineHistory,
} from "react-icons/md";

function Sidebar() {
  return (
    <aside>
      <section>
        <AsideNavItemFactory icon={<MdHomeFilled />} name="Home" />
        <AsideNavItemFactory icon={<MdOutlineExplore />} name="Explore" />
        <AsideNavItemFactory
          icon={<YouTubeShortsIcon className="youtube-shorts-icon" />}
          name="Shorts"
        />
        <AsideNavItemFactory
          icon={<MdOutlineSubscriptions />}
          name="Subscriptions"
        />
      </section>
      <section>
        <AsideNavItemFactory icon={<MdOutlineVideoLibrary />} name="Library" />
        <AsideNavItemFactory icon={<MdOutlineHistory />} name="History" />
      </section>
      <section>
        <span>Sign in to like videos, comment, and subscribe.</span>
        <SignInButton />
      </section>
    </aside>
  );
}

export default Sidebar;
