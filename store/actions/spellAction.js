import { FETCH_SPELLS_REQUESTED, ONE_SPELL_FETCH_REQUESTED } from "../sagas/spellSagas"

export const fetchSpells = () => ({
    type: FETCH_SPELLS_REQUESTED
})

export const fetchOneSpell = (index) => ({
    type: ONE_SPELL_FETCH_REQUESTED, index
})