/*
! Завдання: Розробка Функції Трирівневої Вкладеності в JavaScript з Конкретною Операцією

Створіть функцію outerFunction, яка приймає один аргумент.

outerFunction повинна повертати функцію innerFunction, яка також приймає один аргумент.

innerFunction повинна повертати функцію deepInnerFunction, яка також приймає один аргумент.

deepInnerFunction повинна виконувати операцію множення з усіма переданими аргументами (один з кожної функції) і повертати результат цієї операції.

Результатом виклику outerFunction(arg1)(arg2)(arg3) має бути добуток arg1 * arg2 * arg3.
*/

function outerFunction(arg1) {
  function innerFunction(arg2) {
    function deepInnerFunction(arg3) {
      return arg1 * arg2 * arg3
    }

    return deepInnerFunction
  }

  return innerFunction
}

export { outerFunction }
