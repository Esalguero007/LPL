const Footer = () => {
  return (
    <footer>
      <div className="content">
        <h3>La Pulguita Loca</h3>
        <div className="flex">
          <a href="/">Home</a>
          <a href="/">Ordene Online</a>
          <a href="/">Reservaciones</a>
        </div>
        <div className="social-links">
          <a
            href="https://www.facebook.com/lapulguitaloca/?ref=page_internal"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://instagram.com/lapulguitaloca?utm_medium=copy_link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.pinterest.com" target="_blank" rel="noreferrer">
            <i className="fab fa-pinterest-p"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
