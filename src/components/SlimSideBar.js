import {
  MdHomeFilled,
  MdOutlineExplore,
  MdOutlineSubscriptions,
  MdOutlineVideoLibrary,
  MdOutlineHistory,
} from "react-icons/md";
import { ReactComponent as YouTubeShortsIcon } from "../assets/images/youtube-shorts.svg";
import MenuItemFactory from "./MenuItemFactory";
import "../styles/SlimSideBar.css";

function WideSideBar() {
  return (
    <div id="slim-sidebar" className="hide-slim-sidebar">
      <button className="menu-item-btn" title="Home">
        <MenuItemFactory
          divName="slim-sidebar-item-div"
          iconSpanName="slim-sidebar-icon-span"
          icon={<MdHomeFilled className="menu-item-svg-icon" />}
          text="Home"
        />
      </button>
      <a
        className="menu-item-link"
        href="https://www.youtube.com/feed/explore"
        title="Explore"
      >
        <MenuItemFactory
          divName="slim-sidebar-item-div"
          iconSpanName="slim-sidebar-icon-span"
          icon={<MdOutlineExplore className="menu-item-svg-icon" />}
          text="Explore"
        />
      </a>
      <a
        className="menu-item-link"
        href="https://www.youtube.com/shorts/VjjpQPyfZ8Q"
        title="Shorts"
      >
        <MenuItemFactory
          divName="slim-sidebar-item-div"
          iconSpanName="slim-sidebar-icon-span"
          icon={
            <YouTubeShortsIcon className="menu-item-svg-icon youtube-shorts-icon" />
          }
          text="Shorts"
        />
      </a>
      <a
        className="menu-item-link"
        href="https://www.youtube.com/feed/subscriptions"
        title="Subscriptions"
      >
        <MenuItemFactory
          divName="slim-sidebar-item-div"
          iconSpanName="slim-sidebar-icon-span"
          icon={<MdOutlineSubscriptions className="menu-item-svg-icon" />}
          text="Subscriptions"
        />
      </a>
      <a
        className="menu-item-link"
        href="https://www.youtube.com/feed/library"
        title="Library"
      >
        <MenuItemFactory
          divName="slim-sidebar-item-div"
          iconSpanName="slim-sidebar-icon-span"
          icon={<MdOutlineVideoLibrary className="menu-item-svg-icon" />}
          text="Library"
        />
      </a>
      <a
        className="menu-item-link"
        href="https://www.youtube.com/feed/history"
        title="History"
      >
        <MenuItemFactory
          divName="slim-sidebar-item-div"
          iconSpanName="slim-sidebar-icon-span"
          icon={<MdOutlineHistory className="menu-item-svg-icon" />}
          text="History"
        />
      </a>
    </div>
  );
}

export default WideSideBar;
