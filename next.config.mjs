const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'i.scdn.co',
          pathname: '/**', 
        },
      ],
    },
  };
  
  export default nextConfig;
  