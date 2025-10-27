import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET() {
  const session = await getServerSession(authOptions);

  if (session) {
    console.log("SERVER SESSION DATA:", session); // ← shows in terminal
    return Response.json({ authenticated: true, session });
  } else {
    console.log("No active session found");
    return Response.json({ authenticated: false });
  }
}
