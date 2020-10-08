//Сделать реверс элементов массива например из ["1", "3", "vasya"] -> ["vasya", "3", "1"] при этом не использовать встроенный метод reverse()

var arr = ['1', '3', 'Vasya'];
 var arry = [];

        for (var i = arr.length-1; i >= 0; i--) {
            arry[arr.length-i-1] = arr[i]
        }

        console.log(arry)