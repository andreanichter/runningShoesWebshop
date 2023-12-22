export default function Footer() {
  return (
    <section className="footer" id="footer">
      <div className="box-container">
        <div className="box">
          <i className="fas fa-phone"></i>
          <h3>phone number</h3>
          <p>+123-456-7890</p>
          <p>+111-222-3333</p>
        </div>

        <div className="box">
          <i className="fas fa-map-marker-alt"></i>
          <h3>our address</h3>
          <p>vienna, austria - 1090</p>
        </div>

        <div className="box">
          <i className="fas fa-clock"></i>
          <h3>opening hours</h3>
          <p>9:00am to 18:00pm</p>
        </div>

        <div className="box">
          <i className="fas fa-envelope"></i>
          <h3>email address</h3>
          <p>office@reactRunners.com</p>
          <p>order@reactRunners.com</p>
        </div>
      </div>

      <div className="credit">
        &copy; copyright @ 2023 by <span>ReactRunners</span> | all rights
        reserved!
      </div>
    </section>
  );
}
