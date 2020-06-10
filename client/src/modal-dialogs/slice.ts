import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  modalType: '',
  modalProps: {},
};

const { actions, reducer } = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    showModal: (_, action) => ({
      modalType: action.payload.modalType,
      modalProps: action.payload.modalProps,
    }),

    hideModal: () => initialState,
  },
});

export { actions as modalsAction, reducer as modalsReducer };
