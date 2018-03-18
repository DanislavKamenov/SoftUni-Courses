function domHighlighter(selector) {
    let targetNode = $(selector);
    let maxDepth = 0;
    let deepestNode = targetNode;

    getDeepestChild(0, deepestNode);
    highlightAllChildren(deepestNode);
    function highlightAllChildren(element) {
        element.addClass('highlight');
        if (element.is(targetNode)) {
            return;
        }
        let parent = element.parent();
        highlightAllChildren($(parent))
    }
    function getDeepestChild(depth, element) {
         if (depth > maxDepth) {
             maxDepth = depth;
             deepestNode = element;
         }
         let children = element.children();
         for (let child of children) {
             getDeepestChild(depth + 1, $(child));
         }
     }

}