/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol:'https',
                hostname:'next-cc43a.appspot.com/1234123asdfasdf',
                port:'',
                pathname:'/**',
            },
        ],
    }
};

export default nextConfig;
