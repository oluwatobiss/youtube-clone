import { ReactComponent as YouTubeShortsIcon } from "../assets/images/youtube-shorts.svg";
import AsideNavItemFactory from "./AsideNavItemFactory";
import {
  MdHomeFilled,
  MdOutlineExplore,
  MdOutlineSubscriptions,
  MdOutlineVideoLibrary,
  MdOutlineHistory,
} from "react-icons/md";
import "../styles/SlimSideBar.css";

function WideSideBar() {
  return (
    <div id="slim-sidebar" className="hide-slim-sidebar">
      <a
        className="slim-nav-link active"
        href="https://www.youtube.com/"
        title="Home"
      >
        <AsideNavItemFactory
          divName="slim-sidebar-item-div"
          iconSpanName="slim-sidebar-icon-span"
          icon={<MdHomeFilled className="aside-svg-icon" />}
          text="Home"
        />
      </a>
      <a
        className="slim-nav-link"
        href="https://www.youtube.com/feed/explore"
        title="Explore"
      >
        <AsideNavItemFactory
          divName="slim-sidebar-item-div"
          iconSpanName="slim-sidebar-icon-span"
          icon={<MdOutlineExplore className="aside-svg-icon" />}
          text="Explore"
        />
      </a>
      <a
        className="slim-nav-link"
        href="https://www.youtube.com/shorts/VjjpQPyfZ8Q"
        title="Shorts"
      >
        <AsideNavItemFactory
          divName="slim-sidebar-item-div"
          iconSpanName="slim-sidebar-icon-span"
          icon={
            <YouTubeShortsIcon className="aside-svg-icon youtube-shorts-icon" />
          }
          text="Shorts"
        />
      </a>
      <a
        className="slim-nav-link"
        href="https://www.youtube.com/feed/subscriptions"
        title="Subscriptions"
      >
        <AsideNavItemFactory
          divName="slim-sidebar-item-div"
          iconSpanName="slim-sidebar-icon-span"
          icon={<MdOutlineSubscriptions className="aside-svg-icon" />}
          text="Subscriptions"
        />
      </a>
      <a
        className="slim-nav-link"
        href="https://www.youtube.com/feed/library"
        title="Library"
      >
        <AsideNavItemFactory
          divName="slim-sidebar-item-div"
          iconSpanName="slim-sidebar-icon-span"
          icon={<MdOutlineVideoLibrary className="aside-svg-icon" />}
          text="Library"
        />
      </a>
      <a
        className="slim-nav-link"
        href="https://www.youtube.com/feed/history"
        title="History"
      >
        <AsideNavItemFactory
          divName="slim-sidebar-item-div"
          iconSpanName="slim-sidebar-icon-span"
          icon={<MdOutlineHistory className="aside-svg-icon" />}
          text="History"
        />
      </a>
    </div>
  );
}

export default WideSideBar;
