/**
 * 
 * @param element 
 * @returns 
 */
export default function textNodesOf(element) {
  const textNodes: Node[] = [];
  const walker = document.createTreeWalker(
    element,
    NodeFilter.SHOW_TEXT,
    null,
  );
  let node: Node | null = null;
  while (node = walker.nextNode()) textNodes.push(node);
  return textNodes;
}