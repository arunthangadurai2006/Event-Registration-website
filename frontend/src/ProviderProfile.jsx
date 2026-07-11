import "./ProviderProfile.css";
import Booking from "./Booking";
import { useParams } from "react-router-dom";
import services from "./data/servicesData";

import {
  FaStar,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaBriefcase,
  FaClock,  FaCalendarAlt
} from "react-icons/fa";

function ProviderProfile() {
  const { service, id } = useParams();

  const providerList = services[service];

  if (!providerList) {
    return <h2>Service not found</h2>;
  }

  const provider = providerList.find(
    item => item.id === Number(id)
  );

  if (!provider) {
    return <h2>Provider not found</h2>;
  }

  return (
    <div className="profile-page">

      {/* Profile Card */}

      <div className="profile-card">

        <div className="profile-top">

          <div className="profile-avatar">
            {provider.name.charAt(0)}
          </div>

          <div className="profile-details">

            <h1>{provider.name}</h1>

            <h3>Owned by {provider.owner}</h3>

            <div className="profile-info">

              <span>
                <FaStar className="icon"/>
                {provider.rating} rating
              </span>

              <span>
                <FaBriefcase className="icon"/>
                {provider.experience}
              </span>

            </div>

          </div>

        </div>

        <p className="description">
          {provider.description}
        </p>

        <div className="contact-row">

          <div>
            <FaPhoneAlt className="icon"/>
            {provider.phone}
          </div>

          <div>
            <FaMapMarkerAlt className="icon"/>
            {provider.location}
          </div>

        </div>

      </div>

      {/* Packages */}

      <h2 className="section-title">
        Available Services
      </h2>

      <div className="packages">

        {provider.packages.map((pkg,index)=>(

          <div className="package-card" key={index}>

            <div>

              <h3>{pkg.title}</h3>

              <p>{pkg.description}</p>

            </div>

            <h2>{pkg.price}</h2>

          </div>

        ))}

      </div>

      {/* Time Slots */}

      <h2 className="section-title">
        <FaClock className="clock"/>
        Available Time Slots
      </h2>

      <div className="time-card">

        {provider.timings.map((time,index)=>(

          <button
            className="slot-btn"
            key={index}
          >
            {time}
          </button>

        ))}

      </div>

      {/* Book Button */}

     {/* Booking Form */}
<Booking provider={provider} />

    </div>
  );
}

export default ProviderProfile;