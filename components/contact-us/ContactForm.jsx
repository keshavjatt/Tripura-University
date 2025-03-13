"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    phone: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [phoneError, setPhoneError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      if (!/^\d{0,10}$/.test(value)) return;
      if (value.length === 10) {
        setPhoneError("");
      } else {
        setPhoneError("Phone number must be exactly 10 digits");
      }
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.phone.length !== 10) {
      setPhoneError("Phone number must be exactly 10 digits");
      return;
    }

    setIsSubmitting(true);

    console.log("Form Data Submitted:", formData);

    setTimeout(() => {
      setIsSubmitting(false);
      alert("Message sent successfully!");
    }, 1500);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-50 shadow-lg rounded-lg">
      <h2 className="text-center text-2xl pb-4 text-[#60060F] font-bold">
        Feel free to reach us !
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#60060F]"
        />

        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#60060F]"
        />

        <input
          id="phone"
          name="phone"
          type="tel"
          required
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          pattern="\d{10}"
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#60060F]"
        />

        <input
          id="subject"
          name="subject"
          type="text"
          placeholder="Subject"
          required
          value={formData.subject}
          onChange={handleChange}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#60060F]"
        />

        <textarea
          id="message"
          name="message"
          placeholder="Message"
          rows={4}
          required
          value={formData.message}
          onChange={handleChange}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#60060F]"
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className={`px-6 py-3 theme-bg font-semibold rounded-lg focus:outline-none focus:ring-2 hover:shadow-lg text-white ${
            isSubmitting ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
