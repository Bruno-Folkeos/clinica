<template>
  <form>
    <h2 class="center">Cadastro</h2>

    <label for="nome">Nome:</label>
    <input
      v-model="this.payload.params.args[5][0].name"
      type="text"
      id="nome"
      name="nome"
      required
    />
    <label for="email">E-mail:</label>
    <input type="email" id="email" name="email" required />
    <label for="senha">Senha:</label>
    <input
      v-model="this.payload.params.args[5][0].senha"
      type="password"
      id="senha"
      name="senha"
      required
    />

    <label for="genero">Gênero:</label>
    <select id="genero" name="genero">
      <option value="masculino">Masculino</option>
      <option value="feminino">Feminino</option>
      <option value="outro">Outros</option>
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
        params: {
          service: "object",
          method: "execute_kw",
          args: [
            "teste_cadastros",
            "2",
            "admin",
            "contatos",
            "create",
            [
              {
                name: "",
                senha: "",
              },
            ],
          ],
        },
      },
    };
  },
  methods: {
    async adicionarUser() {
      console.log();
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
