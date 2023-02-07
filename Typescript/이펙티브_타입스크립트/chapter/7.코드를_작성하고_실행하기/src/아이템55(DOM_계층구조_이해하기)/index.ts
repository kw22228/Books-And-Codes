(function () {
  function handleDrag(eDown: Event) {
    const targetEl = eDown.currentTarget;
    targetEl.classList.add('dragging');

    const dragStart = [eDown.clientX, eDown.clientY];
    const handleUp = (eUp: Event) => {
      targetEl.classList.remove('dragging');
      targetEl.removeEventListener('mouseup', handleUp);

      const dragEnd = [eUp.clientX, eUp.clientY];

      console.log(
        'dx, dy = ',
        [0, 1].map(i => dragEnd[i] - dragStart[i])
      );
    };

    targetEl.addEventListener('mouseup', handleUp);
  }

  const div = document.getElementById('surface');
  div.addEventListener('mousedown', handleDrag);

  /** 수정 */
  function addDragHandler(el: HTMLElement) {
    el.addEventListener('mousedown', eDown => {
      const dragStart = [eDown.clientX, eDown.clientY];
      const handleUp = (eUp: MouseEvent) => {
        el.classList.remove('dragging');
        el.removeEventListener('mouseup', handleUp);
        const dragEnd = [eUp.clientX, eUp.clientY];

        console.log(
          'dx, dy = ',
          [0, 1].map(i => dragEnd[i] - dragStart[i])
        );
      };
      el.addEventListener('mouseup', handleUp);
    });
  }
  const div2 = document.getElementById('surface');
  if (div2) addDragHandler(div2);
});
/*
    - 자바스크립트를 사용할 때는 신경 쓰지 않겠지만, DOM에는 타입 계층 구조가 있다.
    DOM타입은 타입스크립트에서 중요한 정보이며, 브라우저 관련 프로젝트에서 타입스크립트를 사용할 때 유용하다.

    - Node, Element, HTMLElement, EventTarget 간의 차이점, 그리고 Event와 MouseEvent의 차이점을 알아야 한다.

    - DOM 엘리먼트와 이벤트에는 충분히 구체적인 타입 정보를 사용하거나, 타입스크립트가 추론할 수 있도록 문맥 정보를 활용해야 한다.
*/
