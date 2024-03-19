import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";
import { Rating } from "@mui/material";
import Avatar from "../../assets/images/doctor03.jpg";
const testimonials = [
  {
    photo: Avatar,
    name: "John Doe",
    desc: "The whole staff was outstanding from the doctors to the follow-up. They provide the best medical services",
    rating: 4,
  },
  {
    photo: Avatar,
    name: "John Doe",
    desc: "The whole staff was outstanding from the doctors to the follow-up. They provide the best medical services",
    rating: 4,
  },
  {
    photo: Avatar,
    name: "John Doe",
    desc: "The whole staff was outstanding from the doctors to the follow-up. They provide the best medical services",
    rating: 4,
  },
  {
    photo: Avatar,
    name: "John Doe",
    desc: "The whole staff was outstanding from the doctors to the follow-up. They provide the best medical services",
    rating: 4,
  },
  {
    photo: Avatar,
    name: "John Doe",
    desc: "The whole staff was outstanding from the doctors to the follow-up. They provide the best medical services",
    rating: 4,
  },
];

const TestimonialsSection = () => {
  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={1}
      slidesPerView={1}
      pagination={{ clickable: true }}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
    >
      {testimonials.map((item) => (
        <SwiperSlide>
          <div className="px-5 rounded-3 my-24">
            <div className="flex items-center h-auto">
              <div className="relative px-5 text-center py-8 bg-white shadow-md rounded-md">
                <div className="absolute top-[-5%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-16 w-16 rounded-full border-2 border-white">
                  <img
                    src={item.photo}
                    alt={item.name}
                    className="h-full w-full object-cover rounded-full "
                  />
                </div>
                <p className="text-heading">{item.name}</p>
                <Rating value={item.rating} />
                <p>{item.desc}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialsSection;
