/** 클래스 메서드 */
class Greeter {
  greet(name: string) {
    console.log(name);
  }
}

new Greeter().greet('jw');
new Greeter().greet();

/** 생성자 */
class Greeted {
  constructor(message: string) {
    console.log(message);
  }
}

new Greeted('hello typescript');
new Greeted();

/** 클래스 속성 */
class FieldTrip {
  destination: string;

  constructor(destination: string) {
    this.destination = destination;
    console.log(destination);

    this.nonexistent = destination; // field에 없는 값임.
  }
}
const trip = new FieldTrip('plane');
trip.destination;
trip.nonexistent;

/** 함수 속성 */
class WithPropertyParamters {
  takesParameters = (input: boolean) => (input ? 'yes' : 'no');
  me() {}
}
const instance = new WithPropertyParamters();
instance.takesParameters(true);
instance.takesParameters(123);

new WithPropertyParamters().takesParameters === new WithPropertyParamters().takesParameters; //constructor
new WithPropertyParamters().me === new WithPropertyParamters().me; // prototype

/** 초기화 검사 */
class WithValue {
  immediate = 0;
  later: number;
  mayBeUndefined: number | undefined;
  unused: number; // undefined가 나왓는데 새로 할당도 안해줌.

  constructor() {
    this.later = 1;
  }
}

/** 확실하게 할당된 속성 */
class ActivitiesQueue {
  pending!: string[]; // 생성자에서 pending을 할당하지 않으므로 타입오류. 따라서 !어서션으로 타입체크 비활성화 해준다.

  initialize(pending: string[]) {
    this.pending = pending;
  }

  next() {
    return this.pending.pop();
  }
}
const activities = new ActivitiesQueue();
activities.initialize(['eat', 'sleep', 'learn']);
activities.next();

/** 클래스에서 readonly */
class Quote {
  readonly text: string;

  constructor(text: string) {
    this.text = ''; // readonly여도 생성자에선 할당 가능.
  }

  emphasize() {
    this.text += '!!'; // 할당 불가능
  }
}
const quote = new Quote('hello');
quote.text;
quote.text = 'aaa';

/** 타입으로서의 클래스 */
class Teacher {
  sayHello() {
    console.log('hello');
  }
}
let teacher: Teacher;
teacher = new Teacher();
teacher = 'teacher'; // 타입 에러

/** 타입 클래스는 객체의 형태만 고려한다 ! */
class SchoolBus {
  param: string | undefined;
  getAbilities() {
    return ['magic', 'shape'];
  }
}
function withSchollBus(bus: SchoolBus) {
  console.log(bus.getAbilities());
}

withSchollBus(new SchoolBus());
withSchollBus({
  param: '123',
  getAbilities: () => ['hello'],
});
withSchollBus({
  param: 123,
  getAbilities() {
    return ['hello'];
  },
});

/** 클래스와 인터페이스 (implements) */
interface Learner {
  name: string;
  study(hours: number): void;
}

class Student implements Learner {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  study(hours: number) {
    console.log(hours);
  }
}

/** 다중 인터페이스 */
interface Graded {
  grades: number[];
}
interface Reporter {
  reporter: () => string;
}
class ReportCard implements Graded, Reporter {
  grades: number[];

  constructor(grades: number[]) {
    this.grades = grades;
  }

  reporter() {
    return '';
  }
}

/** 할당 가능성 확장 */
class Lesson {
  subject: string;

  constructor(subject: string) {
    this.subject = subject;
  }
}
class OnlineLesson extends Lesson {
  url: string;

  constructor(subject: string, url: string) {
    super(subject);
    this.url = url;
  }
}

let lesson: Lesson;
lesson = new Lesson('coding');
lesson = new OnlineLesson('coding', 'mk.co.kr');

let online: OnlineLesson;
online = new OnlineLesson('conding', 'mk.co.kr');
online = new Lesson('coding');

//////////////////////////////

class PastGrades {
  grades: number[] = [];
}
class LabeledPastGrades extends PastGrades {
  label?: string;
}

// 하위 클래스의 필드값이 optional이라서 상위클래스를 가져와도 오류나지 않는다.
let subClass: LabeledPastGrades;
subClass = new LabeledPastGrades();
subClass = new PastGrades();

///////////////////////////////

class GradeAnnouncer {
  message: string;

  constructor(grade: number) {
    this.message = grade >= 65 ? 'fail' : 'pass';
  }
}
class PassingAnnouncer extends GradeAnnouncer {
  constructor() {
    super(100);
  }
}
class FailingAnnouncer extends GradeAnnouncer {}

let passingAnnouncer: PassingAnnouncer = new PassingAnnouncer();
let failingAnnouncer: FailingAnnouncer = new FailingAnnouncer(100);

/** 재정의된 메서드 */
class GradeCounter {
  countGrades(grades: string[], letter: string) {
    return grades.filter(grade => grade === letter).length;
  }
}
class FailureCounter extends GradeCounter {
  countGrades(grades: string[], letter: string) {
    return super.countGrades(grades, letter);
  }
}
class AnyFailureChecker extends GradeCounter {
  countGrades(grades: string[]) {
    return super.countGrades(grades, 'f') !== 0;
  }
}
const counter: GradeCounter = new AnyFailureChecker();

/** 재정의된 속성 */
class Assignment {
  grade?: number;
}
class GradedAssignment extends Assignment {
  grade: number;
  constructor(grade: number) {
    super();
    this.grade = grade;
  }
}

/////////////////////////////////

class NumericGrade {
  value = 0;
}
class VagueGrade extends NumericGrade {
  value = Math.random() > 0.5 ? 1 : '...';
}

const instance2: NumericGrade = new VagueGrade();

/** 추상 클래스 (abstract) */
abstract class School {
  readonly name: string;

  constructor(name: string) {
    this.name = name;
  }

  abstract getStudentTypes(): string[];
}
class Preschool extends School {
  getStudentTypes() {
    return ['12'];
  }
}
class Absence extends School {}

let school: School;
school = new Preschool('jw');
school = new School('jw'); // 추상클래스 인스턴스 만들 수 없음.

/** 클래스의 접근 제어자 */
class Base {
  isPublicImplicit = 0;
  public isPublicExplicit = 1;
  protected isProtected = 2;
  private isPrivate = 3;
  #truePrivate = 4;
}
class SubClass extends Base {
  examples() {
    this.isPublicImplicit;
    this.isPublicExplicit;
    this.isProtected;

    this.isPrivate;

    this.#truePrivate;
  }
}

const sub = new SubClass();
sub.isPublicImplicit;
sub.isPublicExplicit;
sub.isProtected;
sub.isPrivate;
sub.#truePrivate;

/** 정적 필드 제한자 (static) */
class Question {
  protected static readonly answer: 'bash';
  protected static readonly prompt = "what's an ogres";

  guess(getAnswer: (prompt: string) => string) {
    const answer = getAnswer(Question.prompt);

    if (answer === Question.answer) {
      console.log('you got it');
    } else {
      console.log('try again');
    }
  }
}
Question.answer;

export {};
