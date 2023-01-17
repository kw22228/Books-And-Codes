(function () {
  interface Album {
    artist: string;
    title: string;
    releaseDate: string; // YYYY-MM-DD
    recordingType: string; // 예를들어, "live" 또는 "studio"
  }
  const kindOfBlue: Album = {
    artist: 'Miles Davis',
    title: 'Kind of Blue',
    releaseDate: '1723123', // 원하는 형식과 맞지않은 string문자열
    recordingType: 'Studio1111', // 원하는 형식과 맞지않은 string문자열
  };

  function recoredRelease(title: string, date: string) {}
  recoredRelease(kindOfBlue.releaseDate, kindOfBlue.title); //순서가 뒤바뀌어 오류여야하지만 정상이다.

  /** 타입 좁히기 */
  type RecordingType = 'studio' | 'live';
  interface IAlbum {
    artist: string;
    title: string;
    releaseDate: Date; //Date로 좁힘
    recordingType: RecordingType; //유니온 타입으로 좁힘
  }
  const kindOfBlue2: IAlbum = {
    artist: 'Miles Davis',
    title: 'Kind of Blue',
    releaseDate: new Date('1959-09-18'),
    recordingType: 'Studio1111',
  };
  function getAlbumsOfType(recordingType: RecordingType) {} //매개변수가 어떤게 들어와야되는지 명확하게 알 수 있음.

  /** keyof를 통한 좁히기 */
  function pluck(records, key) {
    return records.map(r => r[key]);
  }

  function pluckRefactor(records: any[], key: string): any[] {
    return records.map(r => r[key]);
  } //타입이 있지만 any타입으로 정밀x (특히 반환값에 any는 최악)

  function pluckWithoutAny<T>(records: T[], key: string): any[] {
    return records.map(r => r[key as keyof T]); //********************************************무슨뜻인지 잘 모르겟음.
  }

  type K = keyof IAlbum; //'artist' | 'title' | 'releaseDate' | 'recordingType'

  //위 keyof를 위용하여 key를 좁혀보자 (반환타입도 추론가능)
  function pluckWithKeyofType<T>(records: T[], key: keyof T) {
    return records.map(r => r[key]);
  }

  const albums = [kindOfBlue2, kindOfBlue2];
  pluckWithKeyofType(albums, 'releaseDate'); //IAlbum에는 string도 있고 Date도 있다 따라서 string | Date

  /** 제네릭을 통한 keyof 좁히기 */
  function pluckWithKeyofTypeGeneric<T, K extends keyof T>(records: T[], key: K) {
    return records.map(r => r[key]);
  }
  pluckWithKeyofTypeGeneric(albums, 'releaseDate');
  pluckWithKeyofTypeGeneric(albums, 'artist');
})();
/*
    - string타입보다는 더 구체적인 타입을 사용하자.
    - 변수의 범위를 더 정확하게 표현하고 싶다면 string보다는 문자열 유니온 타입을 사용하자
    - 객체의 속성 이름을 함수의 파라미터로 받을 때는 string보다는 keyof T를 사용하자.
*/
