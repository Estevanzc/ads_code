let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let results = {
    "filtered_nums": nums.filter(num => num % 2 == 0),
    "find_one": nums.find(num => num >= 5),
    "find_last": nums.findLast(num => num >= 5),
    "find_one_idx": nums.findIndex(num => num >= 5),
    "find_last_idx": nums.findLastIndex(num => num >= 5),
    "mapped_arr": nums.map(num => num * 2),
    "containEven": nums.some(num => num % 2 == 0),
    "allEven": nums.every(num => num % 2 == 0),
    "numsTotal": nums.reduce((num, acc) => acc += num),
}

nums.forEach(element => {
    console.log(`O número atual é ${element}`);
});

Object.keys(results).forEach(element => {
    console.log(`${element} => ${results[element]}`);
});
