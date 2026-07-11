const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    providerName: {
      type: String,
      required: true,
    },

    customerName: {
      type: String,
      required: true,
    },

    mobile: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    address: {
      type: String,
      required: true,
    },

    eventDate: {
      type: Date,
      required: true,
    },

    service: {
      type: String,
      required: true,
    },

    timeSlot: {
      type: String,
      required: true,
    },

    notes: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Booking", bookingSchema);