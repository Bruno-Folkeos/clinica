import axios from "axios";

const CADASTRACLIENT = "/clientes/cadastrarCliente";

const http = axios.create({
  baseURL: "https://ba7b-186-195-155-2.ngrok-free.app/",
});
//End Points

const registerUser = async (payload) => {
  try {
    await http.post(CADASTRACLIENT, { ...payload });

    return true;
  } catch (error) {
    alert(error.message);
  }
};

export { registerUser };
