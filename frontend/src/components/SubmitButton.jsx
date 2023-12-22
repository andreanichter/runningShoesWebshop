
export default function SubmitButton({shoe}) {

  return (
    <input
      type="submit"
      value="Add to Cart"
      className="btn"
      name={`add_to_cart_${shoe.id}`}
    />
  );
}
