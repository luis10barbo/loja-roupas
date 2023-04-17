import type { User } from "next-auth";
import type { AdapterUser } from "next-auth/adapters";
import path from "path";
import { mkdir, access } from "fs/promises";
import Axios from "axios";
import { createWriteStream } from "fs";
import { getUserPath } from "./publicPathUtils";

export async function downloadUserImage(user: User | AdapterUser) {
  if (!user.image) return;

  const userStaticPath = getUserPath(user.id);

  await access(userStaticPath).catch(async () => {
    await mkdir(userStaticPath);
  });

  const writer = createWriteStream(path.join(userStaticPath, "image.png"));

  try {
    const response = await Axios({
      url: user.image,
      responseType: "stream",
      method: "get",
    });
    return new Promise((resolve, reject) => {
      response.data.pipe(writer);
      let error: Error | null = null;
      writer.on("error", (err) => {
        error = err;
        writer.close();
        reject(err);
      });
      writer.on("close", () => {
        if (!error) {
          resolve(true);
        }
        //no need to call the reject here, as it will have been called in the
        //'error' stream;
      });
    });
  } catch (error) {}
}
