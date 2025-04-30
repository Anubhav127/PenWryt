import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components/index";
import { useState, useEffect } from "react";

function AllPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    appwriteService.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
      setLoading(false);
    });
  }, []);

  return (
    <div className="min-h-screen py-12 bg-gradient-to-b from-gray-900 to-gray-800">
      <Container>
        <div className="max-w-7xl mx-auto space-y-8">
          <h1 className="text-4xl font-bold text-white text-center">All Posts</h1>

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-12 bg-gray-800/50 rounded-2xl border border-gray-700 transform hover:scale-[1.01] transition-all duration-300">
              <h2 className="text-2xl font-semibold text-gray-300">No posts found</h2>
              <p className="text-gray-400 mt-2">Check back later for new content</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-fadeIn">
              {posts.map((post) =>
                post.status === "active" ? (
                  <div key={post.$id} className="transform hover:scale-[1.02] transition-all duration-300">
                    <PostCard {...post} />
                  </div>
                ) : null
              )}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;
