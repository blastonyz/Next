/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol:"https",
                hostname:"firebasestorage.googleapis.com/v0/b/next-cc43a.appspot.com/o/editado123123?alt=media&token=f837876a-19f3-4a86-bf49-1f21d4245829",
                port:'',
                pathname:"/**",
            },
            {
                protocol:"https",
                hostname:"firebasestorage.googleapis.com",
                port:'',
                pathname:'/**',
            },
        ],
    }
};

export default nextConfig;
