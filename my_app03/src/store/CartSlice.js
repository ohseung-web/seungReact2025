import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], //장바구니 상품목록
  },
  reducers: {
    insertItem: (state, action) => {
      const newItem = action.payload;
      // find는 상품이 존재하지 않으면 undefined로 반환된다.
      const existIndex = state.items.find((item) => item.id === newItem.id);
      if (existIndex === undefined) {
        //장바구니에 상품이 존재하지 않는 경우 삽입
        // let itemsCopy = [...newItem];
        state.items.push({ ...newItem, quantity: 1 });
      } else {
        //상품이 이미 존재하면 수량만 증가
        existIndex.quantity += 1;
      }
    },
    deleteItem: (state, action) => {
      // findeIndex는 값이 존재하지 않으면 -1로 출력됨
      const delIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );
      if (delIndex !== -1) {
        // 찾는 항목이 존재하면
        // Redux Toolkit은 Immer를 사용하기 때문에 state.items.splice()처럼 원본 배열을 직접 수정해도 안전합니다.
        state.items.splice(delIndex, 1);
      }

      // state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

// Redux Toolkit + Immer에서는 이렇게 원본 state를 직접 수정하는 것처럼 작성해도 됩니다:

// Redux Toolkit
// state.items.push(newItem);      // 삽입
// state.items.splice(index, 1);   // 삭제
// state.items[i].quantity += 1;   // 수정

// Immer가 자동으로 불변성을 유지한 새 state를 만들어 주기 때문에, 굳이 [...state.items]처럼 얕은 복사를 할 필요가 없어요. 😎

export const { insertItem, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;
