export default function ContactPage() {
  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <form className="grid gap-4">
        <input
          type="text"
          placeholder="Full Name"
          className="border p-2 rounded"
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="border p-2 rounded"
          required
        />
        <textarea
          placeholder="Message"
          className="border p-2 rounded h-32"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
