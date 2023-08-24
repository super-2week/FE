import { styled } from "styled-components";

export const StCart = styled.div`
    width: 100vw;
    margin-top: 70px;
    display: flex;
    justify-content: center;

    .cart_container{
        width: 70%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        /* background-color: aliceblue; */

        .cart_title_wrapper{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100px;
            margin-bottom: 30px;

            /* background-color: #D9D9D9; */
            
            h1{
                font-size: 25px;
                font-weight: 700;
                color: #000000;
            }
        }

        .cart_product_container{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            width: 100%;

            /* background-color: #e7caca; */

            .product_title_container{
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 100%;
                height: 50px;
                border-top: 1px solid #E5E5E5;
                border-bottom: 1px solid #E5E5E5;

                /* background-color: #ffecec; */

                .product_title_wrapper:first-child{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 40%;
                    height: 66px;

                    /* background-color: #e5c1c1; */
                }
                .product_title_wrapper:nth-child(2){
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 17%;
                    height: 66px;

                    /* background-color: #d28e8e; */
                }
                .product_title_wrapper:nth-child(3){
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 17%;
                    height: 66px;

                    /* background-color: #ffffff; */
                }
                .product_title_wrapper:nth-child(4){
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 17%;
                    height: 66px;

                    /* background-color: #d0c7c7; */
                }
                .product_title_wrapper:nth-child(5){
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 9%;
                    height: 66px;

                    /* background-color: #c4b0b0; */
                }
            }
            .product_box_container{
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 100%;
                height: 170px;
                border-bottom: 1px solid #E5E5E5;

                .product_img_wrapper{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 15%;
                    height: 170px;

                    /* background-color: #f1acac; */

                    img{
                        width: 100%;
                        height: 130px;
                        background-color: #ffffff;
                    }
                }
                .product_title_wrapper{
                    display: flex;
                    justify-content: left;
                    align-items: center;
                    width: 25%;
                    height: 170px;
                    padding-left: 25px;
                    box-sizing: border-box;

                    /* background-color: #cbaaaa; */
                    
                    span{
                        font-size: 16px;
                        font-weight: 500;
                        color: #000000;
                    }
                }
                .product_price_wrapper{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 17%;
                    height: 170px;

                    /* background-color: #ff7f7f; */

                    span{
                        font-size: 16px;
                        font-weight: 500;
                        color: #000000;
                    }
                }
                .product_count_wrapper{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 17%;
                    height: 170px;

                    /* background-color: #ab9b9b; */

                    .count_btn_container{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 74px;
                        height: 25px;
                        border-radius: 5px;
                        border: 1px solid #AAAAAA;
                        .count_min_wrapper{
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            width: 33.5%;
                            height: 100%;
                            cursor: pointer;

                            /* background-color: #3182F6; */

                            span{
                                font-size: 18px;
                                font-weight: 600;
                                color: #000000;
                            }
                        }
                        .count_num_wrapper{
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            width: 33.5%;
                            height: 100%;

                            span{
                                font-size: 15px;
                                font-weight: 400;
                                color: #000000;
                            }
                        }
                        .count_plus_wrapper{
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            width: 33.5%;
                            height: 100%;
                            cursor: pointer;

                            span{
                                font-size: 18px;
                                font-weight: 600;
                                color: #000000;
                            }
                        }
                    }
                }
                
                .product_totalprice_wrapper{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 17%;
                    height: 170px;

                    /* background-color: #ff9b9b; */
                    
                }
                .product_delete_wrapper{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 9%;
                    height: 170px;

                    /* background-color: #ffe9e9; */

                    button{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 30px;
                        height: 30px;
                        border-radius: 5px;
                        border: none;
                        background-color: #3182F6;
                        
                        font-size: 18px;
                        font-weight: 700;
                        color: #ffffff;

                        cursor: pointer;
                    }
                }
            }
        }
        .cart_totalprice_container{
            display: flex;
            justify-content: right;
            align-items: center;
            width: 100%;
            margin-top: 40px;
            margin-bottom: 100px;

            .totalprice_title_wrapper{
                display: flex;
                justify-content: center;
                align-items: center;
                margin-right: 40px;

                span{
                    font-size: 18px;
                    font-weight: 500;
                    color: #000000;
                }
            }
            .totalprice_wrapper{
                display: flex;
                justify-content: center;
                align-items: center;
                margin-right: 40px;

                span{
                    font-size: 22px;
                    font-weight: 900;
                    color: #006aff;
                }
            }
            .totalprice_btn_wrapper{
                display: flex;
                justify-content: center;
                align-items: center;
                margin-right: 10px;

                button{
                    width: 160px;
                    height: 40px;
                    border-radius: 5px;
                    border:none;
                    background-color: #3182F6;
                    cursor: pointer;

                    font-size: 18px;
                    font-weight: 700;
                    color: #ffffff;
                }
            }
        }
    }
`