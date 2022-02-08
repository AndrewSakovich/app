import React from 'react';
import {
  View,
  FlatList,
  ListRenderItem,
  FlatListProps,
  TouchableOpacity,
  Text,
} from 'react-native';
import {useSelector} from 'react-redux';
import {TodoItem} from '../TodoItem';
import {style} from './style';
import {StartWindow} from '../StartWindow';
import {todoItemsSelectors} from '../../redux/selectors/todoSelector';
import {ReduxStoreType} from '../../redux/store';
import {TodoItemType} from '../../models';

export const ItemList: React.FC = ({navigation}) => {
  // console.log('props', props);
  const todoItems = useSelector<ReduxStoreType, TodoItemType[]>(
    todoItemsSelectors,
  );

  const keyExtractor: FlatListProps<TodoItemType>['keyExtractor'] = item => {
    return item.id;
  };

  const renderItem: ListRenderItem<TodoItemType> = ({item}) => {
    return <TodoItem todoItem={item} />;
  };

  return (
    <View style={style.container}>
      <TouchableOpacity onPress={() => navigation.navigate('AddItem')}>
        <Text>{'ADD TODO'}</Text>
      </TouchableOpacity>
      <FlatList
        data={todoItems}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ListEmptyComponent={<StartWindow />}
      />
    </View>
  );
};
