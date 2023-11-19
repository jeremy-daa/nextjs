import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/connect";
import { getAuthSession } from "@/utils/auth";
export const GET = async (req: any) => {
  const { searchParams } = new URL(req.url);
  const posts_page = 2;
  const page = Number(searchParams.get("page"));
  const category = searchParams.get("cat");

  const query = {
    take: posts_page,
    skip: posts_page * (page - 1),

    where: { ...(category && { catSlug: category }) },
  };
  try {
    const [posts, count] = await prisma.$transaction([
      prisma.post.findMany(query),
      prisma.post.count({
        where: { ...(category && { catSlug: category }) },
      }),
    ]);
    return NextResponse.json([posts, count], { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Something Went Wrong!" },
      { status: 500 }
    );
  }
};

export const POST = async (req: NextRequest, { params }: any) => {
  const session = await getAuthSession();
  if (!session?.user) {
    return NextResponse.json(
      { message: "User not authenticated!" },
      { status: 401 }
    );
  }
  const { searchParams } = new URL(req.url);
  const postSlug = searchParams.get("postSlug");
  try {
    const body = await req.json();
    const comment = await prisma.post.create({
      data: {
        ...body,
        userEmail: session.user.email,
      },
      include: { user: true },
    });
    return NextResponse.json(comment, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Something Went Wrong!" },
      { status: 500 }
    );
  }
};
