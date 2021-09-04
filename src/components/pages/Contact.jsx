import { useEffect } from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Contact = () => {
  useEffect(() => {
    document.title = "La Pulguita Loca | Contact";
  }, []);
  return (
    <main className="contact">
      <div className="col">
        <div className="content">
          <h1>We're here</h1>
          <p>Flea Market with us!</p>
        </div>

        <div className="map-container">
          <iframe
            title="La pulguita location"
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.832383204518!2d-95.50116587075564!3d29.72461420701319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c3b4510a6b11%3A0x28fa0c2402acba1!2s3800%20Hillcroft%20St%2C%20Houston%2C%20TX%2077057%2C%20USA!5e0!3m2!1sen!2sma!4v1623431582453!5m2!1sen!2sma"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div className="col">
        <h1>Let's talk</h1>
        <p>Share your excitement with us/ Comparte tu emocion con nosotros</p>
        <a href="mailto:sales@lapulguitaloca.com" className="email">
          <p>support@lapulguitaloca.com</p>
          <FontAwesomeIcon icon={faArrowRight} />
        </a>
      </div>
    </main>
  );
};

export default Contact;
