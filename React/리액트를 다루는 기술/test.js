const str = `hello ${{ foo: 'bar' }} ${() => 'world'}!`;
console.log(str);

function tagged(...args) {
  console.log(args);
}

tagged(`hello`, `${{ foo: 'bar' }}`, `${() => 'world'}`);

const eround =
  execute_round['request'] !== 'None' ? execute_round['request']['when_executable'] : 'None';
