import type { User } from "next-auth";
import type { AdapterUser } from "next-auth/adapters";
import path from "path";
import fs from "fs";

export function getUserImagePath(
  userId: (User | AdapterUser)["id"],
  relative: boolean = false
) {
  return path.join(getUserPath(userId, relative), "image.png");
}

export function getUserPath(
  userId: (User | AdapterUser)["id"],
  relative: boolean = false
) {
  if (relative) return path.join("static", "user", userId);
  return path.join(process.cwd(), "public", "static", "user", userId);
}
