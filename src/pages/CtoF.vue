<template>
<div class="container">
  <h1 v-if='!isC'>華式:{{ f }}</h1>
  <h1 v-if='isC'>攝氏:{{ c }}</h1>
  <div class="c">
    <span v-show="!isC">°C</span>
    <span v-show="isC">°F</span>
    <input type="number" v-model="userInput"  />

  </div>
  <input id="toggleTemperature" type="checkbox" v-model="isC" />
  <label for="toggleTemperature">切換:{{ toggleTemperature }}</label>
<div>

  <button @click="temperatureConversio( userInput )">press</button>
</div>
</div>
</template>

<script>
export default {
  data() {
    return {
      userInput: 26,
      isC: false
    }
  },
  computed: {
    f() {
      return this.userInput * 9 / 5 + 32;
    },
    c() {
      return (this.userInput - 32) * 5 / 9;
    },
    toggleTemperature() {
      return this.isC ? "攝氏轉華氏" : "華氏轉攝氏";
    }
  },
  methods: {
    temperatureConversio(val) {
      if (this.isC) {
        alert('攝氏:' + this.c);
      } else {
        alert('華氏:' + this.f);
      }
      this.another();
    },
    another () {
      alert('yooooooooo!');
    }
  }
}
</script>



<style>
.c {
  font-size: 1.5em;
  font-style: normal;
  font-weight: bolder;
}
</style>
