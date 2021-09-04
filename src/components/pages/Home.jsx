import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <section id="order">
        <div className="overlay"></div>
        <div className="content">
          <h2>Your Small Business Has A Place Here!</h2>
          <p>
            We Offer an easy, affordable way to start or grow your small
            business.
          </p>
          <a
            href="https://checkout.square.site/buy/WIQOYQDMNWDXCUABMEF2EUGU"
            target="_blank"
            rel="noreferrer"
          >
            Pay now
          </a>
        </div>
      </section>

      <section id="membership">
        <div className="overlay"></div>
        <div className="content">
          <h2>Coviertete en Miembro</h2>
          <h3>Nuestros miembros disfrutan de todos los especiales</h3>
          <div className="cards">
            <div className="card">
              <div className="name-info">
                <h3>$50</h3>
                <p className="membership-name">X Dia</p>
              </div>
              <div className="space-between">
                <p>
                  Ahora Estamos Ofreciendo Puestos de Renta por Dia. Para
                  vendedores nuevos que desean vender en nuestra localizacion.
                  Estos Espacios Tienen Techo de Lamina, y miden 12 ft x 11 ft.
                  Llame hoy! Opportuniadades Para Todos Los Vendedores!
                </p>

                <button>
                  <a
                    href="http://https://checkout.square.site/buy/XWU3VJGKMVZG6BRDVHVQXDWB"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Select
                  </a>
                </button>
              </div>
            </div>
            <div className="card">
              <div className="name-info">
                <h3>$30</h3>
                <p className="membership-name">Pre-Paid</p>
              </div>
              <div className="space-between">
                <p>
                  Puestos Varatos Con Muchisimo Espacio y Clientela. Desea
                  Empezar Su Propio Negocio? No Busque Mas, Rente los Puestos
                  Portatiles por Bajos Precios. Llame Para mas Informacion.
                </p>
                <button>
                  <a
                    href="http://https://checkout.square.site/buy/AK4BJ26J73UUUOT5VUQCRJ74"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Select
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="shop">
        <div className="overlay"></div>
        <div className="content">
          <div className="elements">
            <p>Ordene sus packas de mayoreo</p>
            <h6>
              Estamos Ofreciendo Packas de Mayoreo Para Nuestros Miembros de La
              Pulguita Loca.
            </h6>
            <p>$699-$1,999</p>
            <Link to="/pay">Shop</Link>
          </div>
        </div>
      </section>

      <section id="contact">
        <h2>Contacte con Nosotros</h2>
        <p>Communicate y dinos lo que tienes en mente...</p>
        <form action="">
          <input type="text" name="number" placeholder="Nombre Completo" />
          <input type="email" name="email" placeholder="Email" />
          <textarea placeholder="Mensaje"></textarea>
          <button type="submit">Send</button>
        </form>
      </section>

      <section id="location">
        <div className="content">
          <iframe
            title="La pulguita location"
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.832383204518!2d-95.50116587075564!3d29.72461420701319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c3b4510a6b11%3A0x28fa0c2402acba1!2s3800%20Hillcroft%20St%2C%20Houston%2C%20TX%2077057%2C%20USA!5e0!3m2!1sen!2sma!4v1623431582453!5m2!1sen!2sma"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>

          <div className="map-info">
            <h3>Ubication y Horario</h3>
            <p>3800 Hillcroft Street</p>
            <p>Houston, TX 77057</p>
            <p>346-438-3569</p>
            <a href="https://www.google.com/maps/place/3800+Hillcroft+St,+Houston,+TX+77057/@29.7246092,-95.5039877,17z/data=!3m1!4b1!4m5!3m4!1s0x8640c3b4510a6b11:0x28fa0c2402acba1!8m2!3d29.7246046!4d-95.501799">
              Get directions
            </a>
            <p>Viernes 7:00am - 8:00pm</p>
            <p>Sabado 7:00am - 8:00pm</p>
            <p>Domingo 7:00am - 8:00pm</p>
          </div>
        </div>
      </section>

      <section id="subscribe">
        <div className="white-bg">
          <h2>Permanecer en el bucle</h2>
          <form action="">
            <input type="email" name="email" placeholder="Email" />
            <button type="submit">Suscribir</button>
          </form>
          <p className="captcha-p">
            This form is protected by reCAPTCHA and the google Privacy Policy
            and Terms of Service
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
