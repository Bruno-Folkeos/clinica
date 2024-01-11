<template>
  <form>
    <h2 class="center">Cadastro</h2>

    <label for="nome">Nome:</label>
    <input
      v-model="this.payload.nome"
      type="text"
      id="nome"
      name="nome"
      required
    />
    <label for="email">E-mail:</label>
    <input
      v-model="payload.email"
      type="email"
      id="email"
      name="email"
      required
    />
    <label for="senha">Senha:</label>
    <input
      v-model="this.payload.senha"
      type="password"
      id="senha"
      name="senha"
      required
    />

    <label for="genero">Gênero:</label>
    <select v-model="payload.genero" id="genero" name="genero">
      <option value="m">Masculino</option>
      <option value="f">Feminino</option>
      <option value="o">Outros</option>
    </select>

    <button @click="adicionarUser()" type="button">Cadastrar</button>

    <button type="button"><router-link to="/">Cancelar</router-link></button>
  </form>
</template>

<script>
import router from "@/routes/router";
import { registerUser } from "@/services/index";

export default {
  name: "page-register",
  data() {
    return {
      payload: {
        nome: "",
        email: "",
        senha: "",
        genero: "",
      },
    };
  },
  methods: {
    async adicionarUser() {
      const response = await registerUser(this.payload);

      if (response == true) {
        router.push("/login");
        alert("Sucess");
      }
    },
  },
  watch: {},
  mounted() {},
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
}

form {
  max-width: 400px;
  margin: 0 auto;
}

label {
  display: block;
  margin-bottom: 8px;
}

input,
select {
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
