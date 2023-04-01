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

    
    public add(...items: T[]): void {
        items.forEach(element => this.data.push(element));
        this.size = this.data.length;
    }

    public toArray(): T[] {
        return this.data;
    }

    public forEach(consumer: (element: T) => void): void {
        this.data.forEach(consumer);
    }

    public iterator(): CircularArrayIterator<T> {
        return new CircularArrayIterator(this);
    }

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
        return res;
    }
}