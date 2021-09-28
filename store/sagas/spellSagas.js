import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { getOneSpellFromApi, getSpellsFromApi } from '../../Api/spellsApi';


export const FETCH_SPELLS_REQUESTED = "FETCH_SPELLS_REQUESTED"
export const SPELL_FETCH_SUCCEDED = "SPELL_FETCH_SUCCEDED"
export const SPELL_FETCH_FAILED = "SPELL_FETCH_FAILED"

export const ONE_SPELL_FETCH_REQUESTED = "ONE_SPELL_FETCH_REQUESTED"
export const ONE_SPELL_FETCH_SUCCEDED = "ONE_SPELL_FETCH_SUCCEDED"
export const ONE_SPELL_FETCH_FAILED = "ONE_SPELL_FETCH_FAILED"

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchSpells(action) {
    try {
        const data = yield call(getSpellsFromApi);
        yield put({ type: SPELL_FETCH_SUCCEDED, spells: data });
    } catch (e) {
        yield put({ type: SPELL_FETCH_FAILED, message: e.message });
    }
}

function* fetchOneSpell(action){
    try {
        const oneSpell = yield call(getOneSpellFromApi, action.index)
        yield put({type: ONE_SPELL_FETCH_SUCCEDED, spell:oneSpell})
    } catch (e) {
        yield put({type : ONE_SPELL_FETCH_FAILED, message: e.message})
    }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* spellSaga() {
    yield takeEvery(FETCH_SPELLS_REQUESTED, fetchSpells);
    yield takeEvery(ONE_SPELL_FETCH_REQUESTED, fetchOneSpell)
}

export default spellSaga;