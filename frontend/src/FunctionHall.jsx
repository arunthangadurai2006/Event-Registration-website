import "./Catering.css";
import { FaBuilding, FaStar, FaMapMarkerAlt, FaPhoneAlt, FaUserTie } from "react-icons/fa";
import { Link } from "react-router-dom";

function Catering() {

  const cateringProviders = [
    {
      id:"1",
      name: "Emerald Convention Hall",
      owner: "Rajesh ",
      rating: "4.8",
      experience: "9 yrs exp",
      phone: "+91 99860 25142",
      location: "Main Road, Near Post Office",
      packages: [
        "Standard Package",
        "Premium Package",
        "Basic Visit / Consultation"
      ]
    },
    {
      id:"2",
      name: "Sri Lakshmi Gardens",
      owner: "Venkat ",
      rating: "4.7",
      experience: "4 yrs exp",
      phone: "+91 98450 15212",
      location: "MG Road, near ashoka",
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
          <FaBuilding />
        </div>

        <div>
          <h1>Function Hall Booking</h1>
          <p>Banquet and function halls</p>
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

 <Link to={`/provider/FunctionHall/${provider.id}`}>
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