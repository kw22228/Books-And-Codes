/*
  문장을 호출한 곳으로 옮기기 <--> 문장을 함수로 옮기기

  [배경]
  - 함수의 기능을 쪼개서 함수 호출 밖으로 이동한다.
  - 경우에 따라 문장을 더 슬라이스 하거나 함수로 추출할 수도 있다.
  - 언제 할까?
    - 함수가 둘 이상의 다른 일을 하는데, 그 중 하나만 변경이 필요할 때

  [절차]
  1. 호출자가 한두개 뿐이고 피호출 함수도 단순한 형태라면, 피호출 함수의 처음(마지막)줄을 잘라서 호출자로 복사해 넣는다.
  2. 더 복잡한 상황에서는 이동하지 않길 원하는 모든 문장을 함수로 추출 한다음 검색하기 쉬운 임시 함수명을 지어준다.
  3. 원래 함수를 인라인 한다.
  4. 추출된 함수의 이름을 원래 함수의 이름으로 변경한다.
*/

function renderPerson(outStream, person) {
  outStream.write(`<p>${person.name}</p>\n`);
  renderPhoto(outStream, person.photo);
  emitPhotoData(outStream, person.photo);
}
function listRecentPhotos(outStream, photos) {
  photos
    .filter((p) => p.date > recentDateCutoff())
    .forEach((p) => {
      outStream.write('<div>\n');
      emitPhotoData(outStream, p);
      outStream.write('</div>\n');
    });
}

//2개의 호출자가있음
function emitPhotoData(outStream, photo) {
  outStream.write(`<p>제목: ${photo.title}</p>\n`);
  outStream.write(`<p>날짜: ${photo.date.toDateString()}</p>`);
  outStream.write(`<p>위치: ${photo.location}</p>\n`);
}

/** Refactoring (listRecentPhotosRefactor함수만 위치정보를 따로 줘야 한다고 가정) */
function renderPersonRefactor(outStream, person) {
  outStream.write(`<p>${person.name}</p>\n`);
  renderPhoto(outStream, person.photo);

  //   emitPhotoDataRefactor(outStream, person.photo);
  emitPhotoDataRefactor(outStream, person.photo);
  outStream.write(`<p>위치: ${person.photo.location}</p>\n`);
}
function listRecentPhotosRefactor(outStream, photos) {
  photos
    .filter((p) => p.date > recentDateCutoff())
    .forEach((p) => {
      outStream.write('<div>\n');

      //   emitPhotoDataRefactor(outStream, p);
      emitPhotoDataRefactor(outStream, p);
      outStream.write(`<p>위치: ${p.location}</p>\n`);

      outStream.write('</div>\n');
    });
}

// 옮긴 함수
function emitPhotoDataRefactor(outStream, photo) {
  outStream.write(`<p>제목: ${photo.title}</p>\n`);
  outStream.write(`<p>날짜: ${photo.date.toDateString()}</p>`);
}
