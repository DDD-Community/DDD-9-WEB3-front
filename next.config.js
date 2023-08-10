/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/i,
      resourceQuery: { not: /url/ },
      use: [
        {
          loader: '@svgr/webpack',
          options: { svgo: false },
        },
      ],
    });
    return config;
  },
};

module.exports = nextConfig;
