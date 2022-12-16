function setLightSwitch(value: boolean) {
    switch (value) {
        case true:
            //불켜기
            break;
        case false:
            //불끄기
            break;
        default:
            console.log('실행이 될까?');
    }
}

// 타입체커에서 오류가 나지않았고, js코드로 트랜스파일링 되면서 boolean속성이 사라지면서
// value = 'ON' 으로 들어올 상황이 생긴다.

interface LightApiResponse {
    lightSwitchValue: boolean;
}
async function setLight() {
    const response = await fetch('/light');
    const result: LightApiResponse = await response.json();
    // setLightSwitch(result.lightSwitchValue);
}

// response.json이 LightApiResponse의 타입으로 꼭 들어오리란 보장은 없다. (문자열로 들어올 수 있음.)
