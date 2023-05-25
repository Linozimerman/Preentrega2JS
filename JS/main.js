
//BibliotecApp, app para tener un control de lo que tenes en tu biblioteca.

//array principal, biblioteca
const biblioteca = [
    { id: 1, cat: "movie", name: "Star Wars: Episode III - Revenge of the Sith", precio: 1200, img: "episodio3.jpg", genero:"Science fiction", existencia:"tengo", year: 2005},
    { id: 2, cat: "movie", name: "The Matrix", precio: 1800, img: "matrix.jpg", genero:"Science fiction", existencia:"tengo", year: 1999},
    { id: 3, cat: "movie", name: "The Imitation Game", precio: 2800, img: "imitation.jpg", genero:"Drama", existencia:"tengo", year: 2014},
    { id: 4, cat: "movie", name: "Snowden", precio: 1500, img: "snow.webp", genero:"Thriller", existencia:"tengo", year: 2016},
    { id: 5, cat: "movie", name: "Inception", precio: 1100, img: "inception.webp", genero:"Science fiction", existencia:"tengo", year: 2010},
    { id: 6, cat: "movie", name: "The Great Gatsby", precio: 1900, img: "gatsby.jpeg", genero:"Drama", existencia:"tengo", year: 2013},
    { id: 7, cat: "movie", name: "Fury", precio: 5800, img: "furia.png", genero:"War", existencia:"quiero", year: 2014},
    { id: 8, cat: "movie", name: "Kill Bill: Volume 1", precio: 12800, img: "vol1.png", genero:"Martial arts", existencia:"quiero", year: 2003},
    { id: 9, cat: "movie", name: "Kill Bill: Volume 2", precio: 7800, img: "volumen2.jpeg",genero:"Martial arts", existencia:"quiero", year: 2004},
    { id: 10, cat: "book", name: "1986", autor: "George Orwell", precio: 12800, img: "milnovecientosochentayseis.png", genero:"Science fiction", existencia:"quiero", year: 1949},
    { id: 11, cat: "book", name: "To Kill a Mockingbird", autor: "Harper Lee", precio: 7800, img: "mataraunruisenor.img" ,genero:"Fiction", existencia:"quiero", year: 1960},
  ];
  
  // funcion armadora
  function elementobiblioteca (cat, name, autor, precio, img, genero, existencia, year) {
   
    this.id = biblioteca.length + 1;
    this.name = name;
    //this.autor= autor;
    this.precio = parseFloat(precio);
    this.genero = genero;
    this.existencia = existencia;
    this.year= parseInt(year);
        if (!img) {
      this.img = "https://via.placeholder.com/300";
    } else {
      this.img = img;
    }
        if (cat === "book"){
        this.autor = autor;
    }

  }
  
    /* Function para entrada en biblioteca */
    function crearEntrada() {
        let cat = prompt("pelicula o libro?");
        let name = prompt("Ingresa el nombre del libro o pelicula: ");
        let autor;
            if (cat === 'libro') {
            autor = prompt('Ingrese el autor:');
            }
        let precio = parseFloat(prompt("Ingresa el precio: "));
        let img = prompt("Ingresa la url de la imagen: ");
        let genero = prompt("Ingresa el genero:");
        let existencia = prompt("Si quiero o si tengo:  ");
            if (existencia !== 'quiero' && existencia !== 'tengo') {
            existencia = NaN;
        }
        let year = parseInt(prompt("Año: "));
    
        const nuevaEntrada = new elementobiblioteca (cat, name, autor, precio, img, genero, existencia, year);
        biblioteca.push(nuevaEntrada)
        return nuevaEntrada;
    }


let QueQueres;

while (QueQueres !== "5") {
QueQueres = prompt('Ingresa el numero de lo que queres hacer: \n1. Crear entrada a la Biblioteca \n2. Ver Biblioteca \n3. Filtrar por \n4. Buscar el mas barato de x precio entre tu wishlist \n5. Buscar por nombre \n6. Terminar operacion')


switch (QueQueres) {
    case "1": //Crear entrada biblioteca 
        const entradaCreada = crearEntrada();
        let mensajeEntradaCreada = 'Creaste el item ID: ' + entradaCreada.id + '\nNombre: ' + entradaCreada.name + '\nPrecio: ' + entradaCreada.precio + '\nGenero: ' + entradaCreada.genero + '\nLo tengo o lo quiero: ' + entradaCreada.existencia + '\nAño: ' + entradaCreada.year + '\nImg: ' + entradaCreada.img ;
        console.log(mensajeEntradaCreada);
        break;

    case "2": //ver Bibilioteca 

        console.log(biblioteca)
        break;

    case "3": //filtrar 
//no me andaba bien usando criterio autor, y google ese metodo .hasOwnProperty que no lo vimos pero me funciono

        let param = prompt("Ingresa criterio: cat, name, autor, precio, img, genero, existencia, year");
        let ingreso = prompt("Ingresa filtro");
        
        
        function filtrar(arr, filtro, param) {
            return arr.filter((el) => {
            if (param === "id") {
                return el.id == filtro;
            } else if (param === "precio") {
                return el.precio <= filtro;
            } else if (param === "existencia") {
                return el.existencia == filtro;
            } else if (param === "existencia") {
                return el.existencia == filtro;
            } else if (param === "autor") {
                return el.hasOwnProperty("autor") && el.autor.includes(filtro);
            } else {
                return el[param].includes(filtro);
            }
            });
        }
        
        console.log(filtrar(biblioteca, ingreso, param));
        break;
        

    case "4": //wishlist find
    /*Aca quiero que encuentre el objeto mas barato que este en Quiero*/
    function buscarPrecio(filtro){
    const elementoQuiero = biblioteca.find((el)=>el.existencia === 'quiero' && el.precio <= filtro);
    return elementoQuiero;
    }
    
    let ingresoFiltroPrecio= parseFloat(prompt('Ingresa precio: '));
    const encontradoPrecio = buscarPrecio(ingresoFiltroPrecio);
    console.log(encontradoPrecio);


        break;

    case "5": //nombre find
    
    function buscarPorNombre(filtro){
    const elementoEncontradoNombre = biblioteca.find((el)=>el.name.includes(filtro))

    return elementoEncontradoNombre;
    }

    let ingresoFiltroNombre= prompt('Ingresa nombre: ');
    const elementoEncontradoNombre = buscarPorNombre(ingresoFiltroNombre);
    console.log(elementoEncontradoNombre);

        break;


    case "6": 
        alert('Gracias por usar tu Bibliotecapp')
        break;

    default:
        alert('Lo ingresado no es valido')

}
}






