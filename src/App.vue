<script setup lang="ts">
import { computed, onMounted, ref } from "vue"
import SelectedMode from "./components/SelectedMode.vue"
import RecommendItem from "./components/RecommendItem.vue"
import HelloWorld from "./components/HelloWorld.vue"
import modes from "./assets/data.ts"

const indexOfSelectedMode = ref(0)
const seeAll = ref(false)
const loading = ref(false)
const mainList = ref([])

const listToShow = computed(() =>
  !seeAll.value ? mainList.value.slice(0, 4) : mainList.value
)

const toggleShow = () => {
  seeAll.value = !seeAll.value
}

onMounted(() => {
  loading.value = true
  try {
    setTimeout(() => {
      mainList.value = modes
      loading.value = false
    }, 2000)
  } catch {
    console.error("Error")
  }
})
</script>

<template>
  <div class="loading" v-if="loading">
    <img
      src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExc3V5ejR4Y2Z4Z2JiY3pvNTV6M2t4a3ZoenJ6c3ozOWtncXU1NGpoZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/wNiTFhWCdlC8g/giphy.gif"
      alt=""
      class="loading__img"
    />
  </div>
  <div v-else>
    <div>
      <SelectedMode :selected-mode="modes[indexOfSelectedMode]" />
    </div>
    <div>
      <div class="recommend-see-all">
        <h2 class="recommend-see-all__rec">Recommend</h2>
        <div class="recommend-see-all__see-btn" @click="toggleShow">
          {{ seeAll ? "Hide" : "See all" }}
        </div>
      </div>
      <div class="recommend-list">
        <div v-for="(recItem, index) in listToShow" :key="recItem.name">
          <RecommendItem :mode="recItem" @click="indexOfSelectedMode = index" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.loading {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  &__img {
    border-radius: 1rem;
  }
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.recommend-see-all {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  &__see-btn {
    cursor: pointer;
  }
}
.recommend-list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px 20px;
  grid-template-areas:
    ". . . ."
    ". . . ."
    &__rec {
    font-family: Yantramanav;
    font-size: 36px;
    align-items: center;
    font-weight: 400;
    line-height: 42px;
    text-align: left;
  }
}
</style>
