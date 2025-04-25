export default function AdminSignInPage() {
  return (
    <main className="p-8 max-w-md mx-auto">
      <h1 className="text-xl font-bold">Admin Login</h1>
      <form className="mt-4 flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          className="border p-2 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 rounded"
        />
        <button type="submit" className="bg-blue-600 text-white py-2 rounded">
          Sign In
        </button>
      </form>
    </main>
  );
}
