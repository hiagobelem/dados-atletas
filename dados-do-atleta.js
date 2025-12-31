class Atleta {
    constructor(nome, idade, peso, altura, notas) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }

    calculaCategoria() {
        switch(true) {
            case (this.idade >= 9 && this.idade <= 11):
                return "Infantil";
            case (this.idade === 12 || this.idade === 13):
                return "Juvenil";
            case (this.idade === 14 || this.idade ===  15):
                return "Intermediário";
            case (this.idade >= 16 && this.idade <= 30):
                return "Adulto";
            default:
                return "Sem categoria";
        }
    }

    calculaIMC() {
        let imc = this.peso / (this.altura * this.altura);
        return imc;
    }

    calculaMediaValida() {
        let notasOrganizadas = this.notas.sort((a, b) => a - b);
        let notasComputadas = notasOrganizadas.slice(1, 4);

        let soma = 0;
        notasComputadas.forEach((nota) => {
        soma += nota;
        });
        return soma / notasComputadas.length;
    }

    obtemNomeAtleta() {
        return this.nome;
    }

    obtemIdadeAtleta() {
        return this.idade;
    }

    obtemPesoAtleta() {
        return this.peso;
    }

    obtemAlturaAtleta() {
        return this.altura;
    }

    obtemNotasAtleta() {
        return this.notas;
    }

    obtemCategoria() {
        return this.calculaCategoria();
    }

    obtemIMC() {
        return this.calculaIMC();
    }

    obtemMediaValida() {
        return this.calculaMediaValida();
    }
    
}

const atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);


let dadosAtleta = `Nome: ${atleta.obtemNomeAtleta()}
Idade: ${atleta.obtemIdadeAtleta()}
Peso: ${atleta.obtemPesoAtleta()}
Altura: ${atleta.obtemAlturaAtleta()}
Notas: ${atleta.obtemNotasAtleta().join(", ")}
Categoria: ${atleta.obtemCategoria()}
IMC: ${atleta.obtemIMC()}
Média Válida: ${atleta.obtemMediaValida()}`;

console.log(dadosAtleta);