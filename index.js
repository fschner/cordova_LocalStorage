//evento salvar
$("#salvar1").on("click", function () {
    let nome = $("#nome_form1").val();

    if (nome.length == 0 || nome == "") {
        app.dialog.alert('Por favor, digite algum nome!', function() {
            $("#nome_form1").focus();
        });
    }else{
        //Salvar o nome no localstorage
        localStorage.setItem('nome', nome);
        app.dialog.alert('<strong>Salvo com Sucesso!!</strong');
    }
        });

// Puxar ultimo

$("#puxar1").on("click", function(){
    //recuperar valor
    let nome = localStorage.getItem("nome");
    //verificar se possui algum dado no localstorage
    if(nome =="" || nome.length === 0){
        app.dialog.alert('Nenhum dado armazenado no localStorage')

    }else{
        //mostrar o valor
        app.dialog.alert(`O último salvo foi: <strong>${nome}</strong>`)
    }
})
