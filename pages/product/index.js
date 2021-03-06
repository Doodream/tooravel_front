import React, { useState, useEffect, useRef } from 'react';
import AuthContext from '../../contexts/Auth/AuthContext';

import Link from 'next/link';

import Page from '../../src/components/Layout/Page';

import { makeStyles } from "@material-ui/core/styles";
import styles from '../../src/views/product/PageProduct.style.js';
import { Container, Box, Typography, Button, TextField, Card, CardContent, CardActions } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LinkIcon from '@material-ui/icons/Link';
import VideoCard from '../../src/components/VideoCard/VideoCard';
import axios from 'axios';
import { Fetch } from '../../src/utils/Fetch';

import ReviewComment from './components/ReviewComment';
import { get, useForm } from 'react-hook-form';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderNextArrow from "./components/Slider/SliderNextArrow";
import SliderPrevArrow from "./components/Slider/SliderPrevArrow";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import AddToCart from "./components/AddToCart";

const useStyles = makeStyles(styles);

const KEY = 'AIzaSyABIHpDoCRz-SxK7mCI54mqqSKvF9wvP4Y';

const products = [
    {
        image: 'https://s3.ap-northeast-2.amazonaws.com/tooravel/rent/item/rent_gopro_sub_4.png',
        title: '헤드스트랩',
        description: '머리에 장착하여 내가 원하는 가장 완벽한 각도로 촬영해보세요. 내부 실리콘 재질은 미끄럼을 방지해준답니다.',
        price: 1000,
        quantity: 0,
    },
    {
        image: 'https://s3.ap-northeast-2.amazonaws.com/tooravel/rent/item/rent_gopro_sub_6.png',
        title: '체스트 스트랩',
        description: '서핑이나 사이클을 탈 때 가슴에 고프로를 장착하고 그 순간을 스릴있게 담아보세요.',
        price: 2000,
        quantity: 0,
    },
    {
        image: 'https://s3.ap-northeast-2.amazonaws.com/tooravel/rent/item/rent_gopro_sub_3.png',
        title: '죠스 클램프',
        description: '자유자재로 각도를 조절할 수 있는 몸체와 1cm-5cm의 물체에 장착 가능한 죠스클램프 마운트로 편리하게 거치하세요.',
        price: 3000,
        quantity: 0,
    },
    {
        image: 'https://s3.ap-northeast-2.amazonaws.com/tooravel/rent/item/rent_gopro_sub_12.png',
        title: '넥스트 랩(목걸이)',
        description: '평상시 자유롭게 다니다가 바로바로 촬영을 하고 싶다면 고프로만 목에 딱 지니고 다녀보세요.',
        price: 4000,
        quantity: 0,
    },
    {
        image: 'http://img.danawa.com/prod_img/500000/510/534/img/4534510_1.jpg?shrink=500:500&_v=20180718174145',
        title: '배터리 추가제공',
        description: '고프로 추가 배터리입니다.',
        price: 5000,
        quantity: 0,
    },
    {
        image: 'https://s3.ap-northeast-2.amazonaws.com/tooravel/rent/item/rent_gopro_sub_11.png',
        title: '클라우드 데이터 다운로드 링크 제공',
        description: '바쁘거나 여러명이 한꺼번에 데이터를 공유하기를 원하시면 저희가 최대 3일 내에 동기화하여 다운로드 링크를 제공해드려요!',
        price: 6000,
        quantity: 0,
    },
    {
        image: 'https://s3.ap-northeast-2.amazonaws.com/tooravel/rent/item/rent_gopro_sub_1.jpg',
        title: '3-Way 그립',
        description: '3-way 그립은 3단계로 길이 조절을 해 셀카 촬영에도 최적화되었지만 삼각대로도 편리하게 사용할 수 있어요.',
        price: 7000,
        quantity: 0,
    },
    {
        image: 'https://s3.ap-northeast-2.amazonaws.com/tooravel/rent/item/rent_gopro_sub_10.png',
        title: '리모뷰 폴 110cm',
        description: '최소 38cm에서 110cm까지 조절 가능한데 무게는 겨우 148g. 셀카봉으로 최적이지요!',
        price: 8000,
        quantity: 0,
    },
    {
        image: 'https://s3.ap-northeast-2.amazonaws.com/tooravel/rent/item/rent_gopro_sub_2.png',
        title: '다이브 하우징',
        description: '수중 촬영도 다이브하우징이 있다면 안심! 심해 60m까지 방수가 되는 탁월할 내구성을 자랑합니다.',
        price: 9000,
        quantity: 0,
    },
    {
        image: 'https://s3.ap-northeast-2.amazonaws.com/tooravel/rent/item/rent_gopro_sub_7.png',
        title: '부력봉',
        description: '물 속에서 부력봉으로 쉽게 수중 촬영을 해보세요. 장비를 놓치더라도 물 위에 떠오르게 설계되어 있어요!',
        price: 10000,
        quantity: 0,
    },
    {
        image: 'https://s3.ap-northeast-2.amazonaws.com/tooravel/rent/item/rent_gopro_sub_9.png',
        title: '레드필터(다이브하우징 착용)',
        description: '바다속에서 잃어버린 색을 되찾아주는 레드필터! 이 제품은 다이브하우징에 착용 가능합니다.',
        price: 11000,
        quantity: 0,
    },
    {
        image: 'https://s3.ap-northeast-2.amazonaws.com/tooravel/rent/item/rent_gopro_sub_5.png',
        title: '손목 360도 스트랩',
        description: '손이나 팔목, 다리에까지 자유롭게 장착 가능한 손목스트랩은 360도로 회전해 쉽게 촬영이 가능해요.',
        price: 12000,
        quantity: 0,
    }
];

const tipVideosId = [
    'pGx8ySVp4aA',
    'J3XTohm5Lbg',
];

const clipVideosId = [
    '7o6mGQ2uY2Y',
    'D2PN_cg-1Nk',
];


export default function PageProduct(localStorage) {

    const classes = useStyles();
    const { register, handleSubmit, reset } = useForm();
    const [rating, setRating] = useState(0);
    const [isHiddenQA, setIsHiddenQA] = useState(false);
    const [isHiddenReview, setIsHiddenReview] = useState(false);
    const [reviews, setReviews] = useState([]);
    const [tipVideosInfo, setTipVideosInfo] = useState([]);
    const [clipVideosInfo, setClipVideosInfo] = useState([]);

    const [cart, setCart] = useState(typeof window !== "undefined" ? JSON.parse(window.localStorage.getItem('cart')) : null);

    const { isAuthenticated, authUser, uploadReview } = React.useContext(AuthContext);
    const getReviews = () => {
        return Fetch.post('/api/download/reviews').then(res => {
            //console.log(res);
            setReviews(res);
        }).catch(err => {
            alert(err);
        })
    }

    var count = 0;

    var sliderSettings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        nextArrow: <SliderNextArrow />,
        prevArrow: <SliderPrevArrow />,
    }

    const getVideoInfo = (videoId) => {
        return axios.get(`https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${KEY}&part=snippet,statistics&fields=items(id,snippet(channelId,channelTitle,title,publishedAt,thumbnails(high)),statistics(viewCount))`);
    }


    useEffect(() => {
        // var data = null;

        async function setTipVideos() {
            // RIGHT :: Using Promise.resolve
            const tipVideos = await tipVideosId.reduce(async (promise, videoId) => {
                // 누산값 받아오기 (2)
                let result = await promise.then();
                // 누산값 변경 (3)
                const { data: { items } } = await getVideoInfo(videoId);
                const newVideoInfo = {
                    videoId: videoId,
                    viewCount: items[0].statistics.viewCount,
                    publishedAt: items[0].snippet.publishedAt.substring(0, 10),
                    channelTitle: items[0].snippet.channelTitle,
                    title: items[0].snippet.title,
                    thumbnail: items[0].snippet.thumbnails.high.url,
                }

                return Promise.resolve([...result, newVideoInfo]);
            }, Promise.resolve([]));

            setTipVideosInfo(tipVideos)
        }
        setTipVideos();

    }, [])

    useEffect(() => {
        // var data = null;

        async function setClipVideos() {
            // RIGHT :: Using Promise.resolve
            const clipVideos = await clipVideosId.reduce(async (promise, videoId) => {
                // 누산값 받아오기 (2)
                let result = await promise.then();
                // 누산값 변경 (3)
                const { data: { items } } = await getVideoInfo(videoId);
                const newVideoInfo = {
                    videoId: videoId,
                    viewCount: items[0].statistics.viewCount,
                    publishedAt: items[0].snippet.publishedAt.substring(0, 10),
                    channelTitle: items[0].snippet.channelTitle,
                    title: items[0].snippet.title,
                    thumbnail: items[0].snippet.thumbnails.high.url,
                }

                return Promise.resolve([...result, newVideoInfo]);
            }, Promise.resolve([]));

            setClipVideosInfo(clipVideos)
        }
        setClipVideos();

    }, [])

    useEffect(() => {
        getReviews();
    }, [reviews])

    const removeToCart = (index) => {
        if (cart.length === 1) {
            setCart([]);
            window.localStorage.removeItem('cart');
            return
        }
        var newCart = JSON.parse(JSON.stringify(cart));
        newCart.splice(index, 1)
        setCart(newCart);
        window.localStorage.setItem('cart', JSON.stringify(newCart));
        console.log(cart);
    }

    const addToCart = (product) => {
        if (product.quantity !== 0) { product.quantity = 0 }
        const newProduct = product;
        var newCart = JSON.parse(window.localStorage.getItem('cart'));

        // 카트가 비었는지 비어있지 않은지 
        if (newCart) {
            //카트가 비어있지 않다면 product가 있는지 없는지
            if (newCart.some(item => item.title === newProduct.title)) {
                var index = newCart.findIndex(item => item.title === newProduct.title)
                newCart[index].quantity += 1;
                window.localStorage.setItem('cart', JSON.stringify(newCart))
            } else {
                product.quantity += 1;
                newCart = newCart.concat(product);
                window.localStorage.setItem('cart', JSON.stringify(newCart))
            }
        } else {
            newProduct.quantity += 1;
            window.localStorage.setItem('cart', JSON.stringify([newProduct]));
        }

        setCart(JSON.parse(window.localStorage.getItem('cart')));
        //console.log(cart);
    }

    const addReview = data => {
        //userName, userImage를 context에서 
        if (!isAuthenticated) {
            alert("로그인을 해주세요.😄");
            return
        }

        var newReview = {
            userName: authUser.name,
            userImage: authUser.image,
            date: date(),
            rating: rating,
            comment: data.comment,
        }

        uploadReview(newReview);
        reset();
        setRating(0)

    }

    const date = () => {
        let today = new Date();
        let year = today.getFullYear();
        let month = today.getMonth() + 1;
        let date = today.getDate();

        return (year + '-' + month + '-' + date);
    }

    const viewMoreQA = () => {
        setIsHiddenQA((prev) => !prev);
    }

    const getTotalPrice = () => {
        cart.map(product => {
            count += product.quantity * product.price
        })
        return count;
    }

    return (
        <Page>
            <Box className={classes.section}>
                <Container className={classes.product}>
                    <Box className={classes.productMain}>
                        <Box className={classes.productImage}>
                            <img src='https://tooravel.s3.ap-northeast-2.amazonaws.com/product/original/GOPRO5.jpg' alt='고프로 히어로'></img>
                        </Box>
                        <Typography className={classes.productTitle} variant='h3'>
                            (액션캠) 고프로 히어로
                    </Typography>
                        <Box className={classes.productRatingReview}>
                            <Box component="fieldset" mb={3} borderColor="transparent">
                                <Rating className={classes.productRatingStar} name="read-only" value={5} readOnly />
                            </Box>
                            <span>평점 4.8</span>
                        </Box>
                        <Box className={classes.productSubtitle}>
                            <Typography>여행지에서 고프로와 함께 여행지에서의 새로운 나를 발견해보세요!</Typography>
                            <Typography>고프로 히어로 7 구성품</Typography>
                            <div>
                                <KeyboardArrowRightIcon fontSize='large' /><Typography>하루 7,900원~11,800원 (최대 68% 할인)</Typography>
                            </div>
                        </Box>
                        <Typography variant='h5'>핵심 포인트</Typography>
                        <p className={classes.text}>
                            투레벨에서 제공하는 최저가 고프로 대여 서비스!!<br /><br />1. 여행자 혜택! <br />항공시간을 증빙 하시면 수령방법 상관없이 딱 공항출발/공항도착 시간만큼 계산해드려요! <br />당일 공항 직수령 또는 전날 무료 택배로 받아보세요.<br /><br />2. 입문자도 쉽게!<br />고객님이 원하는 상황에 맞게 액세서리를 추천해드리고 바로 사용하실 수 있도록 안내 도와드립니다.<br />그리고 투레벨에서 자체 제작한 입문용 가이드북을 e-book으로 드리고 있습니다.<br />휴대폰에 저장해서 언제 어디서든 사용법을 확인해보세요:)<br /><br />3. 최저가 하루 5,900원!<br />대여일수에 따라 하루 최저 5,900원에 고프로 히어로6 블랙을, 하루 최저 7,900원에 고프로 히어로7 블랙을 대여할 수 있어요.<br /><br />4. 충실한 기본 구성품과 다양한 정품 액세서리!<br />배터리 2개와 듀얼충전기, 128GB 메모리, SD카드 리더기가 기본 포함이고 다양하게 준비된 고프로 전용 액세서리도 고객님 상황에 맞게 선택할 수 있습니다.<br /><br />5. 편한 수령&amp;반납 방법<br />택배를 이용해서 자택까지 무료 배송해드리고, 다시 자택에서 택배로 착불로 접수해주시면 됩니다.<br />평일/휴일 상관없이 택배는 대여일 전날까지 보내드립니다 :)<br />또, 투레벨에서 제공하는 '인천공항 수령반납'도 있으니 편하게 이용해주세요~!!
                    </p>
                        <Box className={classes.productDivider}></Box>
                        <Typography variant='h3'>상품소개</Typography>
                        <Typography variant='h5'>고프로는?</Typography>
                        <p className={classes.text}>
                            고프로는 간단하게 보기 좋은 영상을 찍을 수 있어 여행지에서 특히 활용하기 좋은 액션캠입니다. <br />고프로 6와 7 모두 10m 기본방수가 가능하고 UHD 화질을 지원하고 있습니다. 휴양지에서 멋진 셀카를 찍거나 심지어 수심 60m에서도 (다이브 하우징 착용 시) 촬영이 가능하여 고객님의 아름다운 추억을 담기에 가장 좋습니다. <br />필요시 공식 지원되는 어플리케이션을 통해 스마트폰과 데이터없이 연동되어 촬영, 사진 저장 등을 원격 조정할 수 있습니다.
                     </p>
                        <Typography variant='h5'>고프로는 구매자의 사용패턴은?</Typography>
                        <img src='https://s3.ap-northeast-2.amazonaws.com/tooravel/rent/etc/gopro_reason_1.png' alt='고프로 사용패턴'></img>
                        <p className={classes.text}>10명 중에 8명은 구매 후 고프로 사용 빈도가 7번이 채 되지 않습니다. 그런데다 상황마다 제대로 촬영하려면 여러 액세서리까지 다 구매해야 합니다. 그러니 투레벨을 이용하시는게 훨씬 경제적이에요!</p>
                        <Typography variant='h5'>자체 제작한 고프로 히어로 가이드북 제공</Typography>
                        <img className={classes.productGuideBook} src="https://s3.ap-northeast-2.amazonaws.com/tooravel/rent/etc/gopro_guide_2.png" alt="고프로 가이드북"></img>
                        <p className={classes.text}>처음 써보는 사람도 정말 쉽게 따라하고 촬영할 수 있는 '초보자 맞춤 고프로 가이드 e-book'을 드립니다!</p>
                        <Typography variant='h5'>기본 구성품</Typography>
                        <ul className={classes.text}>
                            <li> 보호 프레임, C-type USB 케이블, 퀵버클, 곡면/평면 접착 마운트</li>
                            <li> 배터리 2개와 정품 듀얼배터리 충전기</li>
                            <li> 메모리 128GB</li>
                            <li> 케이스</li>
                            <li> 대여 중에도 문의 응답 및 AS</li>
                        </ul>
                        <Typography variant='h5'>불포함 사항</Typography>
                        <ul className={classes.text}>
                            <li>기타 액세서리는 옵션으로 선택</li>
                        </ul>
                        <Box>
                            <Slider {...sliderSettings} className={classes.slider}>
                                {
                                    products.map((product, index) => {
                                        if (product) {
                                            return (
                                                <div onClick={() => addToCart(product)} key={index} className={classes.productSlider}>
                                                    <Box
                                                        className={classes.productSlideImage}>
                                                        <img src={product.image} alt='고프로 제품 이미지들'></img>
                                                    </Box>
                                                    <p className={classes.text}>
                                                        <strong>{product.title}</strong><br />
                                                        {product.description}
                                                    </p>
                                                </div>
                                            )
                                        }
                                    }
                                    )
                                }
                            </Slider>
                        </Box>


                        <Box className={classes.productTip}>
                            <Box className={classes.productTipTitle}>
                                <Typography variant='h5'>고프로를 알차게 사용하는 팁</Typography>
                                <Link href='/product/gopro-tips'><a><LinkIcon />더 보기</a></Link>
                            </Box>
                            <Box className={classes.productTipVideo}>
                                {tipVideosInfo.map((videoInfo, index) => <VideoCard key={index} {...videoInfo} />)}
                            </Box>
                        </Box>
                        <Box className={classes.productTip}>
                            <Box className={classes.productTipTitle}>
                                <Typography variant='h5'>고프로로 담아온 영상</Typography>
                                <Link href='/product/gopro-videos'><a><LinkIcon />더 보기</a></Link>
                            </Box>
                            <Box className={classes.productTipVideo}>
                                {clipVideosInfo.map((videoInfo, index) => <VideoCard key={index} {...videoInfo} />)}
                            </Box>
                        </Box>
                        <Typography variant='h3'>사용방법</Typography>
                        <Typography variant='h5'>예약 / 사용 안내</Typography>
                        <ul className={classes.text}>
                            <li>여행 기간에 따라 수령/반납 날짜와 시간을 선택하세요. 기간에 따라 최저 6,900원까지 저렴해집니다.
                            <ul className={classes.text}>
                                    <li> 택배의 경우 수령받는 날짜, 반납하시는 날짜를 기간으로 선택하시면 됩니다.</li>
                                    <li> 여행자 혜택 : 항공권을 증빙하실 경우 수령방법에 상관없이 항공권 출발/도착 시간으로 대여 가능합니다. </li>
                                </ul>
                            </li>
                            <li> 수령과 반납 장소를 선택하세요.
                            <ul className={classes.text}>
                                    <li> 택배는 무료수령/무료반납입니다.</li>
                                    <li> 인천공항 수령/반납은 각각 4천원의 운임료가 추가됩니다. 인천공항 수령/반납 장소는 3층 출국장 M열 한진택배 짐보관소입니다.</li>
                                </ul>
                            </li>
                            <li> 예약이 완료된 후 빠른 시간 안에 재고 확인 후 연락을 드립니다.</li>
                            <li> 카드 결제 혹은 무통장 입금 뒤 예약이 확정됩니다</li>
                            <li> 고프로와 함께 즐거운 여행을 즐겨주세요!</li>
                            <li> 여행 후 택배 혹은 인천공항 지정된 장소로 다시 반납해주세요!</li>
                            <li> 고프로 수거 후 파손 확인한 뒤 대여가 완료됩니다.</li>
                        </ul>
                        <Box className={classes.productDivider}></Box>
                        <Typography variant='h3'>문의</Typography>
                        <Box className={classes.productTooravelLogoTitle}>
                            <img src='https://tooravel.s3.ap-northeast-2.amazonaws.com/media/company/small/TOORAVEL.jpg' alt='투레벨 로고'></img>
                            <Typography variant='h5'>투레벨</Typography>
                        </Box>
                        <p>투레벨은 여행자들에게 검증된 상품들만 엄선하여<br />가장 합리적으로 때로는 초특가로 제공하여<br />더 쉽게, 더 즐겁게 여행을 갈 수 있도록 돕고 있습니다!<br /></p>
                        <Typography variant='h5'>자주 묻는 질문</Typography>
                        <dl className={classes.text}>

                            <dt>공항 반납하려 하는데 SD카드에 저장된 데이터를 못 옮겼어요</dt>
                            <dd>직접 여분의 SD카드를 가져가시거나 노트북을 가져가신다면 데이터를 옮기기 무방하세요. 그렇지 않으면 보통 집으로 가져가서 데이터를 옮긴 뒤에 택배로 보내주시기도 하세요~!</dd>

                            <dt>예약 확정 후 일정이 변경되면 어떻게 하나요?</dt>
                            <dd>문의를 주시면 상담 후에 스케줄 조정이 가능할 경우 최대한 배려하여 조정을 해드립니다. 예약이 많을 경우 조정이 어려울 수 있으니 양해 부탁드려요..</dd>

                            <dt>반납이 늦어지면 어떻게 하나요?</dt>
                            <dd>초과한 기간에 대한 대여금액을 새로운 대여로 산정하고 그 기간만큼의 대여금액을 지급하여야 합니다.</dd>
                            {isHiddenQA ? <Box>
                                <dt>결제는 어떻게 하나요?</dt>
                                <dd>신용카드 또는 무통장 입금으로 대여가 이루어지고 있습니다.</dd>

                                <dt>예약을 취소하고 싶어요.</dt>
                                <dd>고객센터 ☎. 02-2138-0020로 전화하시거나 카톡플러스로 예약자 성함을 말씀해주시고 취소하시면 됩니다.예약당일을 기준으로 7일 전 취소시 100% 환불되며 2일 전 취소시 대여금액의 80%, 하루 전 취소시 대여금액의 70%, 예약당일 10분 전까지 취소시 대여금액의 50%가 환불됩니다.대여일 이후에는 대여금액이 환불되지 않습니다.</dd>

                                <dt>제품을 분실하면 어떻게 하나요?</dt>
                                <dd>제품 분실 시 인터넷 최저가 기준으로 비용이 청구됩니다.</dd>

                                <dt>제품이 파손되면 어떻게 하나요?</dt>
                                <dd>사용하면서 발생하는 기스는 문제 없습니다. 고프로 본체가 파손되었을 경우 수리를 맡겨야 하며 수리 견적서를 받아 전달드리면 입금해주시면 됩니다. 기타 액세서리의 경우 수리가 불가하므로 100% 비용이 청구됩니다.</dd>

                                <dt>액세서리는 뭘 선택해야 할지 잘 모르겠어요.</dt>
                                <dd>고객님의 상황에 따라 필요한 액세서리가 다를 수 있습니다. 가장 많이 사용되는 조합은 고프로+3way 그립이며 수중 액티비티시 다이브하우징과 부력봉을 추가하기도 하셔요. 전화 혹은 카톡플러스로 문의를 주시면 답변해드릴게요!</dd>

                                <dt>고프로 사용하는 방법을 몰라요!</dt>
                                <dd>누구나 쉽게 사용할 수 있도록 제작된 가이드북을 pdf 파일로 보내드립니다. 직접 만나 전달드릴 경우 사용방법에 대해 자세히 알려드려요. 사용 중에도 카톡플러스로 질문하시면 최대한 24시간 답변해드리고 있습니다.</dd>

                                <dt>공항 수령 시 새벽이나 밤 늦게 출발할 경우 어떻게 하나요?</dt>
                                <dd>인천공항 내 24시간 지정된 보관장소에서 찾아가도록 조치해 드립니다. 보관장소는 인천공항 3층 출국장 M열에 위치한 한진택배 짐보관소입니다.</dd>

                                <dt>배송은 어떤 방식으로 이루어지나요?</dt>
                                <dd>인천공항에서 바로 수령/반납하거나 또는 무료 택배발송/반납이 가능합니다. 또는 사무실 방문하여 직접 수령을 하실 수 있습니다.</dd>
                            </Box> : null}
                        </dl>
                        {isHiddenQA ?
                            <Box className={classes.productViewMoreButton}>
                                <Button onClick={() => viewMoreQA()}><KeyboardArrowUpIcon /> 줄이기</Button>
                            </Box> :
                            <Box className={classes.productViewMoreButton}>
                                <Button onClick={() => viewMoreQA()}><KeyboardArrowDownIcon /> 더보기</Button>
                            </Box>
                        }
                        <Box className={classes.productDivider}></Box>
                        <Typography className={classes.productUserReviewTitle} variant='h3'>후기 {reviews.length}개</Typography>
                        {
                            isHiddenReview ? reviews.map((review, index) => {
                                return (
                                    <ReviewComment
                                        key={index}
                                        userName={review.name}
                                        userImage={review.image}
                                        date={review.date}
                                        rating={review.rating}
                                        comment={review.comment}
                                    />
                                )
                            }) : reviews.slice(0, 3).map((review, index) => {
                                return (
                                    <ReviewComment
                                        key={index}
                                        userName={review.name}
                                        userImage={review.image}
                                        date={review.date}
                                        rating={review.rating}
                                        comment={review.comment}
                                    />
                                )
                            })
                        }
                        <Box className={classes.productViewMoreButton}>
                            <Button onClick={() => {
                                isHiddenReview ? setIsHiddenReview(false) : setIsHiddenReview(true);
                            }}><KeyboardArrowDownIcon /> 더보기</Button>
                        </Box>
                        <form
                            onSubmit={handleSubmit(addReview)}
                            className={classes.productReview}>
                            <span>이미 사용해 보셨나요? 리뷰를 남겨주세요!</span>
                            <Box className={classes.productRatingReview}>
                                <Box
                                    component="fieldset" mb={3} borderColor="transparent">
                                    <Rating
                                        className={classes.productRatingStar}
                                        name='rating'
                                        value={rating}
                                        onChange={(event, newValue) => {
                                            setRating(newValue);
                                        }}
                                    />
                                </Box>
                            </Box>
                            <TextField
                                inputRef={register}
                                name='comment'
                                id="outlined-multiline-static"
                                multiline
                                rows={3}
                                variant="outlined"
                            />
                            <Button
                                type='submit'
                            >리뷰 제출 하기</Button>
                        </form>
                    </Box>
                </Container>
                <Container className={classes.productBooking} >
                    <Card className={classes.productBookingCard}>
                        <CardContent className={classes.productBookingTitle}>
                            <p>
                                (액션캠) 고프로 히어로 세트
                            </p>
                        </CardContent>
                        <Box className={classes.productDivider}></Box>
                        <div className={classes.productCart}>
                            {

                                cart === null ?
                                    <Box className={classes.productCartTag}>
                                        <ShoppingCartIcon />
                                        <span > 장바구니가 비어있습니다.</span>
                                    </Box>
                                    :
                                    cart.length !== 0 ?
                                        cart.map((product, index) => {
                                            return <AddToCart
                                                key={index}
                                                image={product.image}
                                                title={product.title}
                                                price={product.price}
                                                quantity={product.quantity}
                                                removeToCart={removeToCart}
                                            />
                                        }) :
                                        <Box className={classes.productCartTag}>
                                            <ShoppingCartIcon />
                                            <span > 장바구니가 비어있습니다.</span>
                                        </Box>

                            }
                        </div>
                        <Box className={classes.productDivider}></Box>
                        <CardActions className={classes.productPayment}>
                            <Box className={classes.productPaymentPrice}>
                                <p>{cart === null ? 0 : getTotalPrice()}원</p>
                            </Box>
                            <Button
                                onClick={() => {
                                    isAuthenticated ? alert("결제하기") : alert("로그인을 해주세요.")
                                }}
                                className={classes.productPaymentButton}>
                                결제하기
                            </Button>
                        </CardActions>
                    </Card>
                </Container>
            </Box>
        </Page>
    )
} 