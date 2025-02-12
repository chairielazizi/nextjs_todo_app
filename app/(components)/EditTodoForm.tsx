"use client";

import { API_URL } from "@/libs/config";
import { useRouter } from "next/navigation";
import { useState } from "react";

function EditTodoForm({
  id,
  title,
  description,
}: {
  id: string;
  title: string;
  description: string;
}) {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newTitle || !newDescription) {
      console.error("Title and description are required");
      alert("Title and description are required");
      return;
    }

    try {
      const todo = { title: newTitle, description: newDescription };
      const response = await fetch(`${API_URL}/api/todos/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(todo),
      });
      if (response.ok) {
        // setNewTitle("");
        // setNewDescription("");
        router.refresh();
        router.push("/");
      } else {
        console.error("Failed to update todo");
      }
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        type="text"
        className="border border-slate-500 px-8 py-2"
        placeholder="Add your To Do's Title here..."
        onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle}
      />
      <input
        type="text"
        className="border border-slate-500 px-8 py-2"
        placeholder="Add your To Do's Description here..."
        onChange={(e) => setNewDescription(e.target.value)}
        value={newDescription}
      />
      <button
        type="submit"
        className="text-white bg-green-700 px-8 py-2 w-fit items-end flex-row-reverse"
      >
        Update ToDo
      </button>
    </form>
  );
}

export default EditTodoForm;
