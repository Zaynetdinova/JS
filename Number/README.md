### Числа (Number) - «числа с плавающей точкой двойной точности».
### `Свойства:`


### `Методы:`

**num.toString(base) -** возвращает строковое представление числа num в системе счисления base.

### Округление:

**Math.floor -** Округление в меньшую сторону

**Math.ceil -** Округление в большую сторону

**Math.round -** Округление до ближайшего целого

**Math.trunc -** удаление дробной части без округления

**num.toFixed(n) -** округляет число до n знаков после запятой и возвращает строковое представление результата.

### Проверка: isFinite и isNaN:

**isNaN(value) -** преобразует значение в число и проверяет является ли оно NaN

**isFinite(value) -** преобразует аргумент в число и возвращает true, если оно является обычным числом, т.е. не NaN/Infinity/-Infinity

### parseInt и parseFloat:

**parseInt() -** «читает» число из строки, возвращает целое число

**parseFloat() -** «читает» число из строки, возвращает число с плавающей точкой

### Другие математические функции:

**Math.random() -** Возвращает псевдослучайное число в диапазоне от 0 (включительно) до 1 (но не включая 1)

**Math.max(a, b, c...) / Math.min(a, b, c...) -** Возвращает наибольшее/наименьшее число из перечисленных аргументов.

**Math.pow(n, power) -** Возвращает число n, возведённое в степень power