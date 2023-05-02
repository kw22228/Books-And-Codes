import plays from './plays.json';
import invoice from './invoices.json';
import htmlStatement from './statement_refactor/htmlStatement';
import statement from './statement_refactor/statement';

console.log(statement(invoice, plays));
console.log(htmlStatement(invoice, plays));
