/**
    [Options] : observe의 옵션(2번째 매개변수)

    - childList: 자식 노드에 발생하는 변경사항
    - subtree: 하위 모든 노드들의 변경사항
    - attributes: 해당 노드의 attribute 속성
    - attributeFilter: 추적을 원하는 attribute name들을 배열 형태로도 전달 가능
    - characterData: node.data에서 발생하는 변경사항 (text content)
    - attributeOldValue: true이면 변경되기 이전과 이후의 attribute value를 콜백에서 모두 전달 받을수있다.
                         false인 경우 새로운 value만 콜백에 전달된다.
    - characterDataOldValue: ture이면 변경되기 이전과 이후의 node.data를 콜백에서 모두 전달 받을수 있다.
                             false인 경우 새로운 값만 콜백에 전달된다.

    [MutationRecord] : 변경된 리스트
    - type: 변경사항의 타입
        - 'attributes': 속성이 변경됨.
        - 'characterData': 데이터 변경시 (text Node)
        - 'childList': 자식 노드가 추가되거나 삭제됨.
    - target: 변경사항이 발생한 타겟 노드
    - addedNodes / removedNodes: 추가되거나 제거된 노드
    - previousSibling / nextSibling: 추가되거나 제거된 노드의 previous / next 형제 노드
    - attributeName / attributeNamespace: 변경된 속성의 이름
    - oldValue: 변경 이전의 값. 속성이나 텍스트가 변경되었을 경우 
                (attributeOldValue / characterDataOldValue 옵션을 true로 주었을 경우만 받아올 수 있음.)
 */

const observer = new MutationObserver((mutationList, observer) => {
    console.log(mutationList);

    // observer.disconnect(); //DOM 변경 알림을 받는 MutationObserver 인스턴스 중지.
});

const el = document.getElementById('root');

observer.observe(el, {
    childList: true,
    subtree: true,
    attributeOldValue: true,
    characterDataOldValue: true,
});
