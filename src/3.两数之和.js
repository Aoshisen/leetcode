function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var addTwoNumbers = function (l1, l2) {
  let headNode = new ListNode(0);
  let current = headNode;
  var carry = 0;

  while (l1 || l2 || carry) {
    const num1 = l1 ? l1.val : 0;
    const num2 = l2 ? l2.val : 0;
    const sum = num1 + num2 + carry;
    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;
    if (l1) {
      l1 = l1.next;
    }
    if (l2) {
      l2 = l2.next;
    }
  }
  return headNode.next;
};
let l1=new ListNode(2);
l1.next=new ListNode(4);
l1.next.next=new ListNode(3);
console.log(l1,"<<<<<")

// const l1 = [2, 4, 3];
const l2 = [5, 6, 4];
const l3 = [9, 9, 9, 9, 9, 9, 9];
const l4 = [9, 9, 9, 9];

const result = addTwoNumbers(l1, l2);
const result2 = addTwoNumbers(l3, l4);
// console.log(result);
// console.dir(result2);
