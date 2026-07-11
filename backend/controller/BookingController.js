const Booking = require("../models/Booking");

exports.createBooking = async (req, res) => {
  try {
    const {
      providerName,
      customerName,
      mobile,
      email,
      address,
      eventDate,
      service,
      timeSlot,
      notes,
    } = req.body;

    // Check if the provider is already booked
    const existingBooking = await Booking.findOne({
      providerName,
      eventDate,
      timeSlot,
    });

    if (existingBooking) {
      return res.status(400).json({
        message: "This provider is already booked for the selected date and time.",
      });
    }

    const booking = await Booking.create({
      providerName,
      customerName,
      mobile,
      email,
      address,
      eventDate,
      service,
      timeSlot,
      notes,
    });

    res.status(201).json({
      message: "Booking Successful",
      booking,
    });

  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};