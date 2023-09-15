import { Link } from "react-router-dom";

import { regularTransition } from "~root/styles/transition";

export interface ILinkButtonProps {
  text: string;
  to: string;
  onClick: () => void;
}

export default function LinkButton({ text, to, onClick }: ILinkButtonProps) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`mb-4 text-xl hover:scale-150 ${regularTransition}`}
    >
      {text}
    </Link>
  );
}
