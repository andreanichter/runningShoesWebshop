export default function Sort({ onSort }) {
  return (
    <select onChange={(e) => onSort(e.target.value)}>
      <option value="original">Sort by price</option>
      <option value="ascending">Low to high</option>
      <option value="descending">High to low</option>
    </select>
  );
}
