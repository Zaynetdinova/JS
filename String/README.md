### Строки (String) - любые текстовые данные.
### `Свойства:`
**str.length -** содержит длину строки.

### `Методы:`

### Доступ к символам:
**[pos] -** получить символ, который занимает позицию pos, можно с помощью квадратных скобок

**str.charAt(pos) -**  получить символ, который занимает позицию pos

### Правильное сравнение:

**str.localeCompare(str2) -** озвращает число, которое показывает, какая строка больше в соответствии с правилами языка:

###### Отрицательное число, если str меньше str2.
###### Положительное число, если str больше str2.
###### 0, если строки равны.

### Поиск подстроки:

**str.indexOf(substr, pos) -** ищет подстроку substr в строке str, начиная с позиции pos, и возвращает позицию, на которой располагается совпадение, либо -1 при отсутствии совпадений.

**str.lastIndexOf(substr, position) -** то же самое, но ищет справа налево.

**str.includes(substr, pos) -** возвращает true, если в строке str есть подстрока substr, либо false, если нет.

**str.startsWith и str.endsWith -** проверяют, соответственно, начинается ли и заканчивается ли строка определённой строкой.

### Получение подстроки:

**str.slice(start [, end]) -** Возвращает часть строки от start до (не включая) end.

**str.substring(start [, end]) -** Возвращает часть строки между start и end.

**str.substr(start [, length]) -** Возвращает часть строки от start длины length.

### Другие методы:

**str.trim() —** убирает пробелы в начале и конце строки.

**str.repeat(n) —** повторяет строку n раз.