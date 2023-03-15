function usd(aNumber) {
  const options = {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  };
  return new Intl.NumberFormat('en-US', options).format(aNumber / 100); // 단위 변환 로직 추가
}

export default usd;
