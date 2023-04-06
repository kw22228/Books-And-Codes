/*
  문장을 함수로 옮기기 <--> 문장을 호출한 곳으로 옮기기

  [배경]
  - 특정 함수를 호출 할때 마다 그 앞이나 뒤에서 똑같은 문장을 반복할때
    그 문장을 함수의 안으로 옮겨버리자.

  [절차]
  1. 반복 코드(문장)가 함수 호출 부분과 멀리 떨어져 있다면 문장 슬라이드 하기로 함수 근처로 옮기자.
  2. 타깃 함수를 호출하는 곳이 한곳 뿐이면, 단순히 소스 위치에서 해당 코드를 잘라내어 피호출 함수로 복사하자.
  3. 호출자가 둘이상이면 호출자중 하나에서 타깃함수 호출 부분과 그 함수로 옮기려는 문장들을 함께 다른 함수로 추출하자. (함수 문장 함수  -> 하나의 함수로 묶자)
  4. 다른 곳에서 방금만든 함수를 사용하게 수정하자.
  5. 바로 함수를 사용하기보다 원래 사용하던 함수에 인라인으로 넣고 테스트하자.
  6. 새로운함수를 원래사용하던 함수로 대체하고 원래 함수는 제거.
*/

function renderPerson(outStream, person) {
  const result = [];
  result.push(`<p>${person.name}</p>`);
  result.push(renderPhoto(person.photo));
  result.push(`<p>제목: ${person.photo.title}</p>`);
  result.push(emitPhotoData(person.photo));

  return result.join('\n');
}
function photoDiv(p) {
  return ['<div>', `<p>제목: ${p.title}</p>`, emitPhotoData(p), '</div>'].join('\n');
}
function emitPhotoData(aPhoto) {
  const result = [];
  result.push(`<p>위치: ${aPhoto.location}</p>`);
  result.push(`<p>날짜: ${aPhoto.date.toDateString()}</p>`);

  return result.join('\n');
}

/** Refactoring */
// 새함수 (제목을 붙이는 내용과 emitPhotoData를 합쳤다.)
function emitPhotoDataRefactor(p) {
  return [
    `<p>제목: ${p.title}</p>`,
    `<p>위치: ${p.location}</p>`,
    `<p>날짜: ${p.date.toDateString()}</p>`,
  ].join('\n');
}
function photoDivRefactor(p) {
  return ['<div>', emitPhotoDataRefactor(p), '</div>'].join('\n');
}
function renderPersonRefactor(outStream, person) {
  const result = [];
  result.push(`<p>${person.name}</p>`);
  result.push(renderPhoto(person.photo));

  //   result.push(`<p>제목: ${person.photo.title}</p>`);
  //   result.push(emitPhotoData(person.photo));

  emitPhotoDataRefactor(person.photo);

  return result.join('\n');
}
