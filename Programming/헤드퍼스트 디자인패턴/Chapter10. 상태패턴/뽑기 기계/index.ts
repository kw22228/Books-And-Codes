import GumballMachine from './GumballMachine';

const gumballMachine = new GumballMachine(3);
console.log(gumballMachine);

console.log(gumballMachine.insertQuarter());
console.log(gumballMachine.trunCrank());

console.log(gumballMachine);

console.log(gumballMachine.insertQuarter());
console.log(gumballMachine.ejectQuarter());
console.log(gumballMachine.trunCrank());
