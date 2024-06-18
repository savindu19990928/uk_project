import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Testimonials = () => {
  return (
    <div className="col-md-7 col-lg-6">
      <div className="card border-0 bg-secondary py-1 p-lg-4">
        <div className="card-body">
          <Swiper
            spaceBetween={30}
            loop={true}
            navigation={{
              prevEl: '#prev-testimonial',
              nextEl: '#next-testimonial',
            }}
            modules={[Navigation]}
          >
            <SwiperSlide>
              <p className="lead text-dark pb-3 mb-3 textp">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et tempus erat, a vulputate dui. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut luctus molestie massa sit amet dapibus. Cras pulvinar lacinia sollicitudin malesuada vestibulum."
              </p>
              <div className="d-flex align-items-center">
                <img className="rounded-circle" src="assets/img/avatar/30.jpg" width="60" alt="Jenny Wilson" />
                <div className="ps-3">
                  <h3 className="h4 mb-0 textp">Jenny Wilson</h3>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <p className="lead text-dark pb-3 mb-3 textp">
                "Turpis augue pulvinar est adipiscing netus. Arcu at aliquet venenatis elementum. Mi at gravida id nullam imperdiet a proin dolor. Egestas facilisis venenatis quisque viverra donec et. Augue convallis eu a volutpat sed ullamcorper. At dictumst sapien, tristique vitae nec massa."
              </p>
              <div className="d-flex align-items-center">
                <img className="rounded-circle" src="assets/img/avatar/31.jpg" width="60" alt="Esther Howard" />
                <div className="ps-3">
                  <h3 className="h4 mb-0 textp">Esther Howard</h3>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <p className="lead text-dark pb-3 mb-3 textp">
                "Cursus fames sollicitudin nunc eget sceler tortor. Sem amet, velit posuere ipsum id. Mi feugiat at vulputate vel pellentesque proin viverra. Massa, tellus orci, aenean nulla leo maecenas sed. Magna at aliquam dictum velit dolor phasellus donec et mi. Aenean adipiscing amet mauris."
              </p>
              <div className="d-flex align-items-center">
                <img className="rounded-circle" src="assets/img/avatar/32.jpg" width="60" alt="Nick Wenirten" />
                <div className="ps-3">
                  <h3 className="h4 mb-0 textp">Nick Wenirten</h3>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="d-flex justify-content-center justify-content-md-start pt-4">
        <button className="btn btn-icon btn-sm btn-outline-primary rounded-circle me-3" type="button" id="prev-testimonial">
          <i className="ai-arrow-left"></i>
        </button>
        <button className="btn btn-icon btn-sm btn-outline-primary rounded-circle" type="button" id="next-testimonial">
          <i className="ai-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
