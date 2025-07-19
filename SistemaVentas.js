//Creacion de la clase producto
class Producto{
    static contadorProducto = 0;
    
    constructor(nombre, precio){
        this._idProducto = ++Producto.contadorProducto
        this._nombre = nombre;
        this._precio = precio;
    }
    //Creacion de metodos
    get idProducto(){
        return this._idProducto;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get precio(){
        return this._precio
    }
    set precio(precio){
        return this._precio;
    }
    toString(){
        return `idProducto: ${this._idProducto}, nombre: ${this._nombre}, precio: $${this._precio}`;
    }
}
//Creacion de la clase Orden
class Orden{
    static contadorOrdenes = 0;
    static get MAX_PRODUCTOS(){
        return 5;
    }
    constructor (){
        //Se crea un nuevo id con ayuda de la variable de contador
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
    }
    //Creacion de metodos
    get idOrden(){
        return this.idOrden;
    }
    agregarProducto(producto){
        if(this._productos.length < Orden.MAX_PRODUCTOS){
            this._productos.push(producto);
        }
        else {
            console.log("No se pueden agregar mas productos");
        }
    }
    calcularTotal(){
        let totalVenta = 0;
        for(let producto of this._productos){
            totalVenta += producto.precio;
        }
        return totalVenta;
    }
    mostrarOrden(){
        let productosOrden = '';
        for (let producto of this._productos){
            productosOrden += '\n{'+ producto.toString()+'}';
        }
        console.log(`Orden: ${this._idOrden} Total: $${this.calcularTotal()}, Productos: ${productosOrden}`);
    }
}

let producto1 = new Producto ('Pantalon', 200);
let producto2 = new Producto ('Camisa', 100);

console.log(producto1.toString());
console.log(producto2.toString());

let orden1 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.mostrarOrden();

