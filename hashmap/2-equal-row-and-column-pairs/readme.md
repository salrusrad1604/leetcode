Для заданной целочисленной матрицы с индексом 0 вернуть количество пар , в которых строка и столбец равны .n x ngrid(ri, cj)ricj

Пара строк и столбцов считается равной, если они содержат одни и те же элементы в одном и том же порядке (т. е. равный массив).

Пример 1:

Вход: сетка = [[3,2,1],[1,7,6],[2,7,7]]
Выход: 1
Пояснение: Есть 1 одинаковая пара строки и столбца:

- (Строка 2, Столбец 1): [2,7,7]
  Пример 2:

Вход: сетка = [[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]
Выход: 3
Пояснение: Есть 3 равные пары строк и столбцов:

- (Строка 0, Столбец 0): [3,1,2,2]
- (Строка 2, Столбец 2): [2,4,2,2]
- (Строка 3, Столбец 2): [2,4,2,2]
