function smallest_in_array(arr, ref) {
    let smallest = arr[ref]
    let idx = ref
    for (let i = ref; i <= arr.length-1; i ++) {
        let num = arr[i]
        if (num < smallest) {
            smallest = num
            idx = i
        }
    }
    return [smallest, idx]
}
function arr_sort(arr) {
    for (let i in arr) {
        let [smallest, idx] = smallest_in_array(arr, i)
        if (idx != i) {
            arr[idx] = arr[i]
            arr[i] = smallest
        }
    }
    return arr
}

console.log(arr_sort([5,4,3,2,1]));
