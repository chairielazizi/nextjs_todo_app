function AddTodo() {
  return (
    <form className="flex flex-col gap-3">
      <input
        type="text"
        className="border border-slate-500 px-8 py-2"
        placeholder="Add your To Do's Title here..."
      />
      <input
        type="text"
        className="border border-slate-500 px-8 py-2"
        placeholder="Add your To Do's Description here..."
      />
      <button className="text-white bg-green-700 px-8 py-2 w-fit items-end flex-row-reverse">
        Submit
      </button>
    </form>
  );
}

export default AddTodo;
