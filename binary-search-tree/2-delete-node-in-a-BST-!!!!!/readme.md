При наличии ссылки на корневой узел BST и ключа удалить узел с данным ключом в BST. Вернуть ссылку на корневой узел (возможно, обновленную) BST .

По сути, удаление можно разделить на два этапа:

Найдите узел, который нужно удалить.
Если узел найден, удалите его.

Пример 1:

Вход: корень = [5,3,6,2,4,null,7], ключ = 3
Выход: [5,4,6,2,null,null,7]
Объяснение: данный ключ для удаления — 3. Поэтому мы находим узел со значением 3 и удаляем его.
Один из допустимых ответов — [5,4,6,2,null,null,7], показанный в приведенном выше BST.
Обратите внимание, что еще один допустимый ответ — [5,2,6,null,4,null,7], и он также принимается.

Пример 2:

Вход: корень = [5,3,6,2,4,null,7], ключ = 0
Выход: [5,3,6,2,4,null,7]
Объяснение: Дерево не содержит узла со значением = 0.
Пример 3:

Ввод: корень = [], ключ = 0
Вывод: []
