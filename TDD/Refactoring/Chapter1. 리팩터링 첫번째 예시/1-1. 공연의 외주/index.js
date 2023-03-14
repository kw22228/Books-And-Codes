import plays from './plays.json';
import invoice from './invoices.json';
import statement from './statement_refactor/statement';

const result = statement(invoice, plays);
console.log(result);
