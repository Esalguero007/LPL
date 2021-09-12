import { useEffect } from "react";
import { Button } from "react-bootstrap";
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
const Contact = () => {
  useEffect(() => {
    document.title = "La Pulguita Loca | Contact";
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="contact-page">
      <div className="hero-text">
        <h1>We'd love to hear from you</h1>
        <p>
        Whether you have a question about pricing, trials, need more information, or anything else, our team is ready to answer all your questions
        </p>
      </div>

      <div className="row">
        <div className="col">
          <form action="">
            <h2>Contact us</h2>
            <div className="input-container">
              <input type="text" placeholder="First name" name="firstname" />
              <input type="text" placeholder="Last name" name="lastname" />
            </div>
            <div className="input-container">
              <input type="tel" placeholder="Phone" name="phone" />
              <input type="email" placeholder="Email" name="email" />
            </div>
            <textarea name="message" placeholder="Message"></textarea>
            <Button
              variant="success"
              className="rounded-0 mt-3 py-3 px-4"
              type="submit"
            >
              Send Message
            </Button>
          </form>
        </div>
        <div className="col2">
          <h2>Request a call back</h2>
          <p>
       Hbalamos espanol para nuestra gente latina que estan interesados.
    
          </p>
          <div className="contact-info">
            <div className="container">
              <div className="i">
                <FontAwesomeIcon icon={faPhoneVolume} />
              </div>

              <a href="tel:+1346-438-3569">346-438-3569</a>
            </div>
            <div className="container">
              <div className="i">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <a href="mailto:support@lapulguitaloca.com">
                support@lapulguitaloca.com
              </a>
            </div>
            <div className="container">
              <div className="i">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </div>
              <a
                href="https://goo.gl/maps/nhSW9L1a8Y5tL7j4A"
                target="_blank"
                rel="noreferrer"
              >
                3800 Hillcroft Ave Houston, TX 77057
              </a>
            </div>
          </div>
          <div className="social-links text-center text-lg-start">
            <a
              className="d-inline-block me-2"
              href="https://facebook.com/lapulguitaloca/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="i">
                <FontAwesomeIcon icon={faFacebookF} />
              </div>
            </a>
            <a
              className="d-inline-block mx-2"
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
            >
              <div className="i">
                <FontAwesomeIcon icon={faTwitter} />
              </div>
            </a>
            <a
              className="d-inline-block mx-2"
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
            >
              <div className="i">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </div>
            </a>
            <a
              className="d-inline-block ms-2"
              href="https://instagram.com/lapulguitaloca/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="i">
                <FontAwesomeIcon icon={faInstagram} />
              </div>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
