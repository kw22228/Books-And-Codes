### 반복자 패턴과 컴포지트 패턴

#### 반복자 패턴

- 반복작업을 캡슐화 하는 패턴을 만들어보자.

```javascript
interface Iterator{
    hasNext();
    next();
}
```
