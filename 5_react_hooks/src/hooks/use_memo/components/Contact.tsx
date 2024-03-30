const Contact = () => {
  return (
    <>
      <div className="contact-area">
        <form className="form">
          <input type="text" placeholder="Kişi Ekle" className="form-input" />
          <button type="submit" className="form-submit">
            Add / Ekle
          </button>
        </form>

        <div className="scrollable-area">
          <ul className="list">
            {Array.from({ length: 20 }).map((_, index) => (
              <li key={index} className="list-item">
                <span className="list-item-text">Kişi {index + 1}</span>
                <button className="list-item-delete">X</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Contact;
