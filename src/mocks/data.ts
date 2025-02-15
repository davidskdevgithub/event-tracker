import { Scenario, EventsType } from '../types';

export const SCENARIOS: Scenario[] = [
  { id: 'sur', name: 'Sur', logo: '' },
  { id: 'norte', name: 'Norte', logo: '' },
  { id: 'boomerang', name: 'Boomerang', logo: '' },
  { id: 'paraguay', name: 'Paraguay', logo: '' },
  { id: 'montana', name: 'Montaña', logo: '' },
  { id: 'hangarclub', name: 'Hangar C', logo: '' },
  { id: 'casitablues', name: 'Casita B', logo: '' },
];

export const TIME_SLOTS = [
  '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', 
  '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', 
  '20:00', '20:30', '21:00', '21:30', '22:00', '22:30', 
  '23:00', '23:30', '00:00', '00:30', '01:00', '01:30',
  '02:00', '02:30', '03:00', '03:30'
];

export const EVENTS_DAY_1: EventsType = {
  'sur': [
    { 'start': '14:30', 'end': '', 'banda': 'RYAN' },
    { 'start': '15:20', 'end': '', 'banda': 'JOVENES PORDIOSEROS' },
    { 'start': '16:30', 'end': '', 'banda': 'LOS TIPITOS' },
    { 'start': '17:50', 'end': '', 'banda': 'GUASONES' },
    { 'start': '19:40', 'end': '', 'banda': 'WOS' },
    { 'start': '21:40', 'end': '', 'banda': 'BABASÓNICOS' },
    { 'start': '23:10', 'end': '', 'banda': 'LAS PASTILLAS DEL ABUELO' },
    { 'start': '00:30', 'end': '', 'banda': 'RATONES PARANOICOS' }
  ],
  'norte': [
    { 'start': '14:30', 'end': '', 'banda': 'SANTI CELLI' },
    { 'start': '15:20', 'end': '', 'banda': 'KOINO YOKAN' },
    { 'start': '16:30', 'end': '', 'banda': 'HILDA CANTA A CHARLY' },
    { 'start': '17:50', 'end': '', 'banda': 'EL MATO A UN POLICIA MOTORIZADO' },
    { 'start': '19:35', 'end': '', 'banda': 'DIVIDIDOS' },
    { 'start': '21:40', 'end': '', 'banda': 'AIRBAG' },
    { 'start': '23:10', 'end': '', 'banda': 'DILLOM' },
    { 'start': '00:40', 'end': '', 'banda': 'LOS AUTENTICOS DECADENTES' }
  ],
  'boomerang': [
    { 'start': '14:50', 'end': '', 'banda': 'UMA' },
    { 'start': '15:40', 'end': '', 'banda': 'FLORIAN' },
    { 'start': '16:30', 'end': '', 'banda': 'VINOCIO' },
    { 'start': '17:20', 'end': '', 'banda': 'SIDDHARTHA' },
    { 'start': '18:20', 'end': '', 'banda': 'LEO RIZZI' },
    { 'start': '19:20', 'end': '', 'banda': 'INDIOS' },
    { 'start': '20:30', 'end': '', 'banda': 'EMANUEL HORVILLEUR' },
    { 'start': '21:30', 'end': '', 'banda': 'EL PLAN DE LA MARIPOSA' },
    { 'start': '22:50', 'end': '', 'banda': 'TURF' },
    { 'start': '00:00', 'end': '', 'banda': 'POLENTA' }
  ],
  'montana': [
    { 'start': '15:00', 'end': '', 'banda': 'INAZULINA' },
    { 'start': '15:50', 'end': '', 'banda': 'EL ZAR' },
    { 'start': '17:10', 'end': '', 'banda': 'CRUZANDO EL CHARCO' },
    { 'start': '18:40', 'end': '', 'banda': 'LA VELA PUERCA' },
    { 'start': '20:40', 'end': '', 'banda': 'NO TE VA GUSTAR' },
    { 'start': '22:40', 'end': '', 'banda': 'CONOCIENDO RUSIA' },
    { 'start': '00:00', 'end': '', 'banda': 'MARIANO MELLINO' },
    { 'start': '01:00', 'end': '', 'banda': 'JULIAN JEWEIL' },
    { 'start': '02:00', 'end': '', 'banda': 'POPOF B2B SPACE 92' }
  ],
  'hangarclub': [
    { 'start': '17:00', 'end': '', 'banda': 'MARTI DEATH' },
    { 'start': '18:00', 'end': '', 'banda': 'GABA' },
    { 'start': '20:00', 'end': '', 'banda': 'MABEL' },
    { 'start': '21:00', 'end': '', 'banda': 'LUPE' },
    { 'start': '22:00', 'end': '', 'banda': 'DJS PAREJA' },
  ],
  'casitablues': [
    { 'start': '15:00', 'end': '', 'banda': 'LOS MENTIDORES' },
    { 'start': '16:00', 'end': '', 'banda': 'THE GINGER HEARTS' },
    { 'start': '16:55', 'end': '', 'banda': 'YULIE Y VANE RUTH' },
    { 'start': '17:50', 'end': '', 'banda': 'CLAUDETTE KING' },
    { 'start': '18:55', 'end': '', 'banda': 'LOS ESPÍRITUS' },
    { 'start': '20:10', 'end': '', 'banda': 'CLAUDIA SETTE Y TOYO BAGOSO' },
    { 'start': '21:15', 'end': '', 'banda': 'MEMPHIS LA BLUSERA' },
    { 'start': '22:40', 'end': '', 'banda': 'TRIBUTO A PAPPO' },
  ]
};

export const EVENTS_DAY_2: EventsType = {
  'sur': [
    { 'start': '14:30', 'end': '', 'banda': 'DANIELA MILAGROS' },
    { 'start': '15:20', 'end': '', 'banda': 'WAYRA IGLESIAS' },
    { 'start': '16:30', 'end': '', 'banda': 'LA CHANCHA MUDA' },
    { 'start': '17:50', 'end': '', 'banda': 'ALE KURZ' },
    { 'start': '19:10', 'end': '', 'banda': 'LAS PELOTAS' },
    { 'start': '20:30', 'end': '', 'banda': 'SKAY Y LOS FAKIRES' },
    { 'start': '22:00', 'end': '', 'banda': 'LOS PIOJOS' }
  ],
  'norte': [
    { 'start': '14:30', 'end': '', 'banda': 'K4' },
    { 'start': '15:20', 'end': '', 'banda': 'AGUSFORNITE2008&STIFFY' },
    { 'start': '16:30', 'end': '', 'banda': 'BHAVI' },
    { 'start': '17:50', 'end': '', 'banda': 'CATRIEL Y PACO AMOROSO' },
    { 'start': '19:40', 'end': '', 'banda': 'NICKI NICOLE' },
    { 'start': '21:00', 'end': '', 'banda': 'LA DELIO VALDEZ' },
    { 'start': '23:00', 'end': '', 'banda': 'NAFTA' },
    { 'start': '00:00', 'end': '', 'banda': 'LUCK RA' }
  ],
  'paraguay': [
    { 'start': '14:20', 'end': '', 'banda': 'FONDO Y LAS PASTILLAS' },
    { 'start': '15:10', 'end': '', 'banda': 'LARA 91K' },
    { 'start': '16:00', 'end': '', 'banda': 'MANU MARTINEZ' },
    { 'start': '16:50', 'end': '', 'banda': 'JAVIERA MENA' },
    { 'start': '18:00', 'end': '', 'banda': 'ZOE GOTUSSO' },
    { 'start': '19:00', 'end': '', 'banda': 'VAPORS OF MORPHINE' },
    { 'start': '20:10', 'end': '', 'banda': 'MASSACRE' },
    { 'start': '21:30', 'end': '', 'banda': 'WINONA RIDERS' },
    { 'start': '22:30', 'end': '', 'banda': 'ROSA PROFUNDA' },
    { 'start': '23:30', 'end': '', 'banda': 'HIJO DE LA TORMENTA' }
  ],
  'montana': [
    { 'start': '14:30', 'end': '', 'banda': 'GENITALLICA' },
    { 'start': '15:50', 'end': '', 'banda': 'BLAIR' },
    { 'start': '17:10', 'end': '', 'banda': 'SILVESTRE Y LA NARANJA' },
    { 'start': '18:40', 'end': '', 'banda': 'BANDALOS CHINOS' },
    { 'start': '20:40', 'end': '', 'banda': 'DEADMAU5' },
    { 'start': '23:10', 'end': '', 'banda': 'JUAN HANSEN LIVE' },
    { 'start': '00:20', 'end': '', 'banda': 'PECES RAROS' },
  ],
  'hangarclub': [
    { 'start': '17:00', 'end': '', 'banda': 'SIVINSKI' },
    { 'start': '18:00', 'end': '', 'banda': 'MAIA DROSS' },
    { 'start': '19:00', 'end': '', 'banda': 'J CATRIEL' },
    { 'start': '20:00', 'end': '', 'banda': 'PAMPA' },
    { 'start': '21:00', 'end': '', 'banda': 'SOL ORTEGA' },
  ],
  'casitablues': [
    { 'start': '14:30', 'end': '', 'banda': 'PAPI CHIMI ROMERO & BROSSOUL' },
    { 'start': '15:25', 'end': '', 'banda': 'MARLENE SUCHY & THE SUPER SAX' },
    { 'start': '16:20', 'end': '', 'banda': 'CINDY COLEONI' },
    { 'start': '17:25', 'end': '', 'banda': 'SOL BASSA' },
    { 'start': '18:50', 'end': '', 'banda': 'CESAR VALDOMIR' },
    { 'start': '19:20', 'end': '', 'banda': 'THE RHYTHM GAMBLERS' },
    { 'start': '20:30', 'end': '', 'banda': 'PITI FERNANDEZ' },
    { 'start': '21:45', 'end': '', 'banda': 'IVAN SINGH & SHERYL YOUNGBLOOD' },
    { 'start': '22:45', 'end': '', 'banda': 'LOS RUFALOS SEDIENTOS' }
  ]
};