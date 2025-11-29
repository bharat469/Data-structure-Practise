// class newNode {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class LinkList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.length = 1;
//   }

//   unShift(value) {
//     let NewNode = new newNode(value);
//     if (!this.head) {
//       this.head = NewNode;
//       this.tail = NewNode;
//     } else {
//       NewNode.next = this.head;
//       this.head = NewNode;
//     }
//     this.length++;
//     console.log("here", this, "skdghs", this.head, "sjdhkjsd", value);
//     return this;
//   }

//   print() {
//     let current = this.head;
//     while (current) {
//       console.log(current.value);
//       current = current.next;
//     }
//   }
// }

// let ll = new LinkList();

// ll.unShift(4);
// ll.unShift(3);
// ll.unShift(2);
// ll.print();

// shift example

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class shiftLinklist {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 1;
  }

  shift() {
    if (!this.head) return undefined;

    let temp = this.head;
    this.head = this.head.next;
    temp.next = null;

    if (this.length == 0) {
      this.tail = null;
      this.head = null;
    }

    this.length--;
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
let ll = new shiftLinklist();

console.log(ll.shift());
