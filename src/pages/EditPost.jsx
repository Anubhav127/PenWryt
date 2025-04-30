import React, { useEffect, useState } from "react";
import { Container, PostForm } from "../components";
import appwriteService from "../appwrite/config";
import { useNavigate, useParams } from "react-router-dom";

function EditPost() {
  const [post, setPosts] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) {
          setPosts(post);
        }
      });
    } else {
      navigate("/");
    }
  }, [slug, navigate]);

  return post ? (
    <div className="min-h-screen py-12 bg-gradient-to-b from-gray-900 to-gray-800">
      <Container>
        <div className="max-w-4xl mx-auto bg-gray-800/50 p-8 rounded-2xl shadow-xl border border-gray-700 transform hover:scale-[1.01] transition-all duration-300">
          <h1 className="text-3xl font-bold text-white mb-8 text-center">Edit Post</h1>
          <PostForm post={post} />
        </div>
      </Container>
    </div>
  ) : (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  );
}

export default EditPost;
