export default function UserSignUpPage() {
  return (
    <main className="p-8 max-w-md mx-auto">
      <h1 className="text-xl font-bold">Create Your Account</h1>
      <form className="mt-4 flex flex-col gap-4">
        <input
          type="text"
          placeholder="Full Name"
          className="border p-2 rounded"
        />
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
        <button type="submit" className="bg-green-600 text-white py-2 rounded">
          Sign Up
        </button>
      </form>
    </main>
  );
}
