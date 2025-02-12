import Link from "next/link";
import RemoveButton from "./RemoveButton";
import { HiPencil } from "react-icons/hi";
import { API_URL } from "@/libs/config";

interface Todo {
  _id: string;
  title: string;
  description: string;
}

// : Promise<{ todos: Todo[]; error?: string }>
const getAllTodos = async () => {
  try {
    const response = await fetch(`${API_URL}/api/todos`, { cache: "no-store" }); //by default next will cache the first request, but we want to fetch the latest data
    if (!response.ok) throw new Error("Failed to fetch todos");
    return response.json();
  } catch (error) {
    console.error("Error loading list: ", error);
    return { todos: [], error: "Failed to load list" };
  }
};

async function TopicList() {
  const todos = await getAllTodos();
  if (!todos) {
    console.log("No ToDos found from frontend");
  }
  return (
    <>
      {todos.map((todo: Todo) => (
        <div
          key={todo._id}
          className="flex justify-between border border-slate-400 p-4 my-3 gap-5 items-start"
        >
          <div>
            <h2 className="text-2xl font-bold">{todo.title}</h2>
            <div>{todo.description}</div>
          </div>

          <div className="flex gap-3">
            <RemoveButton id={todo._id} />
            <Link href={`/editTodo/${todo._id}`} className="text-blue-600">
              <HiPencil size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}

export default TopicList;
