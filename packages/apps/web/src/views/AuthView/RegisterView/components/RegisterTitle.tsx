import { Link } from "react-router-dom";

export default function LoginTitle() {
  return (
    <div className="flex flex-col space-y-4">
      <div className="w-full text-3xl text-center">REGISTER</div>
      <div className="flex justify-end w-full">
        <Link to="/auth/login" className="ml-auto text-lg italic underline text-gray-400 ">
          Sign In
        </Link>
      </div>
    </div>
  );
}
