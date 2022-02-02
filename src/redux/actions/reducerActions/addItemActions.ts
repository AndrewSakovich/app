export const addItemAction = (newItem: NewItemType) => {
  return {
    type: 'ADD_ITEM', // todo create const for type
    id: newItem.id,
    text: newItem.text, //  todo use object 'payload'
  };
};

export type NewItemType = {
  id: string;
  text: string;
};
