var fields = document.querySelectorAll("#form-user-create [name]")

var user = {}

fields.forEach(function (field, index) {


    if (field.name == "gender") {

        if (field.checked === true) {
            user[field.name] = field.value
        }

    } else {
        user[field.name] = field.value
    }

})
console.log(user)
// Operador logico && "E ao mesmo tempo" para duas condiçoes serem verdadeiras
// 1 = e atribuir um valor , 2 == e comparação de dois valores e 3 === e compara valor e tipo de dado
// Json = javascript Object Notation
// Json utiliza {chave: valor, baseado em chave valor}