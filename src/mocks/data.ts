import { Scenario, EventsType } from '../types';

export const SCENARIOS: Scenario[] = [
  { id: 'norte', name: 'Norte', logo: '' },
  { id: 'sur', name: 'Sur', logo: '' },
  { id: 'montana', name: 'Montaña', logo: '' },
  { id: 'boomerang', name: 'Boomerang', logo: '' },
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

export const EVENTS_TEST: EventsType = {
  'norte': [
    { 'start': '14:20', 'end': '', 'banda': 'FAROLITOS' },
    { 'start': '15:20', 'end': '', 'banda': 'EL BORDO' },
    { 'start': '15:40', 'end': '', 'banda': 'LA CHANCHA MUDA' },
    { 'start': '16:30', 'end': '', 'banda': 'OJOS LOCOS' },
    { 'start': '17:30', 'end': '', 'banda': 'GUASONES' },
    { 'start': '19:00', 'end': '', 'banda': 'NO TE VA GUSTAR' },
    { 'start': '21:00', 'end': '', 'banda': 'SKAY Y LOS FAKIRES' },
    { 'start': '22:30', 'end': '', 'banda': 'DIVIDIDOS' },
    // { 'start': '00:30', 'end': '', 'banda': 'JUANSE' }
  ],
  'sur': [
    { 'start': '14:30', 'end': '', 'banda': 'SYNOPSIS' },
    { 'start': '15:20', 'end': '', 'banda': 'LARA 91K' },
    { 'start': '16:10', 'end': '', 'banda': 'DLD' },
    { 'start': '17:00', 'end': '', 'banda': 'CEBALLOS' },
    { 'start': '18:00', 'end': '', 'banda': 'ALEMAN' },
    { 'start': '19:05', 'end': '', 'banda': 'CONOCIENDO RUSIA' },
    { 'start': '20:15', 'end': '', 'banda': 'RELS B' },
    { 'start': '21:40', 'end': '', 'banda': 'TRUENO' },
    { 'start': '23:00', 'end': '', 'banda': 'TURF' },
    // { 'start': '00:25', 'end': '', 'banda': 'JUAN INGARAMO' }
  ],
  'montana': [
    { 'start': '17:10', 'end': '', 'banda': 'ESTELARES' },
    { 'start': '18:20', 'end': '', 'banda': 'USTED SEÑALEMELO' },
    { 'start': '19:40', 'end': '', 'banda': 'LA DELIO VALDEZ' },
    { 'start': '21:00', 'end': '', 'banda': 'LP' },
    { 'start': '22:15', 'end': '', 'banda': 'CATUPECU MACHU' },
    { 'start': '23:40', 'end': '', 'banda': 'VESICA PISCIS' },
    // { 'start': '00:30', 'end': '', 'banda': 'NICOLAS TABOADA' },
    // { 'start': '01:20', 'end': '', 'banda': 'ENRICO SANGUINIANO' },
    // { 'start': '02:30', 'end': '', 'banda': 'CHARLOTTE DE WITTE' }
  ],
  'boomerang': [
    { 'start': '15:00', 'end': '', 'banda': 'JON DECA' },
    { 'start': '15:40', 'end': '', 'banda': 'LETIZIA VOCOS' },
    { 'start': '16:25', 'end': '', 'banda': 'BAD' },
    { 'start': '17:10', 'end': '', 'banda': 'ILAN AMORES' },
    { 'start': '17:55', 'end': '', 'banda': 'JOVEN BREAKFAST' },
    { 'start': '18:45', 'end': '', 'banda': 'FERMIN' },
    { 'start': '19:35', 'end': '', 'banda': 'ODD MAMI' },
    { 'start': '20:25', 'end': '', 'banda': 'GAUCHITO CLUB' },
    { 'start': '21:25', 'end': '', 'banda': 'MUEREJOVEN' },
    { 'start': '22:25', 'end': '', 'banda': 'SARAMALACARA' },
    { 'start': '23:35', 'end': '', 'banda': 'BUSONICA' },
    // { 'start': '00:45', 'end': '', 'banda': 'GATIVIDEO' }
  ],
  'hangarclub': [
    { 'start': '15:00', 'end': '', 'banda': 'LOS HERMANOS MORGAN' },
    { 'start': '17:00', 'end': '', 'banda': 'CLARA CAVA' },
    { 'start': '19:00', 'end': '', 'banda': 'RAYOS LASER' },
    { 'start': '19:10', 'end': '', 'banda': 'LAS LIGAS MENORES' },
    { 'start': '20:10', 'end': '', 'banda': 'LILA DOWNS' },
    { 'start': '21:30', 'end': '', 'banda': 'EL NATO A UN POLICIA MOTORIZADO' },
    { 'start': '23:00', 'end': '', 'banda': 'MI AMIGO INVENCIBLE' },
    // { 'start': '00:30', 'end': '', 'banda': 'KUNO VOXAN' },
    // { 'start': '02:00', 'end': '', 'banda': 'BRESH' }
  ],
  'casitablues': [
    { 'start': '14:30', 'end': '', 'banda': 'GRETA KOHAN' },
    { 'start': '15:30', 'end': '', 'banda': 'VIEJO MOTOR' },
    { 'start': '16:30', 'end': '', 'banda': 'WAYRA IGLESIAS' },
    { 'start': '17:30', 'end': '', 'banda': 'LOS BUALOS SEDIENTOS' },
    { 'start': '18:40', 'end': '', 'banda': 'THE GINGER HEARTS' },
    { 'start': '20:50', 'end': '', 'banda': 'DEBORAH DIXON' },
    { 'start': '22:30', 'end': '', 'banda': 'DON VILANOVA & SOUL BROS' },
    // { 'start': '23:50', 'end': '', 'banda': 'JOANNA MADDOX' }
  ]
};

export const EVENTS: EventsType = {
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
    { 'start': '16:30', 'end': '', 'banda': 'HILDA GANZA & CHARLY' },
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
    { 'start': '17:20', 'end': '', 'banda': 'SIDONIMRITA' },
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
    { 'start': '20:10', 'end': '', 'banda': 'CLAUDIA PUYÓ Y TOYO BAGOSO' },
    { 'start': '21:15', 'end': '', 'banda': 'MEMPHIS LA BLUSERA' },
    { 'start': '22:40', 'end': '', 'banda': 'TRIBUTO A PAPPO' },
  ]
};