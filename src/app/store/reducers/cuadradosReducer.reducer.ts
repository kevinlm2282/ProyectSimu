import { createReducer, on } from "@ngrx/store";
import { Random } from "src/app/models/random.state";
import { RandomCuadrados } from "src/app/models/randomCuadrados";
import { RandomProductos } from "src/app/models/randomMedios";
import { loadedDigits, loadingRandomNumbers, loadingRandomNumbersMiddle, resetAction, resetActionProductos } from "../actions/cuadradosActions.actions";

export const cuadrados: RandomCuadrados = {
    semilla: 0,
    digitos: 0,
    n: 0,
    numbers: [],
}

export const productos: RandomProductos = {
    semilla: 0,
    semilla2: 0,
    n: 0,
    numbers: []
}

export const initialState: Random = {
    randCuadrados: cuadrados,
    randMedios: productos
}

export const randomReducer = createReducer(
    initialState,
    on(loadedDigits, ( state, {digits}) => ({
        ...state,
        randCuadrados: {
            digitos: digits,
            n: 0,
            semilla:0,
            numbers: [],
        }
    })),
    on(loadingRandomNumbers, (state, {list,digits}) => ({
        ...state,
        randCuadrados:{
            digitos: digits,
            n: 0,
            semilla:0,
            numbers: list,
        }
    })),
    on(resetAction, (state, {list,digits,n}) => ({
        ...state,
        randCuadrados:{
            digitos: 0,
            n: 0,
            semilla:0,
            numbers: [],
        }
    })),
    on(loadingRandomNumbersMiddle, (state, {list}) => ({
        ...state,
        randMedios:{
            semilla: 0,
            semilla2: 0,
            n: 0,
            numbers: list
        }
    })),
    on(resetActionProductos, (state, {list,n}) => ({
        ...state,
        randMedios:{
            semilla: 0,
            semilla2: 0,
            n: n,
            numbers: []
        }
    })),
)