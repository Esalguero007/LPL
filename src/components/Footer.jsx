import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faEnvelope,
  faGem,
  faHome,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <footer className="text-center text-lg-start bg-light text-muted">
      <section className="border-top">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <FontAwesomeIcon className="me-3" icon={faGem} />
                La Pulguita Loca
              </h6>
              <p>
              Ahora Etsamos Acceptando Applicaciones De Vendedores Nuevos
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Availability</h6>
              <p>
                Viernes: <strong>7:00am - 8:00pm</strong>
              </p>
              <p>
                Sabado: <strong>7:00am - 8:00pm</strong>
              </p>
              <p>
                Domingo: <strong>7:00am - 8:00pm</strong>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Navigation</h6>
              <p>
                <Link to="/" className="text-reset">
                  Home
                </Link>
              </p>
              <p>
                <Link to="/about" className="text-reset">
                  About
                </Link>
              </p>
              <p>
                <Link to="/contact" className="text-reset">
                  Contact
                </Link>
              </p>
              <p>
                <Link to="/pay" className="text-reset">
                  Pay
                </Link>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <FontAwesomeIcon className="me-3" icon={faHome} />
                <a
                  href="https://goo.gl/maps/nhSW9L1a8Y5tL7j4A"
                  target="_blank"
                  rel="noreferrer"
                >
                  3800 Hillcroft Ave Houston, TX 77057
                </a>
              </p>
              <p>
                <FontAwesomeIcon className="me-3" icon={faEnvelope} />
                <a href="mailto:support@lapulguitaloca.com">
                  support@lapulguitaloca.com
                </a>
              </p>
              <p>
                <FontAwesomeIcon className="me-3" icon={faPhone} />{" "}
                <a href="tel:1-346-438-3569">346-438-3569</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © {new Date().getFullYear()} Copyright:{" "}
        <Link className="text-reset fw-bold" to="/">
          La Pulguita Loca
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
