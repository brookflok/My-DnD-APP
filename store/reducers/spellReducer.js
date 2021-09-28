import { ONE_SPELL_FETCH_FAILED, ONE_SPELL_FETCH_SUCCEDED, SPELL_FETCH_FAILED, SPELL_FETCH_SUCCEDED } from "../sagas/spellSagas"

const initialState = { 
    spells:[],
    currentSpell:''
}

const spellReducer = (state = initialState, action) => {

    switch(action.type){
        case SPELL_FETCH_SUCCEDED:{
            const updateSpells = action.spells
            return{...state, spells:updateSpells}
        }
        case SPELL_FETCH_FAILED:{
            console.log(action.message)
        }
        case ONE_SPELL_FETCH_SUCCEDED:{
            const updateCurrentSpell = action.spell
            return{...state, currentSpell:updateCurrentSpell}
        }
        case ONE_SPELL_FETCH_FAILED:{
            console.log(action.message)
        }
        default :
        return state
    }

}

export default spellReducer