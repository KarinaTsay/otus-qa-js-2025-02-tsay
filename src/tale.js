//  функция kolobok
{
function  kolobok(name) {
    return alert
}

let a = 'лиса';

switch (a) {
    case 'дедушка':
        console.log( 'Я от дедушки ушёл' );
      break;
    case 'заяц':
        console.log( 'Я от зайца ушел' );
      break;
    case 'лиса':
        console.log( 'Меня съели' );
      break;
    default:
        console.log( "Нет таких значений" );
}
}

//  функциюя newYear
{
    let name = 'Снегурочка'

    function showMessage() {
        let message  = name + `! `
        console.log(message.repeat(3))
    }

    showMessage()
}