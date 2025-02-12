import Link from "next/link";

function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-slate-800 px-8 py-4">
      <Link href={"/"} className="text-white font-bold">
        ToDo App
      </Link>
      <Link
        href={"/addTodo"}
        className="text-black font-bold rounded-lg bg-white px-4 py-2"
      >
        Add ToDo
      </Link>
    </nav>
  );
}

export default Navbar;
