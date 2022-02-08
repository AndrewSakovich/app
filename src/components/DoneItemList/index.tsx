import React from 'react';
import {View, FlatList, ListRenderItem, FlatListProps} from 'react-native';
import {useSelector} from 'react-redux';
import {TodoItem} from '../TodoItem';
import {style} from './style';
import {StartWindow} from '../StartWindow';
import {doneItemsSelectors} from '../../redux/selectors/todoSelector';
import {ReduxStoreType} from '../../redux/store';
import {TodoItemType} from '../../models';

export const DoneItemList: React.FC = () => {
  const todoItems = useSelector<ReduxStoreType, TodoItemType[]>(
    doneItemsSelectors,
  );
  console.log('DONEITEMS', todoItems);

  const keyExtractor: FlatListProps<TodoItemType>['keyExtractor'] = item => {
    return item.id;
  };

  const renderItem: ListRenderItem<TodoItemType> = ({item}) => {
    return <TodoItem todoItem={item} />;
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
