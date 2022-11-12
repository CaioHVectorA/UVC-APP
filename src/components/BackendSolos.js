function Solo(Nome,origin,desc) {
    this.nome = Nome
    this.origin = origin
    this.descricao = desc
}

let Ciecon = new Solo('Ciecon','S_CIEC','Entenda origem de Ciecon, o homem que ganhou um poder sobrenatural de forma abrupta e decide se tornar um Justiceiro Espacial.')
let Kerry = new Solo('Kerry','S_KER','A socidade destruiu a vida de Kerry. Mas quando ele se levanta,seu único desejo é a vingança.')
let Glacial = new Solo('O Glacial Fim do mundo','S_Glac','Cole Froz chega no planeta terra,e em poucas horas já causa problemas severos o suficiente para causar um apocalipse em todo o globo.')
let Punhomortal = new Solo('Punho Mortal','S_PM','Conheça a história de Naok, o Aedificante que se tornou um dos grandes Congregadores!')
let Hades = new Solo('Hades','S_HAD','Veja os objetivos malignos e a origem do grandioso e temido Hades,conhecido como o Demônio.')
export var AllSolos = []
AllSolos.push(Ciecon,Kerry,Glacial,Punhomortal,Hades)