import { useForm } from "react-hook-form";

function Form() {
  //useForm() returns object
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function submitForm(data) {
    console.log(data);
  }

  console.log("Render");

  return (
    <>
      <form onSubmit={handleSubmit(submitForm)}>
        <div>
          <label htmlFor="first">Name : </label>
          <input
            id="first"
            {...register("name", {
              required: "Name can't be empty.",
            })}
          />
          {errors.name && <span>{errors.name.message}</span>}
        </div>
        <div>
          <label htmlFor="second">Age : </label>
          <input
            id="second"
            {...register("age", {
              min: { value: 10, message: "Minimum age should be 10." },
              max: { value: 60, message: "Maximum age should be 60." },
            })}
          />
          {errors.age && <span>{errors.age.message}</span>}
        </div>
        <div>
          <label htmlFor="third">Password : </label>
          <input
            type="password"
            id="third"
            {...register("password", {
              minLength: { value: 5, message: "Minimum Length should be 5." },
              maxLength: { value: 10, message: "Maximum Length should be 10." },
            })}
          />
          {errors.passworf && <span>{errors.password.message}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Form;
