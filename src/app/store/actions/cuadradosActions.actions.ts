import { createAction, props } from "@ngrx/store";
import { DataRand } from "src/app/models/objects/dataRand";
import { DataRandMiddle } from "src/app/models/objects/dataRandMiddle";

export const loadDigits = createAction(
    '[CUADRADOS] load digits',
)

export const loadedDigits = createAction(
    '[CUADRADOS] loaded digits',
    props<{digits:number}>()
)

export const loadingRandomNumbers = createAction(
    '[CUADRADOS] loaded random numbers',
    props<{list:Array<DataRand>, digits:number}>()
)

export const loadingRandomNumbersMiddle = createAction(
    '[CUADRADOS] loaded random numbers',
    props<{list:Array<DataRandMiddle>}>()
)

export const loadedSeed = createAction(
    '[CUADRADOS] loaded seed',
    props<{seed:number}>()
)

export const resetAction = createAction(
    '[RESET] reset',
    props<{list:Array<DataRand>, digits:number, n:number, }>()
)

export const resetActionProductos = createAction(
    '[RESET] reset middle products',
    props<{list:Array<DataRandMiddle>, n:number}>()
)