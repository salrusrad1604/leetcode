Есть nкомнаты, помеченные от 0до, n - 1 и все комнаты заперты, кроме комнаты 0. Ваша цель — посетить все комнаты. Однако вы не можете войти в запертую комнату, не имея ключа.

Когда вы посещаете комнату, вы можете найти в ней набор различных ключей . На каждом ключе есть номер, обозначающий, какую комнату он открывает, и вы можете взять их все с собой, чтобы открыть другие комнаты.

Дан массив, roomsгде rooms[i]— набор ключей, которые можно получить, посетив комнату i, вернуть, true если можно посетить все комнаты, или false в противном случае .

Пример 1:

Вход: комнаты = [[1],[2],[3],[]]
Выход: true
Объяснение:  
Мы посещаем комнату 0 и забираем ключ 1.
Затем мы посещаем комнату 1 и забираем ключ 2.
Затем мы посещаем комнату 2 и забираем ключ 3.
Затем мы посещаем комнату 3.
Поскольку мы смогли посетить каждую комнату, мы возвращаем true.
Пример 2:

Ввод: комнаты = [[1,3],[3,0,1],[2],[0]]
Вывод: false
Пояснение: Мы не можем войти в комнату номер 2, так как единственный ключ, который ее отпирает, находится в этой комнате.
