import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };

    return post ? (
        <div className="min-h-screen py-12 bg-gradient-to-b from-gray-900 to-gray-800 animate-fadeIn">
            <Container>
                <article className="max-w-4xl mx-auto bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-700 shadow-xl transform hover:scale-[1.01] transition-all duration-300">
                    <div className="relative">
                        <img
                            src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="w-full h-[400px] object-cover"
                        />
                        {isAuthor && (
                            <div className="absolute right-6 top-6 space-x-3">
                                <Link to={`/edit-post/${post.$id}`}>
                                    <Button bgColor="bg-green-600" className="hover:bg-green-700 shadow-lg">
                                        Edit
                                    </Button>
                                </Link>
                                <Button bgColor="bg-red-600" className="hover:bg-red-700 shadow-lg" onClick={deletePost}>
                                    Delete
                                </Button>
                            </div>
                        )}
                    </div>
                    
                    <div className="p-8 space-y-6">
                        <h1 className="text-3xl md:text-4xl font-bold text-white">{post.title}</h1>
                        <div className="prose prose-lg prose-invert max-w-none">
                            {parse(post.content)}
                        </div>
                    </div>
                </article>
            </Container>
        </div>
    ) : (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800">
            <div className="animate-pulse text-xl text-gray-400">Loading post...</div>
        </div>
    );
}