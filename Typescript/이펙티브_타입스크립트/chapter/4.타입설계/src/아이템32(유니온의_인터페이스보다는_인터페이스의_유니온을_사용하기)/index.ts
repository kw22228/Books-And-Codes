(function () {
    interface Layer {
        layout: FillLayout | LineLayout | PointLayout;
        paint: FillPaint | LinePaint | PointPaint;
    }
    //유니온으로 모든 가정을 다 허용하면서 오류가 발생할 수 있다.
    //ex) layout: LineLayout 이면서 paint: FillPaint => 직선을 그리면서 채우기는 불가능.

    /** Refactor */
    interface FillLayer {
        layout: FillLayout;
        paint: FillPaint;
    }
    interface LineLayer {
        layout: LineLayout;
        paint: LinePaint;
    }
    interface PointLayer {
        layout: PointLayout;
        paint: PointPaint;
    }
    type LayerR = FillLayer | LineLayer | PointLayer;
    // Layer끼리 묶어놔서 잘못된 조합으로 오는 경우를 방지함.

    /** 태그된 유니온 */
    interface ILayer {
        type: 'fill' | 'line' | 'point';
        layout: FillLayout | LineLayout | PointLayout;
        paint: FillPaint | LinePaint | PointPaint;
    } // fill과 함께 LineLayout PointPaint 가 들어오면 매우 이상하다.

    /** Refactor */
    interface IFillLayer {
        type: 'fill';
        layout: FillLayout;
        paint: FillPaint;
    }
    interface ILineLayer {
        type: 'line';
        layout: LineLayout;
        paint: LinePaint;
    }
    interface IPointLayer {
        type: 'point';
        layout: PointLayout;
        paint: PointPaint;
    }
    type TLayer = IFillLayer | ILineLayer | IPointLayer;

    function drawLayer(layer: TLayer) {
        if (layer.type === 'fill') {
            const { paint } = layer;
            const { layout } = layer;
        } else if (layer.type === 'line') {
            const { paint } = layer;
            const { layout } = layer;
        } else {
            const { paint } = layer;
            const { layout } = layer;
        }
    }

    //////////////////////////////////////////////////////////////////

    interface Person {
        name: string;
        //다음은 둘 다 동시에 있거나 동시에 없다.
        placeOfBirth?: string;
        dateOfBirth?: Date;
    } //주석은 오해의 소지가 될 수 있다.

    interface IPerson {
        name: string;
        birth?: {
            place: string;
            date: Date;
        };
    } //하나로 묶음으로서 place와 date가 묶음으로 들어온다.

    const alanT: IPerson = {
        name: 'Alan Turing',
        birth: {
            place: 'London',
        }, //place만 들어와서 오류남
    };
    function eulogize(p: IPerson) {
        console.log(p.name);
        const { birth } = p;

        // birth를 하나만 체크해도 된다.
        if (birth) {
            console.log(`was born on ${birth.date} in ${birth.place}.`);
        }
    }

    /** 타입의 구조를 손댈 수 없는 상황 */
    interface Name {
        name: string;
    }
    interface PersonWithBirth extends Name {
        placeOfBirth: string;
        dateOfBirth: Date;
    }
    type TPerson = Name | PersonWithBirth; //name만들어오거나 birth에 관련된 타입도 들어오거나.

    function eulogizeWithExtends(p: TPerson) {
        if ('placeOfBirth' in p) {
            p;
            const { dateOfBirth } = p;
        }
    }
})();
/*
    - 유니온 타입의 속성을 여러개 가지는 인터페이스에서는 속성간의 관계가 분명하지 않기 때문에 실수할 수 있다.
        (위 Layer예제처럼 관계(조합)가 맞지않는 현상)
    - 유니온의 인터페이스보다 인터페이스의 유니온이 더 정확하고 이해하기 쉽다.
    - 타입스크립트가 제어 흐름을 분석 할 수 있도록 타입에 태그를 넣는것을 고려해야한다. (fill: 'paint')
*/
