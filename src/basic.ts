let x: any = 20;
let y: any = 'hello';

x = 'goodbye';
y = 30;

// Function parameter typing, return  typing
function myFunction(a: number, b: number): number {
    return a + b;
}

x = myFunction(1, 2);

let nums: number[] = [];
let strings: Array<string> = [];

nums.push(1);
nums.push(2);
// nums.push('tree');

strings.push('tree');
// strings.push(1);

interface Person {
    firstName: string,
    lastName: string;
    sayHello: () => void;
}

const people: Array<Person | {age: number}> = [];

people.push({
    firstName: 'Abby',
    lastName: 'Adams',
    age: 1,
    sayHello: () => console.log(`I'm ${this.firstName}`)
});

class Elevator {
    public floor: number;
    private maxFloor: number;
    public static speed: number;
    protected i: number;

    static openDoor() {
        console.log('Door opens');
    };
}