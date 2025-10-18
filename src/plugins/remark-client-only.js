/**
 * @typedef {import('mdast').Root} Root
 * @typedef {import('unified').Plugin<[{components?: Record<string, string>}], Root>} RemarkPlugin
 * @type {RemarkPlugin}
 */
export const remarkClientOnly = function (options = { components: {} }) {
  const { components } = options;

  return function (tree) {
    function visit(node) {
      if (
        (node.type === "mdxJsxFlowElement" || node.type === "mdxJsxTextElement") &&
        node.name in components 
      ) {
        const framework = components[node.name]; 
        node.attributes = node.attributes || [];

        if (!node.attributes.find((attr) => attr.name === "client:only")) {
          node.attributes.push({ type: "mdxJsxAttribute", name: "client:only", value: framework });
        }
      }

      if (node.children) {
        node.children.forEach(visit);
      }
    }

    visit(tree);
  };
};
