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

    previous(): ListElement<T> {
        const tmp = this.current;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        this.current = this.current.previous;
        return tmp as ListElement<T>;
    }

    peekNext(n: number): ListElement<T> {
        let peek = this.current;
        for(let i = 0; i < n; i++) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            peek = peek.next;
        }
        return peek as ListElement<T>;
    }

    peekPrevious(n: number): ListElement<T> {
        let peek: Pointer<T> | undefined = this.current;
        for(let i = 0; i < n; i++) {
            peek = peek?.previous;
        }
        return peek as ListElement<T>;
    }

    jumpTo(index: number): void {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        while(this.current.index != index) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            this.current = this.current.next;
        }
    }
}