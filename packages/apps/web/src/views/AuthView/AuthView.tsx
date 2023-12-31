import type { ReactNode } from "react";

export interface IAuthViewProps {
  Title: ReactNode;
  Form: ReactNode;
}

export default function AuthView({ Title, Form }: IAuthViewProps) {
  return (
    <div className="flex flex-col justify-center space-y-12 w-3/4 mx-auto my-24 px-36 pt-14 pb-36">
      {Title}

      {Form}
    </div>
  );
}
