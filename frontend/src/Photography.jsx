import "./Catering.css";
import { FaCamera, FaStar, FaMapMarkerAlt, FaPhoneAlt, FaUserTie } from "react-icons/fa";
import { Link } from "react-router-dom";

function Catering() {

  const cateringProviders = [
    {
      id:"1",
      name: "Ashwin Studio",
      owner: "Ashwin",
      rating: "4.6",
      experience: "7 yrs exp",
      phone: "+91 99860 25142",
      location: "Anna nagar , Vallioor",
      packages: [
        "Standard Catering Service Package",
        "Premium Catering Service Package"
      ]
    },
    {
      id:"2",
      name: "Royal Studio",
      owner: "Arun Kumar",
      rating: "4.5",
      experience: "3 yrs exp",
      phone: "+91 98450 15212",
      location: "near mercy school, vallioor",
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
          <FaCamera />
        </div>

        <div>
          <h1>Photography & Editing</h1>
          <p>Full-service event with Unlimited photos</p>
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

<Link to={`/provider/Photography/${provider.id}`}>
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