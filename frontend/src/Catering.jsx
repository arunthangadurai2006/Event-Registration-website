import "./Catering.css";
import { FaUtensils, FaStar, FaMapMarkerAlt, FaPhoneAlt, FaUserTie } from "react-icons/fa";
import { Link } from "react-router-dom";

function Catering() {

  const cateringProviders = [
    {
       id: 1,
      name: "Sri Lakshmi Catering Service",
      owner: "Anita Sharma",
      rating: "4.8",
      experience: "9 yrs exp",
      phone: "+91 99860 25142",
      location: "Jubilee Hills, Hyderabad",
      packages: [
        "Standard Catering Service Package",
        "Premium Catering Service Package"
      ]
    },
    {
       id: 2,
      name: "Royal Catering Service",
      owner: "Ravi Kumar",
      rating: "4.5",
      experience: "6 yrs exp",
      phone: "+91 98450 15212",
      location: "MG Road, Bengaluru",
      packages: [
        "Standard Catering Service Package",
        "Premium Catering Service Package"
      ]
    }
  ];


  return (
    <div className="catering-page">

      <div className="top-link">
       
      </div>


      <div className="catering-header">

        <div className="service-icon">
          <FaUtensils />
        </div>

        <div>
          <h1>Catering Service</h1>
          <p>Full-service event catering</p>
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


            <Link to={`/provider/catering/${provider.id}`}>
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