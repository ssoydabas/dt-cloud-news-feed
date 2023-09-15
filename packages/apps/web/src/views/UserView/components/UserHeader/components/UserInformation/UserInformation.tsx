export interface IUserInformationProp {
  name: string;
  email: string;
}

export default function UserInformation({ name, email }: IUserInformationProp) {
  return (
    <div className="flex flex-col space-y-8">
      <div>{name}</div>
      <div>{email}</div>
    </div>
  );
}
