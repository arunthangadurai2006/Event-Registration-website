import "./Catering.css";
import { FaPaintBrush, FaStar, FaMapMarkerAlt, FaPhoneAlt, FaUserTie } from "react-icons/fa";
import { Link } from "react-router-dom";

function Catering() {

  const cateringProviders = [
    {
      id:"1",
      name: "Glam Studio by Priya",
      owner: "Priya Sharma ",
      rating: "4.1",
      experience: "5 yrs exp",
      phone: "+91 99860 25142",
      location: "Near Police station, Vallioor",
      packages: [
        "Standard Package",
        "Premium Package",
        "Basic Visit / Consultation"
      ]
    },
    { id:"2",
      name: " Sharmi Makeovers",
      owner: "Sharmi ",
      rating: "4.7",
      experience: "7 yrs exp",
      phone: "+91 98450 15212",
      location: "Coat opposite, Vallioor",
      packages: [
        "Standard Package",
        "Premium Package",
        "Basic Visit / Consultation"
      ]
    }
  ];


  return (
    <div className="catering-page">

      <div className="top-link">
       
      </div>


      <div className="catering-header">

        <div className="service-icon">
          <FaPaintBrush/>
        </div>

        <div>
          <h1>bridal Makeup Booking</h1>
          <p>Bridal and party makeup artists</p>
        </div>

      </div>


      <div className="provider-grid">

        {
          cateringProviders.map((provider,index)=>(

          <div className="provider-card" key={index}>


            <div className="profile">

              <div className="avatar">
                {provider.name.substring(0,2)}
              </div>


              <div>
                <h2>{provider.name}</h2>

                <p className="owner">
                  {provider.owner}
                </p>


                <div className="rating">
                  <FaStar />
                  {provider.rating}
                  
                  <span>
                    <FaUserTie/> {provider.experience}
                  </span>

                </div>

              </div>

            </div>


            <p>
              <FaPhoneAlt/>
              {provider.phone}
            </p>


            <p>
              <FaMapMarkerAlt/>
              {provider.location}
            </p>



            <div className="packages">

              {
                provider.packages.map((item,i)=>(
                  <span key={i}>
                    {item}
                  </span>
                ))
              }

            </div>

<Link to={`/provider/Makeup/${provider.id}`}>
  <button>View Profile</button>
</Link>



          </div>

          ))
        }


      </div>


    </div>
  )
}


export default Catering;