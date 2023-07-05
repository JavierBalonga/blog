import HeaderAvatar from "./HeaderAvatar";

export default function AppBar() {
  return (
    <header className="flex flex-row items-center py-4 z-50">
      <nav className="grow">
        <div className="h-12 w-12">
          <HeaderAvatar />
        </div>
      </nav>
    </header>
  );
}
