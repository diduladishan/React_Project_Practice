import { useForm } from "react-hook-form";

const SimpleFormValidation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onsubmit = (data) => {
    alert(
      `Form Submitted successfully! Name: ${data.name} and Email ${data.email}`
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onsubmit)}>
        <input
          {...register("name", { required: "name is required" })}
          className="border-2 border-black rounded-md mb-2"
          placeholder="Enter your name"
        />

        {errors.name && <p>{errors.name.message}</p>}

        <input
          {...register("email", { required: "email is required" })}
          className="border-2 border-black rounded-md mb-2"
          placeholder="Enter your email"
        />

        {errors.email && <p>{errors.email.message}</p>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SimpleFormValidation;
