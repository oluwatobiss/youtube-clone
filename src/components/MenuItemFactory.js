function AsideNavItemFactory({
  divName,
  iconSpanName,
  icon,
  text,
  shadedIcon,
}) {
  return (
    <div className={divName}>
      <span className={`${iconSpanName}${shadedIcon ? " " + shadedIcon : ""}`}>
        {icon}
      </span>
      <span>{text}</span>
    </div>
  );
}

export default AsideNavItemFactory;
