import UserInformation from "./components/UserInformation/UserInformation";
import {
  UserSources,
  UserCategories,
  UserAuthors,
} from "./components";

export default function UserView() {
  return (
    <div className="flex flex-col justify-center space-y-12 w-1/2 mx-auto my-12 px-36 py-12 border rounded-3xl">
      <UserInformation />
      <UserSources />
      <UserCategories />
      <UserAuthors />
    </div>
  );
}
