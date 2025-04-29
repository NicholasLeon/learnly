import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { type Database } from "@/lib/supabase";
import { createClient } from "@supabase/supabase-js";

export async function createServerSupabaseClient() {
  return createServerComponentClient<Database>({
    cookies: () => cookies(),
  });
}

export const supabase = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);
