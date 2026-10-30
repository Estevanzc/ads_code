function organize(arr, pivot_idx) {
    let left = []
    let right = []
    let pivot = arr[pivot_idx]
    for (let i = 0; i <= arr.length-1; i ++) {
        if (i != pivot_idx) {
            let num = arr[i]
            if (num < pivot) {
                left.push(num)
            } else {
                right.push(num)
            }
        }
    }
    return [left, right]
}
function array_sort(arr) {
    if (arr.length <= 1) {
        return arr
    }
    let pivot_idx = Math.floor(Math.random() * arr.length)
    let [left, right] = organize(arr, pivot_idx)
    left = array_sort(left)
    right = array_sort(right)

    return [...left, arr[pivot_idx], ...right]
}

console.log(array_sort([6,5,4,3,2,1]));

