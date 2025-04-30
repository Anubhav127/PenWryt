import { Container, PostForm } from "../components";

function AddPost() {
  return (
    <div className="min-h-screen py-12 bg-gradient-to-b from-gray-900 to-gray-800">
      <Container>
        <div className="max-w-4xl mx-auto bg-gray-800/50 p-8 rounded-2xl shadow-xl border border-gray-700 transform hover:scale-[1.01] transition-all duration-300">
          <h1 className="text-3xl font-bold text-white mb-8 text-center">Create New Post</h1>
          <PostForm />
        </div>
      </Container>
    </div>
  );
}

export default AddPost;
