function Ato(...Args) {   
    this.Nome = Args[0]
          this.NumCapitulo = Args[1]
          this.NumEps = Args[2]
          this.Eps = Args[3]
          this.origin = Args[4]
      }
      export var RedRightHand = [
      new Ato('Primeiros Passos',1,5,['A Reunião','A Corrida Capitalista','Invasões','Brechas do Passado','Veredicto'],'RedRightHand'), 
      new Ato('Diplomacia Falsa',2,4,['Novos Conflitos','Ao Roubo','Ilusão','A Expedição'],'RedRightHand'),
      new Ato('A Guerra',3,4,['A','A','A','A'],'RedRightHand'),
      new Ato('Férias  Interrompidas',4,4,['A','A','A','A'],'RedRightHand'),
      new Ato('Expansão',5,4,['A','A','A','A'],'RedRightHand'),
      new Ato('A verdadeira Guerra',6,4,['A','A','A','A'],'RedRightHand'),
      ]
      export var DerooDaem = [
      new Ato('O Início',1,3,['Apresentação','Trabalho Sujo','O Concorrente'],'DerooDaem'),
      new Ato('Sistema Solar',2,3,['Meus Projetos','Element4is','Superiores acimas dos inferiores'],'DerooDaem'),
      new Ato('EM BREVE',3,3,['EM BREVE'],'DerooDaem'),
      new Ato('EM BREVE',4,3,['EM BREVE'],'DerooDaem'),
      new Ato('EM BREVE',5,3,['EM BREVE'],'DerooDaem'),
      ]
      export var Guardiões = [
      new Ato('Calouros',1,3,['EM BREVE'],'Guardiões'),
      new Ato('Apocalipse',2,3,['EM BREVE'],'Guardiões'),
      new Ato('O Fogo e o Trovão',3,3,['EM BREVE'],'Guardiões'),
      new Ato('Rebeldes',4,3,['EM BREVE'],'Guardiões'),
      new Ato('Antigo Conhecido',5,3,['EM BREVE'],'Guardiões'),
      new Ato('A Guerra contra o Demônio',6,3,['EM BREVE'],'Guardiões'),
      new Ato('A volta dos rebeldes',7,3,['EM BREVE'],'Guardiões'),
      new Ato('Poder,de verdade',7,3,['EM BREVE'],'Guardiões')
      ]
    export var AllAtos = []
    AllAtos.push(RedRightHand,DerooDaem,Guardiões)
