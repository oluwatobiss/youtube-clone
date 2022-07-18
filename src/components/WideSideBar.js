import { ReactComponent as YouTubeShortsIcon } from "../assets/images/youtube-shorts.svg";
import { ReactComponent as YouTubeKidsIcon } from "../assets/images/youtube-kids.svg";
import { ReactComponent as YouTubeTVIcon } from "../assets/images/youtube-tv.svg";
import AsideNavItemFactory from "./AsideNavItemFactory";
import SignInButton from "./SignInButton";
import { HiOutlineMusicNote } from "react-icons/hi";
import { ImTrophy, ImNewspaper } from "react-icons/im";
import { SiYoutubegaming, SiYoutubemusic } from "react-icons/si";
import {
  IoRadioOutline,
  IoSettingsOutline,
  IoHelpCircleOutline,
} from "react-icons/io5";
import { BiMask, BiPlusCircle } from "react-icons/bi";
import { AiFillYoutube } from "react-icons/ai";
import {
  MdHomeFilled,
  MdOutlineExplore,
  MdOutlineSubscriptions,
  MdOutlineVideoLibrary,
  MdOutlineHistory,
  MdOutlineFlag,
  MdOutlineFeedback,
} from "react-icons/md";
import "../styles/WideSideBar.css";

function WideSideBar() {
  return (
    <div id="wide-sidebar">
      <section>
        <button className="wide-nav-link button active" title="Home">
          <AsideNavItemFactory
            divName="wide-sidebar-item-div"
            iconSpanName="wide-sidebar-icon-span"
            icon={<MdHomeFilled className="aside-svg-icon" />}
            text="Home"
          />
        </button>
        <a
          className="wide-nav-link"
          href="https://www.youtube.com/feed/explore"
          title="Explore"
        >
          <AsideNavItemFactory
            divName="wide-sidebar-item-div"
            iconSpanName="wide-sidebar-icon-span"
            icon={<MdOutlineExplore className="aside-svg-icon" />}
            text="Explore"
          />
        </a>
        <a
          className="wide-nav-link"
          href="https://www.youtube.com/shorts/VjjpQPyfZ8Q"
          title="Shorts"
        >
          <AsideNavItemFactory
            divName="wide-sidebar-item-div"
            iconSpanName="wide-sidebar-icon-span"
            icon={
              <YouTubeShortsIcon className="aside-svg-icon youtube-shorts-icon" />
            }
            text="Shorts"
          />
        </a>
        <a
          className="wide-nav-link"
          href="https://www.youtube.com/feed/subscriptions"
          title="Subscriptions"
        >
          <AsideNavItemFactory
            divName="wide-sidebar-item-div"
            iconSpanName="wide-sidebar-icon-span"
            icon={<MdOutlineSubscriptions className="aside-svg-icon" />}
            text="Subscriptions"
          />
        </a>
      </section>
      <section>
        <a
          className="wide-nav-link"
          href="https://www.youtube.com/feed/library"
          title="Library"
        >
          <AsideNavItemFactory
            divName="wide-sidebar-item-div"
            iconSpanName="wide-sidebar-icon-span"
            icon={<MdOutlineVideoLibrary className="aside-svg-icon" />}
            text="Library"
          />
        </a>
        <a
          className="wide-nav-link"
          href="https://www.youtube.com/feed/history"
          title="History"
        >
          <AsideNavItemFactory
            divName="wide-sidebar-item-div"
            iconSpanName="wide-sidebar-icon-span"
            icon={<MdOutlineHistory className="aside-svg-icon" />}
            text="History"
          />
        </a>
      </section>
      <section className="sign-in-section">
        <p>Sign in to like videos, comment, and subscribe.</p>
        <SignInButton />
      </section>
      <section>
        <h3>Best of YouTube</h3>
        <span>
          <a
            className="wide-nav-link"
            href="https://www.youtube.com/channel/UC-9-kyTW8ZkZNDHQJ6FgpwQ"
            title="Music"
          >
            <AsideNavItemFactory
              divName="wide-sidebar-item-div"
              iconSpanName="wide-sidebar-icon-span"
              icon={<HiOutlineMusicNote className="aside-svg-icon" />}
              text="Music"
              shadedIcon="shaded-icon-span"
            />
          </a>
        </span>
        <span>
          <a
            className="wide-nav-link"
            href="https://www.youtube.com/channel/UCEgdi0XIXXZ-qJOFPf4JSKw"
            title="Sports"
          >
            <AsideNavItemFactory
              divName="wide-sidebar-item-div"
              iconSpanName="wide-sidebar-icon-span"
              icon={<ImTrophy className="aside-svg-icon" />}
              text="Sports"
              shadedIcon="shaded-icon-span"
            />
          </a>
        </span>
        <span>
          <a
            className="wide-nav-link"
            href="https://www.youtube.com/gaming"
            title="Gaming"
          >
            <AsideNavItemFactory
              divName="wide-sidebar-item-div"
              iconSpanName="wide-sidebar-icon-span"
              icon={<SiYoutubegaming className="aside-svg-icon" />}
              text="Gaming"
              shadedIcon="shaded-icon-span"
            />
          </a>
        </span>
        <span>
          <a
            className="wide-nav-link"
            href="https://www.youtube.com/channel/UCYfdidRxbB8Qhf0Nx7ioOYw"
            title="News"
          >
            <AsideNavItemFactory
              divName="wide-sidebar-item-div"
              iconSpanName="wide-sidebar-icon-span"
              icon={<ImNewspaper className="aside-svg-icon" />}
              text="News"
              shadedIcon="shaded-icon-span"
            />
          </a>
        </span>
        <span>
          <a
            className="wide-nav-link"
            href="https://www.youtube.com/channel/UC4R8DWoMoI7CAwX8_LjQHig"
            title="Live"
          >
            <AsideNavItemFactory
              divName="wide-sidebar-item-div"
              iconSpanName="wide-sidebar-icon-span"
              icon={<IoRadioOutline className="aside-svg-icon" />}
              text="Live"
              shadedIcon="shaded-icon-span"
            />
          </a>
        </span>
        <span>
          <a
            className="wide-nav-link"
            href="https://www.youtube.com/channel/UCzuqhhs6NWbgTzMuM09WKDQ"
            title="360° Video"
          >
            <AsideNavItemFactory
              divName="wide-sidebar-item-div"
              iconSpanName="wide-sidebar-icon-span"
              icon={<BiMask className="aside-svg-icon" />}
              text="360° Video"
              shadedIcon="shaded-icon-span"
            />
          </a>
        </span>
      </section>
      <section>
        <a
          className="wide-nav-link"
          href="https://www.youtube.com/feed/guide_builder"
          title="Browse channels"
        >
          <AsideNavItemFactory
            divName="wide-sidebar-item-div"
            iconSpanName="wide-sidebar-icon-span"
            icon={<BiPlusCircle className="aside-svg-icon" />}
            text="Browse channels"
          />
        </a>
      </section>
      <section>
        <h3>More from YouTube</h3>
        <a
          className="wide-nav-link"
          href="https://www.youtube.com/premium"
          title="YouTube Premium"
        >
          <AsideNavItemFactory
            divName="wide-sidebar-item-div"
            iconSpanName="wide-sidebar-icon-span"
            icon={
              <AiFillYoutube className="aside-svg-icon youtube-premium-icon" />
            }
            text="YouTube Premium"
          />
        </a>
        <a
          className="wide-nav-link"
          href="https://music.youtube.com/"
          title="YouTube Music"
        >
          <AsideNavItemFactory
            divName="wide-sidebar-item-div"
            iconSpanName="wide-sidebar-icon-span"
            icon={
              <SiYoutubemusic className="aside-svg-icon youtube-music-icon" />
            }
            text="YouTube Music"
          />
        </a>
        <a
          className="wide-nav-link"
          href="https://www.youtubekids.com/?source=youtube_web"
          title="YouTube Kids"
        >
          <AsideNavItemFactory
            divName="wide-sidebar-item-div"
            iconSpanName="wide-sidebar-icon-span"
            icon={
              <YouTubeKidsIcon className="aside-svg-icon youtube-kids-icon" />
            }
            text="YouTube Kids"
          />
        </a>
        <a
          className="wide-nav-link"
          href="https://tv.youtube.com/?utm_source=youtube_web&utm_medium=ep&utm_campaign=home&ve=34273"
          title="YouTube TV"
        >
          <AsideNavItemFactory
            divName="wide-sidebar-item-div"
            iconSpanName="wide-sidebar-icon-span"
            icon={<YouTubeTVIcon className="aside-svg-icon youtube-tv-icon" />}
            text="YouTube TV"
          />
        </a>
      </section>
      <section>
        <a
          className="wide-nav-link"
          href="https://www.youtube.com/account"
          title="Settings"
        >
          <AsideNavItemFactory
            divName="wide-sidebar-item-div"
            iconSpanName="wide-sidebar-icon-span"
            icon={<IoSettingsOutline className="aside-svg-icon" />}
            text="Settings"
          />
        </a>
        <a
          className="wide-nav-link"
          href="https://www.youtube.com/reporthistory"
          title="Report history"
        >
          <AsideNavItemFactory
            divName="wide-sidebar-item-div"
            iconSpanName="wide-sidebar-icon-span"
            icon={<MdOutlineFlag className="aside-svg-icon" />}
            text="Report history"
          />
        </a>
        <button className="wide-nav-link button" title="Help">
          <AsideNavItemFactory
            divName="wide-sidebar-item-div"
            iconSpanName="wide-sidebar-icon-span"
            icon={<IoHelpCircleOutline className="aside-svg-icon" />}
            text="Help"
          />
        </button>
        <button className="wide-nav-link button" title="Send feedback">
          <AsideNavItemFactory
            divName="wide-sidebar-item-div"
            iconSpanName="wide-sidebar-icon-span"
            icon={<MdOutlineFeedback className="aside-svg-icon" />}
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
