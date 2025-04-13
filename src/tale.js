//  Функция kolobok
{
  function kolobok(name) {
    switch (name) {
      case 'дедушка':
        return('Я от дедушки ушёл')
      case 'заяц':
        return('Я от зайца ушел')
      case 'лиса':
        return('Меня съели')
      default:
        return('Нет таких значений')
    }
  }

  let res = kolobok('дедушка')
  console.log(res)
}

//  Функция newYear
{
    let name = 'Снегурочка'

    function showMessage() {
        let message  = name + `! `
        console.log(message.repeat(3))
    }

    showMessage()
}