Дан массив целых чисел numsи целое число k, вернуть значение, если в массиве true есть два различных индекса i и , такие что и .jnums[i] == nums[j]abs(i - j) <= k

 

Пример 1:

Ввод: nums = [1,2,3,1], k = 3
 Вывод: true
Пример 2:

Ввод: nums = [1,0,1,1], k = 1
 Вывод: true
Пример 3:

Ввод: nums = [1,2,3,1,2,3], k = 2
 Вывод: false
 

Ограничения:

1 <= nums.length <= 105
-109 <= nums[i] <= 109
0 <= k <= 105