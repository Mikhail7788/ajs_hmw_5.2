const obj = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
      // <- обратите внимание, описание "засекречено"
    },
  ],
};

export default function destruct(inputArray) {
  const { special } = inputArray;
  const newArray = [];
  const error = Error('Отсутствуют свойства!');
  if (special.length === 0) {
    return error;
  }
  for (const prop in special) {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = special[prop];
    newArray.push({
      id, name, icon, description,
    });
  }
  return newArray;
}

destruct(obj);