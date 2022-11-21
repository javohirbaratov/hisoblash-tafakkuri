import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {  Link } from "react-router-dom";
import palette from './img/color-palette.png';
import book from './img/book.png';
import collective from './img/collective.png';
// import youTube from './img/you-tube.png'
import 'boxicons';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

export default function Swipper() {
	let iconStyles = { color: "#00BBF9", fontSize: "1.5em"};
  return (

    <div className="container">
		
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        loop={true}
		slidesPerGroup={2}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
		breakpoints={{
			0:{
				slidesPerView:1,
				slidesPerGroup: 1,
			},
			850 : {
				slidesPerView:2,
				slidesPerGroup: 2,
			}
		  }}
        className="mySwiper"
      >
        <SwiperSlide> 
			<div className="card  swiper-slide">
				<div className="card__title flex">
					<div className="title">
						<h1>Umumiy ma'lumotlar</h1>
					</div>
				</div>
				<div className="card__img yelloww flex">
					<div className="card__img-title flex">
						<h2>Umumiy ma'lumotlar</h2>
						<p>Fan buyicha</p>
						<Link to="/information" className="starting">
							<div className="button__starting flex">
								<div className="icon__box flex">
									<box-icon name='chevron-right'></box-icon>
								</div>
								<p>Ko'rish</p>
							</div>
						</Link>
					</div>
					<div className="card__img-icon grid">
						<div className="icon__box light-salmon flex">
							<img src={palette}/>
						</div>
						<div className="icon__box flex blue">
							<img src={book}/>
						</div>
						<div className="icon__box flex yellow">
							<img src={collective}/>
						</div>
						
					</div>
				</div>
				<div className="card__description grid">
					<Link to="/theme">
						<div className="card__description-item flex">
							<box-icon color="#00BBF9" type='solid' name='badge-check'></box-icon>
							<p>Maruzalar matni</p>
						</div>
					</Link>
					<Link to="presentation">
						<div className="card__description-item card__description-item-2 flex">
							<box-icon color="#00BBF9" type='solid' name='badge-check'></box-icon>
							<p>Taqtimotlar</p>
						</div>
					</Link>
					<Link to="exercises">
						<div className="card__description-item card__description-item-3 flex">
							<box-icon color="#00BBF9" type='solid' name='badge-check'></box-icon>
							<p>Amaliy mashg'lotlar</p>
						</div>
					</Link>
				</div>
			</div>
        </SwiperSlide>

		<SwiperSlide>
			<div className="card swiper-slide">
				<div className="card__title flex">
					<div className="title">
						<h1>Hisoblash tafakkuri</h1>
					</div>
				</div>
				<div className="card__img purple flex">
					<div className="card__img-title flex">
						<h2>Hisoblash tafakkuri</h2>
						<p>Jami 100 ball</p>
						<Link to="/select" className="starting">
							<div className="button__starting flex">
								<div className="icon__box flex">
									<box-icon name='chevron-right'></box-icon>
								</div>
								<p>Ko'rish</p>
							</div>
						</Link>
					</div> 
					<div className="card__img-icon grid">
						<div className="icon__box light-salmon flex">
							<img src={palette}/>
						</div>
						<div className="icon__box flex blue">
							<img src={book}/>
						</div>
						<div className="icon__box flex yellow">
							<img src={collective}/>
						</div>
						
					</div>
				</div>
				<div className="card__description grid">
					<Link to="/select">
						<div className="card__description-item flex">
							<box-icon color="#00BBF9" type='solid' name='badge-check'></box-icon>
							<p>Test (30 ball) 20 ta savol</p>
						</div>
					</Link>
					<Link to="/select">
						<div className="card__description-item card__description-item-2 flex">
							<box-icon color="#00BBF9" type='solid' name='badge-check'></box-icon>
							<p>Mantiqiy savollar (20 ball) 10 ta</p>
						</div>
					</Link>
					<Link to="/select">
						<div className="card__description-item card__description-item-3 flex">
							<box-icon color="#00BBF9" type='solid' name='badge-check'></box-icon>
							<p>Hisoblash tafakkuri (50 ball) 10 ta savol</p>
						</div>
					</Link>
					
				</div>
			</div> 
		</SwiperSlide>
        
		<SwiperSlide>
			<div className="card swiper-slide">
				<div className="card__title flex">
					<div className="title">
						<h1>Multimedia</h1>
					</div>
				</div>
				<div className="card__img green flex">
					<div className="card__img-title flex">
						<h2>Multimedia</h2>
						<p>You tube</p>
						<Link to="/select" className="starting">
							<div className="button__starting flex">
								<div className="icon__box flex">
									<box-icon name='chevron-right'></box-icon>
								</div>
								<p>Ko'rish</p>
							</div>
						</Link>
					</div> 
					<div className="card__img-icon-you flex">
						{/* <img src={youTube}/> */}
					</div>
				</div>
				<div className="card__description grid">
					<Link to="/">
						<div className="card__description-item flex">
							<box-icon color="#00BBF9" type='solid' name='badge-check'></box-icon>
							<p>Vedio qulanma test rejimida</p>
						</div>
					</Link>
					<Link to="/">
						<div className="card__description-item card__description-item-2 flex">
							<box-icon color="#00BBF9" type='solid' name='badge-check'></box-icon>
							<p>Vedio malumot test rejimida</p>
						</div>
					</Link>
					<Link to="/">
						<div className="card__description-item card__description-item-3 flex">
							<box-icon color="#00BBF9" type='solid' name='badge-check'></box-icon>
							<p>Vedio dars test rejimida</p>
						</div>
					</Link>
					
				</div>
			</div> 
		</SwiperSlide>
      </Swiper>
    </div>
  );
}
