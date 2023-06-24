import Avatar from "./Avatar";

export default function AppBar() {
  return (
    <header className="flex flex-row items-center py-4 z-50 mb-28">
      <nav className="grow">
        <div className="h-12 w-12">
          <Avatar />
        </div>
      </nav>
    </header>
  );
}
