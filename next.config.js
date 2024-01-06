/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['via.placeholder.com','res.cloudinary.com'],
    },
    // use @ alias for src folder
    webpack: (config) => {
        config.resolve.alias['@'] = __dirname
        return config
    },
}

module.exports = nextConfig
