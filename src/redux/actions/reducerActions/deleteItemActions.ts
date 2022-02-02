export const deleteItemAction = id => {
  return {
    type: 'DELETE_ITEM', // todo create const for type
    id: id, //todo use object 'payload'
  };
};
