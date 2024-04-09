<template>
  <div class="image-selector">
    <swiper
      class="image-selector__selected"
      :style="{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff',
      }"
      :modules="modules"
      :space-between="10"
      :navigation="true"
      :thumbs="{ swiper: thumbsSwiper }"
    >
      <swiper-slide
        v-for="image in images"
        :key="image.id"
        class="image-selector__selected-image"
      >
        <img :src="image" />
      </swiper-slide>
    </swiper>
    <swiper
      class="image-selector__items-list"
      :modules="modules"
      :space-between="10"
      :slides-per-view="4"
      :watch-slides-progress="true"
      :prevent-clicks="false"
      :prevent-clicks-propagation="false"
      @swiper="setThumbsSwiper"
    >
      <swiper-slide
        v-for="image in images"
        :key="image.id"
        class="image-selector__item"
      >
        <img class="image-selector__item-image" :src="image" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, ref } from "vue"
import { Navigation, Thumbs } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/vue"
import type SwiperClass from "swiper"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/thumbs"

interface Props {
  images: Image[]
}

const props = defineProps<Props>()
const modules = [Navigation, Thumbs]

const thumbsSwiper = ref<SwiperClass>()
const setThumbsSwiper = (swiper: SwiperClass) => {
  thumbsSwiper.value = swiper
}
</script>

<style lang="scss">
.image-selector {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__selected {
    height: 20rem;
    width: 100%;
    border-radius: 24px;
    margin-bottom: 1rem; /* Adjust spacing as needed */
  }

  &__selected-image {
    width: 100%; /* Adjust width as needed */
    height: 100%; /* Adjust height as needed */
    object-fit: cover; /* Optional: Control image scaling */
  }

  &__items-list {
      height: 95px;
  }
  
  &__item {
      background-color: inherit;
  }

  &__item-image {
    width: 160px; /* Adjust width as needed */
    object-fit: cover; /* Optional: Control image scaling */
    cursor: pointer;
    border-radius: 8px;
  }
}

</style>
