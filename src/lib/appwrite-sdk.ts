import { Client } from "appwrite";
const endpoint=import.meta.env.VITE_APPWRITE_ENDPOINT
const projectId=import.meta.env.VITE_APPWRITE_PROJECT_ID
export const client = new Client()
    .setEndpoint(endpoint)
    .setProject(projectId); 