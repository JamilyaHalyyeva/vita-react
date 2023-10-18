import Li from "./Li";
export default function Menu() {
  return (
    <ul
      style={{
        listStyle: "none ",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap:"20px",
      }}
    >
        <Li text="home"></Li>
      <li>Home</li>
      <li>About</li>
      <li>Contanct</li>
    </ul>
  );
}
