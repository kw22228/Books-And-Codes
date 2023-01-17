(function () {
    function calculateBoundingBox(f) {
        let box = null;
        const helper = (coords) => { };
        const geometryHelper = (g) => {
            if (geometry.type === 'GeometryCollection') {
                geometry.geometries.forEach(geometryHelper);
            }
            else {
                helper(geometry.coordinates);
            }
        };
        const { geometry } = f;
        if (geometry) {
            // if (geometry.type === 'GeometryCollection') {
            //     throw new Error('GeometryCollection are not supported');
            // }
            // helper(geometry.coordinates); // GeometryCollection에는 coordinates속성이없다.
            geometryHelper(geometry); //타입을 차단하기보다 분기처리를해서 각각의 행동이 되도록하기.
        }
        return box;
    }
    /** GraphQL */
    // query(
    //     repository(owner: 'Microsoft', name: 'Typescript'){
    //         createdAt
    //         description
    //     }
    // ); // 책확인(192page)
})();
export {};
/*
    - 코드의 구석구석까지 타입 안정성을 얻기 위해 API또는 데이터 형식에 대한 타입 생성을 고려해야한다.
    - 데이터에 드러나지 않는 예외적인 경우들이 문제가 될 수 있다.
      때문에, 데이터보다는 명세로 코드를 생성하는게 좋다.
*/
