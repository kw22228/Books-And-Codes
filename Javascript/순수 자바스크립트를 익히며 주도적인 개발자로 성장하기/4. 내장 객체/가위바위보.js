function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function rspGame(userRsp) {
    const rsp = ['가위', '바위', '보'];
    const playerRsp = rsp[getRandomInteger(0, 1)];
}
