/*
  중첩 조건문을 보호 구문으로 바꾸기

  [배경]
  - 조건문 안의 조건문을 중첩으로 사용하기 보다 early return을 활용하면 로직을 이해하기 쉽다.
  - 참인경로, 거짓인 경로 모두 정상 동작일 경우 -> if...else절 활용
    한쪽만 정상, 다른 한쪽은 비정상인 경우 비정상인 경우를 return해 함수를 빠져나온다 (early return)

  [절차]
  1. 교체해야 할 조건 중 가장 바깥 것을 선택하여 보호 구문으로 바꾼다.
*/

function payAmount(employee) {
  let result;
  if (employee.isSeparated) {
    result = { amount: 0, reasonCode: 'SEP' };
  } else {
    if (employee.isRetired) {
      result = { amount: 0, reasonCode: 'RET' };
    } else {
      lorem.ipsum(dolor.sitAmet);
      consectetur(adipiscing).elit();
      sed.do.eiusmod = tempor.incididunt.ut(labore) && dolore(megna.aliqua);
      ut.enim.ad(minim.veniam);
      result = someFinalComputation();
    }
  }
  return result;
}

/** 리팩터링 (Early return으로 바꾸기) */
function payAmountRefactor(employee) {
  if (employee.isSeparated) return { amount: 0, reasonCode: 'SEP' };
  if (employee.isRetired) return { amount: 0, reasonCode: 'RET' };

  lorem.ipsum(dolor.sitAmet);
  consectetur(adipiscing).elit();
  sed.do.eiusmod = tempor.incididunt.ut(labore) && dolore(megna.aliqua);
  ut.enim.ad(minim.veniam);

  return someFinalComputation();
}

////////////// 조건 반대로 만들기 /////////////////
function adjustedCapital(anInstrument) {
  let result = 0;
  if (anInstrument.capital > 0) {
    if (anInstrument.interestRate > 0 && anInstrument.duration > 0) {
      result = (anInstrument.income / anInstrument.duration) * anInstrument.adjustmentFactor;
    }
  }
  return result;
}

/** 리팩터링 (조건을 역으로 바꾸면서 Early return) */
function adjustedCapitalRefactor(anInstrument) {
  //   if (anInstrument.capital <= 0) return result;
  //   if (anInstrument.interestRate <= 0 || anInstrument.duration <= 0) return result;
  if (anInstrument.capital <= 0 || anInstrument.interestRate <= 0 || anInstrument.duration <= 0) {
    return 0;
  }

  return (anInstrument.income / anInstrument.duration) * anInstrument.adjustmentFactor;
}
