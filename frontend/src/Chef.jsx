import "./Catering.css";
import {FaBirthdayCake, FaStar, FaMapMarkerAlt, FaPhoneAlt, FaUserTie } from "react-icons/fa";
import { Link } from "react-router-dom";

function Catering() {

  const cateringProviders = [
    {
      id:"1",
      name: " Ram Cooking  Service",
      owner: "Ram",
      rating: "4.7",
      experience: "22 yrs exp",
      phone: "+91 44851 85972",
      location: "New Bustand opposite , vallioor",
      packages: [
        "Standard  Service Package",
        "Premium Service Package"
      ]
    },
    {
      id:"2",
      name: "manikandan cooking Service",
      owner: "Manikandan",
      rating: "4.5",
      experience: "6 yrs exp",
      phone: "+91 98450 15212",
      location: "old Bustand, Vallioor",
      packages: [
        "Standard  Service Package",
        "Premium  Service Package"
      ]
    }
  ];


  return (
    <div className="catering-page">

      <div className="top-link">
       
      </div>


      <div className="catering-header">

        <div className="service-icon">
          <FaUserTie />
        </div>

        <div>
          <h1>Chef for Cooking</h1>
          <p>Full-service with different varities</p>
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


           <Link to={`/provider/Chef/${provider.id}`}>
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