// hedietDbgVis.createGraphFromPointers(
//   hedietDbgVis.tryEval(['linkedList.head','node','tortoise','hare']),
//   (node) => ({
//     id: node.value,
//     color: 'lightblue',
//     label: `${node.value}`,
//     edges: [{to: node.next, label: 'next'}].filter((i) => !!i.to),
//   })
// )

// Floyd判圈算法(Floyd Cycle Detection Algorithm)，又稱龜兔賽跑算法(Tortoise and Hare Algorithm)
class LinkedList {
  constructor() {
    this.head = null;
  }
}
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// 有Cycle
const linkedList = new LinkedList();
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);
const node6 = new Node(6);
const node7 = new Node(7);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = node7;
node7.next = node3;

// 沒有Cycle
// const linkedList = new LinkedList();
// const node1 = new Node(1);
// const node2 = new Node(2);
// const node3 = new Node(3);
// const node4 = new Node(4);
// const node5 = new Node(5);
// const node6 = new Node(6);
// const node7 = new Node(7);
// node1.next = node2;
// node2.next = node3;
// node3.next = node4;
// node4.next = node5;
// node5.next = node6;
// node6.next = node7;
// node7.next = null;

linkedList.head = node1;

function checkCycle() {
  let hare = linkedList.head;
  let tortoise = linkedList.head;

  while (hare?.next != null) {
    // 兔子走兩步
    hare = hare.next?.next;
    // 烏龜走一步
    tortoise = tortoise.next;
    if (hare === tortoise) {
      return true;
    }
  }
  return false;
}
const isCycle = checkCycle();
if (isCycle) {
  console.log('有Cycle！');
} else {
  console.log('沒有Cycle');
}
