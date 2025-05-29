Разработайте структуру данных, которая поддерживает добавление новых слов и поиск совпадений строки с любой ранее добавленной строкой.

Реализуйте WordDictionary класс:

WordDictionary() Инициализирует объект.
void addWord(word)Добавляет wordв структуру данных, может быть сопоставлен позже.
bool search(word) Возвращает true, есть ли в структуре данных какая-либо строка, которая соответствует word или falseнет. wordможет содержать точки '.', где точки могут сопоставляться с любой буквой.

Пример:

Вход
["WordDictionary","addWord","addWord","addWord","поиск","поиск","поиск","поиск"]
[[],["плохой"],["папа"],["сумасшедший"],["пад"],["плохой"],[".ad"],["б.."]]
Выход
[null,null,null,null,false,true,true,true]

Объяснение
Словарь слов wordDictionary = новый Словарь слов();
wordDictionary.addWord("плохо");
wordDictionary.addWord("папа");
wordDictionary.addWord("безумный");
wordDictionary.search("pad"); // возвращает False
wordDictionary.search("плохо"); // возвращает True
wordDictionary.search(".ad"); // возвращает True
wordDictionary.search("б.."); // возвращает True
