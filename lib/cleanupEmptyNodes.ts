import textNodesOf from "./textNodesOf";

/**
 * 
 * @param nodeList 
 */
export default function cleanUpEmptyNodes(nodeList: Node[]): void {
  const nodes = Array.from(nodeList);
  for (const node of nodes) {
    const textNodes = textNodesOf(node);
    for (const t of textNodes) {
      if (t.nodeValue?.trim().length === 0) {
        let parent = t.parentNode as HTMLElement;
        if (!parent) continue;
        parent.removeChild(t);
        if (parent.innerHTML.trim().length === 0) {
          parent.parentNode?.removeChild(parent);
        }
      }
    }
  }
}