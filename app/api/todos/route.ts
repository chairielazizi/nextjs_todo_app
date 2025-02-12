import Todo from "@/app/models/todo";
import connectDB from "@/libs/db";
import { NextRequest, NextResponse } from "next/server";

const LoadDB = async () => {
  await connectDB();
};
LoadDB();

export async function POST(req: NextRequest) {
  const { title, description } = await req.json();
  const todo = await Todo.create({ title, description });
  return NextResponse.json(todo, { status: 201 });
}

export async function GET() {
  try {
    const todos = await Todo.find();
    if (todos) {
      return NextResponse.json(todos, { status: 200 });
    } else {
      return NextResponse.json({ message: "No ToDos found" }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const id = req.nextUrl.searchParams.get("id"); // get the id from the url
    const todo = await Todo.findByIdAndDelete(id);
    if (todo) {
      return NextResponse.json(
        { message: "Todo deleted successfully" },
        { status: 200 }
      );
    } else {
      return NextResponse.json({ message: "Todo not found" }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
