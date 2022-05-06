
var faker = require('faker');
var cpf = require('gerador-validador-cpf');

export default {

    deliver: function() {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: "11999999999",
            address: {
                postalcode: "04534011",
                rua: "Rua Joaquim Floriano",
                number: "1000",
                complemento: "próximo a quadra de futsal",
                bairro: "Itaim Bibi",
                cidade_uf: "São Paulo/SP"
            },
            metodo_entrega: "Moto",
            cnh: "cnh-digital.jpg"
        }
        return data
    }

}