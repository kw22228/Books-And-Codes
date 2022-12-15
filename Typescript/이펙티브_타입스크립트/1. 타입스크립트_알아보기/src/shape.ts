// interface Square {
//     width: number;
// }
// interface Rectangle extends Square {
//     height: number;
// }
// type Shape = Square | Rectangle;

// function calculateArea(shape: Shape) {
//     // if (shape instanceof Rectangle) {
//     //     return shape.width * shape.height;
//     // } else {
//     //     return shape.width * shape.width;
//     // }
//     if ('height' in shape) {
//         shape;
//         return shape.width * shape.height;
//     } else {
//         shape;
//         return shape.width * shape.width;
//     }
// }

// interface Square {
//     kind: 'square';
//     width: number;
// }
// interface Rectangle {
//     kind: 'rectangle';
//     height: number;
//     width: number;
// }
// type Shape = Square | Rectangle;

// function calculateArea(shape: Shape) {
//     if (shape.kind === 'rectangle') {
//         shape;
//         return shape.width * shape.height;
//     }

//     shape;
//     return shape.width * shape.width;
// }
