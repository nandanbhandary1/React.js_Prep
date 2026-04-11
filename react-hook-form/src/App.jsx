import { useState } from "react";
import { useForm } from "react-hook-form";

import "./App.css";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(data) {
    await new Promise((resolve) => setTimeout(resolve, 5000))
    console.log("Submitting the form :", data);
  }
  return (
    <>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="">First Name:</label>
          <input className={errors.fname ? 'input-error':""}type="text" {...register("fname", { required: true, minLength:{value:2, message:"Min Length not satisfied"} })} />
          {errors.fname && <p className="error-message">{errors.fname.message}</p>}
        </div>
        <br />
        <div>
          <label htmlFor="">Middle Name:</label>
          <input type="text" {...register("mname")} />
        </div>
        <br />
        <div>
          <label htmlFor="">Last Name:</label>
          <input type="text" {...register("lname", { pattern:{value: /^[A-Za-z]+$/i, message:"Last name is not as per rule"} })} />
          {errors.lname && <p className="error">{errors.lname.message}</p>}
        </div>
        <br />
        <input type="submit" disabled={isSubmitting} value={isSubmitting ? "Submitting" : ''}/>
      </form>
    </>
  );
}

export default App;
