let element = document.querySelector("input[type='text']");
const check_it = eval;

if (element) {
    let arr = [
        element.value
    ];
    let funcs = [
        check_it,
        console.log,

        // WTF?!
        (x) => check_it(x),
    ];
    funcs[0](arr[0]);
    funcs[1](arr[0]);
    funcs[2](arr[0]);
}
// comment
