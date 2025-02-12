import Link from "next/link";
import RemoveButton from "./RemoveButton";
import { HiPencil } from "react-icons/hi";

function TopicList() {
  return (
    <>
      <div className="flex justify-between border border-slate-400 p-4 my-3 gap-5 items-start">
        <div>
          <h2 className="text-2xl font-bold">ToDo Title</h2>
          <div>ToDo Description</div>
        </div>

        <div className="flex gap-3">
          <RemoveButton />
          <Link href="/editTodo" className="text-blue-600">
            <HiPencil size={24} />
          </Link>
        </div>
      </div>
    </>
  );
}

export default TopicList;
