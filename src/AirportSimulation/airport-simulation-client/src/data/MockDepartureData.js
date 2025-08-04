const MockDepartureData = [
    {
        "flight": "WN3062",
        "time": "2025-07-07T00:15:00",
        "to": "Baltimore (BWI)",
        "airline": "Southwest Airlines",
        "aircraft": "B737",
        "status": "Estimated dep. 12:21 AM"
    },
    {
        "flight": "GB110",
        "time": "2025-07-07T00:30:00",
        "to": "Cincinnati (CVG)",
        "airline": "DHL",
        "aircraft": "B763 (N290CM)",
        "status": "Departed 1:04 AM"
    },
    {
        "flight": "WN8517",
        "time": "2025-07-07T01:00:00",
        "to": "Richmond (RIC)",
        "airline": "Southwest Airlines",
        "aircraft": "B737",
        "status": "Estimated dep. 1:10 AM"
    },
    {
        "flight": "CV6105",
        "time": "2025-07-07T03:30:00",
        "to": "Luxembourg (LUX)",
        "airline": "Cargolux",
        "aircraft": "B744 (LX-ECV)",
        "status": "Departed 3:59 AM"
    },
    {
        "flight": "8C3355",
        "time": "2025-07-07T03:46:00",
        "to": "Cincinnati (CVG)",
        "airline": "Amazon Air",
        "aircraft": "B763 (N617AZ)",
        "status": "Departed 4:05 AM"
    },
    {
        "flight": "KE255",
        "time": "2025-07-07T04:15:00",
        "to": "Dallas (DFW)",
        "airline": "Korean Air",
        "aircraft": "74N",
        "status": "Unknown"
    },
    {
        "flight": "AA5507",
        "time": "2025-07-07T05:00:00",
        "to": "Charlotte (CLT)",
        "airline": "American Eagle",
        "aircraft": "CRJ9 (N584NN)",
        "status": "Departed 5:11 AM"
    },
    {
        "flight": "F91872",
        "time": "2025-07-07T05:01:00",
        "to": "New York (JFK)",
        "airline": "Frontier (Joey the Opossum Livery)",
        "aircraft": "A20N (N351FR)",
        "status": "Departed 5:13 AM"
    },
    {
        "flight": "NK2343",
        "time": "2025-07-07T05:12:00",
        "to": "Baltimore (BWI)",
        "airline": "Spirit Airlines",
        "aircraft": "A21N (N730NK)",
        "status": "Departed 5:41 AM"
    },
    {
        "flight": "NK2218",
        "time": "2025-07-07T05:20:00",
        "to": "Fort Lauderdale (FLL)",
        "airline": "Spirit Airlines",
        "aircraft": "A21N (N742NK)",
        "status": "Departed 5:30 AM"
    },
    {
        "flight": "NK2287",
        "time": "2025-07-07T05:25:00",
        "to": "Orlando (MCO)",
        "airline": "Spirit Airlines",
        "aircraft": "A21N (N705NK)",
        "status": "Departed 6:15 AM"
    },
    {
        "flight": "UA2440",
        "time": "2025-07-07T05:30:00",
        "to": "Washington (IAD)",
        "airline": "United Airlines",
        "aircraft": "B737 (N15710)",
        "status": "Departed 5:43 AM"
    },
    {
        "flight": "NK2488",
        "time": "2025-07-07T05:45:00",
        "to": "Detroit (DTW)",
        "airline": "Spirit Airlines",
        "aircraft": "A321 (N661NK)",
        "status": "Departed 5:53 AM"
    },
    {
        "flight": "AA2770",
        "time": "2025-07-07T06:00:00",
        "to": "Dallas (DFW)",
        "airline": "American Airlines",
        "aircraft": "B738 (N959AN)",
        "status": "Departed 6:09 AM"
    },
    {
        "flight": "B6696",
        "time": "2025-07-07T06:00:00",
        "to": "Boston (BOS)",
        "airline": "JetBlue",
        "aircraft": "A320 (N652JB)",
        "status": "Departed 6:03 AM"
    },
    {
        "flight": "DL404",
        "time": "2025-07-07T06:00:00",
        "to": "New York (LGA)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N124DX)",
        "status": "Canceled"
    },
    {
        "flight": "DL651",
        "time": "2025-07-07T06:00:00",
        "to": "Detroit (DTW)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N368DN)",
        "status": "Departed 6:17 AM"
    },
    {
        "flight": "F917",
        "time": "2025-07-07T06:00:00",
        "to": "Montego Bay (MBJ)",
        "airline": "Frontier (Pike the Otter Livery)",
        "aircraft": "A320 (N235FR)",
        "status": "Departed 6:37 AM"
    },
    {
        "flight": "UA447",
        "time": "2025-07-07T06:00:00",
        "to": "New York (EWR)",
        "airline": "United Airlines",
        "aircraft": "B39M (N77579)",
        "status": "Departed 6:38 AM"
    },
    {
        "flight": "AA4547",
        "time": "2025-07-07T06:00:00",
        "to": "Washington (DCA)",
        "airline": "American Eagle",
        "aircraft": "E75S (N412YX)",
        "status": "Departed 6:13 AM"
    },
    {
        "flight": "NK2353",
        "time": "2025-07-07T06:00:00",
        "to": "Dallas (DFW)",
        "airline": "Spirit Airlines",
        "aircraft": "A21N (N716NK)",
        "status": "Departed 6:32 AM"
    },
    {
        "flight": "WN2925",
        "time": "2025-07-07T06:00:00",
        "to": "Denver (DEN)",
        "airline": "Southwest Airlines",
        "aircraft": "B737 (N7889A)",
        "status": "Departed 6:11 AM"
    },
    {
        "flight": "WN8500",
        "time": "2025-07-07T06:00:00",
        "to": "Richmond (RIC)",
        "airline": "Southwest Airlines",
        "aircraft": "B737 (N203WN)",
        "status": "Departed 6:27 AM"
    },
    {
        "flight": "WN3720",
        "time": "2025-07-07T06:10:00",
        "to": "Houston (HOU)",
        "airline": "Southwest Airlines",
        "aircraft": "B738 (N8644C)",
        "status": "Departed 6:23 AM"
    },
    {
        "flight": "WN1784",
        "time": "2025-07-07T06:15:00",
        "to": "New York (LGA)",
        "airline": "Southwest Airlines",
        "aircraft": "B737 (N204WN)",
        "status": "Departed 6:25 AM"
    },
    {
        "flight": "AC1304",
        "time": "2025-07-07T06:25:00",
        "to": "Toronto (YYZ)",
        "airline": "Air Canada",
        "aircraft": "BCS3 (C-GNAM)",
        "status": "Departed 6:29 AM"
    },
    {
        "flight": "AS377",
        "time": "2025-07-07T06:30:00",
        "to": "Seattle (SEA)",
        "airline": "Alaska Airlines",
        "aircraft": "B39M (N943AK)",
        "status": "Departed 8:31 AM"
    },
    {
        "flight": "AA3575",
        "time": "2025-07-07T06:45:00",
        "to": "Charlotte (CLT)",
        "airline": "American Eagle",
        "aircraft": "E75L (N302RN)",
        "status": "Departed 9:29 AM"
    },
    {
        "flight": "F93512",
        "time": "2025-07-07T06:45:00",
        "to": "Boston (BOS)",
        "airline": "Frontier (Brazos the Ridgway's Hawk)",
        "aircraft": "A21N (N658FR)",
        "status": "Departed 6:54 AM"
    },
    {
        "flight": "WN404",
        "time": "2025-07-07T06:45:00",
        "to": "Las Vegas (LAS)",
        "airline": "Southwest Airlines",
        "aircraft": "B38M (N8895Q)",
        "status": "Departed 7:05 AM"
    },
    {
        "flight": "AA616",
        "time": "2025-07-07T07:00:00",
        "to": "Chicago (ORD)",
        "airline": "American Airlines",
        "aircraft": "A319 (N814AW)",
        "status": "Departed 8:11 AM"
    },
    {
        "flight": "DL987",
        "time": "2025-07-07T07:00:00",
        "to": "Boston (BOS)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N723TW)",
        "status": "Departed 7:07 AM"
    },
    {
        "flight": "DL996",
        "time": "2025-07-07T07:00:00",
        "to": "Los Angeles (LAX)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N126DN)",
        "status": "Departed 7:16 AM"
    },
    {
        "flight": "DL1334",
        "time": "2025-07-07T07:00:00",
        "to": "Fort Lauderdale (FLL)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N695DL)",
        "status": "Departed 7:12 AM"
    },
    {
        "flight": "UA6365",
        "time": "2025-07-07T07:00:00",
        "to": "Houston (IAH)",
        "airline": "United Express",
        "aircraft": "E75L (N88341)",
        "status": "Departed 7:18 AM"
    },
    {
        "flight": "AA3190",
        "time": "2025-07-07T07:00:00",
        "to": "Miami (MIA)",
        "airline": "American Airlines",
        "aircraft": "B738 (N847NN)",
        "status": "Departed 7:14 AM"
    },
    {
        "flight": "WN3368",
        "time": "2025-07-07T07:00:00",
        "to": "Chicago (MDW)",
        "airline": "Southwest Airlines",
        "aircraft": "B738 (N8651A)",
        "status": "Departed 7:10 AM"
    },
    {
        "flight": "DL9960",
        "time": "2025-07-07T07:00:00",
        "to": "Cartagena (CTG)",
        "airline": "Delta Air Lines",
        "aircraft": "B738 (N382DA)",
        "status": "Departed 7:56 AM"
    },
    {
        "flight": "WN420",
        "time": "2025-07-07T07:05:00",
        "to": "Orlando (MCO)",
        "airline": "Southwest Airlines",
        "aircraft": "B737 (N901WN)",
        "status": "Departed 7:32 AM"
    },
    {
        "flight": "B6320",
        "time": "2025-07-07T07:07:00",
        "to": "New York (JFK)",
        "airline": "JetBlue",
        "aircraft": "A320 (N729JB)",
        "status": "Departed 10:13 AM"
    },
    {
        "flight": "AA1428",
        "time": "2025-07-07T07:10:00",
        "to": "Philadelphia (PHL)",
        "airline": "American Airlines",
        "aircraft": "A319 (N4005X)",
        "status": "Departed 9:09 AM"
    },
    {
        "flight": "DL1266",
        "time": "2025-07-07T07:10:00",
        "to": "West Palm Beach (PBI)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N336DX)",
        "status": "Departed 7:22 AM"
    },
    {
        "flight": "WN363",
        "time": "2025-07-07T07:10:00",
        "to": "Washington (DCA)",
        "airline": "Southwest Airlines",
        "aircraft": "B737 (N7849A)",
        "status": "Departed 7:20 AM"
    },
    {
        "flight": "DL2204",
        "time": "2025-07-07T07:13:00",
        "to": "Orlando (MCO)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N554NW)",
        "status": "Departed 7:28 AM"
    },
    {
        "flight": "UA231",
        "time": "2025-07-07T07:15:00",
        "to": "New York (EWR)",
        "airline": "United Airlines",
        "aircraft": "A319 (N804UA)",
        "status": "Departed 7:29 AM"
    },
    {
        "flight": "UA340",
        "time": "2025-07-07T07:15:00",
        "to": "Denver (DEN)",
        "airline": "United Airlines",
        "aircraft": "B39M (N67501)",
        "status": "Departed 7:33 AM"
    },
    {
        "flight": "DL5555",
        "time": "2025-07-07T07:15:00",
        "to": "Raleigh-Durham (RDU)",
        "airline": "Delta Connection",
        "aircraft": "CRJ9 (N311PQ)",
        "status": "Departed 7:31 AM"
    },
    {
        "flight": "DL926",
        "time": "2025-07-07T07:25:00",
        "to": "Washington (DCA)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N350DN)",
        "status": "Departed 8:25 AM"
    },
    {
        "flight": "DL1646",
        "time": "2025-07-07T07:25:00",
        "to": "Detroit (DTW)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N392DN)",
        "status": "Departed 8:10 AM"
    },
    {
        "flight": "DL2014",
        "time": "2025-07-07T07:25:00",
        "to": "Cancun (CUN)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N899DN)",
        "status": "Departed 7:36 AM"
    },
    {
        "flight": "DL2235",
        "time": "2025-07-07T07:25:00",
        "to": "Denver (DEN)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N119DN)",
        "status": "Departed 7:43 AM"
    },
    {
        "flight": "DL2325",
        "time": "2025-07-07T07:25:00",
        "to": "New York (EWR)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N376DN)",
        "status": "Departed 7:39 AM"
    },
    {
        "flight": "DL2974",
        "time": "2025-07-07T07:25:00",
        "to": "Washington (IAD)",
        "airline": "Delta Air Lines",
        "aircraft": "BCS3 (N314DU)",
        "status": "Departed 7:46 AM"
    },
    {
        "flight": "DL3125",
        "time": "2025-07-07T07:25:00",
        "to": "Indianapolis (IND)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N824DN)",
        "status": "Departed 7:39 AM"
    },
    {
        "flight": "DL3128",
        "time": "2025-07-07T07:25:00",
        "to": "New Orleans (MSY)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N893DN)",
        "status": "Departed 7:41 AM"
    },
    {
        "flight": "DL4930",
        "time": "2025-07-07T07:25:00",
        "to": "White Plains (HPN)",
        "airline": "Delta Connection",
        "aircraft": "CRJ9 (N133EV)",
        "status": "Departed 7:41 AM"
    },
    {
        "flight": "DL5174",
        "time": "2025-07-07T07:25:00",
        "to": "Louisville (SDF)",
        "airline": "Delta Connection",
        "aircraft": "CRJ9 (N186GJ)",
        "status": "Departed 7:42 AM"
    },
    {
        "flight": "DL323",
        "time": "2025-07-07T07:30:00",
        "to": "New York (LGA)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N383DZ)",
        "status": "Departed 7:47 AM"
    },
    {
        "flight": "DL839",
        "time": "2025-07-07T07:30:00",
        "to": "Dallas (DFW)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N360DN)",
        "status": "Departed 7:45 AM"
    },
    {
        "flight": "DL1336",
        "time": "2025-07-07T07:30:00",
        "to": "Norfolk (ORF)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N820DN)",
        "status": "Departed 8:04 AM"
    },
    {
        "flight": "DL1380",
        "time": "2025-07-07T07:30:00",
        "to": "Pittsburgh (PIT)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N897DN)",
        "status": "Departed 7:40 AM"
    },
    {
        "flight": "DL1462",
        "time": "2025-07-07T07:30:00",
        "to": "Richmond (RIC)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N696DL)",
        "status": "Departed 7:37 AM"
    },
    {
        "flight": "DL1500",
        "time": "2025-07-07T07:30:00",
        "to": "Cleveland (CLE)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N812DN)",
        "status": "Departed 7:43 AM"
    },
    {
        "flight": "DL1634",
        "time": "2025-07-07T07:30:00",
        "to": "Nashville (BNA)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N894AT)",
        "status": "Departed 7:44 AM"
    },
    {
        "flight": "DL2605",
        "time": "2025-07-07T07:30:00",
        "to": "Tampa (TPA)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N543US)",
        "status": "Departed 7:44 AM"
    },
    {
        "flight": "DL2836",
        "time": "2025-07-07T07:30:00",
        "to": "Miami (MIA)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N553NW)",
        "status": "Departed 7:41 AM"
    },
    {
        "flight": "DL5153",
        "time": "2025-07-07T07:30:00",
        "to": "Charleston (CHS)",
        "airline": "Delta Connection",
        "aircraft": "CRJ9 (N602LR)",
        "status": "Departed 8:22 AM"
    },
    {
        "flight": "DL5517",
        "time": "2025-07-07T07:30:00",
        "to": "Memphis (MEM)",
        "airline": "Delta Connection",
        "aircraft": "CRJ7 (N690CA)",
        "status": "Departed 8:03 AM"
    },
    {
        "flight": "F93072",
        "time": "2025-07-07T07:30:00",
        "to": "Norfolk (ORF)",
        "airline": "Frontier (Choo the Pika Livery)",
        "aircraft": "A20N (N331FR)",
        "status": "Departed 8:37 AM"
    },
    {
        "flight": "NK2574",
        "time": "2025-07-07T07:30:00",
        "to": "Houston (IAH)",
        "airline": "Spirit Airlines",
        "aircraft": "A20N (N967NK)",
        "status": "Departed 7:48 AM"
    },
    {
        "flight": "DL1100",
        "time": "2025-07-07T07:35:00",
        "to": "Philadelphia (PHL)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N891DN)",
        "status": "Departed 7:50 AM"
    },
    {
        "flight": "DL1178",
        "time": "2025-07-07T07:35:00",
        "to": "Chicago (ORD)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N884DN)",
        "status": "Departed 7:50 AM"
    },
    {
        "flight": "DL1585",
        "time": "2025-07-07T07:35:00",
        "to": "Houston (IAH)",
        "airline": "Delta Air Lines",
        "aircraft": "A320 (N365NW)",
        "status": "Departed 7:49 AM"
    },
    {
        "flight": "DL1592",
        "time": "2025-07-07T07:35:00",
        "to": "Baltimore (BWI)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N823DN)",
        "status": "Departed 7:44 AM"
    },
    {
        "flight": "DL1925",
        "time": "2025-07-07T07:35:00",
        "to": "Raleigh-Durham (RDU)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N816DN)",
        "status": "Departed 8:05 AM"
    },
    {
        "flight": "DL2668",
        "time": "2025-07-07T07:35:00",
        "to": "Minneapolis (MSP)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N874DN)",
        "status": "Departed 7:52 AM"
    },
    {
        "flight": "F91158",
        "time": "2025-07-07T07:35:00",
        "to": "New York (EWR)",
        "airline": "Frontier (Abaco the Kirtland's Warbler Livery)",
        "aircraft": "A21N (N630FR)",
        "status": "Departed 8:24 AM"
    },
    {
        "flight": "KE8256",
        "time": "2025-07-07T07:35:00",
        "to": "Anchorage (ANC)",
        "airline": "Korean Air Cargo",
        "aircraft": "B748 (HL7610)",
        "status": "Departed 7:34 AM"
    },
    {
        "flight": "DL1479",
        "time": "2025-07-07T07:36:00",
        "to": "Columbus (CMH)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N953DZ)",
        "status": "Departed 7:48 AM"
    },
    {
        "flight": "UA487",
        "time": "2025-07-07T07:37:00",
        "to": "San Francisco (SFO)",
        "airline": "United Airlines",
        "aircraft": "B738 (N27246)",
        "status": "Departed 8:05 AM"
    },
    {
        "flight": "DL2420",
        "time": "2025-07-07T07:39:00",
        "to": "New York (JFK)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N722TW)",
        "status": "Departed 7:58 AM"
    },
    {
        "flight": "DL2328",
        "time": "2025-07-07T07:40:00",
        "to": "Jacksonville (JAX)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N705TW)",
        "status": "Departed 7:52 AM"
    },
    {
        "flight": "F91080",
        "time": "2025-07-07T07:40:00",
        "to": "Baltimore (BWI)",
        "airline": "Frontier (Colorado the Bighorn Sheep Livery)",
        "aircraft": "A20N (N323FR)",
        "status": "Departed 8:32 AM"
    },
    {
        "flight": "5X5303",
        "time": "2025-07-07T07:40:00",
        "to": "Louisville (SDF)",
        "airline": "UPS",
        "aircraft": "MD11 (N262UP)",
        "status": "Departed 7:36 AM"
    },
    {
        "flight": "DL3174",
        "time": "2025-07-07T07:44:00",
        "to": "Cincinnati (CVG)",
        "airline": "Delta Air Lines",
        "aircraft": "B738 (N384DA)",
        "status": "Departed 7:55 AM"
    },
    {
        "flight": "DL1571",
        "time": "2025-07-07T07:45:00",
        "to": "St. Louis (STL)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N883DN)",
        "status": "Departed 7:59 AM"
    },
    {
        "flight": "DL1973",
        "time": "2025-07-07T07:45:00",
        "to": "Charlotte (CLT)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N940AT)",
        "status": "Departed 7:53 AM"
    },
    {
        "flight": "F93293",
        "time": "2025-07-07T07:45:00",
        "to": "Denver (DEN)",
        "airline": "Frontier (Miracle the Seagull Livery)",
        "aircraft": "A20N (N350FR)",
        "status": "Departed 7:56 AM"
    },
    {
        "flight": "WN2889",
        "time": "2025-07-07T07:45:00",
        "to": "Dallas (DAL)",
        "airline": "Southwest Airlines",
        "aircraft": "B38M (N8781Q)",
        "status": "Departed 7:53 AM"
    },
    {
        "flight": "DL444",
        "time": "2025-07-07T07:48:00",
        "to": "Seattle (SEA)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N872DN)",
        "status": "Departed 8:24 AM"
    },
    {
        "flight": "AA1567",
        "time": "2025-07-07T07:49:00",
        "to": "Dallas (DFW)",
        "airline": "American Airlines",
        "aircraft": "A321 (N556UW)",
        "status": "Departed 8:18 AM"
    },
    {
        "flight": "WN330",
        "time": "2025-07-07T07:55:00",
        "to": "Baltimore (BWI)",
        "airline": "Southwest Airlines",
        "aircraft": "B738 (N8321D)",
        "status": "Departed 8:10 AM"
    },
    {
        "flight": "WN447",
        "time": "2025-07-07T08:00:00",
        "to": "St. Louis (STL)",
        "airline": "Southwest Airlines",
        "aircraft": "B738 (N8329B)",
        "status": "Departed 8:08 AM"
    },
    {
        "flight": "DL9980",
        "time": "2025-07-07T08:00:00",
        "to": "Atlanta (ATL)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N324DX)",
        "status": "Departed 9:17 AM"
    },
    {
        "flight": "DL441",
        "time": "2025-07-07T08:05:00",
        "to": "Dallas (DAL)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N892AT)",
        "status": "Departed 8:14 AM"
    },
    {
        "flight": "DL1509",
        "time": "2025-07-07T08:05:00",
        "to": "Houston (HOU)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N891AT)",
        "status": "Departed 8:16 AM"
    },
    {
        "flight": "DL2003",
        "time": "2025-07-07T08:05:00",
        "to": "Lexington (LEX)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N935AT)",
        "status": "Departed 8:13 AM"
    },
    {
        "flight": "DL2739",
        "time": "2025-07-07T08:05:00",
        "to": "Greenville-Spartanburg (GSP)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N962DZ)",
        "status": "Departed 8:11 AM"
    },
    {
        "flight": "DL2793",
        "time": "2025-07-07T08:05:00",
        "to": "Gainesville (GNV)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N979AT)",
        "status": "Departed 8:08 AM"
    },
    {
        "flight": "DL3036",
        "time": "2025-07-07T08:05:00",
        "to": "Huntsville (HSV)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N980AT)",
        "status": "Departed 8:15 AM"
    },
    {
        "flight": "DL3051",
        "time": "2025-07-07T08:05:00",
        "to": "Destin Fort Walton Beach (VPS)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N989AT)",
        "status": "Departed 8:28 AM"
    },
    {
        "flight": "DL3077",
        "time": "2025-07-07T08:05:00",
        "to": "Asheville (AVL)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N933AT)",
        "status": "Departed 8:26 AM"
    },
    {
        "flight": "DL3103",
        "time": "2025-07-07T08:05:00",
        "to": "Pensacola (PNS)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N919DU)",
        "status": "Departed 8:13 AM"
    },
    {
        "flight": "DL2336",
        "time": "2025-07-07T08:08:00",
        "to": "Columbia (CAE)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N946AT)",
        "status": "Departed 8:23 AM"
    },
    {
        "flight": "DL539",
        "time": "2025-07-07T08:10:00",
        "to": "Portland (PDX)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N857DZ)",
        "status": "Departed 8:12 AM"
    },
    {
        "flight": "DL830",
        "time": "2025-07-07T08:10:00",
        "to": "Salt Lake City (SLC)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N385DZ)",
        "status": "Departed 8:41 AM"
    },
    {
        "flight": "DL849",
        "time": "2025-07-07T08:10:00",
        "to": "Boston (BOS)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N309DN)",
        "status": "Departed 8:17 AM"
    },
    {
        "flight": "DL1089",
        "time": "2025-07-07T08:10:00",
        "to": "Fort Myers (RSW)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N321DH)",
        "status": "Departed 8:25 AM"
    },
    {
        "flight": "DL2503",
        "time": "2025-07-07T08:10:00",
        "to": "Wilmington (ILM)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N961AT)",
        "status": "Departed 8:14 AM"
    },
    {
        "flight": "DL2976",
        "time": "2025-07-07T08:10:00",
        "to": "Austin (AUS)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N301DV)",
        "status": "Departed 8:36 AM"
    },
    {
        "flight": "DL2999",
        "time": "2025-07-07T08:10:00",
        "to": "Milwaukee (MKE)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N946DZ)",
        "status": "Departed 8:17 AM"
    },
    {
        "flight": "DL3033",
        "time": "2025-07-07T08:10:00",
        "to": "Little Rock (LIT)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N994AT)",
        "status": "Departed 8:27 AM"
    },
    {
        "flight": "DL5309",
        "time": "2025-07-07T08:10:00",
        "to": "Chattanooga (CHA)",
        "airline": "Delta Connection",
        "aircraft": "CRJ7 (N331CA)",
        "status": "Departed 8:31 AM"
    },
    {
        "flight": "F94348",
        "time": "2025-07-07T08:10:00",
        "to": "New York (LGA)",
        "airline": "Frontier (Stretch the Great Blue Heron Livery)",
        "aircraft": "A20N (N334FR)",
        "status": "Departed 9:10 AM"
    },
    {
        "flight": "DL898",
        "time": "2025-07-07T08:11:00",
        "to": "Los Angeles (LAX)",
        "airline": "Delta Air Lines",
        "aircraft": "B753 (N584NW)",
        "status": "Departed 8:22 AM"
    },
    {
        "flight": "DL927",
        "time": "2025-07-07T08:15:00",
        "to": "Las Vegas (LAS)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N706TW)",
        "status": "Departed 8:29 AM"
    },
    {
        "flight": "DL1094",
        "time": "2025-07-07T08:15:00",
        "to": "Fort Lauderdale (FLL)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N548US)",
        "status": "Departed 10:42 AM"
    },
    {
        "flight": "DL1311",
        "time": "2025-07-07T08:15:00",
        "to": "West Palm Beach (PBI)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N339DN)",
        "status": "Departed 8:27 AM"
    },
    {
        "flight": "DL1760",
        "time": "2025-07-07T08:15:00",
        "to": "Punta Cana (PUJ)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N868DN)",
        "status": "Departed 8:18 AM"
    },
    {
        "flight": "DL1847",
        "time": "2025-07-07T08:15:00",
        "to": "Greensboro (GSO)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N990AT)",
        "status": "Departed 8:20 AM"
    },
    {
        "flight": "DL2754",
        "time": "2025-07-07T08:15:00",
        "to": "Tulsa (TUL)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N893AT)",
        "status": "Departed 8:21 AM"
    },
    {
        "flight": "DL2957",
        "time": "2025-07-07T08:15:00",
        "to": "Toronto (YYZ)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N381DZ)",
        "status": "Departed 8:27 AM"
    },
    {
        "flight": "DL3090",
        "time": "2025-07-07T08:15:00",
        "to": "Jackson (JAN)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N954AT)",
        "status": "Departed 8:42 AM"
    },
    {
        "flight": "DL5462",
        "time": "2025-07-07T08:15:00",
        "to": "Mobile (MOB)",
        "airline": "Delta Connection",
        "aircraft": "CRJ7 (N371CA)",
        "status": "Departed 8:20 AM"
    },
    {
        "flight": "AA1777",
        "time": "2025-07-07T08:15:00",
        "to": "Phoenix (PHX)",
        "airline": "American Airlines",
        "aircraft": "A320 (N651AW)",
        "status": "Departed 8:25 AM"
    },
    {
        "flight": "DL2471",
        "time": "2025-07-07T08:19:00",
        "to": "Kansas City (MCI)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N863DN)",
        "status": "Departed 8:29 AM"
    },
    {
        "flight": "DL348",
        "time": "2025-07-07T08:20:00",
        "to": "Phoenix (PHX)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N552NW)",
        "status": "Departed 8:36 AM"
    },
    {
        "flight": "DL693",
        "time": "2025-07-07T08:20:00",
        "to": "San Francisco (SFO)",
        "airline": "Delta Air Lines",
        "aircraft": "B763 (N180DN)",
        "status": "Departed 8:37 AM"
    },
    {
        "flight": "DL725",
        "time": "2025-07-07T08:20:00",
        "to": "San Diego (SAN)",
        "airline": "Delta Air Lines",
        "aircraft": "B753 (N588NW)",
        "status": "Departed 8:33 AM"
    },
    {
        "flight": "DL3048",
        "time": "2025-07-07T08:20:00",
        "to": "Panama City (ECP)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N998AT)",
        "status": "Departed 8:30 AM"
    },
    {
        "flight": "DL5135",
        "time": "2025-07-07T08:20:00",
        "to": "Baton Rouge (BTR)",
        "airline": "Delta Connection",
        "aircraft": "CRJ9 (N306PQ)",
        "status": "Departed 8:49 AM"
    },
    {
        "flight": "DL5143",
        "time": "2025-07-07T08:20:00",
        "to": "Augusta (AGS)",
        "airline": "Delta Connection",
        "aircraft": "CRJ9 (N913XJ)",
        "status": "Departed 8:40 AM"
    },
    {
        "flight": "DL5236",
        "time": "2025-07-07T08:20:00",
        "to": "Tallahassee (TLH)",
        "airline": "Delta Connection",
        "aircraft": "CRJ9 (N924XJ)",
        "status": "Departed 8:36 AM"
    },
    {
        "flight": "DL2332",
        "time": "2025-07-07T08:21:00",
        "to": "Sarasota (SRQ)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N945DZ)",
        "status": "Departed 8:27 AM"
    },
    {
        "flight": "DL1935",
        "time": "2025-07-07T08:23:00",
        "to": "San Antonio (SAT)",
        "airline": "Delta Air Lines",
        "aircraft": "A320 (N340NW)",
        "status": "Departed 8:34 AM"
    },
    {
        "flight": "DL1213",
        "time": "2025-07-07T08:25:00",
        "to": "Orlando (MCO)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N6714Q)",
        "status": "Departed 8:41 AM"
    },
    {
        "flight": "DL1757",
        "time": "2025-07-07T08:25:00",
        "to": "San Juan (SJU)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N912DU)",
        "status": "Departed 8:56 AM"
    },
    {
        "flight": "DL577",
        "time": "2025-07-07T08:25:00",
        "to": "Mexico City (MEX)",
        "airline": "Delta Air Lines",
        "aircraft": "B738 (N380DA)",
        "status": "Departed 8:45 AM"
    },
    {
        "flight": "DL1964",
        "time": "2025-07-07T08:26:00",
        "to": "Cancun (CUN)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N803DN)",
        "status": "Departed 8:45 AM"
    },
    {
        "flight": "DL2632",
        "time": "2025-07-07T08:26:00",
        "to": "Omaha (OMA)",
        "airline": "Delta Air Lines",
        "aircraft": "A319 (N358NB)",
        "status": "Departed 8:33 AM"
    },
    {
        "flight": "DL3213",
        "time": "2025-07-07T08:26:00",
        "to": "Savannah (SAV)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N939DZ)",
        "status": "Departed 8:31 AM"
    },
    {
        "flight": "NK2351",
        "time": "2025-07-07T08:27:00",
        "to": "Los Angeles (LAX)",
        "airline": "Spirit Airlines",
        "aircraft": "A21N (N746NK)",
        "status": "Departed 8:59 AM"
    },
    {
        "flight": "DL1575",
        "time": "2025-07-07T08:28:00",
        "to": "Bentonville (XNA)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N991AT)",
        "status": "Departed 9:07 AM"
    },
    {
        "flight": "NK2404",
        "time": "2025-07-07T08:29:00",
        "to": "San Juan (SJU)",
        "airline": "Spirit Airlines",
        "aircraft": "A21N (N726NK)",
        "status": "Departed 8:59 AM"
    },
    {
        "flight": "DL513",
        "time": "2025-07-07T08:30:00",
        "to": "New York (LGA)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N348DN)",
        "status": "Departed 9:05 AM"
    },
    {
        "flight": "DL3069",
        "time": "2025-07-07T08:30:00",
        "to": "Nashville (BNA)",
        "airline": "Delta Air Lines",
        "aircraft": "B738 (N3749D)",
        "status": "Departed 8:40 AM"
    },
    {
        "flight": "DL3091",
        "time": "2025-07-07T08:30:00",
        "to": "Charleston (CHS)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N963DZ)",
        "status": "Departed 8:38 AM"
    },
    {
        "flight": "DL5496",
        "time": "2025-07-07T08:30:00",
        "to": "Blountville (TRI)",
        "airline": "Delta Connection",
        "aircraft": "CRJ9 (N907XJ)",
        "status": "Departed 8:43 AM"
    },
    {
        "flight": "UA248",
        "time": "2025-07-07T08:30:00",
        "to": "Chicago (ORD)",
        "airline": "United Airlines",
        "aircraft": "A319 (N873UA)",
        "status": "Departed 8:46 AM"
    },
    {
        "flight": "WS1593",
        "time": "2025-07-07T08:30:00",
        "to": "Calgary (YYC)",
        "airline": "WestJet",
        "aircraft": "B38M (C-FNAX)",
        "status": "Departed 9:01 AM"
    },
    {
        "flight": "NK2707",
        "time": "2025-07-07T08:30:00",
        "to": "Chicago (ORD)",
        "airline": "Spirit Airlines",
        "aircraft": "A21N (N710NK)",
        "status": "Departed 8:52 AM"
    },
    {
        "flight": "WN3624",
        "time": "2025-07-07T08:30:00",
        "to": "Austin (AUS)",
        "airline": "Southwest Airlines",
        "aircraft": "B737 (N240WN)",
        "status": "Departed 9:04 AM"
    },
    {
        "flight": "DL2951",
        "time": "2025-07-07T08:31:00",
        "to": "Windsor Locks (BDL)",
        "airline": "Delta Air Lines",
        "aircraft": "A320 (N350NA)",
        "status": "Departed 8:44 AM"
    },
    {
        "flight": "DL3100",
        "time": "2025-07-07T08:31:00",
        "to": "Birmingham (BHM)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N955DZ)",
        "status": "Departed 9:11 AM"
    },
    {
        "flight": "DL3186",
        "time": "2025-07-07T08:31:00",
        "to": "Memphis (MEM)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N961DZ)",
        "status": "Departed 8:44 AM"
    },
    {
        "flight": "DL1227",
        "time": "2025-07-07T08:33:00",
        "to": "Tampa (TPA)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N823DX)",
        "status": "Departed 8:43 AM"
    },
    {
        "flight": "DL1374",
        "time": "2025-07-07T08:33:00",
        "to": "Louisville (SDF)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N966AT)",
        "status": "Departed 8:39 AM"
    },
    {
        "flight": "DL1699",
        "time": "2025-07-07T08:35:00",
        "to": "Raleigh-Durham (RDU)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N364DX)",
        "status": "Departed 8:45 AM"
    },
    {
        "flight": "DL1888",
        "time": "2025-07-07T08:35:00",
        "to": "Indianapolis (IND)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N873DN)",
        "status": "Departed 8:48 AM"
    },
    {
        "flight": "DL2397",
        "time": "2025-07-07T08:35:00",
        "to": "New York (EWR)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N313DN)",
        "status": "Departed 8:48 AM"
    },
    {
        "flight": "DL2960",
        "time": "2025-07-07T08:35:00",
        "to": "Minneapolis (MSP)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N686DA)",
        "status": "Departed 8:54 AM"
    },
    {
        "flight": "F92410",
        "time": "2025-07-07T08:37:00",
        "to": "Cleveland (CLE)",
        "airline": "Frontier Airlines",
        "aircraft": "A21N (N667FR)",
        "status": "Departed 9:00 AM"
    },
    {
        "flight": "WS1599",
        "time": "2025-07-07T08:40:00",
        "to": "Vancouver (YVR)",
        "airline": "WestJet",
        "aircraft": "B38M (C-GAMQ)",
        "status": "Departed 9:04 AM"
    },
    {
        "flight": "DL1063",
        "time": "2025-07-07T08:41:00",
        "to": "Chicago (MDW)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N960AT)",
        "status": "Departed 9:09 AM"
    },
    {
        "flight": "DL2326",
        "time": "2025-07-07T08:41:00",
        "to": "Jacksonville (JAX)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N556NW)",
        "status": "Departed 8:50 AM"
    },
    {
        "flight": "DL1814",
        "time": "2025-07-07T08:42:00",
        "to": "Gulfport (GPT)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N985AT)",
        "status": "Departed 8:47 AM"
    },
    {
        "flight": "DL5520",
        "time": "2025-07-07T08:47:00",
        "to": "Fayetteville (FAY)",
        "airline": "Delta Connection",
        "aircraft": "CRJ9 (N228PQ)",
        "status": "Departed 9:48 AM"
    },
    {
        "flight": "DL5304",
        "time": "2025-07-07T08:47:00",
        "to": "Montgomery (MGM)",
        "airline": "Delta Connection",
        "aircraft": "CRJ7 (N354CA)",
        "status": "Departed 10:23 AM"
    },
    {
        "flight": "F94556",
        "time": "2025-07-07T08:48:00",
        "to": "Orlando (MCO)",
        "airline": "Frontier (Verde the Resplendent Quetzal Livery)",
        "aircraft": "A20N (N380FR)",
        "status": "Departed 5:43 PM"
    },
    {
        "flight": "DL5136",
        "time": "2025-07-07T08:50:00",
        "to": "Knoxville (TYS)",
        "airline": "Delta Connection",
        "aircraft": "CRJ9 (N134EV)",
        "status": "Departed 8:56 AM"
    },
    {
        "flight": "AA5063",
        "time": "2025-07-07T08:54:00",
        "to": "Charlotte (CLT)",
        "airline": "American Eagle",
        "aircraft": "CRJ9 (N607NN)",
        "status": "Departed 9:25 AM"
    },
    {
        "flight": "DL961",
        "time": "2025-07-07T08:55:00",
        "to": "Dallas (DFW)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N363DN)",
        "status": "Departed 9:14 AM"
    },
    {
        "flight": "DL1004",
        "time": "2025-07-07T08:55:00",
        "to": "Albuquerque (ABQ)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N927DZ)",
        "status": "Departed 9:08 AM"
    },
    {
        "flight": "DL1034",
        "time": "2025-07-07T08:55:00",
        "to": "New York (JFK)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N673DL)",
        "status": "Departed 9:15 AM"
    },
    {
        "flight": "DL1375",
        "time": "2025-07-07T08:55:00",
        "to": "Syracuse (SYR)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N331DN)",
        "status": "Departed 9:07 AM"
    },
    {
        "flight": "DL3047",
        "time": "2025-07-07T08:55:00",
        "to": "Myrtle Beach (MYR)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N943AT)",
        "status": "Departed 9:03 AM"
    },
    {
        "flight": "DL3108",
        "time": "2025-07-07T08:55:00",
        "to": "Dayton (DAY)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N942AT)",
        "status": "Departed 8:58 AM"
    },
    {
        "flight": "DL3118",
        "time": "2025-07-07T08:55:00",
        "to": "Melbourne (MLB)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N951AT)",
        "status": "Departed 9:01 AM"
    },
    {
        "flight": "AC1196",
        "time": "2025-07-07T08:55:00",
        "to": "Montreal (YUL)",
        "airline": "Air Canada",
        "aircraft": "BCS3 (C-GUPL)",
        "status": "Departed 9:05 AM"
    },
    {
        "flight": "WN2211",
        "time": "2025-07-07T08:55:00",
        "to": "Chicago (MDW)",
        "airline": "Southwest Airlines",
        "aircraft": "B38M (N8810L)",
        "status": "Departed 9:22 AM"
    },
    {
        "flight": "NK2468",
        "time": "2025-07-07T08:56:00",
        "to": "Tampa (TPA)",
        "airline": "Spirit Airlines",
        "aircraft": "A321 (N679NK)",
        "status": "Departed 9:02 AM"
    },
    {
        "flight": "DL3035",
        "time": "2025-07-07T08:57:00",
        "to": "Daytona Beach (DAB)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N942DZ)",
        "status": "Departed 9:07 AM"
    },
    {
        "flight": "AA5306",
        "time": "2025-07-07T08:59:00",
        "to": "Washington (DCA)",
        "airline": "American Eagle",
        "aircraft": "CRJ7 (N703PS)",
        "status": "Departed 9:23 AM"
    },
    {
        "flight": "DL1637",
        "time": "2025-07-07T08:59:00",
        "to": "Wichita (ICT)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N982AT)",
        "status": "Departed 9:16 AM"
    },
    {
        "flight": "AA2526",
        "time": "2025-07-07T09:00:00",
        "to": "Miami (MIA)",
        "airline": "American Airlines",
        "aircraft": "A319 (N93003)",
        "status": "Departed 9:11 AM"
    },
    {
        "flight": "DL1281",
        "time": "2025-07-07T09:00:00",
        "to": "Key West (EYW)",
        "airline": "Delta Air Lines",
        "aircraft": "A319 (N326NB)",
        "status": "Departed 9:16 AM"
    },
    {
        "flight": "DL1363",
        "time": "2025-07-07T09:00:00",
        "to": "Pittsburgh (PIT)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N938DZ)",
        "status": "Departed 9:12 AM"
    },
    {
        "flight": "DL1424",
        "time": "2025-07-07T09:00:00",
        "to": "New Orleans (MSY)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N557NW)",
        "status": "Departed 11:08 AM"
    },
    {
        "flight": "DL1510",
        "time": "2025-07-07T09:00:00",
        "to": "Miami (MIA)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N900PC)",
        "status": "Departed 9:38 AM"
    },
    {
        "flight": "DL2597",
        "time": "2025-07-07T09:00:00",
        "to": "Montreal (YUL)",
        "airline": "Delta Air Lines",
        "aircraft": "A319 (N315NB)",
        "status": "Departed 9:15 AM"
    },
    {
        "flight": "DL2681",
        "time": "2025-07-07T09:00:00",
        "to": "Madison (MSN)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N921AT)",
        "status": "Departed 9:23 AM"
    },
    {
        "flight": "EJA537",
        "time": "2025-07-07T09:00:00",
        "to": "Charleston (JZI)",
        "airline": "NetJets",
        "aircraft": "C68A (N537QS)",
        "status": "Departed 9:13 AM"
    },
    {
        "flight": "DL5130",
        "time": "2025-07-07T09:01:00",
        "to": "Charleston (CRW)",
        "airline": "Delta Connection",
        "aircraft": "CRJ9 (N331PQ)",
        "status": "Departed 9:10 AM"
    },
    {
        "flight": "F93210",
        "time": "2025-07-07T09:01:00",
        "to": "Philadelphia (PHL)",
        "airline": "Frontier (D&A the Hispaniolan Parakeets Livery)",
        "aircraft": "A21N (N635FR)",
        "status": "Departed 9:20 AM"
    },
    {
        "flight": "F91441",
        "time": "2025-07-07T09:02:00",
        "to": "Chicago (ORD)",
        "airline": "Frontier (Scarlet the Tanager Livery)",
        "aircraft": "A20N (N354FR)",
        "status": "Departed 9:44 AM"
    },
    {
        "flight": "DL4048",
        "time": "2025-07-07T09:04:00",
        "to": "Fort Wayne (FWA)",
        "airline": "Delta Connection",
        "aircraft": "CRJ9 (N809SK)",
        "status": "Departed 9:27 AM"
    },
    {
        "flight": "DL904",
        "time": "2025-07-07T09:05:00",
        "to": "Sacramento (SMF)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N829DN)",
        "status": "Departed 9:19 AM"
    },
    {
        "flight": "DL1147",
        "time": "2025-07-07T09:05:00",
        "to": "Chicago (ORD)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N311DN)",
        "status": "Departed 9:18 AM"
    },
    {
        "flight": "DL1384",
        "time": "2025-07-07T09:05:00",
        "to": "Buffalo (BUF)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N885DN)",
        "status": "Departed 9:21 AM"
    },
    {
        "flight": "DL1703",
        "time": "2025-07-07T09:05:00",
        "to": "St. Louis (STL)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N809DN)",
        "status": "Departed 9:20 AM"
    },
    {
        "flight": "DL2270",
        "time": "2025-07-07T09:05:00",
        "to": "Philadelphia (PHL)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N825DN)",
        "status": "Departed 9:18 AM"
    },
    {
        "flight": "DL2368",
        "time": "2025-07-07T09:05:00",
        "to": "Asheville (AVL)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N603AT)",
        "status": "Departed 9:51 AM"
    },
    {
        "flight": "LXJ571",
        "time": "2025-07-07T09:06:00",
        "to": "St. Petersburg (PIE)",
        "airline": "Flexjet",
        "aircraft": "CL35 (N571FX)",
        "status": "Departed 9:54 AM"
    },
    {
        "flight": "DL801",
        "time": "2025-07-07T09:10:00",
        "to": "Baltimore (BWI)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N698DL)",
        "status": "Departed 9:21 AM"
    },
    {
        "flight": "DL1808",
        "time": "2025-07-07T09:10:00",
        "to": "Providence (PVD)",
        "airline": "Delta Air Lines",
        "aircraft": "A320 (N373NW)",
        "status": "Departed 9:17 AM"
    },
    {
        "flight": "DL2127",
        "time": "2025-07-07T09:11:00",
        "to": "Chattanooga (CHA)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N986AT)",
        "status": "Departed 9:25 AM"
    },
    {
        "flight": "F92984",
        "time": "2025-07-07T09:11:00",
        "to": "Philadelphia (TTN)",
        "airline": "Frontier (Baja the Whale Shark Livery)",
        "aircraft": "A20N (N342FR)",
        "status": "Departed 10:58 AM"
    },
    {
        "flight": "F93499",
        "time": "2025-07-07T09:11:00",
        "to": "Kansas City (MCI)",
        "airline": "Frontier (Lewis the Greater Sage-Grouse Livery)",
        "aircraft": "A20N (N378FR)",
        "status": "Departed 9:20 AM"
    },
    {
        "flight": "DL5129",
        "time": "2025-07-07T09:12:00",
        "to": "Roanoke (ROA)",
        "airline": "Delta Connection",
        "aircraft": "CRJ7 (N368CA)",
        "status": "Departed 9:22 AM"
    },
    {
        "flight": "DL314",
        "time": "2025-07-07T09:13:00",
        "to": "Portland (PWM)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N308DN)",
        "status": "Departed 9:38 AM"
    },
    {
        "flight": "DL3618",
        "time": "2025-07-07T09:13:00",
        "to": "South Bend (SBN)",
        "airline": "Delta Connection",
        "aircraft": "CRJ9 (N833SK)",
        "status": "Departed 9:30 AM"
    },
    {
        "flight": "DL1248",
        "time": "2025-07-07T09:14:00",
        "to": "Harrisburg (MDT)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N953AT)",
        "status": "Departed 9:28 AM"
    },
    {
        "flight": "DL1590",
        "time": "2025-07-07T09:14:00",
        "to": "Columbia (CAE)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N974AT)",
        "status": "Departed 9:30 AM"
    },
    {
        "flight": "DL1708",
        "time": "2025-07-07T09:14:00",
        "to": "Huntsville (HSV)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N896AT)",
        "status": "Departed 9:26 AM"
    },
    {
        "flight": "DL665",
        "time": "2025-07-07T09:15:00",
        "to": "Ontario (ONT)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N111DC)",
        "status": "Departed 9:28 AM"
    },
    {
        "flight": "DL809",
        "time": "2025-07-07T09:15:00",
        "to": "San Jose (SJC)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N814DN)",
        "status": "Departed 10:35 AM"
    },
    {
        "flight": "DL5372",
        "time": "2025-07-07T09:15:00",
        "to": "Evansville (EVV)",
        "airline": "Delta Connection",
        "aircraft": "CRJ7 (N668CA)",
        "status": "Departed 9:31 AM"
    },
    {
        "flight": "DL5418",
        "time": "2025-07-07T09:15:00",
        "to": "Charlottesville (CHO)",
        "airline": "Delta Connection",
        "aircraft": "CRJ9 (N923XJ)",
        "status": "Departed 10:00 AM"
    },
    {
        "flight": "F94406",
        "time": "2025-07-07T09:15:00",
        "to": "Miami (MIA)",
        "airline": "Frontier (Elrey the Elk Livery)",
        "aircraft": "A20N (N370FR)",
        "status": "Departed 9:42 AM"
    },
    {
        "flight": "DL380",
        "time": "2025-07-07T09:16:00",
        "to": "Washington (DCA)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N117DX)",
        "status": "Departed 10:12 AM"
    },
    {
        "flight": "DL2490",
        "time": "2025-07-07T09:16:00",
        "to": "Oklahoma City (OKC)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N936AT)",
        "status": "Departed 9:24 AM"
    },
    {
        "flight": "DL1298",
        "time": "2025-07-07T09:17:00",
        "to": "Detroit (DTW)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N551NW)",
        "status": "Departed 9:32 AM"
    },
    {
        "flight": "F92898",
        "time": "2025-07-07T09:19:00",
        "to": "Detroit (DTW)",
        "airline": "Frontier (Lone Star the Longhorn Steer Livery)",
        "aircraft": "A20N (N347FR)",
        "status": "Departed 10:26 AM"
    },
    {
        "flight": "DL827",
        "time": "2025-07-07T09:20:00",
        "to": "Los Angeles (LAX)",
        "airline": "Delta Air Lines",
        "aircraft": "B764 (N833MH)",
        "status": "Departed 11:10 AM"
    },
    {
        "flight": "DL1271",
        "time": "2025-07-07T09:20:00",
        "to": "Fort Lauderdale (FLL)",
        "airline": "Delta Air Lines",
        "aircraft": "B753 (N589NW)",
        "status": "Departed 9:37 AM"
    },
    {
        "flight": "DL5148",
        "time": "2025-07-07T09:20:00",
        "to": "Shreveport (SHV)",
        "airline": "Delta Connection",
        "aircraft": "CRJ9 (N300PQ)",
        "status": "Departed 9:33 AM"
    },
    {
        "flight": "UA632",
        "time": "2025-07-07T09:20:00",
        "to": "Washington (IAD)",
        "airline": "United Airlines",
        "aircraft": "B38M (N17306)",
        "status": "Departed 9:26 AM"
    },
    {
        "flight": "DL1892",
        "time": "2025-07-07T09:22:00",
        "to": "Albany (ALB)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N334DN)",
        "status": "Departed 10:03 AM"
    },
    {
        "flight": "EJA422",
        "time": "2025-07-07T09:24:00",
        "to": "Lake Charles (LCH)",
        "airline": "NetJets",
        "aircraft": "E55P (N422QS)",
        "status": "Departed 9:35 AM"
    },
    {
        "flight": "DL1658",
        "time": "2025-07-07T09:25:00",
        "to": "Orlando (MCO)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N694DL)",
        "status": "Departed 9:40 AM"
    },
    {
        "flight": "WN380",
        "time": "2025-07-07T09:25:00",
        "to": "Houston (HOU)",
        "airline": "Southwest Airlines",
        "aircraft": "B38M (N8752Q)",
        "status": "Departed 9:41 AM"
    },
    {
        "flight": "5Y8986",
        "time": "2025-07-07T09:25:00",
        "to": "Toronto (YYZ)",
        "airline": "YunExpress",
        "aircraft": "B77L (N704GT)",
        "status": "Departed 10:07 AM"
    },
    {
        "flight": "DL1704",
        "time": "2025-07-07T09:26:00",
        "to": "Des Moines (DSM)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N608AT)",
        "status": "Departed 9:34 AM"
    },
    {
        "flight": "DL329",
        "time": "2025-07-07T09:27:00",
        "to": "Santa Ana (SNA)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N711ZX)",
        "status": "Departed 9:36 AM"
    },
    {
        "flight": "AS533",
        "time": "2025-07-07T09:30:00",
        "to": "Seattle (SEA)",
        "airline": "Alaska Airlines",
        "aircraft": "B39M (N977AK)",
        "status": "Departed 10:04 AM"
    },
    {
        "flight": "DL557",
        "time": "2025-07-07T09:30:00",
        "to": "New York (LGA)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N374DX)",
        "status": "Departed 9:41 AM"
    },
    {
        "flight": "DL2511",
        "time": "2025-07-07T09:31:00",
        "to": "Rochester (ROC)",
        "airline": "Delta Air Lines",
        "aircraft": "A320 (N319US)",
        "status": "Departed 9:40 AM"
    },
    {
        "flight": "DL2097",
        "time": "2025-07-07T09:31:00",
        "to": "Rochester (ROC)",
        "airline": "Delta Air Lines",
        "aircraft": "320",
        "status": "Unknown"
    },
    {
        "flight": "DL855",
        "time": "2025-07-07T09:34:00",
        "to": "Boston (BOS)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N315DN)",
        "status": "Departed 10:10 AM"
    },
    {
        "flight": "WN437",
        "time": "2025-07-07T09:35:00",
        "to": "Phoenix (PHX)",
        "airline": "Southwest Airlines",
        "aircraft": "B737 (N269WN)",
        "status": "Departed 9:46 AM"
    },
    {
        "flight": "F93118",
        "time": "2025-07-07T09:37:00",
        "to": "Syracuse (SYR)",
        "airline": "Frontier(Savannah the Yellow-Headed Amazon Livery)",
        "aircraft": "A21N (N636FR)",
        "status": "Departed 10:16 AM"
    },
    {
        "flight": "AA5154",
        "time": "2025-07-07T09:39:00",
        "to": "Philadelphia (PHL)",
        "airline": "American Eagle",
        "aircraft": "CRJ9 (N589NN)",
        "status": "Canceled"
    },
    {
        "flight": "DL672",
        "time": "2025-07-07T09:40:00",
        "to": "San Francisco (SFO)",
        "airline": "Delta Air Lines",
        "aircraft": "B763 (N171DN)",
        "status": "Departed 10:31 AM"
    },
    {
        "flight": "DL774",
        "time": "2025-07-07T09:40:00",
        "to": "Seattle (SEA)",
        "airline": "Delta Air Lines",
        "aircraft": "B753 (N590NW)",
        "status": "Departed 9:52 AM"
    },
    {
        "flight": "DL787",
        "time": "2025-07-07T09:40:00",
        "to": "Spokane (GEG)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N877DN)",
        "status": "Departed 9:49 AM"
    },
    {
        "flight": "DL1146",
        "time": "2025-07-07T09:40:00",
        "to": "White Plains (HPN)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N963AT)",
        "status": "Departed 10:10 AM"
    },
    {
        "flight": "DL1682",
        "time": "2025-07-07T09:40:00",
        "to": "Houston (IAH)",
        "airline": "Delta Air Lines",
        "aircraft": "A320 (N355NW)",
        "status": "Departed 10:13 AM"
    },
    {
        "flight": "DL1985",
        "time": "2025-07-07T09:40:00",
        "to": "Bridgetown (BGI)",
        "airline": "Delta Air Lines",
        "aircraft": "B738 (N3743H)",
        "status": "Departed 9:45 AM"
    },
    {
        "flight": "DL2158",
        "time": "2025-07-07T09:40:00",
        "to": "Greenville-Spartanburg (GSP)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N944AT)",
        "status": "Departed 10:22 AM"
    },
    {
        "flight": "DL2978",
        "time": "2025-07-07T09:40:00",
        "to": "Cleveland (CLE)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N947DZ)",
        "status": "Departed 9:55 AM"
    },
    {
        "flight": "DL4840",
        "time": "2025-07-07T09:40:00",
        "to": "Jackson (JAN)",
        "airline": "Delta Connection",
        "aircraft": "CRJ9 (N901XJ)",
        "status": "Departed 9:56 AM"
    },
    {
        "flight": "UA2355",
        "time": "2025-07-07T09:40:00",
        "to": "Houston (IAH)",
        "airline": "United Airlines",
        "aircraft": "A319 (N836UA)",
        "status": "Canceled"
    },
    {
        "flight": "DL2886",
        "time": "2025-07-07T09:41:00",
        "to": "Austin (AUS)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N358DN)",
        "status": "Departed 9:58 AM"
    },
    {
        "flight": "DL5365",
        "time": "2025-07-07T09:41:00",
        "to": "Jacksonville (OAJ)",
        "airline": "Delta Connection",
        "aircraft": "CRJ9 (N607LR)",
        "status": "Departed 10:22 AM"
    },
    {
        "flight": "DL2250",
        "time": "2025-07-07T09:43:00",
        "to": "Birmingham (BHM)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N960DZ)",
        "status": "Departed 9:54 AM"
    },
    {
        "flight": "NK2466",
        "time": "2025-07-07T09:44:00",
        "to": "Miami (MIA)",
        "airline": "Spirit Airlines",
        "aircraft": "A320 (N697NK)",
        "status": "Departed 10:43 AM"
    },
    {
        "flight": "DL189",
        "time": "2025-07-07T09:45:00",
        "to": "Seoul (ICN)",
        "airline": "Delta Air Lines",
        "aircraft": "A359 (N523DN)",
        "status": "Departed 10:19 AM"
    },
    {
        "flight": "DL777",
        "time": "2025-07-07T09:45:00",
        "to": "Las Vegas (LAS)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N6709)",
        "status": "Departed 10:10 AM"
    },
    {
        "flight": "DL1823",
        "time": "2025-07-07T09:45:00",
        "to": "Cincinnati (CVG)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N943DZ)",
        "status": "Departed 10:11 AM"
    },
    {
        "flight": "DL1944",
        "time": "2025-07-07T09:45:00",
        "to": "Nassau (NAS)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N911DQ)",
        "status": "Departed 10:00 AM"
    },
    {
        "flight": "DL1992",
        "time": "2025-07-07T09:45:00",
        "to": "Guadalajara (GDL)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N881DN)",
        "status": "Departed 9:50 AM"
    },
    {
        "flight": "DL2071",
        "time": "2025-07-07T09:45:00",
        "to": "Memphis (MEM)",
        "airline": "Delta Air Lines",
        "aircraft": "A319 (N354NB)",
        "status": "Departed 9:59 AM"
    },
    {
        "flight": "DL3197",
        "time": "2025-07-07T09:45:00",
        "to": "Nashville (BNA)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N950DZ)",
        "status": "Departed 10:05 AM"
    },
    {
        "flight": "AA3615",
        "time": "2025-07-07T09:45:00",
        "to": "Dallas (DFW)",
        "airline": "American Eagle",
        "aircraft": "E75L (N267NN)",
        "status": "Departed 10:28 AM"
    },
    {
        "flight": "DL3220",
        "time": "2025-07-07T09:46:00",
        "to": "Savannah (SAV)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N859DN)",
        "status": "Departed 9:53 AM"
    },
    {
        "flight": "B61520",
        "time": "2025-07-07T09:47:00",
        "to": "New York (JFK)",
        "airline": "JetBlue",
        "aircraft": "A320 (N568JB)",
        "status": "Departed 10:24 AM"
    },
    {
        "flight": "DL586",
        "time": "2025-07-07T09:50:00",
        "to": "Cancun (CUN)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N658DL)",
        "status": "Departed 9:57 AM"
    },
    {
        "flight": "DL600",
        "time": "2025-07-07T09:50:00",
        "to": "George Town (GCM)",
        "airline": "Delta Air Lines",
        "aircraft": "B738 (N397DA)",
        "status": "Departed 10:09 AM"
    },
    {
        "flight": "DL1064",
        "time": "2025-07-07T09:50:00",
        "to": "Vieux Fort (UVF)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N684DA)",
        "status": "Departed 9:55 AM"
    },
    {
        "flight": "DL4160",
        "time": "2025-07-07T09:50:00",
        "to": "Springfield (SGF)",
        "airline": "Delta Connection",
        "aircraft": "CRJ9 (N816SK)",
        "status": "Departed 10:02 AM"
    },
    {
        "flight": "DL3073",
        "time": "2025-07-07T09:50:00",
        "to": "Charlotte (CLT)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N992AT)",
        "status": "Departed 9:57 AM"
    },
    {
        "flight": "DL1527",
        "time": "2025-07-07T09:51:00",
        "to": "West Palm Beach (PBI)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N357DN)",
        "status": "Departed 10:15 AM"
    },
    {
        "flight": "DL1882",
        "time": "2025-07-07T09:51:00",
        "to": "San Juan (SJU)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N345DN)",
        "status": "Departed 9:59 AM"
    },
    {
        "flight": "DL1912",
        "time": "2025-07-07T09:51:00",
        "to": "San Antonio (SAT)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N120DN)",
        "status": "Departed 10:06 AM"
    },
    {
        "flight": "DL1929",
        "time": "2025-07-07T09:51:00",
        "to": "Monterrey (MTY)",
        "airline": "Delta Air Lines",
        "aircraft": "A319 (N338NB)",
        "status": "Departed 10:17 AM"
    },
    {
        "flight": "DL4011",
        "time": "2025-07-07T09:51:00",
        "to": "Aspen (ASE)",
        "airline": "American Eagle",
        "aircraft": "CRJ7 (N738SK)",
        "status": "Departed 10:12 AM"
    },
    {
        "flight": "NK2345",
        "time": "2025-07-07T09:53:00",
        "to": "Fort Lauderdale (FLL)",
        "airline": "Spirit Airlines",
        "aircraft": "A21N (N741NK)",
        "status": "Departed 10:28 AM"
    },
    {
        "flight": "DL995",
        "time": "2025-07-07T09:55:00",
        "to": "Denver (DEN)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N351DN)",
        "status": "Departed 10:18 AM"
    },
    {
        "flight": "DL1522",
        "time": "2025-07-07T09:55:00",
        "to": "Columbus (CMH)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N941DZ)",
        "status": "Departed 10:29 AM"
    },
    {
        "flight": "DL1782",
        "time": "2025-07-07T09:55:00",
        "to": "San Pedro Sula (SAP)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N898DN)",
        "status": "Departed 10:06 AM"
    },
    {
        "flight": "DL1796",
        "time": "2025-07-07T09:55:00",
        "to": "Punta Cana (PUJ)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N330DX)",
        "status": "Departed 10:04 AM"
    },
    {
        "flight": "DL1869",
        "time": "2025-07-07T09:55:00",
        "to": "Providenciales (PLS)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N128DN)",
        "status": "Departed 10:03 AM"
    },
    {
        "flight": "DL1997",
        "time": "2025-07-07T09:55:00",
        "to": "Montego Bay (MBJ)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N317DN)",
        "status": "Departed 10:16 AM"
    },
    {
        "flight": "DL2908",
        "time": "2025-07-07T09:55:00",
        "to": "Kansas City (MCI)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N956DZ)",
        "status": "Departed 10:13 AM"
    },
    {
        "flight": "DL2147",
        "time": "2025-07-07T09:55:00",
        "to": "Grand Rapids (GRR)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N934DZ)",
        "status": "Departed 10:02 AM"
    },
    {
        "flight": "DL982",
        "time": "2025-07-07T09:56:00",
        "to": "Bogota (BOG)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N547US)",
        "status": "Departed 10:25 AM"
    },
    {
        "flight": "DL3224",
        "time": "2025-07-07T09:59:00",
        "to": "Willemstad (CUR)",
        "airline": "Delta Air Lines",
        "aircraft": "B738 (N393DA)",
        "status": "Departed 10:28 AM"
    },
    {
        "flight": "DL837",
        "time": "2025-07-07T10:00:00",
        "to": "Honolulu (HNL)",
        "airline": "Delta Air Lines",
        "aircraft": "A333 (N811NW)",
        "status": "Departed 10:21 AM"
    },
    {
        "flight": "DL1759",
        "time": "2025-07-07T10:00:00",
        "to": "Panama City (PTY)",
        "airline": "Delta Air Lines",
        "aircraft": "B738 (N3762Y)",
        "status": "Departed 10:11 AM"
    },
    {
        "flight": "DL1958",
        "time": "2025-07-07T10:00:00",
        "to": "Santo Domingo (SDQ)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N370DN)",
        "status": "Departed 10:23 AM"
    },
    {
        "flight": "DL2206",
        "time": "2025-07-07T10:00:00",
        "to": "Greensboro (GSO)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N997AT)",
        "status": "Departed 10:35 AM"
    },
    {
        "flight": "DL2755",
        "time": "2025-07-07T10:00:00",
        "to": "Norfolk (ORF)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N952DZ)",
        "status": "Departed 10:16 AM"
    },
    {
        "flight": "DL2883",
        "time": "2025-07-07T10:00:00",
        "to": "Toronto (YYZ)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N849DN)",
        "status": "Departed 10:27 AM"
    },
    {
        "flight": "DL3239",
        "time": "2025-07-07T10:00:00",
        "to": "San Jose (SJO)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N667DN)",
        "status": "Departed 10:14 AM"
    },
    {
        "flight": "DL1830",
        "time": "2025-07-07T10:01:00",
        "to": "Guatemala City (GUA)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N67171)",
        "status": "Departed 10:48 AM"
    },
    {
        "flight": "DL582",
        "time": "2025-07-07T10:02:00",
        "to": "Oranjestad (AUA)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N354DN)",
        "status": "Departed 10:12 AM"
    },
    {
        "flight": "DL1775",
        "time": "2025-07-07T10:04:00",
        "to": "Liberia (LIR)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N892DN)",
        "status": "Departed 1:35 PM"
    },
    {
        "flight": "DL483",
        "time": "2025-07-07T10:05:00",
        "to": "Burbank (BUR)",
        "airline": "Delta Air Lines",
        "aircraft": "BCS3 (N301DU)",
        "status": "Departed 10:32 AM"
    },
    {
        "flight": "DL874",
        "time": "2025-07-07T10:05:00",
        "to": "Boise (BOI)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N390DN)",
        "status": "Departed 10:15 AM"
    },
    {
        "flight": "DL1115",
        "time": "2025-07-07T10:05:00",
        "to": "Dallas (DAL)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N955AT)",
        "status": "Departed 10:25 AM"
    },
    {
        "flight": "DL1894",
        "time": "2025-07-07T10:05:00",
        "to": "Sint Maarten (SXM)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N6700)",
        "status": "Departed 10:17 AM"
    },
    {
        "flight": "DL2775",
        "time": "2025-07-07T10:05:00",
        "to": "Minneapolis (MSP)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N833DN)",
        "status": "Departed 10:15 AM"
    },
    {
        "flight": "F92540",
        "time": "2025-07-07T10:05:00",
        "to": "Columbus (CMH)",
        "airline": "Frontier (Hugh the Manatee Livery)",
        "aircraft": "A320 (N238FR)",
        "status": "Canceled"
    },
    {
        "flight": "DL2218",
        "time": "2025-07-07T10:05:00",
        "to": "Tallahassee (TLH)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N922AT)",
        "status": "Departed 10:30 AM"
    },
    {
        "flight": "DL1751",
        "time": "2025-07-07T10:06:00",
        "to": "Washington (IAD)",
        "airline": "Delta Air Lines",
        "aircraft": "A319 (N362NB)",
        "status": "Departed 10:37 AM"
    },
    {
        "flight": "DL1642",
        "time": "2025-07-07T10:07:00",
        "to": "Destin Fort Walton Beach (VPS)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N919AT)",
        "status": "Departed 10:18 AM"
    },
    {
        "flight": "DL2321",
        "time": "2025-07-07T10:07:00",
        "to": "Augusta (AGS)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N965AT)",
        "status": "Departed 10:46 AM"
    },
    {
        "flight": "DL5241",
        "time": "2025-07-07T10:09:00",
        "to": "Allentown (ABE)",
        "airline": "Delta Connection",
        "aircraft": "CRJ9 (N315PQ)",
        "status": "Departed 10:17 AM"
    },
    {
        "flight": "DL387",
        "time": "2025-07-07T10:10:00",
        "to": "Salt Lake City (SLC)",
        "airline": "Delta Air Lines",
        "aircraft": "A21N (N506DA)",
        "status": "Departed 10:57 AM"
    },
    {
        "flight": "DL1153",
        "time": "2025-07-07T10:10:00",
        "to": "Fort Myers (RSW)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N699DL)",
        "status": "Departed 10:33 AM"
    },
    {
        "flight": "DL1587",
        "time": "2025-07-07T10:10:00",
        "to": "Tampa (TPA)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N326DN)",
        "status": "Departed 10:26 AM"
    },
    {
        "flight": "DL1743",
        "time": "2025-07-07T10:10:00",
        "to": "Knoxville (TYS)",
        "airline": "Delta Air Lines",
        "aircraft": "A320 (N337NW)",
        "status": "Departed 10:24 AM"
    },
    {
        "flight": "DL2633",
        "time": "2025-07-07T10:10:00",
        "to": "Raleigh-Durham (RDU)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N948DZ)",
        "status": "Departed 10:29 AM"
    },
    {
        "flight": "DL3104",
        "time": "2025-07-07T10:10:00",
        "to": "Sarasota (SRQ)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N555NW)",
        "status": "Departed 10:31 AM"
    },
    {
        "flight": "DL1899",
        "time": "2025-07-07T10:10:00",
        "to": "St. Thomas (STT)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N659DL)",
        "status": "Departed 10:36 AM"
    },
    {
        "flight": "NK2171",
        "time": "2025-07-07T10:10:00",
        "to": "San Antonio (SAT)",
        "airline": "Spirit Airlines",
        "aircraft": "A320 (N629NK)",
        "status": "Departed 10:29 AM"
    },
    {
        "flight": "WN333",
        "time": "2025-07-07T10:10:00",
        "to": "Baltimore (BWI)",
        "airline": "Southwest Airlines (Canyon Blue Retro Livery)",
        "aircraft": "B38M (N872CB)",
        "status": "Departed 10:42 AM"
    },
    {
        "flight": "DL2177",
        "time": "2025-07-07T10:14:00",
        "to": "Richmond (RIC)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N821DN)",
        "status": "Departed 10:31 AM"
    },
    {
        "flight": "DL5526",
        "time": "2025-07-07T10:15:00",
        "to": "Lafayette (LFT)",
        "airline": "Delta Connection",
        "aircraft": "CRJ9 (N928XJ)",
        "status": "Departed 10:26 AM"
    },
    {
        "flight": "DL588",
        "time": "2025-07-07T10:17:00",
        "to": "Mexico City (MEX)",
        "airline": "Delta Air Lines",
        "aircraft": "B738 (N375DA)",
        "status": "Departed 10:34 AM"
    },
    {
        "flight": "XP394",
        "time": "2025-07-07T10:17:00",
        "to": "New Haven (HVN)",
        "airline": "Avelo Airlines",
        "aircraft": "B737 (N721VL)",
        "status": "Departed 10:38 AM"
    },
    {
        "flight": "DL501",
        "time": "2025-07-07T10:20:00",
        "to": "Los Angeles (LAX)",
        "airline": "Delta Air Lines",
        "aircraft": "B753 (N596NW)",
        "status": "Departed 10:41 AM"
    },
    {
        "flight": "WN349",
        "time": "2025-07-07T10:20:00",
        "to": "Dallas (DAL)",
        "airline": "Southwest Airlines",
        "aircraft": "B738 (N8561Z)",
        "status": "Departed 11:04 AM"
    },
    {
        "flight": "DL1481",
        "time": "2025-07-07T10:25:00",
        "to": "Louisville (SDF)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N936DZ)",
        "status": "Departed 10:33 AM"
    },
    {
        "flight": "DL1815",
        "time": "2025-07-07T10:25:00",
        "to": "San Jose del Cabo (SJD)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N6707A)",
        "status": "Departed 11:08 AM"
    },
    {
        "flight": "DL1818",
        "time": "2025-07-07T10:25:00",
        "to": "New York (EWR)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N362DN)",
        "status": "Departed 10:36 AM"
    },
    {
        "flight": "DL2354",
        "time": "2025-07-07T10:25:00",
        "to": "Pensacola (PNS)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N959DZ)",
        "status": "Departed 10:39 AM"
    },
    {
        "flight": "DL3535",
        "time": "2025-07-07T10:25:00",
        "to": "Alexandria (AEX)",
        "airline": "Delta Connection",
        "aircraft": "CRJ9 (N548CA)",
        "status": "Departed 10:37 AM"
    },
    {
        "flight": "DL4172",
        "time": "2025-07-07T10:25:00",
        "to": "Albany (ABY)",
        "airline": "Delta Connection",
        "aircraft": "CRJ7 (N776SK)",
        "status": "Departed 10:40 AM"
    },
    {
        "flight": "DL5352",
        "time": "2025-07-07T10:25:00",
        "to": "Columbus (CSG)",
        "airline": "Delta Connection",
        "aircraft": "CRJ7 (N376CA)",
        "status": "Departed 10:35 AM"
    },
    {
        "flight": "DL5425",
        "time": "2025-07-07T10:25:00",
        "to": "Dothan (DHN)",
        "airline": "Delta Connection",
        "aircraft": "CRJ9 (N605LR)",
        "status": "Departed 10:32 AM"
    },
    {
        "flight": "DL3045",
        "time": "2025-07-07T10:29:00",
        "to": "Panama City (ECP)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N957DZ)",
        "status": "Departed 10:38 AM"
    },
    {
        "flight": "DL371",
        "time": "2025-07-07T10:30:00",
        "to": "New York (LGA)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N377DN)",
        "status": "Departed 11:25 AM"
    },
    {
        "flight": "DL1941",
        "time": "2025-07-07T10:30:00",
        "to": "Puerto Vallarta (PVR)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N815DN)",
        "status": "Departed 10:39 AM"
    },
    {
        "flight": "DL2923",
        "time": "2025-07-07T10:30:00",
        "to": "Jacksonville (JAX)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N689DL)",
        "status": "Departed 10:47 AM"
    },
    {
        "flight": "F91099",
        "time": "2025-07-07T10:30:00",
        "to": "Phoenix (PHX)",
        "airline": "Frontier (Junior the Lynx Livery)",
        "aircraft": "A20N (N330FR)",
        "status": "Departed 10:47 AM"
    },
    {
        "flight": "F94891",
        "time": "2025-07-07T10:30:00",
        "to": "Las Vegas (LAS)",
        "airline": "Frontier (Betty the Bluebird Livery)",
        "aircraft": "A320 (N230FR)",
        "status": "Departed 12:09 PM"
    },
    {
        "flight": "UA2298",
        "time": "2025-07-07T10:30:00",
        "to": "Chicago (ORD)",
        "airline": "United Airlines",
        "aircraft": "B738 (N37274)",
        "status": "Departed 10:43 AM"
    },
    {
        "flight": "WN2296",
        "time": "2025-07-07T10:30:00",
        "to": "Nashville (BNA)",
        "airline": "Southwest Airlines (Freedom One Livery)",
        "aircraft": "B738 (N500WR)",
        "status": "Departed 10:44 AM"
    },
    {
        "flight": "F92082",
        "time": "2025-07-07T10:30:00",
        "to": "San Juan (SJU)",
        "airline": "Frontier (Joaquin the Kit Fox Livery)",
        "aircraft": "A20N (N387FR)",
        "status": "Departed 11:59 AM"
    },
    {
        "flight": "DL3040",
        "time": "2025-07-07T10:32:00",
        "to": "Little Rock (LIT)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N958DZ)",
        "status": "Departed 10:50 AM"
    },
    {
        "flight": "F925",
        "time": "2025-07-07T10:33:00",
        "to": "Punta Cana (PUJ)",
        "airline": "Frontier (Jo Jo the Grizzly Bear Livery)",
        "aircraft": "A20N (N335FR)",
        "status": "Departed 11:05 AM"
    },
    {
        "flight": "F9153",
        "time": "2025-07-07T10:34:00",
        "to": "Cancun (CUN)",
        "airline": "Frontier (Pike the Otter Livery)",
        "aircraft": "A320 (N235FR)",
        "status": "Departed 3:18 PM"
    },
    {
        "flight": "DL1512",
        "time": "2025-07-07T10:35:00",
        "to": "Fort Lauderdale (FLL)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N822DX)",
        "status": "Departed 11:06 AM"
    },
    {
        "flight": "ET519",
        "time": "2025-07-07T10:35:00",
        "to": "Addis Ababa (ADD)",
        "airline": "Ethiopian Airlines",
        "aircraft": "B789 (ET-AYC)",
        "status": "Departed 11:55 AM"
    },
    {
        "flight": "F94315",
        "time": "2025-07-07T10:35:00",
        "to": "Los Angeles (LAX)",
        "airline": "Frontier (Wiley the Bison Livery)",
        "aircraft": "A20N (N313FR)",
        "status": "Departed 10:52 AM"
    },
    {
        "flight": "KG5872",
        "time": "2025-07-07T10:35:00",
        "to": "Jackson (MKL)",
        "airline": "Denver Air Connection",
        "aircraft": "E145 (N970DC)",
        "status": "Departed 11:12 AM"
    },
    {
        "flight": "DL664",
        "time": "2025-07-07T10:36:00",
        "to": "Orlando (MCO)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N544US)",
        "status": "Departed 10:45 AM"
    },
    {
        "flight": "UA1128",
        "time": "2025-07-07T10:39:00",
        "to": "New York (EWR)",
        "airline": "United Airlines",
        "aircraft": "B39M (N77580)",
        "status": "Departed 10:50 AM"
    },
    {
        "flight": "NK2216",
        "time": "2025-07-07T10:41:00",
        "to": "New York (EWR)",
        "airline": "Spirit Airlines",
        "aircraft": "A21N (N742NK)",
        "status": "Departed 11:04 AM"
    },
    {
        "flight": "DL2711",
        "time": "2025-07-07T10:45:00",
        "to": "Baltimore (BWI)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N697DL)",
        "status": "Departed 10:58 AM"
    },
    {
        "flight": "DL3107",
        "time": "2025-07-07T10:45:00",
        "to": "Charleston (CHS)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N932DZ)",
        "status": "Departed 10:51 AM"
    },
    {
        "flight": "WN365",
        "time": "2025-07-07T10:45:00",
        "to": "Washington (DCA)",
        "airline": "Southwest Airlines",
        "aircraft": "B737 (N941WN)",
        "status": "Departed 10:59 AM"
    },
    {
        "flight": "WN1590",
        "time": "2025-07-07T10:45:00",
        "to": "Tampa (TPA)",
        "airline": "Southwest Airlines",
        "aircraft": "B738 (N8683D)",
        "status": "Departed 12:21 PM"
    },
    {
        "flight": "AA5553",
        "time": "2025-07-07T10:49:00",
        "to": "Philadelphia (PHL)",
        "airline": "American Eagle",
        "aircraft": "CRJ9 (N575NN)",
        "status": "Departed 11:53 AM"
    },
    {
        "flight": "DL1151",
        "time": "2025-07-07T10:50:00",
        "to": "Milwaukee (MKE)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N668DN)",
        "status": "Departed 10:56 AM"
    },
    {
        "flight": "DL1983",
        "time": "2025-07-07T10:50:00",
        "to": "Belize City (BZE)",
        "airline": "Delta Air Lines",
        "aircraft": "B738 (N3772H)",
        "status": "Departed 10:52 AM"
    },
    {
        "flight": "DL5076",
        "time": "2025-07-07T10:52:00",
        "to": "Brunswick (BQK)",
        "airline": "Delta Connection",
        "aircraft": "CRJ7 (N331CA)",
        "status": "Departed 11:21 AM"
    },
    {
        "flight": "AA5227",
        "time": "2025-07-07T10:55:00",
        "to": "Charlotte (CLT)",
        "airline": "American Eagle",
        "aircraft": "CRJ9 (N609NN)",
        "status": "Departed 12:04 PM"
    },
    {
        "flight": "DL466",
        "time": "2025-07-07T10:55:00",
        "to": "Las Vegas (LAS)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N687DL)",
        "status": "Departed 11:42 AM"
    },
    {
        "flight": "DL1910",
        "time": "2025-07-07T10:55:00",
        "to": "San Salvador (SAL)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N845DN)",
        "status": "Departed 11:09 AM"
    },
    {
        "flight": "WN1164",
        "time": "2025-07-07T10:55:00",
        "to": "St. Louis (STL)",
        "airline": "Southwest Airlines",
        "aircraft": "B737 (N442WN)",
        "status": "Departed 11:20 AM"
    },
    {
        "flight": "DL675",
        "time": "2025-07-07T10:56:00",
        "to": "Portland (PDX)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N828DN)",
        "status": "Departed 11:05 AM"
    },
    {
        "flight": "DL414",
        "time": "2025-07-07T11:00:00",
        "to": "Dallas (DFW)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N337DN)",
        "status": "Departed 11:53 AM"
    },
    {
        "flight": "DL737",
        "time": "2025-07-07T11:00:00",
        "to": "Washington (DCA)",
        "airline": "Delta Air Lines",
        "aircraft": "A320 (N339NW)",
        "status": "Departed 11:11 AM"
    },
    {
        "flight": "DL1191",
        "time": "2025-07-07T11:00:00",
        "to": "Daytona Beach (DAB)",
        "airline": "Delta Air Lines",
        "aircraft": "B738 (N3736C)",
        "status": "Departed 11:41 AM"
    },
    {
        "flight": "DL1195",
        "time": "2025-07-07T11:00:00",
        "to": "Houston (HOU)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N995AT)",
        "status": "Departed 11:39 AM"
    },
    {
        "flight": "DL2417",
        "time": "2025-07-07T11:00:00",
        "to": "Chicago (MDW)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N929AT)",
        "status": "Departed 11:05 AM"
    },
    {
        "flight": "DL2709",
        "time": "2025-07-07T11:00:00",
        "to": "Houston (IAH)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N305DN)",
        "status": "Departed 12:02 PM"
    },
    {
        "flight": "DL3210",
        "time": "2025-07-07T11:00:00",
        "to": "Lexington (LEX)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N895AT)",
        "status": "Departed 11:02 AM"
    },
    {
        "flight": "AA2039",
        "time": "2025-07-07T11:00:00",
        "to": "Chicago (ORD)",
        "airline": "American Airlines",
        "aircraft": "A319 (N9017P)",
        "status": "Canceled"
    },
    {
        "flight": "DL2011",
        "time": "2025-07-07T11:00:00",
        "to": "Austin (AUS)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N338DN)",
        "status": "Departed 11:11 AM"
    },
    {
        "flight": "DL9982",
        "time": "2025-07-07T11:00:00",
        "to": "Atlanta (ATL)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N685DA)",
        "status": "Departed 12:17 PM"
    },
    {
        "flight": "DL894",
        "time": "2025-07-07T11:01:00",
        "to": "San Diego (SAN)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N347DN)",
        "status": "Departed 11:16 AM"
    },
    {
        "flight": "DL1240",
        "time": "2025-07-07T11:03:00",
        "to": "Detroit (DTW)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N366DX)",
        "status": "Departed 1:01 PM"
    },
    {
        "flight": "DL527",
        "time": "2025-07-07T11:05:00",
        "to": "Kansas City (MCI)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N954DZ)",
        "status": "Departed 11:13 AM"
    },
    {
        "flight": "DL1154",
        "time": "2025-07-07T11:05:00",
        "to": "Philadelphia (PHL)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N6704Z)",
        "status": "Departed 11:18 AM"
    },
    {
        "flight": "DL2470",
        "time": "2025-07-07T11:05:00",
        "to": "Tulsa (TUL)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N993AT)",
        "status": "Departed 11:39 AM"
    },
    {
        "flight": "DL2542",
        "time": "2025-07-07T11:05:00",
        "to": "New Orleans (MSY)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N6712B)",
        "status": "Departed 12:15 PM"
    },
    {
        "flight": "DL2621",
        "time": "2025-07-07T11:05:00",
        "to": "Baton Rouge (BTR)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N923AT)",
        "status": "Departed 11:12 AM"
    },
    {
        "flight": "DL5039",
        "time": "2025-07-07T11:05:00",
        "to": "North Eleuthera (ELH)",
        "airline": "Delta Connection",
        "aircraft": "CRJ7 (N398CA)",
        "status": "Departed 11:19 AM"
    },
    {
        "flight": "DL3030",
        "time": "2025-07-07T11:09:00",
        "to": "Gainesville (GNV)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N930AT)",
        "status": "Departed 11:36 AM"
    },
    {
        "flight": "NK2458",
        "time": "2025-07-07T11:09:00",
        "to": "Louisville (SDF)",
        "airline": "Spirit Airlines",
        "aircraft": "A21N (N730NK)",
        "status": "Departed 11:35 AM"
    },
    {
        "flight": "AA3048",
        "time": "2025-07-07T11:10:00",
        "to": "Dallas (DFW)",
        "airline": "American Airlines",
        "aircraft": "B738 (N943AN)",
        "status": "Departed 11:23 AM"
    },
    {
        "flight": "DL882",
        "time": "2025-07-07T11:10:00",
        "to": "Pittsburgh (PIT)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N949DZ)",
        "status": "Departed 11:14 AM"
    },
    {
        "flight": "DL937",
        "time": "2025-07-07T11:10:00",
        "to": "Tucson (TUS)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N861DN)",
        "status": "Departed 11:17 AM"
    },
    {
        "flight": "DL1332",
        "time": "2025-07-07T11:10:00",
        "to": "Miami (MIA)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N6713Y)",
        "status": "Departed 11:22 AM"
    },
    {
        "flight": "DL3013",
        "time": "2025-07-07T11:10:00",
        "to": "Indianapolis (IND)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N951DX)",
        "status": "Departed 11:22 AM"
    },
    {
        "flight": "DL2925",
        "time": "2025-07-07T11:11:00",
        "to": "Norfolk (ORF)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N669DN)",
        "status": "Departed 11:37 AM"
    },
    {
        "flight": "DL1082",
        "time": "2025-07-07T11:12:00",
        "to": "Windsor Locks (BDL)",
        "airline": "Delta Air Lines",
        "aircraft": "A320 (N367NW)",
        "status": "Departed 11:31 AM"
    },
    {
        "flight": "DL406",
        "time": "2025-07-07T11:13:00",
        "to": "Bozeman (BZN)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N6702)",
        "status": "Departed 12:08 PM"
    },
    {
        "flight": "DL1801",
        "time": "2025-07-07T11:13:00",
        "to": "Montego Bay (MBJ)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N346DN)",
        "status": "Departed 11:38 AM"
    },
    {
        "flight": "DL648",
        "time": "2025-07-07T11:15:00",
        "to": "Seattle (SEA)",
        "airline": "Delta Air Lines",
        "aircraft": "B753 (N585NW)",
        "status": "Departed 11:34 AM"
    },
    {
        "flight": "DL862",
        "time": "2025-07-07T11:15:00",
        "to": "Boston (BOS)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N322DN)",
        "status": "Departed 11:44 AM"
    },
    {
        "flight": "DL1099",
        "time": "2025-07-07T11:15:00",
        "to": "Tampa (TPA)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N819DX)",
        "status": "Departed 11:28 AM"
    },
    {
        "flight": "DL1472",
        "time": "2025-07-07T11:15:00",
        "to": "Key West (EYW)",
        "airline": "Delta Air Lines",
        "aircraft": "A319 (N359NB)",
        "status": "Departed 11:23 AM"
    },
    {
        "flight": "DL1813",
        "time": "2025-07-07T11:15:00",
        "to": "Myrtle Beach (MYR)",
        "airline": "Delta Air Lines",
        "aircraft": "A319 (N343NB)",
        "status": "Departed 11:20 AM"
    },
    {
        "flight": "DL1889",
        "time": "2025-07-07T11:15:00",
        "to": "St. Thomas (STT)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N541US)",
        "status": "Departed 11:25 AM"
    },
    {
        "flight": "WN409",
        "time": "2025-07-07T11:15:00",
        "to": "New York (LGA)",
        "airline": "Southwest Airlines",
        "aircraft": "B737 (N232WN)",
        "status": "Departed 11:39 AM"
    },
    {
        "flight": "DL598",
        "time": "2025-07-07T11:17:00",
        "to": "Cancun (CUN)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N670DN)",
        "status": "Departed 11:32 AM"
    },
    {
        "flight": "DL1002",
        "time": "2025-07-07T11:17:00",
        "to": "El Paso (ELP)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N926DZ)",
        "status": "Departed 11:36 AM"
    },
    {
        "flight": "DL673",
        "time": "2025-07-07T11:20:00",
        "to": "Los Angeles (LAX)",
        "airline": "Delta Air Lines",
        "aircraft": "A21N (N522DA)",
        "status": "Departed 11:33 AM"
    },
    {
        "flight": "DL1680",
        "time": "2025-07-07T11:20:00",
        "to": "Nashville (BNA)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N940DU)",
        "status": "Departed 11:34 AM"
    },
    {
        "flight": "DL1773",
        "time": "2025-07-07T11:20:00",
        "to": "Tulum (TQO)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N880DN)",
        "status": "Departed 11:58 AM"
    },
    {
        "flight": "DL2818",
        "time": "2025-07-07T11:20:00",
        "to": "Memphis (MEM)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N937DZ)",
        "status": "Departed 11:26 AM"
    },
    {
        "flight": "DL3185",
        "time": "2025-07-07T11:20:00",
        "to": "Jackson (JAN)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N988AT)",
        "status": "Departed 11:26 AM"
    },
    {
        "flight": "WN4676",
        "time": "2025-07-07T11:20:00",
        "to": "Pittsburgh (PIT)",
        "airline": "Southwest Airlines (Illinois One Livery)",
        "aircraft": "B738 (N8619F)",
        "status": "Departed 11:27 AM"
    },
    {
        "flight": "DL775",
        "time": "2025-07-07T11:20:00",
        "to": "Cleveland (CLE)",
        "airline": "Delta Air Lines",
        "aircraft": "A320 (N378NW)",
        "status": "Departed 11:32 AM"
    },
    {
        "flight": "DL3153",
        "time": "2025-07-07T11:21:00",
        "to": "Birmingham (BHM)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N933DZ)",
        "status": "Departed 11:31 AM"
    },
    {
        "flight": "DL5300",
        "time": "2025-07-07T11:23:00",
        "to": "Bentonville (XNA)",
        "airline": "Delta Connection",
        "aircraft": "CRJ9 (N602LR)",
        "status": "Departed 12:12 PM"
    },
    {
        "flight": "DL1916",
        "time": "2025-07-07T11:24:00",
        "to": "Punta Cana (PUJ)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N103DY)",
        "status": "Departed 11:33 AM"
    },
    {
        "flight": "UA1327",
        "time": "2025-07-07T11:24:00",
        "to": "Denver (DEN)",
        "airline": "United Airlines",
        "aircraft": "B739 (N37434)",
        "status": "Departed 1:11 PM"
    },
    {
        "flight": "DL295",
        "time": "2025-07-07T11:25:00",
        "to": "Tokyo (HND)",
        "airline": "Delta Air Lines",
        "aircraft": "A359 (N525DN)",
        "status": "Departed 11:29 AM"
    },
    {
        "flight": "DL467",
        "time": "2025-07-07T11:30:00",
        "to": "New York (LGA)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N359DN)",
        "status": "Departed 11:47 AM"
    },
    {
        "flight": "DL5312",
        "time": "2025-07-07T11:30:00",
        "to": "Valdosta (VLD)",
        "airline": "Delta Connection",
        "aircraft": "CRJ7 (N690CA)",
        "status": "Departed 12:36 PM"
    },
    {
        "flight": "DL1456",
        "time": "2025-07-07T11:31:00",
        "to": "Chicago (ORD)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N850DN)",
        "status": "Departed 12:05 PM"
    },
    {
        "flight": "DL5086",
        "time": "2025-07-07T11:31:00",
        "to": "Blountville (TRI)",
        "airline": "Delta Connection",
        "aircraft": "CRJ9 (N186GJ)",
        "status": "Departed 11:41 AM"
    },
    {
        "flight": "DL5157",
        "time": "2025-07-07T11:33:00",
        "to": "Monroe (MLU)",
        "airline": "Delta Connection",
        "aircraft": "CRJ9 (N136EV)",
        "status": "Departed 12:20 PM"
    },
    {
        "flight": "DL3699",
        "time": "2025-07-07T11:35:00",
        "to": "Shreveport (SHV)",
        "airline": "Delta Connection",
        "aircraft": "CRJ9 (N822SK)",
        "status": "Departed 11:49 AM"
    },
    {
        "flight": "UA693",
        "time": "2025-07-07T11:35:00",
        "to": "Houston (IAH)",
        "airline": "United Airlines",
        "aircraft": "A319 (N814UA)",
        "status": "Departed 11:46 AM"
    },
    {
        "flight": "DL1938",
        "time": "2025-07-07T11:36:00",
        "to": "Nassau (NAS)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N302DN)",
        "status": "Departed 12:24 PM"
    },
    {
        "flight": "AA1046",
        "time": "2025-07-07T11:39:00",
        "to": "Miami (MIA)",
        "airline": "American Airlines",
        "aircraft": "A321 (N189UW)",
        "status": "Canceled"
    },
    {
        "flight": "DL4955",
        "time": "2025-07-07T11:44:00",
        "to": "Montgomery (MGM)",
        "airline": "Delta Connection",
        "aircraft": "CRJ9 (N913XJ)",
        "status": "Departed 12:05 PM"
    },
    {
        "flight": "DL3057",
        "time": "2025-07-07T11:44:00",
        "to": "Asheville (AVL)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N894AT)",
        "status": "Departed 11:48 AM"
    },
    {
        "flight": "AA4389",
        "time": "2025-07-07T11:45:00",
        "to": "Washington (DCA)",
        "airline": "American Eagle",
        "aircraft": "E75S (N129HQ)",
        "status": "Departed 1:06 PM"
    },
    {
        "flight": "DL1030",
        "time": "2025-07-07T11:45:00",
        "to": "Orlando (MCO)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N6703D)",
        "status": "Departed 12:03 PM"
    },
    {
        "flight": "DL706",
        "time": "2025-07-07T11:46:00",
        "to": "Denver (DEN)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N114DN)",
        "status": "Departed 12:01 PM"
    },
    {
        "flight": "DL3245",
        "time": "2025-07-07T11:46:00",
        "to": "Raleigh-Durham (RDU)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N878DN)",
        "status": "Departed 12:44 PM"
    },
    {
        "flight": "DL796",
        "time": "2025-07-07T11:47:00",
        "to": "Phoenix (PHX)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N550NW)",
        "status": "Departed 11:57 AM"
    },
    {
        "flight": "DL1627",
        "time": "2025-07-07T11:49:00",
        "to": "Mobile (MOB)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N906AT)",
        "status": "Departed 12:01 PM"
    },
    {
        "flight": "DL1190",
        "time": "2025-07-07T11:50:00",
        "to": "West Palm Beach (PBI)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N104DN)",
        "status": "Departed 12:28 PM"
    },
    {
        "flight": "WN1800",
        "time": "2025-07-07T11:50:00",
        "to": "Orlando (MCO)",
        "airline": "Southwest Airlines",
        "aircraft": "B738 (N8517F)",
        "status": "Departed 12:17 PM"
    },
    {
        "flight": "DL2240",
        "time": "2025-07-07T11:53:00",
        "to": "Santa Ana (SNA)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N709TW)",
        "status": "Departed 11:59 AM"
    },
    {
        "flight": "DL663",
        "time": "2025-07-07T11:54:00",
        "to": "Salt Lake City (SLC)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N110DX)",
        "status": "Departed 12:03 PM"
    },
    {
        "flight": "DL2910",
        "time": "2025-07-07T11:55:00",
        "to": "Columbia (CAE)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N933AT)",
        "status": "Departed 12:00 PM"
    },
    {
        "flight": "DL3156",
        "time": "2025-07-07T11:58:00",
        "to": "St. Louis (STL)",
        "airline": "Delta Air Lines",
        "aircraft": "B738 (N378DA)",
        "status": "Departed 12:06 PM"
    },
    {
        "flight": "DL5092",
        "time": "2025-07-07T12:02:00",
        "to": "White Plains (HPN)",
        "airline": "Delta Connection",
        "aircraft": "CRJ9 (N924XJ)",
        "status": "Departed 12:19 PM"
    },
    {
        "flight": "DL3068",
        "time": "2025-07-07T12:03:00",
        "to": "Huntsville (HSV)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N967AT)",
        "status": "Departed 12:15 PM"
    },
    {
        "flight": "DL2020",
        "time": "2025-07-07T12:05:00",
        "to": "Oklahoma City (OKC)",
        "airline": "Delta Air Lines",
        "aircraft": "A320 (N351NW)",
        "status": "Departed 12:32 PM"
    },
    {
        "flight": "WN345",
        "time": "2025-07-07T12:05:00",
        "to": "Columbus (CMH)",
        "airline": "Southwest Airlines",
        "aircraft": "B38M (N8934Q)",
        "status": "Departed 12:23 PM"
    },
    {
        "flight": "DL2104",
        "time": "2025-07-07T12:06:00",
        "to": "Austin (AUS)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N316DN)",
        "status": "Departed 12:13 PM"
    },
    {
        "flight": "DL629",
        "time": "2025-07-07T12:15:00",
        "to": "Seattle (SEA)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N930DZ)",
        "status": "Departed 12:27 PM"
    },
    {
        "flight": "DL2322",
        "time": "2025-07-07T12:15:00",
        "to": "New York (EWR)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N332DN)",
        "status": "Departed 2:29 PM"
    },
    {
        "flight": "DL2380",
        "time": "2025-07-07T12:15:00",
        "to": "New York (JFK)",
        "airline": "Delta Air Lines",
        "aircraft": "A21N (N541DE)",
        "status": "Departed 1:50 PM"
    },
    {
        "flight": "DL2763",
        "time": "2025-07-07T12:15:00",
        "to": "Dayton (DAY)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N980AT)",
        "status": "Departed 12:21 PM"
    },
    {
        "flight": "DL2901",
        "time": "2025-07-07T12:15:00",
        "to": "Minneapolis (MSP)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N804DN)",
        "status": "Departed 12:29 PM"
    },
    {
        "flight": "DL3161",
        "time": "2025-07-07T12:15:00",
        "to": "Columbus (CMH)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N962DZ)",
        "status": "Departed 12:18 PM"
    },
    {
        "flight": "DL4935",
        "time": "2025-07-07T12:15:00",
        "to": "Chattanooga (CHA)",
        "airline": "Delta Connection",
        "aircraft": "CRJ7 (N354CA)",
        "status": "Departed 1:26 PM"
    },
    {
        "flight": "UA631",
        "time": "2025-07-07T12:15:00",
        "to": "New York (EWR)",
        "airline": "United Airlines",
        "aircraft": "A319 (N855UA)",
        "status": "Departed 12:48 PM"
    },
    {
        "flight": "DL750",
        "time": "2025-07-07T12:16:00",
        "to": "San Francisco (SFO)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N705TW)",
        "status": "Departed 12:27 PM"
    },
    {
        "flight": "DL1725",
        "time": "2025-07-07T12:16:00",
        "to": "Greenville-Spartanburg (GSP)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N998AT)",
        "status": "Departed 12:23 PM"
    },
    {
        "flight": "DL3168",
        "time": "2025-07-07T12:16:00",
        "to": "Wilmington (ILM)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N979AT)",
        "status": "Departed 12:20 PM"
    },
    {
        "flight": "DL5423",
        "time": "2025-07-07T12:18:00",
        "to": "Charlottesville (CHO)",
        "airline": "Delta Connection",
        "aircraft": "CRJ7 (N371CA)",
        "status": "Departed 12:35 PM"
    },
    {
        "flight": "DL2438",
        "time": "2025-07-07T12:20:00",
        "to": "Sarasota (SRQ)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N944DZ)",
        "status": "Departed 1:09 PM"
    },
    {
        "flight": "DL4879",
        "time": "2025-07-07T12:20:00",
        "to": "Evansville (EVV)",
        "airline": "Delta Connection",
        "aircraft": "CRJ9 (N907XJ)",
        "status": "Departed 12:39 PM"
    },
    {
        "flight": "DL2155",
        "time": "2025-07-07T12:23:00",
        "to": "Des Moines (DSM)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N891AT)",
        "status": "Departed 1:52 PM"
    },
    {
        "flight": "DL3024",
        "time": "2025-07-07T12:26:00",
        "to": "Jacksonville (JAX)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N6716C)",
        "status": "Departed 12:34 PM"
    },
    {
        "flight": "B6896",
        "time": "2025-07-07T12:28:00",
        "to": "Boston (BOS)",
        "airline": "JetBlue",
        "aircraft": "A320 (N618JB)",
        "status": "Departed 12:42 PM"
    },
    {
        "flight": "DL350",
        "time": "2025-07-07T12:28:00",
        "to": "Boston (BOS)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N340DN)",
        "status": "Departed 12:45 PM"
    },
    {
        "flight": "DL525",
        "time": "2025-07-07T12:30:00",
        "to": "New York (LGA)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N396DN)",
        "status": "Departed 1:25 PM"
    },
    {
        "flight": "DL1437",
        "time": "2025-07-07T12:30:00",
        "to": "Richmond (RIC)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N816DN)",
        "status": "Departed 12:47 PM"
    },
    {
        "flight": "DL3127",
        "time": "2025-07-07T12:30:00",
        "to": "Melbourne (MLB)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N603AT)",
        "status": "Departed 1:10 PM"
    },
    {
        "flight": "DL1182",
        "time": "2025-07-07T12:31:00",
        "to": "Colorado Springs (COS)",
        "airline": "Delta Air Lines",
        "aircraft": "B738 (N384DA)",
        "status": "Departed 12:37 PM"
    },
    {
        "flight": "DL2585",
        "time": "2025-07-07T12:32:00",
        "to": "Little Rock (LIT)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N954AT)",
        "status": "Departed 2:21 PM"
    },
    {
        "flight": "DL895",
        "time": "2025-07-07T12:33:00",
        "to": "Los Angeles (LAX)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N389DN)",
        "status": "Departed 12:39 PM"
    },
    {
        "flight": "DL1408",
        "time": "2025-07-07T12:33:00",
        "to": "San Antonio (SAT)",
        "airline": "Delta Air Lines",
        "aircraft": "A320 (N365NW)",
        "status": "Departed 1:37 PM"
    },
    {
        "flight": "DL549",
        "time": "2025-07-07T12:35:00",
        "to": "Las Vegas (LAS)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N543US)",
        "status": "Departed 12:43 PM"
    },
    {
        "flight": "DL3092",
        "time": "2025-07-07T12:35:00",
        "to": "Destin Fort Walton Beach (VPS)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N986AT)",
        "status": "Departed 12:50 PM"
    },
    {
        "flight": "5Y8497",
        "time": "2025-07-07T12:35:00",
        "to": "Seoul (ICN)",
        "airline": "Atlas Air",
        "aircraft": "B744 (N408MC)",
        "status": "Departed 1:38 PM"
    },
    {
        "flight": "AA820",
        "time": "2025-07-07T12:36:00",
        "to": "Dallas (DFW)",
        "airline": "American Airlines (Oneworld Livery)",
        "aircraft": "B738 (N919NN)",
        "status": "Departed 1:04 PM"
    },
    {
        "flight": "DL1525",
        "time": "2025-07-07T12:36:00",
        "to": "Tampa (TPA)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N556NW)",
        "status": "Departed 1:02 PM"
    },
    {
        "flight": "DL3216",
        "time": "2025-07-07T12:36:00",
        "to": "Savannah (SAV)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N955DZ)",
        "status": "Departed 12:47 PM"
    },
    {
        "flight": "DL1317",
        "time": "2025-07-07T12:38:00",
        "to": "Greensboro (GSO)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N935AT)",
        "status": "Departed 12:51 PM"
    },
    {
        "flight": "DL1359",
        "time": "2025-07-07T12:40:00",
        "to": "Panama City (ECP)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N824DN)",
        "status": "Departed 12:52 PM"
    },
    {
        "flight": "KE36",
        "time": "2025-07-07T12:40:00",
        "to": "Seoul (ICN)",
        "airline": "Korean Air",
        "aircraft": "B748 (HL7642)",
        "status": "Departed 1:30 PM"
    },
    {
        "flight": "DL1283",
        "time": "2025-07-07T12:41:00",
        "to": "Cincinnati (CVG)",
        "airline": "Delta Air Lines",
        "aircraft": "B738 (N3749D)",
        "status": "Departed 12:50 PM"
    },
    {
        "flight": "DL5288",
        "time": "2025-07-07T12:44:00",
        "to": "Augusta (AGS)",
        "airline": "Delta Connection",
        "aircraft": "CRJ9 (N691CA)",
        "status": "Departed 2:11 PM"
    },
    {
        "flight": "DL1125",
        "time": "2025-07-07T12:45:00",
        "to": "Omaha (OMA)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N942AT)",
        "status": "Departed 1:43 PM"
    },
    {
        "flight": "DL1196",
        "time": "2025-07-07T12:45:00",
        "to": "Fort Myers (RSW)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N897DN)",
        "status": "Departed 12:58 PM"
    },
    {
        "flight": "DL1640",
        "time": "2025-07-07T12:45:00",
        "to": "Pensacola (PNS)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N939DZ)",
        "status": "Departed 12:59 PM"
    },
    {
        "flight": "F9125",
        "time": "2025-07-07T12:45:00",
        "to": "Montego Bay (MBJ)",
        "airline": "Frontier (Ed, Edwin & Eddie the Penguins Livery)",
        "aircraft": "A20N (N344FR)",
        "status": "Departed 1:13 PM"
    },
    {
        "flight": "WN376",
        "time": "2025-07-07T12:45:00",
        "to": "Denver (DEN)",
        "airline": "Southwest Airlines",
        "aircraft": "B738 (N8647A)",
        "status": "Departed 1:07 PM"
    },
    {
        "flight": "WN215",
        "time": "2025-07-07T12:45:00",
        "to": "Nashville (BNA)",
        "airline": "Southwest Airlines",
        "aircraft": "B737 (N215WN)",
        "status": "Departed 5:58 PM"
    },
    {
        "flight": "DL3062",
        "time": "2025-07-07T12:46:00",
        "to": "Charlotte (CLT)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N961AT)",
        "status": "Departed 12:55 PM"
    },
    {
        "flight": "DL1341",
        "time": "2025-07-07T12:47:00",
        "to": "Fort Lauderdale (FLL)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N692DL)",
        "status": "Departed 12:54 PM"
    },
    {
        "flight": "DL2179",
        "time": "2025-07-07T12:48:00",
        "to": "Charleston (CHS)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N953DZ)",
        "status": "Departed 12:59 PM"
    },
    {
        "flight": "DL573",
        "time": "2025-07-07T12:50:00",
        "to": "Tallahassee (TLH)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N896AT)",
        "status": "Departed 1:04 PM"
    },
    {
        "flight": "DL1482",
        "time": "2025-07-07T12:50:00",
        "to": "Washington (IAD)",
        "airline": "Delta Air Lines",
        "aircraft": "BCS3 (N314DU)",
        "status": "Departed 1:34 PM"
    },
    {
        "flight": "DL2269",
        "time": "2025-07-07T12:50:00",
        "to": "Knoxville (TYS)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N946AT)",
        "status": "Departed 1:13 PM"
    },
    {
        "flight": "DL1579",
        "time": "2025-07-07T12:52:00",
        "to": "Miami (MIA)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N695DL)",
        "status": "Departed 1:01 PM"
    },
    {
        "flight": "F94771",
        "time": "2025-07-07T12:52:00",
        "to": "Cincinnati (CVG)",
        "airline": "Frontier (Joey the Opossum Livery)",
        "aircraft": "A20N (N351FR)",
        "status": "Departed 1:09 PM"
    },
    {
        "flight": "DL592",
        "time": "2025-07-07T12:54:00",
        "to": "Cancun (CUN)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N893DN)",
        "status": "Departed 1:06 PM"
    },
    {
        "flight": "DL602",
        "time": "2025-07-07T12:55:00",
        "to": "Mexico City (MEX)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N696DL)",
        "status": "Departed 12:57 PM"
    },
    {
        "flight": "DL957",
        "time": "2025-07-07T12:55:00",
        "to": "Denver (DEN)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N106DN)",
        "status": "Departed 1:03 PM"
    },
    {
        "flight": "DL5011",
        "time": "2025-07-07T12:56:00",
        "to": "Charleston (CRW)",
        "airline": "Delta Connection",
        "aircraft": "CRJ9 (N928XJ)",
        "status": "Departed 3:20 PM"
    },
    {
        "flight": "DL2718",
        "time": "2025-07-07T12:57:00",
        "to": "Gulfport (GPT)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N966AT)",
        "status": "Departed 1:06 PM"
    },
    {
        "flight": "DL2778",
        "time": "2025-07-07T13:00:00",
        "to": "Memphis (MEM)",
        "airline": "Delta Air Lines",
        "aircraft": "B738 (N3735D)",
        "status": "Departed 1:41 PM"
    },
    {
        "flight": "DL3238",
        "time": "2025-07-07T13:00:00",
        "to": "Raleigh-Durham (RDU)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N963DZ)",
        "status": "Departed 1:09 PM"
    },
    {
        "flight": "DL2279",
        "time": "2025-07-07T13:01:00",
        "to": "Philadelphia (PHL)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N333DX)",
        "status": "Departed 1:12 PM"
    },
    {
        "flight": "DL2451",
        "time": "2025-07-07T13:02:00",
        "to": "Louisville (SDF)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N820DN)",
        "status": "Departed 1:32 PM"
    },
    {
        "flight": "DL5516",
        "time": "2025-07-07T13:04:00",
        "to": "Bentonville (XNA)",
        "airline": "Delta Connection",
        "aircraft": "CRJ9 (N228PQ)",
        "status": "Departed 1:40 PM"
    },
    {
        "flight": "F92497",
        "time": "2025-07-07T13:04:00",
        "to": "Indianapolis (IND)",
        "airline": "Frontier (Choo the Pika Livery)",
        "aircraft": "A20N (N331FR)",
        "status": "Departed 1:48 PM"
    },
    {
        "flight": "DL360",
        "time": "2025-07-07T13:05:00",
        "to": "Washington (DCA)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N373DX)",
        "status": "Departed 1:14 PM"
    },
    {
        "flight": "DL1576",
        "time": "2025-07-07T13:05:00",
        "to": "Orlando (MCO)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N554NW)",
        "status": "Departed 1:15 PM"
    },
    {
        "flight": "DL1946",
        "time": "2025-07-07T13:05:00",
        "to": "San Juan (SJU)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N919DU)",
        "status": "Departed 1:15 PM"
    },
    {
        "flight": "DL1246",
        "time": "2025-07-07T13:08:00",
        "to": "Milwaukee (MKE)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N812DN)",
        "status": "Departed 1:17 PM"
    },
    {
        "flight": "DL2827",
        "time": "2025-07-07T13:10:00",
        "to": "Daytona Beach (DAB)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N985AT)",
        "status": "Departed 1:19 PM"
    },
    {
        "flight": "DL2356",
        "time": "2025-07-07T13:12:00",
        "to": "Columbia (CAE)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N943AT)",
        "status": "Departed 1:19 PM"
    },
    {
        "flight": "DL2361",
        "time": "2025-07-07T13:15:00",
        "to": "New Orleans (MSY)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N883DN)",
        "status": "Departed 1:20 PM"
    },
    {
        "flight": "WN3522",
        "time": "2025-07-07T13:15:00",
        "to": "Houston (HOU)",
        "airline": "Southwest Airlines",
        "aircraft": "B738 (N8617E)",
        "status": "Departed 1:27 PM"
    },
    {
        "flight": "DL3010",
        "time": "2025-07-07T13:16:00",
        "to": "Greenville-Spartanburg (GSP)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N974AT)",
        "status": "Departed 1:26 PM"
    },
    {
        "flight": "DL5364",
        "time": "2025-07-07T13:17:00",
        "to": "Jacksonville (OAJ)",
        "airline": "Delta Connection",
        "aircraft": "CRJ9 (N331PQ)",
        "status": "Departed 1:32 PM"
    },
    {
        "flight": "DL3012",
        "time": "2025-07-07T13:18:00",
        "to": "Birmingham (BHM)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N994AT)",
        "status": "Departed 1:35 PM"
    },
    {
        "flight": "DL1477",
        "time": "2025-07-07T13:19:00",
        "to": "Chicago (ORD)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N350DN)",
        "status": "Departed 2:05 PM"
    },
    {
        "flight": "UA221",
        "time": "2025-07-07T13:20:00",
        "to": "Denver (DEN)",
        "airline": "United Airlines",
        "aircraft": "B738 (N76532)",
        "status": "Departed 1:59 PM"
    },
    {
        "flight": "WN3184",
        "time": "2025-07-07T13:20:00",
        "to": "Baltimore (BWI)",
        "airline": "Southwest Airlines",
        "aircraft": "B737 (N275WN)",
        "status": "Departed 1:40 PM"
    },
    {
        "flight": "DL4931",
        "time": "2025-07-07T13:24:00",
        "to": "Mobile (MOB)",
        "airline": "Delta Connection",
        "aircraft": "CRJ9 (N133EV)",
        "status": "Departed 1:45 PM"
    },
    {
        "flight": "DL2182",
        "time": "2025-07-07T13:26:00",
        "to": "Huntsville (HSV)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N607AT)",
        "status": "Departed 1:33 PM"
    },
    {
        "flight": "DL4953",
        "time": "2025-07-07T13:28:00",
        "to": "Golden Triangle (GTR)",
        "airline": "Delta Connection",
        "aircraft": "CRJ9 (N903XJ)",
        "status": "Departed 2:56 PM"
    },
    {
        "flight": "DL1443",
        "time": "2025-07-07T13:29:00",
        "to": "Kansas City (MCI)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N961DZ)",
        "status": "Departed 1:35 PM"
    },
    {
        "flight": "DL460",
        "time": "2025-07-07T13:30:00",
        "to": "New York (LGA)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N112DN)",
        "status": "Departed 2:24 PM"
    },
    {
        "flight": "DL4989",
        "time": "2025-07-07T13:31:00",
        "to": "Fayetteville (FAY)",
        "airline": "Delta Connection",
        "aircraft": "CRJ7 (N668CA)",
        "status": "Departed 1:41 PM"
    },
    {
        "flight": "DL5159",
        "time": "2025-07-07T13:33:00",
        "to": "Chattanooga (CHA)",
        "airline": "Delta Connection",
        "aircraft": "CRJ7 (N368CA)",
        "status": "Departed 1:47 PM"
    },
    {
        "flight": "DL1949",
        "time": "2025-07-07T13:34:00",
        "to": "Montego Bay (MBJ)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N336DX)",
        "status": "Departed 1:57 PM"
    },
    {
        "flight": "DL1235",
        "time": "2025-07-07T13:35:00",
        "to": "Phoenix (PHX)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N823DX)",
        "status": "Departed 1:52 PM"
    },
    {
        "flight": "DL5084",
        "time": "2025-07-07T13:35:00",
        "to": "Roanoke (ROA)",
        "airline": "Delta Connection",
        "aircraft": "CRJ7 (N376CA)",
        "status": "Departed 2:14 PM"
    },
    {
        "flight": "F94708",
        "time": "2025-07-07T13:40:00",
        "to": "Washington (IAD)",
        "airline": "Frontier (Colorado the Bighorn Sheep Livery)",
        "aircraft": "A20N (N323FR)",
        "status": "Departed 2:05 PM"
    },
    {
        "flight": "DL2990",
        "time": "2025-07-07T13:41:00",
        "to": "Jacksonville (JAX)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N6714Q)",
        "status": "Departed 1:51 PM"
    },
    {
        "flight": "DL1031",
        "time": "2025-07-07T13:44:00",
        "to": "Detroit (DTW)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N553NW)",
        "status": "Departed 2:00 PM"
    },
    {
        "flight": "DL1947",
        "time": "2025-07-07T13:45:00",
        "to": "Nassau (NAS)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N841DN)",
        "status": "Departed 1:50 PM"
    },
    {
        "flight": "DL2832",
        "time": "2025-07-07T13:45:00",
        "to": "Destin Fort Walton Beach (VPS)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N944AT)",
        "status": "Departed 2:16 PM"
    },
    {
        "flight": "DL3133",
        "time": "2025-07-07T13:45:00",
        "to": "Gainesville (GNV)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N951AT)",
        "status": "Departed 1:56 PM"
    },
    {
        "flight": "DL3152",
        "time": "2025-07-07T13:45:00",
        "to": "Richmond (RIC)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N823DN)",
        "status": "Departed 1:48 PM"
    },
    {
        "flight": "DL1097",
        "time": "2025-07-07T13:46:00",
        "to": "Charlotte (CLT)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N990AT)",
        "status": "Departed 1:55 PM"
    },
    {
        "flight": "DL1572",
        "time": "2025-07-07T13:47:00",
        "to": "Houston (IAH)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N364DX)",
        "status": "Departed 1:50 PM"
    },
    {
        "flight": "DL1865",
        "time": "2025-07-07T13:47:00",
        "to": "Nashville (BNA)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N960DZ)",
        "status": "Departed 1:55 PM"
    },
    {
        "flight": "DL2837",
        "time": "2025-07-07T13:47:00",
        "to": "Cincinnati (CVG)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N888DU)",
        "status": "Departed 1:59 PM"
    },
    {
        "flight": "DL1353",
        "time": "2025-07-07T13:48:00",
        "to": "Pittsburgh (PIT)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N945DZ)",
        "status": "Departed 1:55 PM"
    },
    {
        "flight": "DL2529",
        "time": "2025-07-07T13:48:00",
        "to": "Panama City (ECP)",
        "airline": "Delta Air Lines",
        "aircraft": "B738 (N3745B)",
        "status": "Departed 2:06 PM"
    },
    {
        "flight": "DL2799",
        "time": "2025-07-07T13:50:00",
        "to": "Baltimore (BWI)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N367DN)",
        "status": "Departed 1:58 PM"
    },
    {
        "flight": "WN4159",
        "time": "2025-07-07T13:50:00",
        "to": "Nashville (BNA)",
        "airline": "Southwest Airlines",
        "aircraft": "B737 (N462WN)",
        "status": "Departed 5:48 PM"
    },
    {
        "flight": "DL3212",
        "time": "2025-07-07T13:51:00",
        "to": "Lexington (LEX)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N965AT)",
        "status": "Departed 2:04 PM"
    },
    {
        "flight": "DL2084",
        "time": "2025-07-07T13:52:00",
        "to": "Windsor Locks (BDL)",
        "airline": "Delta Air Lines",
        "aircraft": "A320 (N362NW)",
        "status": "Departed 3:06 PM"
    },
    {
        "flight": "DL1051",
        "time": "2025-07-07T13:53:00",
        "to": "Norfolk (ORF)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N891DN)",
        "status": "Departed 2:22 PM"
    },
    {
        "flight": "DL530",
        "time": "2025-07-07T13:55:00",
        "to": "Denver (DEN)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N372DN)",
        "status": "Departed 2:59 PM"
    },
    {
        "flight": "CI5254",
        "time": "2025-07-07T13:55:00",
        "to": "Dallas (DFW)",
        "airline": "China Airlines",
        "aircraft": "74Y",
        "status": "Unknown"
    },
    {
        "flight": "DL423",
        "time": "2025-07-07T13:55:00",
        "to": "Salt Lake City (SLC)",
        "airline": "Delta Air Lines",
        "aircraft": "A21N (N509DT)",
        "status": "Departed 2:07 PM"
    },
    {
        "flight": "DL838",
        "time": "2025-07-07T13:56:00",
        "to": "West Palm Beach (PBI)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N321DH)",
        "status": "Departed 2:01 PM"
    },
    {
        "flight": "DL1778",
        "time": "2025-07-07T13:56:00",
        "to": "Myrtle Beach (MYR)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N991AT)",
        "status": "Departed 2:01 PM"
    },
    {
        "flight": "DL481",
        "time": "2025-07-07T13:57:00",
        "to": "Seattle (SEA)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N873DN)",
        "status": "Departed 2:09 PM"
    },
    {
        "flight": "DL1720",
        "time": "2025-07-07T13:58:00",
        "to": "Tampa (TPA)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N548US)",
        "status": "Departed 4:54 PM"
    },
    {
        "flight": "DL2700",
        "time": "2025-07-07T13:59:00",
        "to": "St. Louis (STL)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N942DZ)",
        "status": "Departed 2:10 PM"
    },
    {
        "flight": "AC8570",
        "time": "2025-07-07T14:00:00",
        "to": "Montreal (YUL)",
        "airline": "Air Canada Express",
        "aircraft": "CRJ9 (C-GJFZ)",
        "status": "Departed 2:58 PM"
    },
    {
        "flight": "DL3150",
        "time": "2025-07-07T14:00:00",
        "to": "Savannah (SAV)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N884DN)",
        "status": "Departed 2:08 PM"
    },
    {
        "flight": "DL3209",
        "time": "2025-07-07T14:00:00",
        "to": "Baton Rouge (BTR)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N960AT)",
        "status": "Departed 2:11 PM"
    },
    {
        "flight": "DL5830",
        "time": "2025-07-07T14:00:00",
        "to": "Hilton Head Island (HHH)",
        "airline": "Delta Connection",
        "aircraft": "E170 (N860RW)",
        "status": "Departed 2:32 PM"
    },
    {
        "flight": "WN435",
        "time": "2025-07-07T14:00:00",
        "to": "New Orleans (MSY)",
        "airline": "Southwest Airlines",
        "aircraft": "B738 (N8526W)",
        "status": "Departed 2:15 PM"
    },
    {
        "flight": "",
        "time": "2025-07-07T14:00:00",
        "to": "Knoxville (TYS)",
        "airline": "-",
        "aircraft": "S22T (N311CE)",
        "status": "Departed 2:02 PM"
    },
    {
        "flight": "DL843",
        "time": "2025-07-07T14:01:00",
        "to": "San Diego (SAN)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N376DN)",
        "status": "Departed 2:46 PM"
    },
    {
        "flight": "DL2266",
        "time": "2025-07-07T14:01:00",
        "to": "Buffalo (BUF)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N339DN)",
        "status": "Departed 2:19 PM"
    },
    {
        "flight": "DL921",
        "time": "2025-07-07T14:03:00",
        "to": "Dallas (DFW)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N360DN)",
        "status": "Departed 2:08 PM"
    },
    {
        "flight": "DL1372",
        "time": "2025-07-07T14:05:00",
        "to": "Orlando (MCO)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N694DL)",
        "status": "Departed 3:22 PM"
    },
    {
        "flight": "WS1361",
        "time": "2025-07-07T14:05:00",
        "to": "Winnipeg (YWG)",
        "airline": "WestJet",
        "aircraft": "B737 (C-FKIW)",
        "status": "Departed 2:48 PM"
    },
    {
        "flight": "WN313",
        "time": "2025-07-07T14:05:00",
        "to": "Austin (AUS)",
        "airline": "Southwest Airlines",
        "aircraft": "B737 (N7879A)",
        "status": "Departed 2:44 PM"
    },
    {
        "flight": "DL512",
        "time": "2025-07-07T14:06:00",
        "to": "Dallas (DAL)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N892AT)",
        "status": "Departed 2:17 PM"
    },
    {
        "flight": "DL3952",
        "time": "2025-07-07T14:06:00",
        "to": "Lafayette (LFT)",
        "airline": "Delta Connection",
        "aircraft": "CRJ9 (N809SK)",
        "status": "Departed 2:18 PM"
    },
    {
        "flight": "DL1989",
        "time": "2025-07-07T14:07:00",
        "to": "Blountville (TRI)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N922AT)",
        "status": "Departed 2:14 PM"
    },
    {
        "flight": "NK2092",
        "time": "2025-07-07T14:07:00",
        "to": "Boston (BOS)",
        "airline": "Spirit Airlines",
        "aircraft": "A320 (N603NK)",
        "status": "Departed 2:44 PM"
    },
    {
        "flight": "DL726",
        "time": "2025-07-07T14:08:00",
        "to": "Boston (BOS)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N109DN)",
        "status": "Departed 2:38 PM"
    },
    {
        "flight": "DL1979",
        "time": "2025-07-07T14:08:00",
        "to": "San Antonio (SAT)",
        "airline": "Delta Air Lines",
        "aircraft": "A320 (N337NW)",
        "status": "Departed 2:16 PM"
    },
    {
        "flight": "DL3927",
        "time": "2025-07-07T14:08:00",
        "to": "Montgomery (MGM)",
        "airline": "American Eagle",
        "aircraft": "CRJ7 (N712SK)",
        "status": "Departed 2:37 PM"
    },
    {
        "flight": "DL1832",
        "time": "2025-07-07T14:09:00",
        "to": "Asheville (AVL)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N893AT)",
        "status": "Departed 2:17 PM"
    },
    {
        "flight": "WN418",
        "time": "2025-07-07T14:10:00",
        "to": "Kansas City (MCI)",
        "airline": "Southwest Airlines (Nevada One Livery)",
        "aircraft": "B738 (N8646B)",
        "status": "Departed 5:01 PM"
    },
    {
        "flight": "DL2496",
        "time": "2025-07-07T14:11:00",
        "to": "Philadelphia (PHL)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N392DN)",
        "status": "Departed 2:48 PM"
    },
    {
        "flight": "DL4860",
        "time": "2025-07-07T14:11:00",
        "to": "White Plains (HPN)",
        "airline": "Delta Connection",
        "aircraft": "CRJ9 (N605LR)",
        "status": "Departed 2:31 PM"
    },
    {
        "flight": "DL3134",
        "time": "2025-07-07T14:13:00",
        "to": "Indianapolis (IND)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N950DZ)",
        "status": "Departed 3:28 PM"
    },
    {
        "flight": "DL3928",
        "time": "2025-07-07T14:13:00",
        "to": "Augusta (AGS)",
        "airline": "Delta Connection",
        "aircraft": "CRJ7 (N776SK)",
        "status": "Departed 2:26 PM"
    },
    {
        "flight": "NK2561",
        "time": "2025-07-07T14:13:00",
        "to": "Fort Lauderdale (FLL)",
        "airline": "Spirit Airlines",
        "aircraft": "A321 (N679NK)",
        "status": "Departed 2:18 PM"
    },
    {
        "flight": "DL1109",
        "time": "2025-07-07T14:15:00",
        "to": "Albuquerque (ABQ)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N819DN)",
        "status": "Departed 2:26 PM"
    },
    {
        "flight": "DL2545",
        "time": "2025-07-07T14:18:00",
        "to": "Cleveland (CLE)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N946DZ)",
        "status": "Departed 2:27 PM"
    },
    {
        "flight": "DL1067",
        "time": "2025-07-07T14:20:00",
        "to": "Springfield (SGF)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N997AT)",
        "status": "Departed 2:31 PM"
    },
    {
        "flight": "DL2381",
        "time": "2025-07-07T14:20:00",
        "to": "Houston (HOU)",
        "airline": "Delta Air Lines",
        "aircraft": "A319 (N354NB)",
        "status": "Departed 2:24 PM"
    },
    {
        "flight": "WN1274",
        "time": "2025-07-07T14:20:00",
        "to": "Chicago (MDW)",
        "airline": "Southwest Airlines",
        "aircraft": "B737 (N200WN)",
        "status": "Departed 3:44 PM"
    },
    {
        "flight": "3S387",
        "time": "2025-07-07T14:20:00",
        "to": "Leipzig (LEJ)",
        "airline": "AeroLogic",
        "aircraft": "B77L (D-AALG)",
        "status": "Departed 3:42 PM"
    },
    {
        "flight": "DL1701",
        "time": "2025-07-07T14:21:00",
        "to": "Knoxville (TYS)",
        "airline": "Delta Air Lines (SkyTeam Livery)",
        "aircraft": "B738 (N381DN)",
        "status": "Departed 2:31 PM"
    },
    {
        "flight": "DL4886",
        "time": "2025-07-07T14:23:00",
        "to": "Bloomington (BMI)",
        "airline": "Delta Connection",
        "aircraft": "CRJ9 (N607LR)",
        "status": "Departed 2:29 PM"
    },
    {
        "flight": "F91403",
        "time": "2025-07-07T14:25:00",
        "to": "Houston (IAH)",
        "airline": "Frontier (Brazos the Ridgway's Hawk)",
        "aircraft": "A21N (N658FR)",
        "status": "Departed 2:40 PM"
    },
    {
        "flight": "AA3104",
        "time": "2025-07-07T14:26:00",
        "to": "Dallas (DFW)",
        "airline": "American Airlines",
        "aircraft": "A321 (N536UW)",
        "status": "Departed 2:32 PM"
    },
    {
        "flight": "DL2825",
        "time": "2025-07-07T14:26:00",
        "to": "Minneapolis (MSP)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N809DN)",
        "status": "Departed 2:35 PM"
    },
    {
        "flight": "DL524",
        "time": "2025-07-07T14:30:00",
        "to": "New York (LGA)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N383DZ)",
        "status": "Departed 3:19 PM"
    },
    {
        "flight": "DL1397",
        "time": "2025-07-07T14:30:00",
        "to": "Austin (AUS)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N863DN)",
        "status": "Departed 2:52 PM"
    },
    {
        "flight": "DL2200",
        "time": "2025-07-07T14:33:00",
        "to": "Columbus (CMH)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N938DZ)",
        "status": "Departed 2:43 PM"
    },
    {
        "flight": "DL4643",
        "time": "2025-07-07T14:33:00",
        "to": "Jackson (JAN)",
        "airline": "Delta Connection",
        "aircraft": "CRJ9 (N300PQ)",
        "status": "Departed 2:51 PM"
    },
    {
        "flight": "UA1831",
        "time": "2025-07-07T14:38:00",
        "to": "Washington (IAD)",
        "airline": "United Airlines",
        "aircraft": "B737 (N12754)",
        "status": "Departed 3:13 PM"
    },
    {
        "flight": "F91168",
        "time": "2025-07-07T14:39:00",
        "to": "Raleigh-Durham (RDU)",
        "airline": "Frontier (Abaco the Kirtland's Warbler Livery)",
        "aircraft": "A21N (N630FR)",
        "status": "Unknown"
    },
    {
        "flight": "DL1186",
        "time": "2025-07-07T14:41:00",
        "to": "Tulsa (TUL)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N919AT)",
        "status": "Departed 2:50 PM"
    },
    {
        "flight": "DL2312",
        "time": "2025-07-07T14:41:00",
        "to": "New York (EWR)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N874DN)",
        "status": "Canceled"
    },
    {
        "flight": "DL1739",
        "time": "2025-07-07T14:43:00",
        "to": "Chicago (MDW)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N926AT)",
        "status": "Departed 2:57 PM"
    },
    {
        "flight": "DL1386",
        "time": "2025-07-07T14:45:00",
        "to": "Miami (MIA)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N698DL)",
        "status": "Departed 3:49 PM"
    },
    {
        "flight": "DL1413",
        "time": "2025-07-07T14:45:00",
        "to": "Fort Lauderdale (FLL)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N688DL)",
        "status": "Departed 2:58 PM"
    },
    {
        "flight": "DL2388",
        "time": "2025-07-07T14:45:00",
        "to": "Chattanooga (CHA)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N953AT)",
        "status": "Departed 2:55 PM"
    },
    {
        "flight": "DL4033",
        "time": "2025-07-07T14:45:00",
        "to": "South Bend (SBN)",
        "airline": "Delta Connection",
        "aircraft": "CRJ9 (N833SK)",
        "status": "Departed 3:26 PM"
    },
    {
        "flight": "WN4051",
        "time": "2025-07-07T14:45:00",
        "to": "Dallas (DAL)",
        "airline": "Southwest Airlines",
        "aircraft": "B738 (N8327A)",
        "status": "Departed 3:10 PM"
    },
    {
        "flight": "F92634",
        "time": "2025-07-07T14:51:00",
        "to": "Baltimore (BWI)",
        "airline": "Frontier (Sammy the Squirrel Livery)",
        "aircraft": "A320 (N232FR)",
        "status": "Unknown"
    },
    {
        "flight": "DL1550",
        "time": "2025-07-07T14:52:00",
        "to": "Raleigh-Durham (RDU)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N943DZ)",
        "status": "Departed 3:14 PM"
    },
    {
        "flight": "DL1695",
        "time": "2025-07-07T14:52:00",
        "to": "Washington (IAD)",
        "airline": "Delta Air Lines",
        "aircraft": "A319 (N358NB)",
        "status": "Departed 3:09 PM"
    },
    {
        "flight": "DL2665",
        "time": "2025-07-07T14:54:00",
        "to": "Montreal (YUL)",
        "airline": "Delta Air Lines",
        "aircraft": "A319 (N326NB)",
        "status": "Departed 3:14 PM"
    },
    {
        "flight": "AM2693",
        "time": "2025-07-07T14:55:00",
        "to": "San Luis Potosi (SLP)",
        "airline": "Aeromexico Connect",
        "aircraft": "E190 (XA-AEP)",
        "status": "Departed 3:12 PM"
    },
    {
        "flight": "DL753",
        "time": "2025-07-07T14:55:00",
        "to": "Los Angeles (LAX)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N906DN)",
        "status": "Departed 3:09 PM"
    },
    {
        "flight": "DL1734",
        "time": "2025-07-07T14:55:00",
        "to": "Toronto (YYZ)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N342DN)",
        "status": "Departed 3:24 PM"
    },
    {
        "flight": "DL2539",
        "time": "2025-07-07T14:55:00",
        "to": "Greensboro (GSO)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N921AT)",
        "status": "Departed 3:00 PM"
    },
    {
        "flight": "WN236",
        "time": "2025-07-07T14:55:00",
        "to": "Nashville (BNA)",
        "airline": "Southwest Airlines",
        "aircraft": "B38M (N8847Q)",
        "status": "Departed 4:40 PM"
    },
    {
        "flight": "DL1013",
        "time": "2025-07-07T14:57:00",
        "to": "Pensacola (PNS)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N689DL)",
        "status": "Departed 3:07 PM"
    },
    {
        "flight": "DL2152",
        "time": "2025-07-07T14:57:00",
        "to": "Milwaukee (MKE)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N301DV)",
        "status": "Departed 3:05 PM"
    },
    {
        "flight": "DL1110",
        "time": "2025-07-07T14:59:00",
        "to": "Fort Myers (RSW)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N925DZ)",
        "status": "Departed 3:39 PM"
    },
    {
        "flight": "DL2058",
        "time": "2025-07-07T14:59:00",
        "to": "Grand Rapids (GRR)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N899DN)",
        "status": "Departed 3:11 PM"
    },
    {
        "flight": "DL2174",
        "time": "2025-07-07T14:59:00",
        "to": "Charleston (CHS)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N957DZ)",
        "status": "Departed 3:12 PM"
    },
    {
        "flight": "WUP901",
        "time": "2025-07-07T15:00:00",
        "to": "Marsh Harbour (MHH)",
        "airline": "Wheels Up",
        "aircraft": "C750 (N901UP)",
        "status": "Departed 3:52 PM"
    },
    {
        "flight": "DL278",
        "time": "2025-07-07T15:00:00",
        "to": "Naples (NAP)",
        "airline": "Delta Air Lines",
        "aircraft": "A332 (N852NW)",
        "status": "Departed 3:46 PM"
    },
    {
        "flight": "DL1810",
        "time": "2025-07-07T15:01:00",
        "to": "Birmingham (BHM)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N959DZ)",
        "status": "Departed 3:08 PM"
    },
    {
        "flight": "DL1150",
        "time": "2025-07-07T15:05:00",
        "to": "Orlando (MCO)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N555NW)",
        "status": "Departed 6:04 PM"
    },
    {
        "flight": "WN444",
        "time": "2025-07-07T15:05:00",
        "to": "Raleigh-Durham (RDU)",
        "airline": "Southwest Airlines",
        "aircraft": "B737 (N7876A)",
        "status": "Departed 5:09 PM"
    },
    {
        "flight": "NK2709",
        "time": "2025-07-07T15:07:00",
        "to": "New Orleans (MSY)",
        "airline": "Spirit Airlines",
        "aircraft": "A21N (N710NK)",
        "status": "Departed 4:14 PM"
    },
    {
        "flight": "8C3399",
        "time": "2025-07-07T15:07:00",
        "to": "Baltimore (BWI)",
        "airline": "Amazon Air",
        "aircraft": "B763 (N229AZ)",
        "status": "Departed 3:45 PM"
    },
    {
        "flight": "DL2595",
        "time": "2025-07-07T15:08:00",
        "to": "Boston (BOS)",
        "airline": "Delta Air Lines",
        "aircraft": "A21N (N517DN)",
        "status": "Departed 3:35 PM"
    },
    {
        "flight": "AM2711",
        "time": "2025-07-07T15:10:00",
        "to": "Queretaro (QRO)",
        "airline": "Aeromexico Connect",
        "aircraft": "E190 (XA-GAK)",
        "status": "Departed 3:18 PM"
    },
    {
        "flight": "F94809",
        "time": "2025-07-07T15:10:00",
        "to": "San Antonio (SAT)",
        "airline": "Frontier (Stretch the Great Blue Heron Livery)",
        "aircraft": "A20N (N334FR)",
        "status": "Departed 6:34 PM"
    },
    {
        "flight": "WN410",
        "time": "2025-07-07T15:10:00",
        "to": "New York (LGA)",
        "airline": "Southwest Airlines",
        "aircraft": "B737 (N7750A)",
        "status": "Departed 6:05 PM"
    },
    {
        "flight": "DL1005",
        "time": "2025-07-07T15:15:00",
        "to": "Detroit (DTW)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N381DZ)",
        "status": "Departed 5:12 PM"
    },
    {
        "flight": "DL1660",
        "time": "2025-07-07T15:15:00",
        "to": "Kansas City (MCI)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N948DZ)",
        "status": "Departed 3:32 PM"
    },
    {
        "flight": "DL2403",
        "time": "2025-07-07T15:15:00",
        "to": "Huntsville (HSV)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N982AT)",
        "status": "Departed 3:25 PM"
    },
    {
        "flight": "DL5128",
        "time": "2025-07-07T15:15:00",
        "to": "Bentonville (XNA)",
        "airline": "Delta Connection",
        "aircraft": "CRJ7 (N331CA)",
        "status": "Departed 3:23 PM"
    },
    {
        "flight": "DL5246",
        "time": "2025-07-07T15:15:00",
        "to": "Allentown (ABE)",
        "airline": "Delta Connection",
        "aircraft": "CRJ9 (N186GJ)",
        "status": "Departed 3:40 PM"
    },
    {
        "flight": "WN609",
        "time": "2025-07-07T15:15:00",
        "to": "San Antonio (SAT)",
        "airline": "Southwest Airlines (Imua One Livery)",
        "aircraft": "B38M (N8710M)",
        "status": "Departed 3:35 PM"
    },
    {
        "flight": "DL1169",
        "time": "2025-07-07T15:17:00",
        "to": "Philadelphia (PHL)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N825DN)",
        "status": "Departed 4:51 PM"
    },
    {
        "flight": "DL2047",
        "time": "2025-07-07T15:17:00",
        "to": "Rochester (ROC)",
        "airline": "Delta Air Lines",
        "aircraft": "A320 (N340NW)",
        "status": "Departed 3:30 PM"
    },
    {
        "flight": "DL759",
        "time": "2025-07-07T15:18:00",
        "to": "Tampa (TPA)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N699DL)",
        "status": "Departed 4:07 PM"
    },
    {
        "flight": "DL3115",
        "time": "2025-07-07T15:19:00",
        "to": "Sarasota (SRQ)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N932DZ)",
        "status": "Departed 3:32 PM"
    },
    {
        "flight": "DL70",
        "time": "2025-07-07T15:20:00",
        "to": "Amsterdam (AMS)",
        "airline": "Delta Air Lines",
        "aircraft": "A339 (N420DX)",
        "status": "Departed 3:43 PM"
    },
    {
        "flight": "DL1994",
        "time": "2025-07-07T15:20:00",
        "to": "Tallahassee (TLH)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N930AT)",
        "status": "Departed 3:59 PM"
    },
    {
        "flight": "DL2398",
        "time": "2025-07-07T15:20:00",
        "to": "New York (JFK)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N885DN)",
        "status": "Departed 4:09 PM"
    },
    {
        "flight": "DL5266",
        "time": "2025-07-07T15:20:00",
        "to": "Charlottesville (CHO)",
        "airline": "Delta Connection",
        "aircraft": "CRJ7 (N690CA)",
        "status": "Departed 5:21 PM"
    },
    {
        "flight": "DL374",
        "time": "2025-07-07T15:21:00",
        "to": "Dallas (DFW)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N311DN)",
        "status": "Departed 3:49 PM"
    },
    {
        "flight": "DL1839",
        "time": "2025-07-07T15:22:00",
        "to": "Providence (PVD)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N313DN)",
        "status": "Departed 4:01 PM"
    },
    {
        "flight": "NK2559",
        "time": "2025-07-07T15:22:00",
        "to": "Indianapolis (IND)",
        "airline": "Spirit Airlines",
        "aircraft": "A320 (N697NK)",
        "status": "Unknown"
    },
    {
        "flight": "DL488",
        "time": "2025-07-07T15:24:00",
        "to": "Portland (PWM)",
        "airline": "Delta Air Lines",
        "aircraft": "A320 (N350NA)",
        "status": "Departed 3:31 PM"
    },
    {
        "flight": "F93021",
        "time": "2025-07-07T15:24:00",
        "to": "Dallas (DFW)",
        "airline": "Frontier (Lone Star the Longhorn Steer Livery)",
        "aircraft": "A20N (N347FR)",
        "status": "Departed 6:49 PM"
    },
    {
        "flight": "DL1516",
        "time": "2025-07-07T15:25:00",
        "to": "Cincinnati (CVG)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N941DZ)",
        "status": "Departed 3:38 PM"
    },
    {
        "flight": "DL2862",
        "time": "2025-07-07T15:25:00",
        "to": "Oklahoma City (OKC)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N895AT)",
        "status": "Departed 3:45 PM"
    },
    {
        "flight": "AC7225",
        "time": "2025-07-07T15:25:00",
        "to": "Toronto (YYZ)",
        "airline": "Air Canada Cargo",
        "aircraft": "B763 (C-FPCA)",
        "status": "Departed 3:16 PM"
    },
    {
        "flight": "DL823",
        "time": "2025-07-07T15:26:00",
        "to": "San Francisco (SFO)",
        "airline": "Delta Air Lines",
        "aircraft": "B763 (N173DZ)",
        "status": "Departed 6:18 PM"
    },
    {
        "flight": "DL1347",
        "time": "2025-07-07T15:26:00",
        "to": "Little Rock (LIT)",
        "airline": "Delta Air Lines",
        "aircraft": "B738 (N377DE)",
        "status": "Departed 3:39 PM"
    },
    {
        "flight": "DL2599",
        "time": "2025-07-07T15:26:00",
        "to": "Madison (MSN)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N608AT)",
        "status": "Departed 3:36 PM"
    },
    {
        "flight": "DL5314",
        "time": "2025-07-07T15:26:00",
        "to": "Alexandria (AEX)",
        "airline": "Delta Connection",
        "aircraft": "CRJ9 (N913XJ)",
        "status": "Departed 4:10 PM"
    },
    {
        "flight": "NK2271",
        "time": "2025-07-07T15:27:00",
        "to": "Philadelphia (PHL)",
        "airline": "Spirit Airlines (Super Nintendo World Livery)",
        "aircraft": "A20N (N986NK)",
        "status": "Departed 5:37 PM"
    },
    {
        "flight": "DL2720",
        "time": "2025-07-07T15:28:00",
        "to": "Jacksonville (JAX)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N900PC)",
        "status": "Departed 3:55 PM"
    },
    {
        "flight": "DL2812",
        "time": "2025-07-07T15:28:00",
        "to": "Louisville (SDF)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N894AT)",
        "status": "Departed 3:39 PM"
    },
    {
        "flight": "DL880",
        "time": "2025-07-07T15:29:00",
        "to": "Cleveland (CLE)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N936DZ)",
        "status": "Departed 6:48 PM"
    },
    {
        "flight": "F94211",
        "time": "2025-07-07T15:29:00",
        "to": "Austin (AUS)",
        "airline": "Frontier (Choo the Pika Livery)",
        "aircraft": "A20N (N331FR)",
        "status": "Unknown"
    },
    {
        "flight": "DL433",
        "time": "2025-07-07T15:30:00",
        "to": "New York (LGA)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N380DN)",
        "status": "Departed 5:35 PM"
    },
    {
        "flight": "DL526",
        "time": "2025-07-07T15:30:00",
        "to": "Salt Lake City (SLC)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N348DN)",
        "status": "Departed 4:44 PM"
    },
    {
        "flight": "DL1700",
        "time": "2025-07-07T15:30:00",
        "to": "Memphis (MEM)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N947DZ)",
        "status": "Departed 4:07 PM"
    },
    {
        "flight": "UA516",
        "time": "2025-07-07T15:30:00",
        "to": "Chicago (ORD)",
        "airline": "United Airlines",
        "aircraft": "B737 (N17752)",
        "status": "Departed 3:46 PM"
    },
    {
        "flight": "K4243",
        "time": "2025-07-07T15:30:00",
        "to": "Miami (MIA)",
        "airline": "DHL",
        "aircraft": "B77L (N774CK)",
        "status": "Departed 4:10 PM"
    },
    {
        "flight": "SGX715",
        "time": "2025-07-07T15:30:00",
        "to": "Austin (AUS)",
        "airline": "Slate Aviation",
        "aircraft": "CRJ1 (N715AV)",
        "status": "Departed 5:05 PM"
    },
    {
        "flight": "EJA449",
        "time": "2025-07-07T15:30:00",
        "to": "Asheville (AVL)",
        "airline": "NetJets",
        "aircraft": "E55P (N449QS)",
        "status": "Departed 4:11 PM"
    },
    {
        "flight": "DL981",
        "time": "2025-07-07T15:31:00",
        "to": "Bogota (BOG)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N693DL)",
        "status": "Departed 5:30 PM"
    },
    {
        "flight": "DL1267",
        "time": "2025-07-07T15:32:00",
        "to": "Baltimore (BWI)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N820DX)",
        "status": "Departed 5:02 PM"
    },
    {
        "flight": "DL2329",
        "time": "2025-07-07T15:32:00",
        "to": "Norfolk (ORF)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N326DN)",
        "status": "Departed 5:17 PM"
    },
    {
        "flight": "DL1458",
        "time": "2025-07-07T15:33:00",
        "to": "West Palm Beach (PBI)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N363DN)",
        "status": "Departed 4:02 PM"
    },
    {
        "flight": "DL2892",
        "time": "2025-07-07T15:33:00",
        "to": "Columbus (CMH)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N933DZ)",
        "status": "Departed 3:42 PM"
    },
    {
        "flight": "AA621",
        "time": "2025-07-07T15:34:00",
        "to": "Philadelphia (PHL)",
        "airline": "American Airlines",
        "aircraft": "A319 (N758US)",
        "status": "Estimated dep. 11:50 PM"
    },
    {
        "flight": "DL82",
        "time": "2025-07-07T15:35:00",
        "to": "Paris (CDG)",
        "airline": "Delta Air Lines",
        "aircraft": "A333 (N804NW)",
        "status": "Departed 4:03 PM"
    },
    {
        "flight": "DL850",
        "time": "2025-07-07T15:35:00",
        "to": "Washington (DCA)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N117DX)",
        "status": "Departed 6:37 PM"
    },
    {
        "flight": "DL2690",
        "time": "2025-07-07T15:35:00",
        "to": "Syracuse (SYR)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N331DN)",
        "status": "Departed 4:05 PM"
    },
    {
        "flight": "DL3564",
        "time": "2025-07-07T15:35:00",
        "to": "Fort Wayne (FWA)",
        "airline": "Delta Connection",
        "aircraft": "CRJ9 (N548CA)",
        "status": "Departed 4:20 PM"
    },
    {
        "flight": "F92298",
        "time": "2025-07-07T15:35:00",
        "to": "Philadelphia (PHL)",
        "airline": "Frontier (D&A the Hispaniolan Parakeets Livery)",
        "aircraft": "A21N (N635FR)",
        "status": "Departed 5:08 PM"
    },
    {
        "flight": "DL1771",
        "time": "2025-07-07T15:36:00",
        "to": "New Orleans (MSY)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N869DN)",
        "status": "Departed 4:22 PM"
    },
    {
        "flight": "DL5013",
        "time": "2025-07-07T15:38:00",
        "to": "White Plains (HPN)",
        "airline": "Delta Connection",
        "aircraft": "CRJ9 (N491PX)",
        "status": "Departed 3:50 PM"
    },
    {
        "flight": "DL151",
        "time": "2025-07-07T15:40:00",
        "to": "Lima (LIM)",
        "airline": "Delta Air Lines",
        "aircraft": "A359 (N570DZ)",
        "status": "Departed 4:43 PM"
    },
    {
        "flight": "DL416",
        "time": "2025-07-07T15:40:00",
        "to": "Anchorage (ANC)",
        "airline": "Delta Air Lines",
        "aircraft": "B763 (N169DZ)",
        "status": "Departed 4:15 PM"
    },
    {
        "flight": "DL2168",
        "time": "2025-07-07T15:40:00",
        "to": "Key West (EYW)",
        "airline": "Delta Air Lines",
        "aircraft": "A319 (N362NB)",
        "status": "Departed 4:45 PM"
    },
    {
        "flight": "WN1469",
        "time": "2025-07-07T15:40:00",
        "to": "St. Louis (STL)",
        "airline": "Southwest Airlines",
        "aircraft": "B737 (N949WN)",
        "status": "Departed 5:10 PM"
    },
    {
        "flight": "DL2857",
        "time": "2025-07-07T15:41:00",
        "to": "Harrisburg (MDT)",
        "airline": "Delta Air Lines",
        "aircraft": "A320 (N319US)",
        "status": "Departed 4:41 PM"
    },
    {
        "flight": "DL1465",
        "time": "2025-07-07T15:42:00",
        "to": "San Antonio (SAT)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N119DN)",
        "status": "Departed 4:17 PM"
    },
    {
        "flight": "DL2340",
        "time": "2025-07-07T15:42:00",
        "to": "New York (EWR)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N889DN)",
        "status": "Canceled"
    },
    {
        "flight": "F93976",
        "time": "2025-07-07T15:42:00",
        "to": "Orlando (MCO)",
        "airline": "Frontier (Wellington the Black-footed Ferret)",
        "aircraft": "A20N (N362FR)",
        "status": "Departed 6:59 PM"
    },
    {
        "flight": "DL3016",
        "time": "2025-07-07T15:43:00",
        "to": "Wilmington (ILM)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N936AT)",
        "status": "Departed 3:58 PM"
    },
    {
        "flight": "DL2598",
        "time": "2025-07-07T15:44:00",
        "to": "St. Louis (STL)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N952DZ)",
        "status": "Departed 4:54 PM"
    },
    {
        "flight": "DL1491",
        "time": "2025-07-07T15:45:00",
        "to": "Austin (AUS)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N358DN)",
        "status": "Departed 5:28 PM"
    },
    {
        "flight": "DL2345",
        "time": "2025-07-07T15:45:00",
        "to": "Fort Lauderdale (FLL)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N544US)",
        "status": "Departed 4:05 PM"
    },
    {
        "flight": "DL2981",
        "time": "2025-07-07T15:45:00",
        "to": "Minneapolis (MSP)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N821DN)",
        "status": "Departed 4:45 PM"
    },
    {
        "flight": "DL3032",
        "time": "2025-07-07T15:45:00",
        "to": "Columbia (CAE)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N955AT)",
        "status": "Departed 5:11 PM"
    },
    {
        "flight": "DL633",
        "time": "2025-07-07T15:46:00",
        "to": "Quito (UIO)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N549US)",
        "status": "Departed 5:03 PM"
    },
    {
        "flight": "DL3095",
        "time": "2025-07-07T15:46:00",
        "to": "Greenville-Spartanburg (GSP)",
        "airline": "Delta Air Lines",
        "aircraft": "A319 (N343NB)",
        "status": "Departed 4:06 PM"
    },
    {
        "flight": "DL1683",
        "time": "2025-07-07T15:47:00",
        "to": "Nashville (BNA)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N958DZ)",
        "status": "Departed 5:20 PM"
    },
    {
        "flight": "DL4958",
        "time": "2025-07-07T15:47:00",
        "to": "Moline (MLI)",
        "airline": "Delta Connection",
        "aircraft": "CRJ9 (N315PQ)",
        "status": "Departed 4:57 PM"
    },
    {
        "flight": "AS475",
        "time": "2025-07-07T15:47:00",
        "to": "San Diego (SAN)",
        "airline": "Alaska Airlines",
        "aircraft": "B39M (N705AL)",
        "status": "Departed 5:11 PM"
    },
    {
        "flight": "DL2738",
        "time": "2025-07-07T15:48:00",
        "to": "Chicago (ORD)",
        "airline": "Delta Air Lines",
        "aircraft": "B738 (N3736C)",
        "status": "Departed 5:09 PM"
    },
    {
        "flight": "DL1568",
        "time": "2025-07-07T15:49:00",
        "to": "Pittsburgh (PIT)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N940DU)",
        "status": "Departed 4:47 PM"
    },
    {
        "flight": "DL2113",
        "time": "2025-07-07T15:49:00",
        "to": "Houston (IAH)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N309DN)",
        "status": "Departed 5:03 PM"
    },
    {
        "flight": "DL659",
        "time": "2025-07-07T15:50:00",
        "to": "Las Vegas (LAS)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N557NW)",
        "status": "Departed 4:49 PM"
    },
    {
        "flight": "WN385",
        "time": "2025-07-07T15:50:00",
        "to": "Houston (HOU)",
        "airline": "Southwest Airlines",
        "aircraft": "B737 (N480WN)",
        "status": "Departed 5:07 PM"
    },
    {
        "flight": "DL2735",
        "time": "2025-07-07T15:51:00",
        "to": "Windsor Locks (BDL)",
        "airline": "Delta Air Lines",
        "aircraft": "A320 (N355NW)",
        "status": "Departed 5:05 PM"
    },
    {
        "flight": "NK2347",
        "time": "2025-07-07T15:51:00",
        "to": "Minneapolis (MSP)",
        "airline": "Spirit Airlines",
        "aircraft": "A21N (N741NK)",
        "status": "Departed 5:14 PM"
    },
    {
        "flight": "DL3211",
        "time": "2025-07-07T15:53:00",
        "to": "Lexington (LEX)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N998AT)",
        "status": "Departed 4:48 PM"
    },
    {
        "flight": "DL2803",
        "time": "2025-07-07T15:55:00",
        "to": "Destin Fort Walton Beach (VPS)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N967AT)",
        "status": "Departed 4:41 PM"
    },
    {
        "flight": "DL3758",
        "time": "2025-07-07T15:55:00",
        "to": "Shreveport (SHV)",
        "airline": "Delta Connection",
        "aircraft": "CRJ9 (N816SK)",
        "status": "Departed 4:47 PM"
    },
    {
        "flight": "UA6059",
        "time": "2025-07-07T15:57:00",
        "to": "Houston (IAH)",
        "airline": "United Express",
        "aircraft": "E75L (N86309)",
        "status": "Departed 4:51 PM"
    },
    {
        "flight": "DL2135",
        "time": "2025-07-07T15:59:00",
        "to": "Charlotte (CLT)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N923AT)",
        "status": "Departed 5:06 PM"
    },
    {
        "flight": "DL3094",
        "time": "2025-07-07T15:59:00",
        "to": "Panama City (ECP)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N906AT)",
        "status": "Departed 4:48 PM"
    },
    {
        "flight": "DL1649",
        "time": "2025-07-07T16:00:00",
        "to": "Charleston (CHS)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N934DZ)",
        "status": "Departed 5:04 PM"
    },
    {
        "flight": "F93724",
        "time": "2025-07-07T16:01:00",
        "to": "West Palm Beach (PBI)",
        "airline": "Frontier (Lewis the Greater Sage-Grouse Livery)",
        "aircraft": "A20N (N378FR)",
        "status": "Departed 4:56 PM"
    },
    {
        "flight": "AA5067",
        "time": "2025-07-07T16:01:00",
        "to": "Charlotte (CLT)",
        "airline": "American Eagle",
        "aircraft": "CRJ9 (N557NN)",
        "status": "Departed 4:53 PM"
    },
    {
        "flight": "DL3158",
        "time": "2025-07-07T16:03:00",
        "to": "Richmond (RIC)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N673DL)",
        "status": "Departed 4:59 PM"
    },
    {
        "flight": "DL5180",
        "time": "2025-07-07T16:03:00",
        "to": "Brunswick (BQK)",
        "airline": "Delta Connection",
        "aircraft": "CRJ7 (N354CA)",
        "status": "Departed 5:10 PM"
    },
    {
        "flight": "DL296",
        "time": "2025-07-07T16:05:00",
        "to": "Athens (ATH)",
        "airline": "Delta Air Lines",
        "aircraft": "A339 (N401DZ)",
        "status": "Departed 5:00 PM"
    },
    {
        "flight": "DL1742",
        "time": "2025-07-07T16:05:00",
        "to": "Orlando (MCO)",
        "airline": "Delta Air Lines",
        "aircraft": "B753 (N583NW)",
        "status": "Departed 7:07 PM"
    },
    {
        "flight": "DL1895",
        "time": "2025-07-07T16:05:00",
        "to": "Albany (ALB)",
        "airline": "Delta Air Lines",
        "aircraft": "A320 (N373NW)",
        "status": "Departed 5:02 PM"
    },
    {
        "flight": "DL2364",
        "time": "2025-07-07T16:05:00",
        "to": "Omaha (OMA)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N988AT)",
        "status": "Departed 4:50 PM"
    },
    {
        "flight": "LH445",
        "time": "2025-07-07T16:05:00",
        "to": "Frankfurt (FRA)",
        "airline": "Lufthansa",
        "aircraft": "A333 (D-AIKR)",
        "status": "Departed 4:58 PM"
    },
    {
        "flight": "AC1308",
        "time": "2025-07-07T16:05:00",
        "to": "Toronto (YYZ)",
        "airline": "Air Canada",
        "aircraft": "BCS3 (C-GNGV)",
        "status": "Unknown"
    },
    {
        "flight": "AA2221",
        "time": "2025-07-07T16:09:00",
        "to": "Los Angeles (LAX)",
        "airline": "American Airlines",
        "aircraft": "A321 (N554UW)",
        "status": "Departed 4:59 PM"
    },
    {
        "flight": "UA555",
        "time": "2025-07-07T16:09:00",
        "to": "New York (EWR)",
        "airline": "United Airlines",
        "aircraft": "B739 (N73445)",
        "status": "Estimated dep. 9:45 PM"
    },
    {
        "flight": "AM979",
        "time": "2025-07-07T16:10:00",
        "to": "Monterrey (MTY)",
        "airline": "Aeromexico Connect",
        "aircraft": "E190 (XA-GAH)",
        "status": "Departed 5:13 PM"
    },
    {
        "flight": "DL5537",
        "time": "2025-07-07T16:10:00",
        "to": "Augusta (AGS)",
        "airline": "Delta Connection",
        "aircraft": "CRJ9 (N691CA)",
        "status": "Departed 6:01 PM"
    },
    {
        "flight": "DL1783",
        "time": "2025-07-07T16:11:00",
        "to": "Indianapolis (IND)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N956DZ)",
        "status": "Departed 5:06 PM"
    },
    {
        "flight": "DL5529",
        "time": "2025-07-07T16:11:00",
        "to": "Lafayette (LFT)",
        "airline": "Delta Connection",
        "aircraft": "CRJ9 (N136EV)",
        "status": "Departed 5:19 PM"
    },
    {
        "flight": "DL1323",
        "time": "2025-07-07T16:13:00",
        "to": "Miami (MIA)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N685DA)",
        "status": "Departed 6:46 PM"
    },
    {
        "flight": "DL1972",
        "time": "2025-07-07T16:13:00",
        "to": "Knoxville (TYS)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N963AT)",
        "status": "Departed 5:16 PM"
    },
    {
        "flight": "DL214",
        "time": "2025-07-07T16:15:00",
        "to": "Rome (FCO)",
        "airline": "Delta Air Lines",
        "aircraft": "A359 (N569DZ)",
        "status": "Departed 5:13 PM"
    },
    {
        "flight": "WN484",
        "time": "2025-07-07T16:15:00",
        "to": "Chicago (MDW)",
        "airline": "Southwest Airlines",
        "aircraft": "B738 (N8577Z)",
        "status": "Departed 5:15 PM"
    },
    {
        "flight": "UA235",
        "time": "2025-07-07T16:16:00",
        "to": "Denver (DEN)",
        "airline": "United Airlines",
        "aircraft": "A320 (N471UA)",
        "status": "Departed 5:21 PM"
    },
    {
        "flight": "DL270",
        "time": "2025-07-07T16:20:00",
        "to": "Barcelona (BCN)",
        "airline": "Delta Air Lines",
        "aircraft": "B763 (N1602)",
        "status": "Departed 5:48 PM"
    },
    {
        "flight": "DL4993",
        "time": "2025-07-07T16:20:00",
        "to": "Valdosta (VLD)",
        "airline": "Delta Connection",
        "aircraft": "CRJ9 (N133EV)",
        "status": "Canceled"
    },
    {
        "flight": "DL1329",
        "time": "2025-07-07T16:21:00",
        "to": "Philadelphia (PHL)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N314DN)",
        "status": "Departed 6:51 PM"
    },
    {
        "flight": "DL472",
        "time": "2025-07-07T16:25:00",
        "to": "Seattle (SEA)",
        "airline": "Delta Air Lines",
        "aircraft": "B753 (N581NW)",
        "status": "Departed 5:26 PM"
    },
    {
        "flight": "DL924",
        "time": "2025-07-07T16:25:00",
        "to": "San Diego (SAN)",
        "airline": "Delta Air Lines",
        "aircraft": "B753 (N589NW)",
        "status": "Departed 5:36 PM"
    },
    {
        "flight": "DL1425",
        "time": "2025-07-07T16:25:00",
        "to": "Tampa (TPA)",
        "airline": "Delta Air Lines",
        "aircraft": "B763 (N192DN)",
        "status": "Departed 5:33 PM"
    },
    {
        "flight": "DL1470",
        "time": "2025-07-07T16:25:00",
        "to": "Kansas City (MCI)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N937DZ)",
        "status": "Departed 5:30 PM"
    },
    {
        "flight": "DL1791",
        "time": "2025-07-07T16:25:00",
        "to": "San Juan (SJU)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N6705Y)",
        "status": "Departed 5:54 PM"
    },
    {
        "flight": "DL2600",
        "time": "2025-07-07T16:25:00",
        "to": "Raleigh-Durham (RDU)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N819DX)",
        "status": "Departed 6:45 PM"
    },
    {
        "flight": "F92912",
        "time": "2025-07-07T16:25:00",
        "to": "Tampa (TPA)",
        "airline": "Frontier (Baja the Whale Shark Livery)",
        "aircraft": "A20N (N342FR)",
        "status": "Departed 6:21 PM"
    },
    {
        "flight": "DL1905",
        "time": "2025-07-07T16:28:00",
        "to": "Panama City (PTY)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N803DN)",
        "status": "Departed 6:23 PM"
    },
    {
        "flight": "DL2128",
        "time": "2025-07-07T16:29:00",
        "to": "Wichita (ICT)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N989AT)",
        "status": "Departed 5:34 PM"
    },
    {
        "flight": "AF31",
        "time": "2025-07-07T16:30:00",
        "to": "Paris (CDG)",
        "airline": "Air France",
        "aircraft": "B772 (F-GSPA)",
        "status": "Departed 5:26 PM"
    },
    {
        "flight": "DL2214",
        "time": "2025-07-07T16:30:00",
        "to": "Nashville (BNA)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N811DZ)",
        "status": "Departed 5:42 PM"
    },
    {
        "flight": "DL1681",
        "time": "2025-07-07T16:31:00",
        "to": "Memphis (MEM)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N951DX)",
        "status": "Departed 5:24 PM"
    },
    {
        "flight": "NK2460",
        "time": "2025-07-07T16:32:00",
        "to": "Orlando (MCO)",
        "airline": "Spirit Airlines",
        "aircraft": "A21N (N730NK)",
        "status": "Unknown"
    },
    {
        "flight": "DL5185",
        "time": "2025-07-07T16:33:00",
        "to": "Monroe (MLU)",
        "airline": "Delta Connection",
        "aircraft": "CRJ9 (N133EV)",
        "status": "Estimated dep. 9:45 PM"
    },
    {
        "flight": "AA3299",
        "time": "2025-07-07T16:34:00",
        "to": "Chicago (ORD)",
        "airline": "American Airlines",
        "aircraft": "A319 (N824AW)",
        "status": "Estimated dep. 9:15 PM"
    },
    {
        "flight": "F94874",
        "time": "2025-07-07T16:34:00",
        "to": "Fort Lauderdale (FLL)",
        "airline": "Frontier(Savannah the Yellow-Headed Amazon Livery)",
        "aircraft": "A21N (N636FR)",
        "status": "Departed 5:40 PM"
    },
    {
        "flight": "AA1008",
        "time": "2025-07-07T16:35:00",
        "to": "Dallas (DFW)",
        "airline": "American Airlines",
        "aircraft": "A21N (N438AN)",
        "status": "Departed 6:46 PM"
    },
    {
        "flight": "DL2780",
        "time": "2025-07-07T16:36:00",
        "to": "Dallas (DAL)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N946AT)",
        "status": "Departed 5:17 PM"
    },
    {
        "flight": "DL2050",
        "time": "2025-07-07T16:37:00",
        "to": "Buffalo (BUF)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N357DN)",
        "status": "Unknown"
    },
    {
        "flight": "DL2466",
        "time": "2025-07-07T16:40:00",
        "to": "New York (JFK)",
        "airline": "Delta Air Lines",
        "aircraft": "B763 (N171DZ)",
        "status": "Unknown"
    },
    {
        "flight": "DL3965",
        "time": "2025-07-07T16:40:00",
        "to": "Albany (ABY)",
        "airline": "Delta Connection",
        "aircraft": "CRJ9 (N822SK)",
        "status": "Departed 5:30 PM"
    },
    {
        "flight": "DL2314",
        "time": "2025-07-07T16:40:00",
        "to": "Greensboro (GSO)",
        "airline": "Delta Air Lines",
        "aircraft": "A319 (N315NB)",
        "status": "Unknown"
    },
    {
        "flight": "DL1173",
        "time": "2025-07-07T16:43:00",
        "to": "Milwaukee (MKE)",
        "airline": "Delta Air Lines",
        "aircraft": "B738 (N3735D)",
        "status": "Departed 7:22 PM"
    },
    {
        "flight": "DL1254",
        "time": "2025-07-07T16:44:00",
        "to": "Houston (HOU)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N994AT)",
        "status": "Departed 6:07 PM"
    },
    {
        "flight": "DL301",
        "time": "2025-07-07T16:45:00",
        "to": "Los Angeles (LAX)",
        "airline": "Delta Air Lines",
        "aircraft": "B763 (N194DN)",
        "status": "Departed 6:23 PM"
    },
    {
        "flight": "DL1295",
        "time": "2025-07-07T16:45:00",
        "to": "Fort Lauderdale (FLL)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N669DN)",
        "status": "Departed 6:45 PM"
    },
    {
        "flight": "DL2654",
        "time": "2025-07-07T16:45:00",
        "to": "Minneapolis (MSP)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N822DX)",
        "status": "Departed 5:32 PM"
    },
    {
        "flight": "DL3043",
        "time": "2025-07-07T16:45:00",
        "to": "Melbourne (MLB)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N986AT)",
        "status": "Departed 5:37 PM"
    },
    {
        "flight": "DL2211",
        "time": "2025-07-07T16:46:00",
        "to": "Pensacola (PNS)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N949DZ)",
        "status": "Departed 5:46 PM"
    },
    {
        "flight": "DL950",
        "time": "2025-07-07T16:47:00",
        "to": "Washington (DCA)",
        "airline": "Delta Air Lines",
        "aircraft": "A320 (N339NW)",
        "status": "Departed 7:03 PM"
    },
    {
        "flight": "DL2086",
        "time": "2025-07-07T16:47:00",
        "to": "Des Moines (DSM)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N961AT)",
        "status": "Departed 5:52 PM"
    },
    {
        "flight": "DL517",
        "time": "2025-07-07T16:48:00",
        "to": "San Francisco (SFO)",
        "airline": "Delta Air Lines",
        "aircraft": "B753 (N586NW)",
        "status": "Departed 5:44 PM"
    },
    {
        "flight": "DL54",
        "time": "2025-07-07T16:50:00",
        "to": "Lagos (LOS)",
        "airline": "Delta Air Lines",
        "aircraft": "A332 (N854NW)",
        "status": "Departed 6:08 PM"
    },
    {
        "flight": "DL1687",
        "time": "2025-07-07T16:50:00",
        "to": "Washington (IAD)",
        "airline": "Delta Air Lines",
        "aircraft": "BCS3 (N332DU)",
        "status": "Departed 5:51 PM"
    },
    {
        "flight": "DL1821",
        "time": "2025-07-07T16:50:00",
        "to": "Jackson (JAN)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N896AT)",
        "status": "Departed 6:09 PM"
    },
    {
        "flight": "DL2067",
        "time": "2025-07-07T16:50:00",
        "to": "Detroit (DTW)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N658DL)",
        "status": "Departed 6:41 PM"
    },
    {
        "flight": "DL2627",
        "time": "2025-07-07T16:50:00",
        "to": "Jacksonville (JAX)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N374DX)",
        "status": "Departed 5:25 PM"
    },
    {
        "flight": "DL4863",
        "time": "2025-07-07T16:50:00",
        "to": "Evansville (EVV)",
        "airline": "Delta Connection",
        "aircraft": "CRJ9 (N907XJ)",
        "status": "Departed 5:38 PM"
    },
    {
        "flight": "DL1937",
        "time": "2025-07-07T16:52:00",
        "to": "Mobile (MOB)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N979AT)",
        "status": "Departed 5:40 PM"
    },
    {
        "flight": "NK2173",
        "time": "2025-07-07T16:52:00",
        "to": "Houston (IAH)",
        "airline": "Spirit Airlines",
        "aircraft": "A320 (N629NK)",
        "status": "Departed 7:01 PM"
    },
    {
        "flight": "DL519",
        "time": "2025-07-07T16:53:00",
        "to": "Denver (DEN)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N127DN)",
        "status": "Departed 6:00 PM"
    },
    {
        "flight": "DL2928",
        "time": "2025-07-07T16:53:00",
        "to": "Baltimore (BWI)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N6712B)",
        "status": "Departed 7:24 PM"
    },
    {
        "flight": "DL5350",
        "time": "2025-07-07T16:53:00",
        "to": "Charleston (CRW)",
        "airline": "Delta Connection",
        "aircraft": "CRJ7 (N669CA)",
        "status": "Departed 6:20 PM"
    },
    {
        "flight": "DL3218",
        "time": "2025-07-07T16:55:00",
        "to": "Savannah (SAV)",
        "airline": "Delta Air Lines",
        "aircraft": "B738 (N397DA)",
        "status": "Departed 6:49 PM"
    },
    {
        "flight": "5Y8853",
        "time": "2025-07-07T16:55:00",
        "to": "Anchorage (ANC)",
        "airline": "Atlas Air",
        "aircraft": "74F",
        "status": "Unknown"
    },
    {
        "flight": "DL518",
        "time": "2025-07-07T16:56:00",
        "to": "Boston (BOS)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N308DN)",
        "status": "Departed 5:20 PM"
    },
    {
        "flight": "DL3101",
        "time": "2025-07-07T16:56:00",
        "to": "Asheville (AVL)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N974AT)",
        "status": "Departed 6:17 PM"
    },
    {
        "flight": "DL2285",
        "time": "2025-07-07T16:57:00",
        "to": "Daytona Beach (DAB)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N929AT)",
        "status": "Departed 5:41 PM"
    },
    {
        "flight": "DL1539",
        "time": "2025-07-07T16:58:00",
        "to": "Tulsa (TUL)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N935AT)",
        "status": "Departed 6:14 PM"
    },
    {
        "flight": "DL503",
        "time": "2025-07-07T16:59:00",
        "to": "Portland (PDX)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N849DN)",
        "status": "Departed 6:05 PM"
    },
    {
        "flight": "DL836",
        "time": "2025-07-07T16:59:00",
        "to": "Phoenix (PHX)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N6703D)",
        "status": "Departed 6:30 PM"
    },
    {
        "flight": "DL959",
        "time": "2025-07-07T16:59:00",
        "to": "West Palm Beach (PBI)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N362DN)",
        "status": "Departed 5:57 PM"
    },
    {
        "flight": "DL2379",
        "time": "2025-07-07T16:59:00",
        "to": "Chattanooga (CHA)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N943AT)",
        "status": "Departed 5:56 PM"
    },
    {
        "flight": "DL3088",
        "time": "2025-07-07T16:59:00",
        "to": "Dayton (DAY)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N607AT)",
        "status": "Departed 6:14 PM"
    },
    {
        "flight": "AA3932",
        "time": "2025-07-07T16:59:00",
        "to": "Washington (DCA)",
        "airline": "American Eagle",
        "aircraft": "E75L (N282NN)",
        "status": "Departed 6:11 PM"
    },
    {
        "flight": "AM2709",
        "time": "2025-07-07T17:00:00",
        "to": "Silao (BJX)",
        "airline": "Aeromexico Connect",
        "aircraft": "E190 (XA-DAC)",
        "status": "Departed 5:50 PM"
    },
    {
        "flight": "DL997",
        "time": "2025-07-07T17:00:00",
        "to": "New York (LGA)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N120DN)",
        "status": "Estimated dep. 10:14 PM"
    },
    {
        "flight": "DL1488",
        "time": "2025-07-07T17:00:00",
        "to": "Fort Myers (RSW)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N697DL)",
        "status": "Departed 5:32 PM"
    },
    {
        "flight": "DL2060",
        "time": "2025-07-07T17:01:00",
        "to": "Chicago (MDW)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N995AT)",
        "status": "Departed 5:54 PM"
    },
    {
        "flight": "DL5374",
        "time": "2025-07-07T17:01:00",
        "to": "Columbus (CSG)",
        "airline": "Delta Connection",
        "aircraft": "CRJ7 (N371CA)",
        "status": "Departed 5:38 PM"
    },
    {
        "flight": "DL1348",
        "time": "2025-07-07T17:03:00",
        "to": "Richmond (RIC)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N955DZ)",
        "status": "Departed 6:53 PM"
    },
    {
        "flight": "DL3143",
        "time": "2025-07-07T17:03:00",
        "to": "Charlotte (CLT)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N6714Q)",
        "status": "Estimated dep. 10:00 PM"
    },
    {
        "flight": "DL1693",
        "time": "2025-07-07T17:04:00",
        "to": "Nashville (BNA)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N824DN)",
        "status": "Departed 6:02 PM"
    },
    {
        "flight": "DL90",
        "time": "2025-07-07T17:05:00",
        "to": "Zurich (ZRH)",
        "airline": "Delta Air Lines",
        "aircraft": "B763 (N198DN)",
        "status": "Canceled"
    },
    {
        "flight": "DL222",
        "time": "2025-07-07T17:05:00",
        "to": "Athens (ATH)",
        "airline": "Delta Air Lines (Team USA Livery)",
        "aircraft": "A339 (N411DX)",
        "status": "Departed 6:34 PM"
    },
    {
        "flight": "DL1350",
        "time": "2025-07-07T17:05:00",
        "to": "Cleveland (CLE)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N911DQ)",
        "status": "Departed 5:45 PM"
    },
    {
        "flight": "DL1497",
        "time": "2025-07-07T17:05:00",
        "to": "Orlando (MCO)",
        "airline": "Delta Air Lines",
        "aircraft": "B753 (N592NW)",
        "status": "Estimated dep. 10:00 PM"
    },
    {
        "flight": "DL585",
        "time": "2025-07-07T17:08:00",
        "to": "Mexico City (MEX)",
        "airline": "Delta Air Lines",
        "aircraft": "B738 (N386DA)",
        "status": "Departed 6:37 PM"
    },
    {
        "flight": "DL3075",
        "time": "2025-07-07T17:10:00",
        "to": "Gainesville (GNV)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N980AT)",
        "status": "Departed 5:35 PM"
    },
    {
        "flight": "DL1346",
        "time": "2025-07-07T17:14:00",
        "to": "Norfolk (ORF)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N6716C)",
        "status": "Departed 6:24 PM"
    },
    {
        "flight": "DL130",
        "time": "2025-07-07T17:15:00",
        "to": "Munich (MUC)",
        "airline": "Delta Air Lines",
        "aircraft": "B764 (N839MH)",
        "status": "Estimated dep. 10:00 PM"
    },
    {
        "flight": "DL1060",
        "time": "2025-07-07T17:15:00",
        "to": "Austin (AUS)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N315DN)",
        "status": "Departed 6:16 PM"
    },
    {
        "flight": "DL436",
        "time": "2025-07-07T17:18:00",
        "to": "Dallas (DFW)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N305DN)",
        "status": "Departed 6:39 PM"
    },
    {
        "flight": "DL1530",
        "time": "2025-07-07T17:18:00",
        "to": "Springfield (SGF)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N933AT)",
        "status": "Estimated dep. 10:00 PM"
    },
    {
        "flight": "DL1852",
        "time": "2025-07-07T17:18:00",
        "to": "Fayetteville (FAY)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N985AT)",
        "status": "Departed 6:54 PM"
    },
    {
        "flight": "DL5325",
        "time": "2025-07-07T17:18:00",
        "to": "Tallahassee (TLH)",
        "airline": "Delta Connection",
        "aircraft": "CRJ9 (N903XJ)",
        "status": "Departed 7:19 PM"
    },
    {
        "flight": "DL1328",
        "time": "2025-07-07T17:20:00",
        "to": "Miami (MIA)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N6713Y)",
        "status": "Departed 6:40 PM"
    },
    {
        "flight": "WS1591",
        "time": "2025-07-07T17:20:00",
        "to": "Calgary (YYC)",
        "airline": "WestJet",
        "aircraft": "B738 (C-FZRM)",
        "status": "Departed 6:54 PM"
    },
    {
        "flight": "WN400",
        "time": "2025-07-07T17:20:00",
        "to": "Indianapolis (IND)",
        "airline": "Southwest Airlines",
        "aircraft": "B38M (N8706W)",
        "status": "Departed 6:44 PM"
    },
    {
        "flight": "DL2786",
        "time": "2025-07-07T17:21:00",
        "to": "Columbus (CMH)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N939DZ)",
        "status": "Departed 6:27 PM"
    },
    {
        "flight": "DL2176",
        "time": "2025-07-07T17:22:00",
        "to": "Pittsburgh (PIT)",
        "airline": "Delta Air Lines",
        "aircraft": "B738 (N380DA)",
        "status": "Unknown"
    },
    {
        "flight": "DL2207",
        "time": "2025-07-07T17:22:00",
        "to": "Gulfport (GPT)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N966AT)",
        "status": "Departed 6:10 PM"
    },
    {
        "flight": "DL2484",
        "time": "2025-07-07T17:22:00",
        "to": "Birmingham (BHM)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N954DZ)",
        "status": "Departed 6:43 PM"
    },
    {
        "flight": "DL4988",
        "time": "2025-07-07T17:22:00",
        "to": "Jacksonville (OAJ)",
        "airline": "Delta Connection",
        "aircraft": "CRJ7 (N398CA)",
        "status": "Departed 6:39 PM"
    },
    {
        "flight": "DL30",
        "time": "2025-07-07T17:23:00",
        "to": "London (LHR)",
        "airline": "Delta Air Lines (Vince Dooley Sticker)",
        "aircraft": "B764 (N842MH)",
        "status": "Unknown"
    },
    {
        "flight": "DL1393",
        "time": "2025-07-07T17:24:00",
        "to": "St. Louis (STL)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N962DZ)",
        "status": "Departed 6:27 PM"
    },
    {
        "flight": "DL2979",
        "time": "2025-07-07T17:24:00",
        "to": "Indianapolis (IND)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N927DZ)",
        "status": "Departed 6:12 PM"
    },
    {
        "flight": "DL5532",
        "time": "2025-07-07T17:24:00",
        "to": "Bentonville (XNA)",
        "airline": "Delta Connection",
        "aircraft": "CRJ9 (N928XJ)",
        "status": "Estimated dep. 9:45 PM"
    },
    {
        "flight": "DL2541",
        "time": "2025-07-07T17:26:00",
        "to": "Sarasota (SRQ)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N953DZ)",
        "status": "Departed 5:53 PM"
    },
    {
        "flight": "DL4639",
        "time": "2025-07-07T17:29:00",
        "to": "Huntsville (HSV)",
        "airline": "Delta Connection",
        "aircraft": "CRJ9 (N678CA)",
        "status": "Canceled"
    },
    {
        "flight": "B6520",
        "time": "2025-07-07T17:30:00",
        "to": "New York (JFK)",
        "airline": "JetBlue",
        "aircraft": "A320 (N636JB)",
        "status": "Canceled"
    },
    {
        "flight": "DL72",
        "time": "2025-07-07T17:30:00",
        "to": "Amsterdam (AMS)",
        "airline": "Delta Air Lines",
        "aircraft": "A359 (N568DZ)",
        "status": "Departed 6:31 PM"
    },
    {
        "flight": "DL1594",
        "time": "2025-07-07T17:30:00",
        "to": "Tampa (TPA)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N556NW)",
        "status": "Departed 7:04 PM"
    },
    {
        "flight": "WN1287",
        "time": "2025-07-07T17:30:00",
        "to": "Dallas (DAL)",
        "airline": "Southwest Airlines",
        "aircraft": "B737 (N938WN)",
        "status": "Unknown"
    },
    {
        "flight": "DL2879",
        "time": "2025-07-07T17:34:00",
        "to": "Chicago (ORD)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N337DN)",
        "status": "Departed 6:35 PM"
    },
    {
        "flight": "WN339",
        "time": "2025-07-07T17:35:00",
        "to": "Baltimore (BWI)",
        "airline": "Southwest Airlines",
        "aircraft": "B38M (N8767M)",
        "status": "Canceled"
    },
    {
        "flight": "WN8860",
        "time": "2025-07-07T17:35:00",
        "to": "Providence (PVD)",
        "airline": "Southwest Airlines",
        "aircraft": "B38M (N8767M)",
        "status": "Departed 7:05 PM"
    },
    {
        "flight": "DL3922",
        "time": "2025-07-07T17:37:00",
        "to": "Dothan (DHN)",
        "airline": "American Eagle",
        "aircraft": "CRJ7 (N712SK)",
        "status": "Departed 6:28 PM"
    },
    {
        "flight": "DL3246",
        "time": "2025-07-07T17:39:00",
        "to": "Raleigh-Durham (RDU)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N904DN)",
        "status": "Departed 7:02 PM"
    },
    {
        "flight": "AA1245",
        "time": "2025-07-07T17:40:00",
        "to": "Miami (MIA)",
        "airline": "American Airlines",
        "aircraft": "B738 (N907NN)",
        "status": "Estimated dep. 12:14 AM"
    },
    {
        "flight": "WN2458",
        "time": "2025-07-07T17:40:00",
        "to": "Washington (DCA)",
        "airline": "Southwest Airlines",
        "aircraft": "B737 (N938WN)",
        "status": "Estimated dep. 11:11 PM"
    },
    {
        "flight": "",
        "time": "2025-07-07T14:00:00",
        "to": "Knoxville (TYS)",
        "airline": "-",
        "aircraft": "S22T (N311CE)",
        "status": "Departed 2:02 PM"
    },
    {
        "flight": "DL3025",
        "time": "2025-07-07T17:41:00",
        "to": "Little Rock (LIT)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N954AT)",
        "status": "Estimated dep. 9:45 PM"
    },
    {
        "flight": "DL1292",
        "time": "2025-07-07T17:43:00",
        "to": "Louisville (SDF)",
        "airline": "Delta Air Lines (SkyTeam Livery)",
        "aircraft": "B738 (N381DN)",
        "status": "Unknown"
    },
    {
        "flight": "DL1871",
        "time": "2025-07-07T17:43:00",
        "to": "Charleston (CHS)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N944DZ)",
        "status": "Estimated dep. 10:00 PM"
    },
    {
        "flight": "DL3947",
        "time": "2025-07-07T17:44:00",
        "to": "Blountville (TRI)",
        "airline": "Delta Connection",
        "aircraft": "CRJ7 (N776SK)",
        "status": "Estimated dep. 5:50 PM"
    },
    {
        "flight": "DL826",
        "time": "2025-07-07T17:45:00",
        "to": "Santa Ana (SNA)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N721TW)",
        "status": "Departed 6:25 PM"
    },
    {
        "flight": "DL1131",
        "time": "2025-07-07T17:45:00",
        "to": "Houston (IAH)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N317DN)",
        "status": "Estimated dep. 10:00 PM"
    },
    {
        "flight": "DL1619",
        "time": "2025-07-07T17:45:00",
        "to": "Fort Lauderdale (FLL)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N6706Q)",
        "status": "Unknown"
    },
    {
        "flight": "DL2815",
        "time": "2025-07-07T17:45:00",
        "to": "Key West (EYW)",
        "airline": "Delta Air Lines",
        "aircraft": "A319 (N355NB)",
        "status": "Departed 6:00 PM"
    },
    {
        "flight": "DL4640",
        "time": "2025-07-07T17:45:00",
        "to": "Montgomery (MGM)",
        "airline": "Delta Connection",
        "aircraft": "CRJ9 (N331PQ)",
        "status": "Departed 6:21 PM"
    },
    {
        "flight": "DL5169",
        "time": "2025-07-07T17:45:00",
        "to": "Baton Rouge (BTR)",
        "airline": "Delta Connection",
        "aircraft": "CRJ7 (N668CA)",
        "status": "Departed 6:18 PM"
    },
    {
        "flight": "DL653",
        "time": "2025-07-07T17:49:00",
        "to": "Salt Lake City (SLC)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N371DN)",
        "status": "Departed 6:32 PM"
    },
    {
        "flight": "DL1927",
        "time": "2025-07-07T17:49:00",
        "to": "New Orleans (MSY)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N6704Z)",
        "status": "Departed 6:20 PM"
    },
    {
        "flight": "DL711",
        "time": "2025-07-07T17:50:00",
        "to": "Las Vegas (LAS)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N104DN)",
        "status": "Estimated dep. 10:00 PM"
    },
    {
        "flight": "DL2193",
        "time": "2025-07-07T17:50:00",
        "to": "Columbia (CAE)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N891AT)",
        "status": "Estimated dep. 10:00 PM"
    },
    {
        "flight": "DL3178",
        "time": "2025-07-07T17:50:00",
        "to": "Myrtle Beach (MYR)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N893AT)",
        "status": "Departed 6:48 PM"
    },
    {
        "flight": "DL14",
        "time": "2025-07-07T17:55:00",
        "to": "Frankfurt (FRA)",
        "airline": "Delta Air Lines",
        "aircraft": "A332 (N861NW)",
        "status": "Departed 7:13 PM"
    },
    {
        "flight": "DL88",
        "time": "2025-07-07T17:55:00",
        "to": "Paris (CDG)",
        "airline": "Delta Air Lines",
        "aircraft": "B764 (N834MH)",
        "status": "Departed 7:26 PM"
    },
    {
        "flight": "DL821",
        "time": "2025-07-07T17:56:00",
        "to": "Boston (BOS)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N338DN)",
        "status": "Departed 7:28 PM"
    },
    {
        "flight": "DL3007",
        "time": "2025-07-07T17:58:00",
        "to": "Greenville-Spartanburg (GSP)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N850DN)",
        "status": "Departed 7:20 PM"
    },
    {
        "flight": "DL743",
        "time": "2025-07-07T17:59:00",
        "to": "Sacramento (SMF)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N878DN)",
        "status": "Departed 6:48 PM"
    },
    {
        "flight": "DL832",
        "time": "2025-07-07T17:59:00",
        "to": "Washington (DCA)",
        "airline": "Delta Air Lines",
        "aircraft": "A320 (N367NW)",
        "status": "Estimated dep. 10:00 PM"
    },
    {
        "flight": "DL1079",
        "time": "2025-07-07T17:59:00",
        "to": "Windsor Locks (BDL)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N377DN)",
        "status": "Estimated dep. 6:40 PM"
    },
    {
        "flight": "DL2136",
        "time": "2025-07-07T17:59:00",
        "to": "San Jose (SJC)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N820DN)",
        "status": "Departed 6:51 PM"
    },
    {
        "flight": "UA504",
        "time": "2025-07-07T17:59:00",
        "to": "San Francisco (SFO)",
        "airline": "United Airlines",
        "aircraft": "B39M (N17594)",
        "status": "Departed 6:29 PM"
    },
    {
        "flight": "DL3042",
        "time": "2025-07-07T17:59:00",
        "to": "Knoxville (TYS)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N951AT)",
        "status": "Departed 6:56 PM"
    },
    {
        "flight": "DL468",
        "time": "2025-07-07T18:00:00",
        "to": "New York (LGA)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N105DX)",
        "status": "Estimated dep. 9:45 PM"
    },
    {
        "flight": "DL5247",
        "time": "2025-07-07T18:00:00",
        "to": "Roanoke (ROA)",
        "airline": "Delta Connection",
        "aircraft": "CRJ9 (N607LR)",
        "status": "Estimated dep. 9:50 PM"
    },
    {
        "flight": "DL1906",
        "time": "2025-07-07T18:05:00",
        "to": "Kingston (KIN)",
        "airline": "Delta Air Lines",
        "aircraft": "B738 (N378DA)",
        "status": "Estimated dep. 10:00 PM"
    },
    {
        "flight": "AA2819",
        "time": "2025-07-07T18:06:00",
        "to": "Philadelphia (PHL)",
        "airline": "American Airlines",
        "aircraft": "A319 (N840AW)",
        "status": "Departed 7:00 PM"
    },
    {
        "flight": "DL2939",
        "time": "2025-07-07T18:06:00",
        "to": "Memphis (MEM)",
        "airline": "Delta Air Lines",
        "aircraft": "B738 (N382DA)",
        "status": "Estimated dep. 10:00 PM"
    },
    {
        "flight": "DL3219",
        "time": "2025-07-07T18:06:00",
        "to": "Savannah (SAV)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N963DZ)",
        "status": "Estimated dep. 10:00 PM"
    },
    {
        "flight": "DL2331",
        "time": "2025-07-07T18:07:00",
        "to": "Jacksonville (JAX)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N378DN)",
        "status": "Departed 6:29 PM"
    },
    {
        "flight": "DL174",
        "time": "2025-07-07T18:10:00",
        "to": "Milan (MXP)",
        "airline": "Delta Air Lines",
        "aircraft": "A333 (N822NW)",
        "status": "Departed 7:17 PM"
    },
    {
        "flight": "WN2350",
        "time": "2025-07-07T18:10:00",
        "to": "Houston (HOU)",
        "airline": "Southwest Airlines",
        "aircraft": "B38M (N8716B)",
        "status": "Estimated dep. 10:00 PM"
    },
    {
        "flight": "AS783",
        "time": "2025-07-07T18:11:00",
        "to": "Portland (PDX)",
        "airline": "Alaska Airlines",
        "aircraft": "B739 (N448AS)",
        "status": "Departed 6:56 PM"
    },
    {
        "flight": "DL1897",
        "time": "2025-07-07T18:11:00",
        "to": "Lexington (LEX)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N922AT)",
        "status": "Departed 7:06 PM"
    },
    {
        "flight": "DL5282",
        "time": "2025-07-07T18:11:00",
        "to": "Augusta (AGS)",
        "airline": "Delta Connection",
        "aircraft": "CRJ9 (N228PQ)",
        "status": "Departed 7:09 PM"
    },
    {
        "flight": "DL5514",
        "time": "2025-07-07T18:11:00",
        "to": "Mobile (MOB)",
        "airline": "Delta Connection",
        "aircraft": "CRJ9 (N924XJ)",
        "status": "Departed 6:53 PM"
    },
    {
        "flight": "DL2689",
        "time": "2025-07-07T18:13:00",
        "to": "Nashville (BNA)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N960DZ)",
        "status": "Estimated dep. 10:00 PM"
    },
    {
        "flight": "DL3059",
        "time": "2025-07-07T18:13:00",
        "to": "Pensacola (PNS)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N912DU)",
        "status": "Departed 6:57 PM"
    },
    {
        "flight": "DL3176",
        "time": "2025-07-07T18:13:00",
        "to": "Jackson (JAN)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N953AT)",
        "status": "Estimated dep. 10:00 PM"
    },
    {
        "flight": "NK2572",
        "time": "2025-07-07T18:14:00",
        "to": "Las Vegas (LAS)",
        "airline": "Spirit Airlines",
        "aircraft": "A320 (N698NK)",
        "status": "Unknown"
    },
    {
        "flight": "DL1604",
        "time": "2025-07-07T18:15:00",
        "to": "Greensboro (GSO)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N991AT)",
        "status": "Estimated dep. 10:00 PM"
    },
    {
        "flight": "DL2035",
        "time": "2025-07-07T18:15:00",
        "to": "Orlando (MCO)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N668DN)",
        "status": "Estimated dep. 10:00 PM"
    },
    {
        "flight": "VS104",
        "time": "2025-07-07T18:15:00",
        "to": "London (LHR)",
        "airline": "Virgin Atlantic",
        "aircraft": "A35K (G-VDOT)",
        "status": "Departed 7:11 PM"
    },
    {
        "flight": "DL714",
        "time": "2025-07-07T18:17:00",
        "to": "Seattle (SEA)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N868DN)",
        "status": "Estimated dep. 10:00 PM"
    },
    {
        "flight": "NK2406",
        "time": "2025-07-07T18:19:00",
        "to": "Los Angeles (LAX)",
        "airline": "Spirit Airlines",
        "aircraft": "A21N (N726NK)",
        "status": "Estimated dep. 7:00 PM"
    },
    {
        "flight": "DL2037",
        "time": "2025-07-07T18:20:00",
        "to": "Asheville (AVL)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N944AT)",
        "status": "Estimated dep. 10:00 PM"
    },
    {
        "flight": "WS1597",
        "time": "2025-07-07T18:20:00",
        "to": "Vancouver (YVR)",
        "airline": "WestJet",
        "aircraft": "B738 (C-GWSZ)",
        "status": "Estimated dep. 9:15 PM"
    },
    {
        "flight": "WN1870",
        "time": "2025-07-07T18:20:00",
        "to": "Phoenix (PHX)",
        "airline": "Southwest Airlines",
        "aircraft": "B737 (N204WN)",
        "status": "Estimated dep. 9:15 PM"
    },
    {
        "flight": "AA3230",
        "time": "2025-07-07T18:20:00",
        "to": "Phoenix (PHX)",
        "airline": "American Airlines",
        "aircraft": "A321 (N188US)",
        "status": "Estimated dep. 6:34 PM"
    },
    {
        "flight": "DL720",
        "time": "2025-07-07T18:22:00",
        "to": "Santa Barbara (SBA)",
        "airline": "Delta Air Lines",
        "aircraft": "BCS3 (N314DU)",
        "status": "Estimated dep. 10:15 PM"
    },
    {
        "flight": "DL194",
        "time": "2025-07-07T18:25:00",
        "to": "Barcelona (BCN)",
        "airline": "Delta Air Lines",
        "aircraft": "A333 (N831NW)",
        "status": "Estimated dep. 10:00 PM"
    },
    {
        "flight": "DL315",
        "time": "2025-07-07T18:25:00",
        "to": "Jackson (JAC)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N554NW)",
        "status": "Estimated dep. 10:00 PM"
    },
    {
        "flight": "DL500",
        "time": "2025-07-07T18:25:00",
        "to": "Los Angeles (LAX)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N552NW)",
        "status": "Departed 7:00 PM"
    },
    {
        "flight": "DL770",
        "time": "2025-07-07T18:25:00",
        "to": "Ontario (ONT)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N351DN)",
        "status": "Estimated dep. 10:00 PM"
    },
    {
        "flight": "DL3083",
        "time": "2025-07-07T18:26:00",
        "to": "Destin Fort Walton Beach (VPS)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N965AT)",
        "status": "Estimated dep. 10:00 PM"
    },
    {
        "flight": "AA1248",
        "time": "2025-07-07T18:30:00",
        "to": "Dallas (DFW)",
        "airline": "American Airlines",
        "aircraft": "A21N (N440AN)",
        "status": "Estimated dep. 9:34 PM"
    },
    {
        "flight": "DL712",
        "time": "2025-07-07T18:30:00",
        "to": "San Diego (SAN)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N126DN)",
        "status": "Estimated dep. 10:00 PM"
    },
    {
        "flight": "DL1457",
        "time": "2025-07-07T18:30:00",
        "to": "Tampa (TPA)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N542US)",
        "status": "Estimated dep. 9:15 PM"
    },
    {
        "flight": "F93508",
        "time": "2025-07-07T18:32:00",
        "to": "Orlando (MCO)",
        "airline": "Frontier (Rocket the Hammerhead Shark Livery)",
        "aircraft": "A20N (N388FR)",
        "status": "Unknown"
    },
    {
        "flight": "DL1478",
        "time": "2025-07-07T18:34:00",
        "to": "Detroit (DTW)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N316DN)",
        "status": "Estimated dep. 10:00 PM"
    },
    {
        "flight": "DL2248",
        "time": "2025-07-07T18:35:00",
        "to": "Cincinnati (CVG)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N883DN)",
        "status": "Estimated dep. 10:00 PM"
    },
    {
        "flight": "TK6040",
        "time": "2025-07-07T18:35:00",
        "to": "Istanbul (IST)",
        "airline": "Turkish Airlines",
        "aircraft": "74C",
        "status": "Unknown"
    },
    {
        "flight": "WN377",
        "time": "2025-07-07T18:35:00",
        "to": "Denver (DEN)",
        "airline": "Southwest Airlines",
        "aircraft": "B738 (N8638A)",
        "status": "Estimated dep. 10:15 PM"
    },
    {
        "flight": "WN314",
        "time": "2025-07-07T18:40:00",
        "to": "Austin (AUS)",
        "airline": "Southwest Airlines",
        "aircraft": "B737 (N474WN)",
        "status": "Estimated dep. 10:00 PM"
    },
    {
        "flight": "UA1046",
        "time": "2025-07-07T18:45:00",
        "to": "Chicago (ORD)",
        "airline": "United Airlines",
        "aircraft": "B737 (N39726)",
        "status": "Estimated dep. 9:53 PM"
    },
    {
        "flight": "WN459",
        "time": "2025-07-07T18:45:00",
        "to": "Tampa (TPA)",
        "airline": "Southwest Airlines",
        "aircraft": "B737 (N7827A)",
        "status": "Estimated dep. 10:00 PM"
    },
    {
        "flight": "DL3053",
        "time": "2025-07-07T18:46:00",
        "to": "Panama City (ECP)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N939AT)",
        "status": "Departed 7:05 PM"
    },
    {
        "flight": "DL1939",
        "time": "2025-07-07T18:50:00",
        "to": "Cancun (CUN)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N897DN)",
        "status": "Estimated dep. 9:05 PM"
    },
    {
        "flight": "DL3235",
        "time": "2025-07-07T18:52:00",
        "to": "Chattanooga (CHA)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N960AT)",
        "status": "Estimated dep. 10:14 PM"
    },
    {
        "flight": "DL2893",
        "time": "2025-07-07T18:55:00",
        "to": "San Antonio (SAT)",
        "airline": "Delta Air Lines",
        "aircraft": "A320 (N351NW)",
        "status": "Estimated dep. 10:00 PM"
    },
    {
        "flight": "DL3204",
        "time": "2025-07-07T18:55:00",
        "to": "Huntsville (HSV)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N942AT)",
        "status": "Estimated dep. 10:00 PM"
    },
    {
        "flight": "DL1736",
        "time": "2025-07-07T18:56:00",
        "to": "Fort Myers (RSW)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N706TW)",
        "status": "Estimated dep. 10:00 PM"
    },
    {
        "flight": "DL2900",
        "time": "2025-07-07T18:58:00",
        "to": "Birmingham (BHM)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N982AT)",
        "status": "Estimated dep. 10:00 PM"
    },
    {
        "flight": "DL325",
        "time": "2025-07-07T18:59:00",
        "to": "Washington (DCA)",
        "airline": "Delta Air Lines",
        "aircraft": "A321",
        "status": "Estimated dep. 10:00 PM"
    },
    {
        "flight": "DL746",
        "time": "2025-07-07T18:59:00",
        "to": "Denver (DEN)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N373DX)",
        "status": "Estimated dep. 10:00 PM"
    },
    {
        "flight": "DL1257",
        "time": "2025-07-07T18:59:00",
        "to": "Baltimore (BWI)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N692DL)",
        "status": "Estimated dep. 10:00 PM"
    },
    {
        "flight": "DL2065",
        "time": "2025-07-07T18:59:00",
        "to": "Philadelphia (PHL)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N302DN)",
        "status": "Estimated dep. 10:00 PM"
    },
    {
        "flight": "DL2498",
        "time": "2025-07-07T18:59:00",
        "to": "New York (EWR)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N360DN)",
        "status": "Estimated dep. 11:20 PM"
    },
    {
        "flight": "DL105",
        "time": "2025-07-07T19:00:00",
        "to": "Sao Paulo (GRU)",
        "airline": "Delta Air Lines",
        "aircraft": "A333 (N805NW)",
        "status": "Estimated dep. 10:00 PM"
    },
    {
        "flight": "DL434",
        "time": "2025-07-07T19:00:00",
        "to": "New York (LGA)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N128DN)",
        "status": "Estimated dep. 10:14 PM"
    },
    {
        "flight": "AA2910",
        "time": "2025-07-07T19:02:00",
        "to": "Chicago (ORD)",
        "airline": "American Airlines",
        "aircraft": "A319 (N717UW)",
        "status": "Estimated dep. 9:15 PM"
    },
    {
        "flight": "DL919",
        "time": "2025-07-07T19:05:00",
        "to": "Las Vegas (LAS)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N884DN)",
        "status": "Estimated dep. 10:00 PM"
    },
    {
        "flight": "DL5203",
        "time": "2025-07-07T19:05:00",
        "to": "Knoxville (TYS)",
        "airline": "Delta Connection",
        "aircraft": "CRJ9 (N300PQ)",
        "status": "Estimated dep. 9:40 PM"
    },
    {
        "flight": "F91949",
        "time": "2025-07-07T19:05:00",
        "to": "San Francisco (SFO)",
        "airline": "Frontier (Colorado the Bighorn Sheep Livery)",
        "aircraft": "A20N (N323FR)",
        "status": "Estimated dep. 10:31 PM"
    },
    {
        "flight": "DL3782",
        "time": "2025-07-07T19:06:00",
        "to": "Shreveport (SHV)",
        "airline": "Delta Connection",
        "aircraft": "CRJ9 (N809SK)",
        "status": "Estimated dep. 9:50 PM"
    },
    {
        "flight": "DL108",
        "time": "2025-07-07T19:09:00",
        "to": "Madrid (MAD)",
        "airline": "Delta Air Lines",
        "aircraft": "A333 (N810NW)",
        "status": "Estimated dep. 10:44 PM"
    },
    {
        "flight": "B61308",
        "time": "2025-07-07T19:11:00",
        "to": "Boston (BOS)",
        "airline": "JetBlue",
        "aircraft": "BCS3 (N3242J)",
        "status": "Estimated dep. 11:27 PM"
    },
    {
        "flight": "DL1280",
        "time": "2025-07-07T19:12:00",
        "to": "Minneapolis (MSP)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N322DN)",
        "status": "Estimated dep. 10:00 PM"
    },
    {
        "flight": "AA1610",
        "time": "2025-07-07T19:15:00",
        "to": "Miami (MIA)",
        "airline": "American Airlines",
        "aircraft": "A319 (N776XF)",
        "status": "Estimated dep. 9:33 PM"
    },
    {
        "flight": "DL2784",
        "time": "2025-07-07T19:15:00",
        "to": "Oklahoma City (OKC)",
        "airline": "Delta Air Lines",
        "aircraft": "A319 (N359NB)",
        "status": "Estimated dep. 9:14 PM"
    },
    {
        "flight": "DL1588",
        "time": "2025-07-07T19:19:00",
        "to": "Miami (MIA)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N695DL)",
        "status": "Estimated dep. 10:00 PM"
    },
    {
        "flight": "DL1861",
        "time": "2025-07-07T19:20:00",
        "to": "San Juan (SJU)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N676DL)",
        "status": "Estimated dep. 10:00 PM"
    },
    {
        "flight": "DL1518",
        "time": "2025-07-07T19:20:00",
        "to": "Raleigh-Durham (RDU)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N959DZ)",
        "status": "Estimated dep. 10:00 PM"
    },
    {
        "flight": "NK3182",
        "time": "2025-07-07T19:20:00",
        "to": "Fort Lauderdale (FLL)",
        "airline": "Spirit Airlines",
        "aircraft": "A21N (N717NK)",
        "status": "Estimated dep. 8:00 PM"
    },
    {
        "flight": "DL2730",
        "time": "2025-07-07T19:21:00",
        "to": "Greenville-Spartanburg (GSP)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N841DN)",
        "status": "Estimated dep. 10:55 PM"
    },
    {
        "flight": "DL3139",
        "time": "2025-07-07T19:21:00",
        "to": "Charlotte (CLT)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N930AT)",
        "status": "Estimated dep. 10:14 PM"
    },
    {
        "flight": "F93923",
        "time": "2025-07-07T19:22:00",
        "to": "Las Vegas (LAS)",
        "airline": "Frontier (Lewis the Greater Sage-Grouse Livery)",
        "aircraft": "A20N (N378FR)",
        "status": "Estimated dep. 11:04 PM"
    },
    {
        "flight": "UA1475",
        "time": "2025-07-07T19:23:00",
        "to": "Houston (IAH)",
        "airline": "United Airlines",
        "aircraft": "A320 (N451UA)",
        "status": "Estimated dep. 9:30 PM"
    },
    {
        "flight": "AA5202",
        "time": "2025-07-07T19:24:00",
        "to": "Washington (DCA)",
        "airline": "American Eagle",
        "aircraft": "CRJ7 (N708PS)",
        "status": "Canceled"
    },
    {
        "flight": "DL589",
        "time": "2025-07-07T19:25:00",
        "to": "Mexico City (MEX)",
        "airline": "Delta Air Lines",
        "aircraft": "B738 (N3745B)",
        "status": "Estimated dep. 10:14 PM"
    },
    {
        "flight": "DL681",
        "time": "2025-07-07T19:25:00",
        "to": "San Francisco (SFO)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N859DN)",
        "status": "Estimated dep. 10:00 PM"
    },
    {
        "flight": "DL763",
        "time": "2025-07-07T19:25:00",
        "to": "Los Angeles (LAX)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N346DN)",
        "status": "Estimated dep. 10:00 PM"
    },
    {
        "flight": "WN322",
        "time": "2025-07-07T19:25:00",
        "to": "Nashville (BNA)",
        "airline": "Southwest Airlines",
        "aircraft": "B38M (N8943Q)",
        "status": "Estimated dep. 11:28 PM"
    },
    {
        "flight": "DL1606",
        "time": "2025-07-07T19:26:00",
        "to": "West Palm Beach (PBI)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N333DX)",
        "status": "Unknown"
    },
    {
        "flight": "DL66",
        "time": "2025-07-07T19:27:00",
        "to": "Rome (FCO)",
        "airline": "Delta Air Lines",
        "aircraft": "A339 (N405DX)",
        "status": "Estimated dep. 10:14 PM"
    },
    {
        "flight": "UA2247",
        "time": "2025-07-07T19:29:00",
        "to": "New York (EWR)",
        "airline": "United Airlines",
        "aircraft": "A319 (N817UA)",
        "status": "Estimated dep. 11:21 PM"
    },
    {
        "flight": "DL561",
        "time": "2025-07-07T19:30:00",
        "to": "Fresno (FAT)",
        "airline": "Delta Air Lines",
        "aircraft": "B738 (N3772H)",
        "status": "Estimated dep. 10:00 PM"
    },
    {
        "flight": "DL2881",
        "time": "2025-07-07T19:30:00",
        "to": "Orlando (MCO)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N689DL)",
        "status": "Estimated dep. 10:00 PM"
    },
    {
        "flight": "VS110",
        "time": "2025-07-07T19:30:00",
        "to": "Manchester (MAN)",
        "airline": "Virgin Atlantic",
        "aircraft": "A35K (G-VELJ)",
        "status": "Estimated dep. 7:40 PM"
    },
    {
        "flight": "QR756",
        "time": "2025-07-07T19:30:00",
        "to": "Doha (DOH)",
        "airline": "Qatar Airways",
        "aircraft": "A35K (A7-ANK)",
        "status": "Estimated dep. 7:52 PM"
    },
    {
        "flight": "WN3902",
        "time": "2025-07-07T19:30:00",
        "to": "Las Vegas (LAS)",
        "airline": "Southwest Airlines",
        "aircraft": "B737 (N7828A)",
        "status": "Estimated dep. 11:00 PM"
    },
    {
        "flight": "AS334",
        "time": "2025-07-07T19:31:00",
        "to": "Seattle (SEA)",
        "airline": "Alaska Airlines",
        "aircraft": "B739 (N481AS)",
        "status": "Estimated dep. 10:30 PM"
    },
    {
        "flight": "DL1130",
        "time": "2025-07-07T19:32:00",
        "to": "Kansas City (MCI)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N945DZ)",
        "status": "Estimated dep. 10:05 PM"
    },
    {
        "flight": "UA2634",
        "time": "2025-07-07T19:32:00",
        "to": "Washington (IAD)",
        "airline": "United Airlines",
        "aircraft": "A319 (N872UA)",
        "status": "Estimated dep. 9:48 PM"
    },
    {
        "flight": "DL1253",
        "time": "2025-07-07T19:34:00",
        "to": "Detroit (DTW)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N823DN)",
        "status": "Estimated dep. 10:00 PM"
    },
    {
        "flight": "DL2493",
        "time": "2025-07-07T19:36:00",
        "to": "Charleston (CHS)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N942DZ)",
        "status": "Estimated dep. 10:00 PM"
    },
    {
        "flight": "DL1737",
        "time": "2025-07-07T19:39:00",
        "to": "Bentonville (XNA)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N921AT)",
        "status": "Estimated dep. 10:14 PM"
    },
    {
        "flight": "DL2210",
        "time": "2025-07-07T19:40:00",
        "to": "Grand Rapids (GRR)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N933DZ)",
        "status": "Estimated dep. 11:23 PM"
    },
    {
        "flight": "DL2295",
        "time": "2025-07-07T19:40:00",
        "to": "Tallahassee (TLH)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N936AT)",
        "status": "Estimated dep. 10:00 PM"
    },
    {
        "flight": "DL2378",
        "time": "2025-07-07T19:40:00",
        "to": "New York (JFK)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N888DU)",
        "status": "Estimated dep. 10:00 PM"
    },
    {
        "flight": "WN416",
        "time": "2025-07-07T19:40:00",
        "to": "New York (LGA)",
        "airline": "Southwest Airlines (Nevada One Livery)",
        "aircraft": "B738 (N8646B)",
        "status": "Estimated dep. 11:37 PM"
    },
    {
        "flight": "DL691",
        "time": "2025-07-07T19:43:00",
        "to": "Portland (PDX)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N898DN)",
        "status": "Estimated dep. 10:00 PM"
    },
    {
        "flight": "DL1206",
        "time": "2025-07-07T19:45:00",
        "to": "Milwaukee (MKE)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N950DZ)",
        "status": "Estimated dep. 11:50 PM"
    },
    {
        "flight": "WN3062",
        "time": "2025-07-07T00:15:00",
        "to": "Baltimore (BWI)",
        "airline": "Southwest Airlines",
        "aircraft": "B737",
        "status": "Estimated dep. 12:21 AM"
    },
    {
        "flight": "DL1450",
        "time": "2025-07-07T19:47:00",
        "to": "New Orleans (MSY)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N694DL)",
        "status": "Estimated dep. 10:22 PM"
    },
    {
        "flight": "DL2669",
        "time": "2025-07-07T19:47:00",
        "to": "Toronto (YYZ)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N370DN)",
        "status": "Estimated dep. 10:14 PM"
    },
    {
        "flight": "DL819",
        "time": "2025-07-07T19:48:00",
        "to": "San Diego (SAN)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N345DN)",
        "status": "Estimated dep. 10:00 PM"
    },
    {
        "flight": "DL1170",
        "time": "2025-07-07T19:49:00",
        "to": "Austin (AUS)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N321DH)",
        "status": "Estimated dep. 10:00 PM"
    },
    {
        "flight": "DL74",
        "time": "2025-07-07T19:50:00",
        "to": "Amsterdam (AMS)",
        "airline": "Delta Air Lines",
        "aircraft": "A333 (N820NW)",
        "status": "Estimated dep. 10:40 PM"
    },
    {
        "flight": "DL176",
        "time": "2025-07-07T19:50:00",
        "to": "Dublin (DUB)",
        "airline": "Delta Air Lines",
        "aircraft": "A333 (N817NW)",
        "status": "Estimated dep. 10:00 PM"
    },
    {
        "flight": "DL1284",
        "time": "2025-07-07T19:50:00",
        "to": "Houston (IAH)",
        "airline": "Delta Air Lines",
        "aircraft": "A320 (N365NW)",
        "status": "Estimated dep. 10:00 PM"
    },
    {
        "flight": "DL660",
        "time": "2025-07-07T19:51:00",
        "to": "Salt Lake City (SLC)",
        "airline": "Delta Air Lines",
        "aircraft": "B753 (N588NW)",
        "status": "Estimated dep. 10:00 PM"
    },
    {
        "flight": "DL1507",
        "time": "2025-07-07T19:51:00",
        "to": "Colorado Springs (COS)",
        "airline": "Delta Air Lines",
        "aircraft": "B738 (N373DA)",
        "status": "Estimated dep. 10:00 PM"
    },
    {
        "flight": "DL623",
        "time": "2025-07-07T19:52:00",
        "to": "Seattle (SEA)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N891DN)",
        "status": "Canceled"
    },
    {
        "flight": "DL3093",
        "time": "2025-07-07T19:52:00",
        "to": "Louisville (SDF)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N880DN)",
        "status": "Estimated dep. 10:14 PM"
    },
    {
        "flight": "DL3166",
        "time": "2025-07-07T19:53:00",
        "to": "Richmond (RIC)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N553NW)",
        "status": "Estimated dep. 10:00 PM"
    },
    {
        "flight": "DL1545",
        "time": "2025-07-07T19:54:00",
        "to": "Columbus (CMH)",
        "airline": "Delta Air Lines",
        "aircraft": "B738 (N375DA)",
        "status": "Estimated dep. 10:05 PM"
    },
    {
        "flight": "F91449",
        "time": "2025-07-07T19:54:00",
        "to": "Denver (DEN)",
        "airline": "Frontier (Rocket the Hammerhead Shark Livery)",
        "aircraft": "A20N (N388FR)",
        "status": "Canceled"
    },
    {
        "flight": "DL2707",
        "time": "2025-07-07T19:55:00",
        "to": "Omaha (OMA)",
        "airline": "Delta Air Lines",
        "aircraft": "A319 (N338NB)",
        "status": "Estimated dep. 10:00 PM"
    },
    {
        "flight": "SK930",
        "time": "2025-07-07T19:55:00",
        "to": "Copenhagen (CPH)",
        "airline": "SAS",
        "aircraft": "A333 (LN-RKT)",
        "status": "Estimated dep. 8:13 PM"
    },
    {
        "flight": "DL9892",
        "time": "2025-07-07T19:55:00",
        "to": "Amsterdam (AMS)",
        "airline": "Delta Air Lines",
        "aircraft": "A359 (N507DN)",
        "status": "Estimated dep. 10:40 PM"
    },
    {
        "flight": "DL2583",
        "time": "2025-07-07T19:56:00",
        "to": "Pittsburgh (PIT)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N943DZ)",
        "status": "Estimated dep. 10:00 PM"
    },
    {
        "flight": "DL2765",
        "time": "2025-07-07T19:58:00",
        "to": "Windsor Locks (BDL)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N367DN)",
        "status": "Estimated dep. 10:00 PM"
    },
    {
        "flight": "DL300",
        "time": "2025-07-07T19:59:00",
        "to": "Boston (BOS)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N390DN)",
        "status": "Estimated dep. 11:10 PM"
    },
    {
        "flight": "DL391",
        "time": "2025-07-07T19:59:00",
        "to": "Reno (RNO)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N900PC)",
        "status": "Estimated dep. 10:00 PM"
    },
    {
        "flight": "DL727",
        "time": "2025-07-07T19:59:00",
        "to": "Washington (DCA)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N111DC)",
        "status": "Estimated dep. 10:00 PM"
    },
    {
        "flight": "DL1489",
        "time": "2025-07-07T19:59:00",
        "to": "Fort Lauderdale (FLL)",
        "airline": "Delta Air Lines",
        "aircraft": "B753 (N584NW)",
        "status": "Estimated dep. 10:00 PM"
    },
    {
        "flight": "DL1616",
        "time": "2025-07-07T19:59:00",
        "to": "White Plains (HPN)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N894AT)",
        "status": "Estimated dep. 10:00 PM"
    },
    {
        "flight": "DL2804",
        "time": "2025-07-07T19:59:00",
        "to": "Dallas (DAL)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N906AT)",
        "status": "Estimated dep. 11:08 PM"
    },
    {
        "flight": "DL2984",
        "time": "2025-07-07T19:59:00",
        "to": "Norfolk (ORF)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N67171)",
        "status": "Estimated dep. 11:15 PM"
    },
    {
        "flight": "DL3659",
        "time": "2025-07-07T19:59:00",
        "to": "Albany (ABY)",
        "airline": "Delta Connection",
        "aircraft": "CRJ9 (N822SK)",
        "status": "Estimated dep. 11:45 PM"
    },
    {
        "flight": "F93215",
        "time": "2025-07-07T19:59:00",
        "to": "Los Angeles (LAX)",
        "airline": "Frontier Airlines",
        "aircraft": "A21N",
        "status": "Estimated dep. 9:45 PM"
    },
    {
        "flight": "DL490",
        "time": "2025-07-07T20:00:00",
        "to": "New York (LGA)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N350DN)",
        "status": "Canceled"
    },
    {
        "flight": "DL2659",
        "time": "2025-07-07T20:01:00",
        "to": "Cincinnati (CVG)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N881DN)",
        "status": "Estimated dep. 10:14 PM"
    },
    {
        "flight": "WN8504",
        "time": "2025-07-07T20:01:00",
        "to": "Richmond (RIC)",
        "airline": "Southwest Airlines",
        "aircraft": "-",
        "status": "Estimated dep. 11:19 PM"
    },
    {
        "flight": "DL2001",
        "time": "2025-07-07T20:04:00",
        "to": "Memphis (MEM)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N938DZ)",
        "status": "Estimated dep. 10:15 PM"
    },
    {
        "flight": "DL3120",
        "time": "2025-07-07T20:04:00",
        "to": "Indianapolis (IND)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N946DZ)",
        "status": "Estimated dep. 10:14 PM"
    },
    {
        "flight": "AF33",
        "time": "2025-07-07T20:05:00",
        "to": "Paris (CDG)",
        "airline": "Air France",
        "aircraft": "B772 (F-GSPG)",
        "status": "Estimated dep. 9:30 PM"
    },
    {
        "flight": "DL730",
        "time": "2025-07-07T20:05:00",
        "to": "Boise (BOI)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N330DX)",
        "status": "Estimated dep. 10:14 PM"
    },
    {
        "flight": "DL955",
        "time": "2025-07-07T20:10:00",
        "to": "Las Vegas (LAS)",
        "airline": "Delta Air Lines",
        "aircraft": "A321",
        "status": "Estimated dep. 10:45 PM"
    },
    {
        "flight": "DL3623",
        "time": "2025-07-07T20:10:00",
        "to": "South Bend (SBN)",
        "airline": "Delta Connection",
        "aircraft": "CRJ9 (N833SK)",
        "status": "Estimated dep. 9:31 PM"
    },
    {
        "flight": "NK2470",
        "time": "2025-07-07T20:14:00",
        "to": "New Orleans (MSY)",
        "airline": "Spirit Airlines",
        "aircraft": "A320 (N697NK)",
        "status": "Estimated dep. 8:14 PM"
    },
    {
        "flight": "DL3002",
        "time": "2025-07-07T20:15:00",
        "to": "Nashville (BNA)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N961DZ)",
        "status": "Estimated dep. 10:00 PM"
    },
    {
        "flight": "DL1139",
        "time": "2025-07-07T20:15:00",
        "to": "Chicago (ORD)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N812DN)",
        "status": "Canceled"
    },
    {
        "flight": "DL2494",
        "time": "2025-07-07T20:15:00",
        "to": "Panama City (ECP)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N997AT)",
        "status": "Estimated dep. 10:14 PM"
    },
    {
        "flight": "DL3084",
        "time": "2025-07-07T20:15:00",
        "to": "Jackson (JAN)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N923AT)",
        "status": "Estimated dep. 10:48 PM"
    },
    {
        "flight": "AA5175",
        "time": "2025-07-07T20:17:00",
        "to": "Charlotte (CLT)",
        "airline": "American Eagle",
        "aircraft": "CRJ9 (N559NN)",
        "status": "Canceled"
    },
    {
        "flight": "DL5429",
        "time": "2025-07-07T20:17:00",
        "to": "Columbus (CSG)",
        "airline": "Delta Connection",
        "aircraft": "CRJ7 (N690CA)",
        "status": "Estimated dep. 12:04 AM"
    },
    {
        "flight": "DL5035",
        "time": "2025-07-07T20:18:00",
        "to": "Allentown (ABE)",
        "airline": "Delta Connection",
        "aircraft": "CRJ9 (N146PQ)",
        "status": "Estimated dep. 12:05 AM"
    },
    {
        "flight": "DL703",
        "time": "2025-07-07T20:20:00",
        "to": "Spokane (GEG)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N857DZ)",
        "status": "Estimated dep. 10:00 PM"
    },
    {
        "flight": "DL1366",
        "time": "2025-07-07T20:20:00",
        "to": "Chattanooga (CHA)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N926AT)",
        "status": "Estimated dep. 11:19 PM"
    },
    {
        "flight": "DL3149",
        "time": "2025-07-07T20:22:00",
        "to": "Lexington (LEX)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N919AT)",
        "status": "Estimated dep. 11:08 PM"
    },
    {
        "flight": "F93097",
        "time": "2025-07-07T20:23:00",
        "to": "Dallas (DFW)",
        "airline": "Frontier (Joaquin the Kit Fox Livery)",
        "aircraft": "A20N (N387FR)",
        "status": "Estimated dep. 9:38 PM"
    },
    {
        "flight": "AA2403",
        "time": "2025-07-07T20:23:00",
        "to": "Dallas (DFW)",
        "airline": "American Airlines",
        "aircraft": "A321 (N575UW)",
        "status": "Canceled"
    },
    {
        "flight": "DL5202",
        "time": "2025-07-07T20:23:00",
        "to": "Brunswick (BQK)",
        "airline": "Delta Connection",
        "aircraft": "CRJ7 (N371CA)",
        "status": "Estimated dep. 11:00 PM"
    },
    {
        "flight": "DL2265",
        "time": "2025-07-07T20:25:00",
        "to": "Jacksonville (JAX)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N6709)",
        "status": "Estimated dep. 10:01 PM"
    },
    {
        "flight": "DL3021",
        "time": "2025-07-07T20:25:00",
        "to": "Pensacola (PNS)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N548US)",
        "status": "Estimated dep. 10:13 PM"
    },
    {
        "flight": "DL1309",
        "time": "2025-07-07T20:25:00",
        "to": "Washington (IAD)",
        "airline": "Delta Air Lines",
        "aircraft": "A319 (N354NB)",
        "status": "Estimated dep. 10:14 PM"
    },
    {
        "flight": "DL757",
        "time": "2025-07-07T20:26:00",
        "to": "Phoenix (PHX)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N112DN)",
        "status": "Estimated dep. 1:05 AM"
    },
    {
        "flight": "DL2405",
        "time": "2025-07-07T20:26:00",
        "to": "Augusta (AGS)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N892AT)",
        "status": "Estimated dep. 10:14 PM"
    },
    {
        "flight": "DL3071",
        "time": "2025-07-07T20:27:00",
        "to": "Asheville (AVL)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N967AT)",
        "status": "Estimated dep. 11:11 PM"
    },
    {
        "flight": "DL1027",
        "time": "2025-07-07T20:28:00",
        "to": "Burlington (BTV)",
        "airline": "Delta Air Lines",
        "aircraft": "B738 (N377DE)",
        "status": "Canceled"
    },
    {
        "flight": "DL31",
        "time": "2025-07-07T20:30:00",
        "to": "Dallas (DFW)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N339DN)",
        "status": "Estimated dep. 10:05 PM"
    },
    {
        "flight": "DL138",
        "time": "2025-07-07T20:30:00",
        "to": "Venice (VCE)",
        "airline": "Delta Air Lines",
        "aircraft": "B764 (N840MH)",
        "status": "Estimated dep. 11:15 PM"
    },
    {
        "flight": "DL319",
        "time": "2025-07-07T20:30:00",
        "to": "Los Angeles (LAX)",
        "airline": "Delta Air Lines",
        "aircraft": "A21N (N513DA)",
        "status": "Estimated dep. 12:12 AM"
    },
    {
        "flight": "DL1174",
        "time": "2025-07-07T20:30:00",
        "to": "Philadelphia (PHL)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N364DX)",
        "status": "Estimated dep. 10:00 PM"
    },
    {
        "flight": "EJA857",
        "time": "2025-07-07T20:30:00",
        "to": "Nashville (QQN)",
        "airline": "NetJets",
        "aircraft": "-",
        "status": "Estimated dep. 8:36 PM"
    },
    {
        "flight": "CNS1294",
        "time": "2025-07-07T20:30:00",
        "to": "Brunswick (SSI)",
        "airline": "PlaneSense",
        "aircraft": "PC12",
        "status": "Estimated dep. 8:40 PM"
    },
    {
        "flight": "LXJ502",
        "time": "2025-07-07T20:30:00",
        "to": "Brunswick (SSI)",
        "airline": "Flexjet",
        "aircraft": "CL35",
        "status": "Estimated dep. 8:40 PM"
    },
    {
        "flight": "DL1065",
        "time": "2025-07-07T20:32:00",
        "to": "West Palm Beach (PBI)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N340DN)",
        "status": "Estimated dep. 10:14 PM"
    },
    {
        "flight": "DL2257",
        "time": "2025-07-07T20:34:00",
        "to": "Birmingham (BHM)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N947DZ)",
        "status": "Estimated dep. 10:01 PM"
    },
    {
        "flight": "NK2711",
        "time": "2025-07-07T20:35:00",
        "to": "Columbus (CMH)",
        "airline": "Spirit Airlines",
        "aircraft": "A21N (N710NK)",
        "status": "Estimated dep. 12:00 AM"
    },
    {
        "flight": "DL1663",
        "time": "2025-07-07T20:36:00",
        "to": "Charleston (CHS)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N958DZ)",
        "status": "Estimated dep. 11:26 PM"
    },
    {
        "flight": "NK2851",
        "time": "2025-07-07T20:36:00",
        "to": "Detroit (DTW)",
        "airline": "Spirit Airlines",
        "aircraft": "A320 (N613NK)",
        "status": "Estimated dep. 10:48 PM"
    },
    {
        "flight": "DL3217",
        "time": "2025-07-07T20:38:00",
        "to": "Savannah (SAV)",
        "airline": "Delta Air Lines",
        "aircraft": "B739",
        "status": "Estimated dep. 11:47 PM"
    },
    {
        "flight": "DL1473",
        "time": "2025-07-07T20:39:00",
        "to": "Greensboro (GSO)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N893DN)",
        "status": "Estimated dep. 10:14 PM"
    },
    {
        "flight": "DL5168",
        "time": "2025-07-07T20:39:00",
        "to": "Alexandria (AEX)",
        "airline": "Delta Connection",
        "aircraft": "CRJ7 (N668CA)",
        "status": "Estimated dep. 11:57 PM"
    },
    {
        "flight": "DL1591",
        "time": "2025-07-07T20:40:00",
        "to": "Tampa (TPA)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N659DL)",
        "status": "Estimated dep. 11:02 PM"
    },
    {
        "flight": "DL2701",
        "time": "2025-07-07T20:40:00",
        "to": "Little Rock (LIT)",
        "airline": "Delta Air Lines",
        "aircraft": "B738 (N384DA)",
        "status": "Estimated dep. 11:08 PM"
    },
    {
        "flight": "DL545",
        "time": "2025-07-07T20:41:00",
        "to": "San Francisco (SFO)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N818DA)",
        "status": "Estimated dep. 11:40 PM"
    },
    {
        "flight": "DL556",
        "time": "2025-07-07T20:44:00",
        "to": "Santa Ana (SNA)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N711ZX)",
        "status": "Estimated dep. 10:14 PM"
    },
    {
        "flight": "DL1076",
        "time": "2025-07-07T20:45:00",
        "to": "Chicago (MDW)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N963AT)",
        "status": "Estimated dep. 11:10 PM"
    },
    {
        "flight": "DL1339",
        "time": "2025-07-07T20:45:00",
        "to": "Cleveland (CLE)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N815DN)",
        "status": "Estimated dep. 10:55 PM"
    },
    {
        "flight": "DL1733",
        "time": "2025-07-07T20:45:00",
        "to": "Orlando (MCO)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N699DL)",
        "status": "Estimated dep. 12:29 AM"
    },
    {
        "flight": "WN371",
        "time": "2025-07-07T20:45:00",
        "to": "Washington (DCA)",
        "airline": "Southwest Airlines",
        "aircraft": "B737 (N209WN)",
        "status": "Estimated dep. 10:12 PM"
    },
    {
        "flight": "WN423",
        "time": "2025-07-07T20:45:00",
        "to": "Orlando (MCO)",
        "airline": "Southwest Airlines",
        "aircraft": "B737 (N462WN)",
        "status": "Estimated dep. 10:48 PM"
    },
    {
        "flight": "DL5443",
        "time": "2025-07-07T20:46:00",
        "to": "Valdosta (VLD)",
        "airline": "Delta Connection",
        "aircraft": "CRJ9 (N331PQ)",
        "status": "Estimated dep. 11:25 PM"
    },
    {
        "flight": "DL1684",
        "time": "2025-07-07T20:47:00",
        "to": "Destin Fort Walton Beach (VPS)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N934DZ)",
        "status": "Estimated dep. 11:38 PM"
    },
    {
        "flight": "DL2052",
        "time": "2025-07-07T20:50:00",
        "to": "Raleigh-Durham (RDU)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N932DZ)",
        "status": "Estimated dep. 11:20 PM"
    },
    {
        "flight": "DL24",
        "time": "2025-07-07T20:50:00",
        "to": "Nice (NCE)",
        "airline": "Delta Air Lines",
        "aircraft": "B764 (N825MH)",
        "status": "Estimated dep. 10:14 PM"
    },
    {
        "flight": "DL2527",
        "time": "2025-07-07T20:50:00",
        "to": "New York (EWR)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N814DN)",
        "status": "Estimated dep. 11:55 PM"
    },
    {
        "flight": "DL1234",
        "time": "2025-07-07T20:52:00",
        "to": "Miami (MIA)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N688DL)",
        "status": "Estimated dep. 11:10 PM"
    },
    {
        "flight": "DL2833",
        "time": "2025-07-07T20:54:00",
        "to": "St. Louis (STL)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N829DN)",
        "status": "Estimated dep. 11:30 PM"
    },
    {
        "flight": "DL3008",
        "time": "2025-07-07T20:54:00",
        "to": "Columbia (CAE)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N943AT)",
        "status": "Estimated dep. 10:43 PM"
    },
    {
        "flight": "DL1713",
        "time": "2025-07-07T20:54:00",
        "to": "El Paso (ELP)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N889DN)",
        "status": "Estimated dep. 10:00 PM"
    },
    {
        "flight": "WN1938",
        "time": "2025-07-07T20:55:00",
        "to": "St. Louis (STL)",
        "airline": "Southwest Airlines",
        "aircraft": "B737 (N7824A)",
        "status": "Estimated dep. 11:43 PM"
    },
    {
        "flight": "DL4910",
        "time": "2025-07-07T20:56:00",
        "to": "Dothan (DHN)",
        "airline": "Delta Connection",
        "aircraft": "CRJ9 (N691CA)",
        "status": "Estimated dep. 11:27 PM"
    },
    {
        "flight": "DL378",
        "time": "2025-07-07T20:59:00",
        "to": "Washington (DCA)",
        "airline": "Delta Air Lines",
        "aircraft": "A320 (N337NW)",
        "status": "Estimated dep. 11:25 PM"
    },
    {
        "flight": "DL682",
        "time": "2025-07-07T20:59:00",
        "to": "Sacramento (SMF)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N861DN)",
        "status": "Estimated dep. 11:15 PM"
    },
    {
        "flight": "DL1057",
        "time": "2025-07-07T20:59:00",
        "to": "Sarasota (SRQ)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N6700)",
        "status": "Estimated dep. 9:57 PM"
    },
    {
        "flight": "DL779",
        "time": "2025-07-07T20:59:00",
        "to": "Ontario (ONT)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N301DV)",
        "status": "Estimated dep. 11:30 PM"
    },
    {
        "flight": "DL933",
        "time": "2025-07-07T20:59:00",
        "to": "San Jose (SJC)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N856DN)",
        "status": "Estimated dep. 11:25 PM"
    },
    {
        "flight": "DL1083",
        "time": "2025-07-07T20:59:00",
        "to": "Fort Myers (RSW)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N667DN)",
        "status": "Estimated dep. 12:06 AM"
    },
    {
        "flight": "DL1222",
        "time": "2025-07-07T20:59:00",
        "to": "San Antonio (SAT)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N332DN)",
        "status": "Estimated dep. 12:10 AM"
    },
    {
        "flight": "DL2670",
        "time": "2025-07-07T20:59:00",
        "to": "Baltimore (BWI)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N6707A)",
        "status": "Estimated dep. 11:44 PM"
    },
    {
        "flight": "F941",
        "time": "2025-07-07T20:59:00",
        "to": "Guatemala City (GUA)",
        "airline": "Frontier (Jo Jo the Grizzly Bear Livery)",
        "aircraft": "A20N (N335FR)",
        "status": "Estimated dep. 9:15 PM"
    },
    {
        "flight": "F9219",
        "time": "2025-07-07T20:59:00",
        "to": "San Salvador (SAL)",
        "airline": "Frontier (Trixie the Fox Livery)",
        "aircraft": "A20N (N329FR)",
        "status": "Estimated dep. 10:10 PM"
    },
    {
        "flight": "DL520",
        "time": "2025-07-07T21:00:00",
        "to": "New York (LGA)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N392DN)",
        "status": "Estimated dep. 11:30 PM"
    },
    {
        "flight": "F93288",
        "time": "2025-07-07T21:00:00",
        "to": "New York (LGA)",
        "airline": "Frontier (Pike the Otter Livery)",
        "aircraft": "A320 (N235FR)",
        "status": "Estimated dep. 9:00 PM"
    },
    {
        "flight": "TWY247",
        "time": "2025-07-07T21:00:00",
        "to": "Little Rock (LIT)",
        "airline": "Solairus Aviation",
        "aircraft": "F900",
        "status": "Estimated dep. 9:10 PM"
    },
    {
        "flight": "DL2965",
        "time": "2025-07-07T21:06:00",
        "to": "Greenville-Spartanburg (GSP)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N899DN)",
        "status": "Estimated dep. 11:21 PM"
    },
    {
        "flight": "DL5224",
        "time": "2025-07-07T21:08:00",
        "to": "Knoxville (TYS)",
        "airline": "Delta Connection",
        "aircraft": "CRJ9 (N903XJ)",
        "status": "Estimated dep. 11:30 PM"
    },
    {
        "flight": "DL1251",
        "time": "2025-07-07T21:09:00",
        "to": "Tucson (TUS)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N864DN)",
        "status": "Estimated dep. 11:15 PM"
    },
    {
        "flight": "DL4892",
        "time": "2025-07-07T21:09:00",
        "to": "Jacksonville (OAJ)",
        "airline": "Delta Connection",
        "aircraft": "CRJ9 (N186GJ)",
        "status": "Estimated dep. 6:13 AM"
    },
    {
        "flight": "DL493",
        "time": "2025-07-07T21:10:00",
        "to": "Denver (DEN)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N354DN)",
        "status": "Estimated dep. 10:45 PM"
    },
    {
        "flight": "DL2416",
        "time": "2025-07-07T21:15:00",
        "to": "Montreal (YUL)",
        "airline": "Delta Air Lines",
        "aircraft": "A320 (N362NW)",
        "status": "Estimated dep. 10:37 PM"
    },
    {
        "flight": "DL2051",
        "time": "2025-07-07T21:15:00",
        "to": "Houston (HOU)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N974AT)",
        "status": "Estimated dep. 10:50 PM"
    },
    {
        "flight": "DL5074",
        "time": "2025-07-07T21:15:00",
        "to": "Golden Triangle (GTR)",
        "airline": "Delta Connection",
        "aircraft": "CRJ9 (N913XJ)",
        "status": "Estimated dep. 8:05 AM"
    },
    {
        "flight": "DL2945",
        "time": "2025-07-07T21:18:00",
        "to": "Appleton (ATW)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N895AT)",
        "status": "Estimated dep. 11:17 PM"
    },
    {
        "flight": "DL1531",
        "time": "2025-07-07T21:19:00",
        "to": "Albuquerque (ABQ)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N877DN)",
        "status": "Estimated dep. 11:35 PM"
    },
    {
        "flight": "DL5469",
        "time": "2025-07-07T21:19:00",
        "to": "Fayetteville (FAY)",
        "airline": "Delta Connection",
        "aircraft": "CRJ9 (N907XJ)",
        "status": "Estimated dep. 12:01 AM"
    },
    {
        "flight": "DL1011",
        "time": "2025-07-07T21:20:00",
        "to": "Windsor Locks (BDL)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N396DN)",
        "status": "Estimated dep. 1:00 AM"
    },
    {
        "flight": "DL3065",
        "time": "2025-07-07T21:20:00",
        "to": "Huntsville (HSV)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N929AT)",
        "status": "Estimated dep. 11:13 PM"
    },
    {
        "flight": "",
        "time": "2025-07-07T14:00:00",
        "to": "Knoxville (TYS)",
        "airline": "-",
        "aircraft": "S22T (N311CE)",
        "status": "Departed 2:02 PM"
    },
    {
        "flight": "F92174",
        "time": "2025-07-07T21:22:00",
        "to": "Fort Lauderdale (FLL)",
        "airline": "Frontier (Ed, Edwin & Eddie the Penguins Livery)",
        "aircraft": "A20N (N344FR)",
        "status": "Estimated dep. 9:38 PM"
    },
    {
        "flight": "DL2731",
        "time": "2025-07-07T21:22:00",
        "to": "Norfolk (ORF)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N555NW)",
        "status": "Estimated dep. 11:43 PM"
    },
    {
        "flight": "DL5535",
        "time": "2025-07-07T21:23:00",
        "to": "Lafayette (LFT)",
        "airline": "Delta Connection",
        "aircraft": "CRJ9 (N136EV)",
        "status": "Estimated dep. 12:30 AM"
    },
    {
        "flight": "F93782",
        "time": "2025-07-07T21:25:00",
        "to": "Tampa (TPA)",
        "airline": "Frontier Airlines",
        "aircraft": "A320",
        "status": "Estimated dep. 9:41 PM"
    },
    {
        "flight": "DL903",
        "time": "2025-07-07T21:25:00",
        "to": "Seattle (SEA)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N912DU)",
        "status": "Estimated dep. 10:50 PM"
    },
    {
        "flight": "DL1490",
        "time": "2025-07-07T21:25:00",
        "to": "Nashville (BNA)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N936DZ)",
        "status": "Estimated dep. 12:10 AM"
    },
    {
        "flight": "DL825",
        "time": "2025-07-07T21:26:00",
        "to": "Las Vegas (LAS)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N388DN)",
        "status": "Estimated dep. 11:45 PM"
    },
    {
        "flight": "DL1183",
        "time": "2025-07-07T21:26:00",
        "to": "Cincinnati (CVG)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N952DZ)",
        "status": "Estimated dep. 12:18 AM"
    },
    {
        "flight": "DL5491",
        "time": "2025-07-07T21:27:00",
        "to": "Evansville (EVV)",
        "airline": "Delta Connection",
        "aircraft": "CRJ9 (N491PX)",
        "status": "Estimated dep. 12:26 AM"
    },
    {
        "flight": "DL1107",
        "time": "2025-07-07T21:28:00",
        "to": "Fort Lauderdale (FLL)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N6702)",
        "status": "Estimated dep. 11:05 PM"
    },
    {
        "flight": "DL4117",
        "time": "2025-07-07T21:29:00",
        "to": "Fort Wayne (FWA)",
        "airline": "Delta Connection",
        "aircraft": "CRJ9 (N548CA)",
        "status": "Estimated dep. 10:33 PM"
    },
    {
        "flight": "F94075",
        "time": "2025-07-07T21:30:00",
        "to": "Houston (IAH)",
        "airline": "Frontier (Betty the Bluebird Livery)",
        "aircraft": "A320 (N230FR)",
        "status": "Estimated dep. 10:15 PM"
    },
    {
        "flight": "DL1954",
        "time": "2025-07-07T21:31:00",
        "to": "Gulfport (GPT)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N980AT)",
        "status": "Estimated dep. 11:40 PM"
    },
    {
        "flight": "DL1426",
        "time": "2025-07-07T21:32:00",
        "to": "Richmond (RIC)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N550NW)",
        "status": "Estimated dep. 11:45 PM"
    },
    {
        "flight": "DL1784",
        "time": "2025-07-07T21:33:00",
        "to": "Providence (PVD)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N363DN)",
        "status": "Estimated dep. 11:27 PM"
    },
    {
        "flight": "DL2144",
        "time": "2025-07-07T21:33:00",
        "to": "Madison (MSN)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N979AT)",
        "status": "Canceled"
    },
    {
        "flight": "DL1511",
        "time": "2025-07-07T21:34:00",
        "to": "Louisville (SDF)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N922DZ)",
        "status": "Estimated dep. 11:25 PM"
    },
    {
        "flight": "DL2615",
        "time": "2025-07-07T21:34:00",
        "to": "Sioux Falls (FSD)",
        "airline": "Delta Air Lines",
        "aircraft": "A319 (N340NB)",
        "status": "Estimated dep. 10:09 PM"
    },
    {
        "flight": "DL3023",
        "time": "2025-07-07T21:35:00",
        "to": "Kansas City (MCI)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N951DX)",
        "status": "Estimated dep. 11:23 PM"
    },
    {
        "flight": "DL2450",
        "time": "2025-07-07T21:35:00",
        "to": "Blountville (TRI)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N960AT)",
        "status": "Estimated dep. 11:35 PM"
    },
    {
        "flight": "DL2584",
        "time": "2025-07-07T21:35:00",
        "to": "Albany (ALB)",
        "airline": "Delta Air Lines",
        "aircraft": "A320 (N340NW)",
        "status": "Estimated dep. 12:09 AM"
    },
    {
        "flight": "DL2865",
        "time": "2025-07-07T21:35:00",
        "to": "Grand Rapids (GRR)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N850DN)",
        "status": "Estimated dep. 10:39 PM"
    },
    {
        "flight": "DL3137",
        "time": "2025-07-07T21:35:00",
        "to": "Charlotte (CLT)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N896AT)",
        "status": "Estimated dep. 11:05 PM"
    },
    {
        "flight": "DL5452",
        "time": "2025-07-07T21:35:00",
        "to": "Monroe (MLU)",
        "airline": "Delta Connection",
        "aircraft": "CRJ7 (N641CA)",
        "status": "Estimated dep. 12:14 AM"
    },
    {
        "flight": "VJT878",
        "time": "2025-07-07T21:35:00",
        "to": "Atlanta (PDK)",
        "airline": "VistaJet",
        "aircraft": "GLEX",
        "status": "Estimated dep. 9:45 PM"
    },
    {
        "flight": "DL1081",
        "time": "2025-07-07T21:37:00",
        "to": "Austin (AUS)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N311DN)",
        "status": "Estimated dep. 11:40 PM"
    },
    {
        "flight": "DL1617",
        "time": "2025-07-07T21:39:00",
        "to": "Greensboro (GSO)",
        "airline": "Delta Air Lines",
        "aircraft": "B738 (N395DN)",
        "status": "Estimated dep. 10:00 PM"
    },
    {
        "flight": "DL1167",
        "time": "2025-07-07T21:40:00",
        "to": "Tampa (TPA)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N687DL)",
        "status": "Estimated dep. 12:18 AM"
    },
    {
        "flight": "DL1232",
        "time": "2025-07-07T21:40:00",
        "to": "Detroit (DTW)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N819DX)",
        "status": "Estimated dep. 11:07 PM"
    },
    {
        "flight": "DL2860",
        "time": "2025-07-07T21:40:00",
        "to": "Savannah (SAV)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N816DN)",
        "status": "Estimated dep. 10:00 PM"
    },
    {
        "flight": "DL1381",
        "time": "2025-07-07T21:40:00",
        "to": "Charleston (CHS)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N890DN)",
        "status": "Estimated dep. 12:30 AM"
    },
    {
        "flight": "DL1501",
        "time": "2025-07-07T21:40:00",
        "to": "Columbus (CMH)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N863DN)",
        "status": "Estimated dep. 11:30 PM"
    },
    {
        "flight": "DL2034",
        "time": "2025-07-07T21:40:00",
        "to": "Birmingham (BHM)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N954DZ)",
        "status": "Estimated dep. 11:23 PM"
    },
    {
        "flight": "DL3932",
        "time": "2025-07-07T21:40:00",
        "to": "Springfield (SGF)",
        "airline": "Delta Connection",
        "aircraft": "CRJ7 (N776SK)",
        "status": "Estimated dep. 10:39 PM"
    },
    {
        "flight": "DL2504",
        "time": "2025-07-07T21:42:00",
        "to": "Tallahassee (TLH)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N986AT)",
        "status": "Estimated dep. 11:30 PM"
    },
    {
        "flight": "DL2565",
        "time": "2025-07-07T21:42:00",
        "to": "Indianapolis (IND)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N956DZ)",
        "status": "Estimated dep. 11:06 PM"
    },
    {
        "flight": "DL842",
        "time": "2025-07-07T21:44:00",
        "to": "Phoenix (PHX)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N374DX)",
        "status": "Estimated dep. 10:39 PM"
    },
    {
        "flight": "DL32",
        "time": "2025-07-07T21:45:00",
        "to": "London (LHR)",
        "airline": "Delta Air Lines",
        "aircraft": "B764 (N837MH)",
        "status": "Estimated dep. 10:29 PM"
    },
    {
        "flight": "DL1001",
        "time": "2025-07-07T21:45:00",
        "to": "Jacksonville (JAX)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N673DL)",
        "status": "Estimated dep. 11:43 PM"
    },
    {
        "flight": "DL1162",
        "time": "2025-07-07T21:45:00",
        "to": "Orlando (MCO)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N820DX)",
        "status": "Estimated dep. 11:15 PM"
    },
    {
        "flight": "DL2123",
        "time": "2025-07-07T21:45:00",
        "to": "Syracuse (SYR)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N106DN)",
        "status": "Estimated dep. 11:45 PM"
    },
    {
        "flight": "NK2349",
        "time": "2025-07-07T21:45:00",
        "to": "Detroit (DTW)",
        "airline": "Spirit Airlines",
        "aircraft": "A21N (N718NK)",
        "status": "Estimated dep. 11:48 PM"
    },
    {
        "flight": "TK32",
        "time": "2025-07-07T21:45:00",
        "to": "Istanbul (IST)",
        "airline": "Turkish Airlines",
        "aircraft": "B789 (TC-LLY)",
        "status": "Estimated dep. 11:25 PM"
    },
    {
        "flight": "WN2622",
        "time": "2025-07-07T21:45:00",
        "to": "Dallas (DAL)",
        "airline": "Southwest Airlines",
        "aircraft": "B737 (N904WN)",
        "status": "Estimated dep. 12:11 AM"
    },
    {
        "flight": "TWY50",
        "time": "2025-07-07T21:45:00",
        "to": "Santa Barbara (SBA)",
        "airline": "Solairus Aviation",
        "aircraft": "FA7X",
        "status": "Estimated dep. 9:45 PM"
    },
    {
        "flight": "DL2306",
        "time": "2025-07-07T21:46:00",
        "to": "Des Moines (DSM)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N966AT)",
        "status": "Estimated dep. 11:26 PM"
    },
    {
        "flight": "F92272",
        "time": "2025-07-07T21:46:00",
        "to": "Miami (MIA)",
        "airline": "Frontier (Elrey the Elk Livery)",
        "aircraft": "A20N (N370FR)",
        "status": "Estimated dep. 10:02 PM"
    },
    {
        "flight": "DL331",
        "time": "2025-07-07T21:47:00",
        "to": "Los Angeles (LAX)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N342DN)",
        "status": "Canceled"
    },
    {
        "flight": "DL2334",
        "time": "2025-07-07T21:47:00",
        "to": "Buffalo (BUF)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N824DN)",
        "status": "Estimated dep. 11:21 PM"
    },
    {
        "flight": "DL2138",
        "time": "2025-07-07T21:48:00",
        "to": "Portland (PWM)",
        "airline": "Delta Air Lines",
        "aircraft": "A320 (N319US)",
        "status": "Estimated dep. 12:14 AM"
    },
    {
        "flight": "DL5225",
        "time": "2025-07-07T21:48:00",
        "to": "Charlottesville (CHO)",
        "airline": "Delta Connection",
        "aircraft": "CRJ9 (N228PQ)",
        "status": "Estimated dep. 11:28 PM"
    },
    {
        "flight": "DL84",
        "time": "2025-07-07T21:50:00",
        "to": "Paris (CDG)",
        "airline": "Delta Air Lines",
        "aircraft": "B764 (N833MH)",
        "status": "Estimated dep. 12:13 AM"
    },
    {
        "flight": "DL147",
        "time": "2025-07-07T21:50:00",
        "to": "Santiago (SCL)",
        "airline": "Delta Air Lines",
        "aircraft": "A359 (N528DN)",
        "status": "Estimated dep. 10:00 PM"
    },
    {
        "flight": "DL971",
        "time": "2025-07-07T21:50:00",
        "to": "Cleveland (CLE)",
        "airline": "Delta Air Lines",
        "aircraft": "B738 (N3762Y)",
        "status": "Estimated dep. 11:17 PM"
    },
    {
        "flight": "DL2315",
        "time": "2025-07-07T21:50:00",
        "to": "Baton Rouge (BTR)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N951AT)",
        "status": "Estimated dep. 10:58 PM"
    },
    {
        "flight": "DL2626",
        "time": "2025-07-07T21:50:00",
        "to": "Cedar Rapids (CID)",
        "airline": "Delta Air Lines",
        "aircraft": "B738 (N3743H)",
        "status": "Estimated dep. 12:09 AM"
    },
    {
        "flight": "DL3086",
        "time": "2025-07-07T21:50:00",
        "to": "Pensacola (PNS)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N544US)",
        "status": "Estimated dep. 12:00 AM"
    },
    {
        "flight": "DL4950",
        "time": "2025-07-07T21:50:00",
        "to": "Moline (MLI)",
        "airline": "Delta Connection",
        "aircraft": "CRJ9 (N186GJ)",
        "status": "Estimated dep. 11:19 PM"
    },
    {
        "flight": "DL478",
        "time": "2025-07-07T21:52:00",
        "to": "Portland (PDX)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N825DN)",
        "status": "Estimated dep. 11:43 PM"
    },
    {
        "flight": "DL1577",
        "time": "2025-07-07T21:53:00",
        "to": "Memphis (MEM)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N809DN)",
        "status": "Estimated dep. 12:00 AM"
    },
    {
        "flight": "DL2072",
        "time": "2025-07-07T21:54:00",
        "to": "New Orleans (MSY)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N684DA)",
        "status": "Estimated dep. 12:04 AM"
    },
    {
        "flight": "WN3978",
        "time": "2025-07-07T21:55:00",
        "to": "Chicago (MDW)",
        "airline": "Southwest Airlines",
        "aircraft": "B737 (N268WN)",
        "status": "Estimated dep. 10:46 PM"
    },
    {
        "flight": "DL3244",
        "time": "2025-07-07T21:56:00",
        "to": "Raleigh-Durham (RDU)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N940DU)",
        "status": "Estimated dep. 11:51 PM"
    },
    {
        "flight": "DL1495",
        "time": "2025-07-07T21:57:00",
        "to": "West Palm Beach (PBI)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N329DN)",
        "status": "Estimated dep. 11:59 PM"
    },
    {
        "flight": "DL896",
        "time": "2025-07-07T21:58:00",
        "to": "San Diego (SAN)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N103DY)",
        "status": "Estimated dep. 11:55 PM"
    },
    {
        "flight": "DL3079",
        "time": "2025-07-07T21:58:00",
        "to": "Gainesville (GNV)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N891AT)",
        "status": "Estimated dep. 12:35 AM"
    },
    {
        "flight": "DL537",
        "time": "2025-07-07T21:59:00",
        "to": "Washington (DCA)",
        "airline": "Delta Air Lines",
        "aircraft": "A319 (N358NB)",
        "status": "Estimated dep. 11:00 PM"
    },
    {
        "flight": "DL4866",
        "time": "2025-07-07T21:59:00",
        "to": "Bloomington (BMI)",
        "airline": "Delta Air Lines",
        "aircraft": "CRJ9",
        "status": "Estimated dep. 1:53 AM"
    },
    {
        "flight": "DL5362",
        "time": "2025-07-07T21:59:00",
        "to": "Charleston (CRW)",
        "airline": "Delta Connection",
        "aircraft": "CRJ7 (N398CA)",
        "status": "Estimated dep. 11:49 PM"
    },
    {
        "flight": "F99832",
        "time": "2025-07-07T22:00:00",
        "to": "New York (LGA)",
        "airline": "Frontier Airlines",
        "aircraft": "A320",
        "status": "Estimated dep. 10:16 PM"
    },
    {
        "flight": "DL1055",
        "time": "2025-07-07T22:02:00",
        "to": "Harrisburg (MDT)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N893AT)",
        "status": "Estimated dep. 11:13 PM"
    },
    {
        "flight": "DL2948",
        "time": "2025-07-07T22:05:00",
        "to": "Green Bay (GRB)",
        "airline": "Delta Air Lines",
        "aircraft": "B738 (N393DA)",
        "status": "Estimated dep. 11:15 PM"
    },
    {
        "flight": "DL2959",
        "time": "2025-07-07T22:15:00",
        "to": "Wichita (ICT)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N939AT)",
        "status": "Estimated dep. 10:59 PM"
    },
    {
        "flight": "F92779",
        "time": "2025-07-07T22:15:00",
        "to": "Chicago (MDW)",
        "airline": "Frontier (Stretch the Great Blue Heron Livery)",
        "aircraft": "A20N (N334FR)",
        "status": "Estimated dep. 1:07 AM"
    },
    {
        "flight": "F94602",
        "time": "2025-07-07T22:15:00",
        "to": "New York (EWR)",
        "airline": "Frontier (Brazos the Ridgway's Hawk)",
        "aircraft": "A21N (N658FR)",
        "status": "Estimated dep. 12:16 AM"
    },
    {
        "flight": "F91082",
        "time": "2025-07-07T22:15:00",
        "to": "Washington (IAD)",
        "airline": "Frontier (Lone Star the Longhorn Steer Livery)",
        "aircraft": "A20N (N347FR)",
        "status": "Estimated dep. 12:34 AM"
    },
    {
        "flight": "F94818",
        "time": "2025-07-07T22:15:00",
        "to": "New York (JFK)",
        "airline": "Frontier (Pike the Otter Livery)",
        "aircraft": "A320 (N235FR)",
        "status": "Estimated dep. 10:53 PM"
    },
    {
        "flight": "DL2435",
        "time": "2025-07-07T22:16:00",
        "to": "Melbourne (MLB)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N607AT)",
        "status": "Estimated dep. 11:15 PM"
    },
    {
        "flight": "BA226",
        "time": "2025-07-07T22:20:00",
        "to": "London (LHR)",
        "airline": "British Airways",
        "aircraft": "B772 (G-VIIK)",
        "status": "Estimated dep. 10:20 PM"
    },
    {
        "flight": "DL200",
        "time": "2025-07-07T22:20:00",
        "to": "Johannesburg (JNB)",
        "airline": "Delta Air Lines",
        "aircraft": "A359 (N575DZ)",
        "status": "Estimated dep. 11:05 PM"
    },
    {
        "flight": "F92552",
        "time": "2025-07-07T22:24:00",
        "to": "Philadelphia (PHL)",
        "airline": "Frontier (D&A the Hispaniolan Parakeets Livery)",
        "aircraft": "A21N (N635FR)",
        "status": "Estimated dep. 11:32 PM"
    },
    {
        "flight": "F92510",
        "time": "2025-07-07T22:26:00",
        "to": "Baltimore (BWI)",
        "airline": "Frontier (Trixie the Fox Livery)",
        "aircraft": "A20N (N329FR)",
        "status": "Estimated dep. 12:00 AM"
    },
    {
        "flight": "DL269",
        "time": "2025-07-07T22:30:00",
        "to": "Sao Paulo (GRU)",
        "airline": "Delta Air Lines",
        "aircraft": "A333 (N802NW)",
        "status": "Estimated dep. 11:15 PM"
    },
    {
        "flight": "DL4058",
        "time": "2025-07-07T22:30:00",
        "to": "Shreveport (SHV)",
        "airline": "Delta Connection",
        "aircraft": "CRJ9 (N816SK)",
        "status": "Estimated dep. 10:30 PM"
    },
    {
        "flight": "CI5345",
        "time": "2025-07-07T22:30:00",
        "to": "San Francisco (SFO)",
        "airline": "China Airlines",
        "aircraft": "B77L",
        "status": "Estimated dep. 10:49 PM"
    },
    {
        "flight": "8C8028",
        "time": "2025-07-07T22:30:00",
        "to": "Houston (IAH)",
        "airline": "Air Transport International",
        "aircraft": "B763",
        "status": "Estimated dep. 10:43 PM"
    },
    {
        "flight": "DL1774",
        "time": "2025-07-07T22:35:00",
        "to": "Dayton (DAY)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N991AT)",
        "status": "Estimated dep. 12:23 AM"
    },
    {
        "flight": "5Y6040",
        "time": "2025-07-07T22:35:00",
        "to": "Istanbul (IST)",
        "airline": "Atlas Air",
        "aircraft": "74F",
        "status": "Scheduled"
    },
    {
        "flight": "KL622",
        "time": "2025-07-07T22:40:00",
        "to": "Amsterdam (AMS)",
        "airline": "KLM",
        "aircraft": "B77W (PH-BVN)",
        "status": "Estimated dep. 11:01 PM"
    },
    {
        "flight": "DL865",
        "time": "2025-07-07T22:40:00",
        "to": "Boston (BOS)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N336DX)",
        "status": "Canceled"
    },
    {
        "flight": "DL2386",
        "time": "2025-07-07T22:40:00",
        "to": "New York (JFK)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N6715C)",
        "status": "Estimated dep. 12:45 AM"
    },
    {
        "flight": "DL2997",
        "time": "2025-07-07T22:40:00",
        "to": "Sarasota (SRQ)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N547US)",
        "status": "Estimated dep. 12:01 AM"
    },
    {
        "flight": "DL1959",
        "time": "2025-07-07T22:41:00",
        "to": "Charlotte (CLT)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N946AT)",
        "status": "Estimated dep. 11:52 PM"
    },
    {
        "flight": "DL1560",
        "time": "2025-07-07T22:42:00",
        "to": "Tampa (TPA)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N823DX)",
        "status": "Estimated dep. 11:22 PM"
    },
    {
        "flight": "DL453",
        "time": "2025-07-07T22:43:00",
        "to": "Salt Lake City (SLC)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N123DW)",
        "status": "Estimated dep. 10:43 PM"
    },
    {
        "flight": "DL1104",
        "time": "2025-07-07T22:43:00",
        "to": "Dallas (DAL)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N988AT)",
        "status": "Canceled"
    },
    {
        "flight": "DL2590",
        "time": "2025-07-07T22:43:00",
        "to": "Baltimore (BWI)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N556NW)",
        "status": "Estimated dep. 11:44 PM"
    },
    {
        "flight": "DL2213",
        "time": "2025-07-07T22:44:00",
        "to": "Lexington (LEX)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N953AT)",
        "status": "Estimated dep. 1:12 AM"
    },
    {
        "flight": "DL2549",
        "time": "2025-07-07T22:44:00",
        "to": "Washington (IAD)",
        "airline": "Delta Air Lines",
        "aircraft": "BCS3 (N332DU)",
        "status": "Estimated dep. 12:12 AM"
    },
    {
        "flight": "DL1562",
        "time": "2025-07-07T22:45:00",
        "to": "Orlando (MCO)",
        "airline": "Delta Air Lines",
        "aircraft": "B753 (N590NW)",
        "status": "Estimated dep. 10:45 PM"
    },
    {
        "flight": "DL2276",
        "time": "2025-07-07T22:45:00",
        "to": "Jacksonville (JAX)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N685DA)",
        "status": "Estimated dep. 12:20 AM"
    },
    {
        "flight": "DL3070",
        "time": "2025-07-07T22:45:00",
        "to": "Wilmington (ILM)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N922AT)",
        "status": "Estimated dep. 11:07 PM"
    },
    {
        "flight": "DL793",
        "time": "2025-07-07T22:46:00",
        "to": "Las Vegas (LAS)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N380DN)",
        "status": "Estimated dep. 11:49 PM"
    },
    {
        "flight": "DL2552",
        "time": "2025-07-07T22:46:00",
        "to": "New York (EWR)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N313DN)",
        "status": "Estimated dep. 11:59 PM"
    },
    {
        "flight": "DL656",
        "time": "2025-07-07T22:47:00",
        "to": "San Francisco (SFO)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N904DN)",
        "status": "Estimated dep. 11:15 PM"
    },
    {
        "flight": "DL1601",
        "time": "2025-07-07T22:47:00",
        "to": "Houston (IAH)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N331DN)",
        "status": "Estimated dep. 12:45 AM"
    },
    {
        "flight": "DL2850",
        "time": "2025-07-07T22:48:00",
        "to": "Charleston (CHS)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N937DZ)",
        "status": "Estimated dep. 12:01 AM"
    },
    {
        "flight": "DL2423",
        "time": "2025-07-07T22:49:00",
        "to": "Oklahoma City (OKC)",
        "airline": "Delta Air Lines",
        "aircraft": "A319 (N362NB)",
        "status": "Estimated dep. 11:22 PM"
    },
    {
        "flight": "DL3029",
        "time": "2025-07-07T22:49:00",
        "to": "Columbia (CAE)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N989AT)",
        "status": "Estimated dep. 11:54 PM"
    },
    {
        "flight": "F94036",
        "time": "2025-07-07T22:50:00",
        "to": "Cleveland (CLE)",
        "airline": "Frontier Airlines",
        "aircraft": "A21N (N667FR)",
        "status": "Estimated dep. 10:50 PM"
    },
    {
        "flight": "DL1199",
        "time": "2025-07-07T22:50:00",
        "to": "Chicago (ORD)",
        "airline": "Delta Air Lines",
        "aircraft": "B738 (N380DA)",
        "status": "Estimated dep. 12:30 AM"
    },
    {
        "flight": "DL2043",
        "time": "2025-07-07T22:50:00",
        "to": "Tulsa (TUL)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N961AT)",
        "status": "Estimated dep. 12:12 AM"
    },
    {
        "flight": "DL2338",
        "time": "2025-07-07T22:50:00",
        "to": "Norfolk (ORF)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N6701)",
        "status": "Estimated dep. 12:27 AM"
    },
    {
        "flight": "DL2472",
        "time": "2025-07-07T22:50:00",
        "to": "Rochester (ROC)",
        "airline": "Delta Air Lines",
        "aircraft": "A320 (N373NW)",
        "status": "Estimated dep. 12:10 AM"
    },
    {
        "flight": "DL3116",
        "time": "2025-07-07T22:50:00",
        "to": "Asheville (AVL)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N979AT)",
        "status": "Estimated dep. 11:47 PM"
    },
    {
        "flight": "DL1508",
        "time": "2025-07-07T22:52:00",
        "to": "San Antonio (SAT)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N119DN)",
        "status": "Estimated dep. 12:32 AM"
    },
    {
        "flight": "DL2395",
        "time": "2025-07-07T22:52:00",
        "to": "Cincinnati (CVG)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N960DZ)",
        "status": "Estimated dep. 12:17 AM"
    },
    {
        "flight": "DL3164",
        "time": "2025-07-07T22:54:00",
        "to": "Richmond (RIC)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N6714Q)",
        "status": "Estimated dep. 12:19 AM"
    },
    {
        "flight": "DL1351",
        "time": "2025-07-07T22:54:00",
        "to": "Pittsburgh (PIT)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N955DZ)",
        "status": "Estimated dep. 12:09 AM"
    },
    {
        "flight": "DL101",
        "time": "2025-07-07T22:55:00",
        "to": "Buenos Aires (EZE)",
        "airline": "Delta Air Lines",
        "aircraft": "A339 (N409DX)",
        "status": "Estimated dep. 10:55 PM"
    },
    {
        "flight": "DL3098",
        "time": "2025-07-07T22:55:00",
        "to": "Austin (AUS)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N393DN)",
        "status": "Estimated dep. 10:55 PM"
    },
    {
        "flight": "DL3955",
        "time": "2025-07-07T22:55:00",
        "to": "Montgomery (MGM)",
        "airline": "American Eagle",
        "aircraft": "CRJ7 (N712SK)",
        "status": "Estimated dep. 10:55 PM"
    },
    {
        "flight": "DL5358",
        "time": "2025-07-07T22:55:00",
        "to": "Augusta (AGS)",
        "airline": "Delta Connection",
        "aircraft": "CRJ9 (N607LR)",
        "status": "Estimated dep. 1:31 AM"
    },
    {
        "flight": "3S457",
        "time": "2025-07-07T22:55:00",
        "to": "Frankfurt (FRA)",
        "airline": "DHL",
        "aircraft": "B77L (D-AALT)",
        "status": "Estimated dep. 11:05 PM"
    },
    {
        "flight": "DL3247",
        "time": "2025-07-07T22:56:00",
        "to": "Raleigh-Durham (RDU)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N957DZ)",
        "status": "Estimated dep. 1:05 AM"
    },
    {
        "flight": "DL1310",
        "time": "2025-07-07T22:57:00",
        "to": "Minneapolis (MSP)",
        "airline": "Delta Air Lines",
        "aircraft": "B753 (N594NW)",
        "status": "Estimated dep. 11:15 PM"
    },
    {
        "flight": "F93397",
        "time": "2025-07-07T22:58:00",
        "to": "Chicago (ORD)",
        "airline": "Frontier (Scarlet the Tanager Livery)",
        "aircraft": "A20N (N354FR)",
        "status": "Estimated dep. 12:21 AM"
    },
    {
        "flight": "DL956",
        "time": "2025-07-07T22:58:00",
        "to": "Denver (DEN)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N366DX)",
        "status": "Estimated dep. 10:58 PM"
    },
    {
        "flight": "DL2940",
        "time": "2025-07-07T22:58:00",
        "to": "Detroit (DTW)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N698DL)",
        "status": "Estimated dep. 10:58 PM"
    },
    {
        "flight": "DL575",
        "time": "2025-07-07T22:59:00",
        "to": "Los Angeles (LAX)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N117DX)",
        "status": "Estimated dep. 11:57 PM"
    },
    {
        "flight": "DL1058",
        "time": "2025-07-07T22:59:00",
        "to": "West Palm Beach (PBI)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N358DN)",
        "status": "Estimated dep. 11:47 PM"
    },
    {
        "flight": "DL2911",
        "time": "2025-07-07T22:59:00",
        "to": "Kansas City (MCI)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N949DZ)",
        "status": "Estimated dep. 11:36 PM"
    },
    {
        "flight": "DL3074",
        "time": "2025-07-07T22:59:00",
        "to": "Myrtle Beach (MYR)",
        "airline": "Delta Air Lines",
        "aircraft": "A320 (N378NW)",
        "status": "Estimated dep. 10:59 PM"
    },
    {
        "flight": "DL2412",
        "time": "2025-07-07T23:00:00",
        "to": "Chattanooga (CHA)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N985AT)",
        "status": "Estimated dep. 11:00 PM"
    },
    {
        "flight": "DL2657",
        "time": "2025-07-07T23:00:00",
        "to": "Indianapolis (IND)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N923DZ)",
        "status": "Estimated dep. 11:00 PM"
    },
    {
        "flight": "AF35",
        "time": "2025-07-07T23:00:00",
        "to": "Paris (CDG)",
        "airline": "Air France",
        "aircraft": "B772 (F-GSPM)",
        "status": "Estimated dep. 11:12 PM"
    },
    {
        "flight": "DL1229",
        "time": "2025-07-07T23:00:00",
        "to": "Fort Lauderdale (FLL)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N6716C)",
        "status": "Estimated dep. 11:05 PM"
    },
    {
        "flight": "DL1268",
        "time": "2025-07-07T23:00:00",
        "to": "Milwaukee (MKE)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N911DQ)",
        "status": "Estimated dep. 11:19 PM"
    },
    {
        "flight": "DL1589",
        "time": "2025-07-07T23:00:00",
        "to": "Miami (MIA)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N6704Z)",
        "status": "Estimated dep. 11:00 PM"
    },
    {
        "flight": "DL2281",
        "time": "2025-07-07T23:00:00",
        "to": "Greenville-Spartanburg (GSP)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N919DU)",
        "status": "Estimated dep. 11:00 PM"
    },
    {
        "flight": "DL2372",
        "time": "2025-07-07T23:00:00",
        "to": "Roanoke (ROA)",
        "airline": "Delta Air Lines",
        "aircraft": "A319 (N326NB)",
        "status": "Estimated dep. 11:00 PM"
    },
    {
        "flight": "DL2642",
        "time": "2025-07-07T23:00:00",
        "to": "Philadelphia (PHL)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N309DN)",
        "status": "Estimated dep. 11:45 PM"
    },
    {
        "flight": "",
        "time": "2025-07-07T14:00:00",
        "to": "Knoxville (TYS)",
        "airline": "-",
        "aircraft": "S22T (N311CE)",
        "status": "Departed 2:02 PM"
    },
    {
        "flight": "EJA857",
        "time": "2025-07-07T20:30:00",
        "to": "Nashville (QQN)",
        "airline": "NetJets",
        "aircraft": "-",
        "status": "Estimated dep. 8:36 PM"
    },
    {
        "flight": "DL3072",
        "time": "2025-07-07T23:03:00",
        "to": "Knoxville (TYS)",
        "airline": "Delta Air Lines (SkyTeam Livery)",
        "aircraft": "B738 (N381DN)",
        "status": "Estimated dep. 1:08 AM"
    },
    {
        "flight": "DL2425",
        "time": "2025-07-07T23:05:00",
        "to": "Savannah (SAV)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N892DN)",
        "status": "Estimated dep. 11:05 PM"
    },
    {
        "flight": "DL3005",
        "time": "2025-07-07T23:05:00",
        "to": "Greensboro (GSO)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N954AT)",
        "status": "Estimated dep. 1:55 AM"
    },
    {
        "flight": "DL34",
        "time": "2025-07-07T23:05:00",
        "to": "Edinburgh (EDI)",
        "airline": "Delta Air Lines",
        "aircraft": "B763 (N180DN)",
        "status": "Estimated dep. 11:50 PM"
    },
    {
        "flight": "DL818",
        "time": "2025-07-07T23:05:00",
        "to": "Dallas (DFW)",
        "airline": "Delta Air Lines",
        "aircraft": "A321 (N326DN)",
        "status": "Estimated dep. 11:05 PM"
    },
    {
        "flight": "DL1320",
        "time": "2025-07-07T23:05:00",
        "to": "Cleveland (CLE)",
        "airline": "Delta Air Lines",
        "aircraft": "B739",
        "status": "Estimated dep. 11:05 PM"
    },
    {
        "flight": "DL1459",
        "time": "2025-07-07T23:05:00",
        "to": "Columbus (CMH)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N891DN)",
        "status": "Estimated dep. 12:10 AM"
    },
    {
        "flight": "DL2495",
        "time": "2025-07-07T23:05:00",
        "to": "Omaha (OMA)",
        "airline": "Delta Air Lines",
        "aircraft": "A320 (N339NW)",
        "status": "Estimated dep. 11:54 PM"
    },
    {
        "flight": "DL3034",
        "time": "2025-07-07T23:05:00",
        "to": "Daytona Beach (DAB)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N948DZ)",
        "status": "Estimated dep. 12:18 AM"
    },
    {
        "flight": "DL5472",
        "time": "2025-07-07T23:05:00",
        "to": "Bentonville (XNA)",
        "airline": "Delta Connection",
        "aircraft": "CRJ9 (N924XJ)",
        "status": "Estimated dep. 11:43 PM"
    },
    {
        "flight": "DL1217",
        "time": "2025-07-07T23:05:00",
        "to": "Fort Myers (RSW)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N551NW)",
        "status": "Estimated dep. 11:05 PM"
    },
    {
        "flight": "DL3193",
        "time": "2025-07-07T23:10:00",
        "to": "Nashville (BNA)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N939DZ)",
        "status": "Estimated dep. 11:56 PM"
    },
    {
        "flight": "DL1403",
        "time": "2025-07-07T23:10:00",
        "to": "St. Louis (STL)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N927DZ)",
        "status": "Estimated dep. 11:29 PM"
    },
    {
        "flight": "DL2029",
        "time": "2025-07-07T23:10:00",
        "to": "Mobile (MOB)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N965AT)",
        "status": "Estimated dep. 1:09 AM"
    },
    {
        "flight": "DL2083",
        "time": "2025-07-07T23:10:00",
        "to": "Little Rock (LIT)",
        "airline": "Delta Air Lines",
        "aircraft": "B738 (N3735D)",
        "status": "Estimated dep. 1:18 AM"
    },
    {
        "flight": "DL2224",
        "time": "2025-07-07T23:10:00",
        "to": "New Orleans (MSY)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N6712B)",
        "status": "Estimated dep. 12:02 AM"
    },
    {
        "flight": "DL2624",
        "time": "2025-07-07T23:10:00",
        "to": "Louisville (SDF)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N953DZ)",
        "status": "Estimated dep. 11:39 PM"
    },
    {
        "flight": "DL3117",
        "time": "2025-07-07T23:10:00",
        "to": "Jackson (JAN)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N603AT)",
        "status": "Estimated dep. 11:10 PM"
    },
    {
        "flight": "5X1303",
        "time": "2025-07-07T23:11:00",
        "to": "Louisville (SDF)",
        "airline": "UPS",
        "aircraft": "MD11 (N275UP)",
        "status": "Estimated dep. 11:22 PM"
    },
    {
        "flight": "DL3022",
        "time": "2025-07-07T23:15:00",
        "to": "Huntsville (HSV)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N933AT)",
        "status": "Estimated dep. 1:40 AM"
    },
    {
        "flight": "DL2741",
        "time": "2025-07-07T23:15:00",
        "to": "Birmingham (BHM)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N962DZ)",
        "status": "Estimated dep. 12:31 AM"
    },
    {
        "flight": "DL3097",
        "time": "2025-07-07T23:15:00",
        "to": "Destin Fort Walton Beach (VPS)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N995AT)",
        "status": "Estimated dep. 12:02 AM"
    },
    {
        "flight": "DL3130",
        "time": "2025-07-07T23:15:00",
        "to": "Pensacola (PNS)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N819DN)",
        "status": "Estimated dep. 11:15 PM"
    },
    {
        "flight": "DL3131",
        "time": "2025-07-07T23:15:00",
        "to": "Panama City (ECP)",
        "airline": "Delta Air Lines",
        "aircraft": "B739 (N828DN)",
        "status": "Estimated dep. 11:15 PM"
    },
    {
        "flight": "DL2501",
        "time": "2025-07-07T23:18:00",
        "to": "Memphis (MEM)",
        "airline": "Delta Air Lines",
        "aircraft": "B712 (N942AT)",
        "status": "Estimated dep. 11:46 PM"
    },
    {
        "flight": "LA2483",
        "time": "2025-07-07T23:20:00",
        "to": "Lima (LIM)",
        "airline": "LATAM Airlines",
        "aircraft": "B763 (CC-CXC)",
        "status": "Estimated dep. 11:30 PM"
    },
    {
        "flight": "DL27",
        "time": "2025-07-07T23:41:00",
        "to": "Seoul (ICN)",
        "airline": "Delta Air Lines (100 Years Livery)",
        "aircraft": "A359 (N527DN)",
        "status": "Estimated dep. 11:41 PM"
    },
    {
        "flight": "DL326",
        "time": "2025-07-07T23:43:00",
        "to": "Tampa (TPA)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N542US)",
        "status": "Canceled"
    },
    {
        "flight": "DL61",
        "time": "2025-07-07T23:45:00",
        "to": "Rio de Janeiro (GIG)",
        "airline": "Delta Air Lines",
        "aircraft": "B763 (N192DN)",
        "status": "Estimated dep. 12:02 AM"
    },
    {
        "flight": "FX1263",
        "time": "2025-07-07T23:49:00",
        "to": "Memphis (MEM)",
        "airline": "FedEx",
        "aircraft": "B763 (N263FE)",
        "status": "Estimated dep. 11:49 PM"
    },
    {
        "flight": "DL1096",
        "time": "2025-07-07T23:55:00",
        "to": "Jacksonville (JAX)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N6706Q)",
        "status": "Estimated dep. 1:24 AM"
    },
    {
        "flight": "DL1735",
        "time": "2025-07-07T23:55:00",
        "to": "Orlando (MCO)",
        "airline": "Delta Air Lines",
        "aircraft": "B752 (N6713Y)",
        "status": "Estimated dep. 12:12 AM"
    },
    {
        "flight": "DL36",
        "time": "2025-07-07T23:59:00",
        "to": "London (LHR)",
        "airline": "Delta Air Lines",
        "aircraft": "A339 (N407DX)",
        "status": "Estimated dep. 12:16 AM"
    }
]

export default MockDepartureData;