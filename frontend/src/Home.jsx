import "./Home.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { GiHand } from "react-icons/gi";
import {FaUtensils,FaUserTie,FaBuilding,FaPaintBrush,FaCamera,FaBirthdayCake,FaMusic,FaLeaf,} from "react-icons/fa";
import {FaInstagram,FaGithub,FaLinkedin,FaEnvelope,FaPhoneAlt,FaMapMarkerAlt,} from "react-icons/fa";
function Home()
 { const [search, setSearch] = useState("");

  

 const services = [
  {
    icon: <FaUtensils />,
    title: "Catering Service",
    desc: "Full-service catering for all occasions",
    link: "/catering",
  },
  {
    icon: <FaUserTie />,
    title: "Chef for Cooking",
    desc: "Professional chefs for home and events",
    link: "/chef",
  },
  {
    icon: <FaBuilding />,
    title: "Function Hall Booking",
    desc: "Banquet and function halls",
    link: "/hall",
  },
  {
    icon: <FaPaintBrush />,
    title: "Makeup Artists",
    desc: "Bridal and party makeup services",
    link: "/makeup",
  },
  {
    icon: <FaCamera />,
    title: "Photography",
    desc: "Wedding & event photography",
    link: "/photography",
  },
  {
    icon: <FaBirthdayCake />,
    title: "Birthday Decoration",
    desc: "Creative birthday decorations",
    link: "/birthday",
  },
  {
    icon: <FaMusic />,
    title: "DJ & Sound",
    desc: "Music systems and DJ services",
    link: "/dj",
  },
  {
    icon: <FaLeaf />,
    title: "Stage Decoration",
    desc: "Beautiful floral stage decorations",
    link: "/stage",
  },
  {
    icon: <GiHand />,
    title: "Mehendi Artist",
    desc: "Bridal and traditional mehendi designs",
    link: "/mehendi",
  },
];
   
  
    const filteredServices = services
  .filter((service) =>
    service.title.toLowerCase().includes(search.toLowerCase())
  )
  .sort((a, b) => a.title.localeCompare(b.title));

  return (
    <div>
    <section className="hero">

      <div className="overlay"></div>

      <div className="hero-content">

        <h1>
          Pre-register for events
          <br />
          & local services
        </h1>

        <p>
          Makeup artists, caterers, decorators, function halls,
          electricians and more — pick a provider,
          choose your date & time, and book your slot.
        </p>

        <div className="search-box">
  <input
  type="text"
  placeholder="Search Services..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
/>
</div>
       
        <div className="all-container">
  <div className="all">All Service</div>
  <div className="all">Event service</div>
  <div className="all">general </div>
</div>

       </div>
    

    </section>
   
  <div className="services-section">

      <h2 className="title">🎉 Event Services</h2>

      <div className="services-grid">

       {filteredServices.map((service, index) => (
          <div className="card" key={index}>

            <div className="icon">
              {service.icon}
            </div>

            <h3>{service.title}</h3>

            <p>{service.desc}</p>

           <Link to={service.link}>
  Browse providers →
</Link>

          </div>
        ))}

      </div>

    </div>
     <footer className="footer">

      <div className="footer-container">

        {/* About */}

        <div className="footer-section">
          <h2>EventConnect</h2>

          <p>
            EventConnect helps customers pre-register and book trusted
            event services including catering, makeup artists,
            photographers, decorators, function halls, mehendi artists,
            DJs and many more.
          </p>
        </div>

        

        {/* Help */}

        <div className="footer-section">

          <h3>Help</h3>

          <a href="/">FAQ</a>
          <a href="/">Privacy Policy</a>
          <a href="/">Terms & Conditions</a>
          <a href="/">Support</a>

        </div>

        {/* Contact */}

        <div className="footer-section">

          <h3>Contact</h3>

          <p>
            <FaMapMarkerAlt /> Tamil Nadu, India
          </p>

          <p>
            <FaPhoneAlt /> +91 9345871354
          </p>

          <p>
            <FaEnvelope /> eventconnect@gmail.com
          </p>

        </div>

      </div>

      {/* Social Icons */}

      <div className="social-icons">

        <a href="https://www.instagram.com/_arun__kmr_?igsh=MW4zZjZzNmpjdXQzbA==">
          <FaInstagram />
        </a>

        <a href="https://github.com/arunthangadurai2006">
          <FaGithub />
        </a>

        <a href="https://www.linkedin.com/in/arun-kumar-t-a9b639344?utm_source=share_via&utm_content=profile&utm_medium=member_android">
          <FaLinkedin />
        </a>

        <a href="mailto:arunthangadurai2006@gmail.com">
          <FaEnvelope />
        </a>

      </div>

      <hr />

      <p className="copyright">
        © 2026 EventConnect. All Rights Reserved.
      </p>

    </footer>
     </div>
  );
}

export default Home;