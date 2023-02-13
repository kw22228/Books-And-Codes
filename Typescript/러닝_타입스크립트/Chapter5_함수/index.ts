function singTwo(first: string): void;
function singTwo(first: string, second: string): void;
function singTwo(first: string, second?: string, third: string): void {
  console.log(`${first} / ${second}`);
}
singTwo('Ball and Chain');
singTwo('Ball and Chain', 'Higher Love');
singTwo('Ball and Chain', 'Higher Love', 'Dreams');

/** optional parameter */
function announceSong(song: string, singer?: string) {
  console.log(`song ${song}`);

  if (singer) {
    console.log(`Singer: ${singer}`);
  }
}
announceSong('Greensleeves');
announceSong('Greensleeves', undefined);
announceSong('Green', 'labs', 'go');

/** rest parameters */
function singAllTheSongs(singer: string, ...songs: string[]) {
  for (const song of songs) {
    console.log(song);
  }
}
singAllTheSongs('alicala');
singAllTheSongs('lady gaga', 'badromance');
singAllTheSongs('ella fit', 2000);

/** return type */
function getSongRecordingDate(song: string): Date | undefined {
  switch (song) {
    case 'strange Fruit':
      return new Date('April 20, 1939');
    case 'Greensleeves':
      return 'unknown';
    default:
      return undefined;
  }
}

/** function type */
let nothingInGivesString: () => string;
let inputAndOutput: (songs: string[], count?: number) => number;

const songs = ['Juice', 'shake it off', 'whats up'];
function runOnSongs(getSongAt: (index: number) => string) {
  for (let i = 0; i < songs.length; i += 1) {
    console.log(getSongAt(i));
  }
}
function getSongAt(index: number) {
  return `${songs[index]}`;
}
runOnSongs(getSongAt);

function logSong(song: string) {
  return song;
}
runOnSongs(logSong);

/** function union */
let returnsStringOrUndefined: () => string | undefined;
let maybeReturnsString: (() => string) | undefined;

let singer: (song: string) => string;
singer = song => 123;

/** function type alias */
type StringToNumber = (input: string) => number;
let stringToNumber: StringToNumber;
stringToNumber = input => input.length;
stringToNumber = input => input.toUpperCase();

/** void */
const records: string[] = [];
function saveRecords(newRecords: string[]) {
  newRecords.forEach(record => records.push(record));
}
let a: string | undefined;
a = saveRecords(['21', 'come on over', 'the bodyguard']);

/** never return type */
function fail(message: string): never {
  throw new Error('error! ' + message);
}
function workWithUnsafeParam(param: unknown) {
  if (typeof param !== 'string') {
    fail('param shold be a string'); // never타입 이기 때문에 코드가 여기서 멈춤.
  }

  param.toUpperCase();
}

/** overload function */
function createDate(timestamp: number): Date;
function createDate(month: number, day: number, year: number): Date;
function createDate(monthOrTimestamp: number, day?: number, year?: number) {
  return day === undefined || year === undefined
    ? new Date(monthOrTimestamp)
    : new Date(year, monthOrTimestamp);
}

createDate(554645686);
createDate(7, 27, 1987);
createDate(4, 1);

/** signature */
function format(data: string): string;
function format(data: string, needle: string, haystack: string): string;
function format(getData: () => string): string; // 매개변수가 달라서 오류
function format(data: string, needle?: string, haystack?: string) {
  return needle && haystack ? data.replace(needle, haystack) : data;
}
export {};
