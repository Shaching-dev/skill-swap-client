import { Eye, EyeClosed } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const Registration = () => {
  const [preview, setPreview] = useState(null);
  const [showPassword, setShowPassowrd] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const photoFile = watch("profilePhoto");
  useEffect(() => {
    if (photoFile && photoFile[0]) {
      const url = URL.createObjectURL(photoFile[0]);
      setPreview(url);
      return () => URL.revokeObjectURL(url);
    }
  }, [photoFile]);

  const handleRegister = (data) => {
    if (data.profilePhoto && data.profilePhoto[0]) {
      console.log("Uploaded file name:", data.profilePhoto[0].name);
    }
    console.log("Full form data:", data);
  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        {/* Card */}
        <div className="card w-full bg-[#f1fbbc] max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl shadow-2xl">
          <div className="card-body">
            <h2 className="text-2xl font-bold text-center mb-6">
              Create an Account
            </h2>
            <form
              onSubmit={handleSubmit(handleRegister)}
              className="flex flex-col gap-4">
              <div className="flex flex-col items-center">
                <label className="cursor-pointer">
                  <div className="w-32 h-32 rounded-full bg-gray-200 border overflow-hidden flex items-center justify-center">
                    {preview ? (
                      <img
                        src={preview}
                        alt="Preview"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-sm text-gray-500">
                        Select Photo
                      </span>
                    )}
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    {...register("profilePhoto", { required: true })}
                    className="hidden"
                  />
                </label>
                {errors.profilePhoto && (
                  <p className="text-error text-sm mt-1">Photo is required</p>
                )}
              </div>

              {/* Name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered w-full"
                />
                {errors.name?.type === "required" && (
                  <p className="text-red-600 font-bold my-2">
                    This field is required
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  placeholder="Email"
                  className="input input-bordered w-full"
                />

                {errors.email?.type === "required" && (
                  <p className="text-red-600 font-bold my-2">
                    This field is required
                  </p>
                )}
              </div>

              {/* Password */}
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>

                <input
                  {...register("password", { required: true })}
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="input input-bordered w-full pr-10"
                />

                {/* Eye Icon */}
                <div
                  onClick={() => setShowPassowrd(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer flex items-center text-gray-500 hover:text-gray-700">
                  {showPassword ? <EyeClosed size={20} /> : <Eye size={20} />}
                </div>

                {/* Reserve space for error */}
                <p className="text-red-600 font-bold mt-1 min-h-[1.25rem]">
                  {errors.password?.type === "required" &&
                    "This field is required"}
                </p>
              </div>

              {/* Confirm Password */}
              {/* <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  {...register("confirmPassword", { required: true })}
                  type={showPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  className="input input-bordered w-full"
                />
                {errors.confirmPassword?.type === "required" && (
                  <p className="text-red-600 font-bold my-2">
                    This field is required
                  </p>
                )}

                <div
                  onClick={() => setShowPassowrd(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-1/10">
                  {showPassword ? <Eye /> : <EyeClosed />}
                </div>
              </div> */}

              {/* Terms & Conditions */}
              <div className="form-control">
                <label className="label cursor-pointer">
                  <input
                    {...register("check", { required: true })}
                    type="checkbox"
                    className="checkbox mr-2"
                  />
                  <span className="label-text">
                    I agree to the Terms & Conditions
                  </span>
                </label>

                {errors.check?.type === "required" && (
                  <p className="text-red-600 font-bold my-2">
                    This field is required
                  </p>
                )}
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
