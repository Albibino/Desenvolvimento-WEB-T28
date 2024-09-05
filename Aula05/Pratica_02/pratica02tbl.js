function notas() {
    const tabela = document.querySelector('table');
    const linhas = tabela.querySelectorAll('tr');

    const media_geral = document.querySelector('th.media');
    media_geral.style.display = 'table-cell';

    let som_nota_sem_1 = [0, 0, 0];
    let som_nota_sem_2 = [0, 0, 0];
    let som_nota_sem_3 = [0, 0, 0];
    let tot_aluno = 0;

    for (let i = 2; i < linhas.length; i++) {
        const celulas = linhas[i].querySelectorAll('td');
        let not_aluno = [];

        for (let j = 1; j < celulas.length - 1; j++) {
            const valor = parseFloat(celulas[j].textContent);
            if (!isNaN(valor)) {
                not_aluno.push(valor);
            }
        }

        const mediaSemestre1 = calc_media(not_aluno.slice(0, 3)); 
        const mediaSemestre2 = calc_media(not_aluno.slice(3, 6)); 
        const mediaSemestre3 = calc_media(not_aluno.slice(6, 9)); 

        const mediaFinal = calc_media([mediaSemestre1, mediaSemestre2, mediaSemestre3]);

        const celulaMedia = celulas[celulas.length - 1];
        celulaMedia.style.display = 'table-cell'; 
        celulaMedia.textContent = mediaFinal.toFixed(2); 

        som_nota_sem_1[0] += not_aluno[0];
        som_nota_sem_1[1] += not_aluno[1];
        som_nota_sem_1[2] += not_aluno[2];

        som_nota_sem_2[0] += not_aluno[3];
        som_nota_sem_2[1] += not_aluno[4];
        som_nota_sem_2[2] += not_aluno[5];

        som_nota_sem_3[0] += not_aluno[6];
        som_nota_sem_3[1] += not_aluno[7];
        som_nota_sem_3[2] += not_aluno[8];

        tot_aluno++;
    }

    media_nota(tabela, som_nota_sem_1, som_nota_sem_2, som_nota_sem_3, tot_aluno);
}

function calc_media(notas) {
    const soma = notas.reduce((total, nota) => total + nota, 0);
    return soma / notas.length;
}

function media_nota(tabela, somaSem1, somaSem2, somaSem3, tot_aluno) {
    const novaLinha = tabela.insertRow();

    const cel_head = novaLinha.insertCell(0);
    cel_head.colSpan = 2;
    cel_head.textContent = 'Média das Notas';

    for (let i = 0; i < 3; i++) {
        const mediaSem1 = (somaSem1[i] / tot_aluno).toFixed(2);
        const cel = novaLinha.insertCell();
        cel.textContent = mediaSem1;
    }

    for (let i = 0; i < 3; i++) {
        const mediaSem2 = (somaSem2[i] / tot_aluno).toFixed(2);
        const cel = novaLinha.insertCell();
        cel.textContent = mediaSem2;
    }

    for (let i = 0; i < 3; i++) {
        const mediaSem3 = (somaSem3[i] / tot_aluno).toFixed(2);
        const cel = novaLinha.insertCell();
        cel.textContent = mediaSem3;
    }

    const cel_vazia = novaLinha.insertCell();
    cel_vazia.className = 'media';
    cel_vazia.style.display = 'table-cell';
    cel_vazia.textContent = '';
}

document.getElementById('botao_media').addEventListener('click', notas);