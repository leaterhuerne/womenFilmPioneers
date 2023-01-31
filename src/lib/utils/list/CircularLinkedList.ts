import {ListElement} from "$lib/utils/list/ListElement";
import type { Pointer} from "$lib/utils/list/ListElement";
import {CircularIterator} from "$lib/utils/list/CircularIterator";

export class CircularLinkedList<T>{

    head: Pointer<T>;
    size: number;

    constructor() {
        this.head = null;
        this.size = 0;
    }


    private addSingle(element: T): void {
        const current = new ListElement<T>(element);
        if(this.head == null) {
            this.head = current;
            this.head.previous = current;
        } else {
            const tmp = this.head.previous;
            this.head.previous = current;
            current.previous = tmp;
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            tmp.next = current;
        } 
        current.next = this.head;
    }

    public add(...elements: T[]) {
        for (const element of elements) {
            this.addSingle(element);
        }
    }

    public iterator(): CircularIterator<T> {
        return new CircularIterator<T>(this);
    }
}