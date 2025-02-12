import EditTodoForm from "@/app/(components)/EditTodoForm";
import { API_URL } from "@/libs/config";

const getTodoById = async (id: string) => {
  try {
    const response = await fetch(`${API_URL}/api/todos/${id}`, {
      cache: "no-store",
    });
    const todo = await response.json();
    return todo;
  } catch (error) {
    console.error("Error fetching todo by ID:", error);
  }
};

export default async function EditTodo({ params }: { params: { id: string } }) {
  const { id } = params;
  const { todo } = await getTodoById(id);
  if (!todo) return <div>Todo not found</div>;
  const { title, description } = todo;
  console.log("ID:", id);

  return <EditTodoForm id={id} title={title} description={description} />;
}
