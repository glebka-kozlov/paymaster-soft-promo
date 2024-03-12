import Swiper, { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles/main.scss";

new Swiper(".swiper--payment-form", {
  autoplay: {
    delay: 2500,
    disableOnInteraction: true
  },
  effect: "fade",
  pagination: {
    el: ".swiper--payment-form .swiper-pagination",
    clickable: true
  },
  modules: [Autoplay, EffectFade, Navigation, Pagination]
});

document.getElementById("payment-form-demo-btn").addEventListener("click", function () {

  new cpay.PaymentWidget().init({
    merchantId: "faf66a66-d7a0-4040-8347-49b7e32f1fdd",
    invoice: {
      description: "test payment"
    },
    amount: {
      value: 15145,
      currency: "RUB"
    }
  });
});

new Swiper(".swiper--payment-widget", {
  autoplay: {
    delay: 2500,
    disableOnInteraction: true
  },
  effect: "fade",
  // navigation: {
  //   nextEl: ".swiper--payment-widget .swiper-button-next",
  //   prevEl: ".swiper--payment-widget .swiper-button-prev",
  // },
  pagination: {
    el: ".swiper--payment-widget .swiper-pagination",
    clickable: true
  },
  modules: [Autoplay, EffectFade, Navigation, Pagination]
});

document.getElementById("payment-widget-demo-btn").addEventListener("click", function () {

  new cpay.PaymentWidget().init({
    merchantId: "0f341032-d680-419a-8ac7-4d731801410e",
    invoice: {
      description: "test payment"
    },
    amount: {
      value: 15145,
      currency: "RUB"
    }
  });
});