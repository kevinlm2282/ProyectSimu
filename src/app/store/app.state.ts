import { ActionReducerMap } from "@ngrx/store";
import { Random } from "../models/random.state";
import { randomReducer } from "./reducers/cuadradosReducer.reducer";

export interface AppState{
    state: Random,
}

export const ROOT_REDUCER: ActionReducerMap<AppState> = {
    state: randomReducer
}