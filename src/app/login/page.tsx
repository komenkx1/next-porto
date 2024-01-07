"use client";
import { useLoginUser } from "@/queries/user.query";
import { Button } from "@nextui-org/react";
import { useForm } from "react-hook-form";

export default function LoginPage() {
  const { isPending: isLoginLoading, mutate: login } = useLoginUser();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm<User>();

  const loginUser = async (user: User) => {
     login(user);
  };
  return (
    <div
      style={{
        backgroundImage: `url(/bg/bg-element.png)`,
        backgroundSize: "cover",
        backgroundColor: "black",
      }}
      className="flex justify-center items-center w-screen h-screen"
    >
      <div className="form bg-gray-800 bg-opacity-40 rounded-xl border border-gray-500 backdrop-blur-[20px] p-3 ">
        <h1 className="font-bold my-2">Login Page</h1>
        <hr className="my-3" />
        <form onSubmit={handleSubmit(loginUser)}>
          <div className="input my-2">
            <label htmlFor="username">Username</label>
            <input
              {...register("username", { required: true })}
              type="text"
              className="c-form-input my-1 !bg-transparent"
              placeholder="Username"
            />
            {errors.username && (
              <span className="text-sm fw-bold text-red-500">
                This field is required
              </span>
            )}
          </div>
          <div className="input my-2">
            <label htmlFor="password">Password</label>
            <input
              {...register("password", { required: true })}
              type="password"
              className="c-form-input my-1 !bg-transparent"
              placeholder="Password"
            />
            {errors.password && (
              <span className="text-sm fw-bold text-red-500">
                This field is required
              </span>
            )}
          </div>
          <hr className="my-4" />
          <Button type="submit" color="primary" className="w-full">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}
