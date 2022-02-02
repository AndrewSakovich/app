import React from 'react';
import {View, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import {TodoItem} from '../TodoItem';
import {style} from './style';
import {StartWindow} from '../StartWindow';
import {todoItemsSelectors} from '../../redux/selectors';

export const ItemList = () => {
  const todoItems = useSelector(todoItemsSelectors);
  const keyExtractor = item => {
    return item.id;
  };

  const renderItem = ({item}) => {
    return <TodoItem text={item.text} id={item.id} />;
  };

  return (
    <View style={style.container}>
      <FlatList
        data={todoItems}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ListEmptyComponent={<StartWindow />}
      />
    </View>
  );
};
