
const firebaseConfig = {
        apiKey: "AIzaSyD26pWZ9AMYoisXfrtm7038K2SuuXuWkr8",
        authDomain: "glor-ae49f.firebaseapp.com",
        databaseURL: "https://glor-ae49f-default-rtdb.firebaseio.com",
        projectId: "glor-ae49f",
        storageBucket: "glor-ae49f.appspot.com",
        messagingSenderId: "677710403853",
        appId: "1:677710403853:web:f67284b068399eebb97844"
    };

    const app = firebase.initializeApp(firebaseConfig);
    const db = firebase.database();


function saveChanges() {
    const key = document.getElementById('editKey').value;
    const user = {
        cpf: document.getElementById('editCpf').value,
        email: document.getElementById('editEmail').value,
        instituicao: document.getElementById('editInstituicao').value,
        nome: document.getElementById('editNome').value,
        senha: document.getElementById('editSenha').value,
        telefone: document.getElementById('editTelefone').value
    };
    db.ref("usuarios/" + key).update(user)
        .then(() => {
            console.log("Usuário atualizado com sucesso.");
            closeEditPopup();
            getAllDataOnce();
        })
        .catch(error => {
            console.error("Erro ao atualizar o usuário:", error.message);
        });
}