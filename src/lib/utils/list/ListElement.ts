export type Pointer<T> = ListElement<T> | null;

export class ListElement<T> {

    previous: Pointer<T>;
    next: Pointer<T>;
    content: T;

    constructor(content: T, previous: Pointer<T> = null, next: Pointer<T> = null) {
        this.previous = previous;
        this.next = next;
        this.content = content;
    }

    public toString(): string {
        return this.content as string;
    }
}