function arr_sort(arr) {
    for (let i = 1; i <= arr.length-1; i ++) {
        for (let j = i; j > 0; j --) {
            let prev = arr[j-1]
            if (prev > arr[j]) {
                arr[j-1] = arr[j]
                arr[j] = prev
            }
        }
    }
    return arr
}

console.log(arr_sort([5,4,3,2,1]));
