export default function UserHomePage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-semibold">Hi, Learner!</h1>
      <p className="mt-2 text-gray-600">
        Ready to continue your learning journey?
      </p>
      <ul className="mt-4 space-y-2">
        <li className="border p-4 rounded shadow">📘 Math for Beginners</li>
        <li className="border p-4 rounded shadow">🧪 Basic Chemistry</li>
        <li className="border p-4 rounded shadow">🧲 Intro to Physics</li>
      </ul>
    </main>
  );
}
