// app/api/auth/[...all]/route.ts
import { auth } from "@/lib/auth"; // Your Better Auth config
import { toNextJsHandler } from "better-auth/next-js";

export const { POST, GET } = toNextJsHandler(auth);