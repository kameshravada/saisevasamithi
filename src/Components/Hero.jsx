// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import Header from "./Header";

// const slides = [
//   {
//     image: "../src/assets/images/slide1.jpg",
//     caption: "Serving Rural Communities",
//   },
//   {
//     image: "../src/assets/images/slide2.jpg",
//     caption: "Empowering Education",
//   },
//   {
//     image: "../src/assets/images/slide3.jpg",
//     caption: "Medical Camps and Healing Hands",
//   },
// ];

// const Hero=()=> {
//   return (
//     <div className="relative w-full h-[90vh]">
//       <Swiper
//         modules={[Navigation, Pagination, Autoplay]}
//         pagination={{ clickable: true,bulletElement: 'div' }}
//         loop={true}
//         autoplay={{ delay: 4000, disableOnInteraction: false }}
//         className="h-full "
//       >
//         {slides.map((slide, index) => (
//           <SwiperSlide key={index}>
//             <div className="relative w-full h-full">
//               <img
//                 src={slide.image}
//                 alt={slide.caption}
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute bottom-16 left-10 bg-black bg-opacity-50 text-white text-3xl p-4 rounded">
//                 {slide.caption}
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//         <SwiperSlide>
//             <Header/>
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// }

// export default Hero;