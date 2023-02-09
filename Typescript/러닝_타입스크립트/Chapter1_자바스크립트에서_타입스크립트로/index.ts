const firstName = 'Georgia';
const nameLength = firstName.length(); // not callable

/** 1.4.2 제한을 통한 자유 */
function sayMyName(fullName: any) {
  console.log('You acting kind of shady, aint callin me ' + fullName);
}
sayMyName('Beyonce', 'Knowles'); // 1개의 인수인데 2개가 들어가서 오류남

/** 1.4.3 정확한 문서화 */
interface Painter {
  finish(): boolean;
  ownMaterials: Material[];
  paint(painting: string, materials: Material[]): boolean;
}
function paintPainting(painter: Painter, painting: string): boolean {
  return true;
} // painter객체의 프로퍼티를 미리 알 수 있음.
