Даны две строки sи tдлины mи nсоответственно, вернуть минимальное окно подстрокаиз sтак, что каждый символ в t( включая дубликаты ) включен в окно . Если такой подстроки нет, вернуть пустую строку"" .

Тестовые примеры будут сгенерированы таким образом, чтобы ответ был уникальным .

 

Пример 1:

Ввод: s = "ADOBECODEBANC", t = "ABC"
 Вывод: "BANC"
 Пояснение: Минимальная подстрока окна "BANC" включает "A", "B" и "C" из строки t.
Пример 2:

Вход: s = "a", t = "a"
 Выход: "a"
 Пояснение: Вся строка s является минимальным окном.
Пример 3:

Ввод: s = "a", t = "aa"
 Вывод: ""
 Пояснение: Оба символа "a" из t должны быть включены в окно.
Поскольку самое большое окно s содержит только одну букву «a», вернуть пустую строку.
 

Ограничения:

m == s.length
n == t.length
1 <= m, n <= 105
sи tсостоят из заглавных и строчных английских букв.
 

Продолжение: Можете ли вы найти алгоритм, работающий во O(m + n)времени?