const Ninja = require("./Ninja");

class Sensei extends Ninja {
    
    constructor(nombre, salud, velocidad, fuerza) {
        super(nombre, salud, velocidad, fuerza);
        this.sabiduaria = 10;
    }

    speakWisdom() {
        return "Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses"
    }

    showStats_sensei() {
        let showStats_padre = super.showStats();
        return showStats_padre + ", " + "Sabiduria: " + this.sabiduaria;
    }
} 

const superSensei = new Sensei("Master Splinter", 210);

console.log(superSensei.speakWisdom());
console.log(superSensei.showStats_sensei());