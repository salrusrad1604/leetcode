Учитывая массив целых чисел, citationsгде citations[i]— количество цитирований, полученных исследователем для своей статьи, вернуть индекс Хирша исследователя .ith

Согласно определению индекса Хирша в Википедии : индекс Хирша определяется как максимальное значение, hпри котором данный исследователь опубликовал не менее hстатей, каждая из которых была процитирована не менее одного hраза.

 

Пример 1:

Вход: цитирования = [3,0,6,1,5]
 Выход: 3
 Пояснение: [3,0,6,1,5] означает, что у исследователя всего 5 статей, и каждая из них получила 3, 0, 6, 1, 5 цитирований соответственно.
Поскольку у исследователя есть 3 статьи, каждая из которых цитируется не менее 3 раз, а остальные две — не более 3 раз, их индекс Хирша равен 3.
Пример 2:

Вход: цитаты = [1,3,1]
 Выход: 1
 

Ограничения:

n == citations.length
1 <= n <= 5000
0 <= citations[i] <= 1000