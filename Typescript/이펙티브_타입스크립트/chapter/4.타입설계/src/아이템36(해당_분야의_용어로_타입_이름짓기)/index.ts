(function () {
    interface Animal {
        name: string; // name은 너무 일반적인 이름이다
        endangered: boolean; // 이미 멸종된 동물을 true로 해야되는지 false로 해야되는지 알 수 없다.
        habitat: string; // 의미가 모호하다.
    }

    const leopard: Animal = {
        name: 'Snow Leopard', // name 속성의 값이 동물의 명칭인지 진짜 이름인지 명확하지 않음.
        endangered: false,
        habitat: 'tundra',
    };

    /** Refactor */
    type ConservationStatus = 'EX' | 'EW' | 'CR' | 'EN';
    type KoppenClimate = 'Af' | 'Am' | 'As' | 'Aw';
    interface AnimalRefactor {
        commonName: string;
        genus: string;
        species: string;
        status: ConservationStatus;
        climates: KoppenClimate[];
    }

    // name -> common, genus, species로 더 구체적이게 바뀜
    // endangered -> ConservationStatus로 구체적
    // habitat -> 더 구체적인 기후분류로 바뀜
    const snowLeopard: AnimalRefactor = {
        commonName: 'Snow Leopard',
        genus: 'Panthera',
        species: 'Uncia',
        status: 'EN',
        climates: ['Af', 'Am'],
    };
})();

/*
    - 가독성을 높이고, 추상화 수준을 올리기 위해 해당분야의 용어를 사용해야한다.
    - 같은 의미에 다른 이름을 붙이면 안된다. 특별한 의미가 있을 때만 용어를 구분해야한다.
*/
