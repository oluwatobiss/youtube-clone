import "../styles/GalleryLoader.css";

function GalleryLoader() {
  return (
    <div id="loader-bg">
      <div className="spinner">
        <div className="cube1"></div>
        <div className="cube2"></div>
      </div>
    </div>
  );
}

export default GalleryLoader;
