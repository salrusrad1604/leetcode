Напишите алгоритм, определяющий, является ли число nсчастливым.

Счастливое число — это число, определяемое следующим процессом:

Начиная с любого положительного целого числа, замените его суммой квадратов его цифр.
Повторяйте процесс до тех пор, пока число не станет равным 1 (где оно и останется), или пока он не зациклится бесконечно в цикле , который не включает 1.
Те числа, для которых этот процесс заканчивается на 1, являются счастливыми.
Верните, true если n это счастливое число, и false если нет .

 

Пример 1:

Вход: n = 19
 Выход: true
 Объяснение: 
1 2 + 9 2 = 82
8 2 + 2 2 = 68
6 2 + 8 2 = 100
1 2 + 0 2 + 0 2 = 1
Пример 2:

Вход: n = 2
 Выход: false
 

Ограничения:

1 <= n <= 231 - 1