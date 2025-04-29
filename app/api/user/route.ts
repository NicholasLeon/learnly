import { getUserProfile } from "@/lib/data";

export async function GET() {
  console.log("User route accessed");
  const user = await getUserProfile();
  return new Response(JSON.stringify(user), {
    headers: { "Content-Type": "application/json" },
  });
}
