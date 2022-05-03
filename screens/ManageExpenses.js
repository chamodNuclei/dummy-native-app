import React, {useLayoutEffect} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import Button from '../components/UI/Button';
import IconButton from '../components/UI/IconButton';
import {GlobalStyles} from '../constants/styles';
import {useDispatch} from 'react-redux';
import {
  setExpensesList,
  removeExpenseFromList,
  updateExpensesList,
} from './../store/expenses/expenses';
import {getFormattedDate} from '../util/date';

const ManageExpense = ({route, navigation}) => {
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  const dispatch = useDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    });
  }, [navigation, isEditing]);

  const deleteExpenseHandler = () => {
    dispatch(removeExpenseFromList({id: editedExpenseId}));
    navigation.goBack();
  };
  const cancelHandler = () => {
    navigation.goBack();
  };
  const confirmHandler = () => {
    dispatch(
      setExpensesList({
        // passing values of action payload to be set

        id: new Date().toString() + Math.random().toString(),
        description: 'A pair of shoes',
        amount: 34.99,
        date: getFormattedDate(new Date('2022-04-27')),
      }),
    );
    navigation.goBack();
  };

  const updateHandler = () => {
    dispatch(
      updateExpensesList({
        id: editedExpenseId,
        description: 'updated..',
        amount: 100.0,
        date: getFormattedDate(new Date('2022-04-28')),
      }),
    );
    navigation.goBack();
  };

  const onChangeText = ()=>{

  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={''}
        
        placeholder="Amount"
        keyboardType="numeric"
      />

      <View style={styles.buttons}>
        <Button
          style={styles.buttonStyle}
          mode={'flat'}
          onPress={cancelHandler}>
          Cancel
        </Button>
        <Button
          style={styles.buttonStyle}
          onPress={isEditing ? updateHandler : confirmHandler}>
          {isEditing ? 'Update' : 'Add'}
        </Button>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon={'trash'}
            color={GlobalStyles.colors.error500}
            onPress={deleteExpenseHandler}
            size={36}
          />
        </View>
      )}
    </View>
  );
};

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary800,
    padding: 24,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: 'center',
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius:24,
    color:GlobalStyles.colors.primary100,
    borderColor:GlobalStyles.colors.primary100,
    padding: 10,
  },
});
