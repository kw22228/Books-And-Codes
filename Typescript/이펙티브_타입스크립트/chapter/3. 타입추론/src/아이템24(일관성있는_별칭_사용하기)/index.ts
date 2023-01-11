(function () {
    //프로젝트내 변수 공유 체크로 인한 지역변수 사용.

    const borough = { name: 'Brooklyn', location: [40.688, -73979] };
    const loc = borough.location;
    loc[0] = 0;

    /** 별칭은 일관성 있게 작성해야한다. */
    interface Coordinate {
        x: number;
        y: number;
    }
    interface BoundingBox {
        x: [number, number];
        y: [number, number];
    }
    interface Polygon {
        exterior: Coordinate[];
        holes: Coordinate[][];
        bbox?: BoundingBox;
    }

    function isPointInPolygon(polygon: Polygon, pt: Coordinate) {
        if (polygon.bbox) {
            if (
                pt.x < polygon.bbox.x[0] ||
                pt.x > polygon.bbox.x[1] ||
                pt.y < polygon.bbox.y[0] ||
                pt.y > polygon.bbox.y[1]
            ) {
                return false;
            }
        }
    }

    function isPointInPolygonRefactor(polygon: Polygon, pt: Coordinate) {
        polygon.bbox;
        const box = polygon.bbox;
        box;
        if (polygon.bbox) {
            polygon.bbox; // if문에서 타입을 정제함
            box; //if문에서 undefined가 걸러지지않음. (타입을 정제하지 않음.)
            if (pt.x < box.x[0] || pt.x > box.x[1] || pt.y < box.y[0] || pt.y > box.y[1]) {
                return false;
            }
        }
    }

    function calculatePolygonBbox(polygon: Polygon) {}
    function isPointInPolygonRefactor2(polygon: Polygon, pt: Coordinate) {
        const { bbox } = polygon;
        if (bbox) {
            const { x, y } = bbox;
            if (pt.x < x[0] || pt.x > x[1] || pt.y < y[0] || pt.y > y[1]) {
                return false;
            }
        }
    }

    /** 객체 비구조화를 이용할때 주의사항 */
    function func(polygon: Polygon) {
        const { bbox } = polygon;
        if (!bbox) {
            calculatePolygonBbox(polygon);
        }
    }
    function fnuc2(polygon: Polygon) {
        function fn(p: Polygon) {}

        polygon.bbox;
        if (polygon.bbox) {
            polygon.bbox;
            fn(polygon); // polygon.bbox가 없어졋을 가능성도있음. (왜냐, bbox가 옵셔널이기 때문에)
            polygon.bbox;
        }
    }
})();
