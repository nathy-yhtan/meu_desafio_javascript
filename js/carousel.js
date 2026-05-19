//Array storage class ARRAY VEM PRA CA PELO PUSH (trazer conteudos para implementar dentro da class pra transformar em objeto)
let carouselArr = [];

//class Carousel
class Carousel { //construtor é dentro da classe

    constructor(imagem, texto, link) { //sera q ta certo?
        this.imagem = imagem
        this.texto = texto
        this.link = link
    }






    


    static Start(arr) {
        if (arr) {

            if (arr.length > 0) {
                Carousel._sequence = 0;
                Carousel._size = arr.length;
                Carousel.Next(); //start
                Carousel._interval = setInterval(function () { Carousel.Next(); }, 5000);
            }

        } else {
            throw "Method Start need a Array Variable.";
        }
    }

    //chamar os parametros nessa função, chamar div pelo ID
    static Next() {

    }
};