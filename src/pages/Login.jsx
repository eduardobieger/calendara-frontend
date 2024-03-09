import Navbar from "../components/Navbar";

export default function Login() {
  return (
    <>
      <Navbar />
      <div className="m-auto max-w-96 flex items-center justify-center my-60">
        <form className="bg-zinc-800 p-6 rounded shadow-md w-full">
          <div className="flex flex-col mb-4">
            <label htmlFor="email" className="mb-2">
              Email
            </label>
            <input type="text" id="email" className="border p-1 rounded" />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="password" className="mb-2">
              Password
            </label>
            <input type="text" id="password" className="border p-1 rounded" />
          </div>
          <button type="submit" className="bg-blue-800 p-3 rounded w-full hover:bg-blue-600">
            Login
          </button>
        </form>
      </div>
    </>
  );
}
