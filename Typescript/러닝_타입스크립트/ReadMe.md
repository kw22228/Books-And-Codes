### 코드 주석 규칙

```javascript
let rocker; // 타임: any

rocker = 'Joan Jett'; // 타입: string
rocker.toUpperCase(); // Ok

rocker = 19.58; // 타입: number
rocker.toPrecision(1); // Ok

rocker.toUpperCase();
//     ~~~~~~~~~~~~~
// Error: 'toUpperCase' does not exist on type 'number'.
```

1. 코드 설명 주석 - 밝은 주황색
2. 오류나 로그 - 어두운 주황색
