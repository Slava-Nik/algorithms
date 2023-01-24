export class ListNode {
    next: ListNode | null;
    val: number;

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

export class LinkedList {
    head: ListNode | null;

    constructor({head = null, arr = []}: {head?: ListNode, arr?: number[]}) {
        this.head = head;
        for (let i = arr.length - 1; i >= 0; i--) {
            this.addToHead(arr[i]);
        }
    }

    addToHead(val: number) {
        let node = new ListNode(val, this.head);
        this.head = node;
    }

    getArrayFromList() {
        const arr = [];
        let head = this.head;
        while (head !== null) {
            arr.push(head.val);
            head = head.next;
        }
        return arr;
    }
}