const testCases = [
    { new_id: '...!@BaT#*..y.abcdefghij-klm_.' },
    // { new_id: 'z-+.^.' },
    // { new_id: '=.=' },
    // { new_id: '123_.def' },
    // { new_id: 'abcdefghijklmn.p' },
];

function solution(new_id) {
    let temp = new_id
        .toLowerCase()
        .replace(/[^\w\d-_.]/g, '')
        .replace('...', '.')
        .replace('..', '.');
    if (temp[0] === '.') temp = temp.substr(1);
    if (temp.slice(-1) === '.') temp = temp.slice(0, -1);
    if (temp.length === 0) temp = 'a';
    if (temp.length > 15) temp = temp.substr(0, 15);
    // if (temp.slice(-1) === '.') temp = temp.slice(0, -1);
    // if (temp.length < 3) {
    //     do {
    //         temp += temp.slice(-1);
    //     } while (temp.length === 2);
    // }
    return temp;
}
for (const { new_id } of testCases) console.log(solution(new_id));
