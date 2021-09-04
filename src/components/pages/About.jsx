import { useEffect } from "react";
import aboutcover from "../../images/aboutCover.png";
const About = () => {
  useEffect(() => {
    document.title = "La Pulguita Loca | About";
  }, []);
  return (
    <main className="about">
      <h1>About Us</h1>
      <div className="img-container">
        <img src={aboutcover} alt="About Cover" />
      </div>
      <div className="flex">
        <div className="col">
          <h2>Get to know us</h2>
        </div>
        <div className="text-holder">
          <p>
            La Pulguita Loca "Flea Market" in Houston opened in 20016. Since
            then thousands of people have browsed, shopped and traded in the
            small acre market. Every weekend shoppers find several dealers
            offering a little bit of everything, all at bargain prices. Only at
            The Little Crazy Flea Market can you stroll through several shops,
            wheel and deal with the shop owners themselves and get the bargain
            of a lifetime. From furniture to flowers you can find it at The Best
            Flea Market in Houston "La Pulguita Loca." Anyone who wants to
            expose their product, creation, idea, or business to a large number
            of potential customers without the high overhead costs and expenses
            associated with most retail spaces can rent a space here in The
            Little Crazy Flea Market. So, if you are starting a new business,
            looking for an outlet to expand an existing business, want to turn
            your hobby into income, or just looking for a place to have a garage
            sale, then La Pulguita loca has a space for you. La Pulguita Loca
            "Flea Market" en Houston abrió sus puertas en 20016. Desde entonces,
            miles de personas han buscado, comprado y comerciado en el mercado
            de más de 0.25 acres. Cada fin de semana, los compradores encuentran
            varios de distribuidores que ofrecen un poco de todo, todo a precios
            de ganga. Solo en La Pulguita Loca-Flea Market puede pasear por
            varias tiendas, manejar y tratar con los dueños de las tiendas y
            obtener la mejor oferta de su vida. Desde muebles hasta flores,
            puede encontrarlo en el mejor mercado de pulgas de Houston "La
            Pulguita Loca". Cualquiera que quiera exponer su producto, creación,
            idea o negocio a una gran cantidad de clientes potenciales sin los
            altos costos generales y gastos asociados con la mayoría de los
            espacios comerciales puede alquilar un espacio aquí en La Pulguita
            Loca-Flea Market. Entonces, si está comenzando un nuevo negocio,
            buscando una salida para expandir un negocio existente, desea
            convertir su pasatiempo en ingresos o simplemente está buscando un
            lugar para realizar una venta de garaje, La Pulguita loca tiene un
            espacio para usted.
          </p>
        </div>
      </div>
    </main>
  );
};

export default About;
