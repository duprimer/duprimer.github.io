function saveChanges() {
    const novoCpf = document.getElementById('editCpf').value;
    const novoEmail = document.getElementById('editEmail').value;
    const novaInstituicao = document.getElementById('editInstituicao').value;
    const novoNome = document.getElementById('editNome').value;
    const novaSenha = document.getElementById('editSenha').value;
    const novaCidade = document.getElementById('editCidade').value;

    // Obtendo o ID do usuário atualmente em edição
    const userId = getUserId();

    // Verificando se o ID do usuário está disponível
    if (userId) {
        // Atualizando os dados do usuário existente no Firebase
        const usuarioRef = firebase.database().ref('usuarios/' + userId);
        usuarioRef.update({
            cpf: novoCpf,
            email: novoEmail,
            instituicao: novaInstituicao,
            nome: novoNome,
            senha: novaSenha,
            cidade: novaCidade
        })
        .then(() => {
            console.log('Alterações salvas com sucesso!');
            closeEditPopup(); // Fechando o popup após salvar as alterações
        })
        .catch(error => {
            console.error('Erro ao salvar as alterações:', error);
        });
    } else {
        console.error('ID do usuário não encontrado.'); // Exibindo um erro se o ID do usuário não estiver disponível
    }
}

