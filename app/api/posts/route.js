import { NextResponse } from "next/server";
import prisma from "@/app/utils/connect";
import { getAuthSession } from "@/app/utils/auth";

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  const page = searchParams.get("page");
  const cat = searchParams.get("cat");

  const POST_PER_PAGE = 5;

  const query = {
    take: POST_PER_PAGE,
    skip: POST_PER_PAGE * (page - 1),
    where: {
      ...(cat && { catSlug: cat }),
    },
    include: {
      categories: {
        select: {
          title: true,
        },
      },
      user: {
        select: {
          name: true,
          image: true,
        },
      },
    },
  };

  try {
    if (cat) {
      const category = await prisma.category.findUnique({
        where: { slug: cat },
        include: {
          Posts: {
            include: { categories: true },
          },
        },
      });

      if (!category) {
        throw new Error("category is not found!");
      }
      const posts = category.Posts;
      const count = posts.length;
      return new NextResponse(
        JSON.stringify({ posts, count }, { status: 200 })
      );
    } else {
      const [posts, count] = await prisma.$transaction([
        prisma.post.findMany(query),
        prisma.post.count({ where: query.where }),
      ]);

      return new NextResponse(
        JSON.stringify({ posts, count }, { status: 200 })
      );
    }
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};

export const POST = async (req) => {
  const session = await getAuthSession();
  if (!session) {
    return new NextResponse(
      JSON.stringify({ message: "Not Authenticated!" }, { status: 401 })
    );
  }
  try {
    const body = await req.json();

    const result = await prisma.post.create({
      data: { ...body, userEmail: session.user.email },
    });

    return new NextResponse(JSON.stringify(result, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};
