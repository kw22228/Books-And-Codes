"use strict";
/**
 *  당신의 작업은 엄격하게 하고, 타인의 작업은 너그럽게 받아들인다.
 *  매개변수는 타입범위가 넓어도 되지만, 결과를 반환할 때는 타입의 범위가 구체적이여야한다.
 *  (옵셔널 속성과 유니온 타입은 반환타입보다 매개변수 타입에 더 일반적이다.)
 */
function focusOnFeature(f) {
    const bounds = calculateBoundingBox(f);
    const camera = viewportForBounds(bounds);
    setCamera(camera);
    const { center: { lat, lng }, zoom, } = camera;
    zoom;
    window.location.search = `?v=@${lat},${lng}z${zoom}`;
}
function looseFocusOnFeature(f) {
    const bounds = calculateBoundingBox(f);
    const camera = DviewportForBounds(bounds);
    DsetCamera(camera);
    const { center: { lat, lng }, zoom, } = camera;
    zoom;
    window.location.search = `?v=@${lat},${lng}z${zoom}`;
}
