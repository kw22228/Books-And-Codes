/**
 *  당신의 작업은 엄격하게 하고, 타인의 작업은 너그럽게 받아들인다.
 *  매개변수는 타입범위가 넓어도 되지만, 결과를 반환할 때는 타입의 범위가 구체적이여야한다.
 *  (옵셔널 속성과 유니온 타입은 반환타입보다 매개변수 타입에 더 일반적이다.)
 */

type LngLat = { lng: number; lat: number } | { lon: number; lat: number } | [number, number];
type LngLatBounds =
    | { northeast: LngLat; southwest: LngLat }
    | [LngLat, LngLat]
    | [number, number, number, number]; //
interface CameraOptions {
    center?: LngLat;
    zoom?: number;
    bearing?: number;
    pitch?: number;
}

declare function viewportForBounds(bounds: LngLatBounds): CameraOptions;
declare function setCamera(camera: CameraOptions): void;

function focusOnFeature(f: Feature) {
    const bounds = calculateBoundingBox(f);
    const camera = viewportForBounds(bounds);

    setCamera(camera);

    const {
        center: { lat, lng },
        zoom,
    } = camera;

    zoom;
    window.location.search = `?v=@${lat},${lng}z${zoom}`;
}

///////////////////////////////////////////
interface ILngLat {
    lng: number;
    lat: number;
}
type LngLatLike = LngLat | { lon: number; lat: number } | [number, number];
interface ICamera {
    center: ILngLat;
    zoom: number;
    bearing: number;
    pitch: number;
}
/** Omit이란? 첫번째 제네릭(타입)에서 두번째 제네릭 프로퍼티들을 제외시켜준다. */
interface ICameraOptions extends Omit<Partial<ICamera>, 'center'> {
    center?: LngLatLike; //center를 Omit으로 제외후 다시 재정의
}
type TLngLatBounds =
    | { northeast: LngLatLike; southwest: LngLatLike }
    | [LngLatLike, LngLatLike]
    | [number, number, number, number];

declare function DviewportForBounds(bounds: TLngLatBounds): ICamera; //ICamera로 제한이많은 타입으로 return
declare function DsetCamera(camera: ICameraOptions): void; //ICamearaOptions로 좀더 느슨한 타입으로 매개변수를 받음.

function looseFocusOnFeature(f: Feature) {
    const bounds = calculateBoundingBox(f);
    const camera = DviewportForBounds(bounds);

    DsetCamera(camera);
    const {
        center: { lat, lng },
        zoom,
    } = camera;
    zoom;
    window.location.search = `?v=@${lat},${lng}z${zoom}`;
}
