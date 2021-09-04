// hedietDbgVis.createGraphFromPointers(
//   hedietDbgVis.tryEval([
//     'queue.first',
//     'queue.last',
//     // 'node',
//     // 'this.first',
//     // 'this.last',
//   ]),
//   (node) => ({
//     id: node.value,
//     color: 'lightblue',
//     label: `${node.value}`,
//     edges: [{to: node.next, label: 'next'}].filter((i) => !!i.to),
//   })
// )

import Queue from '../data-structures/queue.js';

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();