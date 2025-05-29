Trie (произносится как "try") или префиксное дерево — это древовидная структура данных , используемая для эффективного хранения и извлечения ключей в наборе данных строк. Существуют различные приложения этой структуры данных, такие как автозаполнение и проверка орфографии.

Реализуем класс Trie:

Trie()Инициализирует объект trie.
void insert(String word)Вставляет строку wordв дерево.
boolean search(String word)Возвращает , находится trueли строка wordв префиксе (т.е. была ли она вставлена ​​ранее), в falseпротивном случае.
boolean startsWith(String prefix)Возвращает, trueесли ранее была вставлена ​​строка wordс префиксом prefix, в falseпротивном случае.

Пример 1:

Входные данные
["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
[[], ["apple"], ["app"], ["app"], ["app"], ["app"]] Выходные данные
[null, null, true, false, true, null, true] Пояснение
Trie trie = new Trie();
trie.insert("apple");
trie.search("apple"); // возвращает True
trie.search("app"); // возвращает False
trie.startsWith("app"); // возвращает True
trie.insert("app");
trie.search("app"); // возвращает True
