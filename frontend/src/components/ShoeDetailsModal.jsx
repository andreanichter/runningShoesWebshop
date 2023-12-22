export default function ShoeDetailsModal({ shoe, onClose }) {

  return (
    <div className="pizza-details-modal" style={{ display: "block" }}>
      <div className="pizza-details">
        {shoe.description} <br/>
        <br/> <b>Color:</b> {shoe.color} <br />
        <br/>
        <b>Rating: </b>
        {shoe.rating}
      </div>
      <span className="close-modal" onClick={onClose}>&times;</span>
    </div>
  );
}
