import { useQuery } from "@tanstack/react-query";
import { ALL_APIS } from "../services";
import { useState } from "react";
import reactLogo from "../logo.svg";

const LoginForm = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: () =>
      ALL_APIS.userLogin("/user/login", {
        username: inputs.email,
        password: inputs.password,
      }),
    enabled: false,
  });

  const handleLogin = (e) => {
    e.preventDefault();
    refetch();
  };

  return (
    <div className="flex">
      <div className="w-1/2 h-screen bg-primary flex justify-center items-center">
        <img src={reactLogo} alt="LoginLogo" width={600} />
      </div>
      <div className="w-1/2 h-screen flex items-center">
        <form class="w-1/2 mx-auto" onSubmit={handleLogin}>
          <div className="mb-5">
            <h1 className="text-3xl font-bold">Wellcome Back</h1>
            <p className="mt-1 text-gray-500 text-sm">
              Please enter your details
            </p>
          </div>
          <div class="mb-3">
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              type="text"
              id="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@flowbite.com"
              onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
            />
          </div>
          <div class="mb-3">
            <label
              for="password"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your password
            </label>
            <input
              type="password"
              id="password"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </div>
          <div class="flex items-start mb-5">
            <div class="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              />
            </div>
            <label
              for="remember"
              class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Remember me
            </label>
          </div>
          <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm w-full  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
