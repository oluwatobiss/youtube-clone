import { ReactComponent as YouTubeShortsIcon } from "../assets/images/youtube-shorts.svg";
import AsideNavItemFactory from "./AsideNavItemFactory";
import {
  MdHomeFilled,
  MdOutlineExplore,
  MdOutlineSubscriptions,
  MdOutlineVideoLibrary,
} from "react-icons/md";
import "../styles/WideSideBar.css";

function WideSideBar() {
  return (
    <div id="slim-sidebar">
      <section>
        <a
          className="nav-link active"
          href="https://www.youtube.com/"
          title="Home"
        >
          <AsideNavItemFactory
            classname="slim-sidebar-item-div"
            icon={<MdHomeFilled className="aside-svg-icon" />}
            text="Home"
          />
        </a>
        <a
          className="nav-link"
          href="https://www.youtube.com/feed/explore"
          title="Explore"
        >
          <AsideNavItemFactory
            classname="slim-sidebar-item-div"
            icon={<MdOutlineExplore className="aside-svg-icon" />}
            text="Explore"
          />
        </a>
        <a
          className="nav-link"
          href="https://www.youtube.com/shorts/VjjpQPyfZ8Q"
          title="Shorts"
        >
          <AsideNavItemFactory
            classname="slim-sidebar-item-div"
            icon={
              <YouTubeShortsIcon className="aside-svg-icon youtube-shorts-icon" />
            }
            text="Shorts"
          />
        </a>
        <a
          className="nav-link"
          href="https://www.youtube.com/feed/subscriptions"
          title="Subscriptions"
        >
          <AsideNavItemFactory
            classname="slim-sidebar-item-div"
            icon={<MdOutlineSubscriptions className="aside-svg-icon" />}
            text="Subscriptions"
          />
        </a>
      </section>
      <section>
        <a
          className="nav-link"
          href="https://www.youtube.com/feed/library"
          title="Library"
        >
          <AsideNavItemFactory
            classname="slim-sidebar-item-div"
            icon={<MdOutlineVideoLibrary className="aside-svg-icon" />}
            text="Library"
          />
        </a>
      </section>
    </div>
  );
}

export default WideSideBar;
