import { createGlobalState } from 'react-hooks-global-state';
import { State } from '../types/types';



const initialState:State = {
    token: null,
    user:null,
    items: [],
    filter: null,
} 

export const {useGlobalState} = createGlobalState(initialState)