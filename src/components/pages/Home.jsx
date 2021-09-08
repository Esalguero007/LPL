import { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faEnvelope,
  faLongArrowAltRight,
  faMapMarkerAlt,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
const Home = () => {
  useEffect(() => {
    document.title = "La Pulguita Loca | Home";
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="home-page">
      <section
        className="d-flex align-items-end justify-content-center position-relative"
        id="order"
      >
        <div className="overlay"></div>
        <div className="content text-center d-flex flex-column justify-content-center position-relative">
          <h1>Your Small Business Has A Place Here!</h1>
          <p>
            We Offer an easy, affordable way to start or grow your small
            business.
          </p>
          <button className="d-block w-50 mt-3 text-center mx-auto py-3">
            <a
              href="https://checkout.square.site/buy/WIQOYQDMNWDXCUABMEF2EUGU"
              target="_blank"
              rel="noreferrer"
            >
              Pay now
            </a>
          </button>
        </div>
      </section>

      <section id="membership">
        <div className="overlay"></div>
        <div className="content">
          <h2 className="text-center">Coviertete en Miembro</h2>
          <h3 className="text-center">
            Nuestros miembros disfrutan de todos los especiales
          </h3>
          <div className="cards d-flex flex-wrap justify-content-center mt-5">
            <div className="card d-flex flex-column">
              <div className="name-info text-center mb-3">
                <h3>$50</h3>
                <p className="membership-name mb-0">X Dia</p>
              </div>
              <div className="flex-grow-1 d-flex flex-column justify-content-between">
                <p className="mb-4">
                  Ahora Estamos Ofreciendo Puestos de Renta por Dia. Para
                  vendedores nuevos que desean vender en nuestra localizacion.
                  Estos Espacios Tienen Techo de Lamina, y miden 12 ft x 11 ft.
                  Llame hoy! Opportuniadades Para Todos Los Vendedores!
                </p>

                <Button variant="success" className="w-100 rounded-0">
                  <a
                    href="http://https://checkout.square.site/buy/XWU3VJGKMVZG6BRDVHVQXDWB"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Select
                  </a>
                </Button>
              </div>
            </div>
            <div className="card d-flex flex-column justify-content-between">
              <div className="name-info text-center mb-3">
                <h3>$30</h3>
                <p className="membership-name mb-0">Pre-Paid</p>
              </div>
              <div className="flex-grow-1 d-flex flex-column justify-content-between">
                <p className="mb-4">
                  Puestos Varatos Con Muchisimo Espacio y Clientela. Desea
                  Empezar Su Propio Negocio? No Busque Mas, Rente los Puestos
                  Portatiles por Bajos Precios. Llame Para mas Informacion.
                </p>
                <Button variant="success" className="w-100 rounded-0">
                  <a
                    href="http://https://checkout.square.site/buy/AK4BJ26J73UUUOT5VUQCRJ74"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Select
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="shop">
        <div className="overlay"></div>
        <div className="content">
          <div className="elements">
            <h2>Ordene sus packas de mayoreo</h2>
            <p>
              Estamos Ofreciendo Packas de Mayoreo Para Nuestros Miembros de La
              Pulguita Loca.
            </p>
            <p className="price mt-4 mb-3">$699-$1,999</p>
            <button className="py-2">
              <Link to="/pay">Shop</Link>
            </button>
          </div>
        </div>
      </section>

      <section className="contact-section py-5">
        <h2 className="text-center">Contacte con Nosotros</h2>
        <p className="text-center mb-4 pb-4">
          Communicate y dinos lo que tienes en mente...
        </p>
        <div className="d-flex outer-container justify-content-center flex-wrap flex-container">
          <div className="flex-item1">
            <h4 className="mb-4">How To Reach Us</h4>
            <div className="d-flex mb-3 align-items-center fb-container">
              <FontAwesomeIcon className="icon me-3" icon={faFacebookSquare} />
              <p>
                Follow Us:
                <a
                  href="https://www.facebook.com/lapulguitaloca/"
                  target="_blank"
                  rel="noreferrer"
                  className="strong"
                >
                  Facebook
                </a>
              </p>
            </div>
            <div className="d-flex mb-3 align-items-center address-container">
              <FontAwesomeIcon className="icon me-3" icon={faMapMarkerAlt} />
              <p>
                <span>Address: </span>
                3800 Hillcroft Street, Houston, TX 77057
              </p>
            </div>
            <div className="d-flex mb-3 align-items-center phone-container">
              <FontAwesomeIcon className="icon me-3" icon={faPhoneAlt} />
              <p>
                <span>Phone: </span>
                346-438-3569
              </p>
            </div>

            <div className="d-flex mb-3 align-items-center email-container">
              <FontAwesomeIcon className="icon me-3" icon={faEnvelope} />
              <p>
                <span>Email: </span>
                sales@lapulguitaloca.com
              </p>
            </div>
            <Button className="rounded-0 mt-4" variant="success">
              <Link to="/contact">Leave us a message</Link>
            </Button>
          </div>

          <div className="flex-item2">
            <iframe
              title="La Pulguita Location"
              className="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.832383204518!2d-95.50116587075564!3d29.72461420701319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c3b4510a6b11%3A0x28fa0c2402acba1!2s3800%20Hillcroft%20St%2C%20Houston%2C%20TX%2077057%2C%20USA!5e0!3m2!1sen!2sma!4v1623431582453!5m2!1sen!2sma"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      <div className="subscribe-section py-4">
        <div className="d-flex justify-content-between mx-auto align-items-center flex-wrap flex-container">
          <div className="subscribe-outer-container">
            <div className="subscribe-text mb-3">
              <h2>Permanecer en el bucle</h2>
              <span>Join our News Letter</span>
            </div>
          </div>
          <div>
            <div className="subscribe-wrapper subscribe2-wrapper mb-3 form-container">
              <div className="subscribe-form">
                <Form className="d-flex align-items-center flex-wrap">
                  <Form.Control
                    placeholder="email address"
                    type="email"
                  />
                  <Button type="submit" className="rounded-0" variant="success">
                    SUBSCRIBE
                    <FontAwesomeIcon
                      className="ms-2"
                      icon={faLongArrowAltRight}
                    />
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
