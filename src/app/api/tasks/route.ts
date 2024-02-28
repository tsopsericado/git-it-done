import prisma from "@/app/utils/connect";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {

  try {
    const { userId } = auth()

    if (!userId) {
      return NextResponse.json({ error: "Unauthorise", status: 401 })
    }

    const { title, description, date, completed, important } = await req.json()

    if (!title || !description || !date) {
      return NextResponse.json({
        error: "Missing required field",
        status: 400
      })
    }

    if (title.length < 3) {
      return NextResponse.json({
        error: "Title too short, it must atleast be 3 characters long",
        status: 400
      })
    }

    const task = await prisma.task.create({
      data: {
        title,
        description,
        date,
        isCompleted: completed,
        isImportant: important,
        userId,
      },
    })

    return NextResponse.json(task);


  } catch (error) {
    console.log("Error creating Task:", error);
    return NextResponse.json({ error: "error creating task", status: 500 })
  }

}


export async function GET(req: Request) {

  try {

  } catch (error) {
    console.log("Error getting Task:", error);
    return NextResponse.json({ error: "error getting task", status: 500 })
  }

}



export async function PUT(req: Request) {

  try {

  } catch (error) {
    console.log("Error updating Task:", error);
    return NextResponse.json({ error: "error updating  task", status: 500 })
  }

}



export async function DELETE(req: Request) {

  try {

  } catch (error) {
    console.log("Error deleting Task:", error);
    return NextResponse.json({ error: "error deleting task", status: 500 })
  }

}