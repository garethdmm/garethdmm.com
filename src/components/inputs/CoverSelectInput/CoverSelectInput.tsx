/**
 * Currently this input just lets you choose a cover image from what's on the
 * filesystem. This is fine for now because the mutations are not being served
 * publicly. Long term we will integrate an uploader and make this more elegant.
 */
import fs from "fs";
import path from "path";

import { Post } from "@prisma/client";
import CoverSelectInteractive from "./CoverSelectInteractive";

interface CoverSelectInputProps {
  cover: string;
}

const imageExtensions = [
  ".jpg",
  ".jpeg",
  ".png",
  ".gif",
  ".bmp",
  ".svg",
  ".webp",
];

export default function CoverSelectInput({ cover }: CoverSelectInputProps) {
  const dirname = "./public/covers";
  const directoryContents = fs.readdirSync(dirname);
  const imageFilenames = directoryContents.filter((filename) =>
    imageExtensions.includes(path.extname(filename))
  );

  return <CoverSelectInteractive cover={cover} filenames={imageFilenames} />;
}
