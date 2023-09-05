import { createSelector } from "@ngrx/store";
import { Random } from "src/app/models/random.state";
import { AppState } from "../app.state";

export const selectProductsfeature = (state: AppState) => state.state;

export const digitsSelector = createSelector(
    selectProductsfeature,
    (state: Random) => state.randCuadrados.digitos
)

export const randomNumbers = createSelector(
    selectProductsfeature,
    (state: Random) => state.randCuadrados.numbers
)

export const seedSelector = createSelector(
    selectProductsfeature,
    (state: Random) => state.randCuadrados.semilla
)

export const randomNumbersmiddle = createSelector(
    selectProductsfeature,
    (state: Random) => state.randMedios.numbers
)
