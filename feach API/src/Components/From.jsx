import { useState } from "react";
import { useForm } from "react-hook-form";
// importing states for creating forms and seting the setstate
function Register() {
  const [input, setInput] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const password = watch("password", "");
  // making sure the given password and confirmation password are same
  const submitButton = (userInfo) => {
    if (userInfo.password !== userInfo.repeatPassword) {
      alert("Password and Repeat Password should match");
      return;
    }
    console.log(userInfo);
    setInput(true);
  };
// returning HTML for the application.
  return (
    <div className="main">
      <h1 style={{ textAlign: "center" }}>Register Your data</h1>
      <div
        style={{
          backgroundColor: "green",
          textAlign: "center",
          fontSize: "2rem",
        }}
      >
        {input ? "Registration Successful" : ""}
      </div>
      <form onSubmit={handleSubmit(submitButton)}>
        <div>
          {/* making sure that the input box is not empty and also the entered data is correct */}
          <input
            type="text"
            placeholder="Enter First Name.."
            {...register("firstName", {
              required: "Please do not keep input empty",
              minLength: {
                value: 3,
                message: "Name should be at least 3 characters",
              },
              maxLength: {
                value: 30,
                message: "Name cannot be more than 30 characters",
              },
            })}
          />
          <div style={{ color: "red" }}>
            {errors.firstName ? errors.firstName.message : null}
          </div>
        </div>
        <div>
          {/* making sure that the input box is not empty and also the entered data is correct */}
          <input
            type="email"
            placeholder="Enter Email Id.."
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Invalid email address",
              },
            })}
          />
          <div style={{ color: "red" }}>
            {errors.email ? errors.email.message : null}
          </div>
        </div>
        <div>
       {/* making sure that the input box is not empty and also the entered data is correct */}
          <input
            type="password"
            placeholder="Enter strong Password.."
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 10,
                message: "Password must be at least 10 characters",
              },
              pattern: {
                value: /^(?=.*[!@#$%^&*])/,
                message: "Password must contain at least one special character",
              },
            })}
          />
          <div style={{ color: "red" }}>
            {errors.password ? errors.password.message : null}
          </div>
        </div>
        <div>
           {/* making sure that the input box is not empty and also the entered data is correct */}
          <input
            type="password"
            placeholder="Repeat Password.."
            {...register("repeatPassword", {
              required: "Repeat Password is required",
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
          />
          <div style={{ color: "red" }}>
            {errors.repeatPassword ? errors.repeatPassword.message : null}
          </div>
        </div>
        {/* it will work if all the input boxs are filled according to the conditions. */}
        <input type="submit" value={"Sign up"} />
      </form>
    </div>
  );
}

export default Register;
