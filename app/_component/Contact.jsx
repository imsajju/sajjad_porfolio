'use client';
import React, { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setSuccessMessage(data.message);
        setErrorMessage(null);
        // Clear form after successful submission
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setErrorMessage(data.message || 'Failed to send email');
        setSuccessMessage(null);
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setErrorMessage('Failed to send email');
      setSuccessMessage(null);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-6xl font-serif text-slate-200 mb-24">Contact Me</h1>
      </div>

      <div className="flex flex-col lg:flex-row lg:gap-8">
        <div className="ml-4 lg:ml-28 w-full lg:w-1/3 mb-8 lg:mb-0" data-aos="fade-up">
          <h3 className="text-xl md:text-2xl font-serif text-slate-200 mb-4">Phone Number</h3>
          <p className="text-slate-300 mb-4">+91 7004452594</p>
          <h3 className="text-xl md:text-2xl font-serif text-slate-200 mb-4">Email</h3>
          <p className="text-slate-300 mb-4">
            <a href="mailto:mdsajjaddbg2016@gmail.com">mdsajjaddbg2016@gmail.com</a>
          </p>

          <h3 className="text-xl md:text-2xl font-serif text-slate-200 mb-4">Social Network</h3>
          <ul className="flex space-x-4 mb-4">
            <li>
              <a
                href="https://www.linkedin.com/in/imsajju/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-slate-300"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a
                href="https://x.com/Eyesajju"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-slate-300"
              >
                <FaSquareXTwitter />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/imsajju"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-slate-300"
              >
                <FaGithub />
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-2/3" data-aos="fade-up">
          <form
            className="bg-gray-100 shadow-md rounded px-4 md:px-8 pt-6 pb-8 mb-4"
            id="contact-form"
            name="contact"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your E-mail"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Phone Number"
              />
            </div>
            <div className="mb-6">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
                placeholder="Your Message"
              ></textarea>
            </div>
            <div className="flex items-center justify-center">
              <button
                id="submit"
                type="submit"
                name="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Send
              </button>
            </div>
            {successMessage && (
              <div id="success" className="mt-4">
                <p className="text-green-500 text-center">{successMessage}</p>
              </div>
            )}
            {errorMessage && (
              <div id="error" className="mt-4">
                <p className="text-red-500 text-center">{errorMessage}</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
