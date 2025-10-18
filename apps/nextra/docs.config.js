/* eslint-disable no-undef */
// Unfortunately making this a .ts file is not easily doable atm
// TODO: revisit this if time allows

export const getOrigin = () => {
  if (process.env.NEXT_PUBLIC_ORIGIN) {
    return process.env.NEXT_PUBLIC_ORIGIN;
  } else {
    console.warn(
      "\x1b[33mWarning:\x1b[0m [nextra] No .env with NEXT_PUBLIC_ORIGIN found in apps/nextra. Using default http://localhost:3030\n",
    );
    return "http://localhost:3030";
  }
};

export const docsConfig = Object.freeze({
  defaultTitle: "Plode Tech Docs",
  defaultDescription: "Plode Tech Documentation",
  relativeDocsPath: "/apps/nextra",
  origin: getOrigin(),
});
