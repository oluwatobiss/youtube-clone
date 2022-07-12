import { ReactComponent as YouTubeShortsIcon } from "../assets/images/youtube-shorts.svg";
import { ReactComponent as YouTubeKidsIcon } from "../assets/images/youtube-kids.svg";
import { ReactComponent as YouTubeTVIcon } from "../assets/images/youtube-tv.svg";
import AsideNavItemFactory from "./AsideNavItemFactory";
import SignInButton from "./SignInButton";
import { HiOutlineMusicNote } from "react-icons/hi";
import { ImTrophy, ImNewspaper } from "react-icons/im";
import { SiYoutubegaming, SiYoutubemusic } from "react-icons/si";
import { IoRadioOutline } from "react-icons/io5";
import { BiMask, BiPlusCircle } from "react-icons/bi";
import { AiOutlineYoutube } from "react-icons/ai";
import {
  MdHomeFilled,
  MdOutlineExplore,
  MdOutlineSubscriptions,
  MdOutlineVideoLibrary,
  MdOutlineHistory,
} from "react-icons/md";
import "../styles/SideBar.css";

function Sidebar() {
  return (
    <aside>
      <section>
        <AsideNavItemFactory icon={<MdHomeFilled />} text="Home" />
        <AsideNavItemFactory icon={<MdOutlineExplore />} text="Explore" />
        <AsideNavItemFactory
          icon={<YouTubeShortsIcon className="youtube-shorts-icon" />}
          text="Shorts"
        />
        <AsideNavItemFactory
          icon={<MdOutlineSubscriptions />}
          text="Subscriptions"
        />
      </section>
      <section>
        <AsideNavItemFactory icon={<MdOutlineVideoLibrary />} text="Library" />
        <AsideNavItemFactory icon={<MdOutlineHistory />} text="History" />
      </section>
      <section>
        <span>Sign in to like videos, comment, and subscribe.</span>
        <SignInButton />
      </section>
      <section>
        <span>Best of YouTube</span>
        <span>
          <AsideNavItemFactory icon={<HiOutlineMusicNote />} text="Music" />
        </span>
        <span>
          <AsideNavItemFactory icon={<ImTrophy />} text="Sports" />
        </span>
        <span>
          <AsideNavItemFactory icon={<SiYoutubegaming />} text="Gaming" />
        </span>
        <span>
          <AsideNavItemFactory icon={<ImNewspaper />} text="News" />
        </span>
        <span>
          <AsideNavItemFactory icon={<IoRadioOutline />} text="Live" />
        </span>
        <span>
          <AsideNavItemFactory icon={<BiMask />} text="360° Video" />
        </span>
      </section>
      <section>
        <AsideNavItemFactory icon={<BiPlusCircle />} text="Browse channels" />
      </section>
      <section>
        <span>More from YouTube</span>
        <AsideNavItemFactory
          icon={<AiOutlineYoutube />}
          text="YouTube Premium"
        />
        <AsideNavItemFactory icon={<SiYoutubemusic />} text="YouTube Music" />
        <AsideNavItemFactory
          icon={<YouTubeKidsIcon className="youtube-kids-icon" />}
          text="YouTube Kids"
        />
        <AsideNavItemFactory
          icon={<YouTubeTVIcon className="youtube-tv-icon" />}
          text="YouTube TV"
        />
      </section>
    </aside>
  );
}

export default Sidebar;
