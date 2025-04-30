import { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components/index";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Home() {
  const [posts, setPosts] = useState([]);
  const userData = useSelector((state) => state.auth.userData);

  useEffect(() => {
    appwriteService.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);
  console.log(posts);
  if (posts.length === 0 && userData === null) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center py-8 mt-4">
        <Container>
          <div className="text-center space-y-6 bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm border border-gray-700">
            <h1 className="text-3xl font-bold text-white">Welcome to PenWryt</h1>
            <p className="text-gray-300 text-lg">Join our community to start reading amazing posts</p>
            <Link to="/login">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/20">
                Login to Read
              </button>
            </Link>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 bg-gradient-to-b from-gray-900 to-gray-800">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-fadeIn">
          {posts.map((post) =>
            post.status === "active" ||
            (userData && userData.$id === post.userId) ? (
              <div key={post.$id} className="transform hover:scale-[1.02] transition-all duration-300">
                <PostCard {...post} />
              </div>
            ) : null
          )}
        </div>
      </Container>
    </div>
  );
}

export default Home;
