/** type alias VS interface */
type poet = {
  born: number;
  name: string;
};

interface Poet {
  born: number;
  name: string;
}

let valueLater: Poet;
valueLater = {
  born: 1935,
  name: 'Sara',
};
valueLater = 'Emily';
valueLater = {
  born: true,
  name: 'Sappho',
};

/** readonly */
interface Page {
  readonly text: string;
}
function read(page: Page) {
  console.log(page.text);

  page.text += '!';
}

const pageIsh = {
  text: 'hello',
};
pageIsh.text += '!';
read(pageIsh);

/** 함수와 메서드 */
interface HasBothFunctionTypes {
  property: () => string;
  method(): string;
}
const hasBoth: HasBothFunctionTypes = {
  property: () => '',
  method() {
    return '';
  },
};
hasBoth.property();
hasBoth.method();

interface OptionalReadonlyFunctions {
  readonly optionalProperty?: () => string; // 일반 속성은 readonly 사용가능.
  readonly optionalMethod?(): string; // 메서드는 readonly 사용불가.
}

/** 호출 시그니처 (타입 별칭 vs 인터페이스) */
type FunctionAlias = (input: string) => number;
interface CallSignature {
  (input: string): number;
}
const typedFunctionAlias: FunctionAlias = input => input.length;
const typedCallSignature: CallSignature = input => input.length;

//////////////

interface FuncitonWithCount {
  count: number;
  (): void;
}
let hasCallCount: FuncitonWithCount;

function keepsTrackOfCalls() {
  keepsTrackOfCalls.count += 1;
}

keepsTrackOfCalls.count = 0;
hasCallCount = keepsTrackOfCalls;

function doesNotHaveCount() {
  console.log('No Idea');
}
hasCallCount = doesNotHaveCount; // count 속성이 없어서 오류

/** 인덱스 시그니처의 주의사항 */
interface DatesByName {
  [i: string]: Date;
}
const publishDates: DatesByName = {
  Frankenstein: new Date('1 January 1818'),
};
publishDates.Frankenstein;
console.log(publishDates.Frankenstein.toString());

publishDates.Beloved; // 런타임 undefined
console.log(publishDates.Beloved.toString()); // 실제 런타임에서는 오류가남.

/** 재정의된 속성(extends) */
interface WithNullableName {
  name: string | null;
}
interface WithNonNullableName extends WithNullableName {
  name: string;
}
interface WithNumericName extends WithNullableName {
  name: string | number;
}

const nullable: WithNullableName = { name: null };
const nonNullable: WithNonNullableName = { name: null };

/** 다중 인터페이스 확장 */
interface GivesNumber {
  giveNumber(): number;
}
interface GivesString {
  giveString(): string;
}
interface GivesBothAndEither extends GivesNumber, GivesString {
  giveEither(): number | string;
}

function useGivesBoth(instance: GivesBothAndEither) {
  instance.giveEither();
  instance.giveNumber();
  instance.giveString();
}

export {};
