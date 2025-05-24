function useTraverseTree() {
    function insertNode(tree, folderId, item, isFolder) {
        if (tree.id === folderId && tree.isFolder) {
            tree.items.unshift({
                id: new Date().getTime().toString(), // Ensure ID is a string
                name: item,
                isFolder,
                items: []
            });
            return tree;
        }

        const latestNode = tree.items.map((obj) =>
            insertNode(obj, folderId, item, isFolder)
        );

        return { ...tree, items: latestNode };
    }

    function deleteNode(tree, folderId) {
        console.log(`Checking node: ${tree.name} with ID: ${tree.id}`);
    
        if (tree.id === folderId) {
            console.log(`Deleting node: ${tree.name} with ID: ${tree.id}`);
            return null;
        }
    
        if (tree.isFolder && tree.items) {
            tree.items = tree.items
                .map((child) => deleteNode(child, folderId))
                .filter((child) => child !== null);
        }
    
        return tree;
    }


    return { insertNode, deleteNode };
}

export default useTraverseTree;
