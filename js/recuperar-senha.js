import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js';
import { getAuth, sendPasswordResetEmail } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js';

document.getElementById('form-recuperar-senha').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário padrão

    const email = document.getElementById('email').value;

    const firebaseConfig = {
        // Sua configuração do Firebase aqui
        apiKey: "AIzaSyD26pWZ9AMYoisXfrtm7038K2SuuXuWkr8",
authDomain: "glor-ae49f.firebaseapp.com",
databaseURL: "https://glor-ae49f-default-rtdb.firebaseio.com",
projectId: "glor-ae49f",
storageBucket: "glor-ae49f.appspot.com",
messagingSenderId: "677710403853",
appId: "1:677710403853:web:f67284b068399eebb97844"
    };

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    sendPasswordResetEmail(auth, email)
        .then(() => {
            // Redireciona o usuário para uma página de confirmação ou exibe uma mensagem de sucesso
            alert('Email de redefinição de senha enviado com sucesso para:', email);
           
        })
        .catch((error) => {
            // Exibe uma mensagem de erro para o usuário, se necessário
            console.error('Erro ao enviar email de redefinição de senha:', error.message);
        });
});
