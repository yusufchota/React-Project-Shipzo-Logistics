import React, { useState } from "react";
import Header from "../components/Header";


export default function ClientShipment() {
  const [form, setForm] = useState({
    senderName: "",
    senderPhone: "",
    fromLocation: "",
    toLocation: "",
    shipmentType: "",
    weight: "",
    pickupDate: "",
    pickupTime: "",
    deliveryDate: "",
    notes: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Shipment request submitted successfully!");
    console.log("Form Data:", form);

    // Reset form
    setForm({
      senderName: "",
      senderPhone: "",
      fromLocation: "",
      toLocation: "",
      shipmentType: "",
      weight: "",
      pickupDate: "",
      pickupTime: "",
      deliveryDate: "",
      notes: "",
    });
  };

  return (<>
    <Header />
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <div className="w-full max-w-3xl bg-white shadow-xl rounded-xl p-8">
        <h2 className="text-3xl font-bold text-blue-700 mb-6">
          Client Shipment Request
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Sender Details */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Sender Information
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="senderName"
                placeholder="Sender Full Name"
                value={form.senderName}
                onChange={handleChange}
                required
                className="border p-3 rounded-lg w-full"
              />

              <input
                type="text"
                name="senderPhone"
                placeholder="Contact Number"
                value={form.senderPhone}
                onChange={handleChange}
                required
                className="border p-3 rounded-lg w-full"
              />
            </div>
          </div>

          {/* From / To & Locations */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Shipment Locations
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="fromLocation"
                placeholder="Pickup Location (From)"
                value={form.fromLocation}
                onChange={handleChange}
                required
                className="border p-3 rounded-lg w-full"
              />

              <input
                type="text"
                name="toLocation"
                placeholder="Delivery Location (To)"
                value={form.toLocation}
                onChange={handleChange}
                required
                className="border p-3 rounded-lg w-full"
              />
            </div>
          </div>

          {/* Shipment Type, Weight */}
          <div className="grid md:grid-cols-2 gap-4">
            <select
              name="shipmentType"
              value={form.shipmentType}
              onChange={handleChange}
              required
              className="border p-3 rounded-lg w-full"
            >
              <option value="">Select Shipment Type</option>
              <option value="Express">Express</option>
              <option value="Standard">Standard</option>
              <option value="Heavy Cargo">Heavy Cargo</option>
              <option value="Fragile">Fragile</option>
            </select>

            <input
              type="number"
              name="weight"
              placeholder="Weight (kg)"
              value={form.weight}
              onChange={handleChange}
              required
              className="border p-3 rounded-lg w-full"
            />
          </div>

          {/* Dates */}
          <div className="grid md:grid-cols-3 gap-4">
            <input
              type="date"
              name="pickupDate"
              value={form.pickupDate}
              onChange={handleChange}
              required
              className="border p-3 rounded-lg w-full"
            />

            <input
              type="time"
              name="pickupTime"
              value={form.pickupTime}
              onChange={handleChange}
              required
              className="border p-3 rounded-lg w-full"
            />

            <input
              type="date"
              name="deliveryDate"
              value={form.deliveryDate}
              onChange={handleChange}
              required
              className="border p-3 rounded-lg w-full"
            />
          </div>

          {/* Notes */}
          <textarea
            name="notes"
            placeholder="Additional notes or instructions"
            value={form.notes}
            onChange={handleChange}
            rows={4}
            className="border p-3 rounded-lg w-full"
          ></textarea>

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Submit Shipment Request
          </button>
        </form>
      </div>
    </div>
    </>
  );
}
