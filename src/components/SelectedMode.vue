<script lang="ts" setup>
import ImagesOfSelectedMode from "./../components/ImagesOfSelectedMode.vue"
import { ModeType } from "./../types/index"

defineProps<{ selectedMode: ModeType }>()
</script>

<template>
  <div class="selected-mode">
    <div class="selected-mode__images">
      <ImagesOfSelectedMode :images="selectedMode.images" />
    </div>
    <div class="selected-mode__info">
      <div>
        <h1 class="selected-mode__name">{{ selectedMode.name }}</h1>
      </div>
      <div>
        <p class="selected-mode__description">
          Description: {{ selectedMode.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.read-the-docs {
  color: #888;
}

.selected-mode {
  display: flex;
  flex-direction: row;

  &__images {
    width: 50%;
    margin-right: 1rem;
  }
  &__info {
    width: 50%;
    margin-left: 1rem;
    text-align: left;
    align-content: center;
  }
}
</style>
