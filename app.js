// Есть большой массив разных типов данных, например, [null, 123,
// undefined, null, «qwerty», 34, 65, undefined, null, null, 43,
// «aerg», «пкцйк»].
// Пройдитесь по массиву циклом и каждый тип данных добавьте в новый массив,
// то есть нужно отсортировать похожие типы данных в другие массивы,
// а затем отсортировать эти массивы от большего к меньшему, то есть на первом
// месте должен быть массив с наибольшим количеством элементов.
// В конечном счете из одного большого массива у вас должно получится
// несколько маленьких массивов, которые содержат одинаковые типы данных.

var arr = [null, 123, undefined, null, "qwerty", 34, 65, undefined, null, null, 43, "aerg", "пкцйк"];
var result = {};

for (var i = 0; i < arr.length; i++) {
    var type = typeof arr[i];
    if (!result[type]) {
        result[type] = [];
    }
    result[type].push(arr[i]);
}

var sortedResult = Object.values(result).sort((a, b) => b.length - a.length);

console.log(sortedResult);

