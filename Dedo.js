export default class Dado{
    constructor(){
    }
    Lanzar(){
        let numRandom = Math.ceil(Math.random()*100);
        return numRandom
    }
}
