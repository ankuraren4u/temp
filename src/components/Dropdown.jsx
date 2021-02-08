export const Dropdown = ({items}) => {
  return (
    <select className="dropdown">
        {
            items.map(item => {
                return <option>{item.name}</option>
            })
        }
    </ul>
  );
}