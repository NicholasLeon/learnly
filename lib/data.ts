import { prisma } from "@/lib/prisma";
import { createServerSupabaseClient } from "@/lib/supabaseClient";

export async function updateUserProfile({
  id,
  name,
  avatar,
}: {
  id: string;
  name?: string;
  avatar?: string;
}) {
  return await prisma.user.update({
    where: { id },
    data: { name, avatar },
  });
}

export async function getUserProfile() {
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) return null;

  let userProfile = await prisma.user.findUnique({
    where: { email: user.email! },
    select: {
      id: true,
      name: true,
      email: true,
      avatar: true,
      role: true,
    },
  });
  return userProfile;
}
