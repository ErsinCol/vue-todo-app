<script setup>
import {useI18n} from "vue-i18n";
import {ref} from "vue";

const languageOptions = {
  'en': 'enOption',
  'tr': 'trOption',
};

const i18n = useI18n();

const selectedLanguage = ref(i18n.locale.value);
function changeLanguage() {
  i18n.locale.value = selectedLanguage.value;
}
</script>

<template>
  <div class="custom-select">
    <select v-model="selectedLanguage" @change="changeLanguage">
      <option v-for="(label, value) in languageOptions" :key="value" :value="value">{{ $t(label)}}</option>
    </select>
  </div>
</template>

<style scoped>
.custom-select {
  width: 10rem;
  position: relative;
}

select {
  appearance: none;
  -webkit-appearance: none;
  width: 100%;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  background-color: #fff;
  border: 1px solid #caced1;
  border-radius: 0.25rem;
  color: #000;
  cursor: pointer;
}

select:focus-visible{
  outline: none;
}

.custom-select::before,
.custom-select::after {
  --size: 0.4rem;
  content: "";
  position: absolute;
  right: 0.75rem;
  pointer-events: none;
}

.custom-select::after {
  border-left: var(--size) solid transparent;
  border-right: var(--size) solid transparent;
  border-top: var(--size) solid black;
  top: 40%;
}
</style>