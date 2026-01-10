import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative mt-0 mb-0">
      <div className="relative bg-gradient-to-b from-transparent from-[16%] to-black pt-12 sm:pt-16 md:pt-20 pb-0 px-4 sm:px-6 md:px-8 lg:px-16 text-custom-6 font-raleway">

        <div className="max-w-7xl mx-auto">
          <div className="pt-8 sm:pt-10 md:pt-12 pb-12 sm:pb-14 md:pb-16 px-3 sm:px-4 md:px-6 lg:px-10 border-t border-custom-6 border-opacity-30">

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">

             <div className="col-span-2 lg:col-span-1 flex flex-col space-y-4 sm:space-y-6">
                <h1 className="text-white font-outfit text-xl sm:text-2xl font-bold tracking-wide transform transition-all duration-300 hover:scale-105">
                  <Link to="/" className="text-white no-underline hover:text-custom-2 transition-colors duration-300">
                    EVERGEN AI
                  </Link>
                </h1>
                <div className="flex flex-col space-y-3 sm:space-y-4">
                  <p className="text-custom-6 text-xs sm:text-sm font-normal tracking-wide">Follow us on</p>
                  <ul className="flex gap-4 sm:gap-5 items-center">
                    <li className="transform transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                      <a
                        href="https://www.facebook.com/share/15gfxvK2sT/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#AED0FC] hover:text-custom-5 transition-all duration-300 block p-2 -m-2"
                        aria-label="Facebook"
                      >
                        <svg width="28" height="28" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg w-6 h-6 sm:w-7 sm:h-7">
                          <path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12c0 5 3.7 9.1 8.4 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7C18.3 21.1 22 17 22 12c0-5.5-4.5-10-10-10z"></path>
                        </svg>
                      </a>
                    </li>
                    <li className="transform transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                      <a
                        href="https://www.instagram.com/evergenai/?utm_source=ig_web_button_share_sheet"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#AED0FC] hover:text-custom-5 transition-all duration-300 block p-2 -m-2"
                        aria-label="Instagram"
                      >
                        <svg width="28" height="28" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg w-6 h-6 sm:w-7 sm:h-7">
                          <path fill="currentColor" d="M12,4.622c2.403,0,2.688,0.009,3.637,0.052c0.877,0.04,1.354,0.187,1.671,0.31c0.42,0.163,0.72,0.358,1.035,0.673 c0.315,0.315,0.51,0.615,0.673,1.035c0.123,0.317,0.27,0.794,0.31,1.671c0.043,0.949,0.052,1.234,0.052,3.637 s-0.009,2.688-0.052,3.637c-0.04,0.877-0.187,1.354-0.31,1.671c-0.163,0.42-0.358,0.72-0.673,1.035 c-0.315,0.315-0.615,0.51-1.035,0.673c-0.317,0.123-0.794,0.27-1.671,0.31c-0.949,0.043-1.233,0.052-3.637,0.052 s-2.688-0.009-3.637-0.052c-0.877-0.04-1.354-0.187-1.671-0.31c-0.42-0.163-0.72-0.358-1.035-0.673 c-0.315-0.315-0.51-0.615-0.673-1.035c-0.123-0.317-0.27-0.794-0.31-1.671C4.631,14.688,4.622,14.403,4.622,12 s0.009-2.688,0.052-3.637c0.04-0.877,0.187-1.354,0.31-1.671c0.163-0.42,0.358-0.72,0.673-1.035 c0.315-0.315,0.615-0.51,1.035-0.673c0.317-0.123,0.794-0.27,1.671-0.31C9.312,4.631,9.597,4.622,12,4.622 M12,3 C9.556,3,9.249,3.01,8.289,3.054C7.331,3.098,6.677,3.25,6.105,3.472C5.513,3.702,5.011,4.01,4.511,4.511 c-0.5,0.5-0.808,1.002-1.038,1.594C3.25,6.677,3.098,7.331,3.054,8.289C3.01,9.249,3,9.556,3,12c0,2.444,0.01,2.751,0.054,3.711 c0.044,0.958,0.196,1.612,0.418,2.185c0.23,0.592,0.538,1.094,1.038,1.594c0.5,0.5,1.002,0.808,1.594,1.038 c0.572,0.222,1.227,0.375,2.185,0.418C9.249,20.99,9.556,21,12,21s2.751-0.01,3.711-0.054c0.958-0.044,1.612-0.196,2.185-0.418 c0.592-0.23,1.094-0.538,1.594-1.038c0.5-0.5,0.808-1.002,1.038-1.594c0.222-0.572,0.375-1.227,0.418-2.185 C20.99,14.751,21,14.444,21,12s-0.01-2.751-0.054-3.711c-0.044-0.958-0.196-1.612-0.418-2.185c-0.23-0.592-0.538-1.094-1.038-1.594 c-0.5-0.5-1.002-0.808-1.594-1.038c-0.572-0.222-1.227-0.375-2.185-0.418C14.751,3.01,14.444,3,12,3L12,3z M12,7.378 c-2.552,0-4.622,2.069-4.622,4.622S9.448,16.622,12,16.622s4.622-2.069,4.622-4.622S14.552,7.378,12,7.378z M12,15 c-1.657,0-3-1.343-3-3s1.343-3,3-3s3,1.343,3,3S13.657,15,12,15z M16.804,6.116c-0.596,0-1.08,0.484-1.08,1.08 s0.484,1.08,1.08,1.08c0.596,0,1.08-0.484,1.08-1.08S17.401,6.116,16.804,6.116z"></path>
                        </svg>
                      </a>
                    </li>
                    <li className="transform transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                      <a
                        href="https://www.linkedin.com/company/evergen-ai/about/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#AED0FC] hover:text-custom-5 transition-all duration-300 block p-2 -m-2"
                        aria-label="LinkedIn"
                      >
                        <svg width="28" height="28" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg w-6 h-6 sm:w-7 sm:h-7">
                          <path fill="currentColor" d="M19.7,3H4.3C3.582,3,3,3.582,3,4.3v15.4C3,20.418,3.582,21,4.3,21h15.4c0.718,0,1.3-0.582,1.3-1.3V4.3 C21,3.582,20.418,3,19.7,3z M8.339,18.338H5.667v-8.59h2.672V18.338z M7.004,8.574c-0.857,0-1.549-0.694-1.549-1.548 c0-0.855,0.691-1.548,1.549-1.548c0.854,0,1.547,0.694,1.547,1.548C8.551,7.881,7.858,8.574,7.004,8.574z M18.339,18.338h-2.669 v-4.177c0-0.996-0.017-2.278-1.387-2.278c-1.389,0-1.601,1.086-1.601,2.206v4.249h-2.667v-8.59h2.559v1.174h0.037 c0.356-0.675,1.227-1.387,2.526-1.387c2.703,0,3.203,1.779,3.203,4.092V18.338z"></path>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Pages */}
              <div className="flex flex-col space-y-4">
                <h3 className="text-custom-5 font-semibold">Pages</h3>
                <ul className="space-y-2">
                  {["/", "/about", "/services", "/faq", "/contact"].map((path, i) => (
                    <li key={i}>
                      <Link to={path} className="text-white hover:text-custom-2 text-sm">
                        {path === "/" ? "HOME" : path.replace("/", "").toUpperCase()}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div className="space-y-4">
                <h3 className="text-custom-5 font-semibold">Get in touch</h3>
                <p className="text-white text-sm">+91-97xxx-xxxxx</p>
                <a
                  href="mailto:info@evergenai.com"
                  className="text-white hover:text-custom-2 text-sm"
                >
                  info@evergenai.com
                </a>
              </div>

              {/* Address */}
              <div className="col-span-2 lg:col-span-1 space-y-4">
                <h3 className="text-custom-5 font-semibold">Address</h3>
                <a
                  href="https://maps.app.goo.gl/pLhTGuVyHevAd6V56"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-custom-2 text-sm"
                >
                  <address className="not-italic">
                    EverGen AI<br />
                    2nd Floor, Suncity Success Tower<br />
                    Sector-65, Gurgaon<br />
                    Haryana - 122002
                  </address>
                </a>
              </div>

            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-custom-2 to-custom-7 text-center py-3">
          <p className="text-white text-xs sm:text-sm">
            © All rights reserved 2025
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
