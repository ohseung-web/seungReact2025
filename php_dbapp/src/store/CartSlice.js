import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [] },
  reducers: {
    // 장바구니 담기
    insertItem: (state, action) => {
      // 만약 이미 담긴 상품이 존재하면 수량만 1씩 증가하고,
      // 담긴 상품이 없다면,  quantity :1을 삽입한다.
      // 존재 => 배열이름.find(()=>조건)
      //  찾는 값이 존재하면 그 값의 배열 출력, 없으면 undefined
      const newItem = action.payload;
      // newitem = {id:1,~~~}
      const existIndex = state.items.find((item) => item.id === newItem.id);
      // 얕은 복사 => [], {}
      // push()는 배열만 사용하는 함수
      if (existIndex === undefined) {
        // 장바구니에 같은 상품이 존재하지 않는다는 의미
        // push, 수량까지
        // let newItemCopy = [...newItem]
        // ...newItem => 스프레드 문법(spread Operator)
        // newItem을 펼쳐서 보여준다
        // const newItem = {
        //  id:1, name:'사과', price:1000
        //} => 펼쳐녾은 곳에 quantity:1을 삽입시킨다.
        state.items.push({ ...newItem, quantity: 1 });
      } else {
        //  같은 상품 존재할때는 수량만 1씩 증가 시킨다.
        existIndex.quantity += 1;
      }
    },
    // 삭제하는 함수 생성
    deleteItem: (state, action) => {
      //    findindex()이용해서 작성
      console.log(action.payload); // CartPage.jsx에서 삭제버튼 클릭시 dispatch()가 내보낸 item.id값이다.
      const delIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );
      if (delIndex !== -1) {
        state.items.splice(delIndex, 1);
      }
    },
    // 수량 증가 함수
    plusQuantity: (state, action) => {
      const id = action.payload; // CartPage.jsx의 +버튼 클릭시 내보내지는 item.id값 가져온다
      //   id같은 상품만 수량증가 필요
      //  state없이 items 접근 불가능 하다.
      //  배열이름.find() 함수는 값이 없으면 undefined가 출력 됨
      //  find()함수는 값이 존재하면 배열로 출력 itemId = [{quantity:1}]
      const itemId = state.items.find((item) => item.id === id);
      if (itemId !== undefined) {
        // 상품이 존재한다면
        itemId.quantity += 1;
      }
    },
    // 수량 감소 함수
    minuQuantity: (state, action) => {
      const id = action.payload;
      const itemId = state.items.find((item) => item.id === id);
      if (itemId !== undefined && itemId.quantity > 1) {
        itemId.quantity -= 1;
      }
    },
  },
});

export const { insertItem, deleteItem, plusQuantity, minuQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
