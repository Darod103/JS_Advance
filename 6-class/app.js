class Car {
    #_brand;
    #_model;
    #_mileage;
    constructor(brand,model,mileage){
        this.#_brand = brand;
        this.#_model = model;
        this.#mileage = mileage

    }
    get #mileage () {
        return this.#_mileage
    }
    set #mileage(value){
        this.#_mileage = value;
    }

    #check(value){
        return Number(value <= this.#mileage);
    }

    changeMileage(value){
        if(this.#check(value)){
            console.log(`Побег должен быть больше чем ${this.#mileage} `)
            return;
        }
        this.#mileage = value;
    }
    info(){
        console.log(`Марка ${this.#_brand}, модель ${this.#_model} ,пробег ${this.#mileage}`)
    }
}

const bmw = new Car('BMW', 'M5', 100)
bmw.changeMileage(110)
bmw.changeMileage(50)
bmw.info()
