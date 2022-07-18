function AsideNavItemFactory({ classname, icon, text, shadedIcon }) {
  return (
    <div className={classname}>
      <span className={`aside-icon-span${shadedIcon ? " " + shadedIcon : ""}`}>
        {icon}
      </span>
      <span>{text}</span>
    </div>
  );
}

export default AsideNavItemFactory;
