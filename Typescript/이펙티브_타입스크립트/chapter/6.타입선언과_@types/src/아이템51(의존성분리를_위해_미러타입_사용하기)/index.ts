/** 무슨말인지 이해가 잘안된 아이템. */

(function () {
  interface CsvBuffer {
    toString(encoding: string): string;
  }

  function parseCSV(contents: string | CsvBuffer): { [column: string]: string }[] {
    if (typeof contents === 'object') {
      return parseCSV(contents.toString('utf-8'));
    }
  }

  parseCSV(new Buffer('column1,column2\nval1,val2', 'utf-8'));
})();
