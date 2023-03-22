export type Pointer<T> = ListElement<T> | null;

export class ListElement<T> {

    previous: Pointer<T>;
    next: Pointer<T>;
    index: number;
    content: T;

    constructor(content: T, index: number, previous: Pointer<T> = null, next: Pointer<T> = null) {
        this.previous = previous;
        this.next = next;
        this.content = content;
        this.index = index;
    }

    public toString(): string {
        return this.content as string;
    }
}