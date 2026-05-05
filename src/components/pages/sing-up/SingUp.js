import { useForm } from "react-hook-form";
import { useState } from "react";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useAddUsersMutation } from "../../../store/usersSlice/usersSlice";
import { useGetUsersQuery } from "../../../store/usersSlice/usersSlice";
import { createActionCreatorInvariantMiddleware } from "@reduxjs/toolkit";
const SignUp = () => {
  document.title = `Форма реєстрації в системі - Store App`;
  const [addUsers] = useAddUsersMutation();
  const { data } = useGetUsersQuery();
  const [isCatchData, setIsCatchData] = useState({});
  let arr = [];
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();
  let newDate = new Date();
  data?.map((item) => {
    arr.push(item.login)
  })
  const checkForm = async (data) => {
    await addUsers({
      login: data.login,
      name: data.fullName,
      email: data.email,
      password: data.password,
      status: "",
      role: "user",
      date: `${newDate.getDate()}.${newDate.getMonth() + 1}.${newDate.getFullYear()}`
    }).unwrap();
    reset();
    window.location.href = `users`;
  };
  return (

    <div className="w-full flex items-center justify-center ">
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toasterId="default"
        toastOptions={{
          // Define default options
          className: '',
          duration: 4000,
          removeDelay: 1000,
          style: {
            background: '#363636',
            color: '#fff',
          },

          // Default options for specific types
          success: {
            duration: 3000,
            iconTheme: {
              primary: 'green',
              secondary: 'black',
            },
          },
        }}
      />
      <div className="w-full max-w-sm rounded-lg bg-gray-50 border border-gray-200 p-4 mx-2 mt-10">
        <h1 className="mb-4 text-center text-2xl font-semibold">Створити акунт</h1>
        <form onSubmit={handleSubmit(checkForm)}>
          <div className="mb-4">
            <label htmlFor="long-name" className="mb-1 block text-sm text-gray-400">Повне ім'я</label>
            <input type="text" id="long-name" placeholder="Jon Dea"
              className="py-2 w-full rounded border border-gray-300 bg-slate-100 px-2 text-center text-gray-400 placeholder-[#7f8c8d] focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              {...register("fullName", { required: true, minLength: 5 })}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="longin" className="mb-1 block text-sm text-gray-400">Логін</label>
            <input type="text" id="longsn" placeholder="Логін ..."
              className="py-2 w-full rounded border border-gray-300 bg-slate-100 px-2 text-center text-gray-400 placeholder-[#7f8c8d] focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              {...register("login", { required: true, min: 5 })}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="mb-1 block text-sm text-gray-400">Email</label>
            <input type="text" id="email" placeholder="example@example.com"
              className="py-2 w-full rounded border border-gray-300 bg-slate-100 px-2 text-center text-gray-400 placeholder-[#7f8c8d] focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              {...register("email")}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="mb-1 block text-sm text-gray-400">Пароль</label>
            <input type="password" id="password" placeholder="Password" autoComplete="new-password"
              className="py-2 w-full rounded border border-gray-300 bg-slate-100 px-2 text-center text-gray-400 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              {...register("password", { required: true, min: 10 })}
            />
          </div>
          <button
            className="py-2.5 font-medium w-full rounded bg-indigo-500 text-white transition-colors duration-300 hover:bg-indigo-600">
            Реєстрація
          </button>
        </form>
        <p className="mt-8 text-center text-sm text-gray-400">
          By clicking on sign in, you agree to our
          <a href="#" className="underline">Terms of Service</a> and <a href="#" className="underline">Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
}
export default SignUp;