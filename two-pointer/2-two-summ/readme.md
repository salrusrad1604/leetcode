Дано 1-индексный массив целых чисел numbers, который уже отсортирован в неубывающем порядке , найдите два числа, которые в сумме дают определенное targetчисло. Пусть эти два числа будут и где .numbers[index1]numbers[index2]1 <= index1 < index2 <= numbers.length

Верните индексы двух чисел и , добавленные к единице, в виде целочисленного массива длины 2.index1index2[index1, index2]

Тесты генерируются таким образом, что существует только одно решение . Вы не можете использовать один и тот же элемент дважды.

Ваше решение должно использовать только постоянное дополнительное пространство.

 

Пример 1:

Вход: числа = [ 2 , 7,11,15 ], цель = 9
 Выход: [1,2]
 Пояснение: Сумма 2 и 7 равна 9. Следовательно, индекс 1 = 1, индекс 2 = 2. Мы возвращаем [1, 2].
Пример 2:

Вход: числа = [ 2,3,4 ], цель = 6
 Выход: [1,3]
 Объяснение: сумма 2 и 4 равна 6. Следовательно, индекс 1 = 1 , индекс 2 = 3. Мы возвращаем [1, 3].
Пример 3:

Вход: числа = [ -1 , 0 ], цель = -1
 Выход: [1,2]
 Пояснение: Сумма -1 и 0 равна -1. Поэтому индекс 1 = 1, индекс 2 = 2. Мы возвращаем [1, 2].
 

Ограничения:

2 <= numbers.length <= 3 * 104
-1000 <= numbers[i] <= 1000
numbersсортируется в неубывающем порядке .
-1000 <= target <= 1000
Тесты генерируются таким образом, что существует ровно одно решение .