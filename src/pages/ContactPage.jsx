import React from 'react';

const ContactPage = () => {
  return (
    <div className="bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 min-h-screen p-6">
      <div className="container mx-auto max-w-4xl bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">Get in Touch</h2>
            <p className="text-gray-600 mb-4">
              If you have any questionsfeel free to reach out to us. We are here to help!
            </p>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center text-gray-600">
                <svg
                  className="w-6 h-6 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h4v10H3zm5 0h4v10H8zm5 0h4v10h-4zm5 0h4v10h-4z"></path>
                </svg>
                <p>9458794676</p>
              </div>
              <div className="flex items-center text-gray-600">
                <svg
                  className="w-6 h-6 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c-1.5 0-3 1-3 2.5S10.5 16 12 16s3-1 3-2.5S13.5 11 12 11zm0-4a6 6 0 00-6 6v2a6 6 0 0012 0v-2a6 6 0 00-6-6zm0 12a4 4 0 01-4-4v-2a4 4 0 018 0v2a4 4 0 01-4 4z"></path>
                </svg>
                <p>mma@gmail.com</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">Contact Form</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
