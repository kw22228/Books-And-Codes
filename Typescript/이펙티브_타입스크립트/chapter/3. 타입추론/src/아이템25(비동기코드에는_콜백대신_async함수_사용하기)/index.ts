(function () {
  //프로젝트내 변수 공유 체크로 인한 지역변수 사용.

  /** 콜백 형식 */
  function fetchURL(url: string, callback: any) {}
  fetchURL('url1', function (response1: any) {
    fetchURL('url2', function (response2: any) {
      fetchURL('url3', function (response3: any) {
        console.log(1);
      });
      console.log(2);
    });
    console.log(3);
  });
  console.log(4);
  //4 3 2 1

  /** Promise */
  const page1Promise = fetch('url1')
    .then(response1 => fetch('url2'))
    .then(response2 => fetch('url3'))
    .then(response3 => console.log(response3))
    .catch(error => console.log(error));

  /** async & await */
  async function fetchPages() {
    try {
      const response1 = await fetch('url1');
      const response2 = await fetch('url2');
      const response3 = await fetch('url3');
    } catch (e) {
      console.log(e);
    }
  }

  /** Promise all */
  async function fetchPages2() {
    // 반환값들이 Response타입으로 추론되고있음.
    const [response1, response2, response3] = await Promise.all([
      fetch('url1'),
      fetch('url2'),
      fetch('url3'),
    ]);
  }

  function fetchPagesWithCallback() {
    let numDone = 0;
    const responses: string[] = [];
    const done = () => {
      const [response1, response2, response3] = responses;
    };

    const urls = ['url1', 'url2', 'url3'];
    urls.forEach((url, i) => {
      fetchURL(url, (r: any) => {
        responses[i] = url;
        numDone++;
        if (numDone === urls.length) done();
      });
    });
  }

  /** Promise race */
  // 시간초를 정하고 이때까지 fetch가 되지않으면 reject를 해버리는 함수 (race에서만 쓰게될듯)
  function timeout(ms: number): Promise<never> {
    return new Promise((resolve, reject) => {
      setTimeout(() => reject('timeout'), ms);
    });
  }
  async function fetchWithTimeout(url: string, ms: number) {
    return Promise.race([fetch(url), timeout(ms)]);
  }

  /** async 함수는 반환 타입이 항상 Promise */
  async function getNumber() {
    return 42;
  }
  const getNumberWithPromise = () => Promise.resolve(42);

  /** 문제가 되는 예시 (동기와 비동기가 뒤죽박죽이 되버림) */
  const _cache: { [url: string]: string } = {};
  function fetchWithCache(url: string, callback: (text: string) => void) {
    if (url in _cache) {
      callback(_cache[url]); //동기적으로 실행
    } else {
      fetchURL(url, (text: string) => {
        _cache[url] = text;
        callback(text);
      });
    }
  }
  let requestStatus: 'loading' | 'success' | 'error';
  function getUser(userId: string) {
    fetchWithCache(`/user/${userId}`, profile => {
      requestStatus = 'success';
    });
    requestStatus = 'loading';
    //캐시가 되어있다면 동기적으로 실행되어
    //success가 되더라도 바로 loading으로 변경
  }

  /** async를 사용하였을 때 */
  async function fetchWithCacheAsyncronos(url: string) {
    if (url in _cache) {
      return _cache[url]; //Promise로 return;
    }
    const response = await fetch(url);
    const text = await response.text();
    _cache[url] = text;
    return text;
  }
  async function getUserAsyncronos(userId: string) {
    requestStatus = 'loading';
    const profile = await fetchWithCacheAsyncronos(`/user/${userId}`); //뭘하든 비동기로 return
    requestStatus = 'success';
  }

  /** async에서 Promise를 반환할때 */
  async function getJSON(url: string) {
    const response = await fetch(url);
    const jsonPromise = response.json(); //await을 안하고 promise그자체를 넘겼기때문에 Promise<any>
    return jsonPromise; //Promise<any>
  } //Promise를 리턴하더라고 Promise<Promise<any>>가 아닌 즉, 프로미스객체에 프로미스가 래핑되는게 아닌 그냥 Promise<any>이다.
})();
