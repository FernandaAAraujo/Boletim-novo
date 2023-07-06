function recebeNota(nota1, nota2, nota3) {
    var nota1 = Number(prompt("Digite a primeira nota:"));
    var nota2 = Number(prompt("Digite a segunda nota:"));
    var nota3 = Number(prompt("Digite a terceira nota:"));
  
    // console.log(nota1, nota2, nota3);
  }
  
  function calculaNota(nota1, nota2, nota3) {
    var primeiraNota = nota1;
    var segundaNota = nota2;
    var terceiraNota = nota3;
  
    var media = (primeiraNota + segundaNota + terceiraNota) / 3;
  
    return media;
  }
  
  function resultado(media) {
    if (media >= 7) {
      console.log("Aprovado!");
    } else {
      console.log("Reprovado!");
    }
  }
  
  // resultado();