export default function Navbar({ children, navCenter }) {
  const navCenterClass = navCenter ? "nav-center" : "";

  return <nav className={"navbar " + navCenterClass}>{children}</nav>;
}
