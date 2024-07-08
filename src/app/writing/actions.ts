import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createPost(formData: FormData) {
  "use server";

  const postData = {
    content: formData.get("content") as string,
    title: formData.get("title") as string,
    cover: "",
  };

  const prisma = new PrismaClient();

  const result = await prisma.post.create({
    data: { ...postData },
  });
}

export async function deletePost(postId: number) {
  "use server";

  const prisma = new PrismaClient();

  const result = await prisma.post.delete({
    where: {
      id: postId,
    },
  });

  revalidatePath("/blog");
}

export async function editPost(postId: number, formData: FormData) {
  "use server";

  const postData = {
    content: formData.get("content") as string,
    title: formData.get("title") as string,
    cover: "",
  };

  const prisma = new PrismaClient();

  const result = await prisma.post.update({
    where: {
      id: postId,
    },
    data: {
      ...postData,
    },
  });

  const previewUrl = `/blog/${postId}`

  redirect(previewUrl);
}
