// [0, 1, 2]에서 0일때 falsy값이 되어버림. ([0, 2]가 아니라 [1, 2]가 나온다.)
// 배열이 비어있다면, [undefined, undefined]반환
function extent(nums: number[]) {
  let min, max;
  for (const num of nums) {
    if (!min) {
      min = num;
      max = num;
    } else {
      min = Math.min(min, num);
      max = Math.max(max, num);
    }
  }
  return [min, max];
}

const [min, max] = extent([0, 1, 2]);
const span = max - min; // undefined 가능성 오류남.

/** 리팩토링 */
function extentRefactor(nums: number[]) {
  let result: [number, number] | null = null;
  //   let result: [number, number] = [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER];
  for (const num of nums) {
    if (!result) {
      result = [num, num];
    } else {
      result = [Math.min(num, result[0]), Math.max(num, result[1])];
    }
  }
  return result;
}
const [minR, maxR] = extentRefactor([0, 1, 2]);
const spanR = maxR - minR;

const rangeR = extentRefactor([0, 1, 2]);
if (rangeR) {
  const [min, max] = rangeR;
  const span = max - min;
}

////////////////////////////////////////////////////////////
class UserPosts {
  user: UserInfo31 | null;
  posts: Post[] | null;

  constructor() {
    this.user = null;
    this.posts = null;
  }

  async init(userId: string) {
    return Promise.all([
      async () => (this.user = await fetchUser(userId)),
      async () => (this.posts = await fetchPostsForUser(userId)),
    ]);
  }

  getUsername() {
    return this.user.name;
  }
}
const userPostsCls = new UserPosts();
const userName = userPostsCls.getUsername();
console.log(userName);

/** 리팩토링 */
class UserPostsRefactor {
  user: UserInfo31;
  posts: Post[];

  constructor(user: UserInfo31, posts: Post[]) {
    this.user = user;
    this.posts = posts;
  }

  static async init(userId: string): Promise<UserPostsRefactor> {
    const [user, posts] = await Promise.all([fetchUser(userId), fetchPostsForUser(userId)]);

    return new UserPostsRefactor(user, posts);
  }

  getUserName() {
    return this.user.name;
  }
}

(async () => {
  const userPostsRefactorCls = await UserPostsRefactor.init('kw22228');
  const userName = userPostsRefactorCls.getUserName();

  console.log(userName);
})();

/*
    - 한값의 null여부가 다른값의 null여부에 암시적으로 관련되도록 설계하면 안된다. (참조를 하면서 null이 되는걸 얘기하는거같음)
    - API 작성 시에는 반환 타입을 큰 객체로 만들고 반환 타입 전체가 NULL이거나 NULL이 아니게 만들어야한다.
      (아예 NULL이 되도록 하거나, 아니면 아예 NULL이 없거나.)
    - 클래스를 만들 때는 필요한 모든 값이 준비되었을 때 생성하여 null이 없도록하는게 좋다.
    - strictNullChecks를 설정하면 코드에 많은 오류가 있지만, null과 관련된 문제를 찾아낼 수 있어 반드시 필요
*/
