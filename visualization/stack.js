// hedietDbgVis.createGraphFromPointers(
//   hedietDbgVis.tryEval([
//     'stack.top',
//     'node',
//     // 'node',
//     // 'this.top',
//   ]),
//   (node) => ({
//     id: node.value,
//     color: 'lightblue',
//     label: `${node.value}`,
//     edges: [{to: node.next, label: 'next'}].filter((i) => !!i.to),
//   })
// )

import Stack from '../data-structures/stack.js';

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.pop();
stack.pop();
stack.pop();
stack.pop();