import "./Booking.css";
import { FaCalendarAlt } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";

function Booking({ provider }) {
  const [formData, setFormData] = useState({
    customerName: "",
    mobile: "",
    email: "",
    address: "",
    eventDate: "",
    service: "",
    timeSlot: "",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const selectTime = (time) => {
    setFormData({
      ...formData,
      timeSlot: time,
    });
  };

  const handleBooking = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/bookings",
        {
          providerName: provider.name,
          customerName: formData.customerName,
          mobile: formData.mobile,
          email: formData.email,
          address: formData.address,
          eventDate: formData.eventDate,
          service: formData.service,
          timeSlot: formData.timeSlot,
          notes: formData.notes,
        }
      );

      alert(res.data.message);

      setFormData({
        customerName: "",
        mobile: "",
        email: "",
        address: "",
        eventDate: "",
        service: "",
        timeSlot: "",
        notes: "",
      });

    } catch (err) {
      alert(err.response?.data?.message || "Booking Failed");
    }
  };

  return (
    <div className="booking-container">

      <h2 className="booking-title">
        <FaCalendarAlt className="calendar-icon" />
        Book this Provider
      </h2>

      <form className="booking-form" onSubmit={handleBooking}>

        <div className="form-group">
          <label>Your Name *</label>
          <input
            type="text"
            name="customerName"
            placeholder="Full Name"
            value={formData.customerName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Mobile Number *</label>
          <input
            type="tel"
            name="mobile"
            placeholder="+91 98765 43210"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Email *</label>
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Address *</label>
          <input
            type="text"
            name="address"
            placeholder="Event / Service Address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Event Date *</label>
          <input
            type="date"
            name="eventDate"
            value={formData.eventDate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Service Required *</label>

          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
          >
            <option value="">Select a service</option>

            {provider.packages.map((pkg, index) => (
              <option key={index} value={pkg.title}>
                {pkg.title}
              </option>
            ))}
          </select>
        </div>

        <div className="slot-section">
          <label>Event Time Slot *</label>

          <div className="slot-buttons">
            {provider.timings.map((time, index) => (
              <button
                key={index}
                type="button"
                className={`time-btn ${
                  formData.timeSlot === time ? "active" : ""
                }`}
                onClick={() => selectTime(time)}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        <div className="notes">
          <label>Additional Notes</label>

          <textarea
            rows="4"
            name="notes"
            placeholder="Anything the provider should know..."
            value={formData.notes}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="book-btn">
          Book Now
        </button>

      </form>

    </div>
  );
}

export default Booking;