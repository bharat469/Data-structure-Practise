// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class Linklist {
//   constructor(value) {
//     this.head = new Node(value);
//     this.tail = this.head;
//     this.length = 1;
//   }
//   push(value) {
//     const newNode = new Node(value);
//     if (!this.head) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       this.tail.next = newNode;
//       this.tail = newNode;
//     }
//     this.length++;
//     console.log(this);
//     return this;
//   }
// }

// const linkLists = new Linklist(7);

// linkLists.push(4);

// ++++++++++++++++++++++++++++++++++++++++++++++conditions where we do dont have tail+++++++++++++++++++++++++++++++

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class WithoutTailLinklist {
//   constructor() {
//     this.head = null;
//   }
//   push(value) {
//     if (!this.head) {
//       this.head = new Node(value);
//       return;
//     } else {
//       let current = this.head;
//       while (current.next) {
//         current = current.next;
//       }
//       current.next = new Node(value);
//     }
//   }
//   print() {
//     let temp = this.head;
//     while (temp) {
//       console.log(temp.value, "ahjsgajsjasjha", temp.next);
//       temp = temp.next;
//     }
//   }
// }

// const Linked = new WithoutTailLinklist();

// Linked.push(10);
// Linked.push(20);
// Linked.push(30);
// Linked.push(40);
// Linked.print();
// time complexity = 0(n)
// space complexity = 0(1)

// ++++++++++++++++++++++++++++++++++++++++++++++++++condition we have tail+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class WithTailLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 1;
  }
  push(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    //    if no value in list is present

    if (!this.head) {
      return undefined;
    }
    // last element
    let temp = this.head;
    // second last
    let pre = this.head;

    //    if multipleValue

    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }
    this.tail = pre;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
      this.head = null;
    }

    return temp;
  }

  print() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

let ll = new WithTailLinkedList();

ll.push(10);
ll.push(20);
// ll.push(30);
// ll.push(40);
// ll.push(90);
console.log(ll.pop()?.value);

ll.print();



// time complexity = 0(1)
// space complexity = 0(1)
