function arr_sort(arr) {
    for (let i = 1; i <= arr.length-1; i ++) {
        let key = arr[i]
        let j = i-1
        while (j >= 0 && arr[j] > key) {
            arr[j+1] = arr[j]
            j --
        }
        arr[j+1] = key
    }
    return arr
}

console.log(arr_sort([5,4,3,2,1]));
