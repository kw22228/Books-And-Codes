/** 제네릭 타입 별칭 */
type Nullish<T> = T | null | undefined;
type CreateValue<Input, Output> = (input: Input) => Output;

let creator: CreateValue<string, number>;
creator = text => text.length;
creator = text => text.toUpperCase(); // return number여야되는데 string

/** 제네릭 판별된 유니언 */
type Result<T> = FailureResult | SuccessfulResult<T>;
interface FailureResult {
  error: Error;
  succeeded: false;
}
interface SuccessfulResult<T> {
  data: T;
  succeeded: true;
}

function handleResult(result: Result<string>) {
  if (result.succeeded) {
    result; //SuccessfulResult
  } else {
    result; //FailureResult
  }

  result.data; // Result
}
export {};
