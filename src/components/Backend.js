function hist(nome,tipo,local,descricao,img) {
  this.nome = nome;
  this.tipo = tipo.toUpperCase();
  this.local = local.toUpperCase();
  this.descricao = descricao;
  this.img = '/imgs/' + img
}
var MR = new hist(
  'Menino Resiliente',
  'Series',
  'Terra',
  'Conheça a trama de Larry,o menino que ganhou um poder espontaneamente que mudaria completamente sua vida.',
  'MR.png'
  )
var Ciec = new hist('Ciecon','SOLOS','Universal','Entenda a Origem de Ciecon,que ganhou um poder sobrenatural e decide que irá entregar sua vida para salvar o universo.','Ciecon.jpg')
var Kerry = new hist('Kerry','SOLOS','TERRA','O Sistema destruiu a vida de Kerry. Mas quando ele se levanta,seu único desejo é a vingança.','Kerry.png')
var Guard = new hist('Guardiões','series','TERRA','Se aprofunde na história da nascença dos lendários heróis de Beatus.','Guard.png')
var Glac = new hist('O Glacial Fim do mundo','Solos','Terra','Cole Froz chega no planeta terra,e em poucas horas já causa problemas severos o suficiente para causar um apocalipse em todo o globo.','Glac.png')
var Hades = new hist('Hades','Solos','Universal','Veja os objetivos malignos e a origem do grandioso e temido Hades,conhecido como o Demônio.','HADES.png')
var PunhoMortal = new hist('Punho Mortal','Solos','Conheça a história de Naok, o Aedificante que se tornou um dos grandes Congregadores!.','Punho Mortal.png')
var RRH = new hist('Red Right Hand','Series','Universal','Se aprofunda na equipe Red Right Hand,que juntando as forças dos 5 superpoderosos,pretendem dominar todo o universo!','RRH 2.png')
var DD = new hist('Deroo Da no espaço','Series','Universal','Veja a narrativa de Deroo Da em seu próprio diário,acompanhando a visão do intelectual.','Deroo Da em.png')



export const AllHists = [Ciec,Kerry,Guard,Glac,Hades,PunhoMortal,RRH,DD,MR]
export const LeiaAgora = [Ciec,Kerry,MR,Glac]
export const Solos = []
export const Series = []
AllHists.forEach(AllHist => {
  if (AllHist.tipo == 'SOLOS') {
    Solos.push(AllHist)
  } else if (AllHist.tipo == 'SERIES') {
    Series.push(AllHist)
  }
});
// var AllHists = [MR,Ciec,Kerry,Guard,Guard2,Guard3,Guard4,Guard5,Guard6,Guard7,Kerry2,Kerry3,Kerry4,Kerry5,Kerry6,Kerry7,Kerry8,Kerry9]

// export default { AllHists,Solos,LeiaAgora,Series };