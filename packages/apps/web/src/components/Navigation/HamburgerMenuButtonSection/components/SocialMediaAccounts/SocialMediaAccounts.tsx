import { regularTransition } from "~root/styles/transition";

export default function SocialMediaAccounts() {
  return (
    <div className="flex space-x-4 mr-48">
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className={`hover:scale-150 ${regularTransition}`}
      >
        <img src="/assets/instagram.svg" alt="Facebook" className="w-5 h-5" />
      </a>

      <a
        href="https://youtube.com"
        target="_blank"
        rel="noopener noreferrer"
        className={`hover:scale-150 ${regularTransition}`}
      >
        <img src="/assets/youtube.svg" alt="Facebook" className="w-5 h-5" />
      </a>

      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className={`hover:scale-150 ${regularTransition}`}
      >
        <img src="/assets/linkedin.svg" alt="Facebook" className="w-5 h-5" />
      </a>
    </div>
  );
}
