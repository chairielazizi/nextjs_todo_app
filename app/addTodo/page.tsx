"use client";
import { API_URL } from "@/libs/config";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

// by default nextjs is server side rendering, but we need to change to client side rendering to add interactivity and receive data

function AddTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  // console.log("AddTodo change to client side rendering");

  const router = useRouter(); //to navigate to home after adding todo successfully

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title || !description) {
      console.error("Title and description are required");
      alert("Title and description are required");
      return;
    }

    try {
      const todo = { title, description };
      const response = await fetch(`${API_URL}/api/todos`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(todo),
      });
      if (response.ok) {
        setTitle("");
        setDescription("");
        router.push("/");
      } else {
        console.error("Failed to add todo");
      }
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        type="text"
        className="border border-slate-500 px-8 py-2"
        placeholder="Add your To Do's Title here..."
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <input
        type="text"
        className="border border-slate-500 px-8 py-2"
        placeholder="Add your To Do's Description here..."
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      <button className="text-white bg-green-700 px-8 py-2 w-fit items-end flex-row-reverse">
        Submit
      </button>
    </form>
  );
}

export default AddTodo;
