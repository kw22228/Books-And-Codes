let age: number;
age = '12'; // 오류

age = '12' as any; // 타입 단언문
age += 1; // '12' + 1 -> 121

function calculateAge(birthDate: Date): number {
  return Number(birthDate); //NaN
}
let birthDate: any = '1990-01-19';
calculateAge(birthDate); // 의도치않게 any타입의 문자열이 들어온다. (Date가 들어와야 정상)

////////////

// 객체의 autocomplete가 적용되지 않음.
let person: any = { first: 'Geroge', last: 'Washington' };

interface Person {
  first: string;
  last: string;
}
// interface에 있는 props key를 변경하면 덩달아 rename할 수 있음
// 마찬가지로 any타입에서는 언어 서비스 적용 x
const formatName = (p: Person) => `${p.first} ${p.last}`;
const formatNameAny = (p: any) => `${p.first} ${p.last}`;

/** any타입은 코드 리팩터링 때 버그를 감춘다. */
interface ComponentProps {
  onSelectItem: (id: any) => void;
}

function renderSelector(props: ComponentProps) {
  const { onSelectItem } = props;
  onSelectItem('1');
}

let selectedItem: number = 0;
function handleSelectItem(id: number) {
  selectedItem = id;
}

renderSelector({ onSelectItem: handleSelectItem });
