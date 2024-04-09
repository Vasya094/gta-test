<template>
  <div class="mod-card">
    <div class="mod-card__image" :id="mode.name">
      <div class="mod-card__tags-container">
        <span class="mod-card__tag">
          <img class="mod-card__tag-icon" src="./../assets/tag.svg" alt="" />
          fivemods+</span
        >
        <span class="mod-card__tag">
          <img class="mod-card__tag-icon" src="./../assets/tag.svg" alt="" />
          sky</span
        >
        <span class="mod-card__tag">
          <img class="mod-card__tag-icon" src="./../assets/tag.svg" alt="" />
          textures</span
        >
      </div>
      <div v-if="mode.isHot" class="mod-card__hot">
        <img src="./../assets/hot.svg" alt="" />
      </div>
      <div v-if="mode.isNew" class="mod-card__new">
        <img src="./../assets/new.svg" alt="" />
      </div>
    </div>
    <div class="mod-card__footer">
      <span>
        <img src="./../assets/download.svg" alt="" />
        {{ mode.dowloads }}
      </span>
      <img src="./../assets/favorite.svg" alt="" />
    </div>
    <div class="mod-card__name">
      <h3 class="mod-card__name-header">{{ mode.name }}</h3>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";

const props = defineProps<{ mode: ModeType }>();

const bgIm = computed(() => `url('${props.mode.images[0]})'`);

onMounted(() => {
  const element = document.getElementById(props.mode.name);
  element.style.backgroundImage = `url(\'${props.mode.images[0]}\')`;
});
</script>

<style lang="scss">
.mod-card {
  height: 11rem;
  border-radius: 16px;
  cursor: pointer;

  &__image {
    height: 11rem;
    border-radius: 12px;
    background-size: cover;
    background-repeat: no-repeat;
  }

  &__name {
    text-align: left;
    bottom: 1.5rem;
    position: relative;
  }

  &__name-header {
    margin-top: 0;
    font-size: 26px;
    font-weight: 400;
    line-height: 32px;
    text-align: left;
  }

  &__tag {
    background: #071525;
    border-radius: 32px;
    font-size: 13px;
    margin-left: 2px;
    margin-right: 2px;
    padding: 4px 10px 4px 8px;
  }

  &__tag-icon {
    position: relative;
    top: 2px;
  }

  &__hot,
  &__new {
    position: relative;
    left: 128px;
    bottom: 45px;
  }

  &__tags-container {
    display: flex;
    flex-direction: row;
    padding: 8px;
  }

  &__footer {
    display: flex;
    justify-content: space-between;
    position: relative;
    bottom: 2rem;
    padding: 0 8px;
  }
}
</style>
