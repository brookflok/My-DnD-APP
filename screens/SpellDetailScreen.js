import React, { useLayoutEffect } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { fetchOneSpell } from '../store/actions/spellAction'

import { ONE_SPELL_FETCH_REQUESTED } from '../store/sagas/spellSagas'

const SpellDetailScreen = props => {

    const dispatch = useDispatch()
    const index =props.route.params.index
    useLayoutEffect(() => {
        dispatch(fetchOneSpell(index))
    }, [dispatch])

    const spell = useSelector(state=>state.spells.currentSpell)

    return (
        <View>
            <Text>Spell name: {spell.name}</Text>
            <Text>Spell description: {spell.desc} </Text>
        </View>
    );
}

const styles = StyleSheet.create({

})

export default SpellDetailScreen;