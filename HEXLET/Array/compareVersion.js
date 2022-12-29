function compareVersion(one, two) {
    return +one === +two ? 0 : (+one > +two ? 1 : -1)
}

console.log(compareVersion("0.1", "0.2")); // -1

console.log(compareVersion("0.2", "0.1")); // 1

console.log(compareVersion("4.2", "4.2")); // 0
// https://ru.hexlet.io/challenges/js_arrays_compare_versions_exercise