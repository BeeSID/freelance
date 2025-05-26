import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for reaching out!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <main className="max-w-3xl mx-auto px-6 pt-46 pb-16">
      <h1 className="text-3xl font-semibold mb-6 text-gray-900">Contact Us</h1>

      <p className="mb-6 text-gray-700">
        Feel free to reach out by email or phone, or send us a message using the form below.
      </p>

      <div className="mb-8 text-sm">
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:info@organization.com" className="text-blue-600 underline">
            info@organization.com
          </a>
        </p>
        <p>
          <strong>Phone:</strong>{" "}
          <a href="tel:+1234567890" className="text-blue-600 underline">
            +1 (234) 567-890
          </a>
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block font-medium mb-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Your email"
          />
        </div>

        <div>
          <label htmlFor="message" className="block font-medium mb-1">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Write your message here"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </main>
  );
};

export default Contact;
