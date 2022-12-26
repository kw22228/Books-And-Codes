/** noImplicitAny */
function add(a, b) {
  return a + b;
}
add(10, null);

function add2(a: number, b: number) {
  return a + b;
}
add2(10, null); //Error

/** strictNullChecks */
const x2: number = null;
const xx: number | null = null;

const el = document.getElementById('status');
el.textContent = 'Ready'; // null 오류

if (el) {
  el.textContent = 'Ready'; // el 타입가드
}
el!.textContent = 'Ready';
