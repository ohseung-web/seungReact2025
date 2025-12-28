import { useState, useEffect } from "react";

export default function Hododata(){
    //상품 정보값
    const Hodo = [
        // 견과류
        {id:1, name:'간식용 아몬드', title:'amond_1.jpg', title2:'amond_2.png', scrollimg:'small_1.jpg', price:5000, category:'nuts', buybtn:1 },
        {id:2, name:'간식용 캐슈넛', title:'cashewnut_1.jpg',title2:'cashewnut_2.png', scrollimg:'small_1.jpg', price:5000, category:'nuts', buybtn:1 },
        {id:3, name:'코코너츠', title:'coconuts_1.jpg', title2:'coconuts_2.jpg', scrollimg:'small_1.jpg', price:21000, category:'nuts', buybtn:1 },
        // 일반 호두과자
        {id:4, name:'간식용 호두과자', title:'cocosnack_1.jpg', title2:'cocosnack_2.jpg', scrollimg:'small_3.jpg', price:21000, category:'snack', buybtn:0 },
        {id:5, name:'단체 간식용 호두과자', title:'cocosnack_3.jpg', title2:'cocosnack_4.jpg', scrollimg:'small_3.jpg', title3:'cocosnack_5.jpg', price:4000, category:'snack', buybtn:1 },
        // 크림 호두과자
        {id:6, name:'딸기 크림치즈(소)', title:'cocosnack_6.jpg', scrollimg:'small_6.jpg', price:5200, category:'cream', buybtn:0 },
        {id:7, name:'딸기 크림치즈(대)', title:'cocosnack_7.jpg', scrollimg:'small_6.jpg', price:10400, category:'cream', buybtn:0 },
        {id:8, name:'플레인 크림치즈(소)', title:'cocosnack_8.jpg', scrollimg:'small_8.jpg', price:5200, category:'cream', buybtn:0 },
        {id:9, name:'플레인 크림치즈(대)', title:'cocosnack_9.jpg', scrollimg:'small_8.jpg', price:10400, category:'cream', buybtn:0 },
        // 앙버터
        {id:10, name:'반반 호두과자(소)', title:'cocosnack_35.jpg', scrollimg:'small_35.jpg', price:4400, category:'butter', buybtn:1 },
        {id:11, name:'반반 호두과자(대)', title:'cocosnack_36.jpg', scrollimg:'small_35.jpg', price:8500, category:'butter', buybtn:1 },
        {id:12, name:'앙버터 호두과자(소)', title:'cocosnack_37.jpg', scrollimg:'small_35.jpg', price:4800, category:'butter', buybtn:1 },
        {id:13, name:'앙버터 호두과자(대)', title:'cocosnack_38.jpg', scrollimg:'small_35.jpg', price:9000, category:'butter', buybtn:1 },
        // 초코딸기, 선물용
        {id:14, name:'딸기 호두과자', title:'cocosnack_10.jpg', title2:'cocosnack_11.jpg', scrollimg:'small_10.jpg', price:5000, category:'gift', buybtn:0 },
        {id:15, name:'초코 호두과자', title:'cocosnack_14.jpg', title2:'cocosnack_15.jpg', scrollimg:'small_10.jpg', price:5000, category:'gift', buybtn:0 },
        {id:16, name:'초코베리', title:'cocosnack_16.jpg', price:4000, category:'gift', scrollimg:'small_10.jpg', buybtn:0 },
        {id:17, name:'프리백', title:'cocosnack_17.jpg', title2:'cocosnack_18.jpg', scrollimg:'small_17.jpg', price:6600, category:'gift', buybtn:0 },
        {id:18, name:'레드컵', title:'cocosnack_19.jpg', title2:'cocosnack_20.jpg', scrollimg:'small_17.jpg', price:4400, category:'gift', buybtn:0 },
        {id:19, name:'미니케이스(미니)', title:'cocosnack_21.jpg', price:4200, scrollimg:'small_21.jpg', category:'gift', buybtn:1 },
        {id:20, name:'미니케이스(소)', title:'cocosnack_22.jpg', price:5200, scrollimg:'small_21.jpg', category:'gift', buybtn:1 },
        {id:21, name:'미니케이스(중)', title:'cocosnack_23.jpg', price:7500, scrollimg:'small_21.jpg', category:'gift', buybtn:1 },
        {id:22, name:'미니케이스(대)', title:'cocosnack_24.jpg', price:11000, scrollimg:'small_21.jpg', category:'gift', buybtn:1 },
        // 선물용
        {id:23, name:'선물용(소)', title:'cocosnack_25.jpg', title2:'cocosnack_26.jpg', scrollimg:'small_26.jpg', price:15000, category:'present', buybtn:1 },
        {id:24, name:'선물용(중)', title:'cocosnack_27.jpg', title2:'cocosnack_28.jpg', scrollimg:'small_26.jpg', price:23000, category:'present', buybtn:1 },
        {id:25, name:'선물용(대)', title:'cocosnack_29.jpg', title2:'cocosnack_30.jpg', scrollimg:'small_26.jpg', price:34000, category:'present', buybtn:1 },
        {id:26, name:'코코 스페셜(중)', title:'cocosnack_31.jpg', title2:'cocosnack_32.jpg', scrollimg:'small_31.jpg', price:27000, category:'present', buybtn:1 },
        {id:27, name:'코코 스페셜(대)', title:'cocosnack_33.jpg', title2:'cocosnack_34.jpg', scrollimg:'small_31.jpg', price:41000, category:'present', buybtn:1 },
    ]

    return Hodo
}