"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AuthCallbackPage() {
  const router = useRouter();

  useEffect(() => {
    router.push("/user/sign-in");
  }, [router]);

  return (
    <div className="flex justify-center items-center h-screen">
      <p>Verifying your email...</p>
    </div>
  );
}
