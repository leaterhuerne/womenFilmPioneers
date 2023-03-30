import type {CircularArrayList} from "$lib/utils/list/CircularArrayList";
export class CircularArrayIterator<T> {
    circle: CircularArrayList<T>;
    current: T;

    private indexOfCurrent: number;

    constructor(circle: CircularArrayList<T>) {
        this.circle = circle;
        this.indexOfCurrent = 0;
        this.current = this.circle.data[this.indexOfCurrent];
    }

    public next(): T {
        this.indexOfCurrent = (this.indexOfCurrent + 1) % this.circle.size;
        this.current = this.circle.data[this.indexOfCurrent];
        return this.current;
    }

    public previous(): T {
        this.indexOfCurrent = (this.indexOfCurrent - 1 + this.circle.size) % this.circle.size;
        console.log(this.indexOfCurrent);
        this.current = this.circle.data[this.indexOfCurrent];
        return this.current;
    }
}