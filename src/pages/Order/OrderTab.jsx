import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import MenuCart from '../../components/MenuCart/MenuCart';

const OrderTab = ({ items }) => {
    const pagination = {
        clickable: true,
        el: ".custom-pagination", // Custom pagination container
        renderBullet: function (index, className) {
            return (
                `<span class="${className} circle-pagination">${index + 1}</span>`
            );
        },
    };

    // Split items into chunks of 6
    const itemsPerPage = 6;
    const chunkedItems = [];
    for (let i = 0; i < items.length; i += itemsPerPage) {
        chunkedItems.push(items.slice(i, i + itemsPerPage));
    }

    return (
        <div>
            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            >
                {
                    chunkedItems.map((chunk, index) => (
                        <SwiperSlide key={index}>
                            <div className="grid md:grid-cols-3 gap-10 px-4 max-w-5xl mx-auto">
                                {chunk.map(item => (
                                    <MenuCart
                                        key={item._id}
                                        item={item}
                                    />
                                ))}
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>

            {/* Custom Pagination Container */}
            <div className="custom-pagination text-center mt-4"></div>
        </div>
    );
};

export default OrderTab;
