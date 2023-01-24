import {LinkedList, ListNode} from "../../utils/lists";

//O(N) - Fast and slow pointer solution
export function removeNthFromEnd(linkedList: LinkedList, n: number): LinkedList | null {
    const head = linkedList.head;
    let slowP = head;
    let fastP = head;

    for (let i = 0; i < n; i++) {
        fastP = fastP.next;
    }

    if (!fastP) {
        return new LinkedList({head: head.next});
    }

    while (fastP.next) {
        slowP = slowP.next;
        fastP = fastP.next;
    }
    slowP.next = slowP.next.next;

    return new LinkedList({head});
}