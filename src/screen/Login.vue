<template>
  <form>
    <h2 class="center">Login</h2>

    <label for="usuario">Usuário ou E-mail:</label>
    <input type="text" id="usuario" name="usuario" required />

    <label for="senha">Senha:</label>
    <input type="password" id="senha" name="senha" required />

    <button type="submit">Entrar</button>

    <button type="button"><router-link to="/">Cancelar</router-link></button>
  </form>
</template>

<script>
export default {
  name: "page-login",
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
}

form {
  max-width: 300px;
  margin: 0 auto;
}

label {
  display: block;
  margin-bottom: 8px;
}

input {
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
  box-sizing: border-box;
}

button {
  background-color: #4caf50;
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

.center {
  text-align: center;
}
</style>
