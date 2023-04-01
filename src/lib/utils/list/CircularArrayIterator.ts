import type {CircularArrayList} from "$lib/utils/list/CircularArrayList";
export class CircularArrayIterator<T> {
    circle: CircularArrayList<T>;
    current: T;

    indexOfCurrent: number;

    constructor(circle: CircularArrayList<T>) {
        this.circle = circle;
        this.indexOfCurrent = 0;
        this.current = this.circle.data[this.indexOfCurrent];
    }

    setCurrent(value: T) {
        this.circle.data[this.indexOfCurrent] = value;
    }

    public next(): T {
        this.indexOfCurrent = (this.indexOfCurrent + 1) % this.circle.size;
        this.current = this.circle.data[this.indexOfCurrent];
        return this.current;
    }

    public peekNext(n: number): T {
        return this.circle.data[(this.indexOfCurrent + n) % this.circle.size];
    }

    public setNext(n: number, value: T) {
        this.circle.data[(this.indexOfCurrent + n) % this.circle.size] = value;
        console.log("next "  + n + ": " + this.peekNext(n));
    }

    public previous(): T {
        this.indexOfCurrent = (this.indexOfCurrent - 1 + this.circle.size) % this.circle.size;
        this.current = this.circle.data[this.indexOfCurrent];
        return this.current;
    }

    public peekPrevious(n: number): T {
        return this.circle.data[(this.indexOfCurrent - n + this.circle.size) % this.circle.size];
    }

    public setPrevious(n: number, value: T) {
        this.circle.data[(this.indexOfCurrent - n + this.circle.size) % this.circle.size] = value;
    }

    public goToStart() {
        this.current = this.circle.data[0];
        this.indexOfCurrent = 0;
    }

    public toArray() {
        return this.circle.data;
    }
}