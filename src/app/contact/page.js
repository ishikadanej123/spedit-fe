export default async function BlogPage() {
  try {
    const res = await fetch(`http://localhost:4000/api/posts`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch posts. Status: ${res.status}`);
    }

    const posts = await res.json();

    return (
      <main className="p-8">
        <h1 className="text-3xl font-bold">Blog Posts</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.id} className="mt-4">
              <h2 className="text-xl">{post.title}</h2>
              <p>{post.content}</p>
            </li>
          ))}
        </ul>
      </main>
    );
  } catch (error) {
    console.error("Error fetching posts:", error);
    return (
      <main className="p-8">
        <h1 className="text-3xl font-bold">Blog Posts</h1>
        <p className="text-red-500 mt-4">Failed to load posts.</p>
      </main>
    );
  }
}
