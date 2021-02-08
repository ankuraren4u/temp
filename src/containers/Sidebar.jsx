import { Navbar } from "./../components/Navbar";
import { navItems } from "./../constants";
import { Logo } from "./../components/Logo";
import "./sidebar.css";

export const Sidebar = ({ user: { firstName, lastName, subscriptionType } }) => {
  return (
    <div className="sidebar">
      <div className="background"/>
      <Logo />
      <div className="welcome-title">Welcome {firstName}</div>
      <div className="welcome-subtitle">Lets relieve your back pain</div>
      <Navbar items={navItems} />
      <div className="profile">
          <div className="name">{firstName} {lastName}</div>
          <div className="subscription">{subscriptionType}</div>
      </div>
    </div>
  );
};
