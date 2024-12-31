import React, { useState } from "react";

const UserForm = () => {
  const [firstname, Setfirstname] = useState("");
  const [lastname, Setlastname] = useState("");
  const [address, Setaddress] = useState("");
  const [country, Setcountry] = useState("");
  const [email, Setemail] = useState("");
  const [phonenumber, Setphonenumber] = useState("");

  const HandleOnSubmit = (e) => {
    e.preventDefault();
    if (
      !firstname &&
      !lastname &&
      !address &&
      !country &&
      !email &&
      !phonenumber
    ) {
      alert("Enter All fields !!");
    } else {
      alert("form Submitted Success...");
      Setfirstname("");
      Setlastname("");
      Setaddress("");
      Setcountry("");
      Setemail("");
      Setphonenumber("");
    }
  };
  return (
    <>
      <div className="w-auto rounded-r-3xl font-Raleway p-8 md:py-10 md:px-20 bg-slate-100 ">
        <form onSubmit={HandleOnSubmit}>
          <h2 className="text-xl md:text-3xl font-semibold">
            Thank you so much for taking the time!
          </h2>
          <p className="text-lg font-[500]">
            Please provide the below details!
          </p>
          <div className="md:py-10 space-y-6">
            <div className="flex flex-col space-y-1 justify-start items-start">
              <label className="font-semibold" htmlFor="firstname">
                First Name:
              </label>
              <input
                value={firstname}
                onChange={(e) => Setfirstname(e.target.value)}
                type="text"
                required
                name="firstname"
                placeholder="John"
                className="shadow-md shadow-slate-300 py-3 outline-none border-none px-3 placeholder-slate-500 rounded-xl md:w-1/2 w-full"
              />
            </div>

            <div className="flex flex-col space-y-1 justify-start items-start">
              <label className="font-semibold" htmlFor="lastname">
                Last Name:
              </label>
              <input
                required
                value={lastname}
                onChange={(e) => Setlastname(e.target.value)}
                type="text"
                name="lastname"
                placeholder="Doe"
                className="shadow-md shadow-slate-300 py-3 outline-none border-none px-3 placeholder-slate-500 rounded-xl md:w-1/2 w-full"
              />
            </div>

            <div className="flex flex-col space-y-1 justify-start items-start">
              <label className="font-semibold" htmlFor="address">
                Address:
              </label>
              <textarea
                required
                value={address}
                onChange={(e) => Setaddress(e.target.value)}
                placeholder="Enter you full postal address"
                name="address"
                className="bg-white shadow-md shadow-slate-300 outline-none p-4 md:w-2/3 w-full placeholder-slate-500 rounded-xl"
                cols="60"
                rows="5"
              ></textarea>
            </div>

            <div className="flex flex-col space-y-1 justify-start items-start">
              <label className="font-semibold" htmlFor="country">
                Country:
              </label>
              <input
                required
                value={country}
                onChange={(e) => Setcountry(e.target.value)}
                type="text"
                name="country"
                placeholder="India"
                className="shadow-md shadow-slate-300 py-3 outline-none border-none px-3 placeholder-slate-500 rounded-xl md:w-1/2 w-full"
              />
            </div>

            <div className="flex flex-col space-y-1 justify-start items-start">
              <label className="font-semibold" htmlFor="email">
                Email ID:
              </label>
              <input
                required
                value={email}
                onChange={(e) => Setemail(e.target.value)}
                type="email"
                name="email"
                placeholder="example@sample.com"
                className="shadow-md shadow-slate-300 py-3 outline-none border-none px-3 placeholder-slate-500 rounded-xl md:w-1/2 w-full"
              />
            </div>

            <div className="flex flex-col space-y-1 justify-start items-start">
              <label htmlFor="phonenumber" className="font-semibold">
                Phone Number:
              </label>
              <input
                required
                value={phonenumber}
                onChange={(e) => Setphonenumber(e.target.value)}
                type="text"
                name="phonenumber"
                placeholder="+91 123456789"
                className="shadow-md shadow-slate-300 py-3 outline-none border-none px-3 placeholder-slate-500 rounded-xl md:w-1/2 w-full"
              />
            </div>
            <div>
              <button
                type="submit"
                className=" text-white py-2 px-4 rounded-xl border-none outline-none hover:bg-green-600 bg-green-400 text-lg md:text-xl font-semibold transition-all ease-linear duration-300"
              >
                Submit Feedback
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default UserForm;
