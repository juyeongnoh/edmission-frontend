import NavLinkItem from "./SidebarItem";

const Sidebar = () => {
  return (
    <nav className="flex flex-col">
      <div>USER</div>
      <NavLinkItem to="/dashboard">Dashboard</NavLinkItem>
      <NavLinkItem to="/checklist">Checklist</NavLinkItem>
      <NavLinkItem to="/timeline">My Timeline</NavLinkItem>

      <div>STUDENT DATA</div>
      <NavLinkItem to="/basic-info">Basic Info</NavLinkItem>
      <NavLinkItem to="/academics">Academics</NavLinkItem>

      <div>COLLEGE</div>
      <NavLinkItem to="/college-explorer">College Explorer</NavLinkItem>
      <NavLinkItem to="/my-college-list">My College List</NavLinkItem>
      <NavLinkItem to="/activity-builder">Activity Builder</NavLinkItem>
      <NavLinkItem to="/award-builder">Award Builder</NavLinkItem>
      <NavLinkItem to="/college-list-builder">College List Builder</NavLinkItem>
      <NavLinkItem to="/essay-mentor">Essay Mentor</NavLinkItem>
      <NavLinkItem to="/ask-unni">Ask Unni</NavLinkItem>
    </nav>
  );
};

export default Sidebar;
