import "./Header.css";
import BackButton from "../BackButton/BackButton";

const Header = (props) => {
  return <div className="Header">
    <BackButton />
    <h1 className="HeaderTitle">{props.children}</h1>
  </div>
}

export default Header;
