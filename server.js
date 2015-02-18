var express = require('express');
var app = express();
var request = ('request');

app.get('/', function (req, res) {
  res.json([ {
  "area" : "KANEOHE",
  "location" : "PALI TUNNELS D4 S",
  "address" : "600X PALI HWY",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346269607
}
, {
  "area" : "HONOLULU",
  "location" : "H1E AIRPORT OFF",
  "address" : "16X E H1 FWY",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346269492
}
, {
  "area" : "HONOLULU",
  "address" : "KILAUEA AVE&WAIALAE AVE",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346269077
}
, {
  "area" : "HONOLULU",
  "address" : "HOAWA LN&S KING ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346268587
}
, {
  "area" : "HONOLULU",
  "address" : "MAKALOA ST&SHERIDAN ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346268300
}
, {
  "area" : "KANEOHE",
  "location" : "H3E ESCAPE RAMP",
  "address" : "88X E H3 FWY",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346267940
}
, {
  "area" : "AIRPORT",
  "address" : "AOKEA PL&ELLIOTT ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346267773
}
, {
  "area" : "HONOLULU",
  "address" : "DUVAL ST&KANAINA AVE",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346266849
}
, {
  "area" : "KAPOLEI",
  "location" : "DISNEY VACATION CLUB RESORT &",
  "address" : "92118X ALIINUI DR",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346266386
}
, {
  "area" : "HONOLULU",
  "address" : "99X WAIMANU ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346266070
}
, {
  "area" : "HONOLULU",
  "address" : "133X MOOKAULA ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346265979
}
, {
  "area" : "HONOLULU",
  "address" : "DATE ST&ISENBERG ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346265919
}
, {
  "area" : "MILILANI",
  "location" : "MILILANI TWN CTR",
  "address" : "95124X MEHEULA PKWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346264406
}
, {
  "area" : "HONOLULU",
  "address" : "111X UNIVERSITY AVE",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346263781
}
, {
  "area" : "MILILANI",
  "location" : "H2S MEHEULA ON",
  "address" : "5X S H2 FWY",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346263644
}
, {
  "area" : "KAILUA",
  "address" : "AULOA RD&PALI HWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346263141
}
, {
  "location" : "KAAHUMANU PLZ",
  "address" : "112X KINAU ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346263093
}
, {
  "area" : "HONOLULU",
  "location" : "KAAHUMANU PLZ",
  "address" : "112X KINAU ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346262705
}
, {
  "area" : "HONOLULU",
  "location" : "SAFEWAY PALI",
  "address" : "136X PALI HWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346262575
}
, {
  "area" : "AIEA",
  "location" : "LONGS PEARLRIDGE",
  "address" : "98100X MOANALUA RD",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346262452
}
, {
  "area" : "PEARL CITY",
  "location" : "LONGS PEARL CITY SC",
  "address" : "85X KAM HWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346262405
}
, {
  "area" : "KAILUA",
  "address" : "133X KAINUI DR",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346262346
}
, {
  "area" : "KAILUA",
  "address" : "90X KAINUI DR",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346262318
}
, {
  "area" : "HONOLULU",
  "location" : "ALA MOANA SC/STARBUCKS",
  "address" : "145X ALA MOANA",
  "code" : "560",
  "type" : "TRAFFIC INCIDENT - NO COLLISION",
  "date" : 1346262167
}
, {
  "area" : "HONOLULU",
  "location" : "H1E VINEYARD OFF",
  "address" : "20X E H1 FWY",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346261857
}
, {
  "area" : "HONOLULU",
  "address" : "KAHEKA ST&S KING ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346261045
}
, {
  "area" : "AIEA",
  "location" : "H1E KAONOHI OP",
  "address" : "12X E H1 FWY",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346260050
}
, {
  "area" : "HONOLULU",
  "address" : "130X PALOLO AVE",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346260028
}
, {
  "area" : "HONOLULU",
  "location" : "PALOLO/WAIALAE",
  "address" : "325X WAIALAE AVE",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346259967
}
, {
  "area" : "HONOLULU",
  "address" : "152X PALOLO AVE",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346259826
}
, {
  "area" : "WAIPAHU",
  "location" : "BOH WAIKELE",
  "address" : "94081X LUMIAINA ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346259816
}
, {
  "area" : "KAPOLEI",
  "location" : "KAPOLEI SC/YOUNG LAUNDRY",
  "address" : "59X FARRINGTON HWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346258932
}
, {
  "area" : "KANEOHE",
  "address" : "KAM HWY&KANEOHE BAY DR",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346258923
}
, {
  "area" : "HONOLULU",
  "location" : "SEARS AMSC",
  "address" : "145X ALA MOANA",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346258633
}
, {
  "area" : "HONOLULU",
  "location" : "H1E KALIHI OP",
  "address" : "20X E H1 FWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346258240
}
, {
  "area" : "HONOLULU",
  "address" : "N NIMITZ HWY&SAND ISLAND ACC R",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346258007
}
, {
  "area" : "HONOLULU",
  "location" : "GOLDEN DUCK",
  "address" : "122X S KING ST",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346256614
}
, {
  "area" : "HONOLULU",
  "location" : "24HR FITNESS KAPIOLA",
  "address" : "168X KAPIOLANI BLVD",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346255862
}
, {
  "area" : "HONOLULU",
  "address" : "KAALA ST&OAHU AVE",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346255614
}
, {
  "area" : "AIEA",
  "location" : "H3E W HARANO TUNNEL",
  "address" : "H3E W HARANO TUNNEL",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346254851
}
, {
  "area" : "HONOLULU",
  "address" : "HULI ST&HUNA ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346254042
}
, {
  "area" : "KAILUA",
  "address" : "KAILUA RD&KALANIANAOLE HWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346254039
}
, {
  "area" : "MILILANI",
  "location" : "WAL MART MILILANI",
  "address" : "95055X LANIKUHANA AVE",
  "code" : "560",
  "type" : "TRAFFIC INCIDENT - NO COLLISION",
  "date" : 1346252925
}
, {
  "area" : "HONOLULU",
  "location" : "H1E NIMITZ OFF PH",
  "address" : "15X E H1 FWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346252722
}
, {
  "area" : "HONOLULU",
  "location" : "H1E RADFORD DR OP",
  "address" : "15X E H1 FWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346252646
}
, {
  "area" : "HONOLULU",
  "address" : "PALI HWY&WAOKANAKA ST",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346252638
}
, {
  "area" : "WAIPAHU",
  "location" : "WAIPAHU HS",
  "address" : "94121X FARRINGTON HWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346252274
}
, {
  "area" : "HONOLULU",
  "location" : "AALA PK",
  "address" : "28X N KING ST",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346252030
}
, {
  "area" : "KANEOHE",
  "location" : "WILSON TUNNEL D4 S",
  "address" : "45099X LIKELIKE HWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346251831
}
, {
  "area" : "KANEOHE",
  "location" : "WILSON TUNNEL D4 S",
  "address" : "45099X LIKELIKE HWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346251440
}
, {
  "area" : "HONOLULU",
  "address" : "150X LILIHA ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346251293
}
, {
  "area" : "AIEA",
  "location" : "H1E AIEA OFF",
  "address" : "H1E AIEA OFF",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346251175
}
, {
  "area" : "WAIMANALO",
  "location" : "WAIMANALO SC",
  "address" : "41153X KALANIANAOLE HWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346251148
}
, {
  "area" : "HONOLULU",
  "address" : "146X MOLEHU DR",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346250793
}
, {
  "area" : "WAIPAHU",
  "location" : "H1E WAIKELE OFF",
  "address" : "7X E H1 FWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346250002
}
, {
  "area" : "KANEOHE",
  "address" : "ANOI RD&LIKELIKE HWY",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346249386
}
, {
  "area" : "KALAELOA",
  "address" : "ENTERPRISE AVE&FRANKLIN D ROOS",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346249053
}
, {
  "area" : "KAILUA",
  "address" : "KALANIANAOLE HWY&KAPAA QUARRY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346247927
}
, {
  "area" : "HONOLULU",
  "address" : "ALAKEA ST&S NIMITZ HWY",
  "code" : "550V",
  "type" : "MOTOR VEHICLE COLLISION - TOWED",
  "date" : 1346247681
}
, {
  "area" : "HONOLULU",
  "address" : "41X KALIHI ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346247410
}
, {
  "area" : "EWA BEACH",
  "address" : "AAWA DR&FORT WEAVER RD",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346247359
}
, {
  "area" : "HONOLULU",
  "location" : "ZIPPYS NIMITZ",
  "address" : "66X N NIMITZ HWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346247330
}
, {
  "area" : "WAHIAWA",
  "location" : "DOLE PLANTATION",
  "address" : "64155X KAM HWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346247055
}
, {
  "area" : "AIEA",
  "location" : "H3W E HARANO TUNNEL",
  "address" : "H3W E HARANO TUNNEL",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346246397
}
, {
  "area" : "AIEA",
  "location" : "HARANO TUNNEL H3W",
  "address" : "57X W H3 FWY",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346246369
}
, {
  "area" : "WAHIAWA",
  "address" : "S KAM HWY&OLIVE AVE",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346246057
}
, {
  "area" : "PEARL CITY",
  "location" : "H1W WAIPAHU OFF",
  "address" : "9X W H1 FWY",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346245204
}
, {
  "area" : "HONOLULU",
  "address" : "722X WAIOPUA ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346242654
}
, {
  "area" : "EWA BEACH",
  "address" : "FORT WEAVER RD&RENTON RD",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346242447
}
, {
  "area" : "KAPOLEI",
  "address" : "KALAELOA BLVD&MALAKOLE ST",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346241598
}
, {
  "area" : "HONOLULU",
  "address" : "181X ST LOUIS DR",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346241556
}
, {
  "area" : "AIEA",
  "location" : "H1E KAONOHI OP",
  "address" : "12X E H1 FWY",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346240029
}
, {
  "area" : "AIEA",
  "location" : "H1W AIEA OFF",
  "address" : "13X W H1 FWY",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346239838
}
, {
  "area" : "KANEOHE",
  "address" : "45011X WAIKALUA RD",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346238327
}
, {
  "area" : "HONOLULU",
  "address" : "123X WILHELMINA RISE",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346237740
}
, {
  "area" : "AIEA",
  "location" : "H1W KAAHUMANU OP",
  "address" : "11X W H1 FWY",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346236746
}
, {
  "area" : "HONOLULU",
  "address" : "301X PUALEI CIR",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346229992
}
, {
  "area" : "KAILUA",
  "location" : "SHELL KAILUA",
  "address" : "43X KUULEI RD",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346229740
}
, {
  "area" : "EWA BEACH",
  "location" : "H1W NORTH SOUTH OFF",
  "address" : "4X W H1 FWY",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346229323
}
, {
  "area" : "HONOLULU",
  "location" : "H1E MIDDLE ST TUNNEL",
  "address" : "H1E MIDDLE ST TUNNEL",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346228851
}
, {
  "area" : "KAILUA",
  "location" : "MCDONALDS KAILUA",
  "address" : "40X KUULEI RD",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346226702
}
, {
  "area" : "HONOLULU",
  "location" : "H1W PUNCHBOWL ON",
  "address" : "22X W H1 FWY",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346226089
}
, {
  "area" : "AIEA",
  "address" : "HONOMANU ST&MOANALUA RD",
  "code" : "634",
  "type" : "TRAFFIC SIGNAL PROBLEM",
  "date" : 1346223121
}
, {
  "area" : "MILILANI",
  "location" : "H2N MAUKA OFF",
  "address" : "5X N H2 FWY",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346219489
}
, {
  "area" : "KANEOHE",
  "address" : "IHILANI ST&PUOHALA ST",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346218490
}
, {
  "area" : "HONOLULU",
  "address" : "NUUANU AVE&ROBINSON LN",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346218256
}
, {
  "area" : "KANEOHE",
  "location" : "KAM ONTO H3E HALEKOU",
  "address" : "KAM ONTO H3E HALEKOU",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346218171
}
, {
  "area" : "PEARL CITY",
  "address" : "FARRINGTON HWY&WAIAWA RD",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346217899
}
, {
  "area" : "WAHIAWA",
  "address" : "KAM HWY&WHITMORE AVE",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346217562
}
, {
  "area" : "HONOLULU",
  "address" : "S JUDD ST&NUUANU AVE",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346217512
}
, {
  "area" : "HALEIWA",
  "address" : "66047X PAALAA RD",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346216774
}
, {
  "area" : "HALEIWA",
  "location" : "MCDONALDS HALEIWA",
  "address" : "66045X KAM HWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346216713
}
, {
  "area" : "HONOLULU",
  "address" : "AKINA ST&KALIHI ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346215483
}
, {
  "area" : "HONOLULU",
  "address" : "KAPIOLANI BLVD&WARD AVE",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346215049
}
, {
  "area" : "KAPOLEI",
  "location" : "ASSAGIO'S KAPOLEI",
  "address" : "77X KAMOKILA BLVD",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346214207
}
, {
  "area" : "HONOLULU",
  "location" : "KING FROM MFE",
  "address" : "38X E MOANALUA FWY",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346213248
}
, {
  "area" : "PEARL CITY",
  "location" : "H1W WAIMALU OFF",
  "address" : "11X W H1 FWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346212640
}
, {
  "area" : "AIEA",
  "location" : "PRSC",
  "address" : "98020X PALI MOMI ST",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346212184
}
, {
  "area" : "HONOLULU",
  "location" : "TIMES MARKET MCCULLY",
  "address" : "177X S KING ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346211839
}
, {
  "area" : "HONOLULU",
  "location" : "H1E LILIHA OP",
  "address" : "21X E H1 FWY",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346211346
}
, {
  "area" : "HONOLULU",
  "location" : "H1W VINEYARD OFF",
  "address" : "22X W H1 FWY",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346211133
}
, {
  "area" : "KANEOHE",
  "location" : "WILSON TUNNEL D4 N",
  "address" : "45099X LIKELIKE HWY",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346210529
}
, {
  "area" : "KAILUA",
  "location" : "SAFEWAY KAILUA HAMAK",
  "address" : "20X HAMAKUA DR",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346210474
}
, {
  "area" : "HONOLULU",
  "address" : "NUUANU PALI DR&PALI HWY",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346209842
}
, {
  "area" : "HONOLULU",
  "address" : "KALANIANAOLE HWY&PAIKO DR",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346209840
}
, {
  "area" : "WAIANAE",
  "address" : "ALA HEMA ST&FARRINGTON HWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346207510
}
, {
  "area" : "AIEA",
  "location" : "MFW ONTO H1W",
  "address" : "13X W H1 FWY",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346207490
}
, {
  "area" : "WAIANAE",
  "address" : "ALA WALUA ST&FARRINGTON HWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346207464
}
, {
  "area" : "HONOLULU",
  "location" : "OTS INC THE BUS",
  "address" : "81X MIDDLE ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346207363
}
, {
  "area" : "HONOLULU",
  "address" : "PALI HWY&S SCHOOL ST",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346206561
}
, {
  "area" : "PEARL CITY",
  "location" : "HOME DEPOT PEARL CIT",
  "address" : "102X KAM HWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346206482
}
, {
  "area" : "HONOLULU",
  "location" : "MID PACIFIC INSTITUTE",
  "address" : "244X KAALA ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346205985
}
, {
  "area" : "HONOLULU",
  "address" : "KAAHUE ST&KAPOHO PL",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346205319
}
, {
  "area" : "HONOLULU",
  "location" : "REEF HTL",
  "address" : "216X KALIA RD",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346205161
}
, {
  "area" : "HONOLULU",
  "address" : "ANALII ST&POOLA ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346205145
}
, {
  "area" : "HONOLULU",
  "address" : "KALAKAUA AVE&KAPIOLANI BLVD",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346205065
}
, {
  "area" : "PEARL CITY",
  "location" : "HOME DEPOT PEARL CIT",
  "address" : "102X KAM HWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346204740
}
, {
  "area" : "HONOLULU",
  "address" : "KAPIOLANI BLVD&SHERIDAN ST",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346203830
}
, {
  "area" : "HONOLULU",
  "location" : "FIVE REGENTS CONDO",
  "address" : "288X ALA ILIMA",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346203114
}
, {
  "area" : "PEARL CITY",
  "location" : "HOME DEPOT PEARL CIT",
  "address" : "102X KAM HWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346202859
}
, {
  "area" : "AIEA",
  "location" : "MFW AIEA OFF",
  "address" : "3X W MOANALUA FWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346202284
}
, {
  "area" : "KAPOLEI",
  "location" : "JITB KAPOLEI",
  "address" : "59X FARRINGTON HWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346202215
}
, {
  "area" : "AIEA",
  "address" : "KAM HWY&MCGREW LP",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346201468
}
, {
  "area" : "HONOLULU",
  "address" : "KAMAKEE ST&KAPIOLANI BLVD",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346201303
}
, {
  "area" : "MILILANI",
  "location" : "H2S MILILANI OFF",
  "address" : "5X S H2 FWY",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346201269
}
, {
  "area" : "HONOLULU",
  "address" : "NUUANU AVE&N VINEYARD BLVD",
  "code" : "550V",
  "type" : "MOTOR VEHICLE COLLISION - TOWED",
  "date" : 1346201052
}
, {
  "area" : "AIEA",
  "location" : "H1W AIEA OFF",
  "address" : "13X W H1 FWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346199761
}
, {
  "area" : "AIEA",
  "address" : "KOMO MAI DR&NAHELE ST",
  "code" : "634",
  "type" : "TRAFFIC SIGNAL PROBLEM",
  "date" : 1346198939
}
, {
  "area" : "AIEA",
  "location" : "AIEA FROM H1W",
  "address" : "13X W H1 FWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346198890
}
, {
  "area" : "KANEOHE",
  "address" : "KAHEKILI HWY&LIKELIKE HWY",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346198719
}
, {
  "area" : "AIEA",
  "location" : "MACYS PEARLRIDGE",
  "address" : "98020X KAONOHI ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346198613
}
, {
  "area" : "HONOLULU",
  "location" : "UNIVERSITY ONTO H1E",
  "address" : "UNIVERSITY ONTO H1E",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346198596
}
, {
  "area" : "WAIPAHU",
  "location" : "WAIKELE CTR",
  "address" : "94079X LUMIAINA ST",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346198329
}
, {
  "address" : "FLAG DWN HAZ DRVR",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346198243
}
, {
  "area" : "HONOLULU",
  "location" : "H1E AALA OP",
  "address" : "21X E H1 FWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346198046
}
, {
  "area" : "KAHUKU",
  "location" : "TURTLE BAY",
  "address" : "57002X KUILIMA DR",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346197810
}
, {
  "area" : "WAIANAE",
  "address" : "FARRINGTON HWY&WATER ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346197807
}
, {
  "area" : "HONOLULU",
  "address" : "DATE ST&UNIVERSITY AVE",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346197136
}
, {
  "area" : "HONOLULU",
  "location" : "H1W RADFORD PED OP",
  "address" : "14X W H1 FWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346196834
}
, {
  "area" : "AIEA",
  "address" : "HALE MOMI PL&MOANALUA RD",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346196800
}
, {
  "area" : "WAIANAE",
  "location" : "ZABLAN BCH",
  "address" : "89008X LAUMANIA AVE",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346196665
}
, {
  "area" : "WAHIAWA",
  "address" : "KAMANANUI RD&KAUKONAHUA RD",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346196625
}
, {
  "area" : "KANEOHE",
  "address" : "47049X HUI AEKO PL",
  "code" : "560",
  "type" : "TRAFFIC INCIDENT - NO COLLISION",
  "date" : 1346195652
}
, {
  "area" : "HONOLULU",
  "location" : "ALA MOANA SC - MACYS",
  "address" : "145X ALA MOANA",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346195477
}
, {
  "area" : "MOANALUA TER",
  "location" : "MILITARY FAMILY SUPPORT CTR",
  "address" : "482X BOUGAINVILLE DR",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346195252
}
, {
  "area" : "KANEOHE",
  "location" : "TIMES MARKET KANEOHE",
  "address" : "45093X KAM HWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346195224
}
, {
  "area" : "HONOLULU",
  "address" : "ALDER ST&RYCROFT ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346195129
}
, {
  "area" : "HONOLULU",
  "address" : "220X LAUULA ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346194477
}
, {
  "area" : "HONOLULU",
  "location" : "SALLYS HAWAIIAN 600",
  "address" : "60X N KING ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346194337
}
, {
  "area" : "HONOLULU",
  "address" : "FORT ST MALL&S NIMITZ HWY",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346194179
}
, {
  "area" : "KANEOHE",
  "address" : "HAIKU RD&KAHEKILI HWY",
  "code" : "634",
  "type" : "TRAFFIC SIGNAL PROBLEM",
  "date" : 1346193981
}
, {
  "area" : "HONOLULU",
  "location" : "YACHT HARBOR TOWERS",
  "address" : "160X ALA MOANA",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346193904
}
, {
  "area" : "MILILANI",
  "address" : "KAM HWY&MEHEULA PKWY",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346193821
}
, {
  "area" : "KANEOHE",
  "address" : "KAM HWY&WAIAHOLE VALLEY RD",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346193592
}
, {
  "area" : "AIEA",
  "location" : "BOH PEARLRIDGE",
  "address" : "98021X PALI MOMI ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346193440
}
, {
  "area" : "HONOLULU",
  "address" : "OAHU AVE&UNIVERSITY AVE",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346193262
}
, {
  "area" : "HONOLULU",
  "location" : "MOANALUA HS",
  "address" : "282X ALA ILIMA",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346193249
}
, {
  "area" : "HONOLULU",
  "address" : "CASTLE ST&KAPAHULU AVE",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346193092
}
, {
  "area" : "KAPOLEI",
  "location" : "KAPOLEI SC - KFC",
  "address" : "59X FARRINGTON HWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346192879
}
, {
  "area" : "EWA BEACH",
  "location" : "H1W NORTH SOUTH OFF",
  "address" : "4X W H1 FWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346192602
}
, {
  "area" : "KAILUA",
  "address" : "136X MOKOLEA DR",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346192408
}
, {
  "area" : "KANEOHE",
  "location" : "HAIKU HALE BLDGS A B",
  "address" : "46028X KAHUHIPA ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346191989
}
, {
  "area" : "KANEOHE",
  "address" : "HAIKU RD&KAHEKILI HWY",
  "code" : "634",
  "type" : "TRAFFIC SIGNAL PROBLEM",
  "date" : 1346191987
}
, {
  "area" : "WAIPAHU",
  "address" : "94022X ANIANI PL",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346191667
}
, {
  "area" : "AIEA",
  "address" : "KAONOHI ST&MOANALUA RD",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346191357
}
, {
  "area" : "HONOLULU",
  "location" : "COSTCO ALAKAWA",
  "address" : "52X ALAKAWA ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346191176
}
, {
  "area" : "KANEOHE",
  "address" : "HAIKU RD&KAHEKILI HWY",
  "code" : "634",
  "type" : "TRAFFIC SIGNAL PROBLEM",
  "date" : 1346190897
}
, {
  "area" : "WAIANAE",
  "location" : "WAIANAE COMP CENTER",
  "address" : "86026X FARRINGTON HWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346190544
}
, {
  "area" : "HONOLULU",
  "address" : "IWI WAY&PAULA DR",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346190525
}
, {
  "area" : "WAIPAHU",
  "location" : "CHEVRON WAIPAHU",
  "address" : "94048X FARRINGTON HWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346189491
}
, {
  "area" : "HONOLULU",
  "address" : "KILOHI ST&KINI PL",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346189228
}
, {
  "area" : "AIEA",
  "location" : "KEAWE GRILL",
  "address" : "98008X KAM HWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346189199
}
, {
  "address" : "WARD B4 S BERE",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346189062
}
, {
  "area" : "WAIPAHU",
  "location" : "H1W MILITARY ACC OP",
  "address" : "6X W H1 FWY",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346188191
}
, {
  "area" : "HONOLULU",
  "location" : "ROSS KEEAUMOKU",
  "address" : "71X KEEAUMOKU ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346188105
}
, {
  "area" : "HONOLULU",
  "location" : "OCCC OAHU COMMUNITY",
  "address" : "219X KAM HWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346187977
}
, {
  "area" : "HONOLULU",
  "address" : "N NIMITZ HWY&SAND ISLAND ACC R",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346187947
}
, {
  "area" : "KAILUA",
  "location" : "BUZZS KAILUA",
  "address" : "41X KAWAILOA RD",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346187860
}
, {
  "area" : "AIRPORT",
  "address" : "AOLELE ST&LAGOON DR",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346187789
}
, {
  "area" : "HONOLULU",
  "location" : "H1E STADIUM ON",
  "address" : "14X E H1 FWY",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346186980
}
, {
  "area" : "AIEA",
  "location" : "ASB PEARLRIDGE",
  "address" : "98020X KAM HWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346186782
}
, {
  "area" : "WAIPAHU",
  "location" : "H1W KUNIA OFF",
  "address" : "5X W H1 FWY",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346186746
}
, {
  "area" : "HONOLULU",
  "location" : "MFW RED HILL OFF",
  "address" : "30X W MOANALUA FWY",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346186525
}
, {
  "area" : "HONOLULU",
  "location" : "H1W PALI OFF",
  "address" : "22X W H1 FWY",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346185958
}
, {
  "area" : "WAIPAHU",
  "location" : "WAIPAHU HS",
  "address" : "94121X FARRINGTON HWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346185599
}
, {
  "area" : "HONOLULU",
  "address" : "S KING ST&PUNCHBOWL ST",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346185589
}
, {
  "area" : "KANEOHE",
  "location" : "H3E E HARANO TUNNEL",
  "address" : "H3E E HARANO TUNNEL",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346184146
}
, {
  "area" : "HONOLULU",
  "address" : "KAPAHULU AVE&WINAM AVE",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346183959
}
, {
  "area" : "HONOLULU",
  "location" : "MFW PUULOA OFF",
  "address" : "40X W MOANALUA FWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346183555
}
, {
  "area" : "WAIPAHU",
  "location" : "H1E H2N OFF",
  "address" : "8X E H1 FWY",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346182663
}
, {
  "area" : "HONOLULU",
  "address" : "KEEAUMOKU ST&MAKALOA ST",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346182377
}
, {
  "area" : "WAIPAHU",
  "location" : "KUNIA ONTO H1E",
  "address" : "KUNIA ONTO H1E",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346181892
}
, {
  "area" : "PEARL CITY",
  "location" : "H1W WAIMALU OFF",
  "address" : "11X W H1 FWY",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346181734
}
, {
  "area" : "HONOLULU",
  "location" : "H1E KALANIANAOLE",
  "address" : "27X E H1 FWY",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346181661
}
, {
  "area" : "HONOLULU",
  "location" : "COSTCO ALAKAWA",
  "address" : "52X ALAKAWA ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346181584
}
, {
  "area" : "HONOLULU",
  "location" : "GENTRY PACIFIC CTR",
  "address" : "56X N NIMITZ HWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346181501
}
, {
  "area" : "HONOLULU",
  "address" : "223X CITRON ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346181390
}
, {
  "area" : "HONOLULU",
  "address" : "MOANAWAI PL&PALI HWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346180537
}
, {
  "area" : "KAPOLEI",
  "location" : "GERMAINES LUAU",
  "address" : "91011X OLAI ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346180436
}
, {
  "area" : "WAHIAWA",
  "address" : "KAM HWY&LEILEHUA GOLF CRS RD",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346180317
}
, {
  "area" : "HONOLULU",
  "address" : "BETHEL ST&S KING ST",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346179948
}
, {
  "area" : "HONOLULU",
  "address" : "KOAPAKA ST&LAGOON DR",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346179811
}
, {
  "area" : "EWA BEACH",
  "address" : "FORT WEAVER RD&RENTON RD",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346179505
}
, {
  "area" : "PEARL CITY",
  "address" : "167X HOOLEHUA ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346178637
}
, {
  "area" : "KAILUA",
  "location" : "KAILUA BCH CTR",
  "address" : "13X KAILUA RD",
  "code" : "560",
  "type" : "TRAFFIC INCIDENT - NO COLLISION",
  "date" : 1346178480
}
, {
  "location" : "KAPOLEI THEATRES",
  "address" : "89X KAMOKILA BLVD",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346178167
}
, {
  "area" : "HONOLULU",
  "location" : "MFE RED HILL OFF",
  "address" : "19X E MOANALUA FWY",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346178077
}
, {
  "area" : "HONOLULU",
  "address" : "HARDING AVE&KAPIOLANI BLVD",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346177289
}
, {
  "area" : "HONOLULU",
  "address" : "74X EKELA AVE",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346177186
}
, {
  "area" : "HONOLULU",
  "address" : "BOUGAINVILLE DR&SALT LAKE BLVD",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346176695
}
, {
  "area" : "HONOLULU",
  "address" : "HELUMOA RD&LEWERS ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346175392
}
, {
  "area" : "PEARL CITY",
  "location" : "BLAISDELL PK",
  "address" : "31X KAM HWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346175322
}
, {
  "area" : "HONOLULU",
  "address" : "METCALF ST&WILDER AVE",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346175142
}
, {
  "area" : "WAIPAHU",
  "location" : "H1E PEARL CITY OFF W",
  "address" : "H1E PEARL CITY OFF W",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346174732
}
, {
  "area" : "HONOLULU",
  "location" : "LONGS KAIMUKI SC",
  "address" : "322X WAIALAE AVE",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346174531
}
, {
  "area" : "HONOLULU",
  "address" : "N KUAKINI ST&LILIHA ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346174530
}
, {
  "area" : "HONOLULU",
  "location" : "HPD ALAPAI",
  "address" : "80X S BERETANIA ST",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346174138
}
, {
  "area" : "KAPOLEI",
  "location" : "KO OLINA RESORT",
  "address" : "92148X ALIINUI DR",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346173665
}
, {
  "area" : "KAILUA",
  "location" : "HPD KAILUA",
  "address" : "21X KUULEI RD",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346173527
}
, {
  "area" : "KAPOLEI",
  "location" : "DISNEY AULANI RESORT",
  "address" : "92118X ALIINUI DR",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346173446
}
, {
  "area" : "AIEA",
  "location" : "NEWTOWN SQR",
  "address" : "98124X KAAHUMANU ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346172970
}
, {
  "area" : "KAPOLEI",
  "address" : "91101X PALALA ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346172724
}
, {
  "area" : "HONOLULU",
  "address" : "N KING ST&MAUNAKEA ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346172547
}
, {
  "area" : "KANEOHE",
  "location" : "WINDWARD CITY SC/STAR BUCKS",
  "address" : "45048X KANEOHE BAY DR",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346172400
}
, {
  "area" : "WAIPAHU",
  "location" : "ARBYS",
  "address" : "MOKUOLA ST&MOLOALO ST",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346172269
}
, {
  "area" : "HONOLULU",
  "address" : "N KING ST&SMITH ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346171866
}
, {
  "area" : "HONOLULU",
  "location" : "ARMY MUSEUM FT DERUS",
  "address" : "215X KALIA RD",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346171646
}
, {
  "area" : "HONOLULU",
  "location" : "H1W LIKELIKE OFF",
  "address" : "20X W H1 FWY",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346171533
}
, {
  "area" : "HONOLULU",
  "address" : "AUAHI ST&WARD AVE",
  "code" : "560",
  "type" : "TRAFFIC INCIDENT - NO COLLISION",
  "date" : 1346170233
}
, {
  "area" : "HONOLULU",
  "location" : "STRAUB CLINIC & HOSPITAL",
  "address" : "88X S KING ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346169432
}
, {
  "location" : "HPD PEARL CITY SUB",
  "address" : "98127X KAAHUMANU ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346169324
}
, {
  "area" : "HONOLULU",
  "location" : "CARLS JR NIMITZ",
  "address" : "214X N NIMITZ HWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346168423
}
, {
  "area" : "WAIPAHU",
  "location" : "H2N KA UKA ON",
  "address" : "2X N H2 FWY",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346168301
}
, {
  "area" : "HONOLULU",
  "location" : "KAPENA FALLS",
  "address" : "230X PALI HWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346167463
}
, {
  "area" : "HONOLULU",
  "location" : "PALI ONTO H1E",
  "address" : "PALI ONTO H1E",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346167320
}
, {
  "area" : "HONOLULU",
  "address" : "NUUANU AVE&PALI HWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346167219
}
, {
  "area" : "HONOLULU",
  "address" : "PALI HWY&PAUOA RD",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346167210
}
, {
  "area" : "PEARL CITY",
  "location" : "H1W WAIPAHU OFF",
  "address" : "9X W H1 FWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346167202
}
, {
  "area" : "AIEA",
  "address" : "HONOMANU ST&MOANALUA RD",
  "code" : "634",
  "type" : "TRAFFIC SIGNAL PROBLEM",
  "date" : 1346167163
}
, {
  "area" : "HONOLULU",
  "address" : "LIKELIKE HWY&WILSON ST",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346166914
}
, {
  "area" : "HONOLULU",
  "address" : "157X MOLINA ST",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346166827
}
, {
  "area" : "HONOLULU",
  "location" : "H1W AIRPORT OFF",
  "address" : "16X W H1 FWY",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346166592
}
, {
  "area" : "HONOLULU",
  "location" : "WASHINGTON MS",
  "address" : "163X S KING ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346166327
}
, {
  "area" : "AIEA",
  "address" : "HONOMANU ST&MOANALUA RD",
  "code" : "634",
  "type" : "TRAFFIC SIGNAL PROBLEM",
  "date" : 1346166098
}
, {
  "area" : "AIEA",
  "location" : "H1E H3E OFF",
  "address" : "13X E H1 FWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346165899
}
, {
  "area" : "AIEA",
  "location" : "TIMES MARKET AIEA SC",
  "address" : "99011X AIEA HTS DR",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346165755
}
, {
  "area" : "AIEA",
  "location" : "H1W KAAHUMANU OP",
  "address" : "11X W H1 FWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346165650
}
, {
  "area" : "KANEOHE",
  "location" : "H3E KAM OFF",
  "address" : "H3E KAM OFF",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346165541
}
, {
  "area" : "HONOLULU",
  "location" : "STADIUM ONTO H1E",
  "address" : "14X E H1 FWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346165364
}
, {
  "area" : "HONOLULU",
  "location" : "H1E KOKO HEAD OFF",
  "address" : "26X E H1 FWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346165349
}
, {
  "area" : "WAIANAE",
  "address" : "MILL ST&PLANTATION RD",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346165330
}
, {
  "area" : "HONOLULU",
  "address" : "21X AINAHOU ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346165291
}
, {
  "area" : "HONOLULU",
  "location" : "H1E MIDDLE OFF",
  "address" : "18X E H1 FWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346165226
}
, {
  "area" : "HONOLULU",
  "location" : "H1E LIKELIKE OFF",
  "address" : "20X E H1 FWY",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346165147
}
, {
  "area" : "HONOLULU",
  "address" : "HOUGHTAILING ST&OLOMEA ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346165085
}
, {
  "area" : "HONOLULU",
  "address" : "HOUGHTAILING ST&OLOMEA ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346165060
}
, {
  "area" : "WAIPAHU",
  "location" : "H1E WAIPAHU ON",
  "address" : "E H1 FWY/WAIPAHU ST EXT",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346165010
}
, {
  "area" : "HONOLULU",
  "address" : "KAPIOLANI BLVD&KEEAUMOKU ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346164724
}
, {
  "area" : "TRIPLER",
  "location" : "FACILITIES MANAGEMENT BUILDING",
  "address" : "45X PATTERSON RD",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346164617
}
, {
  "area" : "AIEA",
  "location" : "SHELL AIEA",
  "address" : "99017X MOANALUA RD",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346164540
}
, {
  "area" : "WAIPAHU",
  "location" : "H1E KUNIA ON",
  "address" : "5X E H1 FWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346164489
}
, {
  "area" : "EWA BEACH",
  "address" : "AAWA DR&FORT WEAVER RD",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346164302
}
, {
  "area" : "WAIPAHU",
  "location" : "REFLECTIONS GLASS",
  "address" : "94035X UKEE ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346164267
}
, {
  "area" : "WAIPAHU",
  "location" : "H1E KUNIA ON",
  "address" : "5X E H1 FWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346164051
}
, {
  "area" : "AIEA",
  "location" : "STADIUM FROM MFE",
  "address" : "10X E MOANALUA FWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346163937
}
, {
  "area" : "WAHIAWA",
  "address" : "KAMANANUI RD&KAUKONAHUA RD",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346163890
}
, {
  "area" : "KAILUA",
  "location" : "MCDONALDS KAILUA",
  "address" : "105X KEOLU DR",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346163777
}
, {
  "area" : "EWA BEACH",
  "location" : "KUNIA ONTO H1W",
  "address" : "KUNIA ONTO H1W",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346163565
}
, {
  "area" : "EWA BEACH",
  "location" : "H1E KUNIA OFF",
  "address" : "5X E H1 FWY",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346163416
}
, {
  "area" : "KAPOLEI",
  "address" : "KAMAAHA LP&KUMUIKI ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346163308
}
, {
  "area" : "KAILUA",
  "address" : "KALANIANAOLE HWY&ULUPII ST",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346162619
}
, {
  "area" : "EWA BEACH",
  "address" : "KAPOLEI PKWY&KUALAKAI PKWY",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346162487
}
, {
  "area" : "HONOLULU",
  "address" : "PUNCHBOWL ST&S VINEYARD BLVD",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346162032
}
, {
  "area" : "PEARL CITY",
  "location" : "H1W WAIMALU OFF",
  "address" : "11X W H1 FWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346161401
}
, {
  "area" : "HONOLULU",
  "location" : "CENTURY CENTER",
  "address" : "175X KALAKAUA AVE",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346161271
}
, {
  "area" : "HONOLULU",
  "address" : "HALOA DR&MOLEHU DR",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346160670
}
, {
  "area" : "MILILANI",
  "address" : "LEHIWA DR&MEHEULA PKWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346158538
}
, {
  "area" : "MILILANI",
  "address" : "KOOLANI DR&MEHEU ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346158487
}
, {
  "area" : "WAIANAE",
  "location" : "NANAIKAPONO ES",
  "address" : "89015X MANO AVE",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346157526
}
, {
  "area" : "WAIANAE",
  "address" : "MANUAIHUE ST&MANUULAULA ST",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346154558
}
, {
  "area" : "WAIANAE",
  "address" : "89098X NANAKULI AVE",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346151920
}
, {
  "area" : "HONOLULU",
  "location" : "EXOTIC NIGHTS",
  "address" : "90X HALEKAUWILA ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346145936
}
, {
  "area" : "PEARL CITY",
  "location" : "H1W H2N OFF",
  "address" : "H1W H2N OFF",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346145577
}
, {
  "area" : "MILILANI",
  "location" : "H2S WAIKAKALAU GULCH",
  "address" : "6X S H2 FWY",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346143111
}
, {
  "area" : "HONOLULU",
  "address" : "ALA MOANA&QUEEN ST",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346136373
}
, {
  "area" : "WAIANAE",
  "address" : "87146X FARRINGTON HWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346134385
}
, {
  "area" : "HONOLULU",
  "location" : "H1W PALAMA OFF",
  "address" : "20X W H1 FWY",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346131883
}
, {
  "area" : "HONOLULU",
  "location" : "H1E UNIVERSITY OFF",
  "address" : "24X E H1 FWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346131415
}
, {
  "area" : "HONOLULU",
  "address" : "KALANIANAOLE HWY&KALANIIKI ST",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346131347
}
, {
  "area" : "KANEOHE",
  "location" : "HAIKU HALE BLDGS A B",
  "address" : "46028X KAHUHIPA ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346129465
}
, {
  "area" : "HONOLULU",
  "address" : "272X E MANOA RD",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346127207
}
, {
  "area" : "MILILANI",
  "address" : "95027X KAOPUA LP",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346125597
}
, {
  "area" : "WAIPAHU",
  "address" : "94121X HENOKEA ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346125576
}
, {
  "area" : "HONOLULU",
  "address" : "DILLINGHAM BLVD&N KING ST",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346125031
}
, {
  "area" : "MOANALUA TER",
  "location" : "MOANALUA CTR/TACO BELL",
  "address" : "93X VALKENBURGH ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346124499
}
, {
  "area" : "WAIANAE",
  "address" : "86017X MOEKAA PL",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346124025
}
, {
  "area" : "HONOLULU",
  "location" : "MARINE SURF HTL",
  "address" : "36X SEASIDE AVE",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346123508
}
, {
  "area" : "HONOLULU",
  "address" : "KILAUEA AVE&WAIALAE AVE",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346122569
}
, {
  "area" : "AIEA",
  "location" : "PEARLRIDGE GARDENS 5",
  "address" : "98103X MOANALUA RD",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346120967
}
, {
  "area" : "HONOLULU",
  "address" : "344X WELA ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346119886
}
, {
  "area" : "KANEOHE",
  "address" : "AHUIMANU RD&KAHEKILI HWY",
  "code" : "550V",
  "type" : "MOTOR VEHICLE COLLISION - TOWED",
  "date" : 1346118829
}
, {
  "area" : "WAIANAE",
  "location" : "MCDONALDS NANAKULI",
  "address" : "87202X FARRINGTON HWY",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346118486
}
, {
  "area" : "WAIANAE",
  "location" : "7ELEVEN NANAKULI",
  "address" : "87192X FARRINGTON HWY",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346118467
}
, {
  "area" : "HONOLULU",
  "address" : "224X ROUND TOP DR",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346118121
}
, {
  "area" : "HONOLULU",
  "location" : "H1E KOKO HEAD OFF",
  "address" : "26X E H1 FWY",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346117903
}
, {
  "area" : "HONOLULU",
  "location" : "COSTCO ALAKAWA",
  "address" : "52X ALAKAWA ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346117562
}
, {
  "area" : "HONOLULU",
  "address" : "ALA WAI BLVD&MCCULLY ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346117327
}
, {
  "area" : "PEARL CITY",
  "location" : "H1W WAIMALU OFF",
  "address" : "11X W H1 FWY",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346117112
}
, {
  "area" : "HONOLULU",
  "address" : "167X HAUIKI ST",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346117039
}
, {
  "area" : "WAHIAWA",
  "location" : "WAHIAWA ONTO H2S",
  "address" : "WAHIAWA ONTO H2S",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346116729
}
, {
  "area" : "HONOLULU",
  "location" : "H1E 6TH OFF",
  "address" : "25X E H1 FWY",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346116160
}
, {
  "area" : "HONOLULU",
  "address" : "HALEKAUWILA ST&S NIMITZ HWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346114448
}
, {
  "area" : "HONOLULU",
  "location" : "KAIMUKI PARKSIDE CONDO",
  "address" : "278X KAPIOLANI BLVD",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346114366
}
, {
  "area" : "HONOLULU",
  "address" : "163X KAM IV RD",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346114015
}
, {
  "area" : "HONOLULU",
  "address" : "N BERETANIA ST&MAUNAKEA ST",
  "code" : "560",
  "type" : "TRAFFIC INCIDENT - NO COLLISION",
  "date" : 1346113625
}
, {
  "area" : "WAIANAE",
  "address" : "MILL ST&WAIANAE VALLEY RD",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346113441
}
, {
  "area" : "HONOLULU",
  "address" : "6TH AVE&MARTHA ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346112991
}
, {
  "area" : "HONOLULU",
  "location" : "KAM SC",
  "address" : "162X N SCHOOL ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346112933
}
, {
  "area" : "WAHIAWA",
  "location" : "LEILEHUA HS",
  "address" : "151X CALIFORNIA AVE",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346112491
}
, {
  "area" : "HONOLULU",
  "address" : "S BERETANIA ST&PALI HWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346112407
}
, {
  "area" : "HONOLULU",
  "address" : "KALAKAUA AVE&SEASIDE AVE",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346112356
}
, {
  "area" : "HONOLULU",
  "location" : "MFW STADIUM OFF",
  "address" : "18X W MOANALUA FWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346112305
}
, {
  "area" : "HONOLULU",
  "address" : "COOKE ST&ILALO ST",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346112153
}
, {
  "area" : "HONOLULU",
  "address" : "KAPIOLANI BLVD&WARD AVE",
  "code" : "634",
  "type" : "TRAFFIC SIGNAL PROBLEM",
  "date" : 1346112050
}
, {
  "area" : "HONOLULU",
  "address" : "N NIMITZ HWY&SAND ISLAND ACC R",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346111516
}
, {
  "area" : "HONOLULU",
  "address" : "83X OCEAN VIEW DR",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346111264
}
, {
  "area" : "HONOLULU",
  "location" : "7ELEVEN",
  "address" : "ATKINSON DR&KAPIOLANI BLVD",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346111246
}
, {
  "area" : "HONOLULU",
  "address" : "38X PUUIKENA DR",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346111135
}
, {
  "area" : "HONOLULU",
  "address" : "KAPIOLANI BLVD&PIIKOI ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346110396
}
, {
  "area" : "HONOLULU",
  "address" : "N NIMITZ HWY&OHOHIA ST",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346110272
}
, {
  "area" : "HONOLULU",
  "address" : "161X S KING ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346110249
}
, {
  "area" : "HONOLULU",
  "location" : "ACE TOWING",
  "address" : "104X MAKEPONO ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346109945
}
, {
  "area" : "HONOLULU",
  "address" : "KAPIOLANI BLVD&S KING ST",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346109878
}
, {
  "area" : "HONOLULU",
  "location" : "NBC",
  "address" : "77X WARD AVE",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346109405
}
, {
  "area" : "HONOLULU",
  "location" : "ALOHA GAS DILLINGHAM",
  "address" : "170X DILLINGHAM BLVD",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346109148
}
, {
  "area" : "HONOLULU",
  "location" : "MCDONALDS KALIHI",
  "address" : "162X N SCHOOL ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346108784
}
, {
  "area" : "HONOLULU",
  "location" : "PALI TUNNELS D5 S",
  "address" : "519X PALI HWY",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346108570
}
, {
  "area" : "HONOLULU",
  "address" : "CITRON ST&DATE ST",
  "code" : "634",
  "type" : "TRAFFIC SIGNAL PROBLEM",
  "date" : 1346108455
}
, {
  "area" : "WAIANAE",
  "address" : "FARRINGTON HWY&HALEAKALA AVE",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346108413
}
, {
  "area" : "HONOLULU",
  "location" : "ARCADIA",
  "address" : "143X PUNAHOU ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346108264
}
, {
  "area" : "KANEOHE",
  "location" : "H3E LIKELIKE OFF",
  "address" : "H3E LIKELIKE OFF",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346108241
}
, {
  "area" : "HONOLULU",
  "location" : "PALI TUNNELS D5 S",
  "address" : "519X PALI HWY",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346108202
}
, {
  "area" : "HONOLULU",
  "address" : "N KING ST&RIVER ST",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346108118
}
, {
  "area" : "HONOLULU",
  "location" : "PALI TUNNELS D5 N",
  "address" : "519X PALI HWY",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346107647
}
, {
  "area" : "AIEA",
  "location" : "HARANO TUNNEL H3E",
  "address" : "57X E H3 FWY",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346107639
}
, {
  "area" : "HONOLULU",
  "address" : "PALI HWY&WAOKANAKA ST",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346107493
}
, {
  "area" : "HONOLULU",
  "address" : "DATE ST&KAPIOLANI BLVD",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346107286
}
, {
  "area" : "MILILANI",
  "address" : "KUAHELANI AVE&MEHEULA PKWY",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346107178
}
, {
  "area" : "KANEOHE",
  "location" : "H3E KAILUA OFF",
  "address" : "H3E KAILUA OFF",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346106746
}
, {
  "area" : "AIEA",
  "location" : "STEVENS TOWING",
  "address" : "98036X KAM HWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346106518
}
, {
  "area" : "HONOLULU",
  "address" : "PROSPECT ST&WARD AVE",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346106429
}
, {
  "area" : "HONOLULU",
  "address" : "KUAHEA ST&WAIOMAO RD",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346105662
}
, {
  "area" : "HONOLULU",
  "location" : "H1W PALI OFF",
  "address" : "22X W H1 FWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346105296
}
, {
  "area" : "HONOLULU",
  "address" : "107X ALA MOANA",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346105235
}
, {
  "area" : "AIEA",
  "location" : "H1E KAAHUMANU OP",
  "address" : "11X E H1 FWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346105170
}
, {
  "area" : "HONOLULU",
  "address" : "S KING ST&PIIKOI ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346104877
}
, {
  "area" : "WAIANAE",
  "address" : "85073X PILIUKA PL",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346103945
}
, {
  "area" : "KAPOLEI",
  "location" : "HONOKAI HALE",
  "address" : "92078X FARRINGTON HWY",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346103868
}
, {
  "area" : "PC PENINSULA",
  "address" : "LEHUA AVE&VICTOR WHARF ACCESS",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346103859
}
, {
  "area" : "HONOLULU",
  "location" : "KEEAUMOKU ST&MAKALOA ST",
  "address" : "KEEAUMOKU ST&MAKALOA ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346103843
}
, {
  "area" : "KAILUA",
  "location" : "ALOHA GAS KAILUA",
  "address" : "54X KAILUA RD",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346103783
}
, {
  "area" : "KAPOLEI",
  "location" : "HONOKAI HALE",
  "address" : "92078X FARRINGTON HWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346103735
}
, {
  "area" : "HONOLULU",
  "address" : "124X 10TH AVE",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346103628
}
, {
  "area" : "WAIPAHU",
  "address" : "94042X LOAA ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346102967
}
, {
  "area" : "HONOLULU",
  "location" : "HNL AIRPORT HTL",
  "address" : "340X N NIMITZ HWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346102855
}
, {
  "area" : "KANEOHE",
  "location" : "PALI TUNNELS D4 N",
  "address" : "600X PALI HWY",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346102667
}
, {
  "area" : "HONOLULU",
  "address" : "HAU ST&KALIHI ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346102584
}
, {
  "area" : "KAILUA",
  "location" : "ENCHANTED LAKES HEAD",
  "address" : "77X KEOLU DR",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346102581
}
, {
  "area" : "HONOLULU",
  "location" : "FOODLAND MARKET CITY",
  "address" : "293X HARDING AVE",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346102462
}
, {
  "area" : "KANEOHE",
  "location" : "PALI TUNNELS D4 N",
  "address" : "600X PALI HWY",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346102018
}
, {
  "area" : "WAIANAE",
  "address" : "LEIHUA ST&MOEKAHI ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346101942
}
, {
  "area" : "HONOLULU",
  "location" : "H1W PUNAHOU OP",
  "address" : "W H1 FWY/PUNAHOU ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346101837
}
, {
  "area" : "PEARL CITY",
  "location" : "CHILDRENS HOUSE",
  "address" : "184X KOMO MAI DR",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346101574
}
, {
  "area" : "HONOLULU",
  "address" : "ALA MOANA&SOUTH ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346101269
}
, {
  "area" : "WAIANAE",
  "location" : "MAILI COVE APTS",
  "address" : "87056X FARRINGTON HWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346101183
}
, {
  "area" : "WAHIAWA",
  "location" : "SCHOFIELD FOOTE GATE",
  "address" : "77018X KUNIA RD",
  "code" : "560",
  "type" : "TRAFFIC INCIDENT - NO COLLISION",
  "date" : 1346101038
}
, {
  "area" : "HONOLULU",
  "location" : "KVH BLDG 45 A-J",
  "address" : "234X KALENA DR",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346100908
}
, {
  "area" : "HALEIWA",
  "address" : "KAM HWY&KUMUPALI RD",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346100879
}
, {
  "area" : "PEARL CITY",
  "address" : "ACACIA RD&KAM HWY",
  "code" : "634",
  "type" : "TRAFFIC SIGNAL PROBLEM",
  "date" : 1346100846
}
, {
  "area" : "WAIPAHU",
  "location" : "LEOLUA GARDENS",
  "address" : "94005X LEOLUA ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346100693
}
, {
  "area" : "HONOLULU",
  "location" : "CONVENTION CENTER",
  "address" : "177X KAPIOLANI BLVD",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346100303
}
, {
  "area" : "KANEOHE",
  "location" : "CEMETERY HAWAIIAN ME",
  "address" : "45042X KAM HWY",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346099787
}
, {
  "area" : "WAIPAHU",
  "location" : "MCDONALDS GENTRY",
  "address" : "94103X KA UKA BLVD",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346099493
}
, {
  "area" : "KAPOLEI",
  "address" : "FRANKLIN D ROOSEVELT AVE&KAMOK",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346098925
}
, {
  "area" : "KAILUA",
  "address" : "KAM HWY&PALI HWY",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346098920
}
, {
  "area" : "HONOLULU",
  "address" : "HALEMAUMAU ST&KALANIANAOLE HWY",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346098835
}
, {
  "area" : "KANEOHE",
  "location" : "WILSON TUNNEL D4 S",
  "address" : "45099X LIKELIKE HWY",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346098550
}
, {
  "area" : "HONOLULU",
  "address" : "FERN ST&KALAKAUA AVE",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346098165
}
, {
  "area" : "LAIE",
  "location" : "LAIE PT LOOKOUT",
  "address" : "55004X NAUPAKA ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346097720
}
, {
  "area" : "HONOLULU",
  "location" : "BENJAMIN MOORES PAINTS",
  "address" : "135X DILLINGHAM BLVD",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346097694
}
, {
  "area" : "AIEA",
  "location" : "PALI MOMI KAPIOLANI",
  "address" : "98107X MOANALUA RD",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346097376
}
, {
  "area" : "HONOLULU",
  "address" : "N BERETANIA ST&RIVER ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346097273
}
, {
  "area" : "PEARL CITY",
  "address" : "224X AKEUKEU ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346097265
}
, {
  "area" : "HONOLULU",
  "address" : "124X AINAKOA AVE",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346097149
}
, {
  "area" : "AIEA",
  "address" : "KAM HWY&SALT LAKE BLVD",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346096860
}
, {
  "area" : "HALSEY TER",
  "address" : "288X ANDERSON AVE",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346096802
}
, {
  "area" : "HONOLULU",
  "address" : "KALANIANAOLE HWY&PAIKO DR",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346096662
}
, {
  "area" : "KAPOLEI",
  "location" : "H1E MAKAKILO OFF",
  "address" : "X E H1 FWY",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346095943
}
, {
  "area" : "HONOLULU",
  "location" : "BENTO CRNR",
  "address" : "308X MONSARRAT AVE",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346095530
}
, {
  "area" : "HONOLULU",
  "location" : "OFFICE DEPOT KAKAAKO",
  "address" : "102X AUAHI ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346095062
}
, {
  "area" : "HONOLULU",
  "location" : "WATERFRONT PLAZA I LLC",
  "address" : "50X ALA MOANA",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346094748
}
, {
  "area" : "HONOLULU",
  "location" : "KOKO HEAD ES",
  "address" : "18X LUNALILO HOME RD",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346094674
}
, {
  "area" : "AIEA",
  "location" : "H1E H3E OFF",
  "address" : "13X E H1 FWY",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346094293
}
, {
  "area" : "KANEOHE",
  "address" : "47040X AHUIMANU RD",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346094057
}
, {
  "area" : "HONOLULU",
  "location" : "H1W AIRPORT OFF",
  "address" : "16X W H1 FWY",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346093408
}
, {
  "area" : "WAIMANALO",
  "location" : "7ELEVEN",
  "address" : "41084X KALANIANAOLE HWY",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346093216
}
, {
  "area" : "WAIPAHU",
  "address" : "94085X KAHUAILANI ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346092740
}
, {
  "area" : "HONOLULU",
  "location" : "BALE BAKERY",
  "address" : "33X WARD AVE",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346092630
}
, {
  "area" : "HONOLULU",
  "address" : "KUHIO AVE&ROYAL HAWAIIAN AVE",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346092535
}
, {
  "area" : "PEARL CITY",
  "location" : "H1W WAIMALU OFF",
  "address" : "11X W H1 FWY",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346092484
}
, {
  "area" : "HONOLULU",
  "location" : "WAIKIKI RESORT HTL",
  "address" : "246X KOA AVE",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346091460
}
, {
  "area" : "HALEIWA",
  "location" : "LANIAKEA BCH",
  "address" : "61063X KAM HWY",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346090098
}
, {
  "area" : "HONOLULU",
  "location" : "H1E KAPIOLANI ON",
  "address" : "25X E H1 FWY",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346089987
}
, {
  "area" : "AIEA",
  "address" : "KAAHELE ST&MOANALUA RD",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346089439
}
, {
  "area" : "HONOLULU",
  "address" : "LIME ST&MCCULLY ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346088810
}
, {
  "area" : "WAIPAHU",
  "location" : "H2N KA UKA OFF",
  "address" : "2X N H2 FWY",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346088525
}
, {
  "area" : "HONOLULU",
  "location" : "MFE H1E",
  "address" : "MFE H1E",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346088478
}
, {
  "area" : "PEARL CITY",
  "location" : "MAACO COLLISION REPAIR &",
  "address" : "98074X KUAHAO PL",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346088350
}
, {
  "area" : "AIEA",
  "location" : "H1E HALAWA HTS OFF",
  "address" : "13X E H1 FWY",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346088349
}
, {
  "area" : "WAHIAWA",
  "address" : "KAMANANUI RD&KAUKONAHUA RD",
  "code" : "560",
  "type" : "TRAFFIC INCIDENT - NO COLLISION",
  "date" : 1346087707
}
, {
  "area" : "KAILUA",
  "address" : "HAMAKUA DR&HEKILI ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346087560
}
, {
  "area" : "HONOLULU",
  "address" : "PENSACOLA ST&YOUNG ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346087446
}
, {
  "area" : "HONOLULU",
  "location" : "BOH MAPUNAPUNA",
  "address" : "296X MAPUNAPUNA PL",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346087020
}
, {
  "area" : "AIEA",
  "address" : "KAHUAPAANI ST&ULUNE ST",
  "code" : "550V",
  "type" : "MOTOR VEHICLE COLLISION - TOWED",
  "date" : 1346086435
}
, {
  "area" : "HONOLULU",
  "address" : "747X KALANIANAOLE HWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346086009
}
, {
  "area" : "MILILANI",
  "address" : "95010X WAIPUKA PL",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346085802
}
, {
  "area" : "KAPOLEI",
  "location" : "H1E MAKAKILO OFF",
  "address" : "X E H1 FWY",
  "code" : "550V",
  "type" : "MOTOR VEHICLE COLLISION - TOWED",
  "date" : 1346085239
}
, {
  "area" : "HONOLULU",
  "location" : "TIMES MARKET LILIHA",
  "address" : "142X LILIHA ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346084952
}
, {
  "area" : "WAIMANALO",
  "location" : "UNOCAL WAIMANALO",
  "address" : "41153X KALANIANAOLE HWY",
  "code" : "634",
  "type" : "TRAFFIC SIGNAL PROBLEM",
  "date" : 1346084907
}
, {
  "area" : "HONOLULU",
  "location" : "HI LOA RIDGE",
  "address" : "KALANIANAOLE HWY&PUUIKENA DR",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346084389
}
, {
  "area" : "HONOLULU",
  "address" : "LUNALILO ST&PIIKOI ST",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346084152
}
, {
  "area" : "HONOLULU",
  "location" : "HFD WAILUPE 23",
  "address" : "504X KALANIANAOLE HWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346083769
}
, {
  "area" : "HONOLULU",
  "address" : "HAWAII KAI DR&KALANIANAOLE HWY",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346083340
}
, {
  "area" : "HONOLULU",
  "address" : "N JUDD ST&LILIHA ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346083151
}
, {
  "area" : "HONOLULU",
  "address" : "KALAKAUA AVE&OHUA AVE",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346082330
}
, {
  "area" : "WAHIAWA",
  "location" : "BOH",
  "address" : "CALIFORNIA AVE&MAKANI AVE",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346081558
}
, {
  "area" : "HONOLULU",
  "location" : "MFE TRIPLER OFF",
  "address" : "33X E MOANALUA FWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346081233
}
, {
  "area" : "HONOLULU",
  "location" : "MFE ALA KAPUNA OP",
  "address" : "ALA KAPUNA/E MOANALUA FWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346081197
}
, {
  "area" : "HONOLULU",
  "location" : "MFE RED HILL OFF",
  "address" : "19X E MOANALUA FWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346081160
}
, {
  "area" : "HONOLULU",
  "address" : "S KING ST&PIIKOI ST",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346080929
}
, {
  "area" : "HONOLULU",
  "location" : "MCCULLY SC",
  "address" : "196X KAPIOLANI BLVD",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346080782
}
, {
  "address" : "LIKELIKE KAN BND/TURN AROUND",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346080715
}
, {
  "area" : "KAPOLEI",
  "location" : "H1E MAKAKILO OFF",
  "address" : "X E H1 FWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346080619
}
, {
  "area" : "WAIMANALO",
  "location" : "JITB WAIMANALO",
  "address" : "41153X KALANIANAOLE HWY",
  "code" : "634",
  "type" : "TRAFFIC SIGNAL PROBLEM",
  "date" : 1346080546
}
, {
  "area" : "KAPOLEI",
  "location" : "CAMPBELL ONTO H1E",
  "address" : "X E H1 FWY",
  "code" : "550V",
  "type" : "MOTOR VEHICLE COLLISION - TOWED",
  "date" : 1346080272
}
, {
  "area" : "KAPOLEI",
  "location" : "TARGET KAPOLEI",
  "address" : "445X KAPOLEI PKWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346080206
}
, {
  "area" : "AIEA",
  "location" : "H1W KAONOHI OP",
  "address" : "W H1 FWY/KAONOHI ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346080152
}
, {
  "area" : "PEARL CITY",
  "location" : "H1W WAIPAHU OFF",
  "address" : "9X W H1 FWY",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346079749
}
, {
  "area" : "HONOLULU",
  "address" : "DOLE ST&PUNAHOU ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346079215
}
, {
  "area" : "HONOLULU",
  "address" : "PALI HWY&WAOKANAKA ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346078558
}
, {
  "area" : "EWA BEACH",
  "address" : "KAHIUKA ST&KAPOLEI PKWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346078458
}
, {
  "area" : "HONOLULU",
  "location" : "H1W VINEYARD OFF",
  "address" : "22X W H1 FWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346078394
}
, {
  "area" : "PEARL CITY",
  "address" : "HOOLAULEA ST&HOOMOANA ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346078368
}
, {
  "area" : "KANEOHE",
  "location" : "WILSON TUNNEL D4 S",
  "address" : "45099X LIKELIKE HWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346078300
}
, {
  "area" : "AIEA",
  "location" : "H1E AIEA OFF",
  "address" : "H1E AIEA OFF",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346078272
}
, {
  "area" : "EWA BEACH",
  "address" : "91087X PAALOHA ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346078174
}
, {
  "area" : "HONOLULU",
  "address" : "MAUNAKEA ST&N VINEYARD BLVD",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346077828
}
, {
  "area" : "KANEOHE",
  "location" : "WILSON TUNNEL D4 N",
  "address" : "45099X LIKELIKE HWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346077806
}
, {
  "area" : "HONOLULU",
  "location" : "IHS IWILEI",
  "address" : "35X SUMNER ST",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346077738
}
, {
  "area" : "HONOLULU",
  "address" : "ISENBERG ST&S KING ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346077439
}
, {
  "area" : "HONOLULU",
  "address" : "266X ANUU PL",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346077308
}
, {
  "area" : "KANEOHE",
  "location" : "HYGIENIC STORE",
  "address" : "47052X KAM HWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346076953
}
, {
  "area" : "HONOLULU",
  "location" : "H1W PALI OFF",
  "address" : "22X W H1 FWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346076795
}
, {
  "area" : "WAIPAHU",
  "location" : "KUNIA ONTO H1E",
  "address" : "KUNIA ONTO H1E",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346076393
}
, {
  "area" : "HONOLULU",
  "location" : "ART GALLERY",
  "address" : "21X PROSPECT ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346076203
}
, {
  "area" : "AIEA",
  "location" : "H3E MF UP",
  "address" : "H3W MF OP",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346076024
}
, {
  "area" : "HONOLULU",
  "location" : "H1W SCHOOL OFF",
  "address" : "21X W H1 FWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346075833
}
, {
  "address" : "ELLIOTT ST&N NIMITZ HWY",
  "code" : "634",
  "type" : "TRAFFIC SIGNAL PROBLEM",
  "date" : 1346074887
}
, {
  "area" : "PEARL CITY",
  "location" : "SAMS CLUB",
  "address" : "100X KAM HWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346074215
}
, {
  "area" : "WAIPAHU",
  "address" : "ANOIKI ST&ANONUI ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346072851
}
, {
  "area" : "WAHIAWA",
  "address" : "LAKEVIEW DR&WILIKINA DR",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346071837
}
, {
  "area" : "WAIPAHU",
  "location" : "H1E WAIKELE OFF",
  "address" : "7X E H1 FWY",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346071831
}
, {
  "area" : "AIEA",
  "location" : "H1E AIEA OFF",
  "address" : "H1E AIEA OFF",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346071789
}
, {
  "area" : "WAHIAWA",
  "address" : "LAKEVIEW CIR&WILIKINA DR",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346071583
}
, {
  "area" : "AIEA",
  "location" : "H1E KAAHUMANU OP",
  "address" : "11X E H1 FWY",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346070513
}
, {
  "area" : "AIEA",
  "location" : "H1E KAONOHI OP",
  "address" : "12X E H1 FWY",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346070337
}
, {
  "area" : "WAIANAE",
  "address" : "FARRINGTON HWY&PILIOKAHI AVE",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346070299
}
, {
  "area" : "WAIPAHU",
  "location" : "WAIANAE FROM H2S",
  "address" : "WAIANAE FROM H2S",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346065223
}
, {
  "area" : "HONOLULU",
  "location" : "H1E 6TH OP",
  "address" : "25X E H1 FWY",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346061314
}
, {
  "area" : "KAPOLEI",
  "address" : "ANIPEAHI ST&PALAILAI ST",
  "code" : "560",
  "type" : "TRAFFIC INCIDENT - NO COLLISION",
  "date" : 1346059544
}
, {
  "area" : "KAILUA",
  "address" : "HUALANI ST&N KAINALU DR",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346056895
}
, {
  "area" : "HONOLULU",
  "location" : "BURGER KING KALIHI",
  "address" : "150X DILLINGHAM BLVD",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346054630
}
, {
  "area" : "EWA BEACH",
  "location" : "H1W NORTH SOUTH OFF",
  "address" : "4X W H1 FWY",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346053808
}
, {
  "area" : "AIEA",
  "location" : "H1E H3E OFF",
  "address" : "13X E H1 FWY",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346051043
}
, {
  "area" : "AIEA",
  "address" : "98084X HAPUU ST",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346050659
}
, {
  "area" : "HONOLULU",
  "address" : "ALA LILIKOI ST&SALT LAKE BLVD",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346050638
}
, {
  "area" : "KAPOLEI",
  "location" : "DISNEY VACATION CLUB RESORT &",
  "address" : "92118X ALIINUI DR",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346050318
}
, {
  "area" : "KANEOHE",
  "location" : "H3W MOKAPU ON",
  "address" : "H3W MOKAPU ON",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346050238
}
, {
  "area" : "HONOLULU",
  "location" : "7ELEVEN KAPIOLANI",
  "address" : "169X KAPIOLANI BLVD",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346049938
}
, {
  "area" : "AIEA",
  "location" : "HARANO TUNNEL H3E",
  "address" : "57X E H3 FWY",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346047883
}
, {
  "area" : "HONOLULU",
  "address" : "231X KALIHI ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346045791
}
, {
  "area" : "WAIANAE",
  "address" : "FARRINGTON HWY&HAKIMO RD",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346045604
}
, {
  "area" : "KAILUA",
  "location" : "ENCHANTED LAKE SC",
  "address" : "106X KEOLU DR",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346045190
}
, {
  "area" : "WAIPAHU",
  "location" : "H1E WAIKELE OFF",
  "address" : "7X E H1 FWY",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346044898
}
, {
  "area" : "EWA BEACH",
  "location" : "POHAKEA ES",
  "address" : "91075X FORT WEAVER RD",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346043459
}
, {
  "area" : "WAIPAHU",
  "location" : "KUNIA ONTO H1E",
  "address" : "KUNIA ONTO H1E",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346042808
}
, {
  "area" : "HONOLULU",
  "location" : "WAILANA COFFEE HOUSE",
  "address" : "186X ALA MOANA",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346042198
}
, {
  "area" : "HONOLULU",
  "address" : "PALI HWY&WAOKANAKA ST",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346041434
}
, {
  "area" : "HONOLULU",
  "location" : "AINA HAINA SC",
  "address" : "82X W HIND DR",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346041405
}
, {
  "area" : "EWA BEACH",
  "address" : "FORT WEAVER RD&KAIMALIE ST",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346041347
}
, {
  "area" : "WAHIAWA",
  "address" : "CALIFORNIA AVE&HAUOLA AVE",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346041250
}
, {
  "area" : "WAIANAE",
  "address" : "85017X WAIANAE VALLEY RD",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346040370
}
, {
  "area" : "HONOLULU",
  "location" : "H1E PUNAHOU OFF",
  "address" : "23X E H1 FWY",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346040326
}
, {
  "area" : "HONOLULU",
  "address" : "ALA WAI BLVD&LILIUOKALANI AVE",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346040261
}
, {
  "area" : "HONOLULU",
  "address" : "PALI HWY&WYLLIE ST",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346040098
}
, {
  "area" : "KAILUA",
  "address" : "KALANIANAOLE HWY&KAPAA QUARRY",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346039688
}
, {
  "area" : "AIEA",
  "address" : "KAM HWY&SALT LAKE BLVD",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346038725
}
, {
  "area" : "KAHUKU",
  "location" : "KAHUKU HOSPITAL",
  "address" : "KAM HWY&PUALALEA ST",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346038353
}
, {
  "area" : "EWA BEACH",
  "address" : "FORT WEAVER RD&HANAKAHI ST",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346037978
}
, {
  "area" : "KAILUA",
  "location" : "FOODLAND KAILUA",
  "address" : "10X HEKILI ST",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346037966
}
, {
  "area" : "EWA BEACH",
  "address" : "FORT WEAVER RD&LAULAUNUI ST",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346037519
}
, {
  "area" : "EWA BEACH",
  "address" : "FARRINGTON HWY&KUALAKAI PKWY",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346037072
}
, {
  "area" : "KANEOHE",
  "location" : "PALI GC",
  "address" : "45005X KAM HWY",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346036650
}
, {
  "area" : "AIRPORT",
  "address" : "325X AOLELE ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346036535
}
, {
  "area" : "WAIPAHU",
  "address" : "94048X ALAPINE ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346035728
}
, {
  "area" : "HONOLULU",
  "address" : "S KING ST&PIIKOI ST",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346035106
}
, {
  "area" : "HONOLULU",
  "address" : "LOWREY AVE&MANOA RD",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346035063
}
, {
  "area" : "EWA BEACH",
  "address" : "91179X PARK ROW",
  "code" : "560",
  "type" : "TRAFFIC INCIDENT - NO COLLISION",
  "date" : 1346034555
}
, {
  "area" : "HONOLULU",
  "address" : "ALAKEA ST&S NIMITZ HWY",
  "code" : "634",
  "type" : "TRAFFIC SIGNAL PROBLEM",
  "date" : 1346034271
}
, {
  "area" : "WAIANAE",
  "location" : "MCDONALDS WAIANAE",
  "address" : "85077X FARRINGTON HWY",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346034033
}
, {
  "area" : "KAPOLEI",
  "location" : "TARGET KAPOLEI",
  "address" : "445X KAPOLEI PKWY",
  "code" : "560",
  "type" : "TRAFFIC INCIDENT - NO COLLISION",
  "date" : 1346033779
}
, {
  "area" : "WAIPAHU",
  "location" : "KA UKA FROM H2N",
  "address" : "KA UKA FROM H2N",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346033773
}
, {
  "area" : "KAPOLEI",
  "address" : "MAKAKILO DR&PALAHIA ST",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346033434
}
, {
  "area" : "PEARL CITY",
  "location" : "H1W PEARL CITY ON",
  "address" : "10X W H1 FWY",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346032515
}
, {
  "area" : "WAIPAHU",
  "address" : "KA UKA BLVD&WAIPIO UKA ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346032215
}
, {
  "area" : "WAIPAHU",
  "location" : "H1E KUNIA ON",
  "address" : "5X E H1 FWY",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346032110
}
, {
  "area" : "WAIPAHU",
  "location" : "TESORO WAIPIO",
  "address" : "94108X KA UKA BLVD",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346031161
}
, {
  "area" : "KANEOHE",
  "address" : "47031X LULANI ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346030582
}
, {
  "area" : "AIEA",
  "location" : "MFW KAHUAPAANI OP",
  "address" : "KAHUAPAANI ST/W MOANALUA FWY",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346030141
}
, {
  "area" : "HONOLULU",
  "address" : "KAHEKA ST&KAPIOLANI BLVD",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346029640
}
, {
  "area" : "PEARL CITY",
  "location" : "SAMS CLUB",
  "address" : "100X KAM HWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346028803
}
, {
  "area" : "WAIANAE",
  "address" : "87161X FARRINGTON HWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346027905
}
, {
  "area" : "HONOLULU",
  "location" : "TIMES MARKET KAIMUKI",
  "address" : "322X WAIALAE AVE",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346027607
}
, {
  "area" : "HONOLULU",
  "address" : "142X LIHOLIHO ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346027305
}
, {
  "area" : "WAIALUA",
  "address" : "FARRINGTON HWY&KAUKONAHUA RD",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346027001
}
, {
  "area" : "WAIANAE",
  "address" : "87010X ST JOHNS RD",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346026679
}
, {
  "area" : "HONOLULU",
  "address" : "JACK LN&PALI HWY",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346026341
}
, {
  "area" : "PEARL CITY",
  "location" : "H1W WAIMALU OFF",
  "address" : "11X W H1 FWY",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346026128
}
, {
  "area" : "KAPOLEI",
  "location" : "H1E MAKAKILO OFF",
  "address" : "X E H1 FWY",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346025953
}
, {
  "area" : "HAUULA",
  "location" : "HFD HAUULA 15",
  "address" : "54006X KAM HWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346025808
}
, {
  "area" : "HONOLULU",
  "location" : "H1W WAIALAE ON",
  "address" : "27X W H1 FWY",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346025477
}
, {
  "area" : "EWA BEACH",
  "address" : "91185X PARK ROW",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346025221
}
, {
  "address" : "MFW TRIPLER OFF",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346025220
}
, {
  "area" : "KANEOHE",
  "location" : "H3E E HARANO TUNNEL",
  "address" : "H3E E HARANO TUNNEL",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346025217
}
, {
  "area" : "WAHIAWA",
  "address" : "KAM HWY&KAMANANUI RD",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346025125
}
, {
  "area" : "MILILANI",
  "location" : "BRIDGE KIPAPA D2 NB",
  "address" : "94049X KAM HWY",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346024909
}
, {
  "area" : "HONOLULU",
  "location" : "LILIHA BAKERY",
  "address" : "51X N KUAKINI ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346024503
}
, {
  "address" : "ART FAIR/MONSARRAT",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346024194
}
, {
  "area" : "HONOLULU",
  "location" : "MCCOY PAVILION",
  "address" : "120X ALA MOANA PK DR",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346023898
}
, {
  "area" : "PC PENINSULA",
  "address" : "700X LOCH ST",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346023849
}
, {
  "area" : "AIEA",
  "location" : "H1E KAONOHI OP",
  "address" : "12X E H1 FWY",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346023743
}
, {
  "area" : "WAIANAE",
  "address" : "FARRINGTON HWY&HELELUA ST",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346022431
}
, {
  "area" : "HONOLULU",
  "location" : "WILSON TUNNEL D5 S",
  "address" : "400X LIKELIKE HWY",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346021719
}
, {
  "area" : "HONOLULU",
  "address" : "230X PACIFIC HTS RD",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346020094
}
, {
  "area" : "HONOLULU",
  "address" : "METCALF ST&UNIVERSITY AVE",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346019383
}
, {
  "area" : "HONOLULU",
  "address" : "283X DOLE ST",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346019234
}
, {
  "area" : "AIEA",
  "location" : "H1E AIEA HTS OP",
  "address" : "13X E H1 FWY",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346019041
}
, {
  "area" : "AIEA",
  "location" : "H1E HALAWA HTS OFF",
  "address" : "13X E H1 FWY",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346018942
}
, {
  "area" : "HONOLULU",
  "location" : "H1E HICKAM OFF",
  "address" : "15X E H1 FWY",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346018916
}
, {
  "area" : "WAIANAE",
  "location" : "TAMURA SUPERETTE",
  "address" : "86003X FARRINGTON HWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346018765
}
, {
  "area" : "HONOLULU",
  "location" : "ZOO",
  "address" : "15X KAPAHULU AVE",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346018179
}
, {
  "area" : "HONOLULU",
  "location" : "H1E NIMITZ OFF PH",
  "address" : "15X E H1 FWY",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346017887
}
, {
  "area" : "HONOLULU",
  "address" : "155X DILLINGHAM BLVD",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346017730
}
, {
  "area" : "HONOLULU",
  "address" : "PALI HWY&WAOKANAKA ST",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346017677
}
, {
  "area" : "HONOLULU",
  "address" : "BINGHAM ST&PUNAHOU ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346017538
}
, {
  "area" : "AIEA",
  "location" : "H3W W HARANO TUNNEL",
  "address" : "H3W W HARANO TUNNEL",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346017528
}
, {
  "area" : "HONOLULU",
  "location" : "SHRINERS HOSPITAL",
  "address" : "131X PUNAHOU ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346017465
}
, {
  "area" : "HONOLULU",
  "address" : "ALA WAI BLVD&MCCULLY ST",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346017355
}
, {
  "area" : "AIEA",
  "location" : "HARANO TUNNEL H3W",
  "address" : "57X W H3 FWY",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346017122
}
, {
  "area" : "HONOLULU",
  "location" : "H1E KINAU OFF",
  "address" : "22X E H1 FWY",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346016822
}
, {
  "address" : "WAIANAE POST OFC",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346016551
}
, {
  "area" : "EWA BEACH",
  "address" : "FORT WEAVER RD&KEAUNUI DR",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346016296
}
, {
  "area" : "HONOLULU",
  "address" : "MCCULLY ST&WAIOLA ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346015739
}
, {
  "area" : "PEARL CITY",
  "location" : "H1W WAIMALU OFF",
  "address" : "11X W H1 FWY",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346015560
}
, {
  "area" : "HONOLULU",
  "location" : "H1E LIKELIKE OFF",
  "address" : "20X E H1 FWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346015537
}
, {
  "area" : "HONOLULU",
  "location" : "ALA MOANA BCH PK",
  "address" : "120X ALA MOANA PARK DR",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346015518
}
, {
  "area" : "AIEA",
  "location" : "ALOHA STADIUM",
  "address" : "99050X SALT LAKE BLVD",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346015211
}
, {
  "area" : "HONOLULU",
  "address" : "ALA MOANA&KOULA ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346014325
}
, {
  "area" : "KANEOHE",
  "location" : "H3E E HARANO TUNNEL",
  "address" : "H3E E HARANO TUNNEL",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346013811
}
, {
  "area" : "HALEIWA",
  "address" : "KAM HWY&PAPAILOA RD",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346013684
}
, {
  "area" : "KANEOHE",
  "location" : "KUALOA REGIONAL PK",
  "address" : "49047X KAM HWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346013659
}
, {
  "area" : "HONOLULU",
  "location" : "H1E 6TH OFF",
  "address" : "25X E H1 FWY",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346013440
}
, {
  "area" : "WAIANAE",
  "location" : "WAIANAE COMP CENTER",
  "address" : "86026X FARRINGTON HWY",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346013204
}
, {
  "area" : "EWA BEACH",
  "location" : "EWA MAKAI MS",
  "address" : "91629X KAPOLEI PKWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346012586
}
, {
  "area" : "HONOLULU",
  "address" : "S KING ST&UNIVERSITY AVE",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346012221
}
, {
  "area" : "HONOLULU",
  "address" : "MAMAKI ST&PUAMAMANE ST",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346012181
}
, {
  "area" : "KAILUA",
  "location" : "LONGS KAILUA",
  "address" : "60X KAILUA RD",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346012050
}
, {
  "area" : "HONOLULU",
  "location" : "WAIKIKI GRAND HTL",
  "address" : "KOA AVE&ULUNIU AVE",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346011916
}
, {
  "area" : "HALEIWA",
  "location" : "MALAMA MARKET",
  "address" : "66019X KAM HWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346011345
}
, {
  "area" : "HONOLULU",
  "location" : "H1W AIRPORT OFF",
  "address" : "16X W H1 FWY",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346010913
}
, {
  "area" : "HONOLULU",
  "location" : "NIMITZ ONTO H1W PH",
  "address" : "NIMITZ ONTO H1W PH",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346010391
}
, {
  "area" : "HONOLULU",
  "location" : "NIMITZ ONTO H1W B554",
  "address" : "NIMITZ ONTO H1W B554",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346010273
}
, {
  "area" : "KANEOHE",
  "address" : "47018X IUIU ST",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346010177
}
, {
  "area" : "HONOLULU",
  "location" : "H1E HICKAM OFF",
  "address" : "15X E H1 FWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346009814
}
, {
  "area" : "HONOLULU",
  "address" : "ALA MOANA&QUEEN ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346009015
}
, {
  "area" : "HONOLULU",
  "location" : "H1E LILIHA ACCESS OP",
  "address" : "21X E H1 FWY",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346007936
}
, {
  "area" : "HONOLULU",
  "address" : "S BERETANIA ST&ISENBERG ST",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346007535
}
, {
  "area" : "MILILANI",
  "address" : "KAM HWY&WAIKALANI DR",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346007346
}
, {
  "area" : "EWA BEACH",
  "address" : "91101X AHUUA ST",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346007289
}
, {
  "area" : "HALEIWA",
  "location" : "LANIAKEA BCH",
  "address" : "61063X KAM HWY",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346007068
}
, {
  "area" : "KAPOLEI",
  "location" : "H1W MAKAKILO OFF",
  "address" : "1X W H1 FWY",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346006245
}
, {
  "area" : "HONOLULU",
  "address" : "KINAU ST&WARD AVE",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346004907
}
, {
  "area" : "HONOLULU",
  "location" : "H1W PALAMA OFF",
  "address" : "20X W H1 FWY",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346004203
}
, {
  "area" : "HONOLULU",
  "location" : "H1W HOUGHTAILING OFF",
  "address" : "20X W H1 FWY",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346004100
}
, {
  "area" : "HONOLULU",
  "location" : "MFE FT SHAFTER OFF",
  "address" : "38X E MOANALUA FWY",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346002212
}
, {
  "area" : "MILILANI",
  "location" : "H2S LEILEHUA ON",
  "address" : "6X S H2 FWY",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346002007
}
, {
  "area" : "KAPOLEI",
  "location" : "H1E MAKAKILO OFF",
  "address" : "X E H1 FWY",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346001671
}
, {
  "address" : "59026X KAM HW",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346001665
}
, {
  "area" : "HONOLULU",
  "address" : "287X KALAKAUA AVE",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346001252
}
, {
  "area" : "HONOLULU",
  "address" : "85X 9TH AVE",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346000752
}
, {
  "area" : "HONOLULU",
  "address" : "MANOA RD&PAWAINA ST",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346000408
}
, {
  "area" : "KAILUA",
  "location" : "MCDONALDS ENCHANTED LAKES",
  "address" : "105X KEOLU DR",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346000189
}
, {
  "area" : "WAHIAWA",
  "address" : "93X NEAL AVE",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1345999586
}
, {
  "area" : "HONOLULU",
  "address" : "107X OLOMEA ST",
  "code" : "560",
  "type" : "TRAFFIC INCIDENT - NO COLLISION",
  "date" : 1345999493
}
, {
  "area" : "KAPOLEI",
  "location" : "CHILIS KAPOLEI",
  "address" : "59X FARRINGTON HWY",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1345998408
}
, {
  "area" : "HONOLULU",
  "address" : "HALEMAUMAU ST&KALANIANAOLE HWY",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1345997884
}
, {
  "area" : "AIEA",
  "location" : "HARANO TUNNEL H3E",
  "address" : "57X E H3 FWY",
  "code" : "560",
  "type" : "TRAFFIC INCIDENT - NO COLLISION",
  "date" : 1345997042
}
, {
  "area" : "AIEA",
  "address" : "HEKAHA ST&MOANALUA RD",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1345996452
}
, {
  "area" : "WAIANAE",
  "address" : "89102X UALAMAOLI PL",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1345996042
}
, {
  "area" : "EWA BEACH",
  "location" : "OUR LADY OF PERPETUA",
  "address" : "91101X NORTH RD",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1345995701
}
, {
  "area" : "PEARL CITY",
  "location" : "H1E WAIMALU OFF",
  "address" : "10X E H1 FWY",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1345995493
}
, {
  "area" : "KAILUA",
  "location" : ".",
  "address" : "KAM HWY&PALI HWY",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1345993443
}
, {
  "area" : "HONOLULU",
  "location" : "H1W WILDER OFF",
  "address" : "24X W H1 FWY",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1345990551
}
, {
  "area" : "EWA BEACH",
  "location" : ".",
  "address" : "ANONUI ST&KUNIA RD",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1345989725
}
, {
  "area" : "WAIANAE",
  "address" : "AUYONG HMSTD RD&FARRINGTON HWY",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1345989646
}
, {
  "area" : "HONOLULU",
  "address" : "144X YOUNG ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1345989101
}
, {
  "area" : "EWA BEACH",
  "location" : "KUNIA FROM H1E",
  "address" : "KUNIA FROM H1E",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1345988534
}
, {
  "area" : "WAIPAHU",
  "location" : "H1E KUNIA ON",
  "address" : "5X E H1 FWY",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1345988439
}
, {
  "area" : "HONOLULU",
  "address" : "KALIHI ST&NALANIEHA ST",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1345983740
}
, {
  "area" : "KANEOHE",
  "address" : "KAM HWY&WAIHEE RD",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1345983477
}
, {
  "area" : "HONOLULU",
  "location" : "KAM BAKERY",
  "address" : "HOUGHTAILING ST&N SCHOOL ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1345982240
}
, {
  "area" : "WAIALUA",
  "location" : "STURN PINEAPPLE FLD",
  "address" : "65080X KAUKONAHUA RD",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1345980671
}
, {
  "area" : "PEARL CITY",
  "address" : "AUHUHU ST&KOMO MAI DR",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1345980283
}
, {
  "area" : "HONOLULU",
  "location" : "HALE PAUAHI",
  "address" : "15X N BERETANIA ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISON",
  "date" : 1346270052
}
, {
  "area" : "HONOLULU",
  "location" : "PUNAHOU FROM H1E",
  "address" : "PUNAHOU FROM H1E",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346270205
}
, {
  "area" : "HONOLULU",
  "location" : "TARGET SALT LAKE",
  "address" : "441X LAWEHANA ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISON",
  "date" : 1346270630
}
, {
  "area" : "HONOLULU",
  "address" : "ALAPAI ST&S BERETANIA ST",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346271302
}
, {
  "area" : "EWA BEACH",
  "address" : "FORT WEAVER RD&RENTON RD",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISON",
  "date" : 1346271345
}
, {
  "area" : "HONOLULU",
  "location" : "STEVENSON MS",
  "address" : "120X PROSPECT ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISON",
  "date" : 1346271654
}
, {
  "area" : "KAILUA",
  "address" : "55X KAHA ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISON",
  "date" : 1346271655
}
, {
  "address" : "KAHA / ONEAWA",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISON",
  "date" : 1346271702
}
, {
  "area" : "KAILUA",
  "address" : "76X N KALAHEO AVE",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISON",
  "date" : 1346271823
}
, {
  "area" : "WAIANAE",
  "address" : "84064X KEPUE ST",
  "code" : "560",
  "type" : "TRAFFIC INCIDENT - NO COLLISION",
  "date" : 1346272917
}
, {
  "area" : "HONOLULU",
  "location" : "FHB MOANALUA",
  "address" : "100X MAPUNAPUNA ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISON",
  "date" : 1346273089
}
, {
  "area" : "HONOLULU",
  "location" : "TIMES MARKET LILIHA",
  "address" : "142X LILIHA ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346274291
}
, {
  "area" : "HONOLULU",
  "location" : "FISHER HAWAII",
  "address" : "45X COOKE ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346273738
}
, {
  "area" : "HONOLULU",
  "location" : "MATLOCK HALE",
  "address" : "132X KEEAUMOKU ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346275229
}
, {
  "area" : "HONOLULU",
  "location" : "CENTRAL UNION CHURCH",
  "address" : "166X S BERETANIA ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346274866
}
, {
  "area" : "HONOLULU",
  "address" : "9TH AVE&WAIALAE AVE",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346274773
}
, {
  "area" : "HONOLULU",
  "location" : "MFE RED HILL OFF",
  "address" : "19X E MOANALUA FWY",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346274753
}
, {
  "area" : "AIEA",
  "location" : "JUNGLE RIVER",
  "address" : "98110X MOANALUA RD",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346274712
}
, {
  "area" : "HONOLULU",
  "location" : "MCKINLEY HS",
  "address" : "103X S KING ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346274669
}
, {
  "area" : "HONOLULU",
  "location" : "MARIN TOWER",
  "address" : "6X N NIMITZ HWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346276015
}
, {
  "area" : "KANEOHE",
  "location" : "H3E KAM OFF",
  "address" : "H3E KAM OFF",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346277270
}
, {
  "area" : "KANEOHE",
  "location" : "PALI TUNNELS D4 N",
  "address" : "600X PALI HWY",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346277228
}
, {
  "area" : "AIEA",
  "location" : "H1E HALAWA HTS OFF",
  "address" : "13X E H1 FWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346276666
}
, {
  "area" : "EWA BEACH",
  "address" : "91134X RENTON RD",
  "code" : "560",
  "type" : "TRAFFIC INCIDENT - NO COLLISION",
  "date" : 1346276531
}
, {
  "area" : "HONOLULU",
  "address" : "KAUILA ST&PALI HWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346277426
}
, {
  "area" : "HONOLULU",
  "address" : "103X KOHOU ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346279037
}
, {
  "address" : "KAUKONAHUA RD&WILIKINA DR",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346278698
}
, {
  "area" : "WAIALUA",
  "address" : "KAUKONAHUA RD&WILIKINA DR",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346278647
}
, {
  "area" : "WAIPAHU",
  "location" : "WAIKELE CTR/POLO RALPH LAUREN",
  "address" : "94079X LUMIAINA ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346278389
}
, {
  "area" : "HONOLULU",
  "location" : "ROSS KEEAUMOKU",
  "address" : "71X KEEAUMOKU ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346278337
}
, {
  "area" : "PEARL CITY",
  "location" : "H1W WAIMALU OFF",
  "address" : "11X W H1 FWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346278284
}
, {
  "area" : "WAIPAHU",
  "address" : "FARRINGTON HWY&KAHUALII ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346278032
}
, {
  "area" : "HONOLULU",
  "address" : "PALI HWY&S SCHOOL ST",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346279544
}
, {
  "area" : "HONOLULU",
  "location" : "PUULOA FROM MFE",
  "address" : "33X E MOANALUA FWY",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346280732
}
, {
  "area" : "HONOLULU",
  "address" : "PALI HWY&WAOKANAKA ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346280350
}
, {
  "area" : "KANEOHE",
  "location" : "HAIRPIN TURN PALI",
  "address" : "634X PALI HWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346280314
}
, {
  "area" : "KANEOHE",
  "location" : "HYGIENIC STORE",
  "address" : "47052X KAM HWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346281819
}
, {
  "area" : "WAIPAHU",
  "location" : "H1E PEARL CITY OFF W",
  "address" : "H1E PEARL CITY OFF W",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346281352
}
, {
  "area" : "PEARL CITY",
  "location" : "H1W WAIMALU OFF",
  "address" : "11X W H1 FWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346281338
}
, {
  "area" : "HONOLULU",
  "location" : "5TH ONTO H1W",
  "address" : "25X W H1 FWY",
  "code" : "550V",
  "type" : "MOTOR VEHICLE COLLISION - TOWED",
  "date" : 1346281289
}
, {
  "area" : "AIEA",
  "location" : "MACYS PEARLRIDGE",
  "address" : "98020X KAONOHI ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346281257
}
, {
  "area" : "WAHIAWA",
  "location" : "LALAWAI HALE",
  "address" : "101X AHEAHE AVE",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346281108
}
, {
  "area" : "HONOLULU",
  "address" : "157X KALAEPAA DR",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346281004
}
, {
  "area" : "MILILANI",
  "location" : "MCDONALDS MIL MAUKA",
  "address" : "95186X MEHEULA PKWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346280960
}
, {
  "area" : "KANEOHE",
  "address" : "KANEOHE BAY DR&MOKAPU SADDLE R",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346280928
}
, {
  "area" : "HONOLULU",
  "address" : "BISHOP ST&S KING ST",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346280897
}
, {
  "area" : "MILILANI",
  "location" : "H2N PINEAPPLE OP",
  "address" : "4X N H2 FWY",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346280781
}
, {
  "area" : "HONOLULU",
  "location" : "HOGS (NON PROFIT)",
  "address" : "363X KILAUEA AVE",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346282031
}
, {
  "area" : "KAPOLEI",
  "address" : "92057X AKAULA ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346281845
}
, {
  "area" : "HONOLULU",
  "address" : "KALAKAUA AVE&KUHIO AVE",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346283211
}
, {
  "area" : "HONOLULU",
  "location" : "ROYAL HAWN SC",
  "address" : "220X KALAKAUA AVE",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346282942
}
, {
  "area" : "AIEA",
  "location" : "WAIMALU ES",
  "address" : "98082X MOANALUA RD",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346284236
}
, {
  "area" : "HONOLULU",
  "location" : "PRINCESS KAIULANI HT",
  "address" : "12X KAIULANI AVE",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346284122
}
, {
  "area" : "HONOLULU",
  "location" : "HFD WAILUPE 23",
  "address" : "504X KALANIANAOLE HWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346283953
}
, {
  "area" : "PEARL CITY",
  "location" : "H1E WAIPAHU ON",
  "address" : "9X E H1 FWY",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346283893
}
, {
  "area" : "HALEIWA",
  "location" : "NORTH SHORE MP",
  "address" : "66025X KAM HWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346283698
}
, {
  "area" : "WAIANAE",
  "address" : "MILL ST&PLANTATION RD",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346285139
}
, {
  "area" : "PEARL CITY",
  "location" : "WAL MART PEARL CITY",
  "address" : "113X KUALA ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346285103
}
, {
  "area" : "HONOLULU",
  "location" : "CAPITAL MARKET",
  "address" : "210X N SCHOOL ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346285024
}
, {
  "area" : "KAILUA",
  "address" : "KAINUI DR&ONEAWA ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346284921
}
, {
  "area" : "HONOLULU",
  "location" : "HOMEWORLD",
  "address" : "70X S BERETANIA ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346284565
}
, {
  "area" : "MILILANI",
  "location" : "H2N MILILANI OFF",
  "address" : "5X N H2 FWY",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346284537
}
, {
  "area" : "HONOLULU",
  "address" : "KAPIOLANI BLVD&SOUTH ST",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346285604
}
, {
  "area" : "HONOLULU",
  "address" : "347X HARDING AVE",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346285571
}
, {
  "area" : "HONOLULU",
  "location" : "H1W VINEYARD ON",
  "address" : "20X W H1 FWY",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346286925
}
, {
  "area" : "PEARL CITY",
  "location" : "H1E WAIMALU OFF",
  "address" : "10X E H1 FWY",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346286499
}
, {
  "area" : "HONOLULU",
  "location" : "PRINCESS KAIULANI HT",
  "address" : "12X KAIULANI AVE",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346286335
}
, {
  "area" : "AIEA",
  "address" : "98101X KOMO MAI DR",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346287545
}
, {
  "area" : "KAILUA",
  "address" : "112X MOKAPU BLVD",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346287336
}
, {
  "area" : "HONOLULU",
  "location" : "TESORO SALT LAKE",
  "address" : "425X LAWEHANA ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346289418
}
, {
  "area" : "HONOLULU",
  "address" : "DATE ST&KAPIOLANI BLVD",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346291402
}
, {
  "area" : "HONOLULU",
  "location" : "SIDE STREET INN",
  "address" : "61X KAPAHULU AVE",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346291036
}
, {
  "area" : "HONOLULU",
  "address" : "435X LAWEHANA ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346290845
}
, {
  "area" : "HONOLULU",
  "address" : "ALA MOANA&ENA RD",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346292723
}
, {
  "area" : "HONOLULU",
  "location" : "HOLY NATIVITY CHURCH",
  "address" : "528X KALANIANAOLE HWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346292553
}
, {
  "area" : "WAIPAHU",
  "address" : "KA UKA BLVD&UKEE ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346294132
}
, {
  "area" : "WAIPAHU",
  "location" : "H2N KA UKA OFF",
  "address" : "2X N H2 FWY",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346294041
}
, {
  "area" : "EWA BEACH",
  "address" : "FORT WEAVER RD&KOLOWAKA DR",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346293845
}
, {
  "area" : "HONOLULU",
  "address" : "HAWAII KAI DR&LUNALILO HOME RD",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346295122
}
, {
  "area" : "WAIANAE",
  "location" : "WAIANAE COMP CENTER",
  "address" : "86026X FARRINGTON HWY",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346294701
}
, {
  "area" : "AIEA",
  "location" : "H3W PEARL CITY OFF",
  "address" : "H3W PEARL CITY OFF",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346295795
}
, {
  "area" : "KANEOHE",
  "location" : "H3E KAM OFF",
  "address" : "H3E KAM OFF",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346295700
}
, {
  "area" : "HONOLULU",
  "location" : "CONTESSA CONDO",
  "address" : "282X S KING ST",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346295547
}
, {
  "area" : "AIEA",
  "location" : "TIMES MARKET AIEA SC",
  "address" : "99011X AIEA HTS DR",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346295471
}
, {
  "area" : "AIEA",
  "location" : "PEARLRIDGE GARDENS 5",
  "address" : "98103X MOANALUA RD",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346296782
}
, {
  "area" : "HAUULA",
  "location" : "PUNALUU BCH PK",
  "address" : "53030X KAM HWY",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346296573
}
, {
  "area" : "HONOLULU",
  "address" : "65X LUNALILO HOME RD",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346296286
}
, {
  "area" : "HONOLULU",
  "address" : "MAPUNAPUNA PL&PUULOA RD",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346297847
}
, {
  "area" : "KAILUA",
  "address" : "HAMAKUA DR&KEOLU DR",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346297809
}
, {
  "area" : "HONOLULU",
  "address" : "195X KEALAKAI ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346299308
}
, {
  "area" : "WAIPAHU",
  "address" : "KAM HWY&LUMIAINA ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346298946
}
, {
  "area" : "WAIPAHU",
  "location" : "PATSY MINK PK",
  "address" : "94070X KAM HW",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346298930
}
, {
  "area" : "MILILANI",
  "address" : "KUAHELANI AVE&MEHEULA PKWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346300507
}
, {
  "area" : "PEARL CITY",
  "location" : "H1W WAIMALU OFF",
  "address" : "11X W H1 FWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346300003
}
, {
  "area" : "HONOLULU",
  "location" : "MFW RED HILL OFF",
  "address" : "30X W MOANALUA FWY",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346300875
}
, {
  "area" : "HONOLULU",
  "address" : "250X KALIHI ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346302094
}
, {
  "area" : "HONOLULU",
  "location" : "SAFEWAY HAWAII KAI S",
  "address" : "37X KEAHOLE ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346323861
}
, {
  "area" : "PEARL CITY",
  "address" : "66X HOOMOANA ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346322085
}
, {
  "area" : "HONOLULU",
  "address" : "366X KEANU ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346314742
}
, {
  "area" : "HONOLULU",
  "location" : "KEO'S RESTAURANT",
  "address" : "202X KUHIO AVE",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346313702
}
, {
  "area" : "MILILANI",
  "address" : "MAALEWA ST&UKUWAI ST",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346313662
}
, {
  "area" : "PEARL CITY",
  "location" : "L&L DRIVE INN",
  "address" : "113X KUALA ST",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346313445
}
, {
  "area" : "WAIPAHU",
  "address" : "94090X KUHAULUA ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346312917
}
, {
  "area" : "HONOLULU",
  "address" : "345X WOODLAWN DR",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346311921
}
, {
  "area" : "AIEA",
  "address" : "POKO PL&POKO RD",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346309137
}
, {
  "area" : "WAHIAWA",
  "address" : "CALIFORNIA AVE&S KAM HWY",
  "code" : "560",
  "type" : "TRAFFIC INCIDENT - NO COLLISION",
  "date" : 1346307082
}
, {
  "area" : "HONOLULU",
  "location" : "TESORO DILLINGHAM",
  "address" : "152X DILLINGHAM BLVD",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346305923
}
, {
  "area" : "PEARL CITY",
  "location" : "H1W WAIMALU OFF",
  "address" : "11X W H1 FWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346305598
}
, {
  "area" : "HONOLULU",
  "address" : "115X MAPUNAPUNA ST",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346305347
}
, {
  "area" : "KAPOLEI",
  "address" : "KAMAAHA AVE&KEKUILANI LP",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346305344
}
, {
  "area" : "HONOLULU",
  "address" : "EMMELINE PL&LIKELIKE HWY",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346304127
}
, {
  "area" : "KAPOLEI",
  "location" : "HONOKAI HALE",
  "address" : "92078X FARRINGTON HWY",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346304025
}
, {
  "area" : "WAIALUA",
  "address" : "KAUKONAHUA RD&POAMOHO ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346303700
}
, {
  "area" : "PEARL CITY",
  "location" : "H1W WAIPAHU OFF",
  "address" : "9X W H1 FWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346303207
}
, {
  "area" : "HONOLULU",
  "address" : "HALEMAUMAU ST&KALANIANAOLE HWY",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346303175
}
, {
  "area" : "HONOLULU",
  "location" : "H1E NIMITZ OFF WKK",
  "address" : "18X E H1 FWY",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346324307
}
, {
  "area" : "PUULOA",
  "address" : "506X IROQUOIS AVE",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346325852
}
, {
  "area" : "PEARL CITY",
  "location" : "H2S ONTO H1E",
  "address" : "8X E H1 FWY",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346327521
}
, {
  "area" : "PEARL CITY",
  "location" : "H1E WAIMALU OFF",
  "address" : "10X E H1 FWY",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346328465
}
, {
  "area" : "HONOLULU",
  "address" : "KAPIOLANI BLVD&MCCULLY ST",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346329854
}
, {
  "area" : "HONOLULU",
  "address" : "KAPIOLANI BLVD&WARD AVE",
  "code" : "634",
  "type" : "TRAFFIC SIGNAL PROBLEM",
  "date" : 1346330509
}
, {
  "area" : "KAPOLEI",
  "location" : "H1E FARRINGTON HWY",
  "address" : "H1E FARRINGTON HWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346332767
}
, {
  "area" : "WAIPAHU",
  "location" : "H1E MANAGERS OP",
  "address" : "E H1 FWY/MANAGERS DR",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346332733
}
, {
  "area" : "EWA BEACH",
  "address" : "KAIKO ST&KAIPU ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346333857
}
, {
  "area" : "WAHIAWA",
  "location" : "POST OFFICE WAHIAWA",
  "address" : "11X LEHUA ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346333566
}
, {
  "area" : "PEARL CITY",
  "location" : "H2S ONTO H1E",
  "address" : "8X E H1 FWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346333399
}
, {
  "area" : "AIEA",
  "location" : "H1W AIEA OFF",
  "address" : "13X W H1 FWY",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346334674
}
, {
  "address" : "LIKELIKE MILLER",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346334147
}
, {
  "area" : "HONOLULU",
  "location" : "H1W WILDER OFF",
  "address" : "24X W H1 FWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346333979
}
, {
  "area" : "AIEA",
  "location" : "HARANO TUNNEL H3W",
  "address" : "57X W H3 FWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346335442
}
, {
  "area" : "EWA BEACH",
  "address" : "GEIGER RD&KAPOLEI PKWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346335320
}
, {
  "area" : "WAIPAHU",
  "location" : "H2S WAIANAE OFF",
  "address" : "X S H2 FWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346335296
}
, {
  "area" : "HONOLULU",
  "address" : "106X LUNALILO ST",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346335104
}
, {
  "area" : "LAIE",
  "location" : "LAIE SC",
  "address" : "55051X KAM HWY",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346335036
}
, {
  "area" : "PEARL CITY",
  "location" : "H1W WAIMALU OFF",
  "address" : "11X W H1 FWY",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346334798
}
, {
  "area" : "WAIANAE",
  "address" : "MAILIILII RD&PAAKEA RD",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346336414
}
, {
  "area" : "WAIANAE",
  "address" : "HAKIMO RD&PAAKEA RD",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346336349
}
, {
  "area" : "EWA BEACH",
  "address" : "FORT WEAVER RD&KOLOWAKA DR",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346336186
}
, {
  "area" : "HONOLULU",
  "location" : "NUUANU VLY PK",
  "address" : "292X PALI HWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346336139
}
, {
  "area" : "WAIPAHU",
  "location" : "BRANDY'S",
  "address" : "FARRINGTON HWY&MOKUOLA ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346336104
}
, {
  "area" : "HONOLULU",
  "location" : "TAMURAS FINE LIQUORS",
  "address" : "121X 10TH AVE",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346335974
}
, {
  "area" : "KAPOLEI",
  "address" : "FARRINGTON HWY&LAALOA ST",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346335867
}
, {
  "area" : "PEARL CITY",
  "location" : "H1W WAIMALU OFF",
  "address" : "11X W H1 FWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346335691
}
, {
  "area" : "KANEOHE",
  "address" : "ANOI RD&LIKELIKE HWY",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346337407
}
, {
  "area" : "EWA BEACH",
  "address" : "KUHINA ST&PAILANI ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346338219
}
, {
  "area" : "HONOLULU",
  "address" : "KAPIOLANI BLVD&WARD AVE",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346338149
}
, {
  "area" : "AIEA",
  "location" : "H3W W HARANO TUNNEL",
  "address" : "57X W H3 FWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346339209
}
, {
  "area" : "HONOLULU",
  "location" : "KALAKAUA MIDDLE SCHOOL",
  "address" : "82X KALIHI ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346339156
}
, {
  "area" : "HONOLULU",
  "address" : "N KUKUI ST&MAUNAKEA ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346339107
}
, {
  "area" : "KANEOHE",
  "location" : "H3W E HARANO TUNNEL",
  "address" : "H3W E HARANO TUNNEL",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346338853
}
, {
  "area" : "WAIPAHU",
  "address" : "FARRINGTON HWY&PUPUKAHI ST",
  "code" : "634",
  "type" : "TRAFFIC SIGNAL PROBLEM",
  "date" : 1346338687
}
, {
  "area" : "HONOLULU",
  "location" : "MFE FT SHAFTER OFF",
  "address" : "38X E MOANALUA FWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346338459
}
, {
  "area" : "HONOLULU",
  "address" : "S KING ST&NUUANU AVE",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346340240
}
, {
  "area" : "HONOLULU",
  "location" : "H1W WILDER OFF",
  "address" : "24X W H1 FWY",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346340030
}
, {
  "area" : "KANEOHE",
  "address" : "44063X KANEOHE BAY DR",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346339888
}
, {
  "area" : "HONOLULU",
  "address" : "COOKE ST&KAWAIAHAO ST",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346339708
}
, {
  "area" : "HONOLULU",
  "location" : "FASI MUNICIPAL BLDG",
  "address" : "65X S KING ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346339524
}
, {
  "area" : "HONOLULU",
  "address" : "LUSITANA ST&PUNCHBOWL ST",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346339438
}
, {
  "area" : "HONOLULU",
  "location" : "N KING ST&SMITH ST",
  "address" : "N KING ST&SMITH ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346341006
}
, {
  "area" : "HONOLULU",
  "location" : "N KING ST&SMITH ST",
  "address" : "N KING ST&SMITH ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346340954
}
, {
  "area" : "HONOLULU",
  "address" : "ALAKEA ST&S BERETANIA ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346340928
}
, {
  "address" : "N KING",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346341975
}
, {
  "area" : "EWA BEACH",
  "location" : "H1E KUNIA OFF",
  "address" : "5X E H1 FWY",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346341895
}
, {
  "area" : "KANEOHE",
  "location" : "PALI TUNNELS D4 S",
  "address" : "600X PALI HWY",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346341668
}
, {
  "area" : "AIEA",
  "location" : "HALAWA HEIGHTS MARKE",
  "address" : "99079X HALAWA HTS RD",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346341275
}
, {
  "area" : "KANEOHE",
  "location" : "PALI TUNNELS D4 S",
  "address" : "600X PALI HWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346342426
}
, {
  "area" : "HONOLULU",
  "address" : "191X LUSITANA ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346343535
}
, {
  "area" : "HONOLULU",
  "address" : "N KING ST&WAIAKAMILO RD",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346343385
}
, {
  "area" : "AIEA",
  "address" : "98170X KAAHUMANU ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346342979
}
, {
  "area" : "HONOLULU",
  "location" : "BOH KALIHI",
  "address" : "195X N KING ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346343976
}
, {
  "area" : "HONOLULU",
  "location" : "H1E PUNAHOU OFF",
  "address" : "23X E H1 FWY",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346345393
}
, {
  "area" : "HONOLULU",
  "location" : "BOH MAPUNAPUNA",
  "address" : "296X MAPUNAPUNA PL",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346345889
}
, {
  "area" : "HONOLULU",
  "location" : "FT SHAFTER BUCKNER G",
  "address" : "10X FUNSTON RD",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346345621
}
, {
  "area" : "KAPOLEI",
  "location" : "MAKAKILO FROM H1W",
  "address" : "MAKAKILO FROM H1W",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346347369
}
, {
  "area" : "HONOLULU",
  "address" : "COOLIDGE ST&S KING ST",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346346713
}
, {
  "area" : "HONOLULU",
  "location" : "MOANALUA GARDENS",
  "address" : "135X PINEAPPLE PL",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346348065
}
, {
  "area" : "HONOLULU",
  "location" : "MFW PUULOA OFF",
  "address" : "40X W MOANALUA FWY",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346347911
}
, {
  "area" : "HONOLULU",
  "location" : "WILSON TUNNEL D5 N",
  "address" : "400X LIKELIKE HWY",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346347652
}
, {
  "area" : "HONOLULU",
  "location" : "ROYAL HAWN HOTEL",
  "address" : "225X KALAKAUA AVE",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346347614
}
, {
  "area" : "WAIPAHU",
  "location" : "COSTCO WAIPIO",
  "address" : "94133X KA UKA BLVD",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346347440
}
, {
  "area" : "HONOLULU",
  "address" : "MAKIKI ST&WILDER AVE",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346347416
}
, {
  "area" : "HONOLULU",
  "location" : "PRINCESS KAIULANI HT",
  "address" : "12X KAIULANI AVE",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346349257
}
, {
  "area" : "EWA BEACH",
  "location" : "EWA FROM H1W",
  "address" : "EWA FROM H1W",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346349089
}
, {
  "area" : "HONOLULU",
  "address" : "ATHERTON RD&HUNNEWELL ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346348840
}
, {
  "area" : "KAPOLEI",
  "location" : "H1E MAKAKILO OFF",
  "address" : "X E H1 FWY",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346348631
}
, {
  "area" : "HONOLULU",
  "address" : "230X LILOA RISE",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346348363
}
, {
  "area" : "KANEOHE",
  "location" : "HAWN MEMORIAL PK",
  "address" : "45042X KAM HWY",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346350015
}
, {
  "area" : "HONOLULU",
  "address" : "ALAKEA ST&MERCHANT ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346349925
}
, {
  "area" : "HALEIWA",
  "address" : "JOSEPH P LEONG HWY&KAM HWY",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346349809
}
, {
  "area" : "AIEA",
  "location" : "H1W KAAMILO OP",
  "address" : "12X W H1 FWY",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346350827
}
, {
  "area" : "HONOLULU",
  "address" : "KUHIO AVE&NAHUA ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346350734
}
, {
  "address" : "SARATOGA/KALIA",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346350310
}
, {
  "area" : "KAPOLEI",
  "location" : "WAL MART KAPOLEI",
  "address" : "91060X FARRINGTON HWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346350095
}
, {
  "area" : "KANEOHE",
  "address" : "47044X APOALEWA PL",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346351766
}
, {
  "area" : "HONOLULU",
  "location" : "PUNCHBOWL FROM H1E",
  "address" : "PUNCHBOWL FROM H1E",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346351426
}
, {
  "area" : "HONOLULU",
  "location" : "H1W HOUGHTAILING OFF",
  "address" : "20X W H1 FWY",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346352651
}
, {
  "area" : "WAIPAHU",
  "location" : "LOWES WAIKELE",
  "address" : "94080X LUMIAINA ST",
  "code" : "560",
  "type" : "TRAFFIC INCIDENT - NO COLLISION",
  "date" : 1346353705
}
, {
  "area" : "HONOLULU",
  "location" : "H1W AIRPORT OFF",
  "address" : "16X W H1 FWY",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346353282
}
, {
  "area" : "HONOLULU",
  "location" : "H1E UNIVERSITY OFF",
  "address" : "24X E H1 FWY",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346352992
}
, {
  "area" : "HONOLULU",
  "location" : "MAKUA ALII",
  "address" : "154X KALAKAUA AVE",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346352874
}
, {
  "area" : "WAIPAHU",
  "address" : "KAM HWY&WAIPAHU ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346354564
}
, {
  "area" : "MILILANI",
  "location" : "MILILANI SC",
  "address" : "95022X KIPAPA DR",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346354511
}
, {
  "area" : "AIEA",
  "location" : "BOH PEARLRIDGE",
  "address" : "98021X PALI MOMI ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346354298
}
, {
  "area" : "HONOLULU",
  "address" : "13X MERCHANT ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346353964
}
, {
  "area" : "HONOLULU",
  "location" : "KAISER MOANALUA",
  "address" : "328X MOANALUA RD",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346355465
}
, {
  "area" : "AIRPORT",
  "address" : "AOLELE ST&LAGOON DR",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346355228
}
, {
  "area" : "PEARL CITY",
  "location" : "H1E PEARL CITY ON",
  "address" : "10X E H1 FWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346355098
}
, {
  "area" : "HONOLULU",
  "location" : "KAM ONTO H1E PH",
  "address" : "KAM ONTO H1E PH",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346354945
}
, {
  "area" : "HONOLULU",
  "address" : "AKAMU PL&PALI HWY",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346354748
}
, {
  "area" : "AIEA",
  "location" : "JUNGLE RIVER",
  "address" : "98110X MOANALUA RD",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346356311
}
, {
  "area" : "KAILUA",
  "location" : "FOODLAND KAILUA",
  "address" : "10X HEKILI ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346355806
}
, {
  "area" : "MOANALUA TER",
  "location" : "MOANALUA CTR",
  "address" : "93X VALKENBURGH ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346357028
}
, {
  "area" : "AIEA",
  "location" : "H1E AIEA HTS OP",
  "address" : "13X E H1 FWY",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346356491
}
, {
  "area" : "AIEA",
  "location" : "MACYS PEARLRIDGE",
  "address" : "98020X KAONOHI ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346358147
}
, {
  "address" : "H1W MCCULLY OP",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346357933
}
, {
  "area" : "AIEA",
  "location" : "DIXIE GRILL AIEA",
  "address" : "99001X KAM HWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346357630
}
, {
  "area" : "WAIPAHU",
  "address" : "94100X MAIKAI PL",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346358789
}
, {
  "area" : "HONOLULU",
  "location" : "BOB'S EQUIPMENT SALES &",
  "address" : "228X HOONEE PL",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346358398
}
, {
  "area" : "HONOLULU",
  "address" : "KAM HWY&N NIMITZ HWY",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346359577
}
, {
  "area" : "HONOLULU",
  "location" : "MFW RED HILL OFF",
  "address" : "30X W MOANALUA FWY",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346359420
}
, {
  "area" : "HONOLULU",
  "location" : "H1W RADFORD PED OP",
  "address" : "14X W H1 FWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346359189
}
, {
  "area" : "HONOLULU",
  "location" : "SPITTING CAVES",
  "address" : "LUMAHAI ST&MOLOAA ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346360866
}
, {
  "area" : "HONOLULU",
  "address" : "270X NIHI ST",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346360380
}
, {
  "area" : "WAIPAHU",
  "location" : "H1E WAIKELE OFF",
  "address" : "7X E H1 FWY",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346360327
}
, {
  "area" : "HONOLULU",
  "location" : "KOKEA CTR",
  "address" : "111X DILLINGHAM BLVD",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346361722
}
, {
  "area" : "HONOLULU",
  "location" : "H1W WILDER OFF",
  "address" : "24X W H1 FWY",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346361624
}
, {
  "area" : "LAIE",
  "address" : "KAM HWY&NANILOA LP",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346361363
}
, {
  "area" : "EWA BEACH",
  "address" : "KAPOLEI PKWY&RENTON RD",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346361239
}
, {
  "area" : "HONOLULU",
  "location" : "HPD CHINATOWN",
  "address" : "7X N HOTEL ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346361008
}
, {
  "area" : "HONOLULU",
  "location" : "OFFICE DEPOT KAKAAKO",
  "address" : "102X AUAHI ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346362662
}
, {
  "area" : "LAIE",
  "location" : "FOODLAND LAIE",
  "address" : "55051X KAM HWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346362438
}
, {
  "area" : "HONOLULU",
  "address" : "94X 9TH AVE",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346363305
}
, {
  "area" : "HONOLULU",
  "location" : "H1E 6TH OFF",
  "address" : "25X E H1 FWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346363210
}
, {
  "area" : "HONOLULU",
  "location" : "VARSITY HOUSE",
  "address" : "250X COYNE ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346363209
}
, {
  "area" : "HONOLULU",
  "location" : "H1E 6TH OFF",
  "address" : "25X E H1 FWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346363179
}
, {
  "area" : "HONOLULU",
  "location" : "LITTLE GEORGES",
  "address" : "68X ALA MOANA",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346362923
}
, {
  "area" : "SCHOFIELD",
  "address" : "KOLEKOLE RD&TRIMBLE RD",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346362872
}
, {
  "area" : "HONOLULU",
  "address" : "KEEAUMOKU ST&S KING ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346364240
}
, {
  "area" : "HONOLULU",
  "location" : "H1W KAPIOLANI OFF",
  "address" : "25X W H1 FWY",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346364129
}
, {
  "area" : "HONOLULU",
  "location" : "CLUB 100",
  "address" : "52X KAMOKU ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346364084
}
, {
  "area" : "AIEA",
  "location" : "HARANO TUNNEL H3E",
  "address" : "57X E H3 FWY",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346363963
}
, {
  "area" : "HONOLULU",
  "location" : "BOODA TOWING",
  "address" : "246X S KING ST",
  "code" : "560",
  "type" : "TRAFFIC INCIDENT - NO COLLISION",
  "date" : 1346363803
}
, {
  "area" : "KANEOHE",
  "location" : "CASTLE HS",
  "address" : "45038X KANEOHE BAY DR",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346363740
}
, {
  "area" : "HONOLULU",
  "location" : "MFW STADIUM OFF",
  "address" : "18X W MOANALUA FWY",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346365308
}
, {
  "area" : "HONOLULU",
  "location" : "BEST WESTERN PLAZA HOTEL",
  "address" : "325X N NIMITZ HWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346365251
}
, {
  "area" : "AIEA",
  "location" : "H3E HALAWA VLY UP",
  "address" : "H3E HALAWA VLY UP",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346365198
}
, {
  "area" : "KANEOHE",
  "location" : "H3E E HARANO TUNNEL",
  "address" : "H3E E HARANO TUNNEL",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346364900
}
, {
  "area" : "HONOLULU",
  "address" : "144X LUSITANA ST",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346364786
}
, {
  "area" : "HONOLULU",
  "address" : "N NIMITZ HWY&WAIAKAMILO RD",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346365759
}
, {
  "area" : "KAPOLEI",
  "location" : "KAPOLEI THEATRES",
  "address" : "89X KAMOKILA BLVD",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346366909
}
, {
  "area" : "HONOLULU",
  "location" : "MFW RED HILL OFF",
  "address" : "30X W MOANALUA FWY",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346366625
}
, {
  "area" : "KANEOHE",
  "location" : "H3W E HARANO TUNNEL",
  "address" : "H3W E HARANO TUNNEL",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346366458
}
, {
  "area" : "HONOLULU",
  "address" : "LAGOON DR&N NIMITZ HWY",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346366401
}
, {
  "area" : "HONOLULU",
  "address" : "230X BINGHAM ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346366363
}
, {
  "area" : "HONOLULU",
  "address" : "HAUSTEN ST&S KING ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346366254
}
, {
  "area" : "PEARL CITY",
  "location" : "PEARL CITY NURSING HOME",
  "address" : "91X LEHUA AVE",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346366079
}
, {
  "area" : "AIEA",
  "location" : "H1E KAONOHI OP",
  "address" : "12X E H1 FWY",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346366017
}
, {
  "area" : "KANEOHE",
  "address" : "HAIKU RD&KAM HWY",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346367709
}
, {
  "area" : "AIEA",
  "location" : "HARANO TUNNEL H3W",
  "address" : "57X W H3 FWY",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346367638
}
, {
  "area" : "HONOLULU",
  "location" : "SEARS AMSC",
  "address" : "145X ALA MOANA",
  "code" : "560",
  "type" : "TRAFFIC INCIDENT - NO COLLISION",
  "date" : 1346367346
}
, {
  "area" : "HONOLULU",
  "location" : "H1W WARD OP",
  "address" : "22X W H1 FWY",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346367311
}
, {
  "area" : "WAIMANALO",
  "address" : "MAHAILUA ST&WAIKUPANAHA ST",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346368601
}
, {
  "area" : "WAIPAHU",
  "location" : "WAIPAHU HS",
  "address" : "94121X FARRINGTON HWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346368220
}
, {
  "address" : "MFW ARIZONA OFF",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346368209
}
, {
  "area" : "HONOLULU",
  "location" : "CENTRAL UNION PRESCH",
  "address" : "166X S BERETANIA ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346368200
}
, {
  "area" : "HONOLULU",
  "address" : "KAM HWY&N NIMITZ HWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346370400
}
, {
  "area" : "KAHUKU",
  "address" : "KAM HWY&MARCONI RD",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346370212
}
, {
  "area" : "WAHIAWA",
  "address" : "123X KAALA AVE",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346370026
}
, {
  "area" : "WAIPAHU",
  "location" : "SERVCO LEEWARD",
  "address" : "94072X FARRINGTON HWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346369968
}
, {
  "area" : "HONOLULU",
  "location" : "HARBOR VIEW PLZ",
  "address" : "167X ALA MOANA",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346371738
}
, {
  "area" : "HONOLULU",
  "location" : "SCENIC TOWERS",
  "address" : "79X ISENBERG ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346371598
}
, {
  "area" : "HONOLULU",
  "address" : "21ST AVE&WAIALAE AVE",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346371434
}
, {
  "area" : "KAPOLEI",
  "address" : "FARRINGTON HWY&KUALAKAI PKWY",
  "code" : "560",
  "type" : "TRAFFIC INCIDENT - NO COLLISION",
  "date" : 1346371320
}
, {
  "area" : "HONOLULU",
  "location" : "H1W KAM OP PH",
  "address" : "15X W H1 FWY",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346371296
}
, {
  "area" : "HONOLULU",
  "location" : "MCKINLEY HS",
  "address" : "103X S KING ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346372615
}
, {
  "area" : "WAHIAWA",
  "location" : "HAWAIIAN EYE",
  "address" : "61X KILANI AVE",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346372033
}
, {
  "area" : "HONOLULU",
  "location" : "SHRINERS HOSPITAL",
  "address" : "131X PUNAHOU ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346372024
}
, {
  "area" : "HONOLULU",
  "address" : "ALA MOANA&HOBRON LN",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346372015
}
, {
  "area" : "HICKAM",
  "address" : "N NIMITZ HWY&VALKENBURGH ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346371902
}
, {
  "area" : "AIEA",
  "address" : "KAM HWY&SALT LAKE BLVD",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346373491
}
, {
  "area" : "HONOLULU",
  "location" : "H1W ARIZONA OFF",
  "address" : "15X W H1 FWY",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346373451
}
, {
  "area" : "HONOLULU",
  "location" : "H1W AIRPORT OFF",
  "address" : "16X W H1 FWY",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346373406
}
, {
  "area" : "PEARL CITY",
  "location" : "H1W WAIMALU OFF",
  "address" : "11X W H1 FWY",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346373219
}
, {
  "area" : "WAIANAE",
  "address" : "FARRINGTON HWY&HOOKELE ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346373209
}
, {
  "area" : "HONOLULU",
  "location" : "MAUNAKEA TOWER",
  "address" : "124X MAUNAKEA ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346373019
}
, {
  "area" : "HONOLULU",
  "address" : "MIDDLE ST&ROSE ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346374330
}
, {
  "area" : "KANEOHE",
  "address" : "49004X KAM HWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346374047
}
, {
  "area" : "HONOLULU",
  "location" : "SAFEWAY PALI",
  "address" : "136X PALI HWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346375060
}
, {
  "area" : "HONOLULU",
  "location" : "UNOCAL KALIHI",
  "address" : "134X N SCHOOL ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346374815
}
, {
  "area" : "HONOLULU",
  "address" : "HOUGHTAILING ST&N SCHOOL ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346374772
}
, {
  "area" : "HONOLULU",
  "location" : "DAMIEN HS",
  "address" : "140X HOUGHTAILING ST",
  "code" : "550V",
  "type" : "MOTOR VEHICLE COLLISION - TOWED",
  "date" : 1346374739
}
, {
  "area" : "AIEA",
  "location" : "H1E HALAWA HTS OFF",
  "address" : "13X E H1 FWY",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346376005
}
, {
  "area" : "WAHIAWA",
  "location" : "BRIDGE KARSTEN THOT",
  "address" : "71040X KAM HWY",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346375807
}
, {
  "area" : "HONOLULU",
  "location" : "HALE NANI HEALTH CTR",
  "address" : "167X PENSACOLA ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346376454
}
, {
  "area" : "HONOLULU",
  "location" : "HALE NANI HEALTH CTR",
  "address" : "167X PENSACOLA ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346376404
}
, {
  "area" : "HALEIWA",
  "address" : "61011X IKUWAI PL",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346377765
}
, {
  "area" : "WAIANAE",
  "address" : "87008X KULAAUPUNI ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346377674
}
, {
  "area" : "PEARL CITY",
  "address" : "KAM HWY&WAIMANO HOME RD",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346377408
}
, {
  "area" : "WAIPAHU",
  "location" : "SHELL WAIPAHU",
  "address" : "94038X PUPUPANI ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346378257
}
, {
  "area" : "HONOLULU",
  "address" : "HULI ST&N KUAKINI ST",
  "code" : "560",
  "type" : "TRAFFIC INCIDENT - NO COLLISION",
  "date" : 1346378133
}
, {
  "area" : "WAIANAE",
  "address" : "87102X HAKIMO RD",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346379411
}
, {
  "area" : "WAHIAWA",
  "location" : "WHITMORE COMM PK",
  "address" : "125X WHITMORE AVE",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346380739
}
, {
  "area" : "HONOLULU",
  "location" : "PALI TUNNELS D5 N",
  "address" : "519X PALI HWY",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346380533
}
, {
  "area" : "HONOLULU",
  "location" : "RADFORD HS",
  "address" : "436X SALT LAKE BLVD",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346380420
}
, {
  "area" : "HONOLULU",
  "location" : "H1W SCHOOL OFF",
  "address" : "21X W H1 FWY",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346380232
}
, {
  "area" : "KANEOHE",
  "address" : "47018X IUIU ST",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346380057
}
, {
  "area" : "HONOLULU",
  "address" : "KUHIO AVE&NOHONANI ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346379943
}
, {
  "area" : "HONOLULU",
  "location" : "HAPPY VALLEY PIZZA",
  "address" : "KANAINA AVE&MONSARRAT AVE",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346381577
}
, {
  "area" : "HONOLULU",
  "location" : "MFE MIDDLE OP",
  "address" : "MIDDLE ST/E MOANALUA FWY",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346382535
}
, {
  "area" : "HONOLULU",
  "location" : "MFE MIDDLE OP",
  "address" : "MIDDLE ST/E MOANALUA FWY",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346382328
}
, {
  "area" : "AIEA",
  "location" : "MONTEREY BAY CANNERS",
  "address" : "98017X KAONOHI ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346382307
}
, {
  "area" : "KANEOHE",
  "location" : "HAIRPIN TURN PALI",
  "address" : "634X PALI HWY",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346382056
}
, {
  "area" : "KAILUA",
  "location" : "MACYS KAILUA",
  "address" : "57X KAILUA RD",
  "code" : "560",
  "type" : "TRAFFIC INCIDENT - NO COLLISION",
  "date" : 1346383207
}
, {
  "area" : "HALEIWA",
  "location" : "CHUNS REEF",
  "address" : "61052X KAM HWY",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346383031
}
, {
  "area" : "KAILUA",
  "location" : "WOMENS CORR FACILITY",
  "address" : "42047X KALANIANAOLE HWY",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346382804
}
, {
  "area" : "KANEOHE",
  "address" : "ANOI RD&LIKELIKE HWY",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346383996
}
, {
  "area" : "WAIANAE",
  "address" : "86049X PAHEEHEE RD",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346385415
}
, {
  "area" : "KANEOHE",
  "address" : "KAM HWY&PALI HWY",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346385333
}
, {
  "area" : "KAHUKU",
  "location" : "KUILIMA TURTLE BAY",
  "address" : "57010X KUILIMA DR",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346385301
}
, {
  "area" : "WAIPAHU",
  "address" : "KA UKA BLVD&KAM HWY",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346386719
}
, {
  "area" : "KAAAWA",
  "location" : "KAAAWA BCH PK",
  "address" : "51039X KAM HWY",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346386288
}
, {
  "area" : "HONOLULU",
  "location" : "H1E WAIALAE OFF",
  "address" : "26X E H1 FWY",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346386229
}
, {
  "area" : "HONOLULU",
  "location" : "H1E PUNAHOU OFF",
  "address" : "23X E H1 FWY",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346387887
}
, {
  "area" : "HONOLULU",
  "location" : "H1E WARD ON",
  "address" : "22X E H1 FWY",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346387241
}
, {
  "area" : "HONOLULU",
  "address" : "MAKANANI DR&SKYLINE DR",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346387188
}
, {
  "area" : "WAHIAWA",
  "address" : "JOSEPH P LEONG HWY&KAM HWY",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346409686
}
, {
  "area" : "KAPOLEI",
  "address" : "KOKOLE ST&PALAILAI ST",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346406392
}
, {
  "area" : "EWA BEACH",
  "address" : "FORT WEAVER RD&OLD FORT WEAVER",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346403907
}
, {
  "area" : "LAIE",
  "location" : "MCDONALDS LAIE",
  "address" : "55040X KAM HWY",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346398904
}
, {
  "area" : "WAIPAHU",
  "location" : "PARKVIEW VILLAGE 4",
  "address" : "94061X KAHAKEA ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346398486
}
, {
  "area" : "KAPOLEI",
  "address" : "FORT BARRETTE RD&KAMAAHA AVE",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346397931
}
, {
  "area" : "HONOLULU",
  "location" : "H1E LIKELIKE OFF",
  "address" : "20X E H1 FWY",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346395769
}
, {
  "area" : "AIEA",
  "location" : "H3E W HARANO TUNNEL",
  "address" : "H3E W HARANO TUNNEL",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346394122
}
, {
  "area" : "AIEA",
  "location" : "HARANO TUNNEL H3E",
  "address" : "57X E H3 FWY",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346392381
}
, {
  "area" : "HONOLULU",
  "address" : "KAPIOLANI BLVD&PIIKOI ST",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346392137
}
, {
  "address" : "FARRINGTON/POWER PLANT",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346392007
}
, {
  "area" : "HONOLULU",
  "location" : "SAFEWAY BERETANIA",
  "address" : "123X S BERETANIA ST",
  "code" : "560",
  "type" : "TRAFFIC INCIDENT - NO COLLISION",
  "date" : 1346391934
}
, {
  "area" : "HONOLULU",
  "location" : "H1W HOUGHTAILING OFF",
  "address" : "20X W H1 FWY",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346390972
}
, {
  "area" : "WAHIAWA",
  "address" : "30X OHAI PL",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346390962
}
, {
  "area" : "PEARL CITY",
  "address" : "KAM HWY&LEHUA AVE",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346390704
}
, {
  "area" : "HONOLULU",
  "location" : "KUAKINI HOSP",
  "address" : "34X N KUAKINI ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346389950
}
, {
  "area" : "HAUULA",
  "location" : "PUNALUU BCH PK",
  "address" : "53030X KAM HWY",
  "code" : "632",
  "type" : "HAZARDOUS DRIVER",
  "date" : 1346389712
}
, {
  "address" : "H1W PRI H2 SPLIT",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346417652
}
, {
  "address" : "H2N B4 KA UKA",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346417814
}
, {
  "area" : "HONOLULU",
  "location" : "KAIMUKI HS",
  "address" : "270X KAIMUKI AVE",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346419002
}
, {
  "area" : "PEARL CITY",
  "location" : "H1W WAIMALU OFF",
  "address" : "11X W H1 FWY",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346418675
}
, {
  "area" : "PEARL CITY",
  "location" : "H1W WAIMALU OFF",
  "address" : "11X W H1 FWY",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346418554
}
, {
  "area" : "HONOLULU",
  "address" : "HOPAKA ST&PIIKOI ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346421972
}
, {
  "area" : "KAILUA",
  "address" : "S KALAHEO AVE&KUULEI RD",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346421580
}
, {
  "area" : "HONOLULU",
  "address" : "N NIMITZ HWY&VALKENBURGH ST",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346423449
}
, {
  "area" : "HONOLULU",
  "location" : "MFE TRIPLER OFF",
  "address" : "33X E MOANALUA FWY",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346423201
}
, {
  "area" : "HONOLULU",
  "location" : "FCU HONOLULU POLICE",
  "address" : "153X YOUNG ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346424769
}
, {
  "area" : "KAILUA",
  "location" : "HPD KAILUA",
  "address" : "21X KUULEI RD",
  "code" : "560",
  "type" : "TRAFFIC INCIDENT - NO COLLISION",
  "date" : 1346424595
}
, {
  "area" : "HONOLULU",
  "address" : "S KING ST&UNIVERSITY AVE",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346424434
}
, {
  "area" : "HONOLULU",
  "address" : "340X PINAO ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346424353
}
, {
  "area" : "HONOLULU",
  "address" : "KALAKAUA AVE&OHUA AVE",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346424234
}
, {
  "area" : "WAIPAHU",
  "location" : "H2S WAIANAE OFF",
  "address" : "X S H2 FWY",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346425662
}
, {
  "area" : "WAIANAE",
  "address" : "89060X POHAKUNUI AVE",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346425565
}
, {
  "area" : "HONOLULU",
  "address" : "ELELUPE RD&KALANIANAOLE HWY",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346425384
}
, {
  "area" : "KAILUA",
  "address" : "ONEAWA ST&ONEAWAKAI PL",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346425307
}
, {
  "area" : "WAIPAHU",
  "address" : "AWAIKI ST&AWANUI ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346425227
}
, {
  "area" : "HONOLULU",
  "address" : "LINAPUNI ST&N SCHOOL ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346425194
}
, {
  "area" : "AIEA",
  "address" : "KAONOHI ST&MOANALUA RD",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346425823
}
, {
  "area" : "HONOLULU",
  "address" : "HALEMAUMAU ST&KALANIANAOLE HWY",
  "code" : "630",
  "type" : "TRAFFIC NUISANCE OR PARKING VIOLATION",
  "date" : 1346426866
}
, {
  "area" : "HONOLULU",
  "address" : "KAPIOLANI BLVD&KONA IKI ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346429134
}
, {
  "area" : "KAPOLEI",
  "location" : "HFD KAPOLEI 40",
  "address" : "202X LAUWILIWILI ST",
  "code" : "550",
  "type" : "MOTOR VEHICLE COLLISION",
  "date" : 1346429122
}
, {
  "area" : "HONOLULU",
  "location" : "LUNALILO ONTO H1W",
  "address" : "LUNALILO ONTO H1W",
  "code" : "633",
  "type" : "STALLED/HAZARDOUS VEHICLE",
  "date" : 1346428664
}
 ])
  // request('https://gist.github.com/3ac8a072339ed9d25666.git', function(error, response, data){
  //       if(!error && response.statusCode == 200){
  //         console.log(data);
  //       }
  //   })
})



var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

});