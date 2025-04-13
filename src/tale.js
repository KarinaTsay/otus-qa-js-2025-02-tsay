//  Функция kolobok
{
  function kolobok(name) {
    switch (name) {
      case 'дедушка':
        console.log('Я от дедушки ушёл')
        break
      case 'заяц':
        console.log('Я от зайца ушел')
        break
      case 'лиса':
        console.log('Меня съели')
        break
      default:
        console.log('Нет таких значений')
        break
    }
  }

  let res = kolobok('лиса')
  console.log(res)
}

//  Функция newYear
// {
//     let name = 'Снегурочка'

//     function showMessage() {
//         let message  = name + `! `
//         console.log(message.repeat(3))
//     }

//     showMessage()
// }
