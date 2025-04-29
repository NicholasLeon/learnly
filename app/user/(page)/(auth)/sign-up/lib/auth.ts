"use server";

import { supabase } from "@/lib/supabaseClient";

export async function signUpUser({
  email,
  password,
  name,
}: {
  email: string;
  password: string;
  name: string;
}) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/user/callback`,
    },
  });

  if (error) {
    throw new Error(error.message);
  }

  const userId = data.user?.id;
  if (userId) {
    const { error: insertError } = await supabase.from("User").insert([
      {
        id: userId,
        name,
        email,
      },
    ]);

    if (insertError) {
      throw new Error(insertError.message);
    }
  }

  return data.user;
}
