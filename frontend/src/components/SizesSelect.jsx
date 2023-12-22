export default function SizesSelect({ sizes, onSelect, value}) {
  
  return (
    <select className="sizeSelect" onChange={onSelect} value={value}>
      <option value="">Select Size</option>
      {sizes.map((s) => (
        <option key={`size-${s}`} value={s}>
          {s}
        </option>
      ))}
    </select>
  );
}
