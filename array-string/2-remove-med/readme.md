Дан целочисленный массив, numsотсортированный в неубывающем порядке , удалить некоторые дубликаты на месте так, чтобы каждый уникальный элемент встречался не более двух раз . Относительный порядок элементов должен оставаться прежним .

Поскольку в некоторых языках невозможно изменить длину массива, вместо этого вы должны поместить результат в первую часть массива nums. Более формально, если есть kэлементы после удаления дубликатов, то первые kэлементы nums должны содержать конечный результат. Неважно, что вы оставляете после первых  k элементов.

Возврат kпосле размещения окончательного результата в первых kслотахnums .

Не выделяйте дополнительное пространство для другого массива. Вы должны сделать это, изменив входной массив на месте с O(1) дополнительной памяти.

Судья по индивидуальному заказу:

Судья проверит ваше решение с помощью следующего кода:

int[] nums = [...]; // Входной массив
int[] expectedNums = [...]; // Ожидаемый ответ с правильной длиной

int k = removeDuplicates(nums); // Вызывает вашу реализацию

утверждать k == expectedNums.length;
для (int i = 0; i < k; i++) {
    утверждать nums[i] == expectedNums[i];
}
Если все утверждения пройдены, то ваше решение будет принято .

 

Пример 1:

Вход: nums = [1,1,1,2,2,3]
 Выход: 5, nums = [1,1,2,2,3,_]
 Пояснение: Ваша функция должна вернуть k = 5, при этом первые пять элементов nums будут 1, 1, 2, 2 и 3 соответственно.
Не имеет значения, что вы оставите после возвращаемого k (поэтому они и есть подчеркивания).
Пример 2:

Вход: nums = [0,0,1,1,1,1,2,3,3]
 Выход: 7, nums = [0,0,1,1,2,3,3,_,_]
 Пояснение: Ваша функция должна вернуть k = 7, при этом первые семь элементов nums будут равны 0, 0, 1, 1, 2, 3 и 3 соответственно.
Не имеет значения, что вы оставите после возвращаемого k (поэтому они и есть подчеркивания).
 

Ограничения:

1 <= nums.length <= 3 * 104
-104 <= nums[i] <= 104
numsсортируется в неубывающем порядке.