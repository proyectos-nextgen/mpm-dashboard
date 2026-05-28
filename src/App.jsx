import { useState, useMemo } from "react";

const ALL_DATA = [
  {id:"224272963661",n:"Ruth Moncada",s:"Visit Scheduled",d:"2026-05-27",c:"Colombia",src:"PAID_SOCIAL",platform:"Facebook",campaign:"campaña colombia - adv",gclid:null},
  {id:"224071909532",n:"Juan Carlos Vera Llanos",s:"New",d:"2026-05-27",c:null,src:null,platform:null,campaign:null,gclid:null},
  {id:"224026936504",n:"Ed Velandia",s:"Qualified",d:"2026-05-27",c:"México",src:"PAID_SOCIAL",platform:"Facebook",campaign:"campaña méxico",gclid:null},
  {id:"224037410635",n:"jose Guzmán david",s:"New",d:"2026-05-27",c:null,src:null,platform:null,campaign:null,gclid:null},
  {id:"223978528584",n:"AGF González",s:"Connected",d:"2026-05-26",c:null,src:null,platform:null,campaign:null,gclid:null},
  {id:"223794263357",n:"Ismael Suarez",s:"New",d:"2026-05-26",c:"México",src:"PAID_SOCIAL",platform:"Facebook",campaign:"campaña méxico",gclid:null},
  {id:"223732357498",n:"Rafael Ospino A",s:"New",d:"2026-05-25",c:null,src:null,platform:null,campaign:null,gclid:null},
  {id:"223699456055",n:"Rosse Zapata",s:"New",d:"2026-05-25",c:null,src:null,platform:null,campaign:null,gclid:null},
  {id:"223679474525",n:"Jhonatan León",s:"New",d:"2026-05-25",c:null,src:null,platform:null,campaign:null,gclid:null},
  {id:"223650142532",n:"Marco V. Peña",s:"Connected",d:"2026-05-25",c:"México",src:"PAID_SOCIAL",platform:"Facebook",campaign:"campaña méxico",gclid:null},
  {id:"223649100397",n:"Pedro Moreno",s:"New",d:"2026-05-25",c:null,src:null,platform:null,campaign:null,gclid:null},
  {id:"223624820387",n:"Reynol Mona",s:"New",d:"2026-05-25",c:null,src:null,platform:null,campaign:null,gclid:null},
  {id:"223579054993",n:"Alicia goldberg",s:"Human Contact",d:"2026-05-24",c:null,src:null,platform:null,campaign:null,gclid:null},
  {id:"223582034558",n:"Jashen Bentancur",s:"Connected",d:"2026-05-24",c:null,src:null,platform:null,campaign:null,gclid:null},
  {id:"193892848266",n:"Roger Veroni",s:"Unqualified",d:"2026-05-24",c:"México",src:"PAID_SOCIAL",platform:"Facebook",campaign:"campaña méxico",gclid:null},
  {id:"223473851148",n:"Patricia Gallego",s:"Not Interested",d:"2026-05-24",c:null,src:null,platform:null,campaign:null,gclid:null},
  {id:"223248393657",n:"Ana Cecilia Zuñiga Acosta",s:"New",d:"2026-05-22",c:"Colombia",src:"PAID_SOCIAL",platform:"Facebook",campaign:"campaña colombia - adv",gclid:null},
  {id:"223120371070",n:"Hanna Ramírez",s:"Connected",d:"2026-05-21",c:null,src:null,platform:null,campaign:null,gclid:null},
  {id:"223057818935",n:"Luis Sanchez",s:"Qualified",d:"2026-05-21",c:"Colombia",src:"PAID_SOCIAL",platform:"Facebook",campaign:"campaña colombia - adv",gclid:null},
  {id:"222962980476",n:"Marta Rodriguez",s:"New",d:"2026-05-21",c:null,src:null,platform:null,campaign:null,gclid:null},
  {id:"185823691344",n:"Adrian Chicatto",s:"Unqualified",d:"2026-05-21",c:"México",src:"PAID_SOCIAL",platform:"Facebook",campaign:"campaña méxico",gclid:null},
  {id:"202954402989",n:"Marco Castro",s:"New",d:"2026-05-21",c:"Colombia",src:"PAID_SOCIAL",platform:"Facebook",campaign:"campaña colombia - adv",gclid:null},
  {id:"222878822009",n:"Nora Toro",s:"New",d:"2026-05-21",c:null,src:null,platform:null,campaign:null,gclid:null},
  {id:"222788771670",n:"Pedro Garza",s:"Connected",d:"2026-05-20",c:null,src:null,platform:null,campaign:null,gclid:null},
  {id:"222788346039",n:"Sandra Piedad Restrepo Trujillo",s:null,d:"2026-05-20",c:"Colombia",src:"PAID_SOCIAL",platform:"Facebook",campaign:"campaña colombia - adv",gclid:null},
  {id:"222682163260",n:"Malik Zahir",s:"New",d:"2026-05-20",c:"México",src:"PAID_SOCIAL",platform:"Facebook",campaign:"campaña méxico",gclid:null},
  {id:"222686000046",n:"La Neta Politica",s:null,d:"2026-05-20",c:"México",src:"PAID_SOCIAL",platform:"Facebook",campaign:"campaña méxico",gclid:null},
  {id:"222644702025",n:"Efrain Salinas",s:null,d:"2026-05-20",c:"México",src:"PAID_SOCIAL",platform:"Facebook",campaign:"campaña méxico",gclid:null},
  {id:"161961561633",n:"Maria Buitrago",s:"Connected",d:"2026-05-20",c:"Colombia",src:"PAID_SOCIAL",platform:"Facebook",campaign:"campaña colombia - adv",gclid:null},
  {id:"222658086417",n:"Kika Vargas",s:"New",d:"2026-05-20",c:null,src:null,platform:null,campaign:null,gclid:null},
  {id:"222652864596",n:"Danilo Chaparro",s:"New",d:"2026-05-20",c:null,src:null,platform:null,campaign:null,gclid:null},
  {id:"222631686465",n:"Fabio Carmona",s:"Human Contact",d:"2026-05-19",c:"Colombia",src:"PAID_SOCIAL",platform:"Facebook",campaign:"campaña colombia - adv",gclid:null},
  {id:"222651687837",n:"Martha Johonson",s:"New",d:"2026-05-19",c:"México",src:"PAID_SOCIAL",platform:"Facebook",campaign:"campaña méxico",gclid:null},
  {id:"222647699260",n:"Domingo Morantes",s:"Connected",d:"2026-05-19",c:null,src:null,platform:null,campaign:null,gclid:null},
  {id:"222646862475",n:"Pablo L",s:"Human Contact",d:"2026-05-19",c:"México",src:"PAID_SOCIAL",platform:"Facebook",campaign:"campaña méxico",gclid:null},
  {id:"222594343055",n:"Martin Martin",s:"Connected",d:"2026-05-19",c:"Colombia",src:"PAID_SOCIAL",platform:"Facebook",campaign:"campaña colombia - adv",gclid:null},
  {id:"222575577689",n:"Hector Feliciano",s:"New",d:"2026-05-19",c:"Colombia",src:"PAID_SOCIAL",platform:"Facebook",campaign:"campaña colombia - adv",gclid:null},
  {id:"222452799620",n:"Mauricio Univio",s:"New",d:"2026-05-19",c:"Colombia",src:"PAID_SOCIAL",platform:"Facebook",campaign:"campaña colombia - adv",gclid:null},
  {id:"222408502937",n:"Marko Maldonado",s:"New",d:"2026-05-19",c:"México",src:"PAID_SOCIAL",platform:"Facebook",campaign:"campaña méxico",gclid:null},
  {id:"222388321929",n:"Marlen Granda",s:"Human Contact",d:"2026-05-18",c:"Colombia",src:"PAID_SOCIAL",platform:"Facebook",campaign:"campaña colombia - adv",gclid:null},
  {id:"222376472340",n:"Armando Rios",s:"Human Contact",d:"2026-05-18",c:"México",src:"PAID_SOCIAL",platform:"Facebook",campaign:"campaña méxico",gclid:null},
  {id:"222368105079",n:"Omar Gomez",s:"New",d:"2026-05-18",c:"Colombia",src:"PAID_SOCIAL",platform:"Facebook",campaign:"campaña colombia - adv",gclid:null},
  {id:"197444692598",n:"Juan Palacio",s:"Nurturing",d:"2026-05-18",c:"Colombia",src:"PAID_SOCIAL",platform:"Facebook",campaign:"campaña colombia - adv",gclid:null},
  {id:"222367674258",n:"Tito Dabah",s:"Qualified",d:"2026-05-18",c:"México",src:"PAID_SOCIAL",platform:"Facebook",campaign:"campaña méxico",gclid:null},
  {id:"222339374692",n:"Alejandro Valles",s:"New",d:"2026-05-18",c:"México",src:"PAID_SOCIAL",platform:"Facebook",campaign:"campaña méxico",gclid:null},
  {id:"222345777413",n:"Lladira Perez",s:"New",d:"2026-05-18",c:"México",src:"PAID_SOCIAL",platform:"Facebook",campaign:"campaña méxico",gclid:null},
  {id:"222327256097",n:"sismaga Martinez",s:"New",d:"2026-05-18",c:"México",src:"PAID_SOCIAL",platform:"Facebook",campaign:"campaña méxico",gclid:null},
  {id:"216258176608",n:"Diana Emiliani",s:"Not Interested",d:"2026-05-18",c:"Colombia",src:"PAID_SOCIAL",platform:"Facebook",campaign:"campaña colombia - adv",gclid:null},
  {id:"222264150600",n:"Bersain Lopes",s:"New",d:"2026-05-18",c:"México",src:"PAID_SOCIAL",platform:"Facebook",campaign:"campaña méxico",gclid:null},
  {id:"222263152521",n:"Maurizio Cohen",s:"New",d:"2026-05-18",c:"México",src:"PAID_SOCIAL",platform:"Facebook",campaign:"campaña méxico",gclid:null},
  {id:"222201096850",n:"Efrain Arevalo",s:"New",d:"2026-05-18",c:"Colombia",src:"PAID_SOCIAL",platform:"Facebook",campaign:"campaña colombia - adv",gclid:null},
  {id:"222203039309",n:"Hugo Alarcon",s:"New",d:"2026-05-18",c:"México",src:"PAID_SOCIAL",platform:"Facebook",campaign:"campaña méxico",gclid:null},
  {id:"222199995726",n:"Sergio Orozco",s:"New",d:"2026-05-18",c:"México",src:"PAID_SOCIAL",platform:"Facebook",campaign:"campaña méxico",gclid:null},
  {id:"222195888769",n:"Yamilse Molina",s:"New",d:"2026-05-18",c:"Colombia",src:"PAID_SOCIAL",platform:"Facebook",campaign:"campaña colombia - adv",gclid:null},
  {id:"222174426245",n:"Ber Soto",s:"Connected",d:"2026-05-17",c:"México",src:"PAID_SOCIAL",platform:"Facebook",campaign:"campaña méxico",gclid:null},
  {id:"222179870545",n:"Dr Dasaev De la Paz",s:null,d:"2026-05-17",c:"México",src:"PAID_SOCIAL",platform:"Facebook",campaign:"campaña méxico",gclid:null},
  {id:"222167219318",n:"Alejandro Ramirez",s:"New",d:"2026-05-17",c:"México",src:"PAID_SOCIAL",platform:"Facebook",campaign:"campaña méxico",gclid:null},
  {id:"200850281739",n:"luis alberto chavez",s:"Unqualified",d:"2026-05-17",c:"México",src:"PAID_SOCIAL",platform:"Facebook",campaign:"campaña méxico",gclid:null},
  {id:"222037762680",n:"Luz Marina Martínez",s:"Human Contact",d:"2026-05-16",c:"México",src:"PAID_SEARCH",platform:"Google",campaign:"campaña méxico - search",gclid:null},
  {id:"221927999798",n:"Claudia Ortiz",s:"Human Contact",d:"2026-05-16",c:"Colombia",src:"PAID_SOCIAL",platform:"Facebook",campaign:"campaña colombia - adv",gclid:null},
  {id:"221907716233",n:"libia molina",s:null,d:"2026-05-15",c:"Colombia",src:"PAID_SOCIAL",platform:"Facebook",campaign:"campaña colombia - adv",gclid:null},
  {id:"221879372558",n:"Sandra Ortiz Cruz",s:null,d:"2026-05-15",c:"Colombia",src:"PAID_SOCIAL",platform:"Facebook",campaign:"campaña colombia - adv",gclid:null},
  {id:"221871070851",n:"Lucia Camacho",s:"Not Interested",d:"2026-05-15",c:"México",src:"PAID_SOCIAL",platform:"Facebook",campaign:"campaña méxico",gclid:null},
  {id:"221842891351",n:"Jose Ortiz Monsalve",s:"Not Interested",d:"2026-05-15",c:"Colombia",src:"PAID_SOCIAL",platform:"Facebook",campaign:"campaña colombia - adv",gclid:null},
  {id:"221778976529",n:"Cristian Cortes",s:"Not Interested",d:"2026-05-15",c:"Colombia",src:"PAID_SOCIAL",platform:"Facebook",campaign:"campaña colombia - adv",gclid:null},
  {id:"221707615763",n:"Cielo Contreras",s:"Not Interested",d:"2026-05-15",c:"Colombia",src:"PAID_SOCIAL",platform:"Facebook",campaign:"campaña colombia - adv",gclid:null},
  {id:"221647622034",n:"Juan Zúñiga",s:"Not Interested",d:"2026-05-14",c:"México",src:"PAID_SOCIAL",platform:"Facebook",campaign:"campaña méxico",gclid:null},
  {id:"221824038526",n:"Susana Piedrahita",s:"Qualified",d:"2026-05-14",c:"Colombia",src:"PAID_SOCIAL",platform:"Facebook",campaign:"campaña colombia - adv",gclid:null},
  {id:"221636954797",n:"Alejandra Monsalve",s:"Not Interested",d:"2026-05-14",c:"Colombia",src:"PAID_SOCIAL",platform:"Instagram",campaign:"campaña colombia - adv",gclid:null},
  {id:"221633766675",n:"Juan Ovalle",s:"New",d:"2026-05-14",c:"Colombia",src:"PAID_SOCIAL",platform:"Facebook",campaign:"campaña colombia - adv",gclid:null},
  {id:"221614979396",n:"Mauricio Lopez",s:"Qualified",d:"2026-05-14",c:"México",src:"PAID_SOCIAL",platform:"Facebook",campaign:"campaña méxico",gclid:null},
  {id:"221411339901",n:"Josefina .",s:"Connected",d:"2026-05-13",c:"México",src:"PAID_SOCIAL",platform:"Facebook",campaign:"campaña méxico",gclid:null},
  {id:"221443110231",n:"Narciso Gutierrez",s:"Not Interested",d:"2026-05-13",c:"Colombia",src:"PAID_SOCIAL",platform:"Facebook",campaign:"campaña colombia - adv",gclid:null},
  {id:"221333843030",n:"Heliodora Viafara",s:"Not Interested",d:"2026-05-13",c:"Colombia",src:"PAID_SOCIAL",platform:"Facebook",campaign:"campaña colombia - adv",gclid:null},
  {id:"221191413774",n:"Rey Perez",s:"Not Interested",d:"2026-05-12",c:"Colombia",src:"PAID_SOCIAL",platform:"Facebook",campaign:"campaña colombia - adv",gclid:null},
  {id:"221169031351",n:"Ricardo Solis",s:"Human Contact",d:"2026-05-12",c:"México",src:"PAID_SOCIAL",platform:"Facebook",campaign:"campaña méxico",gclid:null},
  {id:"221130318190",n:"Yolanda Rodriguez",s:"Not Interested",d:"2026-05-12",c:"Colombia",src:"PAID_SOCIAL",platform:"Facebook",campaign:"campaña colombia - adv",gclid:null},
  {id:"221040712513",n:"Carlos Pulido",s:"Qualified",d:"2026-05-12",c:"Colombia",src:"PAID_SOCIAL",platform:"Facebook",campaign:"campaña colombia - adv",gclid:null},
  {id:"221002470965",n:"DR951 Cisneros",s:"New",d:"2026-05-11",c:"México",src:"PAID_SOCIAL",platform:"Facebook",campaign:"campaña méxico",gclid:null},
  {id:"221427683717",n:"Christian Guizar",s:"Human Contact",d:"2026-05-11",c:"México",src:"PAID_SOCIAL",platform:"Facebook",campaign:"campaña méxico",gclid:null},
  {id:"220932060733",n:"Fernanda Marquez",s:"Not Interested",d:"2026-05-11",c:"México",src:"PAID_SEARCH",platform:"Google",campaign:"campaña méxico - search",gclid:"EAIaIQobChMIzdiAvMixlAMVeSdECB35nww0"},
  {id:"220815112256",n:"Raúl Leon",s:"Not Interested",d:"2026-05-11",c:"México",src:"PAID_SOCIAL",platform:"Facebook",campaign:"campaña méxico",gclid:null},
  {id:"220807754660",n:"Lourdes Alvarez",s:"Not Interested",d:"2026-05-10",c:"México",src:"PAID_SOCIAL",platform:"Facebook",campaign:"campaña méxico",gclid:null},
  {id:"220766688786",n:"Camilo Aponte",s:"Not Interested",d:"2026-05-10",c:"Colombia",src:"PAID_SOCIAL",platform:"Facebook",campaign:"campaña colombia - adv",gclid:null},
  {id:"220907395864",n:"Olga Patricia Duarte",s:"Nurturing",d:"2026-05-10",c:"Colombia",src:"PAID_SOCIAL",platform:"Facebook",campaign:"campaña colombia - adv",gclid:null},
  {id:"220737033286",n:"Jesus Gutierrez",s:"New",d:"2026-05-10",c:"Colombia",src:"PAID_SOCIAL",platform:"Facebook",campaign:"campaña colombia - adv",gclid:null},
  {id:"220701100935",n:"Gustavo Caballero",s:"Not Interested",d:"2026-05-10",c:"México",src:"PAID_SOCIAL",platform:"Facebook",campaign:"campaña méxico",gclid:null},
  {id:"220671333556",n:"Yuri Leon",s:"Human Contact",d:"2026-05-09",c:"Colombia",src:"PAID_SOCIAL",platform:"Facebook",campaign:"campaña colombia - adv",gclid:null},
  {id:"220662657697",n:"Alex céspedes",s:"Not Interested",d:"2026-05-09",c:"Colombia",src:"PAID_SOCIAL",platform:"Facebook",campaign:"campaña colombia - adv",gclid:null},
  {id:"220619118428",n:"Paola Altamar",s:"Not Interested",d:"2026-05-09",c:"Colombia",src:"PAID_SOCIAL",platform:"Facebook",campaign:"campaña colombia - adv",gclid:null},
  {id:"199589567905",n:"Luis Ocampo",s:"Unqualified",d:"2026-05-09",c:"México",src:"PAID_SOCIAL",platform:"Facebook",campaign:"campaña méxico",gclid:null},
  {id:"220591397377",n:"Francisco Murillo",s:"Not Interested",d:"2026-05-09",c:"México",src:"PAID_SOCIAL",platform:"Facebook",campaign:"campaña méxico",gclid:null},
  {id:"220566649671",n:"Edgar Sandoval",s:"New",d:"2026-05-09",c:"Colombia",src:"PAID_SOCIAL",platform:"Facebook",campaign:"campaña colombia - adv",gclid:null},
  {id:"220549233305",n:"Manuel Piñeiro",s:"Not Interested",d:"2026-05-08",c:"Colombia",src:"PAID_SOCIAL",platform:"Facebook",campaign:"campaña colombia - adv",gclid:null},
  {id:"217502129680",n:"Marco Antonio Rodríguez",s:"Not Interested",d:"2026-05-08",c:"México",src:"PAID_SOCIAL",platform:"Facebook",campaign:"campaña méxico",gclid:null},
  {id:"220391450519",n:"Eduardo B",s:"Not Interested",d:"2026-05-08",c:"México",src:"PAID_SOCIAL",platform:"Facebook",campaign:"campaña méxico",gclid:null},
  {id:"221459921799",n:"Ricardo Urrego",s:"Not Interested",d:"2026-05-08",c:"Colombia",src:"PAID_SOCIAL",platform:"Facebook",campaign:"campaña colombia - adv",gclid:null},
  {id:"220230210442",n:"Juan Pablo Polania",s:"Human Contact",d:"2026-05-07",c:"Colombia",src:"PAID_SOCIAL",platform:"Facebook",campaign:"campaña colombia - adv",gclid:null},
  {id:"220144821585",n:"Jesús Fernandez",s:"Nurturing",d:"2026-05-07",c:"México",src:"PAID_SOCIAL",platform:"Facebook",campaign:"campaña méxico",gclid:null},
  {id:"220136144740",n:"Os Fit",s:"Not Interested",d:"2026-05-07",c:"Colombia",src:"PAID_SOCIAL",platform:"Facebook",campaign:"campaña colombia - adv",gclid:null},
  {id:"220136513910",n:"Carlos Correa",s:"Human Contact",d:"2026-05-07",c:"Colombia",src:"PAID_SOCIAL",platform:"Facebook",campaign:"campaña colombia - adv",gclid:null},
  {id:"220114463648",n:"Albeiro Jiménez",s:"New",d:"2026-05-06",c:"Colombia",src:"PAID_SOCIAL",platform:"Facebook",campaign:"campaña colombia - adv",gclid:null},
  {id:"220068081507",n:"Luz Caribe Torrenegra",s:"Qualified",d:"2026-05-06",c:"Colombia",src:"PAID_SOCIAL",platform:"Facebook",campaign:"campaña colombia - adv",gclid:null},
  {id:"220034918293",n:"Leonardo Camacho",s:"Not Interested",d:"2026-05-06",c:"México",src:"PAID_SOCIAL",platform:"Facebook",campaign:"campaña méxico",gclid:null},
  {id:"219940765501",n:"Delcy Reino Bula",s:"Human Contact",d:"2026-05-06",c:"México",src:"PAID_SOCIAL",platform:"Facebook",campaign:"campaña méxico",gclid:null},
  {id:"148045000069",n:"Lorena Tavera",s:"New",d:"2026-05-05",c:"México",src:"PAID_SOCIAL",platform:"Facebook",campaign:"campaña méxico",gclid:null},
  {id:"219815686485",n:"Doctora Roa paez",s:"Not Interested",d:"2026-05-05",c:"Colombia",src:"PAID_SOCIAL",platform:"Facebook",campaign:"campaña colombia - adv",gclid:null},
  {id:"219886943048",n:"Sebastian Gomez",s:"New",d:"2026-05-05",c:"México",src:"PAID_SOCIAL",platform:"Facebook",campaign:"campaña méxico",gclid:null},
  {id:"219730067073",n:"Omar Rodriguez",s:"New",d:"2026-05-05",c:"Colombia",src:"PAID_SOCIAL",platform:"Facebook",campaign:"campaña colombia - adv",gclid:null},
  {id:"219691209617",n:"Luz Garcia",s:"Human Contact",d:"2026-05-04",c:"Colombia",src:"PAID_SOCIAL",platform:"Facebook",campaign:"campaña colombia - adv",gclid:null},
  {id:"219669173268",n:"Jeannette Urquijo",s:"Human Contact",d:"2026-05-04",c:"Colombia",src:"PAID_SOCIAL",platform:"Facebook",campaign:"campaña colombia - adv",gclid:null},
  {id:"219624985482",n:"Julio Castellanos",s:"Human Contact",d:"2026-05-04",c:"Colombia",src:"PAID_SOCIAL",platform:"Facebook",campaign:"campaña colombia - adv",gclid:null},
  {id:"219886942882",n:"Salvador Martinez",s:"Connected",d:"2026-05-04",c:"México",src:"PAID_SOCIAL",platform:"Facebook",campaign:"campaña méxico",gclid:null},
  {id:"219491824810",n:"Mario Manuel",s:"Human Contact",d:"2026-05-03",c:"México",src:"PAID_SOCIAL",platform:"Facebook",campaign:"campaña méxico",gclid:null},
  {id:"219490782128",n:"Jaime Tierradentro",s:"Human Contact",d:"2026-05-03",c:"Colombia",src:"PAID_SOCIAL",platform:"Facebook",campaign:"campaña colombia - adv",gclid:null},
  {id:"198199528538",n:"Luisa De Amador",s:"Attempted to contact",d:"2026-05-02",c:"Colombia",src:"PAID_SOCIAL",platform:"Facebook",campaign:"campaña colombia - adv",gclid:null},
  {id:"219308374027",n:"Gio Diaz Leon",s:"New",d:"2026-05-02",c:"Colombia",src:"PAID_SOCIAL",platform:"Facebook",campaign:"campaña colombia - adv",gclid:null},
  {id:"219254362141",n:"Eddy Vainer",s:"Nurturing",d:"2026-05-01",c:"México",src:"PAID_SOCIAL",platform:"Facebook",campaign:"campaña méxico",gclid:null},
  {id:"219192860464",n:"Nelsy Bello",s:"New",d:"2026-05-01",c:"Colombia",src:"PAID_SOCIAL",platform:"Facebook",campaign:"campaña colombia - adv",gclid:null},
  {id:"219062830859",n:"Israel Ocaña",s:"Unqualified",d:"2026-05-01",c:"México",src:"PAID_SOCIAL",platform:"Facebook",campaign:"campaña méxico",gclid:null},
  {id:"219051872088",n:"Adriana Garza",s:"Qualified",d:"2026-05-01",c:"México",src:"PAID_SEARCH",platform:"Google",campaign:"campaña méxico - search",gclid:"EAIaIQobChMIrKfulKSXlAMV9y7UAR0c3AiK"},
];

const PAID_DATA = ALL_DATA.filter(r => (r.c==="Colombia"||r.c==="México") && (r.src==="PAID_SOCIAL"||r.src==="PAID_SEARCH"));

const ST = {
  "New":                  {color:"#2563EB",light:"#EFF6FF",border:"#BFDBFE",order:1},
  "Connected":            {color:"#0891B2",light:"#ECFEFF",border:"#A5F3FC",order:2},
  "Human Contact":        {color:"#7C3AED",light:"#F5F3FF",border:"#DDD6FE",order:3},
  "Visit Scheduled":      {color:"#0D9488",light:"#F0FDFA",border:"#99F6E4",order:4},
  "Nurturing":            {color:"#D97706",light:"#FFFBEB",border:"#FDE68A",order:5},
  "Qualified":            {color:"#16A34A",light:"#F0FDF4",border:"#BBF7D0",order:6},
  "Unqualified":          {color:"#64748B",light:"#F8FAFC",border:"#CBD5E1",order:7},
  "Not Interested":       {color:"#DC2626",light:"#FEF2F2",border:"#FECACA",order:8},
  "Attempted to contact": {color:"#9333EA",light:"#FAF5FF",border:"#E9D5FF",order:9},
  "Sin estado":           {color:"#94A3B8",light:"#F8FAFC",border:"#E2E8F0",order:10},
};

const CC = {
  Colombia: {accent:"#1A56DB",light:"#EFF6FF",border:"#BFDBFE",flag:"🇨🇴"},
  México:   {accent:"#B45309",light:"#FFFBEB",border:"#FDE68A",flag:"🇲🇽"},
};

const SC = {
  PAID_SOCIAL: {label:"Paid Social",color:"#7C3AED",light:"#F5F3FF",border:"#DDD6FE"},
  PAID_SEARCH: {label:"Paid Search",color:"#0891B2",light:"#ECFEFF",border:"#A5F3FC"},
};

const P = {bg:"#F1F4F9",card:"#fff",border:"#DDE3EE",text:"#0F172A",sub:"#64748B",muted:"#94A3B8",accent:"#1D4ED8",al:"#EFF6FF"};
const sk = s => s||"Sin estado";

function agg(data){
  const sc={};
  for(const r of data){const k=sk(r.s);sc[k]=(sc[k]||0)+1;}
  return {sc,total:data.length};
}

function Donut({segs,n}){
  const cx=60,cy=60,r=44,ir=28;
  let cum=0;
  const tot=segs.reduce((a,x)=>a+x.v,0)||1;
  const paths=segs.filter(x=>x.v>0).map((s,i)=>{
    const pct=s.v/tot,a1=cum*2*Math.PI-Math.PI/2;cum+=pct;
    const a2=cum*2*Math.PI-Math.PI/2;
    const x1=cx+r*Math.cos(a1),y1=cy+r*Math.sin(a1);
    const x2=cx+r*Math.cos(a2),y2=cy+r*Math.sin(a2);
    return <path key={i} d={`M${cx},${cy}L${x1},${y1}A${r},${r} 0 ${pct>.5?1:0},1 ${x2},${y2}Z`} fill={s.c} stroke="#fff" strokeWidth={1.5}/>;
  });
  return(
    <svg width={120} height={120} viewBox="0 0 120 120">
      {paths}<circle cx={cx} cy={cy} r={ir} fill="#fff"/>
      <text x={cx} y={cy-2} textAnchor="middle" fontSize={15} fontWeight="800" fill={P.text}>{tot}</text>
      <text x={cx} y={cy+11} textAnchor="middle" fontSize={8} fill={P.sub}>{n||"total"}</text>
    </svg>
  );
}

function Bar({data,color}){
  const max=Math.max(...data.map(d=>d.v),1);
  return(
    <div style={{display:"flex",alignItems:"flex-end",gap:2,height:56,width:"100%"}}>
      {data.map((d,i)=>(
        <div key={i} style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:1}}>
          <div style={{width:"100%",borderRadius:2,background:d.v>0?(color||P.accent):"#E2E8F0",height:`${Math.max((d.v/max)*48,d.v>0?3:1)}px`}} title={`May ${d.day}: ${d.v}`}/>
          {(parseInt(d.day)%5===0||d.day==="01"||d.day==="27")&&<span style={{fontSize:7,color:P.muted}}>{parseInt(d.day)}</span>}
        </div>
      ))}
    </div>
  );
}

function HBar({label,value,total,color}){
  const pct=total>0?(value/total*100):0;
  return(
    <div style={{marginBottom:7}}>
      <div style={{display:"flex",justifyContent:"space-between",marginBottom:3}}>
        <span style={{fontSize:10,color:P.text,fontWeight:500}}>{label}</span>
        <span style={{fontSize:10,fontWeight:700,color:P.text}}>{value} <span style={{fontSize:9,color:P.sub,fontWeight:400}}>({pct.toFixed(1)}%)</span></span>
      </div>
      <div style={{background:"#E8EDF6",borderRadius:3,height:6,overflow:"hidden"}}>
        <div style={{width:`${pct}%`,background:color,height:"100%",borderRadius:3,transition:"width .4s"}}/>
      </div>
    </div>
  );
}

function KPI({label,value,color,sub}){
  return(
    <div style={{background:P.card,borderRadius:11,padding:"14px 16px",border:`1px solid ${P.border}`,flex:"1 1 110px",boxShadow:"0 1px 3px rgba(0,0,0,0.04)",borderTop:`3px solid ${color}`}}>
      <div style={{fontSize:9,color:P.sub,fontWeight:600,marginBottom:5,textTransform:"uppercase",letterSpacing:.4}}>{label}</div>
      <div style={{fontSize:24,fontWeight:900,color:P.text,lineHeight:1}}>{value}</div>
      {sub&&<div style={{fontSize:9,color:P.sub,marginTop:4}}>{sub}</div>}
    </div>
  );
}

const NAV=["General","Paid Media","Contactos"];
const HS="https://app.hubspot.com/contacts/44829921/record/0-1";

export default function App(){
  const [nav,setNav]=useState(0);
  const [fC,setFC]=useState(null);
  const [fS,setFS]=useState(null);
  const [fSt,setFSt]=useState(null);
  const [mode,setMode]=useState("paid");

  const base=useMemo(()=>{
    const d=mode==="paid"?PAID_DATA:ALL_DATA.filter(r=>r.c==="Colombia"||r.c==="México");
    return fC?d.filter(r=>r.c===fC):d;
  },[mode,fC]);

  const filtered=useMemo(()=>fS?base.filter(r=>r.src===fS):base,[base,fS]);
  const {sc,total}=useMemo(()=>agg(filtered),[filtered]);
  const tableData=useMemo(()=>fSt?filtered.filter(r=>sk(r.s)===fSt):filtered,[filtered,fSt]);

  const days=useMemo(()=>{
    const dm={};
    for(const r of filtered)dm[r.d]=(dm[r.d]||0)+1;
    return Array.from({length:27},(_,i)=>{const k="2026-05-"+String(i+1).padStart(2,"0");return{day:String(i+1).padStart(2,"0"),v:dm[k]||0};});
  },[filtered]);

  const q=sc["Qualified"]||0,ni=sc["Not Interested"]||0,nw=sc["New"]||0,hc=sc["Human Contact"]||0;
  const rate=total>0?((q/total)*100).toFixed(1):"0";
  const cBreak=["Colombia","México"].map(c=>{const sub=base.filter(r=>r.c===c);return{c,total:sub.length,...agg(sub)};});
  const campaigns=useMemo(()=>{const m={};for(const r of filtered)if(r.campaign)m[r.campaign]=(m[r.campaign]||0)+1;return Object.entries(m).sort((a,b)=>b[1]-a[1]).slice(0,6);},[filtered]);
  const gclidRows=filtered.filter(r=>r.gclid);

  const sideItem=(active,color,onClick,left,right)=>(
    <div onClick={onClick} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"7px 10px",borderRadius:7,marginBottom:3,cursor:"pointer",fontWeight:active?700:400,fontSize:11,background:active?(color?"#F5F3FF":P.al):"transparent",color:active?(color||P.accent):P.sub,borderLeft:active?`3px solid ${color||P.accent}`:"3px solid transparent",transition:"all .15s"}}>
      <span>{left}</span>
      <span style={{fontSize:10,fontWeight:700,borderRadius:10,padding:"1px 6px",background:active?(color?color+"22":"#BFDBFE"):"#E8EDF6",color:active?(color||P.accent):P.sub}}>{right}</span>
    </div>
  );

  return(
    <div style={{display:"flex",height:"100vh",fontFamily:"'Inter','Segoe UI',sans-serif",background:P.bg,overflow:"hidden",fontSize:12}}>
      {/* SIDEBAR */}
      <div style={{width:205,background:"#fff",borderRight:`1px solid ${P.border}`,display:"flex",flexDirection:"column",flexShrink:0,overflowY:"auto"}}>
        <div style={{padding:"18px 16px 12px",borderBottom:`1px solid ${P.border}`}}>
          <div style={{fontSize:18,fontWeight:900,color:P.accent,letterSpacing:-.5}}>MPM</div>
          <div style={{fontSize:9,color:P.sub,marginTop:2,fontWeight:500,letterSpacing:.5,textTransform:"uppercase"}}>Lead Intelligence</div>
        </div>
        <div style={{padding:"10px 10px 8px",borderBottom:`1px solid ${P.border}`}}>
          <div style={{fontSize:9,fontWeight:700,color:P.muted,textTransform:"uppercase",letterSpacing:.7,marginBottom:7}}>Vista</div>
          {[{k:"paid",l:"Paid Media (Col+Méx)"},{k:"all",l:"Todos (Col+Méx)"}].map(v=>(
            <div key={v.k} onClick={()=>{setMode(v.k);setFS(null);setFSt(null);}} style={{padding:"7px 10px",borderRadius:7,marginBottom:3,cursor:"pointer",fontSize:11,fontWeight:mode===v.k?700:400,background:mode===v.k?P.al:"transparent",color:mode===v.k?P.accent:P.sub,borderLeft:mode===v.k?`3px solid ${P.accent}`:"3px solid transparent",transition:"all .15s"}}>{v.l}</div>
          ))}
        </div>
        {mode==="paid"&&(
          <div style={{padding:"10px 10px 8px",borderBottom:`1px solid ${P.border}`}}>
            <div style={{fontSize:9,fontWeight:700,color:P.muted,textTransform:"uppercase",letterSpacing:.7,marginBottom:7}}>Fuente</div>
            {sideItem(!fS,null,()=>setFS(null),"Todas las fuentes",PAID_DATA.filter(r=>fC?r.c===fC:true).length)}
            {Object.entries(SC).map(([k,v])=>sideItem(fS===k,v.color,()=>setFS(fS===k?null:k),v.label,PAID_DATA.filter(r=>r.src===k&&(fC?r.c===fC:true)).length))}
          </div>
        )}
        <div style={{padding:"10px 10px 8px",borderBottom:`1px solid ${P.border}`}}>
          <div style={{fontSize:9,fontWeight:700,color:P.muted,textTransform:"uppercase",letterSpacing:.7,marginBottom:7}}>País</div>
          {sideItem(!fC,null,()=>{setFC(null);setFSt(null);},"Colombia + México",base.length)}
          {["Colombia","México"].map(c=>{const cfg=CC[c];return sideItem(fC===c,cfg.accent,()=>{setFC(fC===c?null:c);setFSt(null);},cfg.flag+" "+c,ALL_DATA.filter(r=>r.c===c).length);})}
        </div>
        <nav style={{padding:"8px 8px",flex:1}}>
          {NAV.map((l,i)=>(
            <div key={i} onClick={()=>setNav(i)} style={{padding:"8px 12px",borderRadius:7,marginBottom:2,cursor:"pointer",fontSize:12,fontWeight:nav===i?700:400,background:nav===i?P.al:"transparent",color:nav===i?P.accent:P.sub,borderLeft:nav===i?`3px solid ${P.accent}`:"3px solid transparent",transition:"all .15s"}}>{l}</div>
          ))}
        </nav>
        <div style={{padding:"10px 16px",borderTop:`1px solid ${P.border}`}}>
          <div style={{fontSize:9,color:P.muted,textTransform:"uppercase",letterSpacing:.5,marginBottom:2}}>Período</div>
          <div style={{fontSize:10,color:P.text,fontWeight:700}}>Mayo 1–31, 2026</div>
          <div style={{fontSize:9,color:P.muted,marginTop:1}}>HubSpot CRM · Verificado</div>
        </div>
      </div>

      {/* MAIN */}
      <div style={{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"}}>
        <div style={{height:52,background:"#fff",borderBottom:`1px solid ${P.border}`,display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 22px",flexShrink:0,boxShadow:"0 1px 3px rgba(0,0,0,0.04)"}}>
          <div style={{display:"flex",alignItems:"center",gap:7,flexWrap:"wrap"}}>
            <span style={{fontSize:13,fontWeight:800,color:P.text}}>{NAV[nav]}</span>
            {mode==="paid"&&<span style={{fontSize:9,fontWeight:700,padding:"2px 7px",borderRadius:4,background:"#F5F3FF",color:"#7C3AED",border:"1px solid #DDD6FE"}}>Paid Social + Search</span>}
            {fC&&<span style={{fontSize:9,fontWeight:700,padding:"2px 7px",borderRadius:4,background:CC[fC]?.light,color:CC[fC]?.accent,border:`1px solid ${CC[fC]?.border}`}}>{CC[fC]?.flag} {fC}</span>}
            {fS&&<span style={{fontSize:9,fontWeight:700,padding:"2px 7px",borderRadius:4,background:SC[fS]?.light,color:SC[fS]?.color,border:`1px solid ${SC[fS]?.border}`}}>{SC[fS]?.label}</span>}
            <span style={{fontSize:10,color:P.sub,background:"#F1F5F9",padding:"2px 8px",borderRadius:4,border:`1px solid ${P.border}`}}>{total} contactos</span>
          </div>
          <div style={{display:"flex",gap:6}}>
            {(fC||fS||fSt)&&<button onClick={()=>{setFC(null);setFS(null);setFSt(null);}} style={{padding:"3px 10px",borderRadius:5,border:`1px solid ${P.border}`,background:"#fff",fontSize:10,cursor:"pointer",color:P.sub,fontWeight:600}}>Limpiar</button>}
            <div style={{padding:"3px 10px",borderRadius:5,background:P.accent,color:"#fff",fontSize:10,fontWeight:700}}>HubSpot Verificado</div>
          </div>
        </div>

        <div style={{flex:1,overflowY:"auto",padding:"18px 20px"}}>
          {/* HERO */}
          <div style={{background:"#fff",border:"1.5px solid #BBF7D0",borderRadius:14,padding:"16px 20px",marginBottom:16,boxShadow:"0 2px 10px rgba(22,163,74,0.07)"}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:12,flexWrap:"wrap",gap:8}}>
              <div>
                <div style={{fontSize:10,fontWeight:700,color:"#15803D",letterSpacing:1,textTransform:"uppercase",marginBottom:2}}>Lead Qualification Status · HubSpot</div>
                <div style={{fontSize:10,color:P.sub}}>
                  <code style={{background:"#F0FDF4",color:"#16A34A",padding:"1px 5px",borderRadius:3,fontSize:9}}>lead_qualification_lead_status</code>
                  <span style={{marginLeft:6}}>{mode==="paid"?"Paid Social + Paid Search":"Todos"} · {fC||"Colombia + México"} · {total} contactos</span>
                </div>
              </div>
              <div style={{background:"#16A34A",color:"#fff",borderRadius:9,padding:"8px 16px",textAlign:"center"}}>
                <div style={{fontSize:24,fontWeight:900,lineHeight:1}}>{rate}%</div>
                <div style={{fontSize:9,fontWeight:600,marginTop:2,opacity:.85}}>TASA CALIFICACIÓN</div>
              </div>
            </div>
            <div style={{display:"flex",gap:7,flexWrap:"wrap"}}>
              {Object.entries(ST).sort((a,b)=>a[1].order-b[1].order).filter(([k])=>(sc[k]||0)>0).map(([label,cfg])=>{
                const val=sc[label]||0,pct=((val/total)*100).toFixed(1),active=fSt===label;
                return(
                  <div key={label} onClick={()=>{setFSt(label===fSt?null:label);setNav(2);}}
                    style={{background:active?cfg.color:cfg.light,border:`1.5px solid ${active?cfg.color:cfg.border}`,borderRadius:10,padding:"10px 13px",flex:"1 1 85px",cursor:"pointer",transition:"all .2s",boxShadow:active?`0 3px 10px ${cfg.color}40`:"none"}}
                    onMouseEnter={e=>{if(!active)e.currentTarget.style.borderColor=cfg.color;}}
                    onMouseLeave={e=>{if(!active)e.currentTarget.style.borderColor=cfg.border;}}>
                    <div style={{fontSize:20,fontWeight:900,color:active?"#fff":P.text,lineHeight:1,marginBottom:3}}>{val}</div>
                    <div style={{fontSize:9,fontWeight:700,color:active?"rgba(255,255,255,.95)":cfg.color,marginBottom:1}}>{label}</div>
                    <div style={{fontSize:9,color:active?"rgba(255,255,255,.65)":P.sub,marginBottom:5}}>{pct}%</div>
                    <div style={{background:active?"rgba(255,255,255,.25)":"#E8EDF6",borderRadius:2,height:3}}>
                      <div style={{width:`${pct}%`,background:active?"#fff":cfg.color,height:"100%",borderRadius:2}}/>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* GENERAL */}
          {nav===0&&(
            <>
              <div style={{display:"flex",gap:8,marginBottom:14,flexWrap:"wrap"}}>
                <KPI label="Total" value={total} color={P.accent} sub={mode==="paid"?"Paid Social + Search":"Todos los orígenes"}/>
                <KPI label="Qualified" value={q} color="#16A34A" sub={`${rate}% conversión`}/>
                <KPI label="Not Interested" value={ni} color="#DC2626" sub={`${total>0?((ni/total)*100).toFixed(1):0}% descarte`}/>
                <KPI label="New" value={nw} color="#2563EB" sub="Sin gestionar"/>
                <KPI label="Human Contact" value={hc} color="#7C3AED" sub="Contacto directo"/>
              </div>
              <div style={{display:"flex",gap:12,flexWrap:"wrap"}}>
                <div style={{background:P.card,borderRadius:12,padding:16,border:`1px solid ${P.border}`,flex:"1 1 180px",boxShadow:"0 1px 3px rgba(0,0,0,0.04)"}}>
                  <div style={{fontSize:10,fontWeight:700,color:P.text,textTransform:"uppercase",letterSpacing:.5,marginBottom:10}}>Distribución</div>
                  <div style={{display:"flex",alignItems:"center",gap:10}}>
                    <Donut n="contactos" segs={Object.entries(ST).sort((a,b)=>a[1].order-b[1].order).filter(([k])=>(sc[k]||0)>0).map(([k,c])=>({v:sc[k]||0,c:c.color}))}/>
                    <div style={{flex:1}}>
                      {Object.entries(ST).sort((a,b)=>a[1].order-b[1].order).filter(([k])=>(sc[k]||0)>0).map(([k,c])=>(
                        <div key={k} style={{display:"flex",alignItems:"center",gap:5,marginBottom:4,cursor:"pointer"}} onClick={()=>{setFSt(k);setNav(2);}}>
                          <div style={{width:7,height:7,borderRadius:1,background:c.color,flexShrink:0}}/>
                          <span style={{fontSize:9,color:P.sub,flex:1}}>{k}</span>
                          <span style={{fontSize:10,fontWeight:700,color:P.text}}>{sc[k]}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div style={{background:P.card,borderRadius:12,padding:16,border:`1px solid ${P.border}`,flex:"2 1 240px",boxShadow:"0 1px 3px rgba(0,0,0,0.04)"}}>
                  <div style={{fontSize:10,fontWeight:700,color:P.text,textTransform:"uppercase",letterSpacing:.5,marginBottom:3}}>Leads por Día · Mayo 2026</div>
                  <div style={{fontSize:9,color:P.sub,marginBottom:10}}>{total} contactos</div>
                  <Bar data={days} color={fC?CC[fC]?.accent:P.accent}/>
                </div>
                <div style={{background:P.card,borderRadius:12,padding:16,border:`1px solid ${P.border}`,flex:"1 1 180px",boxShadow:"0 1px 3px rgba(0,0,0,0.04)"}}>
                  <div style={{fontSize:10,fontWeight:700,color:P.text,textTransform:"uppercase",letterSpacing:.5,marginBottom:10}}>Colombia vs México</div>
                  {cBreak.map(({c,total:ct,sc:csc})=>{
                    const cfg=CC[c];
                    return(
                      <div key={c} onClick={()=>setFC(fC===c?null:c)} style={{padding:"9px 10px",borderRadius:8,marginBottom:7,cursor:"pointer",border:`1.5px solid ${fC===c?cfg.accent:P.border}`,background:fC===c?cfg.light:"#FAFBFD",transition:"all .15s"}}>
                        <div style={{display:"flex",justifyContent:"space-between",marginBottom:5}}>
                          <span style={{fontSize:11,fontWeight:700,color:cfg.accent}}>{cfg.flag} {c}</span>
                          <span style={{fontSize:12,fontWeight:900,color:P.text}}>{ct}</span>
                        </div>
                        {Object.entries(ST).sort((a,b)=>a[1].order-b[1].order).filter(([k])=>(csc[k]||0)>0).map(([k,scfg])=>(
                          <HBar key={k} label={k} value={csc[k]||0} total={ct} color={scfg.color}/>
                        ))}
                      </div>
                    );
                  })}
                </div>
              </div>
            </>
          )}

          {/* PAID MEDIA */}
          {nav===1&&(
            <div style={{display:"flex",flexDirection:"column",gap:12}}>
              <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
                <KPI label="Total Paid" value={PAID_DATA.filter(r=>fC?r.c===fC:true).length} color="#7C3AED" sub="Col + Méx"/>
                <KPI label="Paid Social" value={filtered.filter(r=>r.src==="PAID_SOCIAL").length} color="#7C3AED" sub="Facebook / Instagram"/>
                <KPI label="Paid Search" value={filtered.filter(r=>r.src==="PAID_SEARCH").length} color="#0891B2" sub="Google Ads"/>
                <KPI label="Google GCLID" value={gclidRows.length} color="#16A34A" sub="Click ID confirmado"/>
                <KPI label="Qualified (paid)" value={q} color="#16A34A" sub={`${rate}% conv.`}/>
              </div>
              <div style={{display:"flex",gap:12,flexWrap:"wrap"}}>
                {Object.entries(SC).map(([srcKey,srcCfg])=>{
                  const sub=filtered.filter(r=>r.src===srcKey);
                  const {sc:ssc,total:st}=agg(sub);
                  const plats=[...new Set(sub.map(r=>r.platform).filter(Boolean))];
                  return(
                    <div key={srcKey} onClick={()=>setFS(fS===srcKey?null:srcKey)}
                      style={{background:P.card,borderRadius:12,padding:16,border:`1.5px solid ${fS===srcKey?srcCfg.color:P.border}`,flex:"1 1 220px",cursor:"pointer",transition:"all .2s",boxShadow:"0 1px 3px rgba(0,0,0,0.04)",borderTop:`4px solid ${srcCfg.color}`}}>
                      <div style={{display:"flex",justifyContent:"space-between",marginBottom:12}}>
                        <div>
                          <div style={{fontSize:12,fontWeight:800,color:srcCfg.color}}>{srcCfg.label}</div>
                          <div style={{fontSize:9,color:P.sub}}>{plats.join(", ")||"—"}</div>
                        </div>
                        <div style={{fontSize:24,fontWeight:900,color:P.text}}>{st}</div>
                      </div>
                      {Object.entries(ST).sort((a,b)=>a[1].order-b[1].order).filter(([k])=>(ssc[k]||0)>0).map(([k,cfg])=>(
                        <HBar key={k} label={k} value={ssc[k]||0} total={st} color={cfg.color}/>
                      ))}
                      {srcKey==="PAID_SEARCH"&&gclidRows.length>0&&(
                        <div style={{marginTop:8,padding:"7px 9px",borderRadius:7,background:"#F0FDF4",border:"1px solid #BBF7D0"}}>
                          <div style={{fontSize:9,fontWeight:700,color:"#15803D"}}>Google Ads · GCLID confirmado</div>
                          <div style={{fontSize:16,fontWeight:900,color:P.text,marginTop:2}}>{gclidRows.length} <span style={{fontSize:9,color:P.sub,fontWeight:400}}>contactos</span></div>
                        </div>
                      )}
                    </div>
                  );
                })}
                <div style={{background:P.card,borderRadius:12,padding:16,border:`1px solid ${P.border}`,flex:"1 1 180px",boxShadow:"0 1px 3px rgba(0,0,0,0.04)"}}>
                  <div style={{fontSize:10,fontWeight:700,color:P.text,textTransform:"uppercase",letterSpacing:.5,marginBottom:10}}>Top Campañas</div>
                  {campaigns.map(([camp,cnt])=>(
                    <div key={camp} style={{marginBottom:7}}>
                      <div style={{display:"flex",justifyContent:"space-between",marginBottom:2}}>
                        <span style={{fontSize:9,color:P.text,fontWeight:500,maxWidth:"72%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{camp}</span>
                        <span style={{fontSize:10,fontWeight:700,color:P.text}}>{cnt}</span>
                      </div>
                      <div style={{background:"#E8EDF6",borderRadius:3,height:5}}>
                        <div style={{width:`${(cnt/total*100).toFixed(0)}%`,background:P.accent,height:"100%",borderRadius:3}}/>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {gclidRows.length>0&&(
                <div style={{background:P.card,borderRadius:12,padding:16,border:"1.5px solid #BBF7D0"}}>
                  <div style={{fontSize:10,fontWeight:700,color:"#15803D",textTransform:"uppercase",letterSpacing:.5,marginBottom:2}}>Google Ads · Contactos con Click ID</div>
                  <div style={{fontSize:9,color:P.sub,marginBottom:10}}>Campo <code style={{fontFamily:"monospace",color:P.accent}}>hs_google_click_id</code></div>
                  <div style={{overflowX:"auto"}}>
                    <table style={{width:"100%",borderCollapse:"collapse",fontSize:10}}>
                      <thead>
                        <tr style={{borderBottom:`2px solid ${P.border}`,background:"#F8FAFC"}}>
                          {["Nombre","Lead Status","País","Campaña","GCLID","Fecha"].map(h=>(
                            <th key={h} style={{textAlign:"left",padding:"6px 8px",color:P.sub,fontWeight:700,fontSize:9,textTransform:"uppercase",whiteSpace:"nowrap"}}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {gclidRows.map(r=>{
                          const st=sk(r.s),cfg=ST[st];
                          return(
                            <tr key={r.id} style={{borderBottom:`1px solid ${P.border}`,cursor:"pointer"}}
                              onMouseEnter={e=>e.currentTarget.style.background="#F8FAFD"}
                              onMouseLeave={e=>e.currentTarget.style.background="transparent"}
                              onClick={()=>window.open(`${HS}/${r.id}`,"_blank")}>
                              <td style={{padding:"7px 8px",fontWeight:600,color:P.text}}>{r.n}</td>
                              <td style={{padding:"7px 8px"}}><span style={{padding:"2px 6px",borderRadius:3,fontSize:9,fontWeight:700,background:cfg?.light,color:cfg?.color,border:`1px solid ${cfg?.border}`}}>{st}</span></td>
                              <td style={{padding:"7px 8px",fontSize:9,color:P.sub}}>{CC[r.c]?.flag} {r.c}</td>
                              <td style={{padding:"7px 8px",fontSize:9,color:P.sub,maxWidth:110,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{r.campaign}</td>
                              <td style={{padding:"7px 8px",fontSize:8,fontFamily:"monospace",color:"#16A34A"}}>{r.gclid?.slice(0,24)}…</td>
                              <td style={{padding:"7px 8px",fontSize:9,color:P.sub}}>{r.d.slice(5)}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* CONTACTOS */}
          {nav===2&&(
            <div style={{background:P.card,borderRadius:12,padding:18,border:`1px solid ${P.border}`}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:12,flexWrap:"wrap",gap:8}}>
                <div>
                  <div style={{fontSize:11,fontWeight:700,color:P.text,textTransform:"uppercase",letterSpacing:.5}}>{fSt||"Todos"} · {fC?`${CC[fC]?.flag} ${fC}`:"Col + Méx"}</div>
                  <div style={{fontSize:10,color:P.sub,marginTop:2}}>{tableData.length} registros</div>
                </div>
                <div style={{display:"flex",gap:4,flexWrap:"wrap"}}>
                  {Object.entries(ST).filter(([k])=>(sc[k]||0)>0).map(([k,c])=>(
                    <span key={k} onClick={()=>setFSt(k===fSt?null:k)}
                      style={{padding:"3px 7px",borderRadius:4,fontSize:9,fontWeight:700,cursor:"pointer",background:fSt===k?c.color:c.light,color:fSt===k?"#fff":c.color,border:`1px solid ${fSt===k?c.color:c.border}`}}>
                      {k} ({sc[k]||0})
                    </span>
                  ))}
                </div>
              </div>
              <div style={{overflowX:"auto"}}>
                <table style={{width:"100%",borderCollapse:"collapse",fontSize:10}}>
                  <thead>
                    <tr style={{borderBottom:`2px solid ${P.border}`,background:"#F8FAFC"}}>
                      {["#","Nombre","Status","País","Fuente","Plataforma","Campaña","GCLID","Fecha"].map(h=>(
                        <th key={h} style={{textAlign:"left",padding:"6px 9px",color:P.sub,fontWeight:700,fontSize:9,textTransform:"uppercase",whiteSpace:"nowrap"}}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((r,i)=>{
                      const st=sk(r.s),cfg=ST[st],ccfg=r.c?CC[r.c]:null,scfg=r.src?SC[r.src]:null;
                      return(
                        <tr key={r.id} style={{borderBottom:`1px solid ${P.border}`,cursor:"pointer"}}
                          onMouseEnter={e=>e.currentTarget.style.background="#F8FAFD"}
                          onMouseLeave={e=>e.currentTarget.style.background="transparent"}
                          onClick={()=>window.open(`${HS}/${r.id}`,"_blank")}>
                          <td style={{padding:"6px 9px",color:P.muted}}>{i+1}</td>
                          <td style={{padding:"6px 9px",fontWeight:600,color:P.text,whiteSpace:"nowrap"}}>{r.n}</td>
                          <td style={{padding:"6px 9px"}}><span style={{padding:"2px 6px",borderRadius:3,fontSize:9,fontWeight:700,background:cfg?.light||"#F1F5F9",color:cfg?.color||P.sub,border:`1px solid ${cfg?.border||P.border}`,whiteSpace:"nowrap"}}>{st}</span></td>
                          <td style={{padding:"6px 9px",fontWeight:600,color:ccfg?.accent||P.muted,whiteSpace:"nowrap"}}>{ccfg?`${ccfg.flag} ${r.c}`:"—"}</td>
                          <td style={{padding:"6px 9px"}}>{scfg?<span style={{padding:"2px 6px",borderRadius:3,fontSize:9,fontWeight:700,background:scfg.light,color:scfg.color,border:`1px solid ${scfg.border}`,whiteSpace:"nowrap"}}>{scfg.label}</span>:<span style={{color:P.muted}}>—</span>}</td>
                          <td style={{padding:"6px 9px",color:P.sub}}>{r.platform||"—"}</td>
                          <td style={{padding:"6px 9px",color:P.sub,maxWidth:110,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{r.campaign||"—"}</td>
                          <td style={{padding:"6px 9px"}}>{r.gclid?<span style={{fontSize:8,fontFamily:"monospace",color:"#16A34A",background:"#F0FDF4",padding:"1px 4px",borderRadius:2,border:"1px solid #BBF7D0"}}>GCLID</span>:<span style={{color:P.muted}}>—</span>}</td>
                          <td style={{padding:"6px 9px",color:P.sub,whiteSpace:"nowrap"}}>{r.d.slice(5)}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
