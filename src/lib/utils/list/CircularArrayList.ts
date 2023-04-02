import {CircularArrayIterator} from "$lib/utils/list/CircularArrayIterator";

export class CircularArrayList<T> {
    size: number
    data: Array<T>;

    head: T;

    constructor(...items: T[]) {
        this.data = [];
        this.size = this.data.length;
        items.forEach(e => this.add(e));
        this.head = this.data[0];
    }

    /**
     * Adds items to the list.
     * @param multiple items
     */
    public add(...items: T[]): void {
        items.forEach(element => this.data.push(element));
        this.size = this.data.length;
    }

    /**
     * Returns list as array
     * @return list as array
     */
    public toArray(): T[] {
        return this.data;
    }

    /**
     * Performs a consumer on every item of the list.
     * @param consumer void function to perform on every element
     */
    public forEach(consumer: (element: T) => void): void {
        this.data.forEach(consumer);
    }

    /**
     * Returns an iterator.
     * @return CircularArrayIterator
     */
    public iterator(): CircularArrayIterator<T> {
        return new CircularArrayIterator(this);
    }

    /**
     * Return string representation of the list.
     * @return string, for example 1 ->  2 -> 4 -> 5
     */
    public toString(): string {
        let res = "";
        const elementString = (e: T): string => {
            let element = "{";
            if(typeof e == "object") {
                for(const key in e) {
                    element += key  + ": " + e[key] + ", "
                }
                return element.slice(0, -2) + "}"
            } else {
                return String(e);
            }
        }
        this.data.forEach(e => res += elementString(e) + " -> ");
        return res.slice(0, -4);
    }
}