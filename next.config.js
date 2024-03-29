module.exports = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      {
        source: "/categories/:path*",
        destination: "/temas/:path*",
        permanent: false,
      },
      {
        source: "/temas/",
        destination: "/temas/geral",
        permanent: false,
      },
      {
        source: "/temas",
        destination: "/temas/geral",
        permanent: false,
      },
    ];
  },
};
