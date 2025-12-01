import {createSlice} from '@reduxjs/toolkit'

const productSlice = createSlice({
    name:'products',
    initialState:{ items:[]},
    // 동기적으로 상태를 변경하는 함수들 모임
    // 동기적 => 버튼 클릭, 또는 입력 Change
    // 총계구하는 함수 => 작성 금지
    // reducers:{}
    reducers:{
        // set + 작명 => 업데이트의 의미를 가지는 
        //               함수를 생성하기로 약속되어 있다.
       setProducts:(state,action) =>{
          state.items = action.payload
       } 
    }
})

export const {setProducts} = productSlice.actions
export default productSlice.reducer