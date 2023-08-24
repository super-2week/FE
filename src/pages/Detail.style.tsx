import { styled } from "styled-components";

export const StDetail = styled.div`
width: 100vw;
margin-top: 70px;
display: flex;
        justify-content: center;
    .detail_container{
        width: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        /* background-color: aliceblue; */
        .top_container{
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: left;
            .left_wrapper{
                display: flex;
                justify-content: center;
                align-items: center;
                width: 45%;
                height: 560px;
                
                background-color: #D9D9D9;
                img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
            .right_container{
                display: flex;
                justify-content: top;
                align-items: left;
                flex-direction: column;
                width: 55%;
                padding-left: 66px;
                box-sizing: border-box;

                /* background-color: #3182F6; */

                .product_title_container{
                    display: flex;
                    justify-content: center;
                    align-items: left;
                    flex-direction: column;
                    
                    .category_wrapper{
                        width: 100%;
                        margin-top: 21px;

                        /* background-color: aqua; */

                        span{
                            font-size: 15px;
                            font-weight: 700;
                            color: #999999;
                        }
                    }
                    .title_wrapper{
                        width: 100%;
                        margin-top: 16px;

                        /* background-color: aqua; */

                        h1{
                            font-size: 25px;
                            font-weight: 700;
                            color: #292929;
                        }
                    }
                    .detail_wrapper{
                        width: 100%;
                        margin-top: 12px;

                        /* background-color: aqua; */

                        span{
                            font-size: 13px;
                            font-weight: 500;
                            color: #999999;
                        }
                    }
                    .price_wrapper{
                        width: 100%;
                        margin-top: 23px;

                        /* background-color: aqua; */

                        span{
                            font-size: 28px;
                            font-weight: 900;
                            color: #3182F6;
                        }
                    }
                }
                .product_choice_container{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    border-top: 1px solid #E6E6E6;
                    border-bottom: 1px solid #E6E6E6;
                    margin-top: 64px;

                    .choice_title_wrapper{
                        width: 109px;
                        height: 116px;
                        margin-top: 38px;
                        margin-bottom: 38px;

                        /* background-color: #3182F6; */

                        span{
                            font-size: 15px;
                            font-weight: 400;
                            color: #696969;
                        }
                    }
                    .choice_box_container{
                        display: flex;
                        justify-content: space-between;
                        align-items: left;
                        flex-direction: column;
                        border: 1px solid #E6E6E6;
                        width: 484px;
                        height: 116px;
                        padding: 20px;
                        box-sizing: border-box;

                        .product_name_wrapper{
                            display: flex;
                            justify-content: left;
                            align-items: center;
                            
                            /* background-color: #3182F6; */

                            span{
                                font-size: 13px;
                                font-weight: 400;
                                color: #696969;
                            }
                        }

                        .product_count_container{
                            display: flex;
                            justify-content: space-between;
                            align-items: center;

                            .count_container{
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                flex-direction: column;

                                .stock_wrapper{
                                    margin-bottom: 5px;
                                    span{
                                        font-size: 12px;
                                        font-weight: 500;
                                        color: #818181;
                                    }
                                }
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
                            .count_price_wrapper{
                                margin-top: 25px;
                                span{
                                    font-size: 15px;
                                    font-weight: 700;
                                    color: #B7B7B7;
                                }
                            }
                        }
                    }
                }
                .product_totalprice_container{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;

                    .totalprice_container{
                        width: 100%;
                        display: flex;
                        justify-content: flex-end;
                        align-items: flex-end;

                        margin-top: 35px;

                        .totalprice_title_wrapper{
                            margin-right: 20px;
                            padding-bottom: 7px;
                            box-sizing: border-box;
                            span{
                                font-size: 15px;
                                font-weight: 700;
                                color: #696969;
                            }
                        }
                        .totalprice_wrapper{
                            span{
                                font-size: 35px;
                                font-weight: 900;
                                color: #3182F6;
                            }
                        }
                    }
                    .buybtn_container{
                        width: 100%;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;

                        margin-top: 35px;

                        .card_btn{
                            width: 40%;
                            height: 45px;
                            margin-right: 20px;
                            border: 1.5px solid #3182F6;
                            border-radius: 5px;
                            background-color: #ffffff;
                            cursor: pointer;

                            font-size: 18px;
                            font-weight: 700;
                            color: #3182F6;
                        }
                        .buy_btn{
                            width: 60%;
                            height: 45px;
                            border: none;
                            border-radius: 5px;
                            background-color: #3182F6;
                            cursor: pointer;

                            font-size: 18px;
                            font-weight: 700;
                            color: #ffffff;
                        }
                    }
                }
            }
        }
        .bottom_container{
            width: 100%;

            .review_cointainer{
                /* width: 100%; */
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                margin-top: 141px;

                .review_title_cointainer{
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding-bottom: 23px;
                    box-sizing: border-box;
                    border-bottom: 1px solid #3182F6;

                    span{
                        font-size: 25px;
                        font-weight: 700;
                        color: #3182F6;
                    }

                    button{
                        width: 116px;
                        height: 40px;
                        border: none;
                        border-radius: 5px;
                        background-color: #3182F6;
                        cursor: pointer;

                        font-size: 18px;
                        font-weight: 700;
                        color: #ffffff;
                    }
                }
                .review_box_container{
                    width: 100%;
                    height: 122px;
                    display: flex;
                    justify-content: left;
                    align-items: center;
                    padding: 30px 0px;
                    border-bottom: 1px solid #E6E6E6;

                    /* border: 1px solid #3182F6; */

                    .review_name_wrapper{
                        width: 13%;
                        height: 100%;
                        display: flex;
                        justify-content: left;
                        align-items: top;

                        /* background-color: #3182F6; */

                        span{
                            font-size: 15px;
                            font-weight: 700;
                            color: #424242;
                        }
                    }

                    .review_img_wrapper{
                        width: 13%;
                        height: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: top;
                        margin-right: 36px;

                        /* background-color: #E6E6E6; */

                        img{
                            width: 121px;
                            height: 121px;
                        }
                    }

                    .review_detail_container{
                        width: 68%;
                        height: 100%;
                        display: flex;
                        justify-content: space-between;
                        align-items: left;
                        flex-direction: column;

                        /* background-color: #3182F6; */

                        .review_productname_wrapper{
                            width: 100%;
                            margin-top: 5px;

                            span{
                                font-size: 15px;
                                font-weight: 500;
                                color: #696969;
                            }
                        }
                        
                        .review_detail_wrapper{
                            width: 100%;
                            margin-top: 12px;

                            span{
                                font-size: 15px;
                                font-weight: 600;
                                color: #020202;
                            }
                        }
                        
                        .review_date_wrapper{
                            width: 100%;
                            margin-top: 46px;

                            span{
                                font-size: 15px;
                                font-weight: 600;
                                color: #696969;
                            }
                        }
                    }
                }
                .review_pagenation_container{
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    margin-top: 40px;
                    margin-bottom: 138px;
                    .review_pagenation_prev_wrapper{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 35px;
                        height: 35px;
                        border: 1.5px solid #7C7C7C;

                        margin-right: 20px;
                        cursor: pointer;

                        span{
                            font-size: 28px;
                            font-weight: 600;
                            color: #7C7C7C;
                        }
                    }
                    .review_pagenation_next_wrapper{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 35px;
                        height: 35px;
                        border: 1.5px solid #3182F6;
                        cursor: pointer;

                        span{
                            font-size: 28px;
                            font-weight: 600;
                            color: #3182F6;
                        }
                    }
                }
            }
        }
    }
`;