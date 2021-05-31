<template>
  <div class="main-view">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import './styles';

.main-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
}

html,
body {
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

input {
  border: none;
  border-bottom: 2px solid #17222e;
  color: #17222e;
  cursor: pointer;
  background: none;
}

button {
  border: none;
  cursor: pointer;
}

button:active,
button:focus,
input:focus,
input:active {
  outline: none;
}

button:-webkit-autofill,
button:-webkit-autofill:hover,
button:-webkit-autofill:focus,
button:-webkit-autofill:active,
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active  {
  -webkit-box-shadow: 0 0 0 30px white inset !important;
  line-height: 130%;
}

</style>
