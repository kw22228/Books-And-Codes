"use strict";
//onClick을 제외한 props가 변하면 업데이트를 진행함.
function shouldUpdate(oldProps, newProps) {
    let k;
    for (k in oldProps) {
        if (oldProps[k] !== newProps[k]) {
            if (k !== 'onClick')
                return true;
        }
    }
    return false;
}
function shouldUpdate2(oldProps, newProps) {
    return (oldProps.xs !== newProps.xs ||
        oldProps.ys !== newProps.ys ||
        oldProps.xRange !== newProps.xRange ||
        oldProps.yRange !== newProps.yRange ||
        oldProps.color !== newProps.color
    // no check for onClick
    );
}
//////////////////////////////////////
const REQUEST_UPDATE = {
    xs: true,
    ys: true,
    xRange: true,
    yRange: true,
    color: true,
    onClick: false,
};
function shouldUpdate3(oldProps, newProps) {
    let k;
    for (k in oldProps) {
        if (oldProps[k] !== newProps[k] && REQUEST_UPDATE[k])
            return true;
    }
    return false;
}
