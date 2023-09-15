import { Link } from "react-router-dom";

export default function LoginTitle() {
  return (
    <div className="flex flex-col space-y-4">
      <div className="w-full text-3xl text-center">LOGIN</div>

      <div className="flex justify-end px-48">
        <Link
          to="/auth/register"
          className="ml-auto text-lg italic underline text-gray-400 "
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
}
