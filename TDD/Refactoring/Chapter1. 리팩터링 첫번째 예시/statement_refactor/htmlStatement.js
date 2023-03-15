import createStatementData from './createStatementData';
import usd from './utils/usd';

function htmlStatement(invoice, plays) {
  return renderHtml(createStatementData(invoice, plays));
}

function renderHtml(data) {
  return /* html */ `
    <h1>청구 내역 (고객명: ${data.customer})</h1>
    <table>
      <thead>
        <tr>
            <th>연극</th>
            <th>좌석 수</th>
            <th>금액</th>
        </tr>
      </thead>
      <tbody>
        ${data.performances
          .map(
            perf => /* html */ `
        <tr>
          <td>${perf.play.name}</td>
          <td>${perf.audience}석</td>
          <td>${usd(perf.amount)}</td>
        </tr>`
          )
          .join('')}
      </tbody>
    </table>
    <p>총액: <em>${usd(data.totalAmount)}</em></p>
    <p>적립 포인트: <em>${data.totalVolumeCredits}</em>점</p>
  `;
}

export default htmlStatement;
