function arr_sort(arr) {
    let arrLen = arr.length
    for (let i = 0; i <= arrLen-2; i ++) {
        let hasChanged = false
        let current = arr[0]
        for (let j = 1; j <= arrLen-1; j ++) {
            if (current > arr[j]) {
                hasChanged = true
                arr[j-1] = arr[j]
                arr[j] = current
            } else {
                current = arr[j]
            }
        }
        if (!hasChanged) {
            break
        }
    }
    return arr
}

console.log(arr_sort([5, 4, 3, 2, 1]));

