/*
  서드파티의 모듈에서 export되지 않은 타입정보가 필요한 경우가 생긴다.
  밑의 예시에서 사용자는 SecretName또는 SecretSanta를 가져올 수 없고 getGift만 가져올 수 있다.
  그러나 Parameters와 ReturnType 제네릭을 사용하여 추출할 수 있다.
*/

interface SecretName {
  first: string;
  last: string;
}
interface SecretSanta {
  name: SecretName;
  gift: string;
}

export function getGift(name: SecretName, gift: string): SecretSanta {
  return { name: { first: 'kim', last: 'jaewon' }, gift: 'g1' };
}

/** 추출 */
type MySanta = ReturnType<typeof getGift>; // SecretSanta
type MyName = Parameters<typeof getGift>[0]; // SecretName
