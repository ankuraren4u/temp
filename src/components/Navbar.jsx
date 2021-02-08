import "./navbar.css";
export const Navbar = ({items}) => {
  return (
    <ul className="nav">
        {
            items.map((item, idx) => {
                return <li key={idx}>{item.name}</li>
            })
        }
    </ul>
  );
}