import Proceso from './Proceso.js';
import Dado from './Dedo.js';

class Main {
    constructor() {
        this._actual = null;
        document.querySelector('#Iniciar').addEventListener('click', () => {
            let dado = new Dado();
            let cont = 0;
            let contCompletado = 0;
            let a = 1;
            let procesosfaltantes = 0;
            let SumaCiclosfaltantes = 0;
            for (let i = 0; i < 300; i++) {
                if (dado.Lanzar() <= 39) {
                    this.addProceso(new Proceso('p' + a, Math.ceil(Math.random() * 11) + 3));
                    console.log('Se agrego proceso');
                    a++;
                }
                if (this._actual !== null) {
                    this._actual.ciclo -= 1;

                    if (this._actual.ciclo === 0) {
                        contCompletado++;
                        console.log('Se completo el proceso ' + this._actual.nombre);
                        this._actual = this._actual.siguiente;
                    }
                } else {
                    cont++;
                }
            }
            let faltantes = this._actual;
            while (faltantes !== null) {
                procesosfaltantes++;
                SumaCiclosfaltantes += this._actual.ciclo;
                faltantes = faltantes.siguiente;
            }
            console.log('Los ciclos que estuvo vacio la cola ' + cont);
            console.log('El numero de procesos que se atendieron completamente son: ' + contCompletado);
            console.log('El numero de procesos que quedaron pendientes son: ' + procesosfaltantes);
            console.log('La suma de ciclos de los procesos pendientes es: ' + SumaCiclosfaltantes);
        })

    }
    addProceso(proceso) {
        if (this._actual === null) {
            this._actual = proceso;
        } else {
            this._addproceso(proceso, this._actual);
        }
    }
    _addproceso(nuevo, ultimo) {
        if (ultimo.siguiente === null) {
            ultimo.siguiente = nuevo;
        } else {
            this._addproceso(nuevo, ultimo.siguiente)
        }
    }
}
let main = new Main();