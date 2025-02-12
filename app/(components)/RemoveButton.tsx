"use client";

import { API_URL } from "@/libs/config";
import { useRouter } from "next/navigation";
import { HiOutlineTrash } from "react-icons/hi";
function RemoveButton({ id }: { id: string }) {
  const router = useRouter();

  const handleDelete = async () => {
    const confirmed = confirm("Are you sure you want to delete this todo?");

    if (confirmed) {
      try {
        const response = await fetch(`${API_URL}/api/todos?id=${id}`, {
          method: "DELETE",
        });
        if (!response.ok) throw new Error("Failed to delete todo");
        console.log("Todo deleted successfully");
        router.refresh();
      } catch (error) {
        console.error("Error deleting todo:", error);
      }
    }
  };

  return (
    <button onClick={handleDelete} className="text-red-600">
      <HiOutlineTrash size={24} />
    </button>
  );
}

export default RemoveButton;
