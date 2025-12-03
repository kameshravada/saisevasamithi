import react from "react";

const Footer = () => (
  <footer className="bg-gray-900 text-gray-300 py-10 px-6 md:px-20">
    <div className="grid md:grid-cols-3 gap-8" id="footer">
      <div>
        <img
          src="/images/logo_white.png"
          className="mb-4 w-68 text-white"
        />
        <p className="text-sm">
          Living by the teachings of Bhagawan Sri Sathya Sai Baba through love,
          service, and unity.
        </p>
      </div>
      <div className="flex flex-col md:items-center text-start">
        <div className="">
          <h4 className="font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>Home</li>
            <li>Events</li>
            <li>Gallery</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div className="flex md:justify-center">
        <div className="">
          <h4 className="font-semibold text-white mb-4">Contact Us</h4>
          <p className="text-sm">Email: info@saimargam.org</p>
          <p className="text-sm">Phone: +91-9876543210</p>
        </div>
      </div>
    </div>
    <div className="text-center text-xs text-gray-500 mt-8">
      © {new Date().getFullYear()} Sai Margam. All Rights Reserved.
    </div>
  </footer>
);

export default Footer;