// hedietDbgVis.createGraphFromPointers(
//   hedietDbgVis.tryEval([
//     'linkedList.head',
//     'linkedList.tail',
//     'node',
//     // 'pre',
//     // 'head',
//     // 'this.head',
//     // 'this.tail',
//     // 'current',
//   ]),
//   (node) => ({
//     id: node.value,
//     color: 'lightblue',
//     label: `${node.value}`,
//     edges: [{to: node.next, label: 'next'}].filter((i) => !!i.to),
//   })
// )

import LinkedList from '../data-structures/linked-list.js';

const linkedList = new LinkedList();

linkedList.push(1);
linkedList.push(2);
linkedList.push(3);
linkedList.push(4);
linkedList.push(5);
linkedList.pop();
linkedList.pop();
linkedList.pop();
