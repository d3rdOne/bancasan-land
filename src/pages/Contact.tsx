import React from "react";
import Header from "../components/Header";

const Contact = () => {
  return (
    <div className="relative">
      <Header className="absolute w-full text-gray-800" />
      <div className="bg-gray-50 h-svh p-8 text-gray-800 justify-center m-auto flex items-center">
        <div className="w-full sm:max-w-sm md:max-w-lg">
          <h1 className="text-4xl font-semibold tracking-wide uppercase text-left">
            Contact Us
          </h1>

          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="mt-4 text-gray-200"
          >
            <div className="flex flex-col sm:flex-row gap-2 flex-wrap text-sm">
              <div className="flex flex-col sm:flex-row w-full gap-2">
                {/* /FirstName */}
                <div className="flex flex-col w-full">
                  <label htmlFor="firstName" className="input--label">
                    First name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    className="input--field"
                  />
                </div>
                {/* LastName */}
                <div className="flex flex-col w-full">
                  <label htmlFor="lastName" className="input--label">
                    Last name
                  </label>
                  <input type="text" name="lastName" className="input--field" />
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col sm:w-full">
                <label htmlFor="email" className="input--label">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="input--field w-full"
                />
              </div>
              {/* Subject Area */}

              <div className="flex flex-col sm:w-full">
                <label htmlFor="subject" className="input--label">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  className="input--field w-full"
                />
              </div>

              {/* Message Area */}
              <div className="flex flex-col sm:w-full">
                <label htmlFor="subject" className="input--label">
                  Message
                </label>
                <textarea
                  name="message"
                  className="input--field w-full min-h-48"
                />
              </div>

              <button
                type="submit"
                className="mt-4 py-2 px-8 bg-yellow-400 text-black font-semibold tracking-widest rounded-sm shadow-md"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
