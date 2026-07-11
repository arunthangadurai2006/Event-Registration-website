import "./Catering.css";
import {FaLeaf, FaStar, FaMapMarkerAlt, FaPhoneAlt, FaUserTie } from "react-icons/fa";
import { Link } from "react-router-dom";

function Catering() {

  const cateringProviders = [
    {
      id:"1",
      name: " suresh Decoration Service",
      owner: "Suresh",
      rating: "4.2",
      experience: "2yrs exp",
      phone: "+91 44851 85972",
      location: "IOB bank opposite, vallioor",
      packages: [
        "Standard  Service Package",
        "Premium Service Package"
      ]
    },
    {id:"2",
      name: "AK Decoration service Service",
      owner: "Arun Kumar",
      rating: "4.2",
      experience: "10 yrs exp",
      phone: "+91 98450 15212",
      location: "old main road, Vallioor",
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
          <FaLeaf />
        </div>

        <div>
          <h1>DJ Entertainment Show</h1>
          <p>Unlimited sounds </p>
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

 <Link to={`/provider/Stage/${provider.id}`}>
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