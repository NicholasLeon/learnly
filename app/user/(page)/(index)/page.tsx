"use client";

import UserNavbar from "./components/navbar";

export default function UserHomePage() {
  return (
    <main>
      <UserNavbar />
      <h1 className="text-2xl font-semibold">Hi, Learner!</h1>
      <p className="mt-2 text-gray-600">
        Ready to continue your learning journey?
      </p>
      <ul className="max-w-200 mt-4 space-y-2">
        <li className="border p-4 rounded shadow hover:bg-gray-600">
          📘 Math for Beginners
        </li>
        <li className="border p-4 rounded shadow hover:bg-gray-600">
          🧪 Basic Chemistry
        </li>
        <li className="border p-4 rounded shadow hover:bg-gray-600">
          🧲 Intro to Physics
        </li>
      </ul>
    </main>
  );
}
