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
var Kerry2 = new hist('Kerry','SOLOS','TERRA','O Sistema destruiu a vida de Kerry. Mas quando ele se levanta,seu único desejo é a vingança.','Kerry.png')
var Kerry3 = new hist('Kerry','SOLOS','TERRA','O Sistema destruiu a vida de Kerry. Mas quando ele se levanta,seu único desejo é a vingança.','Kerry.png')
var Kerry4 = new hist('Kerry','SOLOS','TERRA','O Sistema destruiu a vida de Kerry. Mas quando ele se levanta,seu único desejo é a vingança.','Kerry.png')
var Kerry5 = new hist('Kerry','SOLOS','TERRA','O Sistema destruiu a vida de Kerry. Mas quando ele se levanta,seu único desejo é a vingança.','Kerry.png')
var Kerry6 = new hist('Kerry','SOLOS','TERRA','O Sistema destruiu a vida de Kerry. Mas quando ele se levanta,seu único desejo é a vingança.','Kerry.png')
var Kerry7 = new hist('Kerry','SOLOS','TERRA','O Sistema destruiu a vida de Kerry. Mas quando ele se levanta,seu único desejo é a vingança.','Kerry.png')
var Kerry8 = new hist('Kerry','SOLOS','TERRA','O Sistema destruiu a vida de Kerry. Mas quando ele se levanta,seu único desejo é a vingança.','Kerry.png')
var Kerry9 = new hist('Kerry','SOLOS','TERRA','O Sistema destruiu a vida de Kerry. Mas quando ele se levanta,seu único desejo é a vingança.','Kerry.png')
var Guard = new hist('Guardiões','series','TERRA','Se aprofunde na história da nascença dos lendários heróis de Beatus.','Guard.png')
var Guard2 = new hist('Guardiões','series','TERRA','Se aprofunde na história da nascença dos lendários heróis de Beatus.','Guard.png')
var Guard3 = new hist('Guardiões','series','TERRA','Se aprofunde na história da nascença dos lendários heróis de Beatus.','Guard.png')
var Guard4 = new hist('Guardiões','series','TERRA','Se aprofunde na história da nascença dos lendários heróis de Beatus.','Guard.png')
var Guard5 = new hist('Guardiões','series','TERRA','Se aprofunde na história da nascença dos lendários heróis de Beatus.','Guard.png')
var Guard6 = new hist('Guardiões','series','TERRA','Se aprofunde na história da nascença dos lendários heróis de Beatus.','Guard.png')
var Guard7 = new hist('Guardiões','series','TERRA','Se aprofunde na história da nascença dos lendários heróis de Beatus.','Guard.png')
var AllHists = [MR,Ciec,Kerry,Guard,Guard2,Guard3,Guard4,Guard5,Guard6,Guard7,Kerry2,Kerry3,Kerry4,Kerry5,Kerry6,Kerry7,Kerry8,Kerry9]

export default { AllHists }