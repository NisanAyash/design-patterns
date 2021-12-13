// Graphs: Bread first search

function bfs(graph: any, root:number) {
    let nodesLen: any = {}

    for (let i = 0; i < graph.length; i++) {
        nodesLen[i] = Infinity;
    }

    nodesLen[root] = 0

    const queue = [root];
    let current;

    while (queue.length !== 0) {
        current = queue.shift();

        const currentConnected = graph[current];
        const neighborIndex = [];
        let index = currentConnected.indexOf(1);

        while (index !== -1) {
            neighborIndex.push(index);
            index = currentConnected.indexOf(1, index + 1);
        }

        for (let j = 0; j < neighborIndex.length; j++) {
            if (nodesLen[neighborIndex[j]] === Infinity) {
                nodesLen[neighborIndex[j]] = nodesLen[current] + 1;
                queue.push(neighborIndex[j]);
            }
        }
    }
    return nodesLen;
}


const exBFSGraph = [
    [0,1,1,1,0],
    [0,0,1,0,0],
    [1,1,0,0,0],
    [0,0,0,1,0],
    [0,1,0,0,0]
]

console.log(bfs(exBFSGraph, 1));