import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

//first defined form schema
const formSchema = z
  .object({
    name: z
      .string()
      .min(3, "Minimum length should be 3.")
      .max(20, "Maximum length should be 20."),
    age: z.coerce
      .number()
      .min(10, "Minimum Age should be 10.")
      .max(50, "Maximum Age should be 50."),
    password: z
      .string()
      .min(3, "Minimum Length should be 3.")
      .max(10, "Maximum  should be 50."),
    confirm: z.string(),
    email: z.email("Email is invalid"),
  })
  .refine((data) => data.password === data.confirm, {
    message: "Password don't match",
    path: ["confirm"], //path of error
  });

function ZodForm() {
  //useForm() returns object
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  function submitForm(data) {
    console.log(data);
  }

  console.log("Render");

  return (
    <>
      <form onSubmit={handleSubmit(submitForm)}>
        <div>
          <label htmlFor="first">Name : </label>
          <input id="first" {...register("name")} />
          {errors.name && <span>{errors.name.message}</span>}
        </div>
        <div>
          <label htmlFor="second">Age : </label>
          <input id="second" {...register("age")} />
          {errors.age && <span>{errors.age.message}</span>}
        </div>
        <div>
          <label htmlFor="forth">Email : </label>
          <input id="forth" {...register("email")} />
          {errors.email && <span>{errors.email.message}</span>}
        </div>
        <div>
          <label htmlFor="third">Password : </label>
          <input type="password" id="third" {...register("password")} />
          {errors.password && <span>{errors.password.message}</span>}
        </div>
        <div>
          <label htmlFor="fifth">Confirm Password : </label>
          <input type="password" id="fifth" {...register("confirm")} />
          {errors.confirm && <span>{errors.confirm.message}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default ZodForm;
