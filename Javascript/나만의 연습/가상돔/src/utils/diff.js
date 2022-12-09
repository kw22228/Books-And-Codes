export default function diff(parent, newNode, oldNode) {
    if (!newNode && oldNode) return oldNode.remove();
    if (newNode && !oldNode) return parent.appendChild(newNode);
    if (newNode instanceof Text && oldNode instanceof Text) {
        if (newNode.nodeValue === oldNode.nodeValue) return;
        oldNode.nodeValue = newNode.nodeValue;
        return;
    }
    if (newNode.nodeName !== oldNode.nodeName) {
        const index = [...parent.childNodes].indexOf(oldNode);
        oldNode.remove();
        parent.appendChild(newNode, index);
        return;
    }

    updateAtrributes(oldNode, newNode);

    const newChildren = [...newNode.childNodes];
    const oldChildren = [...oldNode.childNodes];
    const maxLength = Math.max(newChildren.length, oldChildren.length);
    for (let i = 0; i < maxLength; i++) diff(oldNode, newChildren[i], oldChildren[i]);
}

function updateAtrributes(oldNode, newNode) {
    for (const { name, value } of [...newNode.attributes]) {
        if (value === oldNode.getAttribute(name)) continue;
        oldNode.setAttribute(name, value);
    }

    for (const { name } of [...oldNode.attributes]) {
        if (newNode.getAttribute(name) !== undefined) continue;
        oldNode.removeAttribute(name);
    }
}
