import prisma from "@/utils/connect";
import { NextResponse } from "next/server";
// GET DINGLE POST
export const GET = async (req: any, { params }: any) => {
  const { post } = params;

  try {
    const singlePost = await prisma.post.update({
      where: { slug: post },
      data: {
        views: {
          increment: 1,
        },
      },
      include: {
        user: true,
      },
    });

    return NextResponse.json(singlePost, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Something Went Wrong!" },
      { status: 500 }
    );
  }
};
