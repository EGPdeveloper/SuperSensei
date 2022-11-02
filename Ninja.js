class Ninja {

    constructor (nombre, salud) {
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = 3; 
        this.fuerza = 3;
    }

    sayName() {
        return this.nombre; 
    }

    showStats() {
        const name = this.nombre;
        const fuerza_ninja = this.fuerza;
        const velo_ninja = this.velocidad;
        const salud_ninja = this.salud;
        return ["Nombre: " + name, "Fuerza: " + fuerza_ninja , "Velocidad: " + velo_ninja , "Salud: " + salud_ninja];
    }

    drinkSake() {
        const new_salud = this.salud + 10;
        return new_salud;

    }
}

// Instancias Ninjas

//const ninja_1 = new Ninja("Juana", 10);
//const ninja_2 = new Ninja("Maria", 45);

//console.log(ninja_2.nombre);
//console.log(ninja_2.salud);
//console.log(ninja_2.sayName());
//console.log(ninja_2.showStats());
//console.log(ninja_2.drinkSake());

module.exports = Ninja;