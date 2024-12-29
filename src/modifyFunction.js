/*
 ! Завдання: Розробка Вищої Функції для Модифікації Поведінки Іншої Функції

 Створіть вищу функцію (higher-order function) modifyFunction, яка приймає як аргументи функцію originalFunction та число multiplier.

 Функція originalFunction приймає один числовий аргумент.

 modifyFunction повинна повертати нову функцію, яка при виклику з будь-яким числовим аргументом викликає originalFunction з цим аргументом і множить результат на multiplier.

 Наприклад, якщо originalFunction повертає вхідний аргумент, помножений на 2, і multiplier дорівнює 3, то повернута функція повинна повертати вхідний аргумент, помножений на 6.
*/

function originalFunction(num) {
  return num * num // Повертає квадрат аргументу
}

function modifyFunction(originalFunc, multiplier) {
  return function(arg) {
    return originalFunc(arg) * multiplier
  }
}


export { originalFunction, modifyFunction }
