import "./Catering.css";
import { GiHand } from "react-icons/gi";
import { FaUtensils, FaStar, FaMapMarkerAlt, FaPhoneAlt, FaUserTie } from "react-icons/fa";
import { Link } from "react-router-dom";

function Mehendi() {

  const mehendiProviders = [
    {
      id:"1",
      name: "Henna Tales by Zara",
      owner: "Anu Priya",
      rating: "4.3",
      experience: "6 yrs exp",
      phone: "+91 99860 25142",
      location: "Main Bustand, vallioor",
      packages: [
        "Standard  Package",
        "Premium  Package"
      ]
    },
    {
      id:"2",
      name: "Mehendi By Arthi",
      owner: "Arthi",
      rating: "4.7",
      experience: "2 yrs exp",
      phone: "+91 98450 15212",
      location: "near Library,  Vallioor",
      packages: [
        "Standard  Package",
        "Premium Package"
      ]
    }
  ];


  return (
    <div className="catering-page">

      <div className="top-link">
        ← All categories
      </div>


      <div className="catering-header">

        <div className="service-icon">
          <GiHand />
        </div>

        <div>
          <h1>Mehendi</h1>
          <p>Full-service event different design</p>
        </div>

      </div>


      <div className="provider-grid">

        {
          mehendiProviders.map((provider,index)=>(

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


             <Link to={`/provider/mehendi/${provider.id}`}>
  <button>View Profile</button>
</Link>


          </div>

          ))
        }


      </div>


    </div>
  )
}


export default Mehendi;