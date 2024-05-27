/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol:'https',
                hostname:'firebasestorage.googleapis.com/v0/b/next-cc43a.appspot.com/o/editado123123?alt=media&token=f837876a-19f3-4a86-bf49-1f21d4245829',
                port:'',
                pathname:'/**',
            },
            {
                protocol:'https',
                hostname:'firebasestorage.googleapis.com',
                port:'',
                pathname:'/**',
            },
        ],
    },
    env:{
        NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN : "localhost:3000",
        NEXT_PUBLIC_FIREBASE_API_KEY : "AIzaSyC8ke4C5odvQZfISAfwlRi_1sUSxUhZrSo",
        NEXT_PUBLIC_FIREBASE_PROJECT_ID : "next-cc43a",
        NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET : "next-cc43a.appspot.com",
        NEXT_PUBLIC_FIREBASE_SENDER_MESSAGING_ID : "454727340926",
        NEXT_PUBLIC_FIREBASE_APP_ID : "1:454727340926:web:14ae9aacd34f308ce6192f"
    }
};

export default nextConfig;
