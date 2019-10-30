var _this = this;
var x = 20;
var y = 'hello';
x = 'goodbye';
y = 30;
// Function parameter typing, return  typing
function myFunction(a, b) {
    return a + b;
}
x = myFunction(1, 2);
var nums = [];
var strings = [];
nums.push(1);
nums.push(2);
// nums.push('tree');
strings.push('tree');
var people = [];
people.push({
    firstName: 'Abby',
    lastName: 'Adams',
    age: 1,
    sayHello: function () { return console.log("I'm " + _this.firstName); }
});
var Elevator = (function () {
    function Elevator() {
    }
    Elevator.openDoor = function () {
        console.log('Door opens');
    };
    ;
    return Elevator;
})();
