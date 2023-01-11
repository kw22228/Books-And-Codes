import _, { values } from 'lodash';

(function () {
  //프로젝트내 변수 공유 체크로 인한 지역변수 사용.

  const csvData = '...';
  const rawRows = csvData.split('\n');
  const headers = rawRows[0].split(',');

  const rows = rawRows.slice(1).map(rowStr => {
    const row: { [key: string]: string } = {};
    // const row = {};
    rowStr.split(',').forEach((val, j) => {
      row[headers[j]] = val;
    });
    return row;
  });

  /** 함수형 */
  const rowsWithFP = rawRows.slice(1).map(rowStr =>
    rowStr.split(',').reduce(
      (row, val, i) => ((row[headers[i]] = val), row),
      {} as { [key: string]: string }
      //   {}
    )
  );

  /** ladash를 이용 */
  const rowsWithLodash = rawRows.slice(1).map(rowStr => _.zipObject(headers, rowStr.split(','))); //반환타입이 Dictionary<string> (lodash의 타입 엘리어스) === Record<string, string>
})();
interface BasketballPlayer {
  name: string;
  team: string;
  salary: number;
}
declare const rosters: { [item: string]: BasketballPlayer[] };

let allPlayers = [];
let allPlayersWithType: BasketballPlayer[] = [];
for (const players of Object.values(rosters)) {
  allPlayers = allPlayers.concat(players);
  allPlayersWithType = allPlayersWithType.concat(players);
}

/** flat을 사용하는 방법 */
const allPlayersWithFlat = Object.values(rosters).flat();

/////////////////////////////////////////////
const teamToPlayers: { [team: string]: BasketballPlayer[] } = {};
for (const player of allPlayers) {
  const { team } = player;
  teamToPlayers[team] = teamToPlayers[team] || [];
  teamToPlayers[team].push(player);
}
for (const players of Object.values(teamToPlayers)) {
  players.sort((a, b) => b.salary - a.salary);
}
const bestPaid = Object.values(teamToPlayers).map(players => players[0]);
bestPaid.sort((playerA, playerB) => playerB.salary - playerA.salary);
console.log(bestPaid);

/** lodash 사용 */
const bestPaidWidtLodash = _(allPlayersWithType)
  .groupBy(player => player.team)
  .mapValues(players => _.maxBy(players, p => p.salary)!)
  .values()
  .sortBy(p => -p.salary)
  .value();

const namesA = allPlayersWithType.map(player => player.name);
const namesB = _.map(allPlayersWithType, player => player.name);
const namesC = _.map(allPlayersWithType, 'name');

const salaries = _.map(allPlayersWithType, 'salary');
const teams = _.map(allPlayersWithType, 'team');
const mix = _.map(allPlayersWithType, Math.random() < 0.5 ? 'name' : 'salary');
