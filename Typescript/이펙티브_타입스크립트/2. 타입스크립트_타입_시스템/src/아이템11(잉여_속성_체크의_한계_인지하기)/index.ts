interface Room {
    numDoors: number;
    ceilingHeightFt: number;
}

//객체 리터럴 (잉여 속성 체크가 적용)
const r: Room = {
    numDoors: 1,
    ceilingHeightFt: 10,
    elephant: 'present',
};

//구조적 타이핑
const obj = {
    numDoors: 1,
    ceilingHeightFt: 10,
    elephant: 'present',
};
const r1: Room = obj;

/////////////////////////////////

interface Options {
    title: string;
    darkMode?: boolean;
}
function createWindow(options: Options) {
    if (options.darkMode) {
        //setDarkMode();
    }
}
createWindow({
    title: 'Spider Solitaire',
    darkmode: true,
});

const o1: Options = document; //document.title이 string 타입.
const o2: Options = new HTMLAnchorElement(); //HTMLAnchorElement.title이 string타입

const o: Options = { darkmode: true, title: 'Ski Free' };

const intermediate = { darkmode: true, title: 'Ski Free' };
const o3: Options = intermediate;

const o4 = { darkmode: true, title: 'Ski Free' } as Options; // 타입단언문(잉여 속성체크 x)

///////////////////////////////////

interface LineCharOptions {
    logscale?: boolean;
    invertedYAxis?: boolean;
    areaChart?: boolean;
}
const opts = { logScale: true };
const o5: LineCharOptions = opts;
