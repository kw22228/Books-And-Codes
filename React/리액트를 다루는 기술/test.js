const str = `hello ${{ foo: 'bar' }} ${() => 'world'}!`;
console.log(str);

function tagged(...args) {
  console.log(args);
}

tagged(`hello`, `${{ foo: 'bar' }}`, `${() => 'world'}`);
