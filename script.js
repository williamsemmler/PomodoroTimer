const foco = 25
const pausaCurta = 5
const pausaLonga = 15

$(document).ready (() => {

    $('body').addClass('foco25');
    $('#minutos').html(foco);

    // Inserção das variáveis foco, pausaCurta e pausaLonga nos botões de controle
    $('#foco25').html(foco + ' minutos');
    $('#pausa5').html(pausaCurta + ' minutos');
    $('#pausa15').html(pausaLonga + ' minutos');

    // Inserção das variáveis foco, pausaCurta e pausaLonga no contador
    $('#foco25, #pausa5, #pausa15').on('click', (e) => {
        if (e.currentTarget['id'] == "foco25") {
            $('body').removeClass().addClass('foco25');
            $('#minutos').html(foco);
            pararContagem(foco);
        } else if (e.currentTarget['id'] == "pausa5") {
            $('body').removeClass().addClass('pausa5');
            $('#minutos').html(pausaCurta);
            pararContagem(pausaCurta)
        } else if (e.currentTarget['id'] == "pausa15") {
            $('body').removeClass().addClass('pausa15');
            $('#minutos').html(pausaLonga);
            pararContagem(pausaLonga)
        }
    })
    
    let intervalo; // Variável global para armazenar o intervalo
    $('#iniciarContagem').on('click', () => {
        let minutos = parseInt($('#minutos').text()); 
        let segundos = parseInt($('#segundos').text());

        intervalo = setInterval(() => {
            if (segundos == 0) {
                if (minutos == 0) {
                    clearInterval(intervalo); // Para o cronômetro quando ambos minutos e segundos forem 0
                    alert('O ciclo foi concluído')
                    
                    return;
                }
                minutos--;
                segundos = 59;
            } else {
                segundos--;
            }

            // Atualiza a interface
            $('#minutos').text(minutos);
            $('#segundos').text(segundos < 10 ? '0' + segundos : segundos);
            
        }, 1000);
    });

    $('#pausarContagem').on('click', () => {
        clearInterval(intervalo); // Pausa a contagem sem redefinir os eventos ou variáveis
    });

    $('#interrompeContagem').on('click', () => {
        if ($('body').hasClass('foco25')) {
            pararContagem(foco);
        } else if ($('body').hasClass('pausa5')) {
            pararContagem(pausaCurta);
        } else if ($('body').hasClass('pausa15')) {
            pararContagem(pausaLonga);
        }
        
    });

    function pararContagem (tempo) {
        clearInterval(intervalo); // Para a contagem
        $('#minutos').text(tempo); // Reseta os minutos para o valor correspondente
        $('#segundos').text('00'); // Reseta os segundos para 00
    }

})