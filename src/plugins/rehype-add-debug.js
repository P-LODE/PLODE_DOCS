import { visit } from "unist-util-visit";

export default function rehypeAddDebug() {
  return (tree) => {
    visit(tree, "element", (node) => {
      if (node.tagName === "p") {
        node.properties["data-debug"] = "true";
      }
    });
  };
}
