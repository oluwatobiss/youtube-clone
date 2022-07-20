import { HiOutlineMusicNote } from "react-icons/hi";
import { ImTrophy, ImNewspaper } from "react-icons/im";
import { SiYoutubegaming, SiYoutubemusic } from "react-icons/si";
import {
  IoRadioOutline,
  IoSettingsOutline,
  IoHelpCircleOutline,
} from "react-icons/io5";
import { BiMask, BiPlusCircle } from "react-icons/bi";
import { AiFillYoutube, AiOutlineLike } from "react-icons/ai";
import { BsClock } from "react-icons/bs";
import {
  MdHomeFilled,
  MdOutlineExplore,
  MdOutlineSubscriptions,
  MdOutlineVideoLibrary,
  MdOutlineHistory,
  MdOutlineFlag,
  MdOutlineFeedback,
} from "react-icons/md";
import { ReactComponent as YouTubeShortsIcon } from "../assets/images/youtube-shorts.svg";
import { ReactComponent as YouTubeKidsIcon } from "../assets/images/youtube-kids.svg";
import { ReactComponent as YouTubeTVIcon } from "../assets/images/youtube-tv.svg";
import MenuItemFactory from "./MenuItemFactory";
import SignInButton from "./SignInButton";
import "../styles/WideSideBar.css";

function WideSideBar() {
  return (
    <div id="wide-sidebar">
      <section>
        <button className="menu-item-btn active" title="Home">
          <MenuItemFactory
            divName="wide-sidebar-item-div"
            iconSpanName="wide-sidebar-icon-span"
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
            divName="wide-sidebar-item-div"
            iconSpanName="wide-sidebar-icon-span"
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
            divName="wide-sidebar-item-div"
            iconSpanName="wide-sidebar-icon-span"
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
            divName="wide-sidebar-item-div"
            iconSpanName="wide-sidebar-icon-span"
            icon={<MdOutlineSubscriptions className="menu-item-svg-icon" />}
            text="Subscriptions"
          />
        </a>
      </section>
      <section>
        <a
          className="menu-item-link"
          href="https://www.youtube.com/feed/library"
          title="Library"
        >
          <MenuItemFactory
            divName="wide-sidebar-item-div"
            iconSpanName="wide-sidebar-icon-span"
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
            divName="wide-sidebar-item-div"
            iconSpanName="wide-sidebar-icon-span"
            icon={<MdOutlineHistory className="menu-item-svg-icon" />}
            text="History"
          />
        </a>
        <a
          id="watch-later-sidebar-link"
          className="menu-item-link"
          href="https://www.youtube.com/playlist?list=WL"
          title="Watch Later"
        >
          <MenuItemFactory
            divName="wide-sidebar-item-div"
            iconSpanName="wide-sidebar-icon-span"
            icon={<BsClock className="menu-item-svg-icon" />}
            text="Watch Later"
          />
        </a>
        <a
          id="liked-videos-sidebar-link"
          className="menu-item-link"
          href="https://www.youtube.com/playlist?list=LL"
          title="Liked videos"
        >
          <MenuItemFactory
            divName="wide-sidebar-item-div"
            iconSpanName="wide-sidebar-icon-span"
            icon={<AiOutlineLike className="menu-item-svg-icon" />}
            text="Liked videos"
          />
        </a>
      </section>
      <section id="sidebar-sign-in-section" className="sign-in-section">
        <p>Sign in to like videos, comment, and subscribe.</p>
        <SignInButton />
      </section>
      <section>
        <h3>Best of YouTube</h3>
        <span>
          <a
            className="menu-item-link"
            href="https://www.youtube.com/channel/UC-9-kyTW8ZkZNDHQJ6FgpwQ"
            title="Music"
          >
            <MenuItemFactory
              divName="wide-sidebar-item-div"
              iconSpanName="wide-sidebar-icon-span"
              icon={<HiOutlineMusicNote className="menu-item-svg-icon" />}
              text="Music"
              shadedIcon="shaded-icon-span"
            />
          </a>
        </span>
        <span>
          <a
            className="menu-item-link"
            href="https://www.youtube.com/channel/UCEgdi0XIXXZ-qJOFPf4JSKw"
            title="Sports"
          >
            <MenuItemFactory
              divName="wide-sidebar-item-div"
              iconSpanName="wide-sidebar-icon-span"
              icon={<ImTrophy className="menu-item-svg-icon" />}
              text="Sports"
              shadedIcon="shaded-icon-span"
            />
          </a>
        </span>
        <span>
          <a
            className="menu-item-link"
            href="https://www.youtube.com/gaming"
            title="Gaming"
          >
            <MenuItemFactory
              divName="wide-sidebar-item-div"
              iconSpanName="wide-sidebar-icon-span"
              icon={<SiYoutubegaming className="menu-item-svg-icon" />}
              text="Gaming"
              shadedIcon="shaded-icon-span"
            />
          </a>
        </span>
        <span>
          <a
            className="menu-item-link"
            href="https://www.youtube.com/channel/UCYfdidRxbB8Qhf0Nx7ioOYw"
            title="News"
          >
            <MenuItemFactory
              divName="wide-sidebar-item-div"
              iconSpanName="wide-sidebar-icon-span"
              icon={<ImNewspaper className="menu-item-svg-icon" />}
              text="News"
              shadedIcon="shaded-icon-span"
            />
          </a>
        </span>
        <span>
          <a
            className="menu-item-link"
            href="https://www.youtube.com/channel/UC4R8DWoMoI7CAwX8_LjQHig"
            title="Live"
          >
            <MenuItemFactory
              divName="wide-sidebar-item-div"
              iconSpanName="wide-sidebar-icon-span"
              icon={<IoRadioOutline className="menu-item-svg-icon" />}
              text="Live"
              shadedIcon="shaded-icon-span"
            />
          </a>
        </span>
        <span>
          <a
            className="menu-item-link"
            href="https://www.youtube.com/channel/UCzuqhhs6NWbgTzMuM09WKDQ"
            title="360° Video"
          >
            <MenuItemFactory
              divName="wide-sidebar-item-div"
              iconSpanName="wide-sidebar-icon-span"
              icon={<BiMask className="menu-item-svg-icon" />}
              text="360° Video"
              shadedIcon="shaded-icon-span"
            />
          </a>
        </span>
      </section>
      <section>
        <a
          className="menu-item-link"
          href="https://www.youtube.com/feed/guide_builder"
          title="Browse channels"
        >
          <MenuItemFactory
            divName="wide-sidebar-item-div"
            iconSpanName="wide-sidebar-icon-span"
            icon={<BiPlusCircle className="menu-item-svg-icon" />}
            text="Browse channels"
          />
        </a>
      </section>
      <section>
        <h3>More from YouTube</h3>
        <a
          className="menu-item-link"
          href="https://www.youtube.com/premium"
          title="YouTube Premium"
        >
          <MenuItemFactory
            divName="wide-sidebar-item-div"
            iconSpanName="wide-sidebar-icon-span"
            icon={
              <AiFillYoutube className="menu-item-svg-icon youtube-premium-icon" />
            }
            text="YouTube Premium"
          />
        </a>
        <a
          className="menu-item-link"
          href="https://music.youtube.com/"
          title="YouTube Music"
        >
          <MenuItemFactory
            divName="wide-sidebar-item-div"
            iconSpanName="wide-sidebar-icon-span"
            icon={
              <SiYoutubemusic className="menu-item-svg-icon youtube-music-icon" />
            }
            text="YouTube Music"
          />
        </a>
        <a
          className="menu-item-link"
          href="https://www.youtubekids.com/?source=youtube_web"
          title="YouTube Kids"
        >
          <MenuItemFactory
            divName="wide-sidebar-item-div"
            iconSpanName="wide-sidebar-icon-span"
            icon={
              <YouTubeKidsIcon className="menu-item-svg-icon youtube-kids-icon" />
            }
            text="YouTube Kids"
          />
        </a>
        <a
          className="menu-item-link"
          href="https://tv.youtube.com/?utm_source=youtube_web&utm_medium=ep&utm_campaign=home&ve=34273"
          title="YouTube TV"
        >
          <MenuItemFactory
            divName="wide-sidebar-item-div"
            iconSpanName="wide-sidebar-icon-span"
            icon={
              <YouTubeTVIcon className="menu-item-svg-icon youtube-tv-icon" />
            }
            text="YouTube TV"
          />
        </a>
      </section>
      <section>
        <a
          className="menu-item-link"
          href="https://www.youtube.com/account"
          title="Settings"
        >
          <MenuItemFactory
            divName="wide-sidebar-item-div"
            iconSpanName="wide-sidebar-icon-span"
            icon={<IoSettingsOutline className="menu-item-svg-icon" />}
            text="Settings"
          />
        </a>
        <a
          className="menu-item-link"
          href="https://www.youtube.com/reporthistory"
          title="Report history"
        >
          <MenuItemFactory
            divName="wide-sidebar-item-div"
            iconSpanName="wide-sidebar-icon-span"
            icon={<MdOutlineFlag className="menu-item-svg-icon" />}
            text="Report history"
          />
        </a>
        <button className="menu-item-btn" title="Help">
          <MenuItemFactory
            divName="wide-sidebar-item-div"
            iconSpanName="wide-sidebar-icon-span"
            icon={<IoHelpCircleOutline className="menu-item-svg-icon" />}
            text="Help"
          />
        </button>
        <button className="menu-item-btn" title="Send feedback">
          <MenuItemFactory
            divName="wide-sidebar-item-div"
            iconSpanName="wide-sidebar-icon-span"
            icon={<MdOutlineFeedback className="menu-item-svg-icon" />}
            text="Send feedback"
          />
        </button>
      </section>
      <footer>
        <div className="footer-primary-links-div">
          <a href="https://www.youtube.com/about/">About</a>
          <a href="https://www.youtube.com/about/press/">Press</a>
          <a href="https://www.youtube.com/about/copyright/">Copyright</a>
          <a href="https://www.youtube.com/t/contact_us/">Contact us</a>
          <a href="https://www.youtube.com/creators/">Creators</a>
          <a href="https://www.youtube.com/ads/">Advertise</a>
          <a href="https://developers.google.com/youtube">Developers</a>
        </div>
        <div className="footer-secondary-links-div">
          <a href="https://www.youtube.com/t/terms">Terms</a>
          <a href="https://www.youtube.com/t/privacy">Privacy</a>
          <a href="https://www.youtube.com/about/policies/">Policy & Safety</a>
          <a href="https://www.youtube.com/howyoutubeworks?utm_campaign=ytgen&utm_source=ythp&utm_medium=LeftNav&utm_content=txt&u=https%3A%2F%2Fwww.youtube.com%2Fhowyoutubeworks%3Futm_source%3Dythp%26utm_medium%3DLeftNav%26utm_campaign%3Dytgen">
            How YouTube works
          </a>
          <a href="https://www.youtube.com/new">Test new features</a>
        </div>
        <div className="footer-copyright-div">{`© ${new Date().getFullYear()} Google LLC`}</div>
      </footer>
    </div>
  );
}

export default WideSideBar;
