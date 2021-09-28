import React, { useCallback, useEffect, useLayoutEffect, useState } from 'react'
import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSpells, loadSpells } from '../store/actions/spellAction';
import { FETCH_SPELLS_REQUESTED } from '../store/sagas/spellSagas';

const renderSpellItem = ({ item }, props) => {

    return (
        <TouchableOpacity style={styles.itemContainer} onPress={() => {
            props.navigation.navigate('Spell', {
                index: item.index
            })
        }}>
            <View>
                <Text>{item.name}</Text>
            </View>
        </TouchableOpacity>
    )
}


const HomeScreen = props => {

    const dispatch = useDispatch()
    useLayoutEffect(() => {
        dispatch(fetchSpells())
    }, [dispatch])


    return (
        <View styles={styles.conatiner}>
            <FlatList numColumns={2} keyExtractor={(item) => item.name} data={useSelector(state => state.spells.spells)} renderItem={(item) => renderSpellItem(item, props)} />
        </View>
    );
}

const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        margin: 5,
        minWidth: 170,
        maxWidth: 223,
        height: 304,
        maxHeight: 304,
        backgroundColor: '#CCC',

    },
    itemContainer: {
        width: '50%',
        height: 150,
        borderWidth: 1,
        padding: 20,
        elevation: 2,
        backgroundColor: '#FF21A1'
    },
})

export default HomeScreen;