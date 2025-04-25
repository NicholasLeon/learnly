export default function MainPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Welcome to EduLearn!</h1>
      <p className="mt-2 text-gray-600">
        Your platform for learning Math, Physics, and Chemistry online.
      </p>
      <a
        href="/user/(page)/(auth)/sign-up"
        className="mt-4 inline-block text-blue-600 underline"
      >
        Get Started
      </a>
    </main>
  );
}
