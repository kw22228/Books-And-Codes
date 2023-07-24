import GumballMachine from './뽑기기계 모니터링/GumballMachine';
import GumballMonitor from './뽑기기계 모니터링/GumballMonitor';

const gumballMachine = new GumballMachine('Austin', 112);
const gumballMonitor = new GumballMonitor(gumballMachine);

gumballMonitor.report();
