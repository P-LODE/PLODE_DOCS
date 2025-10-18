import nextra from "nextra";

const withNextra = nextra({
  defaultShowCopyCode: true,
  latex: true,
  search: {
    codeblocks: true,
  },
});

export default withNextra({
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/ko",
        permanent: false,
      },
    ];
  },
});
