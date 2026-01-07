import React from "react";

const Registration = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        {/* Card */}
        <div className="card w-full bg-[#f1fbbc] max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl shadow-2xl">
          <div className="card-body">
            <h2 className="text-2xl font-bold text-center mb-6">
              Create an Account
            </h2>
            <form className="flex flex-col gap-4">
              {/* Name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered w-full"
                />
              </div>

              {/* Email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered w-full"
                />
              </div>

              {/* Photo URL */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo URL"
                  className="input input-bordered w-full"
                />
              </div>

              {/* Password */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="input input-bordered w-full"
                />
              </div>

              {/* Confirm Password */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="input input-bordered w-full"
                />
              </div>

              {/* Terms & Conditions */}
              <div className="form-control">
                <label className="label cursor-pointer">
                  <input type="checkbox" className="checkbox mr-2" />
                  <span className="label-text">
                    I agree to the Terms & Conditions
                  </span>
                </label>
              </div>

              {/* Register Button */}
              <button type="submit" className="btn btn-primary mt-2">
                Register
              </button>

              {/* Link to Login */}
              <p className="text-center text-sm mt-2">
                Already have an account?{" "}
                <a href="/login" className="link link-hover text-blue-500">
                  Login
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
