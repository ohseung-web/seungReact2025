import { useEffect, useState } from "react";
import {useSelector, useDispatch} from 'react-redux'
import axios from 'axios'
import {setProducts} from '../store/ProductSlice'
import { Await } from "react-router-dom";
import {insertItem} from '../store/CartSlice'

export default function Section(){
    const {items} = useSelector((state)=> state.products)
    const dispatch = useDispatch()
    // axios를 이용해서 api 호출한다.

    useEffect(()=>{
        const load = async()=>{
            try{
                const res = await axios.get('https://dummyjson.com/products?limit=20')
                console.log(res.data.products)
                // productSlice의 => setProducts() 저장한다.
                // 마치 useState의 set~ 함수처럼 이용한다.
                // 반드시 데이터를 내보내야 하기 때문에 dispatch()가 먼저온다.
                dispatch(setProducts(res.data.products))
            }catch(error){
                console.log('데이터 호출 실패',error)
            }finally{
                console.log('요청 완료')
            }
        }
        // axios는 작성한 함수를 호출한다.
        load();
    },[dispatch])

    //핸들러 함수 생성
    // 장바구니에 상품이 클릭되어 담길때마다 alert창 띄우기
    const clickHandler = (product) => {
         dispatch(insertItem(product))
         alert(`${product.title} 장바구니 추가됨`)
    }

    return(
        <section className="section">
            <h3>상품 목록</h3>
            <div className="product-grid">
                 {items.map((item)=>(
                   <div key={item.id} className="product-card" onClick={()=>clickHandler(item)}>
                       <img src={item.thumbnail} alt={item.title} />
                       <h4>{item.title}</h4>
                       <p>{item.price}</p>
                   </div>
                 ))}
            </div>
        </section>
    )

}
// 