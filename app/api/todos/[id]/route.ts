import Todo from "@/app/models/todo";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const { title, description } = await req.json();
    // const { newTitle: title, newDescription: description } = await req.json(); // this is the same as above, but rename the request body

    const todo = await Todo.findByIdAndUpdate(
      id,
      { title, description },
      { new: true }
    );
    if (todo) {
      return NextResponse.json(todo, { status: 203 });
    } else {
      return NextResponse.json({ message: "Todo not found" }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

// GET by id
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const todo = await Todo.findById(id);
    // const todo = await Todo.find({_id: id}); // another way to get by id

    if (todo) {
      return NextResponse.json(todo, { status: 200 });
    } else {
      return NextResponse.json({ message: "Todo not found" }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
