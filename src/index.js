import Swiper, { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles/main.scss";

new Swiper(".swiper--payment-form", {
  autoplay: {
    delay: 3500,
    disableOnInteraction: true
  },
  effect: "fade",
  mousewheel: true,
  pagination: {
    el: ".swiper--payment-form .swiper-pagination",
    clickable: true
  },
  modules: [Autoplay, EffectFade, Navigation, Pagination]
});

new Swiper(".swiper--payment-widget", {
  autoplay: {
    delay: 3500,
    disableOnInteraction: true
  },
  effect: "fade",
  mousewheel: true,
  pagination: {
    el: ".swiper--payment-widget .swiper-pagination",
    clickable: true
  },
  modules: [Autoplay, EffectFade, Navigation, Pagination]
});

new Swiper(".swiper--control-panel", {
  autoplay: {
    delay: 3500,
    disableOnInteraction: true
  },
  effect: "fade",
  mousewheel: true,
  pagination: {
    el: ".swiper--control-panel .swiper-pagination",
    clickable: true
  },
  modules: [Autoplay, EffectFade, Navigation, Pagination]
});

new Swiper(".swiper--admin", {
  autoplay: {
    delay: 3500,
    disableOnInteraction: true
  },
  effect: "fade",
  mousewheel: true,
  pagination: {
    el: ".swiper--admin .swiper-pagination",
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
      value: 14500,
      currency: "RUB"
    }
  });
});

document.getElementById("payment-widget-demo-btn").addEventListener("click", function () {

  new cpay.PaymentWidget().init({
    merchantId: "0f341032-d680-419a-8ac7-4d731801410e",
    invoice: {
      description: "test payment"
    },
    amount: {
      value: 14500,
      currency: "RUB"
    }
  });
});