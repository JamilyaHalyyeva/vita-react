import Menu from "./Menu";
import reactLogo from "../assets/react.svg"
export default function Navbar() {
  return (
    <nav
      style={{
        height: "80px",
        width: "100%",
        background: "lightBlue",
        display: "flex",
        alignItems:"center",
        justifyContent:"center"
      }}
    >
         {/* how can import image files */}

        <img src={reactLogo} alt="" />
        <img  style={{width:"50px", height: "50px"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/820px-Vitejs-logo.svg.png?20220412224743" alt="" />
        <img src="/vite.svg" alt="" />
    
    <Menu> </Menu></nav>
  );
}
