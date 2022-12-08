function createElement(node) {
    // node가 string일때 (객체가 아니라 문자열 ex. todo list item2 )
    if (typeof node === 'string') return document.createTextNode(node);

    // 객체(html tag)
    const $el = document.createElement(node.type);

    // props를 배열 [attr, value]로 만듬 -> value가 있는 배열만 뽑아냄 -> 만들어둔 element에 attr과 value 삽입
    Object.entries(node.props || {})
        .filter(([, value]) => value)
        .forEach(([attr, value]) => $el.setAttribute(attr, value));

    try {
        // node의 children들도 Virtual dom -> Dom 형태로 변화 시켜줌 ==> 만들어둔 element에 children들을 append 시켜준다.
        node.children.map(child => createElement(child)).forEach(child => $el.appendChild(child));
    } catch (e) {
        console.log(node);
        console.log(e);
    }

    //변환한 dom을 반환한다.
    return $el;
}

export function diff(parent, newNode, oldNode) {
    /** oldNode만 있는 경우 */
    if (!newNode && oldNode) return oldNode.remove();

    /** newNode만 있는 경우 */
    if (newNode && !oldNode) return parent.appendChild(newNode);

    /** oldNode와 newNode 모두 text 타입일 경우 */
    if (newNode instanceof Text && oldNode instanceof Text) {
        if (newNode.nodeValue === oldNode.nodeValue) return;
        oldNode.nodeValue = newNode.nodeValue;
        return;
    }

    /** oldNode와 newNode의 태그 이름이 다를 경우 */
    if (newNode.nodeName !== oldNode.nodeName) {
        const index = [...parent.childNodes].indexOf(oldNode);
        oldNode.remove();
        parent.appendChild(newNode, index);
        return;
    }

    /** oldNode와 newNode의 태그 이름(type)이 같을 경우 */
    updateAtrributes(oldNode, newNode);

    /** newNode와 oldNode의 모든 자식 태그를 순회하며 1 ~ 5의 내용을 반복 */
    const newChildren = [...newNode.childNodes];
    const oldChildren = [...oldNode.childNodes];
    const maxLength = Math.max(newChildren.length, oldChildren.length);
    for (let i = 0; i < maxLength; i++) diff(oldNode, newChildren[i], oldChildren[i]);
}

/** newNode와 oldNode의 attribute를 비교하여 변경된 부분만 반영한다. */
function updateAtrributes(oldNode, newNode) {
    const oldProps = [...oldNode.attributes];
    const newProps = [...newNode.attributes];

    /** 추가된 Props를 반영 */
    for (const { name, value } of newProps) {
        if (value === oldNode.getAttribute(name)) continue;
        oldNode.setAttribute(name, value);
    }

    /** 없어진  Props를 제거 */
    for (const { name } of oldProps) {
        if (newNode.getAttribute(name) !== undefined) continue;
        oldNode.removeAttribute(name);
    }
}
