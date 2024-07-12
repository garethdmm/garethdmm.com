"use server";

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createPost(formData: FormData) {
  const postData = {
    content: formData.get("content") as string,
    title: formData.get("title") as string,
    cover: formData.get('cover') as string,
  };

  const prisma = new PrismaClient();

  const result = await prisma.post.create({
    data: { ...postData },
  });

  revalidatePath('/writing');
  redirect('/writing/' + result.id);
}

export async function deletePost(postId: number) {
  const prisma = new PrismaClient();

  const result = await prisma.post.delete({
    where: {
      id: postId,
    },
  });

  revalidatePath("/writing");
  redirect('/writing');
}

export async function editPost(postId: number, formData: FormData) {
  const postData = {
    content: formData.get("content") as string,
    title: formData.get("title") as string,
    cover: formData.get('cover') as string,
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

  const previewUrl = `/writing/${postId}`

  redirect(previewUrl);
}
