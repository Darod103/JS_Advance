const Character = function(race,name,language) {
    this.race = race;
    this.name = name;
    this.language = language;
    
}
Character.prototype.speak = function (){
    console.log(`Меня зовут ${this.name}, я говорю на ${this.language}`)
}

const Ork = function (name,weapon){
    this.weapon = weapon;
    Character.call(this,'орк',name,'Орский');
};

Ork.prototype = Object.create(Character.prototype);
Ork.prototype.constructor = Ork;
Ork.prototype.hit = function(){
    console.log(`${this.name} наносить удар ${this.weapon}ом`)
}

const Elf = function (name,spell) {
    Character.call(this,'элья',name,'Эльфийский');
    this.spell = spell;
};

Elf.prototype = Object.create(Character.prototype);
Elf.prototype.cast = function() {
    console.log(`${this.name} создает заклинание '${this.spell}'`)
}


const newOrk= new Ork('Тралл','топор')
const newElf = new Elf('Эльсиртур','Fire ball')
newOrk.speak();
newOrk.hit();
newElf.speak()
newElf.cast()



