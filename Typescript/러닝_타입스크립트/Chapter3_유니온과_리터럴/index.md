### 유니온과 리터럴

- 유니온: 값에 허용된 타입을 두 개 이상의 가능한 타입으로 확장하는 것 (string | number)
- 내로잉: 값에 허용된 타입이 하나 이상의 가능한 타입이 되지 않도록 좁히는 것 (string)

- 리터럴: unit타입을 말하는거 같음. \* 유니온타입은 가능한 모든 리터럴값의 집합이다. (type T = 'Hypatia')

#### 엄격한 null 검사

- tsconfig.json의 컴파일러 옵션으로 strictNullCheck 옵션을 활성화하면 엄격한 null 체크가 된다.
