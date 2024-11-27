/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'standalone',
    compiler: {
        styledComponents: true,
        
    },
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.resolve.fallback.fs = false
            config.resolve.fallback.child_process = false
            
        }
        config.externals = [...config.externals, 'bcrypt'];
        return config
    }
}  

module.exports = nextConfig