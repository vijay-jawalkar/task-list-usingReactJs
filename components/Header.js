import Logo from "../assets/tasklogo.png";
import "../components/HeaderStyle.css";

export function Header() {
  return (
    <>
      <div className="navbar">
        <h1> Home </h1>
        <img src={Logo} alt="logo" />
      </div>
    </>
  );
}
