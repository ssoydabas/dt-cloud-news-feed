import UserSource from "./UserSource";

export default function UserSources() {
  return (
    <div className="flex flex-col space-y-2">
      <div className="py-2 border-b border-black">Favorite Sources</div>

      <div className="flex flex-col max-h-64 space-y-8 px-4 overflow-y-auto scroll-smooth thin-scrollbar">
        <UserSource />
        <UserSource />
        <UserSource />
        <UserSource />
        <UserSource />
        <UserSource />
        <UserSource />
      </div>
    </div>
  );
}
