let nomeDoAluno = prompt ('Qual seu nome');
let materia = prompt('Qual a materia');
let nota = prompt('Qual foi a nota')
let media =6 ;




if( Number (nota)>=media){
    alert (`Parabéns${nomeDoAluno} foi a provado em ${materia}`);

}
else if(Number(nota)>=media-0.5)
{ alert (`o aluno ${nomeDoAluno} foi aprovado ${materia} pelo sistema`);

}


else{
    alert(`Não foi dessa vez que você passou em  ${materia}`);
}
