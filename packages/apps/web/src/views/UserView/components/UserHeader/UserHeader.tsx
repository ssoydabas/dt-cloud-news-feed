import { UserHeaderPicture, UserInformation } from "./components";

export interface IUserHeaderProps {
  name: string;
  email: string;
}

export default function UserHeader({ name, email }: IUserHeaderProps) {
  return (
    <div className="flex space-x-36 items-center h-56 px-12 border rounded-3xl">
      <UserHeaderPicture />
      <UserInformation name={name} email={email} />
    </div>
  );
}
