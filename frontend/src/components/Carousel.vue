<template lang="">
    <div>
        <div
      id="carouselExampleIndicators"
      
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div
        id="carouselExampleIndicators"
        class="carousel slide mb-5"
        data-bs-ride="carousel"
      >
        <h2
          class="testi-review"
          style="margin-top: 5rem; text-align: center; margin-bottom: 8px !important"
        >
          REAL PEOPLE, REAL REVIEWS
        </h2>
        <p class="stars" style="font-size: 40px;text-align: center; color: gold">
          &#x2605;&#x2605;&#x2605;&#x2605;&#x2605;
        </p>

        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <h3
              style="color: #484848; margin-right: 23rem"
              class="line-heading"
            >
              Selena Gomez
            </h3>

            <p
              class="single-testimonial-item w-70 mx-auto"
              style="height: 160px; width: 46rem"
            >
              Smooth and thick on the skin, good deep hydration, not leaving a
              trace of greece behind. I love it! My skin is very dry, itchy with
              ashy elbows dry finger nails, fruity buns with a bit of a itch and
              this serum does a perfect job of deep hydration on my skin. Feels
              thick, smooth. I highly recommend!!
              <span class="customer-fam" style="margin: 4rem">Customer</span>
            </p>
          </div>
          <div class="carousel-item">
            <h3
              style="color: #484848; margin-right: 23rem"
              class="line-heading"
            >
              Ariana Grande
            </h3>

            <p
              class="single-testimonial-item w-70 mx-auto"
              style="height: 160px; width: 46rem"
            >
              The online store has a great layout. I can search by brand,
              skin-type and category which is makes navigating so easy!! They
              carry more brands than other Korean skincare online stores.
              Products are well-described and I love the blogs too! Delivery is
              fast. I most definitely shop here again.
              <span class="customer-fam" style="margin: 4rem">Customer</span>
            </p>
          </div>
          <div class="carousel-item">
            <h3
              style="color: #484848; margin-right: 23rem"
              class="line-heading"
            >
              Cardi Belcalis
            </h3>
            <p
              class="single-testimonial-item w-70 mx-auto"
              style="height: 160px; width: 46rem"
            >
              Ran out of my Korean skincare and Skin Theory had a selection (&
              more) of what I was looking for. Price of products are affordable.
              Delivery was very quick and was pleasantly surprised at the
              generosity of samples. Will definitely return to order more. This
              products leave my skin even more radiant.
              <span class="customer-fam" style="margin: 4rem">Customer</span>
            </p>
          </div>
          <div class="carousel-item">
            <h3
              style="color: #484848; margin-right: 23rem"
              class="line-heading"
            >
              Nicki Minaj
            </h3>
            <p
              class="single-testimonial-item w-70 mx-auto"
              style="height: 160px; width: 46rem"
            >
              First time online shopping with Skin Theory was great! Wide range
              of k-beauty products, very user friendly and simple shopping
              process, and loved the many lovely free samples that came along
              with my purchases. Will definitely be using Skin Theory again for
              my next k-beauty fix! I am just amazed overall!
              <span class="customer-fam" style="margin: 4rem">Customer</span>
            </p>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <!-- End of slideshow -->
    </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    /* Slide Prods */

 




/* css for carousel */



.section-padding {
  padding: 80px 0 !important;
}

.section-title {
  text-align: center !important;
  margin-top: 10rem !important;
}

.section-borders span {
  height: 5px !important;
  background: #faaa94 !important;
  width: 40px !important;
  display: inline-block !important;
  border-radius: 2px !important;
}

.section-borders span.black-border {
  background: #333 !important;
  width: 30px !important;
  margin: 0 6px !important;
}

.client-testimonial-carousel .owl-dots button {
  height: 5px !important;
  background: #faaa94 !important;
  width: 20px !important;
  display: inline-block !important;
  margin: 5px !important;
  transition: 0.2s !important;
  border-radius: 2px !important;
}

.client-testimonial-carousel button.owl-dot.active {
  background: #333 !important;
  width: 30px !important;
}

.client-testimonial-carousel .owl-dots {
  text-align: center !important;
  margin-top: 25px !important;
}

.single-testimonial-item {
  position: relative !important;
  box-shadow: 0 0 6px #dadfd3 !important;
  padding: 20px !important;
  font-style: italic !important;
  padding-left: 85px !important;
}

.single-testimonial-item:before {
  font-family: "Font Awesome 5 Free" !important;
  content: "\f10e" !important;
  font-weight: 900 !important;
  position: absolute !important;
  left: 20px !important;
  top: 50% !important;
  font-size: 20px !important;
  color: rgba(0, 0, 0, 0.676) !important;
  line-height: 30px !important;
  margin-top: -15px !important;
}

.single-testimonial-item:after {
  background: #ddd !important;
  content: "" !important;
  height: 70% !important;
  left: 60px !important;
  position: absolute !important;
  top: 10% !important;
  width: 1px !important;
}

.single-testimonial-item h3 {
  font-size: 20px !important;
  font-style: normal !important;
  margin-bottom: 0 !important;
}

.single-testimonial-item h3 span {
  display: block !important;
  font-size: 12px !important;
  font-weight: normal !important;
  margin-top: 5px !important;
}
/* end of carousel */

/* footer */
.text-reset {
  text-decoration: none !important;
  color: #484848 !important;
}

.text-uppercase {
  color: black !important;
}
/* end of footer */

/* about */
strong {
  color: black !important;
  font-family: "Caveat", cursive !important;
  font-family: "Poppins", sans-serif !important;
}

span {
  color: grey !important;
  font-family: "Caveat", cursive !important;
  font-family: "Poppins", sans-serif !important;
}
/* about end */

#carouselExampleIndicators {
  margin-top: 10rem !important;
  justify-content: center !important;
}
.line-heading{
  text-align: center;
}
</style>