import { fromMarkdown } from "mdast-util-from-markdown";
import { toMarkdown, Options } from "mdast-util-to-markdown";
import { visit } from "unist-util-visit";
import { mdxExpressionToMarkdown } from "mdast-util-mdx-expression";

export function readMarkdownString(source: string) {
  const tree = fromMarkdown(source);
  return tree;
}

export function convertHtmlToMarkdownCodeBlocks(tree) {
  visit(tree, "html", (node, index, parent) => {
    const codeblockRegex = /<pre><code[^>]*>([\s\S]*?)<\/code><\/pre>/;
    const codeblockMatch = codeblockRegex.exec(node.value);

    if (codeblockMatch) {
      const codeContent = codeblockMatch[1]
        .replace(/<[^>]+>/g, "")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&amp;/g, "&")
        .trim();

      const codeNode: any = {
        type: "code",
        lang: "move",
        meta: null,
        value: codeContent,
        position: node.position,
      };

      if (parent && index !== undefined) {
        parent.children[index] = codeNode;
        return;
      }
    }

    const preApprovedTagsRegex =
      /^(?!<\/?(pre|code|p|a|b|i|strong|em|u|ul|ol|li|blockquote|h[1-6]|dl|dt|dd|details|summary|table|thead|tbody|tfoot|tr|th|td|caption)\b).*/;
    const notHtmlTagMatch = preApprovedTagsRegex.exec(node.value);

    if (notHtmlTagMatch) {
      const nodeValueCopy = node.value.toString();
      const textNode: any = {
        type: "text",
        value: nodeValueCopy
          .replace(/</g, (match, offset, str) => {
            if (str[offset + 1] !== "&") {
              return "&lt;";
            }
            return match;
          })
          .replace(/>/g, (match, offset, str) => {
            if (str[offset - 1] !== ";") {
              return "&gt;";
            }
            return match;
          }),
      };

      if (parent && index !== undefined) {
        parent.children[index] = textNode;
        return;
      }
    }
  });
}

export function escapeAngleBrackets(tree) {
  visit(tree, "text", (node, index, parent) => {
    if (!parent || index === null || index === undefined) {
      return;
    }

    const excludedTypes = new Set(["code", "inlineCode", "html"]);

    // Check if we're inside an excluded node type
    if (excludedTypes.has(parent.type)) {
      return;
    }

    node.value = node.value
      .replace(/</g, (match, offset, str) => {
        if (str[offset + 1] !== "&") {
          return "&lt;";
        }
        return match;
      })
      .replace(/>/g, (match, offset, str) => {
        if (str[offset - 1] !== ";") {
          return "&gt;";
        }
        return match;
      });
  });
}

export function markdownToMdx(tree) {
  convertHtmlToMarkdownCodeBlocks(tree);
  escapeAngleBrackets(tree);
}

export const astToMarkdown = (tree) => {
  const options: Options = {
    extensions: [mdxExpressionToMarkdown()],
  };
  const textMarkdown = toMarkdown(tree, options);
  return textMarkdown.replaceAll("\\&lt;", "&lt;").replaceAll("\\&gt;", "&gt;");
};
