import type {CircularLinkedList} from "$lib/utils/list/CircularLinkedList";
import type {Pointer} from "$lib/utils/list/ListElement";
import type {ListElement} from "$lib/utils/list/ListElement";

export class CircularIterator<T> {

    circle: CircularLinkedList<T>;
    current: Pointer<T>

    constructor(circle: CircularLinkedList<T>) {
        this.circle = circle;
        this.current = circle.head;
    }

    hasNext(): boolean {
        return true;
    }

    next(): ListElement<T> {
        const tmp = this.current;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        this.current = this.current.next;
        return tmp as ListElement<T>;
    }
}