

const fecharPopupButton = document.getElementById('fecharPopupButton');

// Adicionando um ouvinte de evento de clique ao botão
fecharPopupButton.
fecharPopu
addEventListener('click', function() {
    
    closeEditPopu
closeEditPopup(); // Chamando a função closeEditPopup() quando o botão for clicado
});



import { getAuth, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js';
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getDatabase, ref, get } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyD26pWZ9AMYoisXfrtm7038K2SuuXuWkr8",
  authDomain: "glor-ae49f.firebaseapp.com",
  databaseURL: "https://glor-ae49f-default-rtdb.firebaseio.com",
  projectId: "glor-ae49f",
  storageBucket: "glor-ae49f.appspot.com",
  messagingSenderId: "677710403853",
  appId: "1:677710403853:web:f67284b068399eebb97844"
};
const app = initializeApp(firebaseConfig);
const db = getDatabase();