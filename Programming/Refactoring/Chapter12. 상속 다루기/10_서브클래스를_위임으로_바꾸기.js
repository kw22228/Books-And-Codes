/*
  서브클래스를 위임으로 바꾸기

  [배경]
  - 상속으로 해결하기 어려운 문제를 위임으로 바꿔 해결하자. (속한 갈래에 따라 동작이 다른 객체는 상속으로 표현하는게 더 나을수 있다.)
  - 상속은 한번만 쓸 수 있는 카드라는 단점과 클래스들(서브클래스들)의 관계를 긴밀하게 결합한다는 단점이 있다.
    이러한 문제를 위임으로 결합도를 낮출 수 있다. (복잡도는 올라갈 수 있음.)

  [절차]
  1. 생성자를 호출하는 곳이 많다면 생성자를 팩터리 함수로 바꾸자.
  2. 위임으로 활용할 빈 클래스를 만들고, 서브클래스에 특화된 데이터를 전부 만들고 보통은 슈퍼클래스를 가리키는 역참조도 필요하다.
  3. 위임을 저장할 필드를 슈퍼클래스에 추가한다.
  4. 서브클래스 생성 코드를 수정하여 위임 인스턴스를 생성하고 위임 필드에 대입해 초기화 한다.
  5. 서브클래스의 메서드 중 위임 클래스로 이동할 것을 고른다.
  6. 함수 옮기기(8-1)로 위임클래스로 옮긴다. (원래 메서드에서 위임하는 코드는 지우지 않는다.)
  7. 서브클래스 외부에도 원래 메서드를 호출하는 코드가 있으면 서브클래스의 위임 코드를 슈퍼클래스로 옮기자.
     이때 위임이 존재하는지를 검사하는 보호 코드로 감싸야 한다. 만약 호출하는 외부 코드가 없다면 원래 메서드는 제거한다.
  8. 서브클래스의 모든 메서드가 옮겨질 때 까지 5번 ~ 7번 을 반복하자.
  9. 서브클래스들의 생성자를 호출하는 코드를 찾아 슈퍼클래스의 생성자를 사용하도록 수정하자.
  10. 서브클래스를 삭제한다.
*/

/** 서브클래스가 하나일 때 */
class Booking {
  constructor(show, date) {
    this._show = show;
    this._date = date;
  }

  get hasTalkback() {
    return this._show.hasOwnProperty('talkback') && !this.isPeakDay;
  }
  get basePrice() {
    let result = this._show.price;
    if (this.isPeakDay) result += Math.round(result * 0.15);
    return result;
  }
}
class PremiumBooking extends Booking {
  constructor(show, date, extras) {
    super(show, date);
    this._extras = extras;
  }

  //Override
  get hasTalkback() {
    return this._show.hasOwnProperty('talkback');
  }
  get basePrice() {
    return Math.round(super.basePrice + this._extras.premiumFee);
  }

  get hasDinner() {
    return this._extras.hasOwnProperty('dinner') && !this.isPeakDay;
  }
}

const aBooking = new Booking(show, date);
const aPremiumBooking = new PremiumBooking(show, date, extras);

/** ------------------------------------------------리팩터링-------------------------------------------------- */

class BookingRefactor {
  constructor(show, date) {
    this._show = show;
    this._date = date;
  }

  get hasTalkback() {
    // return this._show.hasOwnProperty('talkback') && !this.isPeakDay;

    // 7.위임이 존재하는지 검사하는 보호 코드를 적용.
    return this._premiumDelegate
      ? this._premiumDelegate.hasTalkback
      : this._show.hasOwnProperty('talckback') && !this.isPeakDay;
  }
  get basePrice() {
    let result = this._show.price;
    if (this.isPeakDay) result += Math.round(result * 0.15);

    return this._premiumDelegate ? this._premiumDelegate.extendBasePrice(result) : result;
  }
  get hasDinner() {
    return this._premiumDelegate ? this._premiumDelegate.hasDinner : undefined;
  }

  // 3.위임을 저장할 필드를 슈퍼클래스에 추가
  _bePremium(extras) {
    this._premiumDelegate = new PremiumBookingDelegate(this, extras);
  }
}

// 10.서브클래스를 삭제한다.
// class PremiumBookingRefactor extends Booking {
//   constructor(show, date, extras) {
//     super(show, date);
//     this._extras = extras;
//   }

//   //Override
//   //   get hasTalkback() { // 7.위임클래스로 이동후 제거
//   //     return this._show.hasOwnProperty('talkback');
//   //   }
//   //   get basePrice() {
//   //     return Math.round(super.basePrice + this._extras.premiumFee);
//   //   }

//   // 서브클래스에서만 존재하는 메서드 -> 위임클래스로 옮김
//   //   get hasDinner() {
//   //     return this._extras.hasOwnProperty('dinner') && !this.isPeakDay;
//   //   }
// }

// 2.위임 클래스를 새로 생성한다.
class PremiumBookingDelegate {
  constructor(hostBooking, extras) {
    this._host = hostBooking;
    this._extras = extras;
  }

  // 5,6.함수 옮기기로 위임클래스로 메서드 옮겨주자.
  get hasTalkback() {
    return this._host.show.hasOwnProperty('talkback');
  }
  extendBasePrice(base) {
    return Math.round(base + this._extras.premiumFee);
  }
  get hasDinner() {
    return this._extras.hasOwnProperty('dinner') && !this._host.isPeakDay;
  }
}

// 1.생성자 팩터리 함수 생성
function createPremiumBooking(show, date, extras) {
  // 4.위임 인스턴스 생성 후 위임필드에 대입해 초기화.
  //   const result = new PremiumBooking(show, date, extras);

  // 9.슈퍼클래스의 생성자로 수정
  const result = new Booking(show, date);
  result._bePremium(extras);
  return result;
}

const aPremiumBookingRefactor = createPremiumBooking(show, date, extras);
