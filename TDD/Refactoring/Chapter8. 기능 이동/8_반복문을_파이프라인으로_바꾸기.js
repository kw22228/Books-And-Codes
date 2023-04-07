/*
  반복문을 파이프라인으로 바꾸기

  [배경]
  - 반복문을 파이프라인으로 변경하여 흐름을 더 쉽게 파악할 수 있게 해주자.

  [절차]
  1. 반복문에서 사용하는 컬렉션을 가리키는 변수를 만든다.
  2. 반복문의 첫줄 부터 시작해서, 각각의 단위 행위를 적절한 컬레션 파이프라인 연산으로 대체한다.
  3. 반복문의 모든 동작을 대체했다면 반복문을 지운다.
*/

const data = `office, country, telephone
Chicago, USA, +1 312 373 1000
Beijing, China, +86 4000 900 505
Bangalore, India, +91 80 4064 9570
Porto Alegre, Brazil, +55 51 3079 3550
Chennai, India, +91 44 660 44766`;
acquireDataRefactorWithPipeline(data);

function acquireData(input) {
  const lines = input.split('\n');
  let firstLine = true;
  const result = [];

  for (const line of lines) {
    if (firstLine) {
      firstLine = false;
      continue;
    }
    if (line.trim() === '') continue;

    const record = line.split(',');
    if (record[1].trim() === 'India') {
      result.push({
        city: record[0].trim(),
        phone: record[2].trim(),
      });
    }
  }

  return result;
}

/** Refactoring Pipeline */
function acquireDataRefactorWithPipeline(input) {
  const lines = input.split('\n');
  return lines //
    .slice(1) // 1번째 줄(헤드)를 뺀 나머지
    .filter((line) => line.trim() !== '') // 빈공간이 없는지 체크
    .map((line) => line.split(','))
    .filter((record) => record[1].trim() === 'Indea')
    .map((record) => ({
      city: record[0].trim(),
      phone: record[2].trim(),
    }));
}
