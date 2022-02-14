import React from 'react';
import {View, FlatList, ListRenderItem, FlatListProps} from 'react-native';
import {useSelector} from 'react-redux';
import {TodoItem} from '../TodoItem';
import {style} from './style';
import {TodoListEmptyComponent} from '../TodoListEmptyComponent';
import {doneItemsSelectors} from '../../redux/selectors/todoSelector';
import {ReduxStoreType} from '../../redux/store';
import {TodoItemType} from '../../models';
import {ItemListNavigationProps} from '../../navigators/TodoListTopNavigation/type';

export const ItemList: React.FC<ItemListNavigationProps> = props => {
  const {route} = props;
  const flagDone = route.params.done;

  const data = useSelector<ReduxStoreType, TodoItemType[]>(
    doneItemsSelectors(flagDone),
  );

  const keyExtractor: FlatListProps<TodoItemType>['keyExtractor'] = item => {
    return item.id;
  };

  const renderItem: ListRenderItem<TodoItemType> = ({item}) => {
    return <TodoItem todoItem={item} />;
  };

  return (
    <View style={style.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ListEmptyComponent={<TodoListEmptyComponent />}
      />
    </View>
  );
};
