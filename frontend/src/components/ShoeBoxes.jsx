import { useState } from "react";
import RenderImages from "./RenderImages";
import ShoeDetailsModal from "./ShoeDetailsModal";
import ShoesForm from "./ShoesForm";
import shoesData from "/public/shoesData.json";

export default function ShoeBoxes({ shoes }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedShoe, setSelectedShoe] = useState(null);

  const openModal = (shoe) => {
    setSelectedShoe(shoe);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedShoe(null);
    setModalOpen(false);
  };

  return (
    <div id="box-container">
      {shoes ? (
        shoes.map((shoe) => (
          <div key={shoe.id} className="box">
            <div className="price">
              € <span>{shoe.price}</span>
            </div>
            <RenderImages
              onClick={() => openModal(shoe)}
              imgs={shoesData.filter((img) => img.id === shoe.id)}
            />
            <div className="name">
              {shoe.brand} <br /> {shoe.model}
            </div>
            <ShoesForm shoe={shoe}></ShoesForm>
            {modalOpen && <ShoeDetailsModal shoe={selectedShoe} onClose={closeModal} />}
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
