function calcular(tipo,conteudo){
      console.log(tipo,conteudo)

      if (tipo == 'acao'){

          if (conteudo == 'c'){
            //limpar visor de resultado
            document.getElementById('resultado').value = ''
          }

          if (conteudo == '+' || conteudo == '-' || conteudo == '/' || conteudo == '*' || conteudo == '.'){
            document.getElementById('resultado').value += conteudo
          }

          if (conteudo == '='){
            //utilizando o eval para interpretar pelo javascript o resultado
            var conteudo_campo = eval(document.getElementById('resultado').value)

            //atualizando visor com o resultado obtido em conteudo_campo
            document.getElementById('resultado').value = conteudo_campo
          }


      }else if(tipo == 'valor'){
        document.getElementById('resultado').value += conteudo

      }
}
    