export default function Filter({brands, selectedBrand, onChange}) {

  return (
    <div id="dropDownDiv">
      <select id="allergenDropdown" value={selectedBrand} onChange={onChange}>
        <option value="">
          All brands
        </option>
        {brands.map((brand) => (
          <option key={brand} value={brand}>{brand}</option>
        ))}
      </select>
    </div>
  );
}
