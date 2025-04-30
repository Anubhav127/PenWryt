import React from "react";
import { Link } from "react-router-dom";
import appwriteService from "../appwrite/config";

export default function PostCard({ $id, title, featuredImage }) {
  const imgURL = appwriteService.getFilePreview(featuredImage);
  console.log(imgURL);
  return (
    <div className="p-2 w-full">
      <Link to={`/post/${$id}`} className="block w-full transform transition-all duration-300 hover:scale-[1.02]">
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
          <div className="aspect-w-16 aspect-h-9 w-full">
            <img
              src={imgURL}
              alt={title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="p-5">
            <h2 className="text-xl font-bold text-white group-hover:text-blue-400 line-clamp-2 transition-colors duration-200">
              {title}
            </h2>
            <div className="mt-4 flex justify-between items-center">
              <div className="flex space-x-2">
                <span className="inline-flex items-center rounded-full bg-blue-500/10 px-2 py-1 text-xs font-medium text-blue-400">
                  Read More
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
