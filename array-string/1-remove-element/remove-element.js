var removeElement = function(nums, val) {
    let i = 0;

    while(i< nums.length) {
        if(nums[i] === val){
            nums.splice(i, 1);
        }else{
            i++;
        }
    }
};


// let arr = [[3,2,2,3], 3];
let arr = [[0,1,2,2,3,0,4,2], 2];

removeElement(...arr);
console.log(arr[0])