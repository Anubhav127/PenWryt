import conf from '../conf/conf.js';
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint('https://cloud.appwrite.io/v1')
        .setProject("66992c8c00020142fdeb");

        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.databases.createDocument(
                "6699302700176b3db7e6", // database id
                "66993038000d5f13e160", // conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
        } catch (error) {
            console.log("Appwrite Service :: createPost :: error", error);
        }
    }

    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            return await this.databases.updateDocument(
                "6699302700176b3db7e6", // database id
                "66993038000d5f13e160", // conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            );
        } catch (error) {
            console.log("Appwrite Service :: updatePost :: error", error);
        }
    }

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                "6699302700176b3db7e6", // database id
                "66993038000d5f13e160", // conf.appwriteCollectionId,
                slug
            );

            return true;
        } catch (error) {
            console.log("Appwrite Service :: deletePost :: error", error);
            return false
        }
    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                "6699302700176b3db7e6", // database id
                "66993038000d5f13e160", // conf.appwriteCollectionId,
                slug,
            );
        } catch (error) {
            console.log("Appwrite Service :: getPost :: error", error);
            return false
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(
                "6699302700176b3db7e6", // database id
                "66993038000d5f13e160", // conf.appwriteCollectionId,
                queries,
            )
        } catch (error) {
            console.log("Appwrite Service :: getPosts :: error", error);
            return false
        }
    }

    //file upload service
    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                "669931a4000301e2d15c", //conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite Service :: uploadFile :: error", error);
            return false
        }
    }

    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(
                "669931a4000301e2d15c", //conf.appwriteBucketId,
                fileId
            )
            return true;
        } catch (error) {
            console.log("Appwrite Service :: deleteFile :: error", error);
            return false
        }
    }

    getFilePreview(fileId) {
        return this.bucket.getFileDownload(
            "669931a4000301e2d15c", //conf.appwriteBucketId,
            fileId
        ).href;
    }
}

const service = new Service()
export default service