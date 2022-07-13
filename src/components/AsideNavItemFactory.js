function AsideNavItemFactory({ icon, text, shadedIcon }) {
  return (
    <div className="aside-item-div">
      <span className={`aside-icon-span${shadedIcon ? " " + shadedIcon : ""}`}>
        {icon}
      </span>
      <span>{text}</span>
    </div>
  );
}

export default AsideNavItemFactory;
