export default function QtyInput({ shoe, quantity, onChange }) {
  return (
    <input
      type="number"
      min={1}
      max={10}
      className="qty"
      value={quantity}
      name={`qty_${shoe.id}`}
      onChange={onChange}
    />
  );
}
