const MockArrivalData = [
    {
        flight: "NK2493",
        time: "2025-07-07T00:17:00",
        from: "Detroit (DTW)",
        airline: "Spirit Airlines",
        aircraft: "A21N (N742NK)",
        status: "Landed 11:52 PM"
    },
    {
        flight: "DL2190",
        time: "2025-07-07T00:23:00",
        from: "New York (JFK)",
        airline: "Delta Air Lines",
        aircraft: "A21N (N530DE)",
        status: "Landed 12:59 AM"
    },
    {
        flight: "NK2302",
        time: "2025-07-07T00:24:00",
        from: "Orlando (MCO)",
        airline: "Spirit Airlines",
        aircraft: "A21N (N716NK)",
        status: "Landed 11:59 PM"
    },
    {
        flight: "NK2564",
        time: "2025-07-07T00:26:00",
        from: "Fort Lauderdale (FLL)",
        airline: "Spirit Airlines",
        aircraft: "A321 (N661NK)",
        status: "Landed 1:45 AM"
    },
    {
        flight: "AA659",
        time: "2025-07-07T00:40:00",
        from: "Miami (MIA)",
        airline: "American Airlines",
        aircraft: "A319 (N4005X)",
        status: "Landed 12:46 AM"
    },
    {
        flight: "DL471",
        time: "2025-07-07T00:54:00",
        from: "Los Angeles (LAX)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N891DN)",
        status: "Landed 12:43 AM"
    },
    {
        flight: "CV6105",
        time: "2025-07-07T01:00:00",
        from: "San Juan (SJU)",
        airline: "Cargolux",
        aircraft: "B744 (LX-ECV)",
        status: "Landed 1:31 AM"
    },
    {
        flight: "CV6104",
        time: "2025-07-07T01:00:00",
        from: "San Juan (SJU)",
        airline: "Cargolux",
        aircraft: "747",
        status: "Unknown"
    },
    {
        flight: "DL797",
        time: "2025-07-07T01:35:00",
        from: "Seattle (SEA)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N874DN)",
        status: "Landed 1:20 AM"
    },
    {
        flight: "DL8877",
        time: "2025-07-07T01:41:00",
        from: "New York (JFK)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N649DL)",
        status: "Landed 2:04 AM"
    },
    {
        flight: "DL9963",
        time: "2025-07-07T02:04:00",
        from: "Chattanooga (CHA)",
        airline: "Delta Air Lines",
        aircraft: "-",
        status: "Canceled"
    },
    {
        flight: "8C3305",
        time: "2025-07-07T02:09:00",
        from: "Wilmington (ILN)",
        airline: "Amazon Air",
        aircraft: "B763 (N617AZ)",
        status: "Landed 1:54 AM"
    },
    {
        flight: "KE255",
        time: "2025-07-07T02:15:00",
        from: "Anchorage (ANC)",
        airline: "Korean Air",
        aircraft: "74N",
        status: "Unknown"
    },
    {
        flight: "DL8844",
        time: "2025-07-07T03:08:00",
        from: "Pittsburgh (PIT)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N692DL)",
        status: "Landed 4:00 AM"
    },
    {
        flight: "5X1306",
        time: "2025-07-07T03:28:00",
        from: "Louisville (SDF)",
        airline: "UPS",
        aircraft: "MD11 (N262UP)",
        status: "Landed 3:24 AM"
    },
    {
        flight: "CX2091",
        time: "2025-07-07T04:15:00",
        from: "Dallas (DFW)",
        airline: "Cathay Pacific",
        aircraft: "74N",
        status: "Unknown"
    },
    {
        flight: "CX2091",
        time: "2025-07-07T04:15:00",
        from: "Dallas (DFW)",
        airline: "Cathay Pacific",
        aircraft: "74N",
        status: "Unknown"
    },
    {
        flight: "DL543",
        time: "2025-07-07T04:29:00",
        from: "Santa Ana (SNA)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N723TW)",
        status: "Landed 4:21 AM"
    },
    {
        flight: "FX1421",
        time: "2025-07-07T04:37:00",
        from: "Memphis (MEM)",
        airline: "FedEx",
        aircraft: "B763 (N263FE)",
        status: "Landed 4:35 AM"
    },
    {
        flight: "FX1703",
        time: "2025-07-07T04:39:00",
        from: "Indianapolis (IND)",
        airline: "FedEx",
        aircraft: "B763 (N268FE)",
        status: "Landed 4:30 AM"
    },
    {
        flight: "5X1308",
        time: "2025-07-07T04:58:00",
        from: "Philadelphia (PHL)",
        airline: "UPS",
        aircraft: "A306 (N142UP)",
        status: "Landed 4:54 AM"
    },
    {
        flight: "DL783",
        time: "2025-07-07T05:00:00",
        from: "Los Angeles (LAX)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N893DN)",
        status: "Landed 4:50 AM"
    },
    {
        flight: "DL487",
        time: "2025-07-07T05:00:00",
        from: "San Diego (SAN)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N119DN)",
        status: "Landed 4:52 AM"
    },
    {
        flight: "F92428",
        time: "2025-07-07T05:00:00",
        from: "Las Vegas (LAS)",
        airline: "Frontier (Choo the Pika Livery)",
        aircraft: "A20N (N331FR)",
        status: "Landed 5:40 AM"
    },
    {
        flight: "5X1302",
        time: "2025-07-07T05:00:00",
        from: "Louisville (SDF)",
        airline: "UPS",
        aircraft: "B763 (N353UP)",
        status: "Landed 5:18 AM"
    },
    {
        flight: "5X1304",
        time: "2025-07-07T05:04:00",
        from: "Louisville (SDF)",
        airline: "UPS",
        aircraft: "A306 (N161UP)",
        status: "Landed 4:37 AM"
    },
    {
        flight: "F93216",
        time: "2025-07-07T05:07:00",
        from: "Los Angeles (LAX)",
        airline: "Frontier (Abaco the Kirtland's Warbler Livery)",
        aircraft: "A21N (N630FR)",
        status: "Landed 6:28 AM"
    },
    {
        flight: "DL635",
        time: "2025-07-07T05:12:00",
        from: "San Francisco (SFO)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N812DN)",
        status: "Landed 5:17 AM"
    },
    {
        flight: "DL888",
        time: "2025-07-07T05:12:00",
        from: "Portland (PDX)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N884DN)",
        status: "Landed 5:54 AM"
    },
    {
        flight: "DL912",
        time: "2025-07-07T05:12:00",
        from: "Salt Lake City (SLC)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N376DN)",
        status: "Landed 5:49 AM"
    },
    {
        flight: "F9312",
        time: "2025-07-07T05:15:00",
        from: "San Pedro Sula (SAP)",
        airline: "Frontier (Pike the Otter Livery)",
        aircraft: "A320 (N235FR)",
        status: "Landed 4:56 AM"
    },
    {
        flight: "DL828",
        time: "2025-07-07T05:17:00",
        from: "Ontario (ONT)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N126DN)",
        status: "Landed 5:00 AM"
    },
    {
        flight: "FX1079",
        time: "2025-07-07T05:21:00",
        from: "Greensboro (GSO)",
        airline: "FedEx",
        aircraft: "B752 (N997FD)",
        status: "Landed 4:41 AM"
    },
    {
        flight: "FX1463",
        time: "2025-07-07T05:23:00",
        from: "Memphis (MEM)",
        airline: "FedEx",
        aircraft: "B763 (N252FE)",
        status: "Landed 5:24 AM"
    },
    {
        flight: "DL110",
        time: "2025-07-07T05:25:00",
        from: "Buenos Aires (EZE)",
        airline: "Delta Air Lines (Team USA Livery)",
        aircraft: "A339 (N411DX)",
        status: "Landed 5:30 AM"
    },
    {
        flight: "DL567",
        time: "2025-07-07T05:28:00",
        from: "Seattle (SEA)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N824DN)",
        status: "Landed 5:55 AM"
    },
    {
        flight: "F931",
        time: "2025-07-07T05:29:00",
        from: "Santo Domingo (SDQ)",
        airline: "Frontier (Colorado the Bighorn Sheep Livery)",
        aircraft: "A20N (N323FR)",
        status: "Landed 5:28 AM"
    },
    {
        flight: "FX1774",
        time: "2025-07-07T05:29:00",
        from: "Indianapolis (IND)",
        airline: "FedEx",
        aircraft: "B763 (N284FE)",
        status: "Landed 5:38 AM"
    },
    {
        flight: "DL417",
        time: "2025-07-07T05:31:00",
        from: "Las Vegas (LAS)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N392DN)",
        status: "Landed 5:47 AM"
    },
    {
        flight: "KE8255",
        time: "2025-07-07T05:36:00",
        from: "Dallas (DFW)",
        airline: "Korean Air Cargo",
        aircraft: "B748 (HL7610)",
        status: "Landed 5:32 AM"
    },
    {
        flight: "DL632",
        time: "2025-07-07T05:37:00",
        from: "Quito (UIO)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N543US)",
        status: "Landed 5:05 AM"
    },
    {
        flight: "DL833",
        time: "2025-07-07T05:43:00",
        from: "Boise (BOI)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N336DX)",
        status: "Landed 5:30 AM"
    },
    {
        flight: "DL1322",
        time: "2025-07-07T05:44:00",
        from: "San Diego (SAN)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N381DZ)",
        status: "Landed 5:44 AM"
    },
    {
        flight: "DL60",
        time: "2025-07-07T05:50:00",
        from: "Rio de Janeiro (GIG)",
        airline: "Delta Air Lines",
        aircraft: "B763 (N198DN)",
        status: "Landed 5:34 AM"
    },
    {
        flight: "DL309",
        time: "2025-07-07T05:54:00",
        from: "Honolulu (HNL)",
        airline: "Delta Air Lines",
        aircraft: "A333 (N804NW)",
        status: "Landed 5:42 AM"
    },
    {
        flight: "DL302",
        time: "2025-07-07T05:56:00",
        from: "Denver (DEN)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N383DZ)",
        status: "Landed 5:46 AM"
    },
    {
        flight: "DL769",
        time: "2025-07-07T05:59:00",
        from: "Sacramento (SMF)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N899DN)",
        status: "Landed 5:51 AM"
    },
    {
        flight: "DL899",
        time: "2025-07-07T06:00:00",
        from: "Los Angeles (LAX)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N358DN)",
        status: "Landed 8:00 AM"
    },
    {
        flight: "DL561",
        time: "2025-07-07T06:00:00",
        from: "Fresno (FAT)",
        airline: "Delta Air Lines",
        aircraft: "B738 (N384DA)",
        status: "Landed 6:01 AM"
    },
    {
        flight: "UA604",
        time: "2025-07-07T06:00:00",
        from: "Denver (DEN)",
        airline: "United Airlines",
        aircraft: "B39M (N67501)",
        status: "Landed 6:08 AM"
    },
    {
        flight: "DL1102",
        time: "2025-07-07T06:03:00",
        from: "San Jose (SJC)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N897DN)",
        status: "Landed 5:50 AM"
    },
    {
        flight: "DL391",
        time: "2025-07-07T06:05:00",
        from: "Reno (RNO)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N553NW)",
        status: "Landed 5:57 AM"
    },
    {
        flight: "WN4195",
        time: "2025-07-07T06:05:00",
        from: "Phoenix (PHX)",
        airline: "Southwest Airlines",
        aircraft: "B738 (N8329B)",
        status: "Landed 6:29 AM"
    },
    {
        flight: "F93294",
        time: "2025-07-07T06:10:00",
        from: "Denver (DEN)",
        airline: "Frontier (Miracle the Seagull Livery)",
        aircraft: "A20N (N350FR)",
        status: "Landed 6:06 AM"
    },
    {
        flight: "WN5146",
        time: "2025-07-07T06:15:00",
        from: "Las Vegas (LAS)",
        airline: "Southwest Airlines",
        aircraft: "B38M (N8781Q)",
        status: "Landed 6:10 AM"
    },
    {
        flight: "DL146",
        time: "2025-07-07T06:20:00",
        from: "Santiago (SCL)",
        airline: "Delta Air Lines",
        aircraft: "A359 (N525DN)",
        status: "Landed 6:05 AM"
    },
    {
        flight: "DL2722",
        time: "2025-07-07T06:21:00",
        from: "Jacksonville (JAX)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N696DL)",
        status: "Landed 5:58 AM"
    },
    {
        flight: "DL683",
        time: "2025-07-07T06:25:00",
        from: "Spokane (GEG)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N868DN)",
        status: "Landed 6:12 AM"
    },
    {
        flight: "DL967",
        time: "2025-07-07T06:25:00",
        from: "Seattle (SEA)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N883DN)",
        status: "Landed 6:23 AM"
    },
    {
        flight: "NK2573",
        time: "2025-07-07T06:25:00",
        from: "Las Vegas (LAS)",
        airline: "Spirit Airlines",
        aircraft: "A20N (N967NK)",
        status: "Landed 6:05 AM"
    },
    {
        flight: "UA1083",
        time: "2025-07-07T06:28:00",
        from: "San Francisco (SFO)",
        airline: "United Airlines",
        aircraft: "B738 (N27246)",
        status: "Landed 6:19 AM"
    },
    {
        flight: "DL1729",
        time: "2025-07-07T06:29:00",
        from: "Savannah (SAV)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N816DN)",
        status: "Landed 6:02 AM"
    },
    {
        flight: "DL3064",
        time: "2025-07-07T06:29:00",
        from: "Greenville-Spartanburg (GSP)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N823DN)",
        status: "Landed 6:18 AM"
    },
    {
        flight: "F91448",
        time: "2025-07-07T06:30:00",
        from: "San Francisco (SFO)",
        airline: "Frontier (Stretch the Great Blue Heron Livery)",
        aircraft: "A20N (N334FR)",
        status: "Landed 5:59 AM"
    },
    {
        flight: "DL2406",
        time: "2025-07-07T06:31:00",
        from: "Chattanooga (CHA)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N980AT)",
        status: "Landed 6:16 AM"
    },
    {
        flight: "DL3055",
        time: "2025-07-07T06:31:00",
        from: "Charleston (CHS)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N872DN)",
        status: "Landed 6:14 AM"
    },
    {
        flight: "DL972",
        time: "2025-07-07T06:38:00",
        from: "Portland (PDX)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N919DU)",
        status: "Landed 6:41 AM"
    },
    {
        flight: "DL929",
        time: "2025-07-07T06:39:00",
        from: "Phoenix (PHX)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N339DN)",
        status: "Landed 6:51 AM"
    },
    {
        flight: "DL3241",
        time: "2025-07-07T06:43:00",
        from: "Raleigh-Durham (RDU)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N962DZ)",
        status: "Landed 6:30 AM"
    },
    {
        flight: "DL495",
        time: "2025-07-07T06:44:00",
        from: "San Francisco (SFO)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N857DZ)",
        status: "Landed 6:35 AM"
    },
    {
        flight: "DL3015",
        time: "2025-07-07T06:44:00",
        from: "Knoxville (TYS)",
        airline: "Delta Air Lines",
        aircraft: "B738 (N382DA)",
        status: "Landed 6:15 AM"
    },
    {
        flight: "DL2330",
        time: "2025-07-07T06:45:00",
        from: "Tampa (TPA)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N823DX)",
        status: "Landed 6:29 AM"
    },
    {
        flight: "DL5291",
        time: "2025-07-07T06:45:00",
        from: "Augusta (AGS)",
        airline: "Delta Connection",
        aircraft: "CRJ9 (N602LR)",
        status: "Landed 6:20 AM"
    },
    {
        flight: "DL2712",
        time: "2025-07-07T06:49:00",
        from: "Asheville (AVL)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N961AT)",
        status: "Landed 6:26 AM"
    },
    {
        flight: "DL3018",
        time: "2025-07-07T06:49:00",
        from: "Greensboro (GSO)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N863DN)",
        status: "Landed 6:44 AM"
    },
    {
        flight: "DL722",
        time: "2025-07-07T06:50:00",
        from: "Las Vegas (LAS)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N385DZ)",
        status: "Landed 7:21 AM"
    },
    {
        flight: "DL1977",
        time: "2025-07-07T06:50:00",
        from: "Tallahassee (TLH)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N933AT)",
        status: "Landed 6:21 AM"
    },
    {
        flight: "DL2743",
        time: "2025-07-07T06:50:00",
        from: "Charlotte (CLT)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N891AT)",
        status: "Landed 7:02 AM"
    },
    {
        flight: "DL3038",
        time: "2025-07-07T06:50:00",
        from: "Columbia (CAE)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N894AT)",
        status: "Landed 6:11 AM"
    },
    {
        flight: "WS1992",
        time: "2025-07-07T06:54:00",
        from: "Calgary (YYC)",
        airline: "WestJet",
        aircraft: "B38M (C-FNAX)",
        status: "Landed 6:47 AM"
    },
    {
        flight: "WS1598",
        time: "2025-07-07T06:55:00",
        from: "Vancouver (YVR)",
        airline: "WestJet",
        aircraft: "B38M (C-GAMQ)",
        status: "Landed 6:55 AM"
    },
    {
        flight: "DL1548",
        time: "2025-07-07T06:57:00",
        from: "Orlando (MCO)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N684DA)",
        status: "Landed 6:38 AM"
    },
    {
        flight: "DL1460",
        time: "2025-07-07T07:04:00",
        from: "Richmond (RIC)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N552NW)",
        status: "Landed 6:45 AM"
    },
    {
        flight: "DL150",
        time: "2025-07-07T07:05:00",
        from: "Lima (LIM)",
        airline: "Delta Air Lines",
        aircraft: "A359 (N570DZ)",
        status: "Landed 7:06 AM"
    },
    {
        flight: "DL320",
        time: "2025-07-07T07:06:00",
        from: "Los Angeles (LAX)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N308DN)",
        status: "Landed 8:12 AM"
    },
    {
        flight: "5Y8986",
        time: "2025-07-07T07:07:00",
        from: "Anchorage (ANC)",
        airline: "YunExpress",
        aircraft: "B77L (N704GT)",
        status: "Landed 7:08 AM"
    },
    {
        flight: "DL1430",
        time: "2025-07-07T07:09:00",
        from: "Norfolk (ORF)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N692DL)",
        status: "Landed 11:18 AM"
    },
    {
        flight: "NK2403",
        time: "2025-07-07T07:12:00",
        from: "Los Angeles (LAX)",
        airline: "Spirit Airlines",
        aircraft: "A21N (N746NK)",
        status: "Landed 7:25 AM"
    },
    {
        flight: "DL416",
        time: "2025-07-07T07:14:00",
        from: "Anchorage (ANC)",
        airline: "Delta Air Lines",
        aircraft: "B763 (N171DZ)",
        status: "Landed 7:22 AM"
    },
    {
        flight: "DL1168",
        time: "2025-07-07T07:14:00",
        from: "Fort Lauderdale (FLL)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N673DL)",
        status: "Landed 6:52 AM"
    },
    {
        flight: "DL1504",
        time: "2025-07-07T07:16:00",
        from: "Pittsburgh (PIT)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N945DZ)",
        status: "Landed 6:57 AM"
    },
    {
        flight: "DL2441",
        time: "2025-07-07T07:16:00",
        from: "Cincinnati (CVG)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N963DZ)",
        status: "Landed 7:05 AM"
    },
    {
        flight: "DL2012",
        time: "2025-07-07T07:17:00",
        from: "Blountville (TRI)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N966AT)",
        status: "Landed 6:58 AM"
    },
    {
        flight: "DL2184",
        time: "2025-07-07T07:17:00",
        from: "Lexington (LEX)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N892AT)",
        status: "Landed 7:03 AM"
    },
    {
        flight: "DL2375",
        time: "2025-07-07T07:19:00",
        from: "Detroit (DTW)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N912DU)",
        status: "Landed 7:07 AM"
    },
    {
        flight: "DL2440",
        time: "2025-07-07T07:19:00",
        from: "Jacksonville (JAX)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N900PC)",
        status: "Landed 7:11 AM"
    },
    {
        flight: "DL1385",
        time: "2025-07-07T07:20:00",
        from: "Fort Myers (RSW)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N6714Q)",
        status: "Landed 7:18 AM"
    },
    {
        flight: "DL5255",
        time: "2025-07-07T07:20:00",
        from: "Valdosta (VLD)",
        airline: "Delta Connection",
        aircraft: "CRJ9 (N306PQ)",
        status: "Landed 7:03 AM"
    },
    {
        flight: "DL2162",
        time: "2025-07-07T07:21:00",
        from: "Birmingham (BHM)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N939DZ)",
        status: "Landed 6:58 AM"
    },
    {
        flight: "DL1998",
        time: "2025-07-07T07:22:00",
        from: "Louisville (SDF)",
        airline: "Delta Air Lines",
        aircraft: "B738 (N3749D)",
        status: "Landed 7:04 AM"
    },
    {
        flight: "DL2937",
        time: "2025-07-07T07:22:00",
        from: "Roanoke (ROA)",
        airline: "Delta Air Lines",
        aircraft: "A319 (N358NB)",
        status: "Landed 6:54 AM"
    },
    {
        flight: "DL3140",
        time: "2025-07-07T07:22:00",
        from: "Dayton (DAY)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N994AT)",
        status: "Landed 7:12 AM"
    },
    {
        flight: "NK2350",
        time: "2025-07-07T07:22:00",
        from: "Detroit (DTW)",
        airline: "Spirit Airlines",
        aircraft: "A21N (N726NK)",
        status: "Landed 6:49 AM"
    },
    {
        flight: "DL652",
        time: "2025-07-07T07:23:00",
        from: "Seattle (SEA)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N927DZ)",
        status: "Landed 7:13 AM"
    },
    {
        flight: "DL1856",
        time: "2025-07-07T07:23:00",
        from: "Gainesville (GNV)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N935AT)",
        status: "Landed 6:47 AM"
    },
    {
        flight: "DL2820",
        time: "2025-07-07T07:23:00",
        from: "Myrtle Beach (MYR)",
        airline: "Delta Air Lines",
        aircraft: "A320 (N340NW)",
        status: "Landed 6:59 AM"
    },
    {
        flight: "DL2950",
        time: "2025-07-07T07:23:00",
        from: "Baltimore (BWI)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N698DL)",
        status: "Landed 7:10 AM"
    },
    {
        flight: "DL5403",
        time: "2025-07-07T07:23:00",
        from: "Columbus (CSG)",
        airline: "Delta Connection",
        aircraft: "CRJ9 (N605LR)",
        status: "Landed 7:05 AM"
    },
    {
        flight: "NK2706",
        time: "2025-07-07T07:23:00",
        from: "Columbus (CMH)",
        airline: "Spirit Airlines",
        aircraft: "A21N (N710NK)",
        status: "Landed 7:29 AM"
    },
    {
        flight: "DL2637",
        time: "2025-07-07T07:24:00",
        from: "Nashville (BNA)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N955DZ)",
        status: "Landed 7:10 AM"
    },
    {
        flight: "DL1936",
        time: "2025-07-07T07:26:00",
        from: "Daytona Beach (DAB)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N961DZ)",
        status: "Landed 6:56 AM"
    },
    {
        flight: "DL1249",
        time: "2025-07-07T07:28:00",
        from: "Miami (MIA)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N551NW)",
        status: "Landed 7:04 AM"
    },
    {
        flight: "DL4888",
        time: "2025-07-07T07:28:00",
        from: "Jacksonville (OAJ)",
        airline: "Delta Connection",
        aircraft: "CRJ9 (N924XJ)",
        status: "Landed 7:08 AM"
    },
    {
        flight: "DL2953",
        time: "2025-07-07T07:29:00",
        from: "Melbourne (MLB)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N990AT)",
        status: "Landed 7:12 AM"
    },
    {
        flight: "",
        time: "2025-07-07T07:29:00",
        from: "Concord (USA)",
        airline: "-",
        aircraft: "CRJ7 (N519JG)",
        status: "Landed 7:55 AM"
    },
    {
        flight: "DL1269",
        time: "2025-07-07T07:30:00",
        from: "Philadelphia (PHL)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N362DN)",
        status: "Landed 9:15 AM"
    },
    {
        flight: "DL2124",
        time: "2025-07-07T07:30:00",
        from: "Charleston (CHS)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N942DZ)",
        status: "Landed 7:19 AM"
    },
    {
        flight: "DL3145",
        time: "2025-07-07T07:30:00",
        from: "Greenville-Spartanburg (GSP)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N873DN)",
        status: "Landed 7:19 AM"
    },
    {
        flight: "DL4941",
        time: "2025-07-07T07:30:00",
        from: "Charlottesville (CHO)",
        airline: "Delta Connection",
        aircraft: "CRJ9 (N913XJ)",
        status: "Landed 7:00 AM"
    },
    {
        flight: "DL5354",
        time: "2025-07-07T07:30:00",
        from: "Charleston (CRW)",
        airline: "Delta Connection",
        aircraft: "CRJ7 (N371CA)",
        status: "Landed 7:17 AM"
    },
    {
        flight: "DL3039",
        time: "2025-07-07T07:30:00",
        from: "Chattanooga (CHA)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N893AT)",
        status: "Landed 7:00 AM"
    },
    {
        flight: "DL5486",
        time: "2025-07-07T07:30:00",
        from: "Fayetteville (FAY)",
        airline: "Delta Connection",
        aircraft: "CRJ9 (N907XJ)",
        status: "Landed 7:02 AM"
    },
    {
        flight: "",
        time: "2025-07-07T07:29:00",
        from: "Concord (USA)",
        airline: "-",
        aircraft: "CRJ7 (N519JG)",
        status: "Landed 7:55 AM"
    },
    {
        flight: "F92409",
        time: "2025-07-07T07:32:00",
        from: "Cleveland (CLE)",
        airline: "Frontier Airlines",
        aircraft: "A21N (N667FR)",
        status: "Landed 7:01 AM"
    },
    {
        flight: "DL104",
        time: "2025-07-07T07:35:00",
        from: "Sao Paulo (GRU)",
        airline: "Delta Air Lines",
        aircraft: "A333 (N811NW)",
        status: "Landed 7:15 AM"
    },
    {
        flight: "DL1449",
        time: "2025-07-07T07:35:00",
        from: "Wilmington (ILM)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N998AT)",
        status: "Landed 7:17 AM"
    },
    {
        flight: "DL2469",
        time: "2025-07-07T07:35:00",
        from: "Columbus (CMH)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N825DN)",
        status: "Landed 7:14 AM"
    },
    {
        flight: "DL1499",
        time: "2025-07-07T07:36:00",
        from: "Sarasota (SRQ)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N547US)",
        status: "Landed 7:14 AM"
    },
    {
        flight: "DL3105",
        time: "2025-07-07T07:36:00",
        from: "Indianapolis (IND)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N881DN)",
        status: "Landed 7:15 AM"
    },
    {
        flight: "DL690",
        time: "2025-07-07T07:43:00",
        from: "San Francisco (SFO)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N911DQ)",
        status: "Landed 7:35 AM"
    },
    {
        flight: "DL1666",
        time: "2025-07-07T07:43:00",
        from: "Memphis (MEM)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N989AT)",
        status: "Landed 7:22 AM"
    },
    {
        flight: "F91563",
        time: "2025-07-07T07:43:00",
        from: "Orlando (MCO)",
        airline: "Frontier (Betty the Bluebird Livery)",
        aircraft: "A320 (N230FR)",
        status: "Landed 10:12 AM"
    },
    {
        flight: "DL410",
        time: "2025-07-07T07:46:00",
        from: "Washington (DCA)",
        airline: "Delta Air Lines",
        aircraft: "A319 (N315NB)",
        status: "Landed 7:40 AM"
    },
    {
        flight: "DL1494",
        time: "2025-07-07T07:46:00",
        from: "Orlando (MCO)",
        airline: "Delta Air Lines",
        aircraft: "B753 (N590NW)",
        status: "Landed 7:35 AM"
    },
    {
        flight: "DL2550",
        time: "2025-07-07T07:46:00",
        from: "Washington (IAD)",
        airline: "Delta Air Lines",
        aircraft: "A319 (N326NB)",
        status: "Landed 7:36 AM"
    },
    {
        flight: "DL857",
        time: "2025-07-07T07:47:00",
        from: "Las Vegas (LAS)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N117DX)",
        status: "Landed 7:37 AM"
    },
    {
        flight: "DL2734",
        time: "2025-07-07T07:47:00",
        from: "Cleveland (CLE)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N885DN)",
        status: "Landed 7:41 AM"
    },
    {
        flight: "GB510",
        time: "2025-07-07T07:47:00",
        from: "Cincinnati (CVG)",
        airline: "DHL",
        aircraft: "B763 (N290CM)",
        status: "Landed 7:29 AM"
    },
    {
        flight: "DL1376",
        time: "2025-07-07T07:48:00",
        from: "West Palm Beach (PBI)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N311DN)",
        status: "Landed 7:27 AM"
    },
    {
        flight: "AS464",
        time: "2025-07-07T07:49:00",
        from: "Seattle (SEA)",
        airline: "Alaska Airlines",
        aircraft: "B39M (N977AK)",
        status: "Landed 7:45 AM"
    },
    {
        flight: "DL1702",
        time: "2025-07-07T07:49:00",
        from: "Savannah (SAV)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N809DN)",
        status: "Landed 7:26 AM"
    },
    {
        flight: "DL3555",
        time: "2025-07-07T07:50:00",
        from: "Fort Wayne (FWA)",
        airline: "Delta Connection",
        aircraft: "CRJ9 (N833SK)",
        status: "Landed 7:31 AM"
    },
    {
        flight: "DL1547",
        time: "2025-07-07T07:51:00",
        from: "New Orleans (MSY)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N676DL)",
        status: "Landed 7:34 AM"
    },
    {
        flight: "F92551",
        time: "2025-07-07T07:51:00",
        from: "Philadelphia (PHL)",
        airline: "Frontier (D&A the Hispaniolan Parakeets Livery)",
        aircraft: "A21N (N635FR)",
        status: "Landed 7:18 AM"
    },
    {
        flight: "NK2217",
        time: "2025-07-07T07:51:00",
        from: "New York (EWR)",
        airline: "Spirit Airlines",
        aircraft: "A321 (N679NK)",
        status: "Landed 7:35 AM"
    },
    {
        flight: "DL3061",
        time: "2025-07-07T07:52:00",
        from: "Columbia (CAE)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N985AT)",
        status: "Landed 7:24 AM"
    },
    {
        flight: "DL3240",
        time: "2025-07-07T07:52:00",
        from: "Raleigh-Durham (RDU)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N938DZ)",
        status: "Landed 7:32 AM"
    },
    {
        flight: "WN3624",
        time: "2025-07-07T07:55:00",
        from: "Washington (DCA)",
        airline: "Southwest Airlines",
        aircraft: "B737 (N240WN)",
        status: "Landed 8:07 AM"
    },
    {
        flight: "DL1806",
        time: "2025-07-07T07:59:00",
        from: "Tampa (TPA)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N686DA)",
        status: "Landed 7:36 AM"
    },
    {
        flight: "DL3939",
        time: "2025-07-07T07:59:00",
        from: "Albany (ABY)",
        airline: "Delta Connection",
        aircraft: "CRJ9 (N809SK)",
        status: "Landed 7:43 AM"
    },
    {
        flight: "DL2453",
        time: "2025-07-07T08:02:00",
        from: "Grand Rapids (GRR)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N933DZ)",
        status: "Landed 7:52 AM"
    },
    {
        flight: "DL1255",
        time: "2025-07-07T08:04:00",
        from: "Harrisburg (MDT)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N943AT)",
        status: "Landed 7:27 AM"
    },
    {
        flight: "DL1565",
        time: "2025-07-07T08:05:00",
        from: "Little Rock (LIT)",
        airline: "Delta Air Lines",
        aircraft: "B738 (N3743H)",
        status: "Landed 7:53 AM"
    },
    {
        flight: "DL2664",
        time: "2025-07-07T08:06:00",
        from: "Buffalo (BUF)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N898DN)",
        status: "Landed 7:45 AM"
    },
    {
        flight: "DL2853",
        time: "2025-07-07T08:06:00",
        from: "Asheville (AVL)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N942AT)",
        status: "Landed 7:46 AM"
    },
    {
        flight: "DL5317",
        time: "2025-07-07T08:07:00",
        from: "Knoxville (TYS)",
        airline: "Delta Connection",
        aircraft: "CRJ9 (N228PQ)",
        status: "Landed 8:40 AM"
    },
    {
        flight: "F91596",
        time: "2025-07-07T08:07:00",
        from: "Chicago (ORD)",
        airline: "Frontier (Lewis the Greater Sage-Grouse Livery)",
        aircraft: "A20N (N378FR)",
        status: "Landed 7:47 AM"
    },
    {
        flight: "DL2241",
        time: "2025-07-07T08:08:00",
        from: "Greensboro (GSO)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N829DN)",
        status: "Landed 7:38 AM"
    },
    {
        flight: "DL3020",
        time: "2025-07-07T08:08:00",
        from: "Huntsville (HSV)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N951AT)",
        status: "Landed 7:30 AM"
    },
    {
        flight: "F94707",
        time: "2025-07-07T08:08:00",
        from: "Washington (IAD)",
        airline: "Frontier (Scarlet the Tanager Livery)",
        aircraft: "A20N (N354FR)",
        status: "Landed 7:31 AM"
    },
    {
        flight: "DL1108",
        time: "2025-07-07T08:09:00",
        from: "Syracuse (SYR)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N111DC)",
        status: "Landed 7:49 AM"
    },
    {
        flight: "EJA447",
        time: "2025-07-07T08:09:00",
        from: "Chattanooga (CHA)",
        airline: "NetJets",
        aircraft: "E55P",
        status: "Unknown"
    },
    {
        flight: "DL1200",
        time: "2025-07-07T08:10:00",
        from: "Rochester (ROC)",
        airline: "Delta Air Lines",
        aircraft: "A320 (N373NW)",
        status: "Landed 7:51 AM"
    },
    {
        flight: "DL3949",
        time: "2025-07-07T08:10:00",
        from: "Montgomery (MGM)",
        airline: "Delta Connection",
        aircraft: "CRJ7 (N776SK)",
        status: "Landed 7:40 AM"
    },
    {
        flight: "DL4107",
        time: "2025-07-07T08:10:00",
        from: "South Bend (SBN)",
        airline: "Delta Connection",
        aircraft: "CRJ9 (N816SK)",
        status: "Landed 7:49 AM"
    },
    {
        flight: "DL4912",
        time: "2025-07-07T08:10:00",
        from: "Dothan (DHN)",
        airline: "Delta Connection",
        aircraft: "CRJ9 (N134EV)",
        status: "Landed 7:58 AM"
    },
    {
        flight: "F92911",
        time: "2025-07-07T08:11:00",
        from: "Tampa (TPA)",
        airline: "Frontier (Verde the Resplendent Quetzal Livery)",
        aircraft: "A20N (N380FR)",
        status: "Landed 3:43 PM"
    },
    {
        flight: "DL5453",
        time: "2025-07-07T08:12:00",
        from: "Allentown (ABE)",
        airline: "Delta Connection",
        aircraft: "CRJ9 (N300PQ)",
        status: "Landed 7:54 AM"
    },
    {
        flight: "DL1364",
        time: "2025-07-07T08:13:00",
        from: "Norfolk (ORF)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N694DL)",
        status: "Landed 8:11 AM"
    },
    {
        flight: "DL2360",
        time: "2025-07-07T08:13:00",
        from: "Augusta (AGS)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N982AT)",
        status: "Landed 7:32 AM"
    },
    {
        flight: "DL3114",
        time: "2025-07-07T08:13:00",
        from: "Panama City (ECP)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N814DN)",
        status: "Landed 7:47 AM"
    },
    {
        flight: "F92173",
        time: "2025-07-07T08:14:00",
        from: "Fort Lauderdale (FLL)",
        airline: "Frontier (Lone Star the Longhorn Steer Livery)",
        aircraft: "A20N (N347FR)",
        status: "Landed 7:40 AM"
    },
    {
        flight: "LXJ571",
        time: "2025-07-07T08:14:00",
        from: "Chicago (MDW)",
        airline: "Flexjet",
        aircraft: "CL35 (N571FX)",
        status: "Landed 8:23 AM"
    },
    {
        flight: "DL2353",
        time: "2025-07-07T08:15:00",
        from: "New York (EWR)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N305DN)",
        status: "Canceled"
    },
    {
        flight: "DL3019",
        time: "2025-07-07T08:15:00",
        from: "Pensacola (PNS)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N877DN)",
        status: "Landed 7:46 AM"
    },
    {
        flight: "DL3085",
        time: "2025-07-07T08:15:00",
        from: "Destin Fort Walton Beach (VPS)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N936AT)",
        status: "Landed 7:57 AM"
    },
    {
        flight: "DL550",
        time: "2025-07-07T08:15:00",
        from: "New York (LGA)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N374DX)",
        status: "Landed 7:59 AM"
    },
    {
        flight: "DL1920",
        time: "2025-07-07T08:15:00",
        from: "Charlotte (CLT)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N921AT)",
        status: "Landed 8:00 AM"
    },
    {
        flight: "WN1446",
        time: "2025-07-07T08:15:00",
        from: "Baltimore (BWI)",
        airline: "Southwest Airlines",
        aircraft: "B38M (N8810L)",
        status: "Landed 8:09 AM"
    },
    {
        flight: "F92483",
        time: "2025-07-07T08:16:00",
        from: "Miami (MIA)",
        airline: "Frontier (Elrey the Elk Livery)",
        aircraft: "A20N (N370FR)",
        status: "Landed 7:38 AM"
    },
    {
        flight: "DL1727",
        time: "2025-07-07T08:19:00",
        from: "Tallahassee (TLH)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N986AT)",
        status: "Landed 7:51 AM"
    },
    {
        flight: "DL201",
        time: "2025-07-07T08:20:00",
        from: "Johannesburg (JNB)",
        airline: "Delta Air Lines",
        aircraft: "A359 (N575DZ)",
        status: "Landed 7:42 AM"
    },
    {
        flight: "DL3041",
        time: "2025-07-07T08:20:00",
        from: "Jackson (JAN)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N991AT)",
        status: "Landed 7:49 AM"
    },
    {
        flight: "DL4927",
        time: "2025-07-07T08:20:00",
        from: "Golden Triangle (GTR)",
        airline: "Delta Connection",
        aircraft: "CRJ9 (N331PQ)",
        status: "Landed 7:57 AM"
    },
    {
        flight: "DL748",
        time: "2025-07-07T08:21:00",
        from: "Los Angeles (LAX)",
        airline: "Delta Air Lines",
        aircraft: "A21N (N522DA)",
        status: "Landed 9:45 AM"
    },
    {
        flight: "DL695",
        time: "2025-07-07T08:22:00",
        from: "Boston (BOS)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N363DN)",
        status: "Landed 7:51 AM"
    },
    {
        flight: "DL2286",
        time: "2025-07-07T08:22:00",
        from: "New York (JFK)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N711ZX)",
        status: "Landed 7:57 AM"
    },
    {
        flight: "AA5063",
        time: "2025-07-07T08:24:00",
        from: "Charlotte (CLT)",
        airline: "American Eagle",
        aircraft: "CRJ9 (N607NN)",
        status: "Landed 8:19 AM"
    },
    {
        flight: "DL1215",
        time: "2025-07-07T08:25:00",
        from: "Fort Lauderdale (FLL)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N658DL)",
        status: "Landed 7:56 AM"
    },
    {
        flight: "DL2446",
        time: "2025-07-07T08:25:00",
        from: "Jacksonville (JAX)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N6700)",
        status: "Landed 8:06 AM"
    },
    {
        flight: "DL1721",
        time: "2025-07-07T08:26:00",
        from: "Mobile (MOB)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N974AT)",
        status: "Landed 8:01 AM"
    },
    {
        flight: "AA5306",
        time: "2025-07-07T08:27:00",
        from: "Washington (DCA)",
        airline: "American Eagle",
        aircraft: "CRJ7 (N703PS)",
        status: "Landed 8:22 AM"
    },
    {
        flight: "DL1618",
        time: "2025-07-07T08:27:00",
        from: "Birmingham (BHM)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N947DZ)",
        status: "Landed 8:08 AM"
    },
    {
        flight: "DL1106",
        time: "2025-07-07T08:28:00",
        from: "White Plains (HPN)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N960AT)",
        status: "Landed 7:52 AM"
    },
    {
        flight: "DL3001",
        time: "2025-07-07T08:28:00",
        from: "Nashville (BNA)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N960DZ)",
        status: "Landed 8:18 AM"
    },
    {
        flight: "DL3177",
        time: "2025-07-07T08:29:00",
        from: "Gulfport (GPT)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N953AT)",
        status: "Landed 8:01 AM"
    },
    {
        flight: "DL1069",
        time: "2025-07-07T08:30:00",
        from: "Houston (IAH)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N317DN)",
        status: "Landed 8:22 AM"
    },
    {
        flight: "DL2933",
        time: "2025-07-07T08:30:00",
        from: "Windsor Locks (BDL)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N120DN)",
        status: "Landed 8:12 AM"
    },
    {
        flight: "DL1136",
        time: "2025-07-07T08:31:00",
        from: "Omaha (OMA)",
        airline: "Delta Air Lines",
        aircraft: "A320 (N319US)",
        status: "Landed 8:19 AM"
    },
    {
        flight: "DL1264",
        time: "2025-07-07T08:31:00",
        from: "Chicago (ORD)",
        airline: "Delta Air Lines",
        aircraft: "B738 (N3762Y)",
        status: "Landed 8:11 AM"
    },
    {
        flight: "DL1402",
        time: "2025-07-07T08:31:00",
        from: "Richmond (RIC)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N667DN)",
        status: "Landed 8:06 AM"
    },
    {
        flight: "F94601",
        time: "2025-07-07T08:32:00",
        from: "New York (EWR)",
        airline: "Frontier(Savannah the Yellow-Headed Amazon Livery)",
        aircraft: "A21N (N636FR)",
        status: "Landed 8:04 AM"
    },
    {
        flight: "DL4949",
        time: "2025-07-07T08:34:00",
        from: "Brunswick (BQK)",
        airline: "Delta Connection",
        aircraft: "CRJ7 (N668CA)",
        status: "Landed 7:53 AM"
    },
    {
        flight: "DL1524",
        time: "2025-07-07T08:35:00",
        from: "St. Louis (STL)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N859DN)",
        status: "Landed 8:30 AM"
    },
    {
        flight: "DL2662",
        time: "2025-07-07T08:35:00",
        from: "Toronto (YYZ)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N370DN)",
        status: "Landed 8:18 AM"
    },
    {
        flight: "DL1023",
        time: "2025-07-07T08:36:00",
        from: "Providence (PVD)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N357DN)",
        status: "Landed 8:13 AM"
    },
    {
        flight: "DL1610",
        time: "2025-07-07T08:36:00",
        from: "Louisville (SDF)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N934DZ)",
        status: "Landed 8:17 AM"
    },
    {
        flight: "DL2909",
        time: "2025-07-07T08:36:00",
        from: "Columbus (CMH)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N892DN)",
        status: "Landed 8:15 AM"
    },
    {
        flight: "DL2080",
        time: "2025-07-07T08:36:00",
        from: "Orlando (MCO)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N67171)",
        status: "Landed 8:09 AM"
    },
    {
        flight: "DL1446",
        time: "2025-07-07T08:36:00",
        from: "Orlando (MCO)",
        airline: "Delta Air Lines",
        aircraft: "B752",
        status: "Unknown"
    },
    {
        flight: "DL4869",
        time: "2025-07-07T08:37:00",
        from: "Evansville (EVV)",
        airline: "Delta Connection",
        aircraft: "CRJ9 (N923XJ)",
        status: "Landed 8:13 AM"
    },
    {
        flight: "DL1445",
        time: "2025-07-07T08:38:00",
        from: "Sarasota (SRQ)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N555NW)",
        status: "Landed 8:07 AM"
    },
    {
        flight: "DL1611",
        time: "2025-07-07T08:38:00",
        from: "Detroit (DTW)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N6709)",
        status: "Landed 8:39 AM"
    },
    {
        flight: "DL3215",
        time: "2025-07-07T08:38:00",
        from: "Lexington (LEX)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N896AT)",
        status: "Landed 8:10 AM"
    },
    {
        flight: "DL1221",
        time: "2025-07-07T08:39:00",
        from: "Milwaukee (MKE)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N950DZ)",
        status: "Landed 8:46 AM"
    },
    {
        flight: "FX1759",
        time: "2025-07-07T08:39:00",
        from: "Tampa (TPA)",
        airline: "FedEx",
        aircraft: "B763 (N191FE)",
        status: "Landed 8:50 AM"
    },
    {
        flight: "DL401",
        time: "2025-07-07T08:40:00",
        from: "Dallas (DFW)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N334DN)",
        status: "Landed 8:30 AM"
    },
    {
        flight: "DL1184",
        time: "2025-07-07T08:40:00",
        from: "Oklahoma City (OKC)",
        airline: "Delta Air Lines",
        aircraft: "A319 (N354NB)",
        status: "Landed 8:20 AM"
    },
    {
        flight: "DL2302",
        time: "2025-07-07T08:40:00",
        from: "Cincinnati (CVG)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N943DZ)",
        status: "Landed 8:48 AM"
    },
    {
        flight: "DL2429",
        time: "2025-07-07T08:40:00",
        from: "Albany (ALB)",
        airline: "Delta Air Lines",
        aircraft: "A320 (N367NW)",
        status: "Landed 8:42 AM"
    },
    {
        flight: "WN381",
        time: "2025-07-07T08:40:00",
        from: "Orlando (MCO)",
        airline: "Southwest Airlines",
        aircraft: "B38M (N8752Q)",
        status: "Landed 8:29 AM"
    },
    {
        flight: "DL3089",
        time: "2025-07-07T08:41:00",
        from: "Greenville-Spartanburg (GSP)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N849DN)",
        status: "Landed 8:34 AM"
    },
    {
        flight: "DL1664",
        time: "2025-07-07T08:43:00",
        from: "Charleston (CHS)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N941DZ)",
        status: "Canceled"
    },
    {
        flight: "DL1152",
        time: "2025-07-07T08:44:00",
        from: "Philadelphia (PHL)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N326DN)",
        status: "Landed 8:59 AM"
    },
    {
        flight: "DL1237",
        time: "2025-07-07T08:44:00",
        from: "Sioux Falls (FSD)",
        airline: "Delta Air Lines",
        aircraft: "A319 (N338NB)",
        status: "Landed 8:34 AM"
    },
    {
        flight: "DL2148",
        time: "2025-07-07T08:44:00",
        from: "Baton Rouge (BTR)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N919AT)",
        status: "Landed 8:22 AM"
    },
    {
        flight: "DL2691",
        time: "2025-07-07T08:44:00",
        from: "Green Bay (GRB)",
        airline: "Delta Air Lines",
        aircraft: "B738 (N397DA)",
        status: "Landed 8:32 AM"
    },
    {
        flight: "DL4940",
        time: "2025-07-07T08:44:00",
        from: "Monroe (MLU)",
        airline: "Delta Connection",
        aircraft: "CRJ7 (N354CA)",
        status: "Landed 8:19 AM"
    },
    {
        flight: "DL1361",
        time: "2025-07-07T08:45:00",
        from: "Fort Myers (RSW)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N699DL)",
        status: "Landed 8:17 AM"
    },
    {
        flight: "DL1383",
        time: "2025-07-07T08:45:00",
        from: "Pittsburgh (PIT)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N952DZ)",
        status: "Landed 8:23 AM"
    },
    {
        flight: "DL2579",
        time: "2025-07-07T08:46:00",
        from: "Baltimore (BWI)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N345DN)",
        status: "Landed 8:26 AM"
    },
    {
        flight: "DL1017",
        time: "2025-07-07T08:47:00",
        from: "Portland (PWM)",
        airline: "Delta Air Lines",
        aircraft: "A320 (N355NW)",
        status: "Landed 8:31 AM"
    },
    {
        flight: "DL1624",
        time: "2025-07-07T08:47:00",
        from: "Memphis (MEM)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N815DN)",
        status: "Landed 8:26 AM"
    },
    {
        flight: "NK2457",
        time: "2025-07-07T08:48:00",
        from: "Orlando (MCO)",
        airline: "Spirit Airlines",
        aircraft: "A21N (N741NK)",
        status: "Landed 8:23 AM"
    },
    {
        flight: "DL1204",
        time: "2025-07-07T08:49:00",
        from: "Kansas City (MCI)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N821DN)",
        status: "Landed 8:38 AM"
    },
    {
        flight: "DL1352",
        time: "2025-07-07T08:49:00",
        from: "West Palm Beach (PBI)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N351DN)",
        status: "Landed 8:57 AM"
    },
    {
        flight: "NK2465",
        time: "2025-07-07T08:49:00",
        from: "New Orleans (MSY)",
        airline: "Spirit Airlines",
        aircraft: "A320 (N697NK)",
        status: "Landed 8:43 AM"
    },
    {
        flight: "DL330",
        time: "2025-07-07T08:50:00",
        from: "Washington (DCA)",
        airline: "Delta Air Lines",
        aircraft: "A320 (N337NW)",
        status: "Landed 8:36 AM"
    },
    {
        flight: "DL1073",
        time: "2025-07-07T08:51:00",
        from: "San Antonio (SAT)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N315DN)",
        status: "Landed 8:38 AM"
    },
    {
        flight: "DL1062",
        time: "2025-07-07T08:53:00",
        from: "Minneapolis (MSP)",
        airline: "Delta Air Lines",
        aircraft: "B753 (N596NW)",
        status: "Landed 8:44 AM"
    },
    {
        flight: "DL1160",
        time: "2025-07-07T08:53:00",
        from: "Madison (MSN)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N923AT)",
        status: "Landed 8:25 AM"
    },
    {
        flight: "DL1534",
        time: "2025-07-07T08:53:00",
        from: "New Orleans (MSY)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N6707A)",
        status: "Landed 8:41 AM"
    },
    {
        flight: "DL2727",
        time: "2025-07-07T08:53:00",
        from: "Des Moines (DSM)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N963AT)",
        status: "Landed 8:27 AM"
    },
    {
        flight: "DL3106",
        time: "2025-07-07T08:53:00",
        from: "Indianapolis (IND)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N948DZ)",
        status: "Landed 8:52 AM"
    },
    {
        flight: "DL5487",
        time: "2025-07-07T08:53:00",
        from: "Bloomington (BMI)",
        airline: "Delta Connection",
        aircraft: "CRJ9 (N901XJ)",
        status: "Landed 8:36 AM"
    },
    {
        flight: "DL1436",
        time: "2025-07-07T08:54:00",
        from: "Appleton (ATW)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N603AT)",
        status: "Landed 8:46 AM"
    },
    {
        flight: "DL2216",
        time: "2025-07-07T08:55:00",
        from: "Wichita (ICT)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N922AT)",
        status: "Landed 8:27 AM"
    },
    {
        flight: "DL5525",
        time: "2025-07-07T08:55:00",
        from: "Lafayette (LFT)",
        airline: "Delta Connection",
        aircraft: "CRJ9 (N607LR)",
        status: "Landed 8:21 AM"
    },
    {
        flight: "ET518",
        time: "2025-07-07T08:55:00",
        from: "Rome (FCO)",
        airline: "Ethiopian Airlines",
        aircraft: "B789 (ET-AYC)",
        status: "Landed 8:15 AM"
    },
    {
        flight: "DL2033",
        time: "2025-07-07T08:56:00",
        from: "Burlington (BTV)",
        airline: "Delta Air Lines",
        aircraft: "B738 (N375DA)",
        status: "Landed 8:24 AM"
    },
    {
        flight: "DL4937",
        time: "2025-07-07T08:56:00",
        from: "Moline (MLI)",
        airline: "Delta Connection",
        aircraft: "CRJ9 (N928XJ)",
        status: "Landed 8:41 AM"
    },
    {
        flight: "DL3926",
        time: "2025-07-07T08:57:00",
        from: "Springfield (SGF)",
        airline: "American Eagle",
        aircraft: "CRJ7 (N738SK)",
        status: "Landed 8:25 AM"
    },
    {
        flight: "DL5122",
        time: "2025-07-07T08:58:00",
        from: "Bentonville (XNA)",
        airline: "Delta Connection",
        aircraft: "CRJ9 (N315PQ)",
        status: "Landed 8:43 AM"
    },
    {
        flight: "DL516",
        time: "2025-07-07T08:59:00",
        from: "Dallas (DAL)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N992AT)",
        status: "Landed 8:33 AM"
    },
    {
        flight: "DL1211",
        time: "2025-07-07T08:59:00",
        from: "Miami (MIA)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N668DN)",
        status: "Landed 8:40 AM"
    },
    {
        flight: "DL2518",
        time: "2025-07-07T08:59:00",
        from: "Cedar Rapids (CID)",
        airline: "Delta Air Lines",
        aircraft: "B738 (N393DA)",
        status: "Landed 8:45 AM"
    },
    {
        flight: "DL2838",
        time: "2025-07-07T08:59:00",
        from: "Cleveland (CLE)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N833DN)",
        status: "Landed 8:33 AM"
    },
    {
        flight: "DL3725",
        time: "2025-07-07T08:59:00",
        from: "Shreveport (SHV)",
        airline: "Delta Connection",
        aircraft: "CRJ9 (N548CA)",
        status: "Landed 8:35 AM"
    },
    {
        flight: "DL1259",
        time: "2025-07-07T09:00:00",
        from: "Tulsa (TUL)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N944AT)",
        status: "Landed 8:48 AM"
    },
    {
        flight: "DL1344",
        time: "2025-07-07T09:00:00",
        from: "Austin (AUS)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N390DN)",
        status: "Landed 8:36 AM"
    },
    {
        flight: "DL2400",
        time: "2025-07-07T09:00:00",
        from: "Chicago (MDW)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N997AT)",
        status: "Landed 8:37 AM"
    },
    {
        flight: "DL5162",
        time: "2025-07-07T09:00:00",
        from: "Alexandria (AEX)",
        airline: "Delta Connection",
        aircraft: "CRJ7 (N398CA)",
        status: "Landed 8:54 AM"
    },
    {
        flight: "WN437",
        time: "2025-07-07T09:00:00",
        from: "Chicago (MDW)",
        airline: "Southwest Airlines",
        aircraft: "B737 (N269WN)",
        status: "Landed 8:47 AM"
    },
    {
        flight: "B6519",
        time: "2025-07-07T09:02:00",
        from: "New York (JFK)",
        airline: "JetBlue",
        aircraft: "A320 (N568JB)",
        status: "Landed 8:37 AM"
    },
    {
        flight: "F94817",
        time: "2025-07-07T09:03:00",
        from: "New York (JFK)",
        airline: "Frontier (Baja the Whale Shark Livery)",
        aircraft: "A20N (N342FR)",
        status: "Landed 8:54 AM"
    },
    {
        flight: "DL9980",
        time: "2025-07-07T09:03:00",
        from: "Atlanta (ATL)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N324DX)",
        status: "Landed 9:34 AM"
    },
    {
        flight: "DL1354",
        time: "2025-07-07T09:06:00",
        from: "Washington (IAD)",
        airline: "Delta Air Lines",
        aircraft: "BCS3 (N301DU)",
        status: "Landed 8:45 AM"
    },
    {
        flight: "DL2557",
        time: "2025-07-07T09:08:00",
        from: "Houston (HOU)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N955AT)",
        status: "Landed 8:55 AM"
    },
    {
        flight: "AA5523",
        time: "2025-07-07T09:09:00",
        from: "Philadelphia (PHL)",
        airline: "American Eagle",
        aircraft: "CRJ9 (N589NN)",
        status: "Canceled"
    },
    {
        flight: "F93022",
        time: "2025-07-07T09:09:00",
        from: "Dallas (DFW)",
        airline: "Frontier (Joaquin the Kit Fox Livery)",
        aircraft: "A20N (N387FR)",
        status: "Landed 8:58 AM"
    },
    {
        flight: "DL1072",
        time: "2025-07-07T09:11:00",
        from: "Key West (EYW)",
        airline: "Delta Air Lines",
        aircraft: "A319 (N362NB)",
        status: "Landed 8:51 AM"
    },
    {
        flight: "DL3129",
        time: "2025-07-07T09:11:00",
        from: "Pensacola (PNS)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N659DL)",
        status: "Landed 9:08 AM"
    },
    {
        flight: "AA3615",
        time: "2025-07-07T09:13:00",
        from: "Dallas (DFW)",
        airline: "American Eagle",
        aircraft: "E75L (N267NN)",
        status: "Landed 9:35 AM"
    },
    {
        flight: "DL2478",
        time: "2025-07-07T09:15:00",
        from: "Raleigh-Durham (RDU)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N936DZ)",
        status: "Landed 8:58 AM"
    },
    {
        flight: "F93287",
        time: "2025-07-07T09:15:00",
        from: "New York (LGA)",
        airline: "Frontier (Jo Jo the Grizzly Bear Livery)",
        aircraft: "A20N (N335FR)",
        status: "Landed 8:29 AM"
    },
    {
        flight: "NK2170",
        time: "2025-07-07T09:15:00",
        from: "Houston (IAH)",
        airline: "Spirit Airlines",
        aircraft: "A320 (N629NK)",
        status: "Landed 9:04 AM"
    },
    {
        flight: "DL342",
        time: "2025-07-07T09:16:00",
        from: "New York (LGA)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N377DN)",
        status: "Landed 9:09 AM"
    },
    {
        flight: "UA2304",
        time: "2025-07-07T09:16:00",
        from: "New York (EWR)",
        airline: "United Airlines",
        aircraft: "B39M (N77580)",
        status: "Landed 8:55 AM"
    },
    {
        flight: "DL1673",
        time: "2025-07-07T09:19:00",
        from: "New York (EWR)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N359DN)",
        status: "Canceled"
    },
    {
        flight: "DL1712",
        time: "2025-07-07T09:20:00",
        from: "Destin Fort Walton Beach (VPS)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N959DZ)",
        status: "Landed 9:12 AM"
    },
    {
        flight: "F91404",
        time: "2025-07-07T09:22:00",
        from: "Houston (IAH)",
        airline: "Frontier (Sammy the Squirrel Livery)",
        aircraft: "A320 (N232FR)",
        status: "Landed 11:36 AM"
    },
    {
        flight: "DL1486",
        time: "2025-07-07T09:23:00",
        from: "Tampa (TPA)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N689DL)",
        status: "Landed 9:24 AM"
    },
    {
        flight: "DL2802",
        time: "2025-07-07T09:24:00",
        from: "Nashville (BNA)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N957DZ)",
        status: "Landed 9:02 AM"
    },
    {
        flight: "DL1369",
        time: "2025-07-07T09:26:00",
        from: "Birmingham (BHM)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N958DZ)",
        status: "Landed 9:00 AM"
    },
    {
        flight: "F92292",
        time: "2025-07-07T09:29:00",
        from: "Chicago (MDW)",
        airline: "Frontier (Wiley the Bison Livery)",
        aircraft: "A20N (N313FR)",
        status: "Landed 8:57 AM"
    },
    {
        flight: "F92633",
        time: "2025-07-07T09:30:00",
        from: "Baltimore (BWI)",
        airline: "Frontier (Junior the Lynx Livery)",
        aircraft: "A20N (N330FR)",
        status: "Landed 8:51 AM"
    },
    {
        flight: "WN2003",
        time: "2025-07-07T09:30:00",
        from: "Dallas (DAL)",
        airline: "Southwest Airlines (Canyon Blue Retro Livery)",
        aircraft: "B38M (N872CB)",
        status: "Landed 9:25 AM"
    },
    {
        flight: "DL2554",
        time: "2025-07-07T09:31:00",
        from: "Windsor Locks (BDL)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N347DN)",
        status: "Landed 9:01 AM"
    },
    {
        flight: "DL2569",
        time: "2025-07-07T09:31:00",
        from: "Jacksonville (JAX)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N544US)",
        status: "Landed 9:13 AM"
    },
    {
        flight: "DL923",
        time: "2025-07-07T09:32:00",
        from: "Boston (BOS)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N709TW)",
        status: "Landed 9:04 AM"
    },
    {
        flight: "DL1915",
        time: "2025-07-07T09:32:00",
        from: "Charlotte (CLT)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N993AT)",
        status: "Landed 9:11 AM"
    },
    {
        flight: "XP393",
        time: "2025-07-07T09:32:00",
        from: "New Haven (HVN)",
        airline: "Avelo Airlines",
        aircraft: "B737 (N721VL)",
        status: "Landed 9:00 AM"
    },
    {
        flight: "DL1326",
        time: "2025-07-07T09:35:00",
        from: "Fort Lauderdale (FLL)",
        airline: "Delta Air Lines",
        aircraft: "B753 (N585NW)",
        status: "Landed 9:10 AM"
    },
    {
        flight: "DL1396",
        time: "2025-07-07T09:35:00",
        from: "Little Rock (LIT)",
        airline: "Delta Air Lines",
        aircraft: "B738 (N395DN)",
        status: "Landed 6:12 PM"
    },
    {
        flight: "DL1463",
        time: "2025-07-07T09:35:00",
        from: "Orlando (MCO)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N697DL)",
        status: "Landed 9:17 AM"
    },
    {
        flight: "DL1819",
        time: "2025-07-07T09:35:00",
        from: "Louisville (SDF)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N845DN)",
        status: "Landed 9:18 AM"
    },
    {
        flight: "NK2213",
        time: "2025-07-07T09:36:00",
        from: "Fort Lauderdale (FLL)",
        airline: "Spirit Airlines",
        aircraft: "A21N (N742NK)",
        status: "Landed 9:31 AM"
    },
    {
        flight: "DL1536",
        time: "2025-07-07T09:37:00",
        from: "St. Louis (STL)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N828DN)",
        status: "Landed 9:16 AM"
    },
    {
        flight: "DL3165",
        time: "2025-07-07T09:38:00",
        from: "Columbus (CMH)",
        airline: "Delta Air Lines",
        aircraft: "B738 (N3772H)",
        status: "Landed 9:13 AM"
    },
    {
        flight: "DL2157",
        time: "2025-07-07T09:40:00",
        from: "Charleston (CHS)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N932DZ)",
        status: "Landed 9:16 AM"
    },
    {
        flight: "WN3224",
        time: "2025-07-07T09:40:00",
        from: "Tampa (TPA)",
        airline: "Southwest Airlines (Freedom One Livery)",
        aircraft: "B738 (N500WR)",
        status: "Landed 9:28 AM"
    },
    {
        flight: "WN351",
        time: "2025-07-07T09:40:00",
        from: "New York (LGA)",
        airline: "Southwest Airlines",
        aircraft: "B738 (N8683D)",
        status: "Landed 11:06 AM"
    },
    {
        flight: "DL1674",
        time: "2025-07-07T09:41:00",
        from: "Panama City (ECP)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N988AT)",
        status: "Landed 9:06 AM"
    },
    {
        flight: "DL965",
        time: "2025-07-07T09:42:00",
        from: "Detroit (DTW)",
        airline: "Delta Air Lines",
        aircraft: "A21N (N506DA)",
        status: "Landed 9:32 AM"
    },
    {
        flight: "DL2779",
        time: "2025-07-07T09:43:00",
        from: "Savannah (SAV)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N937DZ)",
        status: "Landed 9:09 AM"
    },
    {
        flight: "DL5279",
        time: "2025-07-07T09:43:00",
        from: "Knoxville (TYS)",
        airline: "Delta Connection",
        aircraft: "CRJ9 (N491PX)",
        status: "Landed 1:36 PM"
    },
    {
        flight: "DL2643",
        time: "2025-07-07T09:45:00",
        from: "Montreal (YUL)",
        airline: "Delta Air Lines",
        aircraft: "A320 (N378NW)",
        status: "Landed 9:27 AM"
    },
    {
        flight: "DL3179",
        time: "2025-07-07T09:47:00",
        from: "Greensboro (GSO)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N895AT)",
        status: "Landed 9:12 AM"
    },
    {
        flight: "DL343",
        time: "2025-07-07T09:49:00",
        from: "Washington (DCA)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N332DN)",
        status: "Landed 12:07 PM"
    },
    {
        flight: "DL2562",
        time: "2025-07-07T09:49:00",
        from: "Baltimore (BWI)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N669DN)",
        status: "Landed 9:42 AM"
    },
    {
        flight: "DL1301",
        time: "2025-07-07T09:50:00",
        from: "West Palm Beach (PBI)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N338DN)",
        status: "Landed 9:22 AM"
    },
    {
        flight: "DL3076",
        time: "2025-07-07T09:51:00",
        from: "Cincinnati (CVG)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N880DN)",
        status: "Landed 9:35 AM"
    },
    {
        flight: "DL1338",
        time: "2025-07-07T09:52:00",
        from: "Norfolk (ORF)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N557NW)",
        status: "Landed 9:27 AM"
    },
    {
        flight: "DL2522",
        time: "2025-07-07T09:52:00",
        from: "New Orleans (MSY)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N541US)",
        status: "Landed 9:33 AM"
    },
    {
        flight: "DL1625",
        time: "2025-07-07T09:53:00",
        from: "Memphis (MEM)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N954DZ)",
        status: "Landed 9:46 AM"
    },
    {
        flight: "DL523",
        time: "2025-07-07T09:54:00",
        from: "Cleveland (CLE)",
        airline: "Delta Air Lines",
        aircraft: "B738 (N3736C)",
        status: "Landed 9:25 AM"
    },
    {
        flight: "DL1415",
        time: "2025-07-07T09:54:00",
        from: "Richmond (RIC)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N6704Z)",
        status: "Landed 9:29 AM"
    },
    {
        flight: "DL1066",
        time: "2025-07-07T09:55:00",
        from: "San Antonio (SAT)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N103DY)",
        status: "Landed 9:44 AM"
    },
    {
        flight: "WN457",
        time: "2025-07-07T09:55:00",
        from: "St. Louis (STL)",
        airline: "Southwest Airlines",
        aircraft: "B738 (N8561Z)",
        status: "Landed 9:46 AM"
    },
    {
        flight: "DL2988",
        time: "2025-07-07T09:58:00",
        from: "Toronto (YYZ)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N346DN)",
        status: "Landed 9:39 AM"
    },
    {
        flight: "DL3009",
        time: "2025-07-07T09:58:00",
        from: "Huntsville (HSV)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N965AT)",
        status: "Landed 9:23 AM"
    },
    {
        flight: "DL1261",
        time: "2025-07-07T10:00:00",
        from: "Miami (MIA)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N6706Q)",
        status: "Landed 4:44 PM"
    },
    {
        flight: "DL1879",
        time: "2025-07-07T10:00:00",
        from: "San Juan (SJU)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N6713Y)",
        status: "Landed 9:43 AM"
    },
    {
        flight: "KG5870",
        time: "2025-07-07T10:00:00",
        from: "Jackson (MKL)",
        airline: "Denver Air Connection",
        aircraft: "E145 (N970DC)",
        status: "Landed 9:56 AM"
    },
    {
        flight: "DL1212",
        time: "2025-07-07T10:01:00",
        from: "Kansas City (MCI)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N949DZ)",
        status: "Landed 9:50 AM"
    },
    {
        flight: "DL1258",
        time: "2025-07-07T10:02:00",
        from: "Austin (AUS)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N337DN)",
        status: "Landed 10:32 AM"
    },
    {
        flight: "DL2161",
        time: "2025-07-07T10:02:00",
        from: "Grand Rapids (GRR)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N861DN)",
        status: "Landed 9:37 AM"
    },
    {
        flight: "DL1901",
        time: "2025-07-07T10:02:00",
        from: "Indianapolis (IND)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N951DX)",
        status: "Landed 9:38 AM"
    },
    {
        flight: "NK2344",
        time: "2025-07-07T10:04:00",
        from: "Baltimore (BWI)",
        airline: "Spirit Airlines",
        aircraft: "A21N (N730NK)",
        status: "Landed 10:31 AM"
    },
    {
        flight: "DL1395",
        time: "2025-07-07T10:05:00",
        from: "Fort Myers (RSW)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N819DX)",
        status: "Landed 10:01 AM"
    },
    {
        flight: "DL1236",
        time: "2025-07-07T10:06:00",
        from: "Milwaukee (MKE)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N670DN)",
        status: "Landed 9:43 AM"
    },
    {
        flight: "DL1180",
        time: "2025-07-07T10:09:00",
        from: "Philadelphia (PHL)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N316DN)",
        status: "Landed 10:46 AM"
    },
    {
        flight: "DL1158",
        time: "2025-07-07T10:10:00",
        from: "Oklahoma City (OKC)",
        airline: "Delta Air Lines",
        aircraft: "A319 (N359NB)",
        status: "Landed 9:41 AM"
    },
    {
        flight: "DL3067",
        time: "2025-07-07T10:10:00",
        from: "Pensacola (PNS)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N687DL)",
        status: "Landed 9:52 AM"
    },
    {
        flight: "WN365",
        time: "2025-07-07T10:10:00",
        from: "Nashville (BNA)",
        airline: "Southwest Airlines",
        aircraft: "B737 (N941WN)",
        status: "Landed 9:44 AM"
    },
    {
        flight: "DL1982",
        time: "2025-07-07T10:11:00",
        from: "Jackson (JAN)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N995AT)",
        status: "Landed 9:41 AM"
    },
    {
        flight: "DL1157",
        time: "2025-07-07T10:12:00",
        from: "Omaha (OMA)",
        airline: "Delta Air Lines",
        aircraft: "A319 (N343NB)",
        status: "Landed 10:02 AM"
    },
    {
        flight: "DL1247",
        time: "2025-07-07T10:12:00",
        from: "Chicago (ORD)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N926DZ)",
        status: "Landed 10:01 AM"
    },
    {
        flight: "DL1315",
        time: "2025-07-07T10:13:00",
        from: "Houston (IAH)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N366DX)",
        status: "Landed 9:56 AM"
    },
    {
        flight: "DL1569",
        time: "2025-07-07T10:14:00",
        from: "Bentonville (XNA)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N930AT)",
        status: "Landed 9:48 AM"
    },
    {
        flight: "DL893",
        time: "2025-07-07T10:15:00",
        from: "Dallas (DFW)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N322DN)",
        status: "Landed 9:52 AM"
    },
    {
        flight: "DL3242",
        time: "2025-07-07T10:15:00",
        from: "Raleigh-Durham (RDU)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N940DU)",
        status: "Landed 9:55 AM"
    },
    {
        flight: "AA1656",
        time: "2025-07-07T10:17:00",
        from: "Chicago (ORD)",
        airline: "American Airlines",
        aircraft: "A319 (N9017P)",
        status: "Canceled"
    },
    {
        flight: "DL2513",
        time: "2025-07-07T10:17:00",
        from: "Dallas (DAL)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N929AT)",
        status: "Landed 9:49 AM"
    },
    {
        flight: "UA1663",
        time: "2025-07-07T10:18:00",
        from: "Washington (IAD)",
        airline: "United Airlines",
        aircraft: "B739 (N37434)",
        status: "Landed 11:45 AM"
    },
    {
        flight: "AA5228",
        time: "2025-07-07T10:19:00",
        from: "Charlotte (CLT)",
        airline: "American Eagle",
        aircraft: "CRJ9 (N575NN)",
        status: "Landed 9:58 AM"
    },
    {
        flight: "AA820",
        time: "2025-07-07T10:20:00",
        from: "Dallas (DFW)",
        airline: "American Airlines",
        aircraft: "B738 (N943AN)",
        status: "Landed 9:53 AM"
    },
    {
        flight: "DL2365",
        time: "2025-07-07T10:20:00",
        from: "New York (EWR)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N850DN)",
        status: "Landed 10:39 AM"
    },
    {
        flight: "KE35",
        time: "2025-07-07T10:20:00",
        from: "Seoul (ICN)",
        airline: "Korean Air",
        aircraft: "B748 (HL7642)",
        status: "Landed 10:07 AM"
    },
    {
        flight: "WN1164",
        time: "2025-07-07T10:20:00",
        from: "Houston (HOU)",
        airline: "Southwest Airlines",
        aircraft: "B737 (N442WN)",
        status: "Landed 10:09 AM"
    },
    {
        flight: "AA5215",
        time: "2025-07-07T10:24:00",
        from: "Philadelphia (PHL)",
        airline: "American Eagle",
        aircraft: "CRJ9 (N609NN)",
        status: "Landed 11:05 AM"
    },
    {
        flight: "DL364",
        time: "2025-07-07T10:26:00",
        from: "New York (LGA)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N114DN)",
        status: "Landed 9:59 AM"
    },
    {
        flight: "DL744",
        time: "2025-07-07T10:27:00",
        from: "Tampa (TPA)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N6703D)",
        status: "Landed 10:56 AM"
    },
    {
        flight: "DL1505",
        time: "2025-07-07T10:33:00",
        from: "Orlando (MCO)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N6702)",
        status: "Landed 10:16 AM"
    },
    {
        flight: "UA1962",
        time: "2025-07-07T10:33:00",
        from: "Houston (IAH)",
        airline: "United Airlines",
        aircraft: "A319 (N814UA)",
        status: "Landed 10:15 AM"
    },
    {
        flight: "DL1634",
        time: "2025-07-07T10:37:00",
        from: "Nashville (BNA)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N894AT)",
        status: "Landed 10:11 AM"
    },
    {
        flight: "DL2141",
        time: "2025-07-07T10:38:00",
        from: "Windsor Locks (BDL)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N104DN)",
        status: "Landed 10:13 AM"
    },
    {
        flight: "DL5153",
        time: "2025-07-07T10:40:00",
        from: "Charleston (CHS)",
        airline: "Delta Connection",
        aircraft: "CRJ9 (N602LR)",
        status: "Landed 11:17 AM"
    },
    {
        flight: "DL5309",
        time: "2025-07-07T10:40:00",
        from: "Chattanooga (CHA)",
        airline: "Delta Connection",
        aircraft: "CRJ7 (N331CA)",
        status: "Landed 10:25 AM"
    },
    {
        flight: "UA1975",
        time: "2025-07-07T10:40:00",
        from: "Chicago (ORD)",
        airline: "United Airlines",
        aircraft: "B738 (N76532)",
        status: "Landed 10:29 AM"
    },
    {
        flight: "WN3400",
        time: "2025-07-07T10:40:00",
        from: "Denver (DEN)",
        airline: "Southwest Airlines (Illinois One Livery)",
        aircraft: "B738 (N8619F)",
        status: "Landed 10:23 AM"
    },
    {
        flight: "DL1039",
        time: "2025-07-07T10:42:00",
        from: "Minneapolis (MSP)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N804DN)",
        status: "Landed 10:32 AM"
    },
    {
        flight: "AA1046",
        time: "2025-07-07T10:46:00",
        from: "Miami (MIA)",
        airline: "American Airlines",
        aircraft: "A321 (N189UW)",
        status: "Canceled"
    },
    {
        flight: "DL456",
        time: "2025-07-07T10:49:00",
        from: "Boston (BOS)",
        airline: "Delta Air Lines",
        aircraft: "A21N (N541DE)",
        status: "Landed 10:33 AM"
    },
    {
        flight: "DL1394",
        time: "2025-07-07T10:49:00",
        from: "West Palm Beach (PBI)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N302DN)",
        status: "Landed 10:25 AM"
    },
    {
        flight: "DL2777",
        time: "2025-07-07T10:49:00",
        from: "Detroit (DTW)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N110DX)",
        status: "Landed 10:36 AM"
    },
    {
        flight: "DL5174",
        time: "2025-07-07T10:51:00",
        from: "Louisville (SDF)",
        airline: "Delta Connection",
        aircraft: "CRJ9 (N186GJ)",
        status: "Landed 10:41 AM"
    },
    {
        flight: "5Y8496",
        time: "2025-07-07T10:52:00",
        from: "Chicago (ORD)",
        airline: "Atlas Air",
        aircraft: "B744 (N408MC)",
        status: "Landed 10:51 AM"
    },
    {
        flight: "DL5517",
        time: "2025-07-07T10:53:00",
        from: "Memphis (MEM)",
        airline: "Delta Connection",
        aircraft: "CRJ7 (N690CA)",
        status: "Landed 11:19 AM"
    },
    {
        flight: "DL4089",
        time: "2025-07-07T10:55:00",
        from: "Shreveport (SHV)",
        airline: "Delta Connection",
        aircraft: "CRJ9 (N822SK)",
        status: "Landed 10:35 AM"
    },
    {
        flight: "UA221",
        time: "2025-07-07T10:57:00",
        from: "New York (EWR)",
        airline: "United Airlines",
        aircraft: "A319 (N855UA)",
        status: "Landed 11:00 AM"
    },
    {
        flight: "DL1214",
        time: "2025-07-07T10:58:00",
        from: "Colorado Springs (COS)",
        airline: "Delta Air Lines",
        aircraft: "B738 (N378DA)",
        status: "Landed 10:37 AM"
    },
    {
        flight: "DL455",
        time: "2025-07-07T10:59:00",
        from: "Washington (DCA)",
        airline: "Delta Air Lines",
        aircraft: "A320 (N362NW)",
        status: "Landed 1:49 PM"
    },
    {
        flight: "DL3036",
        time: "2025-07-07T10:59:00",
        from: "Huntsville (HSV)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N980AT)",
        status: "Landed 10:28 AM"
    },
    {
        flight: "DL341",
        time: "2025-07-07T11:00:00",
        from: "Denver (DEN)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N396DN)",
        status: "Landed 10:44 AM"
    },
    {
        flight: "DL2227",
        time: "2025-07-07T11:03:00",
        from: "New York (JFK)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N550NW)",
        status: "Landed 10:38 AM"
    },
    {
        flight: "DL2328",
        time: "2025-07-07T11:03:00",
        from: "Jacksonville (JAX)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N705TW)",
        status: "Landed 10:43 AM"
    },
    {
        flight: "DL3077",
        time: "2025-07-07T11:04:00",
        from: "Asheville (AVL)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N933AT)",
        status: "Landed 10:48 AM"
    },
    {
        flight: "DL5143",
        time: "2025-07-07T11:04:00",
        from: "Augusta (AGS)",
        airline: "Delta Connection",
        aircraft: "CRJ9 (N913XJ)",
        status: "Landed 10:31 AM"
    },
    {
        flight: "DL1741",
        time: "2025-07-07T11:04:00",
        from: "El Paso (ELP)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N930DZ)",
        status: "Landed 10:51 AM"
    },
    {
        flight: "DL1960",
        time: "2025-07-07T11:04:00",
        from: "Charlotte (CLT)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N906AT)",
        status: "Landed 10:45 AM"
    },
    {
        flight: "DL2739",
        time: "2025-07-07T11:07:00",
        from: "Greenville-Spartanburg (GSP)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N962DZ)",
        status: "Landed 10:42 AM"
    },
    {
        flight: "DL3110",
        time: "2025-07-07T11:10:00",
        from: "Kansas City (MCI)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N944DZ)",
        status: "Landed 10:57 AM"
    },
    {
        flight: "WN1222",
        time: "2025-07-07T11:10:00",
        from: "Baltimore (BWI)",
        airline: "Southwest Airlines",
        aircraft: "B738 (N8517F)",
        status: "Landed 11:16 AM"
    },
    {
        flight: "DL9922",
        time: "2025-07-07T11:10:00",
        from: "Dublin (DUB)",
        airline: "Delta Air Lines",
        aircraft: "A333",
        status: "Canceled"
    },
    {
        flight: "AA4389",
        time: "2025-07-07T11:12:00",
        from: "Washington (DCA)",
        airline: "American Eagle",
        aircraft: "E75S (N129HQ)",
        status: "Landed 11:57 AM"
    },
    {
        flight: "DL1763",
        time: "2025-07-07T11:13:00",
        from: "San Juan (SJU)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N6716C)",
        status: "Landed 10:53 AM"
    },
    {
        flight: "DL2336",
        time: "2025-07-07T11:14:00",
        from: "Columbia (CAE)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N946AT)",
        status: "Landed 10:39 AM"
    },
    {
        flight: "DL2899",
        time: "2025-07-07T11:17:00",
        from: "Austin (AUS)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N340DN)",
        status: "Landed 11:15 AM"
    },
    {
        flight: "DL5236",
        time: "2025-07-07T11:22:00",
        from: "Tallahassee (TLH)",
        airline: "Delta Connection",
        aircraft: "CRJ9 (N924XJ)",
        status: "Landed 11:07 AM"
    },
    {
        flight: "DL1925",
        time: "2025-07-07T11:25:00",
        from: "Raleigh-Durham (RDU)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N816DN)",
        status: "Landed 11:28 AM"
    },
    {
        flight: "WN1598",
        time: "2025-07-07T11:25:00",
        from: "Chicago (MDW)",
        airline: "Southwest Airlines",
        aircraft: "B38M (N8934Q)",
        status: "Landed 11:15 AM"
    },
    {
        flight: "DL2605",
        time: "2025-07-07T11:26:00",
        from: "Tampa (TPA)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N543US)",
        status: "Landed 11:21 AM"
    },
    {
        flight: "DL3051",
        time: "2025-07-07T11:26:00",
        from: "Destin Fort Walton Beach (VPS)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N989AT)",
        status: "Landed 11:09 AM"
    },
    {
        flight: "DL992",
        time: "2025-07-07T11:28:00",
        from: "New York (LGA)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N389DN)",
        status: "Landed 10:54 AM"
    },
    {
        flight: "DL2793",
        time: "2025-07-07T11:29:00",
        from: "Gainesville (GNV)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N979AT)",
        status: "Landed 10:55 AM"
    },
    {
        flight: "DL3128",
        time: "2025-07-07T11:29:00",
        from: "New Orleans (MSY)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N893DN)",
        status: "Landed 11:30 AM"
    },
    {
        flight: "DL2204",
        time: "2025-07-07T11:30:00",
        from: "Orlando (MCO)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N554NW)",
        status: "Landed 11:12 AM"
    },
    {
        flight: "DL5553",
        time: "2025-07-07T11:30:00",
        from: "Minneapolis (MSP)",
        airline: "Delta Connection",
        aircraft: "CRJ9 (N136EV)",
        status: "Landed 11:12 AM"
    },
    {
        flight: "DL998",
        time: "2025-07-07T11:31:00",
        from: "San Antonio (SAT)",
        airline: "Delta Air Lines",
        aircraft: "A320 (N351NW)",
        status: "Landed 11:14 AM"
    },
    {
        flight: "DL3048",
        time: "2025-07-07T11:31:00",
        from: "Panama City (ECP)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N998AT)",
        status: "Landed 10:58 AM"
    },
    {
        flight: "DL3100",
        time: "2025-07-07T11:31:00",
        from: "Birmingham (BHM)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N955DZ)",
        status: "Landed 11:25 AM"
    },
    {
        flight: "DL3174",
        time: "2025-07-07T11:31:00",
        from: "Cincinnati (CVG)",
        airline: "Delta Air Lines",
        aircraft: "B738 (N384DA)",
        status: "Landed 11:18 AM"
    },
    {
        flight: "B61097",
        time: "2025-07-07T11:33:00",
        from: "Boston (BOS)",
        airline: "JetBlue",
        aircraft: "A320 (N618JB)",
        status: "Landed 11:24 AM"
    },
    {
        flight: "DL5304",
        time: "2025-07-07T11:33:00",
        from: "Montgomery (MGM)",
        airline: "Delta Connection",
        aircraft: "CRJ7 (N354CA)",
        status: "Landed 12:23 PM"
    },
    {
        flight: "DL3103",
        time: "2025-07-07T11:34:00",
        from: "Pensacola (PNS)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N919DU)",
        status: "Landed 11:06 AM"
    },
    {
        flight: "DL3125",
        time: "2025-07-07T11:35:00",
        from: "Indianapolis (IND)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N824DN)",
        status: "Landed 11:26 AM"
    },
    {
        flight: "DL5462",
        time: "2025-07-07T11:35:00",
        from: "Mobile (MOB)",
        airline: "Delta Connection",
        aircraft: "CRJ7 (N371CA)",
        status: "Landed 11:27 AM"
    },
    {
        flight: "DL5496",
        time: "2025-07-07T11:35:00",
        from: "Blountville (TRI)",
        airline: "Delta Connection",
        aircraft: "CRJ9 (N907XJ)",
        status: "Landed 11:13 AM"
    },
    {
        flight: "CI5254",
        time: "2025-07-07T11:35:00",
        from: "Anchorage (ANC)",
        airline: "China Airlines",
        aircraft: "74Y",
        status: "Diverted to DFW"
    },
    {
        flight: "5Y8497",
        time: "2025-07-07T11:35:00",
        from: "Chicago (ORD)",
        airline: "Atlas Air",
        aircraft: "B744 (N408MC)",
        status: "Unknown"
    },
    {
        flight: "DL1462",
        time: "2025-07-07T11:37:00",
        from: "Richmond (RIC)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N696DL)",
        status: "Landed 11:20 AM"
    },
    {
        flight: "F94772",
        time: "2025-07-07T11:37:00",
        from: "Cincinnati (CVG)",
        airline: "Frontier (Ed, Edwin & Eddie the Penguins Livery)",
        aircraft: "A20N (N344FR)",
        status: "Landed 11:22 AM"
    },
    {
        flight: "DL2003",
        time: "2025-07-07T11:38:00",
        from: "Lexington (LEX)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N935AT)",
        status: "Landed 11:10 AM"
    },
    {
        flight: "F91871",
        time: "2025-07-07T11:38:00",
        from: "New York (JFK)",
        airline: "Frontier (Joey the Opossum Livery)",
        aircraft: "A20N (N351FR)",
        status: "Landed 10:59 AM"
    },
    {
        flight: "DL3213",
        time: "2025-07-07T11:40:00",
        from: "Savannah (SAV)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N939DZ)",
        status: "Landed 11:19 AM"
    },
    {
        flight: "DL3069",
        time: "2025-07-07T11:41:00",
        from: "Nashville (BNA)",
        airline: "Delta Air Lines",
        aircraft: "B738 (N3749D)",
        status: "Landed 11:32 AM"
    },
    {
        flight: "DL1479",
        time: "2025-07-07T11:43:00",
        from: "Columbus (CMH)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N953DZ)",
        status: "Landed 11:23 AM"
    },
    {
        flight: "DL609",
        time: "2025-07-07T11:45:00",
        from: "Cancun (CUN)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N878DN)",
        status: "Landed 11:10 AM"
    },
    {
        flight: "DL1847",
        time: "2025-07-07T11:45:00",
        from: "Greensboro (GSO)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N990AT)",
        status: "Landed 11:14 AM"
    },
    {
        flight: "AA1276",
        time: "2025-07-07T11:46:00",
        from: "Dallas (DFW)",
        airline: "American Airlines (Oneworld Livery)",
        aircraft: "B738 (N919NN)",
        status: "Landed 11:24 AM"
    },
    {
        flight: "DL1380",
        time: "2025-07-07T11:46:00",
        from: "Pittsburgh (PIT)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N897DN)",
        status: "Landed 11:25 AM"
    },
    {
        flight: "DL1052",
        time: "2025-07-07T11:47:00",
        from: "Minneapolis (MSP)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N333DX)",
        status: "Landed 11:33 AM"
    },
    {
        flight: "DL1334",
        time: "2025-07-07T11:47:00",
        from: "Fort Lauderdale (FLL)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N695DL)",
        status: "Landed 11:23 AM"
    },
    {
        flight: "DL3090",
        time: "2025-07-07T11:47:00",
        from: "Jackson (JAN)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N954AT)",
        status: "Landed 1:15 PM"
    },
    {
        flight: "DL385",
        time: "2025-07-07T11:49:00",
        from: "Boston (BOS)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N106DN)",
        status: "Landed 11:35 AM"
    },
    {
        flight: "DL2127",
        time: "2025-07-07T11:50:00",
        from: "Chattanooga (CHA)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N986AT)",
        status: "Landed 11:31 AM"
    },
    {
        flight: "DL1266",
        time: "2025-07-07T11:53:00",
        from: "West Palm Beach (PBI)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N336DX)",
        status: "Landed 11:37 AM"
    },
    {
        flight: "DL431",
        time: "2025-07-07T11:55:00",
        from: "Denver (DEN)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N373DX)",
        status: "Landed 11:55 AM"
    },
    {
        flight: "DL2974",
        time: "2025-07-07T11:55:00",
        from: "Washington (IAD)",
        airline: "Delta Air Lines",
        aircraft: "BCS3 (N314DU)",
        status: "Landed 12:16 PM"
    },
    {
        flight: "DL3091",
        time: "2025-07-07T11:55:00",
        from: "Charleston (CHS)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N963DZ)",
        status: "Landed 11:46 AM"
    },
    {
        flight: "DL1336",
        time: "2025-07-07T11:57:00",
        from: "Norfolk (ORF)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N820DN)",
        status: "Landed 12:10 PM"
    },
    {
        flight: "DL2368",
        time: "2025-07-07T11:58:00",
        from: "Asheville (AVL)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N603AT)",
        status: "Landed 12:10 PM"
    },
    {
        flight: "DL2326",
        time: "2025-07-07T12:00:00",
        from: "Jacksonville (JAX)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N556NW)",
        status: "Landed 11:42 AM"
    },
    {
        flight: "DL2503",
        time: "2025-07-07T12:00:00",
        from: "Wilmington (ILM)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N961AT)",
        status: "Landed 11:28 AM"
    },
    {
        flight: "F93071",
        time: "2025-07-07T12:01:00",
        from: "Norfolk (ORF)",
        airline: "Frontier (Choo the Pika Livery)",
        aircraft: "A20N (N331FR)",
        status: "Landed 12:26 PM"
    },
    {
        flight: "DL9982",
        time: "2025-07-07T12:01:00",
        from: "Atlanta (ATL)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N685DA)",
        status: "Landed 1:00 PM"
    },
    {
        flight: "DL1571",
        time: "2025-07-07T12:02:00",
        from: "St. Louis (STL)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N883DN)",
        status: "Landed 11:48 AM"
    },
    {
        flight: "",
        time: "2025-07-07T07:29:00",
        from: "Concord (USA)",
        airline: "-",
        aircraft: "CRJ7 (N519JG)",
        status: "Landed 7:55 AM"
    },
    {
        flight: "DL1500",
        time: "2025-07-07T12:03:00",
        from: "Cleveland (CLE)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N812DN)",
        status: "Landed 11:39 AM"
    },
    {
        flight: "DL1708",
        time: "2025-07-07T12:04:00",
        from: "Huntsville (HSV)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N896AT)",
        status: "Landed 11:46 AM"
    },
    {
        flight: "DL4835",
        time: "2025-07-07T12:04:00",
        from: "Knoxville (TYS)",
        airline: "Delta Connection",
        aircraft: "CRJ9 (N691CA)",
        status: "Landed 1:03 PM"
    },
    {
        flight: "DL1688",
        time: "2025-07-07T12:05:00",
        from: "Albuquerque (ABQ)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N841DN)",
        status: "Landed 11:54 AM"
    },
    {
        flight: "DL3033",
        time: "2025-07-07T12:05:00",
        from: "Little Rock (LIT)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N994AT)",
        status: "Landed 12:02 PM"
    },
    {
        flight: "WN4608",
        time: "2025-07-07T12:05:00",
        from: "St. Louis (STL)",
        airline: "Southwest Airlines",
        aircraft: "B738 (N8647A)",
        status: "Landed 11:52 AM"
    },
    {
        flight: "DL926",
        time: "2025-07-07T12:09:00",
        from: "Washington (DCA)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N350DN)",
        status: "Landed 12:41 PM"
    },
    {
        flight: "DL1374",
        time: "2025-07-07T12:12:00",
        from: "Louisville (SDF)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N966AT)",
        status: "Landed 11:49 AM"
    },
    {
        flight: "AC8567",
        time: "2025-07-07T12:13:00",
        from: "Montreal (YUL)",
        airline: "Air Canada Express",
        aircraft: "CRJ9 (C-GJFZ)",
        status: "Landed 1:52 PM"
    },
    {
        flight: "DL3186",
        time: "2025-07-07T12:13:00",
        from: "Memphis (MEM)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N961DZ)",
        status: "Landed 11:50 AM"
    },
    {
        flight: "DL1590",
        time: "2025-07-07T12:15:00",
        from: "Columbia (CAE)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N974AT)",
        status: "Landed 11:44 AM"
    },
    {
        flight: "DL5135",
        time: "2025-07-07T12:16:00",
        from: "Baton Rouge (BTR)",
        airline: "Delta Connection",
        aircraft: "CRJ9 (N306PQ)",
        status: "Unknown"
    },
    {
        flight: "DL71",
        time: "2025-07-07T12:20:00",
        from: "Amsterdam (AMS)",
        airline: "Delta Air Lines",
        aircraft: "A339 (N401DZ)",
        status: "Landed 12:04 PM"
    },
    {
        flight: "DL2856",
        time: "2025-07-07T12:20:00",
        from: "Detroit (DTW)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N392DN)",
        status: "Landed 1:17 PM"
    },
    {
        flight: "DL1592",
        time: "2025-07-07T12:21:00",
        from: "Baltimore (BWI)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N823DN)",
        status: "Landed 12:12 PM"
    },
    {
        flight: "DL3047",
        time: "2025-07-07T12:24:00",
        from: "Myrtle Beach (MYR)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N943AT)",
        status: "Landed 11:50 AM"
    },
    {
        flight: "DL5520",
        time: "2025-07-07T12:24:00",
        from: "Fayetteville (FAY)",
        airline: "Delta Connection",
        aircraft: "CRJ9 (N228PQ)",
        status: "Landed 12:36 PM"
    },
    {
        flight: "DL1814",
        time: "2025-07-07T12:25:00",
        from: "Gulfport (GPT)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N985AT)",
        status: "Landed 11:57 AM"
    },
    {
        flight: "DL886",
        time: "2025-07-07T12:28:00",
        from: "Tucson (TUS)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N888DU)",
        status: "Landed 12:13 PM"
    },
    {
        flight: "DL1213",
        time: "2025-07-07T12:28:00",
        from: "Orlando (MCO)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N6714Q)",
        status: "Landed 12:31 PM"
    },
    {
        flight: "DL989",
        time: "2025-07-07T12:31:00",
        from: "New York (LGA)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N372DN)",
        status: "Landed 1:23 PM"
    },
    {
        flight: "DL2836",
        time: "2025-07-07T12:31:00",
        from: "Miami (MIA)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N553NW)",
        status: "Landed 12:40 PM"
    },
    {
        flight: "DL1227",
        time: "2025-07-07T12:33:00",
        from: "Tampa (TPA)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N823DX)",
        status: "Landed 12:20 PM"
    },
    {
        flight: "DL1699",
        time: "2025-07-07T12:33:00",
        from: "Raleigh-Durham (RDU)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N364DX)",
        status: "Landed 12:24 PM"
    },
    {
        flight: "DL2158",
        time: "2025-07-07T12:33:00",
        from: "Greenville-Spartanburg (GSP)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N944AT)",
        status: "Landed 1:05 PM"
    },
    {
        flight: "F91079",
        time: "2025-07-07T12:35:00",
        from: "Baltimore (BWI)",
        airline: "Frontier (Colorado the Bighorn Sheep Livery)",
        aircraft: "A20N (N323FR)",
        status: "Landed 12:46 PM"
    },
    {
        flight: "WN1933",
        time: "2025-07-07T12:35:00",
        from: "Dallas (DAL)",
        airline: "Southwest Airlines",
        aircraft: "B738 (N8617E)",
        status: "Landed 12:17 PM"
    },
    {
        flight: "DL5130",
        time: "2025-07-07T12:37:00",
        from: "Charleston (CRW)",
        airline: "Delta Connection",
        aircraft: "CRJ9 (N331PQ)",
        status: "Landed 12:15 PM"
    },
    {
        flight: "DL590",
        time: "2025-07-07T12:38:00",
        from: "Mexico City (MEX)",
        airline: "Delta Air Lines",
        aircraft: "B738 (N3745B)",
        status: "Landed 12:16 PM"
    },
    {
        flight: "DL918",
        time: "2025-07-07T12:39:00",
        from: "Phoenix (PHX)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N112DN)",
        status: "Landed 12:32 PM"
    },
    {
        flight: "DL1585",
        time: "2025-07-07T12:40:00",
        from: "Houston (IAH)",
        airline: "Delta Air Lines",
        aircraft: "A320 (N365NW)",
        status: "Landed 12:13 PM"
    },
    {
        flight: "DL2788",
        time: "2025-07-07T12:41:00",
        from: "Charlotte (CLT)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N607AT)",
        status: "Landed 12:29 PM"
    },
    {
        flight: "DL1089",
        time: "2025-07-07T12:42:00",
        from: "Fort Myers (RSW)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N321DH)",
        status: "Landed 12:19 PM"
    },
    {
        flight: "DL2250",
        time: "2025-07-07T12:42:00",
        from: "Birmingham (BHM)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N960DZ)",
        status: "Landed 12:31 PM"
    },
    {
        flight: "DL2332",
        time: "2025-07-07T12:42:00",
        from: "Sarasota (SRQ)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N945DZ)",
        status: "Landed 12:15 PM"
    },
    {
        flight: "8C3361",
        time: "2025-07-07T12:43:00",
        from: "Baltimore (BWI)",
        airline: "Amazon Air",
        aircraft: "B763 (N229AZ)",
        status: "Landed 1:13 PM"
    },
    {
        flight: "DL907",
        time: "2025-07-07T12:44:00",
        from: "Salt Lake City (SLC)",
        airline: "Delta Air Lines",
        aircraft: "A21N (N509DT)",
        status: "Landed 12:33 PM"
    },
    {
        flight: "DL4930",
        time: "2025-07-07T12:44:00",
        from: "White Plains (HPN)",
        airline: "Delta Connection",
        aircraft: "CRJ9 (N133EV)",
        status: "Landed 12:43 PM"
    },
    {
        flight: "DL35",
        time: "2025-07-07T12:45:00",
        from: "Edinburgh (EDI)",
        airline: "Delta Air Lines",
        aircraft: "B763 (N1602)",
        status: "Landed 12:23 PM"
    },
    {
        flight: "DL83",
        time: "2025-07-07T12:45:00",
        from: "Paris (CDG)",
        airline: "Delta Air Lines",
        aircraft: "A333 (N820NW)",
        status: "Landed 12:34 PM"
    },
    {
        flight: "WN3184",
        time: "2025-07-07T12:45:00",
        from: "Austin (AUS)",
        airline: "Southwest Airlines",
        aircraft: "B737 (N275WN)",
        status: "Landed 12:24 PM"
    },
    {
        flight: "DL1100",
        time: "2025-07-07T12:48:00",
        from: "Philadelphia (PHL)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N891DN)",
        status: "Landed 1:09 PM"
    },
    {
        flight: "DL3035",
        time: "2025-07-07T12:48:00",
        from: "Daytona Beach (DAB)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N942DZ)",
        status: "Landed 12:28 PM"
    },
    {
        flight: "DL4820",
        time: "2025-07-07T12:48:00",
        from: "Charlottesville (CHO)",
        airline: "Delta Connection",
        aircraft: "CRJ9 (N903XJ)",
        status: "Landed 1:39 PM"
    },
    {
        flight: "DL1178",
        time: "2025-07-07T12:49:00",
        from: "Chicago (ORD)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N884DN)",
        status: "Landed 12:27 PM"
    },
    {
        flight: "DL1888",
        time: "2025-07-07T12:50:00",
        from: "Indianapolis (IND)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N873DN)",
        status: "Landed 12:31 PM"
    },
    {
        flight: "DL5372",
        time: "2025-07-07T12:51:00",
        from: "Evansville (EVV)",
        airline: "Delta Connection",
        aircraft: "CRJ7 (N668CA)",
        status: "Landed 12:20 PM"
    },
    {
        flight: "DL1094",
        time: "2025-07-07T12:52:00",
        from: "Fort Lauderdale (FLL)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N548US)",
        status: "Landed 3:00 PM"
    },
    {
        flight: "DL3118",
        time: "2025-07-07T12:52:00",
        from: "Melbourne (MLB)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N951AT)",
        status: "Landed 12:25 PM"
    },
    {
        flight: "DL5129",
        time: "2025-07-07T12:53:00",
        from: "Roanoke (ROA)",
        airline: "Delta Connection",
        aircraft: "CRJ7 (N368CA)",
        status: "Landed 12:38 PM"
    },
    {
        flight: "DL839",
        time: "2025-07-07T12:54:00",
        from: "Dallas (DFW)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N360DN)",
        status: "Landed 12:37 PM"
    },
    {
        flight: "DL5352",
        time: "2025-07-07T12:55:00",
        from: "Columbus (CSG)",
        airline: "Delta Connection",
        aircraft: "CRJ7 (N376CA)",
        status: "Landed 12:42 PM"
    },
    {
        flight: "DL2325",
        time: "2025-07-07T12:56:00",
        from: "New York (EWR)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N376DN)",
        status: "Landed 1:27 PM"
    },
    {
        flight: "DL973",
        time: "2025-07-07T12:57:00",
        from: "Boston (BOS)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N109DN)",
        status: "Landed 1:09 PM"
    },
    {
        flight: "DL1424",
        time: "2025-07-07T12:57:00",
        from: "New Orleans (MSY)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N557NW)",
        status: "Landed 2:43 PM"
    },
    {
        flight: "DL1311",
        time: "2025-07-07T12:58:00",
        from: "West Palm Beach (PBI)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N339DN)",
        status: "Landed 12:44 PM"
    },
    {
        flight: "DL1575",
        time: "2025-07-07T13:00:00",
        from: "Bentonville (XNA)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N991AT)",
        status: "Landed 12:51 PM"
    },
    {
        flight: "DL2321",
        time: "2025-07-07T13:00:00",
        from: "Augusta (AGS)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N965AT)",
        status: "Landed 12:56 PM"
    },
    {
        flight: "DL755",
        time: "2025-07-07T13:01:00",
        from: "Las Vegas (LAS)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N367DN)",
        status: "Landed 12:42 PM"
    },
    {
        flight: "DL3108",
        time: "2025-07-07T13:01:00",
        from: "Dayton (DAY)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N942AT)",
        status: "Landed 12:26 PM"
    },
    {
        flight: "WUP901",
        time: "2025-07-07T13:04:00",
        from: "Boston (BOS)",
        airline: "Wheels Up",
        aircraft: "C750 (N901UP)",
        status: "Landed 1:22 PM"
    },
    {
        flight: "DL1509",
        time: "2025-07-07T13:05:00",
        from: "Houston (HOU)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N891AT)",
        status: "Landed 12:43 PM"
    },
    {
        flight: "DL1743",
        time: "2025-07-07T13:05:00",
        from: "Knoxville (TYS)",
        airline: "Delta Air Lines",
        aircraft: "A320 (N337NW)",
        status: "Landed 12:48 PM"
    },
    {
        flight: "DL2754",
        time: "2025-07-07T13:05:00",
        from: "Tulsa (TUL)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N893AT)",
        status: "Landed 12:39 PM"
    },
    {
        flight: "DL3197",
        time: "2025-07-07T13:05:00",
        from: "Nashville (BNA)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N950DZ)",
        status: "Landed 12:52 PM"
    },
    {
        flight: "DL3220",
        time: "2025-07-07T13:05:00",
        from: "Savannah (SAV)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N859DN)",
        status: "Landed 1:30 PM"
    },
    {
        flight: "NK2469",
        time: "2025-07-07T13:08:00",
        from: "Tampa (TPA)",
        airline: "Spirit Airlines",
        aircraft: "A321 (N679NK)",
        status: "Landed 12:47 PM"
    },
    {
        flight: "DL1841",
        time: "2025-07-07T13:11:00",
        from: "Kingston (KIN)",
        airline: "Delta Air Lines (SkyTeam Livery)",
        aircraft: "B738 (N381DN)",
        status: "Landed 12:33 PM"
    },
    {
        flight: "DL4840",
        time: "2025-07-07T13:11:00",
        from: "Jackson (JAN)",
        airline: "Delta Connection",
        aircraft: "CRJ9 (N901XJ)",
        status: "Unknown"
    },
    {
        flight: "F93511",
        time: "2025-07-07T13:12:00",
        from: "Boston (BOS)",
        airline: "Frontier (Brazos the Ridgway's Hawk)",
        aircraft: "A21N (N658FR)",
        status: "Landed 12:45 PM"
    },
    {
        flight: "WS1360",
        time: "2025-07-07T13:12:00",
        from: "Winnipeg (YWG)",
        airline: "WestJet",
        aircraft: "B737 (C-FKIW)",
        status: "Landed 1:26 PM"
    },
    {
        flight: "NK2091",
        time: "2025-07-07T13:12:00",
        from: "Boston (BOS)",
        airline: "Spirit Airlines",
        aircraft: "A320 (N603NK)",
        status: "Landed 12:18 PM"
    },
    {
        flight: "DL441",
        time: "2025-07-07T13:13:00",
        from: "Dallas (DAL)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N892AT)",
        status: "Landed 12:58 PM"
    },
    {
        flight: "DL2999",
        time: "2025-07-07T13:13:00",
        from: "Milwaukee (MKE)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N946DZ)",
        status: "Landed 12:59 PM"
    },
    {
        flight: "DL131",
        time: "2025-07-07T13:15:00",
        from: "Munich (MUC)",
        airline: "Delta Air Lines (Vince Dooley Sticker)",
        aircraft: "B764 (N842MH)",
        status: "Landed 1:01 PM"
    },
    {
        flight: "WN2894",
        time: "2025-07-07T13:15:00",
        from: "Houston (HOU)",
        airline: "Southwest Airlines",
        aircraft: "B738 (N8526W)",
        status: "Landed 1:05 PM"
    },
    {
        flight: "DL4172",
        time: "2025-07-07T13:16:00",
        from: "Albany (ABY)",
        airline: "Delta Connection",
        aircraft: "CRJ7 (N776SK)",
        status: "Landed 12:45 PM"
    },
    {
        flight: "DL5425",
        time: "2025-07-07T13:16:00",
        from: "Dothan (DHN)",
        airline: "Delta Connection",
        aircraft: "CRJ9 (N605LR)",
        status: "Landed 12:55 PM"
    },
    {
        flight: "DL5817",
        time: "2025-07-07T13:16:00",
        from: "Hilton Head Island (HHH)",
        airline: "Delta Connection",
        aircraft: "E170 (N860RW)",
        status: "Landed 1:02 PM"
    },
    {
        flight: "DL73",
        time: "2025-07-07T13:20:00",
        from: "Amsterdam (AMS)",
        airline: "Delta Air Lines",
        aircraft: "A359 (N568DZ)",
        status: "Canceled"
    },
    {
        flight: "DL993",
        time: "2025-07-07T13:20:00",
        from: "New York (LGA)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N383DZ)",
        status: "Landed 1:20 PM"
    },
    {
        flight: "DL2218",
        time: "2025-07-07T13:20:00",
        from: "Tallahassee (TLH)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N922AT)",
        status: "Landed 12:48 PM"
    },
    {
        flight: "K4243",
        time: "2025-07-07T13:20:00",
        from: "Anchorage (ANC)",
        airline: "DHL",
        aircraft: "B77L (N774CK)",
        status: "Landed 1:22 PM"
    },
    {
        flight: "DL1703",
        time: "2025-07-07T13:21:00",
        from: "St. Louis (STL)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N809DN)",
        status: "Landed 1:08 PM"
    },
    {
        flight: "F916",
        time: "2025-07-07T13:21:00",
        from: "Montego Bay (MBJ)",
        airline: "Frontier (Pike the Otter Livery)",
        aircraft: "A320 (N235FR)",
        status: "Landed 12:53 PM"
    },
    {
        flight: "DL1063",
        time: "2025-07-07T13:24:00",
        from: "Chicago (MDW)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N960AT)",
        status: "Landed 1:03 PM"
    },
    {
        flight: "AM978",
        time: "2025-07-07T13:25:00",
        from: "Monterrey (MTY)",
        airline: "Aeromexico Connect",
        aircraft: "E190 (XA-AEP)",
        status: "Landed 1:07 PM"
    },
    {
        flight: "DL82",
        time: "2025-07-07T13:25:00",
        from: "Memphis (MEM)",
        airline: "Delta Air Lines",
        aircraft: "A319 (N354NB)",
        status: "Landed 12:57 PM"
    },
    {
        flight: "DL2471",
        time: "2025-07-07T13:25:00",
        from: "Kansas City (MCI)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N863DN)",
        status: "Landed 1:06 PM"
    },
    {
        flight: "AC7304",
        time: "2025-07-07T13:25:00",
        from: "Montreal (YUL)",
        airline: "Air Canada Cargo",
        aircraft: "B763 (C-FPCA)",
        status: "Landed 12:50 PM"
    },
    {
        flight: "DL4048",
        time: "2025-07-07T13:26:00",
        from: "Fort Wayne (FWA)",
        airline: "Delta Connection",
        aircraft: "CRJ9 (N809SK)",
        status: "Landed 1:11 PM"
    },
    {
        flight: "DL1363",
        time: "2025-07-07T13:28:00",
        from: "Pittsburgh (PIT)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N938DZ)",
        status: "Landed 1:12 PM"
    },
    {
        flight: "DL4095",
        time: "2025-07-07T13:28:00",
        from: "Aspen (ASE)",
        airline: "American Eagle",
        aircraft: "CRJ7 (N712SK)",
        status: "Landed 1:25 PM"
    },
    {
        flight: "WN313",
        time: "2025-07-07T13:30:00",
        from: "Washington (DCA)",
        airline: "Southwest Airlines",
        aircraft: "B737 (N7879A)",
        status: "Landed 1:37 PM"
    },
    {
        flight: "WN1149",
        time: "2025-07-07T13:30:00",
        from: "Raleigh-Durham (RDU)",
        airline: "Southwest Airlines (Nevada One Livery)",
        aircraft: "B738 (N8646B)",
        status: "Landed 3:11 PM"
    },
    {
        flight: "DL5365",
        time: "2025-07-07T13:31:00",
        from: "Jacksonville (OAJ)",
        airline: "Delta Connection",
        aircraft: "CRJ9 (N607LR)",
        status: "Landed 1:24 PM"
    },
    {
        flight: "DL1642",
        time: "2025-07-07T13:32:00",
        from: "Destin Fort Walton Beach (VPS)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N919AT)",
        status: "Landed 12:59 PM"
    },
    {
        flight: "3S585",
        time: "2025-07-07T13:32:00",
        from: "Los Angeles (LAX)",
        airline: "AeroLogic",
        aircraft: "B77L (D-AALG)",
        status: "Landed 1:32 PM"
    },
    {
        flight: "AA3104",
        time: "2025-07-07T13:33:00",
        from: "Dallas (DFW)",
        airline: "American Airlines",
        aircraft: "A321 (N536UW)",
        status: "Landed 1:12 PM"
    },
    {
        flight: "DL1658",
        time: "2025-07-07T13:34:00",
        from: "Orlando (MCO)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N694DL)",
        status: "Landed 1:42 PM"
    },
    {
        flight: "F91157",
        time: "2025-07-07T13:34:00",
        from: "New York (EWR)",
        airline: "Frontier (Abaco the Kirtland's Warbler Livery)",
        aircraft: "A21N (N630FR)",
        status: "Landed 2:42 PM"
    },
    {
        flight: "DL33",
        time: "2025-07-07T13:35:00",
        from: "London (LHR)",
        airline: "Delta Air Lines",
        aircraft: "B764 (N840MH)",
        status: "Landed 1:19 PM"
    },
    {
        flight: "DL901",
        time: "2025-07-07T13:35:00",
        from: "Phoenix (PHX)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N688DL)",
        status: "Landed 1:27 PM"
    },
    {
        flight: "DL2206",
        time: "2025-07-07T13:35:00",
        from: "Greensboro (GSO)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N997AT)",
        status: "Landed 1:23 PM"
    },
    {
        flight: "DL1046",
        time: "2025-07-07T13:36:00",
        from: "Minneapolis (MSP)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N874DN)",
        status: "Landed 1:28 PM"
    },
    {
        flight: "VJT878",
        time: "2025-07-07T13:37:00",
        from: "Malta (MLA)",
        airline: "VistaJet",
        aircraft: "GLEX (9H-VJO)",
        status: "Landed 1:48 PM"
    },
    {
        flight: "DL2013",
        time: "2025-07-07T13:39:00",
        from: "Cancun (CUN)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N899DN)",
        status: "Landed 1:19 PM"
    },
    {
        flight: "DL5148",
        time: "2025-07-07T13:39:00",
        from: "Shreveport (SHV)",
        airline: "Delta Connection",
        aircraft: "CRJ9 (N300PQ)",
        status: "Landed 1:10 PM"
    },
    {
        flight: "AM2708",
        time: "2025-07-07T13:40:00",
        from: "Silao (BJX)",
        airline: "Aeromexico Connect",
        aircraft: "E190 (XA-GAK)",
        status: "Landed 1:17 PM"
    },
    {
        flight: "DL109",
        time: "2025-07-07T13:40:00",
        from: "Madrid (MAD)",
        airline: "Delta Air Lines",
        aircraft: "A333 (N810NW)",
        status: "Landed 12:51 PM"
    },
    {
        flight: "DL729",
        time: "2025-07-07T13:40:00",
        from: "San Diego (SAN)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N342DN)",
        status: "Landed 1:25 PM"
    },
    {
        flight: "DL390",
        time: "2025-07-07T13:42:00",
        from: "Los Angeles (LAX)",
        airline: "Delta Air Lines",
        aircraft: "A21N (N517DN)",
        status: "Landed 1:29 PM"
    },
    {
        flight: "UA1848",
        time: "2025-07-07T13:42:00",
        from: "Chicago (ORD)",
        airline: "United Airlines",
        aircraft: "B737 (N12754)",
        status: "Landed 1:36 PM"
    },
    {
        flight: "NK2708",
        time: "2025-07-07T13:42:00",
        from: "Chicago (ORD)",
        airline: "Spirit Airlines",
        aircraft: "A21N (N710NK)",
        status: "Landed 1:29 PM"
    },
    {
        flight: "DL3618",
        time: "2025-07-07T13:43:00",
        from: "South Bend (SBN)",
        airline: "Delta Connection",
        aircraft: "CRJ9 (N833SK)",
        status: "Landed 1:51 PM"
    },
    {
        flight: "DL193",
        time: "2025-07-07T13:45:00",
        from: "Venice (VCE)",
        airline: "Delta Air Lines",
        aircraft: "B763 (N169DZ)",
        status: "Landed 1:15 PM"
    },
    {
        flight: "DL253",
        time: "2025-07-07T13:45:00",
        from: "Edinburgh (EDI)",
        airline: "Delta Air Lines",
        aircraft: "A332 (N861NW)",
        status: "Landed 2:02 PM"
    },
    {
        flight: "DL662",
        time: "2025-07-07T13:45:00",
        from: "Portland (PDX)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N925DZ)",
        status: "Landed 1:32 PM"
    },
    {
        flight: "WN1714",
        time: "2025-07-07T13:45:00",
        from: "Indianapolis (IND)",
        airline: "Southwest Airlines",
        aircraft: "B737 (N200WN)",
        status: "Landed 2:31 PM"
    },
    {
        flight: "DL801",
        time: "2025-07-07T13:47:00",
        from: "Baltimore (BWI)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N698DL)",
        status: "Landed 1:43 PM"
    },
    {
        flight: "DL1823",
        time: "2025-07-07T13:47:00",
        from: "Cincinnati (CVG)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N943DZ)",
        status: "Landed 1:44 PM"
    },
    {
        flight: "DL1281",
        time: "2025-07-07T13:48:00",
        from: "Key West (EYW)",
        airline: "Delta Air Lines",
        aircraft: "A319 (N326NB)",
        status: "Landed 1:34 PM"
    },
    {
        flight: "DL569",
        time: "2025-07-07T13:49:00",
        from: "Seattle (SEA)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N906DN)",
        status: "Landed 1:33 PM"
    },
    {
        flight: "",
        time: "2025-07-07T07:29:00",
        from: "Concord (USA)",
        airline: "-",
        aircraft: "CRJ7 (N519JG)",
        status: "Landed 7:55 AM"
    },
    {
        flight: "DL570",
        time: "2025-07-07T13:52:00",
        from: "San Francisco (SFO)",
        airline: "Delta Air Lines",
        aircraft: "B763 (N179DN)",
        status: "Landed 1:42 PM"
    },
    {
        flight: "DL2923",
        time: "2025-07-07T13:52:00",
        from: "Jacksonville (JAX)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N689DL)",
        status: "Landed 1:29 PM"
    },
    {
        flight: "DL2976",
        time: "2025-07-07T13:52:00",
        from: "Austin (AUS)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N301DV)",
        status: "Landed 1:35 PM"
    },
    {
        flight: "DL3045",
        time: "2025-07-07T13:54:00",
        from: "Panama City (ECP)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N957DZ)",
        status: "Landed 1:40 PM"
    },
    {
        flight: "EJA576",
        time: "2025-07-07T13:54:00",
        from: "Philadelphia (TTN)",
        airline: "NetJets",
        aircraft: "C56X (N576QS)",
        status: "Landed 2:49 PM"
    },
    {
        flight: "AF30",
        time: "2025-07-07T13:55:00",
        from: "Paris (CDG)",
        airline: "Air France",
        aircraft: "B772 (F-GSPA)",
        status: "Landed 2:34 PM"
    },
    {
        flight: "5Y8986",
        time: "2025-07-07T07:07:00",
        from: "Anchorage (ANC)",
        airline: "YunExpress",
        aircraft: "B77L (N704GT)",
        status: "Landed 7:08 AM"
    },
    {
        flight: "DL897",
        time: "2025-07-07T13:56:00",
        from: "Salt Lake City (SLC)",
        airline: "Delta Air Lines",
        aircraft: "B763 (N194DN)",
        status: "Landed 2:40 PM"
    },
    {
        flight: "DL2354",
        time: "2025-07-07T13:56:00",
        from: "Pensacola (PNS)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N959DZ)",
        status: "Landed 1:28 PM"
    },
    {
        flight: "DL2632",
        time: "2025-07-07T13:56:00",
        from: "Omaha (OMA)",
        airline: "Delta Air Lines",
        aircraft: "A319 (N358NB)",
        status: "Landed 1:35 PM"
    },
    {
        flight: "DL2835",
        time: "2025-07-07T13:56:00",
        from: "Toronto (YYZ)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N381DZ)",
        status: "Landed 1:41 PM"
    },
    {
        flight: "DL1248",
        time: "2025-07-07T13:58:00",
        from: "Harrisburg (MDT)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N953AT)",
        status: "Landed 1:25 PM"
    },
    {
        flight: "DL380",
        time: "2025-07-07T13:59:00",
        from: "Washington (DCA)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N117DX)",
        status: "Landed 2:39 PM"
    },
    {
        flight: "SGX715",
        time: "2025-07-07T13:59:00",
        from: "Norman (OUN)",
        airline: "Slate Aviation",
        aircraft: "CRJ1 (N715AV)",
        status: "Landed 2:28 PM"
    },
    {
        flight: "F94347",
        time: "2025-07-07T14:01:00",
        from: "New York (LGA)",
        airline: "Frontier (Stretch the Great Blue Heron Livery)",
        aircraft: "A20N (N334FR)",
        status: "Landed 3:43 PM"
    },
    {
        flight: "DL677",
        time: "2025-07-07T14:02:00",
        from: "Las Vegas (LAS)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N549US)",
        status: "Landed 1:50 PM"
    },
    {
        flight: "DL2681",
        time: "2025-07-07T14:02:00",
        from: "Madison (MSN)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N921AT)",
        status: "Landed 1:37 PM"
    },
    {
        flight: "DL5076",
        time: "2025-07-07T14:02:00",
        from: "Brunswick (BQK)",
        airline: "Delta Connection",
        aircraft: "CRJ7 (N331CA)",
        status: "Landed 1:45 PM"
    },
    {
        flight: "WN3550",
        time: "2025-07-07T14:05:00",
        from: "Orlando (MCO)",
        airline: "Southwest Airlines",
        aircraft: "B738 (N8327A)",
        status: "Landed 1:57 PM"
    },
    {
        flight: "DL317",
        time: "2025-07-07T14:06:00",
        from: "Jackson (JAC)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N693DL)",
        status: "Landed 2:27 PM"
    },
    {
        flight: "DL1510",
        time: "2025-07-07T14:06:00",
        from: "Miami (MIA)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N900PC)",
        status: "Landed 2:01 PM"
    },
    {
        flight: "DL721",
        time: "2025-07-07T14:09:00",
        from: "Santa Ana (SNA)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N713TW)",
        status: "Landed 2:06 PM"
    },
    {
        flight: "DL2633",
        time: "2025-07-07T14:10:00",
        from: "Raleigh-Durham (RDU)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N948DZ)",
        status: "Landed 2:06 PM"
    },
    {
        flight: "DL1522",
        time: "2025-07-07T14:12:00",
        from: "Columbus (CMH)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N941DZ)",
        status: "Landed 1:57 PM"
    },
    {
        flight: "DL2270",
        time: "2025-07-07T14:12:00",
        from: "Philadelphia (PHL)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N825DN)",
        status: "Landed 2:39 PM"
    },
    {
        flight: "F92539",
        time: "2025-07-07T14:12:00",
        from: "Columbus (CMH)",
        airline: "Frontier (Hugh the Manatee Livery)",
        aircraft: "A320 (N238FR)",
        status: "Canceled"
    },
    {
        flight: "DL1384",
        time: "2025-07-07T14:14:00",
        from: "Buffalo (BUF)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N885DN)",
        status: "Landed 1:59 PM"
    },
    {
        flight: "DL3107",
        time: "2025-07-07T14:14:00",
        from: "Charleston (CHS)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N932DZ)",
        status: "Landed 1:46 PM"
    },
    {
        flight: "DL1147",
        time: "2025-07-07T14:15:00",
        from: "Chicago (ORD)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N311DN)",
        status: "Landed 2:12 PM"
    },
    {
        flight: "WN321",
        time: "2025-07-07T14:15:00",
        from: "Pittsburgh (PIT)",
        airline: "Southwest Airlines",
        aircraft: "B38M (N8847Q)",
        status: "Landed 2:04 PM"
    },
    {
        flight: "DL593",
        time: "2025-07-07T14:16:00",
        from: "Mexico City (MEX)",
        airline: "Delta Air Lines",
        aircraft: "B738 (N377DE)",
        status: "Landed 1:38 PM"
    },
    {
        flight: "DL2397",
        time: "2025-07-07T14:16:00",
        from: "New York (EWR)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N313DN)",
        status: "Landed 2:25 PM"
    },
    {
        flight: "DL4160",
        time: "2025-07-07T14:16:00",
        from: "Springfield (SGF)",
        airline: "Delta Connection",
        aircraft: "CRJ9 (N816SK)",
        status: "Landed 2:03 PM"
    },
    {
        flight: "DL1935",
        time: "2025-07-07T14:17:00",
        from: "San Antonio (SAT)",
        airline: "Delta Air Lines",
        aircraft: "A320 (N340NW)",
        status: "Landed 2:04 PM"
    },
    {
        flight: "DL1637",
        time: "2025-07-07T14:19:00",
        from: "Wichita (ICT)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N982AT)",
        status: "Landed 1:54 PM"
    },
    {
        flight: "DL2951",
        time: "2025-07-07T14:19:00",
        from: "Windsor Locks (BDL)",
        airline: "Delta Air Lines",
        aircraft: "A320 (N350NA)",
        status: "Landed 2:00 PM"
    },
    {
        flight: "DL654",
        time: "2025-07-07T14:20:00",
        from: "San Jose (SJC)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N869DN)",
        status: "Landed 1:56 PM"
    },
    {
        flight: "DL761",
        time: "2025-07-07T14:20:00",
        from: "Ontario (ONT)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N380DN)",
        status: "Landed 2:10 PM"
    },
    {
        flight: "LH444",
        time: "2025-07-07T14:20:00",
        from: "Frankfurt (FRA)",
        airline: "Lufthansa",
        aircraft: "A333 (D-AIKR)",
        status: "Landed 2:20 PM"
    },
    {
        flight: "DL3104",
        time: "2025-07-07T14:21:00",
        from: "Sarasota (SRQ)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N555NW)",
        status: "Landed 2:18 PM"
    },
    {
        flight: "F92897",
        time: "2025-07-07T14:22:00",
        from: "Detroit (DTW)",
        airline: "Frontier (Lone Star the Longhorn Steer Livery)",
        aircraft: "A20N (N347FR)",
        status: "Landed 4:56 PM"
    },
    {
        flight: "DL1481",
        time: "2025-07-07T14:24:00",
        from: "Louisville (SDF)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N936DZ)",
        status: "Landed 4:27 PM"
    },
    {
        flight: "DL2188",
        time: "2025-07-07T14:24:00",
        from: "Detroit (DTW)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N820DX)",
        status: "Landed 2:52 PM"
    },
    {
        flight: "DL2978",
        time: "2025-07-07T14:24:00",
        from: "Cleveland (CLE)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N947DZ)",
        status: "Landed 2:17 PM"
    },
    {
        flight: "DL25",
        time: "2025-07-07T14:25:00",
        from: "Nice (NCE)",
        airline: "Delta Air Lines",
        aircraft: "B764 (N834MH)",
        status: "Landed 2:50 PM"
    },
    {
        flight: "DL141",
        time: "2025-07-07T14:25:00",
        from: "Brussels (BRU)",
        airline: "Delta Air Lines",
        aircraft: "B763 (N192DN)",
        status: "Landed 2:46 PM"
    },
    {
        flight: "DL215",
        time: "2025-07-07T14:25:00",
        from: "Rome (FCO)",
        airline: "Delta Air Lines",
        aircraft: "A359 (N569DZ)",
        status: "Landed 2:12 PM"
    },
    {
        flight: "DL223",
        time: "2025-07-07T14:25:00",
        from: "Athens (ATH)",
        airline: "Delta Air Lines",
        aircraft: "A339 (N405DX)",
        status: "Landed 1:51 PM"
    },
    {
        flight: "DL990",
        time: "2025-07-07T14:25:00",
        from: "New York (LGA)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N348DN)",
        status: "Landed 2:37 PM"
    },
    {
        flight: "DL3153",
        time: "2025-07-07T14:25:00",
        from: "Birmingham (BHM)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N933DZ)",
        status: "Landed 2:07 PM"
    },
    {
        flight: "WN411",
        time: "2025-07-07T14:25:00",
        from: "Nashville (BNA)",
        airline: "Southwest Airlines",
        aircraft: "B737 (N7750A)",
        status: "Landed 2:17 PM"
    },
    {
        flight: "WN444",
        time: "2025-07-07T14:25:00",
        from: "Chicago (MDW)",
        airline: "Southwest Airlines",
        aircraft: "B737 (N7876A)",
        status: "Landed 3:25 PM"
    },
    {
        flight: "DL1587",
        time: "2025-07-07T14:26:00",
        from: "Tampa (TPA)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N326DN)",
        status: "Landed 3:10 PM"
    },
    {
        flight: "NK2467",
        time: "2025-07-07T14:27:00",
        from: "Miami (MIA)",
        airline: "Spirit Airlines",
        aircraft: "A320 (N697NK)",
        status: "Landed 3:18 PM"
    },
    {
        flight: "DL961",
        time: "2025-07-07T14:28:00",
        from: "Dallas (DFW)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N363DN)",
        status: "Landed 2:11 PM"
    },
    {
        flight: "DL91",
        time: "2025-07-07T14:30:00",
        from: "Zurich (ZRH)",
        airline: "Delta Air Lines",
        aircraft: "B763 (N173DZ)",
        status: "Landed 2:22 PM"
    },
    {
        flight: "DL1375",
        time: "2025-07-07T14:30:00",
        from: "Syracuse (SYR)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N331DN)",
        status: "Landed 2:07 PM"
    },
    {
        flight: "DL2490",
        time: "2025-07-07T14:30:00",
        from: "Oklahoma City (OKC)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N936AT)",
        status: "Landed 2:00 PM"
    },
    {
        flight: "F91003",
        time: "2025-07-07T14:30:00",
        from: "Philadelphia (PHL)",
        airline: "Frontier (D&A the Hispaniolan Parakeets Livery)",
        aircraft: "A21N (N635FR)",
        status: "Landed 2:53 PM"
    },
    {
        flight: "WN826",
        time: "2025-07-07T14:30:00",
        from: "Phoenix (PHX)",
        airline: "Southwest Airlines (Imua One Livery)",
        aircraft: "B38M (N8710M)",
        status: "Landed 2:18 PM"
    },
    {
        flight: "DL1271",
        time: "2025-07-07T14:31:00",
        from: "Fort Lauderdale (FLL)",
        airline: "Delta Air Lines",
        aircraft: "B753 (N589NW)",
        status: "Landed 2:12 PM"
    },
    {
        flight: "DL4955",
        time: "2025-07-07T14:31:00",
        from: "Montgomery (MGM)",
        airline: "Delta Connection",
        aircraft: "CRJ9 (N913XJ)",
        status: "Landed 2:36 PM"
    },
    {
        flight: "F93500",
        time: "2025-07-07T14:31:00",
        from: "Kansas City (MCI)",
        airline: "Frontier (Lewis the Greater Sage-Grouse Livery)",
        aircraft: "A20N (N378FR)",
        status: "Landed 2:24 PM"
    },
    {
        flight: "DL741",
        time: "2025-07-07T14:32:00",
        from: "Sacramento (SMF)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N889DN)",
        status: "Landed 2:26 PM"
    },
    {
        flight: "NK2270",
        time: "2025-07-07T14:32:00",
        from: "Philadelphia (PHL)",
        airline: "Spirit Airlines (Super Nintendo World Livery)",
        aircraft: "A20N (N986NK)",
        status: "Landed 2:44 PM"
    },
    {
        flight: "UA659",
        time: "2025-07-07T14:33:00",
        from: "Washington (IAD)",
        airline: "United Airlines",
        aircraft: "B737 (N17752)",
        status: "Landed 2:22 PM"
    },
    {
        flight: "DL5526",
        time: "2025-07-07T14:34:00",
        from: "Lafayette (LFT)",
        airline: "Delta Connection",
        aircraft: "CRJ9 (N928XJ)",
        status: "Landed 2:09 PM"
    },
    {
        flight: "DL2235",
        time: "2025-07-07T14:35:00",
        from: "Denver (DEN)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N119DN)",
        status: "Landed 2:15 PM"
    },
    {
        flight: "DL3030",
        time: "2025-07-07T14:35:00",
        from: "Gainesville (GNV)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N930AT)",
        status: "Landed 2:28 PM"
    },
    {
        flight: "DL5086",
        time: "2025-07-07T14:35:00",
        from: "Blountville (TRI)",
        airline: "Delta Connection",
        aircraft: "CRJ9 (N186GJ)",
        status: "Landed 2:09 PM"
    },
    {
        flight: "DL5312",
        time: "2025-07-07T14:35:00",
        from: "Valdosta (VLD)",
        airline: "Delta Connection",
        aircraft: "CRJ7 (N690CA)",
        status: "Landed 3:08 PM"
    },
    {
        flight: "DL1527",
        time: "2025-07-07T14:39:00",
        from: "West Palm Beach (PBI)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N357DN)",
        status: "Landed 5:15 PM"
    },
    {
        flight: "DL2755",
        time: "2025-07-07T14:39:00",
        from: "Norfolk (ORF)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N952DZ)",
        status: "Landed 2:10 PM"
    },
    {
        flight: "DL3210",
        time: "2025-07-07T14:39:00",
        from: "Lexington (LEX)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N895AT)",
        status: "Landed 2:05 PM"
    },
    {
        flight: "AM2692",
        time: "2025-07-07T14:40:00",
        from: "San Luis Potosi (SLP)",
        airline: "Aeromexico Connect",
        aircraft: "E190 (XA-GAH)",
        status: "Landed 2:21 PM"
    },
    {
        flight: "DL15",
        time: "2025-07-07T14:40:00",
        from: "Frankfurt (FRA)",
        airline: "Delta Air Lines",
        aircraft: "A332 (N854NW)",
        status: "Landed 2:23 PM"
    },
    {
        flight: "DL177",
        time: "2025-07-07T14:40:00",
        from: "Dublin (DUB)",
        airline: "Delta Air Lines",
        aircraft: "A333 (N822NW)",
        status: "Landed 2:20 PM"
    },
    {
        flight: "DL664",
        time: "2025-07-07T14:40:00",
        from: "Orlando (MCO)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N544US)",
        status: "Landed 2:16 PM"
    },
    {
        flight: "DL2177",
        time: "2025-07-07T14:40:00",
        from: "Richmond (RIC)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N821DN)",
        status: "Landed 2:14 PM"
    },
    {
        flight: "DL1704",
        time: "2025-07-07T14:41:00",
        from: "Des Moines (DSM)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N608AT)",
        status: "Landed 2:16 PM"
    },
    {
        flight: "DL2511",
        time: "2025-07-07T14:41:00",
        from: "Rochester (ROC)",
        airline: "Delta Air Lines",
        aircraft: "A320 (N319US)",
        status: "Landed 2:16 PM"
    },
    {
        flight: "DL2097",
        time: "2025-07-07T14:41:00",
        from: "Rochester (ROC)",
        airline: "Delta Air Lines",
        aircraft: "320",
        status: "Unknown"
    },
    {
        flight: "DL3040",
        time: "2025-07-07T14:42:00",
        from: "Little Rock (LIT)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N958DZ)",
        status: "Landed 2:32 PM"
    },
    {
        flight: "F93507",
        time: "2025-07-07T14:42:00",
        from: "Orlando (MCO)",
        airline: "Frontier (Wellington the Black-footed Ferret)",
        aircraft: "A20N (N362FR)",
        status: "Landed 4:54 PM"
    },
    {
        flight: "DL1191",
        time: "2025-07-07T14:43:00",
        from: "Daytona Beach (DAB)",
        airline: "Delta Air Lines",
        aircraft: "B738 (N3736C)",
        status: "Landed 2:50 PM"
    },
    {
        flight: "DL3057",
        time: "2025-07-07T14:43:00",
        from: "Asheville (AVL)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N894AT)",
        status: "Landed 2:29 PM"
    },
    {
        flight: "DL376",
        time: "2025-07-07T14:44:00",
        from: "Boston (BOS)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N309DN)",
        status: "Landed 2:33 PM"
    },
    {
        flight: "DL1680",
        time: "2025-07-07T14:44:00",
        from: "Nashville (BNA)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N940DU)",
        status: "Landed 2:14 PM"
    },
    {
        flight: "DL1751",
        time: "2025-07-07T14:44:00",
        from: "Washington (IAD)",
        airline: "Delta Air Lines",
        aircraft: "A319 (N362NB)",
        status: "Landed 2:38 PM"
    },
    {
        flight: "DL1153",
        time: "2025-07-07T14:45:00",
        from: "Fort Myers (RSW)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N699DL)",
        status: "Landed 2:31 PM"
    },
    {
        flight: "DL3535",
        time: "2025-07-07T14:45:00",
        from: "Alexandria (AEX)",
        airline: "Delta Connection",
        aircraft: "CRJ9 (N548CA)",
        status: "Landed 2:36 PM"
    },
    {
        flight: "DL1682",
        time: "2025-07-07T14:46:00",
        from: "Houston (IAH)",
        airline: "Delta Air Lines",
        aircraft: "A320 (N355NW)",
        status: "Landed 2:34 PM"
    },
    {
        flight: "AS784",
        time: "2025-07-07T14:46:00",
        from: "Portland (PDX)",
        airline: "Alaska Airlines",
        aircraft: "B39M (N705AL)",
        status: "Landed 2:55 PM"
    },
    {
        flight: "NK2346",
        time: "2025-07-07T14:46:00",
        from: "Fort Lauderdale (FLL)",
        airline: "Spirit Airlines",
        aircraft: "A21N (N741NK)",
        status: "Landed 2:49 PM"
    },
    {
        flight: "DL515",
        time: "2025-07-07T14:48:00",
        from: "Los Angeles (LAX)",
        airline: "Delta Air Lines",
        aircraft: "B753 (N581NW)",
        status: "Landed 2:45 PM"
    },
    {
        flight: "DL1963",
        time: "2025-07-07T14:48:00",
        from: "Cancun (CUN)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N803DN)",
        status: "Landed 2:25 PM"
    },
    {
        flight: "DL1813",
        time: "2025-07-07T14:50:00",
        from: "Myrtle Beach (MYR)",
        airline: "Delta Air Lines",
        aircraft: "A319 (N343NB)",
        status: "Landed 2:27 PM"
    },
    {
        flight: "DL4935",
        time: "2025-07-07T14:52:00",
        from: "Chattanooga (CHA)",
        airline: "Delta Connection",
        aircraft: "CRJ7 (N354CA)",
        status: "Landed 3:30 PM"
    },
    {
        flight: "AA2910",
        time: "2025-07-07T14:54:00",
        from: "Chicago (ORD)",
        airline: "American Airlines",
        aircraft: "A319 (N804AW)",
        status: "Diverted to CLT"
    },
    {
        flight: "DL2147",
        time: "2025-07-07T14:55:00",
        from: "Grand Rapids (GRR)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N934DZ)",
        status: "Landed 2:31 PM"
    },
    {
        flight: "DL3068",
        time: "2025-07-07T14:55:00",
        from: "Huntsville (HSV)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N967AT)",
        status: "Landed 2:30 PM"
    },
    {
        flight: "DL3185",
        time: "2025-07-07T14:56:00",
        from: "Jackson (JAN)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N988AT)",
        status: "Landed 2:27 PM"
    },
    {
        flight: "DL2342",
        time: "2025-07-07T14:58:00",
        from: "New York (JFK)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N673DL)",
        status: "Landed 2:44 PM"
    },
    {
        flight: "DL2910",
        time: "2025-07-07T14:58:00",
        from: "Columbia (CAE)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N933AT)",
        status: "Landed 2:24 PM"
    },
    {
        flight: "WN3599",
        time: "2025-07-07T15:00:00",
        from: "New York (LGA)",
        airline: "Southwest Airlines",
        aircraft: "B737 (N949WN)",
        status: "Landed 3:20 PM"
    },
    {
        flight: "F97024",
        time: "2025-07-07T15:00:00",
        from: "Punta Cana (PUJ)",
        airline: "Frontier (Hugh the Manatee Livery)",
        aircraft: "A320 (N238FR)",
        status: "Landed 7:13 PM"
    },
    {
        flight: "UA2415",
        time: "2025-07-07T15:02:00",
        from: "Denver (DEN)",
        airline: "United Airlines",
        aircraft: "A320 (N471UA)",
        status: "Landed 2:43 PM"
    },
    {
        flight: "UA694",
        time: "2025-07-07T15:03:00",
        from: "New York (EWR)",
        airline: "United Airlines",
        aircraft: "B739 (N73445)",
        status: "Landed 3:04 PM"
    },
    {
        flight: "DL980",
        time: "2025-07-07T15:05:00",
        from: "Bogota (BOG)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N6705Y)",
        status: "Landed 2:53 PM"
    },
    {
        flight: "DL1808",
        time: "2025-07-07T15:05:00",
        from: "Providence (PVD)",
        airline: "Delta Air Lines",
        aircraft: "A320 (N373NW)",
        status: "Landed 2:58 PM"
    },
    {
        flight: "DL2357",
        time: "2025-07-07T15:06:00",
        from: "Memphis (MEM)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N937DZ)",
        status: "Landed 2:48 PM"
    },
    {
        flight: "DL2908",
        time: "2025-07-07T15:06:00",
        from: "Kansas City (MCI)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N956DZ)",
        status: "Landed 2:52 PM"
    },
    {
        flight: "DL1725",
        time: "2025-07-07T15:07:00",
        from: "Greenville-Spartanburg (GSP)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N998AT)",
        status: "Landed 2:42 PM"
    },
    {
        flight: "DL5241",
        time: "2025-07-07T15:07:00",
        from: "Allentown (ABE)",
        airline: "Delta Connection",
        aircraft: "CRJ9 (N315PQ)",
        status: "Landed 2:40 PM"
    },
    {
        flight: "DL2542",
        time: "2025-07-07T15:08:00",
        from: "New Orleans (MSY)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N6712B)",
        status: "Landed 4:45 PM"
    },
    {
        flight: "DL2621",
        time: "2025-07-07T15:10:00",
        from: "Baton Rouge (BTR)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N923AT)",
        status: "Landed 2:45 PM"
    },
    {
        flight: "F92983",
        time: "2025-07-07T15:10:00",
        from: "Philadelphia (TTN)",
        airline: "Frontier (Baja the Whale Shark Livery)",
        aircraft: "A20N (N342FR)",
        status: "Landed 3:31 PM"
    },
    {
        flight: "WN392",
        time: "2025-07-07T15:10:00",
        from: "Baltimore (BWI)",
        airline: "Southwest Airlines",
        aircraft: "B737 (N480WN)",
        status: "Landed 3:18 PM"
    },
    {
        flight: "DL640",
        time: "2025-07-07T15:11:00",
        from: "San Francisco (SFO)",
        airline: "Delta Air Lines",
        aircraft: "B753 (N583NW)",
        status: "Landed 3:02 PM"
    },
    {
        flight: "",
        time: "2025-07-07T07:29:00",
        from: "Concord (USA)",
        airline: "-",
        aircraft: "CRJ7 (N519JG)",
        status: "Landed 7:55 AM"
    },
    {
        flight: "DL1146",
        time: "2025-07-07T15:14:00",
        from: "White Plains (HPN)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N963AT)",
        status: "Landed 3:33 PM"
    },
    {
        flight: "DL1627",
        time: "2025-07-07T15:14:00",
        from: "Mobile (MOB)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N906AT)",
        status: "Landed 2:46 PM"
    },
    {
        flight: "AA811",
        time: "2025-07-07T15:14:00",
        from: "Phoenix (PHX)",
        airline: "American Airlines",
        aircraft: "A321 (N554UW)",
        status: "Landed 2:56 PM"
    },
    {
        flight: "DL1179",
        time: "2025-07-07T15:16:00",
        from: "San Diego (SAN)",
        airline: "Delta Air Lines",
        aircraft: "B753 (N586NW)",
        status: "Landed 3:21 PM"
    },
    {
        flight: "DL1892",
        time: "2025-07-07T15:16:00",
        from: "Albany (ALB)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N334DN)",
        status: "Landed 3:35 PM"
    },
    {
        flight: "F93117",
        time: "2025-07-07T15:16:00",
        from: "Syracuse (SYR)",
        airline: "Frontier(Savannah the Yellow-Headed Amazon Livery)",
        aircraft: "A21N (N636FR)",
        status: "Landed 3:26 PM"
    },
    {
        flight: "UA6181",
        time: "2025-07-07T15:16:00",
        from: "Houston (IAH)",
        airline: "United Express",
        aircraft: "E75L (N86309)",
        status: "Landed 2:48 PM"
    },
    {
        flight: "8C3342",
        time: "2025-07-07T15:16:00",
        from: "Cincinnati (CVG)",
        airline: "Amazon Air",
        aircraft: "B763 (N569AZ)",
        status: "Landed 4:37 PM"
    },
    {
        flight: "DL1099",
        time: "2025-07-07T15:19:00",
        from: "Tampa (TPA)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N819DX)",
        status: "Landed 3:58 PM"
    },
    {
        flight: "DL9950",
        time: "2025-07-07T15:20:00",
        from: "San Salvador (SAL)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N382DN)",
        status: "Landed 3:39 PM"
    },
    {
        flight: "AC1307",
        time: "2025-07-07T15:20:00",
        from: "Toronto (YYZ)",
        airline: "Air Canada",
        aircraft: "BCS3 (C-GNGV)",
        status: "Landed 3:49 PM"
    },
    {
        flight: "AM2710",
        time: "2025-07-07T15:22:00",
        from: "Queretaro (QRO)",
        airline: "Aeromexico Connect",
        aircraft: "E190 (XA-DAC)",
        status: "Landed 2:54 PM"
    },
    {
        flight: "DL994",
        time: "2025-07-07T15:25:00",
        from: "New York (LGA)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N374DX)",
        status: "Landed 3:22 PM"
    },
    {
        flight: "DL2711",
        time: "2025-07-07T15:25:00",
        from: "Baltimore (BWI)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N697DL)",
        status: "Landed 3:04 PM"
    },
    {
        flight: "DL1115",
        time: "2025-07-07T15:26:00",
        from: "Dallas (DAL)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N955AT)",
        status: "Landed 3:12 PM"
    },
    {
        flight: "DL3013",
        time: "2025-07-07T15:26:00",
        from: "Indianapolis (IND)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N951DX)",
        status: "Landed 2:57 PM"
    },
    {
        flight: "NK2459",
        time: "2025-07-07T15:27:00",
        from: "Louisville (SDF)",
        airline: "Spirit Airlines",
        aircraft: "A21N (N730NK)",
        status: "Landed 3:19 PM"
    },
    {
        flight: "DL5288",
        time: "2025-07-07T15:28:00",
        from: "Augusta (AGS)",
        airline: "Delta Connection",
        aircraft: "CRJ9 (N691CA)",
        status: "Landed 4:39 PM"
    },
    {
        flight: "DL195",
        time: "2025-07-07T15:30:00",
        from: "Barcelona (BCN)",
        airline: "Delta Air Lines",
        aircraft: "A333 (N817NW)",
        status: "Landed 6:13 PM"
    },
    {
        flight: "DL1512",
        time: "2025-07-07T15:30:00",
        from: "Fort Lauderdale (FLL)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N822DX)",
        status: "Landed 3:06 PM"
    },
    {
        flight: "DL5157",
        time: "2025-07-07T15:30:00",
        from: "Monroe (MLU)",
        airline: "Delta Connection",
        aircraft: "CRJ9 (N136EV)",
        status: "Landed 3:26 PM"
    },
    {
        flight: "WN431",
        time: "2025-07-07T15:30:00",
        from: "Las Vegas (LAS)",
        airline: "Southwest Airlines",
        aircraft: "B738 (N8577Z)",
        status: "Landed 3:16 PM"
    },
    {
        flight: "AA5067",
        time: "2025-07-07T15:31:00",
        from: "Charlotte (CLT)",
        airline: "American Eagle",
        aircraft: "CRJ9 (N557NN)",
        status: "Landed 3:24 PM"
    },
    {
        flight: "DL2886",
        time: "2025-07-07T15:32:00",
        from: "Austin (AUS)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N358DN)",
        status: "Landed 3:06 PM"
    },
    {
        flight: "DL2629",
        time: "2025-07-07T15:35:00",
        from: "Montreal (YUL)",
        airline: "Delta Air Lines",
        aircraft: "A319 (N315NB)",
        status: "Landed 4:16 PM"
    },
    {
        flight: "VS103",
        time: "2025-07-07T15:35:00",
        from: "London (LHR)",
        airline: "Virgin Atlantic",
        aircraft: "A35K (G-VDOT)",
        status: "Landed 3:02 PM"
    },
    {
        flight: "DL9888",
        time: "2025-07-07T15:36:00",
        from: "Mexico City (MEX)",
        airline: "Delta Air Lines",
        aircraft: "B738 (N373DA)",
        status: "Landed 3:36 PM"
    },
    {
        flight: "DL562",
        time: "2025-07-07T15:39:00",
        from: "Seattle (SEA)",
        airline: "Delta Air Lines",
        aircraft: "B753 (N592NW)",
        status: "Landed 3:41 PM"
    },
    {
        flight: "EJA857",
        time: "2025-07-07T15:39:00",
        from: "Atlanta (PDK)",
        airline: "NetJets",
        aircraft: "C700 (N857QS)",
        status: "Landed 3:29 PM"
    },
    {
        flight: "DL2925",
        time: "2025-07-07T15:40:00",
        from: "Norfolk (ORF)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N669DN)",
        status: "Landed 4:09 PM"
    },
    {
        flight: "",
        time: "2025-07-07T07:29:00",
        from: "Concord (USA)",
        airline: "-",
        aircraft: "CRJ7 (N519JG)",
        status: "Landed 7:55 AM"
    },
    {
        flight: "DL882",
        time: "2025-07-07T15:41:00",
        from: "Pittsburgh (PIT)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N949DZ)",
        status: "Landed 3:16 PM"
    },
    {
        flight: "DL737",
        time: "2025-07-07T15:42:00",
        from: "Washington (DCA)",
        airline: "Delta Air Lines",
        aircraft: "A320 (N339NW)",
        status: "Landed 3:30 PM"
    },
    {
        flight: "AA1236",
        time: "2025-07-07T15:43:00",
        from: "Dallas (DFW)",
        airline: "American Airlines",
        aircraft: "A21N (N438AN)",
        status: "Landed 4:53 PM"
    },
    {
        flight: "DL835",
        time: "2025-07-07T15:43:00",
        from: "Salt Lake City (SLC)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N314DN)",
        status: "Landed 3:40 PM"
    },
    {
        flight: "DL2269",
        time: "2025-07-07T15:43:00",
        from: "Knoxville (TYS)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N946AT)",
        status: "Landed 3:10 PM"
    },
    {
        flight: "DL1858",
        time: "2025-07-07T15:43:00",
        from: "Cincinnati (CVG)",
        airline: "Delta Air Lines",
        aircraft: "B738 (N3751B)",
        status: "Landed 6:14 PM"
    },
    {
        flight: "DL2710",
        time: "2025-07-07T15:44:00",
        from: "Toronto (YYZ)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N849DN)",
        status: "Landed 3:37 PM"
    },
    {
        flight: "DL346",
        time: "2025-07-07T15:45:00",
        from: "Denver (DEN)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N127DN)",
        status: "Landed 3:55 PM"
    },
    {
        flight: "DL1965",
        time: "2025-07-07T15:45:00",
        from: "Nassau (NAS)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N911DQ)",
        status: "Landed 3:07 PM"
    },
    {
        flight: "DL3245",
        time: "2025-07-07T15:45:00",
        from: "Raleigh-Durham (RDU)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N878DN)",
        status: "Landed 4:13 PM"
    },
    {
        flight: "DL314",
        time: "2025-07-07T15:46:00",
        from: "Portland (PWM)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N308DN)",
        status: "Landed 3:22 PM"
    },
    {
        flight: "DL3024",
        time: "2025-07-07T15:48:00",
        from: "Jacksonville (JAX)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N6716C)",
        status: "Landed 3:29 PM"
    },
    {
        flight: "TK6039",
        time: "2025-07-07T15:50:00",
        from: "Chicago (ORD)",
        airline: "Turkish Airlines",
        aircraft: "74C",
        status: "Unknown"
    },
    {
        flight: "DL2417",
        time: "2025-07-07T15:51:00",
        from: "Chicago (MDW)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N929AT)",
        status: "Landed 3:15 PM"
    },
    {
        flight: "DL775",
        time: "2025-07-07T15:53:00",
        from: "Cleveland (CLE)",
        airline: "Delta Air Lines",
        aircraft: "A320 (N378NW)",
        status: "Landed 3:37 PM"
    },
    {
        flight: "DL1030",
        time: "2025-07-07T15:53:00",
        from: "Orlando (MCO)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N6703D)",
        status: "Landed 3:47 PM"
    },
    {
        flight: "DL4836",
        time: "2025-07-07T15:53:00",
        from: "Chattanooga (CHA)",
        airline: "Delta Connection",
        aircraft: "CRJ7 (N669CA)",
        status: "Landed 3:27 PM"
    },
    {
        flight: "DL5300",
        time: "2025-07-07T15:53:00",
        from: "Bentonville (XNA)",
        airline: "Delta Connection",
        aircraft: "CRJ9 (N602LR)",
        status: "Landed 4:42 PM"
    },
    {
        flight: "AA443",
        time: "2025-07-07T15:53:00",
        from: "Philadelphia (PHL)",
        airline: "American Airlines",
        aircraft: "A319 (N824AW)",
        status: "Landed 3:50 PM"
    },
    {
        flight: "DL1912",
        time: "2025-07-07T15:54:00",
        from: "San Antonio (SAT)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N120DN)",
        status: "Landed 3:31 PM"
    },
    {
        flight: "DL139",
        time: "2025-07-07T15:55:00",
        from: "Venice (VCE)",
        airline: "Delta Air Lines",
        aircraft: "B764 (N826MH)",
        status: "Landed 3:13 PM"
    },
    {
        flight: "DL735",
        time: "2025-07-07T15:55:00",
        from: "Santa Barbara (SBA)",
        airline: "Delta Air Lines",
        aircraft: "BCS3 (N332DU)",
        status: "Landed 3:37 PM"
    },
    {
        flight: "DL1151",
        time: "2025-07-07T15:55:00",
        from: "Milwaukee (MKE)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N668DN)",
        status: "Landed 3:40 PM"
    },
    {
        flight: "DL4879",
        time: "2025-07-07T15:55:00",
        from: "Evansville (EVV)",
        airline: "Delta Air Lines",
        aircraft: "(N907XH)",
        status: "Landed 3:33 PM"
    },
    {
        flight: "DL3216",
        time: "2025-07-07T15:56:00",
        from: "Savannah (SAV)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N955DZ)",
        status: "Landed 3:33 PM"
    },
    {
        flight: "NK2172",
        time: "2025-07-07T15:57:00",
        from: "San Antonio (SAT)",
        airline: "Spirit Airlines",
        aircraft: "A320 (N629NK)",
        status: "Landed 3:44 PM"
    },
    {
        flight: "DL1359",
        time: "2025-07-07T15:59:00",
        from: "Panama City (ECP)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N824DN)",
        status: "Landed 4:02 PM"
    },
    {
        flight: "DL3699",
        time: "2025-07-07T15:59:00",
        from: "Shreveport (SHV)",
        airline: "Delta Connection",
        aircraft: "CRJ9 (N822SK)",
        status: "Landed 3:41 PM"
    },
    {
        flight: "DL1029",
        time: "2025-07-07T16:00:00",
        from: "New York (JFK)",
        airline: "Delta Air Lines",
        aircraft: "A333 (N808NW)",
        status: "Landed 6:00 PM"
    },
    {
        flight: "DL3092",
        time: "2025-07-07T16:00:00",
        from: "Destin Fort Walton Beach (VPS)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N986AT)",
        status: "Landed 3:39 PM"
    },
    {
        flight: "DL2470",
        time: "2025-07-07T16:01:00",
        from: "Tulsa (TUL)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N993AT)",
        status: "Canceled"
    },
    {
        flight: "DL573",
        time: "2025-07-07T16:02:00",
        from: "Tallahassee (TLH)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N896AT)",
        status: "Landed 3:48 PM"
    },
    {
        flight: "DL175",
        time: "2025-07-07T16:05:00",
        from: "Milan (MXP)",
        airline: "Delta Air Lines",
        aircraft: "A333 (N805NW)",
        status: "Landed 3:47 PM"
    },
    {
        flight: "DL5556",
        time: "2025-07-07T16:05:00",
        from: "Raleigh-Durham (RDU)",
        airline: "Delta Connection",
        aircraft: "CRJ9 (N678CA)",
        status: "Canceled"
    },
    {
        flight: "DL782",
        time: "2025-07-07T16:07:00",
        from: "Los Angeles (LAX)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N371DN)",
        status: "Landed 4:00 PM"
    },
    {
        flight: "DL1818",
        time: "2025-07-07T16:07:00",
        from: "New York (EWR)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N362DN)",
        status: "Landed 3:40 PM"
    },
    {
        flight: "DL3168",
        time: "2025-07-07T16:07:00",
        from: "Wilmington (ILM)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N979AT)",
        status: "Landed 3:30 PM"
    },
    {
        flight: "",
        time: "2025-07-07T07:29:00",
        from: "Concord (USA)",
        airline: "-",
        aircraft: "CRJ7 (N519JG)",
        status: "Landed 7:55 AM"
    },
    {
        flight: "DL1195",
        time: "2025-07-07T16:08:00",
        from: "Houston (HOU)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N995AT)",
        status: "Landed 4:06 PM"
    },
    {
        flight: "DL3156",
        time: "2025-07-07T16:08:00",
        from: "St. Louis (STL)",
        airline: "Delta Air Lines",
        aircraft: "B738 (N378DA)",
        status: "Landed 4:49 PM"
    },
    {
        flight: "DL1154",
        time: "2025-07-07T16:09:00",
        from: "Philadelphia (PHL)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N6704Z)",
        status: "Landed 4:38 PM"
    },
    {
        flight: "DL1472",
        time: "2025-07-07T16:09:00",
        from: "Key West (EYW)",
        airline: "Delta Air Lines",
        aircraft: "A319 (N359NB)",
        status: "Landed 3:42 PM"
    },
    {
        flight: "DL3010",
        time: "2025-07-07T16:11:00",
        from: "Greenville-Spartanburg (GSP)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N974AT)",
        status: "Landed 3:38 PM"
    },
    {
        flight: "DL3012",
        time: "2025-07-07T16:12:00",
        from: "Birmingham (BHM)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N994AT)",
        status: "Landed 3:54 PM"
    },
    {
        flight: "DL322",
        time: "2025-07-07T16:13:00",
        from: "Boston (BOS)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N315DN)",
        status: "Landed 4:11 PM"
    },
    {
        flight: "DL1317",
        time: "2025-07-07T16:13:00",
        from: "Greensboro (GSO)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N935AT)",
        status: "Landed 4:41 PM"
    },
    {
        flight: "DL2356",
        time: "2025-07-07T16:14:00",
        from: "Columbia (CAE)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N943AT)",
        status: "Landed 3:46 PM"
    },
    {
        flight: "DL2586",
        time: "2025-07-07T16:14:00",
        from: "Charlotte (CLT)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N961AT)",
        status: "Landed 3:57 PM"
    },
    {
        flight: "DL1048",
        time: "2025-07-07T16:15:00",
        from: "Minneapolis (MSP)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N821DX)",
        status: "Landed 4:04 PM"
    },
    {
        flight: "DL1332",
        time: "2025-07-07T16:15:00",
        from: "Miami (MIA)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N6713Y)",
        status: "Landed 4:04 PM"
    },
    {
        flight: "QR755",
        time: "2025-07-07T16:15:00",
        from: "Doha (DOH)",
        airline: "Qatar Airways",
        aircraft: "A35K (A7-ANK)",
        status: "Landed 3:27 PM"
    },
    {
        flight: "DL1640",
        time: "2025-07-07T16:16:00",
        from: "Pensacola (PNS)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N939DZ)",
        status: "Landed 4:07 PM"
    },
    {
        flight: "DL527",
        time: "2025-07-07T16:17:00",
        from: "Kansas City (MCI)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N954DZ)",
        status: "Landed 4:12 PM"
    },
    {
        flight: "DL2182",
        time: "2025-07-07T16:18:00",
        from: "Huntsville (HSV)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N607AT)",
        status: "Landed 3:56 PM"
    },
    {
        flight: "DL1004",
        time: "2025-07-07T16:19:00",
        from: "Albuquerque (ABQ)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N927DZ)",
        status: "Landed 4:03 PM"
    },
    {
        flight: "DL3161",
        time: "2025-07-07T16:19:00",
        from: "Columbus (CMH)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N962DZ)",
        status: "Landed 4:31 PM"
    },
    {
        flight: "DL2179",
        time: "2025-07-07T16:21:00",
        from: "Charleston (CHS)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N953DZ)",
        status: "Landed 4:30 PM"
    },
    {
        flight: "DL2763",
        time: "2025-07-07T16:21:00",
        from: "Dayton (DAY)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N980AT)",
        status: "Landed 3:45 PM"
    },
    {
        flight: "DL5423",
        time: "2025-07-07T16:21:00",
        from: "Charlottesville (CHO)",
        airline: "Delta Connection",
        aircraft: "CRJ7 (N371CA)",
        status: "Landed 3:55 PM"
    },
    {
        flight: "DL2709",
        time: "2025-07-07T16:24:00",
        from: "Houston (IAH)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N305DN)",
        status: "Landed 4:51 PM"
    },
    {
        flight: "DL4920",
        time: "2025-07-07T16:24:00",
        from: "North Eleuthera (ELH)",
        airline: "Delta Connection",
        aircraft: "CRJ7 (N398CA)",
        status: "Landed 4:24 PM"
    },
    {
        flight: "WS1590",
        time: "2025-07-07T16:24:00",
        from: "Calgary (YYC)",
        airline: "WestJet",
        aircraft: "B738 (C-FZRM)",
        status: "Landed 4:44 PM"
    },
    {
        flight: "DL294",
        time: "2025-07-07T16:25:00",
        from: "Tokyo (HND)",
        airline: "Delta Air Lines (100 Years Livery)",
        aircraft: "A359 (N527DN)",
        status: "Landed 3:52 PM"
    },
    {
        flight: "DL988",
        time: "2025-07-07T16:27:00",
        from: "New York (LGA)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N377DN)",
        status: "Landed 5:30 PM"
    },
    {
        flight: "AA3932",
        time: "2025-07-07T16:27:00",
        from: "Washington (DCA)",
        airline: "American Eagle",
        aircraft: "E75L (N282NN)",
        status: "Landed 4:46 PM"
    },
    {
        flight: "DL9889",
        time: "2025-07-07T16:28:00",
        from: "Cartagena (CTG)",
        airline: "Delta Air Lines",
        aircraft: "B738 (N382DA)",
        status: "Landed 5:33 PM"
    },
    {
        flight: "DL641",
        time: "2025-07-07T16:29:00",
        from: "Cancun (CUN)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N658DL)",
        status: "Landed 3:50 PM"
    },
    {
        flight: "DL1416",
        time: "2025-07-07T16:29:00",
        from: "Las Vegas (LAS)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N904DN)",
        status: "Landed 5:10 PM"
    },
    {
        flight: "B6419",
        time: "2025-07-07T16:29:00",
        from: "New York (JFK)",
        airline: "JetBlue",
        aircraft: "A320 (N636JB)",
        status: "Landed 4:28 PM"
    },
    {
        flight: "DL2585",
        time: "2025-07-07T16:32:00",
        from: "Little Rock (LIT)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N954AT)",
        status: "Landed 6:04 PM"
    },
    {
        flight: "DL5011",
        time: "2025-07-07T16:32:00",
        from: "Charleston (CRW)",
        airline: "Delta Connection",
        aircraft: "CRJ9 (N928XJ)",
        status: "Landed 6:39 PM"
    },
    {
        flight: "DL1870",
        time: "2025-07-07T16:33:00",
        from: "George Town (GCM)",
        airline: "Delta Air Lines",
        aircraft: "B738 (N397DA)",
        status: "Landed 4:26 PM"
    },
    {
        flight: "DL2778",
        time: "2025-07-07T16:33:00",
        from: "Memphis (MEM)",
        airline: "Delta Air Lines",
        aircraft: "B738 (N3735D)",
        status: "Landed 4:58 PM"
    },
    {
        flight: "DL3127",
        time: "2025-07-07T16:33:00",
        from: "Melbourne (MLB)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N603AT)",
        status: "Landed 5:02 PM"
    },
    {
        flight: "DL67",
        time: "2025-07-07T16:35:00",
        from: "Rome (FCO)",
        airline: "Delta Air Lines",
        aircraft: "A339 (N416DX)",
        status: "Landed 4:50 PM"
    },
    {
        flight: "DL1525",
        time: "2025-07-07T16:36:00",
        from: "Tampa (TPA)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N556NW)",
        status: "Landed 5:27 PM"
    },
    {
        flight: "DL2718",
        time: "2025-07-07T16:37:00",
        from: "Gulfport (GPT)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N966AT)",
        status: "Landed 4:40 PM"
    },
    {
        flight: "DL2438",
        time: "2025-07-07T16:38:00",
        from: "Sarasota (SRQ)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N944DZ)",
        status: "Landed 4:57 PM"
    },
    {
        flight: "DL4953",
        time: "2025-07-07T16:38:00",
        from: "Golden Triangle (GTR)",
        airline: "Delta Connection",
        aircraft: "CRJ9 (N903XJ)",
        status: "Landed 5:57 PM"
    },
    {
        flight: "DL414",
        time: "2025-07-07T16:39:00",
        from: "Dallas (DFW)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N337DN)",
        status: "Landed 4:48 PM"
    },
    {
        flight: "DL1190",
        time: "2025-07-07T16:39:00",
        from: "West Palm Beach (PBI)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N104DN)",
        status: "Landed 5:58 PM"
    },
    {
        flight: "WN403",
        time: "2025-07-07T16:40:00",
        from: "Dallas (DAL)",
        airline: "Southwest Airlines",
        aircraft: "B38M (N8706W)",
        status: "Landed 4:46 PM"
    },
    {
        flight: "DL885",
        time: "2025-07-07T16:45:00",
        from: "Salt Lake City (SLC)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N105DX)",
        status: "Landed 4:50 PM"
    },
    {
        flight: "DL576",
        time: "2025-07-07T16:47:00",
        from: "Mexico City (MEX)",
        airline: "Delta Air Lines",
        aircraft: "B738 (N380DA)",
        status: "Landed 4:10 PM"
    },
    {
        flight: "DL4931",
        time: "2025-07-07T16:49:00",
        from: "Mobile (MOB)",
        airline: "Delta Connection",
        aircraft: "CRJ9 (N133EV)",
        status: "Landed 4:46 PM"
    },
    {
        flight: "VS109",
        time: "2025-07-07T16:50:00",
        from: "Manchester (MAN)",
        airline: "Virgin Atlantic",
        aircraft: "A35K (G-VELJ)",
        status: "Landed 3:48 PM"
    },
    {
        flight: "AA1245",
        time: "2025-07-07T16:50:00",
        from: "Miami (MIA)",
        airline: "American Airlines",
        aircraft: "B738 (N907NN)",
        status: "Delayed 10:20 PM"
    },
    {
        flight: "DL1866",
        time: "2025-07-07T16:51:00",
        from: "Monterrey (MTY)",
        airline: "Delta Air Lines",
        aircraft: "A319 (N338NB)",
        status: "Landed 4:42 PM"
    },
    {
        flight: "DL2827",
        time: "2025-07-07T16:52:00",
        from: "Daytona Beach (DAB)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N985AT)",
        status: "Landed 4:33 PM"
    },
    {
        flight: "DL1456",
        time: "2025-07-07T16:53:00",
        from: "Chicago (ORD)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N850DN)",
        status: "Landed 5:08 PM"
    },
    {
        flight: "UA1986",
        time: "2025-07-07T16:53:00",
        from: "San Francisco (SFO)",
        airline: "United Airlines",
        aircraft: "B39M (N17594)",
        status: "Landed 4:47 PM"
    },
    {
        flight: "DL1437",
        time: "2025-07-07T16:54:00",
        from: "Richmond (RIC)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N816DN)",
        status: "Landed 6:52 PM"
    },
    {
        flight: "DL2011",
        time: "2025-07-07T16:54:00",
        from: "Austin (AUS)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N338DN)",
        status: "Landed 5:06 PM"
    },
    {
        flight: "DL2451",
        time: "2025-07-07T16:54:00",
        from: "Louisville (SDF)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N820DN)",
        status: "Landed 5:11 PM"
    },
    {
        flight: "DL1082",
        time: "2025-07-07T16:54:00",
        from: "Windsor Locks (BDL)",
        airline: "Delta Air Lines",
        aircraft: "A320 (N367NW)",
        status: "Landed 4:54 PM"
    },
    {
        flight: "WN3873",
        time: "2025-07-07T16:55:00",
        from: "Denver (DEN)",
        airline: "Southwest Airlines",
        aircraft: "B38M (N8767M)",
        status: "Landed 4:55 PM"
    },
    {
        flight: "WN1287",
        time: "2025-07-07T16:55:00",
        from: "Washington (DCA)",
        airline: "Southwest Airlines",
        aircraft: "B737 (N938WN)",
        status: "Diverted to BNA"
    },
    {
        flight: "DL348",
        time: "2025-07-07T16:57:00",
        from: "Phoenix (PHX)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N552NW)",
        status: "Landed 5:01 PM"
    },
    {
        flight: "DL1755",
        time: "2025-07-07T16:57:00",
        from: "Punta Cana (PUJ)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N868DN)",
        status: "Landed 4:35 PM"
    },
    {
        flight: "DL3927",
        time: "2025-07-07T16:57:00",
        from: "Montgomery (MGM)",
        airline: "American Eagle",
        aircraft: "CRJ7 (N712SK)",
        status: "Landed 5:12 PM"
    },
    {
        flight: "DL3238",
        time: "2025-07-07T16:58:00",
        from: "Raleigh-Durham (RDU)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N963DZ)",
        status: "Landed 4:34 PM"
    },
    {
        flight: "DL75",
        time: "2025-07-07T16:59:00",
        from: "Amsterdam (AMS)",
        airline: "Delta Air Lines",
        aircraft: "A333 (N802NW)",
        status: "Landed 4:42 PM"
    },
    {
        flight: "DL3928",
        time: "2025-07-07T16:59:00",
        from: "Augusta (AGS)",
        airline: "Delta Connection",
        aircraft: "CRJ7 (N776SK)",
        status: "Landed 5:14 PM"
    },
    {
        flight: "DL2529",
        time: "2025-07-07T17:00:00",
        from: "Panama City (ECP)",
        airline: "Delta Air Lines",
        aircraft: "B738 (N3745B)",
        status: "Landed 5:28 PM"
    },
    {
        flight: "DL1228",
        time: "2025-07-07T17:02:00",
        from: "Detroit (DTW)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N378DN)",
        status: "Landed 4:39 PM"
    },
    {
        flight: "DL1757",
        time: "2025-07-07T17:03:00",
        from: "San Juan (SJU)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N912DU)",
        status: "Landed 5:08 PM"
    },
    {
        flight: "DL1832",
        time: "2025-07-07T17:05:00",
        from: "Asheville (AVL)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N893AT)",
        status: "Landed 5:23 PM"
    },
    {
        flight: "DL1865",
        time: "2025-07-07T17:05:00",
        from: "Nashville (BNA)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N960DZ)",
        status: "Landed 5:52 PM"
    },
    {
        flight: "DL2832",
        time: "2025-07-07T17:05:00",
        from: "Destin Fort Walton Beach (VPS)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N944AT)",
        status: "Landed 4:55 PM"
    },
    {
        flight: "DL4989",
        time: "2025-07-07T17:05:00",
        from: "Fayetteville (FAY)",
        airline: "Delta Connection",
        aircraft: "CRJ7 (N668CA)",
        status: "Landed 4:45 PM"
    },
    {
        flight: "DL5364",
        time: "2025-07-07T17:05:00",
        from: "Jacksonville (OAJ)",
        airline: "Delta Connection",
        aircraft: "CRJ9 (N331PQ)",
        status: "Landed 4:52 PM"
    },
    {
        flight: "WN2458",
        time: "2025-07-07T17:05:00",
        from: "Austin (AUS)",
        airline: "Southwest Airlines",
        aircraft: "B737 (N7727A)",
        status: "Landed 5:46 PM"
    },
    {
        flight: "F92498",
        time: "2025-07-07T17:06:00",
        from: "Indianapolis (IND)",
        airline: "Frontier (Choo the Pika Livery)",
        aircraft: "A20N (N331FR)",
        status: "Landed 5:09 PM"
    },
    {
        flight: "DL2990",
        time: "2025-07-07T17:07:00",
        from: "Jacksonville (JAX)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N6714Q)",
        status: "Landed 5:35 PM"
    },
    {
        flight: "AS727",
        time: "2025-07-07T17:11:00",
        from: "Seattle (SEA)",
        airline: "Alaska Airlines",
        aircraft: "B739 (N448AS)",
        status: "Landed 5:02 PM"
    },
    {
        flight: "DL3133",
        time: "2025-07-07T17:11:00",
        from: "Gainesville (GNV)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N951AT)",
        status: "Landed 4:50 PM"
    },
    {
        flight: "DL1576",
        time: "2025-07-07T17:14:00",
        from: "Orlando (MCO)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N554NW)",
        status: "Landed 5:53 PM"
    },
    {
        flight: "DL1928",
        time: "2025-07-07T17:14:00",
        from: "Montego Bay (MBJ)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N317DN)",
        status: "Landed 4:57 PM"
    },
    {
        flight: "NK2405",
        time: "2025-07-07T17:14:00",
        from: "San Juan (SJU)",
        airline: "Spirit Airlines",
        aircraft: "A21N (N726NK)",
        status: "Landed 4:48 PM"
    },
    {
        flight: "DL188",
        time: "2025-07-07T17:15:00",
        from: "Seoul (ICN)",
        airline: "Delta Air Lines",
        aircraft: "A359 (N528DN)",
        status: "Landed 5:26 PM"
    },
    {
        flight: "AA753",
        time: "2025-07-07T17:15:00",
        from: "Los Angeles (LAX)",
        airline: "American Airlines",
        aircraft: "A321 (N188US)",
        status: "Landed 5:36 PM"
    },
    {
        flight: "DL297",
        time: "2025-07-07T17:17:00",
        from: "Athens (ATH)",
        airline: "Delta Air Lines",
        aircraft: "A339 (N407DX)",
        status: "Landed 5:10 PM"
    },
    {
        flight: "DL995",
        time: "2025-07-07T17:17:00",
        from: "Denver (DEN)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N351DN)",
        status: "Landed 5:07 PM"
    },
    {
        flight: "DL327",
        time: "2025-07-07T17:19:00",
        from: "Los Angeles (LAX)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N126DN)",
        status: "Landed 5:14 PM"
    },
    {
        flight: "DL2020",
        time: "2025-07-07T17:19:00",
        from: "Oklahoma City (OKC)",
        airline: "Delta Air Lines",
        aircraft: "A320 (N351NW)",
        status: "Landed 5:16 PM"
    },
    {
        flight: "NK2571",
        time: "2025-07-07T17:19:00",
        from: "Houston (IAH)",
        airline: "Spirit Airlines",
        aircraft: "A320 (N698NK)",
        status: "Landed 5:00 PM"
    },
    {
        flight: "DL31",
        time: "2025-07-07T17:20:00",
        from: "London (LHR)",
        airline: "Delta Air Lines",
        aircraft: "B764 (N825MH)",
        status: "Landed 4:47 PM"
    },
    {
        flight: "DL1196",
        time: "2025-07-07T17:20:00",
        from: "Fort Myers (RSW)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N897DN)",
        status: "Landed 5:04 PM"
    },
    {
        flight: "DL1754",
        time: "2025-07-07T17:20:00",
        from: "St. Thomas (STT)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N542US)",
        status: "Landed 5:06 PM"
    },
    {
        flight: "DL5084",
        time: "2025-07-07T17:20:00",
        from: "Roanoke (ROA)",
        airline: "Delta Connection",
        aircraft: "CRJ7 (N376CA)",
        status: "Unknown"
    },
    {
        flight: "SK929",
        time: "2025-07-07T17:20:00",
        from: "Copenhagen (CPH)",
        airline: "SAS",
        aircraft: "A333 (LN-RKT)",
        status: "Landed 4:52 PM"
    },
    {
        flight: "DL1701",
        time: "2025-07-07T17:21:00",
        from: "Knoxville (TYS)",
        airline: "Delta Air Lines (SkyTeam Livery)",
        aircraft: "B738 (N381DN)",
        status: "Landed 5:32 PM"
    },
    {
        flight: "DL3150",
        time: "2025-07-07T17:21:00",
        from: "Savannah (SAV)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N884DN)",
        status: "Landed 5:32 PM"
    },
    {
        flight: "DL1989",
        time: "2025-07-07T17:25:00",
        from: "Blountville (TRI)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N922AT)",
        status: "Landed 5:47 PM"
    },
    {
        flight: "DL2867",
        time: "2025-07-07T17:25:00",
        from: "New Orleans (MSY)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N883DN)",
        status: "Landed 5:51 PM"
    },
    {
        flight: "AF32",
        time: "2025-07-07T17:25:00",
        from: "Paris (CDG)",
        airline: "Air France",
        aircraft: "B772 (F-GSPG)",
        status: "Landed 5:19 PM"
    },
    {
        flight: "WN755",
        time: "2025-07-07T17:25:00",
        from: "Columbus (CMH)",
        airline: "Southwest Airlines",
        aircraft: "B38M (N8716B)",
        status: "Landed 6:34 PM"
    },
    {
        flight: "AA2819",
        time: "2025-07-07T17:26:00",
        from: "Philadelphia (PHL)",
        airline: "American Airlines",
        aircraft: "A319 (N840AW)",
        status: "Landed 5:05 PM"
    },
    {
        flight: "DL1482",
        time: "2025-07-07T17:26:00",
        from: "Washington (IAD)",
        airline: "Delta Air Lines",
        aircraft: "BCS3 (N314DU)",
        status: "Landed 6:31 PM"
    },
    {
        flight: "WS1596",
        time: "2025-07-07T17:26:00",
        from: "Vancouver (YVR)",
        airline: "WestJet",
        aircraft: "B738 (C-GWSZ)",
        status: "Landed 5:18 PM"
    },
    {
        flight: "DL1872",
        time: "2025-07-07T17:27:00",
        from: "Providenciales (PLS)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N128DN)",
        status: "Landed 4:59 PM"
    },
    {
        flight: "DL2388",
        time: "2025-07-07T17:28:00",
        from: "Chattanooga (CHA)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N953AT)",
        status: "Landed 5:48 PM"
    },
    {
        flight: "5X5306",
        time: "2025-07-07T17:29:00",
        from: "Louisville (SDF)",
        airline: "UPS",
        aircraft: "MD11 (N275UP)",
        status: "Landed 6:25 PM"
    },
    {
        flight: "DL3212",
        time: "2025-07-07T17:30:00",
        from: "Lexington (LEX)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N965AT)",
        status: "Landed 6:18 PM"
    },
    {
        flight: "DL1778",
        time: "2025-07-07T17:30:00",
        from: "Myrtle Beach (MYR)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N991AT)",
        status: "Landed 5:44 PM"
    },
    {
        flight: "DL5092",
        time: "2025-07-07T17:31:00",
        from: "White Plains (HPN)",
        airline: "Delta Connection",
        aircraft: "CRJ9 (N924XJ)",
        status: "Landed 5:35 PM"
    },
    {
        flight: "DL5516",
        time: "2025-07-07T17:31:00",
        from: "Bentonville (XNA)",
        airline: "Delta Connection",
        aircraft: "CRJ9 (N228PQ)",
        status: "Landed 5:22 PM"
    },
    {
        flight: "DL974",
        time: "2025-07-07T17:33:00",
        from: "New York (LGA)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N359DN)",
        status: "Landed 6:49 PM"
    },
    {
        flight: "DL1976",
        time: "2025-07-07T17:39:00",
        from: "Nassau (NAS)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N302DN)",
        status: "Landed 5:17 PM"
    },
    {
        flight: "UA356",
        time: "2025-07-07T17:39:00",
        from: "Chicago (ORD)",
        airline: "United Airlines",
        aircraft: "B737 (N39726)",
        status: "Landed 6:15 PM"
    },
    {
        flight: "AA1248",
        time: "2025-07-07T17:40:00",
        from: "Dallas (DFW)",
        airline: "American Airlines",
        aircraft: "A21N (N440AN)",
        status: "Landed 5:42 PM"
    },
    {
        flight: "F9152",
        time: "2025-07-07T17:40:00",
        from: "Cancun (CUN)",
        airline: "Frontier (Pike the Otter Livery)",
        aircraft: "A320 (N235FR)",
        status: "Delayed 9:24 PM"
    },
    {
        flight: "DL5560",
        time: "2025-07-07T17:40:00",
        from: "Jackson (JAN)",
        airline: "Delta Connection",
        aircraft: "CRJ9 (N901XJ)",
        status: "Canceled"
    },
    {
        flight: "DL2155",
        time: "2025-07-07T17:41:00",
        from: "Des Moines (DSM)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N891AT)",
        status: "Landed 6:23 PM"
    },
    {
        flight: "DL927",
        time: "2025-07-07T17:43:00",
        from: "Las Vegas (LAS)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N706TW)",
        status: "Landed 5:28 PM"
    },
    {
        flight: "WN1870",
        time: "2025-07-07T17:45:00",
        from: "Chicago (MDW)",
        airline: "Southwest Airlines",
        aircraft: "B737 (N204WN)",
        status: "Unknown"
    },
    {
        flight: "DL1341",
        time: "2025-07-07T17:49:00",
        from: "Fort Lauderdale (FLL)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N692DL)",
        status: "Landed 5:19 PM"
    },
    {
        flight: "DL2837",
        time: "2025-07-07T17:49:00",
        from: "Cincinnati (CVG)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N888DU)",
        status: "Landed 6:21 PM"
    },
    {
        flight: "DL2322",
        time: "2025-07-07T17:51:00",
        from: "New York (EWR)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N332DN)",
        status: "Diverted to JAX"
    },
    {
        flight: "DL360",
        time: "2025-07-07T17:54:00",
        from: "Washington (DCA)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N373DX)",
        status: "Landed 6:50 PM"
    },
    {
        flight: "WN2965",
        time: "2025-07-07T17:55:00",
        from: "Houston (HOU)",
        airline: "Southwest Airlines",
        aircraft: "B738 (N8638A)",
        status: "Landed 6:41 PM"
    },
    {
        flight: "UA462",
        time: "2025-07-07T17:56:00",
        from: "Houston (IAH)",
        airline: "United Airlines",
        aircraft: "A320 (N451UA)",
        status: "Landed 7:09 PM"
    },
    {
        flight: "DL1720",
        time: "2025-07-07T17:57:00",
        from: "Tampa (TPA)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N548US)",
        status: "Diverted to JAX"
    },
    {
        flight: "DL2104",
        time: "2025-07-07T17:57:00",
        from: "Austin (AUS)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N316DN)",
        status: "Landed 5:38 PM"
    },
    {
        flight: "DL4643",
        time: "2025-07-07T17:57:00",
        from: "Jackson (JAN)",
        airline: "Delta Connection",
        aircraft: "CRJ9 (N300PQ)",
        status: "Landed 5:54 PM"
    },
    {
        flight: "DL638",
        time: "2025-07-07T17:58:00",
        from: "Boston (BOS)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N322DN)",
        status: "Landed 6:02 PM"
    },
    {
        flight: "DL597",
        time: "2025-07-07T17:59:00",
        from: "Cancun (CUN)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N670DN)",
        status: "Diverted to BNA"
    },
    {
        flight: "DL3031",
        time: "2025-07-07T18:01:00",
        from: "Charlotte (CLT)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N939AT)",
        status: "Landed 5:43 PM"
    },
    {
        flight: "DL1805",
        time: "2025-07-07T18:05:00",
        from: "San Pedro Sula (SAP)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N898DN)",
        status: "Landed 5:53 PM"
    },
    {
        flight: "WN1743",
        time: "2025-07-07T18:05:00",
        from: "New Orleans (MSY)",
        airline: "Southwest Airlines",
        aircraft: "B737 (N474WN)",
        status: "Landed 6:08 PM"
    },
    {
        flight: "DL3152",
        time: "2025-07-07T18:07:00",
        from: "Richmond (RIC)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N823DN)",
        status: "Landed 6:17 PM"
    },
    {
        flight: "DL3209",
        time: "2025-07-07T18:07:00",
        from: "Baton Rouge (BTR)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N960AT)",
        status: "Landed 6:06 PM"
    },
    {
        flight: "DL1125",
        time: "2025-07-07T18:10:00",
        from: "Omaha (OMA)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N942AT)",
        status: "Landed 6:59 PM"
    },
    {
        flight: "DL1579",
        time: "2025-07-07T18:10:00",
        from: "Miami (MIA)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N695DL)",
        status: "Landed 5:51 PM"
    },
    {
        flight: "WN459",
        time: "2025-07-07T18:10:00",
        from: "St. Louis (STL)",
        airline: "Southwest Airlines",
        aircraft: "B737 (N7827A)",
        status: "Landed 6:24 PM"
    },
    {
        flight: "DL1810",
        time: "2025-07-07T18:11:00",
        from: "Birmingham (BHM)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N959DZ)",
        status: "Landed 5:49 PM"
    },
    {
        flight: "DL2403",
        time: "2025-07-07T18:13:00",
        from: "Huntsville (HSV)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N982AT)",
        status: "Landed 5:47 PM"
    },
    {
        flight: "DL1246",
        time: "2025-07-07T18:14:00",
        from: "Milwaukee (MKE)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N812DN)",
        status: "Landed 5:58 PM"
    },
    {
        flight: "DL2170",
        time: "2025-07-07T18:15:00",
        from: "New York (JFK)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N864DN)",
        status: "Diverted to AGS"
    },
    {
        flight: "NK3183",
        time: "2025-07-07T18:15:00",
        from: "Fort Lauderdale (FLL)",
        airline: "Spirit Airlines",
        aircraft: "A21N (N717NK)",
        status: "Landed 6:19 PM"
    },
    {
        flight: "B61317",
        time: "2025-07-07T18:16:00",
        from: "Boston (BOS)",
        airline: "JetBlue",
        aircraft: "BCS3 (N3242J)",
        status: "Diverted to SAV"
    },
    {
        flight: "DL1802",
        time: "2025-07-07T18:17:00",
        from: "Belize City (BZE)",
        airline: "Delta Air Lines",
        aircraft: "B738 (N3772H)",
        status: "Landed 5:48 PM"
    },
    {
        flight: "DL2279",
        time: "2025-07-07T18:18:00",
        from: "Philadelphia (PHL)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N333DX)",
        status: "Landed 6:05 PM"
    },
    {
        flight: "AA3175",
        time: "2025-07-07T18:20:00",
        from: "Chicago (ORD)",
        airline: "American Airlines",
        aircraft: "A319 (N717UW)",
        status: "Landed 6:35 PM"
    },
    {
        flight: "DL1408",
        time: "2025-07-07T18:20:00",
        from: "San Antonio (SAT)",
        airline: "Delta Air Lines",
        aircraft: "A320 (N365NW)",
        status: "Landed 6:54 PM"
    },
    {
        flight: "DL1013",
        time: "2025-07-07T18:21:00",
        from: "Pensacola (PNS)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N689DL)",
        status: "Landed 6:18 PM"
    },
    {
        flight: "DL1772",
        time: "2025-07-07T18:21:00",
        from: "Tulum (TQO)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N880DN)",
        status: "Landed 6:00 PM"
    },
    {
        flight: "DL2700",
        time: "2025-07-07T18:22:00",
        from: "St. Louis (STL)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N942DZ)",
        status: "Landed 6:28 PM"
    },
    {
        flight: "F91081",
        time: "2025-07-07T18:22:00",
        from: "Washington (IAD)",
        airline: "Frontier (Colorado the Bighorn Sheep Livery)",
        aircraft: "A20N (N323FR)",
        status: "Landed 6:36 PM"
    },
    {
        flight: "DL725",
        time: "2025-07-07T18:24:00",
        from: "San Diego (SAN)",
        airline: "Delta Air Lines",
        aircraft: "B753 (N588NW)",
        status: "Landed 6:34 PM"
    },
    {
        flight: "DL1051",
        time: "2025-07-07T18:25:00",
        from: "Norfolk (ORF)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N891DN)",
        status: "Landed 6:16 PM"
    },
    {
        flight: "DL1353",
        time: "2025-07-07T18:25:00",
        from: "Pittsburgh (PIT)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N945DZ)",
        status: "Landed 7:03 PM"
    },
    {
        flight: "DL3952",
        time: "2025-07-07T18:25:00",
        from: "Lafayette (LFT)",
        airline: "Delta Connection",
        aircraft: "CRJ9 (N809SK)",
        status: "Landed 6:44 PM"
    },
    {
        flight: "UA1850",
        time: "2025-07-07T18:26:00",
        from: "New York (EWR)",
        airline: "United Airlines",
        aircraft: "A319 (N817UA)",
        status: "Delayed 10:40 PM"
    },
    {
        flight: "DL1803",
        time: "2025-07-07T18:27:00",
        from: "Santo Domingo (SDQ)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N370DN)",
        status: "Landed 5:56 PM"
    },
    {
        flight: "DL55",
        time: "2025-07-07T18:30:00",
        from: "Lagos (LOS)",
        airline: "Delta Air Lines",
        aircraft: "A332 (N857NW)",
        status: "Landed 5:41 PM"
    },
    {
        flight: "UA1671",
        time: "2025-07-07T18:30:00",
        from: "Denver (DEN)",
        airline: "United Airlines",
        aircraft: "A319 (N872UA)",
        status: "Landed 6:07 PM"
    },
    {
        flight: "DL2539",
        time: "2025-07-07T18:31:00",
        from: "Greensboro (GSO)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N921AT)",
        status: "Landed 5:57 PM"
    },
    {
        flight: "AS474",
        time: "2025-07-07T18:31:00",
        from: "San Diego (SAN)",
        airline: "Alaska Airlines",
        aircraft: "B739 (N481AS)",
        status: "Landed 7:01 PM"
    },
    {
        flight: "AA2932",
        time: "2025-07-07T18:32:00",
        from: "Miami (MIA)",
        airline: "American Airlines",
        aircraft: "A319 (N776XF)",
        status: "Landed 7:00 PM"
    },
    {
        flight: "DL528",
        time: "2025-07-07T18:34:00",
        from: "Los Angeles (LAX)",
        airline: "Delta Air Lines",
        aircraft: "B753 (N584NW)",
        status: "Landed 7:04 PM"
    },
    {
        flight: "DL2174",
        time: "2025-07-07T18:34:00",
        from: "Charleston (CHS)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N957DZ)",
        status: "Landed 6:10 PM"
    },
    {
        flight: "DL3134",
        time: "2025-07-07T18:34:00",
        from: "Indianapolis (IND)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N950DZ)",
        status: "Diverted to CHS"
    },
    {
        flight: "DL1994",
        time: "2025-07-07T18:35:00",
        from: "Tallahassee (TLH)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N930AT)",
        status: "Landed 6:28 PM"
    },
    {
        flight: "DL9937",
        time: "2025-07-07T18:36:00",
        from: "Tulsa (TUL)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N993AT)",
        status: "Unknown"
    },
    {
        flight: "DL1372",
        time: "2025-07-07T18:37:00",
        from: "Orlando (MCO)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N694DL)",
        status: "Unknown"
    },
    {
        flight: "DL1882",
        time: "2025-07-07T18:37:00",
        from: "San Juan (SJU)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N345DN)",
        status: "Landed 6:23 PM"
    },
    {
        flight: "DL969",
        time: "2025-07-07T18:38:00",
        from: "New York (LGA)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N396DN)",
        status: "Diverted to CHS"
    },
    {
        flight: "DL1002",
        time: "2025-07-07T18:38:00",
        from: "El Paso (ELP)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N926DZ)",
        status: "Landed 6:30 PM"
    },
    {
        flight: "DL1800",
        time: "2025-07-07T18:38:00",
        from: "Montego Bay (MBJ)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N346DN)",
        status: "Landed 6:21 PM"
    },
    {
        flight: "DL1831",
        time: "2025-07-07T18:39:00",
        from: "Guatemala City (GUA)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N67171)",
        status: "Diverted to SAV"
    },
    {
        flight: "DL1467",
        time: "2025-07-07T18:40:00",
        from: "Detroit (DTW)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N553NW)",
        status: "Landed 6:27 PM"
    },
    {
        flight: "DL4886",
        time: "2025-07-07T18:40:00",
        from: "Bloomington (BMI)",
        airline: "Delta Connection",
        aircraft: "CRJ9 (N607LR)",
        status: "Landed 6:37 PM"
    },
    {
        flight: "WN329",
        time: "2025-07-07T18:40:00",
        from: "Tampa (TPA)",
        airline: "Southwest Airlines",
        aircraft: "B38M (N8943Q)",
        status: "Diverted to BNA"
    },
    {
        flight: "DL1804",
        time: "2025-07-07T18:41:00",
        from: "Guadalajara (GDL)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N881DN)",
        status: "Landed 6:11 PM"
    },
    {
        flight: "DL3095",
        time: "2025-07-07T18:41:00",
        from: "Greenville-Spartanburg (GSP)",
        airline: "Delta Air Lines",
        aircraft: "A319 (N343NB)",
        status: "Landed 6:20 PM"
    },
    {
        flight: "F94797",
        time: "2025-07-07T18:42:00",
        from: "Raleigh-Durham (RDU)",
        airline: "Frontier (Abaco the Kirtland's Warbler Livery)",
        aircraft: "A21N (N630FR)",
        status: "Canceled"
    },
    {
        flight: "DL1443",
        time: "2025-07-07T18:43:00",
        from: "Kansas City (MCI)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N961DZ)",
        status: "Landed 6:39 PM"
    },
    {
        flight: "DL587",
        time: "2025-07-07T18:44:00",
        from: "Mexico City (MEX)",
        airline: "Delta Air Lines",
        aircraft: "B738 (N375DA)",
        status: "Landed 6:15 PM"
    },
    {
        flight: "DL838",
        time: "2025-07-07T18:44:00",
        from: "West Palm Beach (PBI)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N321DH)",
        status: "Landed 6:42 PM"
    },
    {
        flight: "DL2799",
        time: "2025-07-07T18:44:00",
        from: "Baltimore (BWI)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N367DN)",
        status: "Landed 6:37 PM"
    },
    {
        flight: "DL1919",
        time: "2025-07-07T18:45:00",
        from: "Punta Cana (PUJ)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N330DX)",
        status: "Landed 6:25 PM"
    },
    {
        flight: "DL2200",
        time: "2025-07-07T18:47:00",
        from: "Columbus (CMH)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N938DZ)",
        status: "Landed 6:33 PM"
    },
    {
        flight: "DL5435",
        time: "2025-07-07T18:47:00",
        from: "White Plains (HPN)",
        airline: "Delta Connection",
        aircraft: "CRJ9 (N146PQ)",
        status: "Diverted to RDU"
    },
    {
        flight: "DL1477",
        time: "2025-07-07T18:49:00",
        from: "Chicago (ORD)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N350DN)",
        status: "Diverted to MEM"
    },
    {
        flight: "DL1550",
        time: "2025-07-07T18:49:00",
        from: "Raleigh-Durham (RDU)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N943DZ)",
        status: "Landed 6:29 PM"
    },
    {
        flight: "AA5202",
        time: "2025-07-07T18:54:00",
        from: "Washington (DCA)",
        airline: "American Eagle",
        aircraft: "CRJ7 (N708PS)",
        status: "Canceled"
    },
    {
        flight: "DL1067",
        time: "2025-07-07T18:54:00",
        from: "Springfield (SGF)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N997AT)",
        status: "Landed 6:46 PM"
    },
    {
        flight: "DL2720",
        time: "2025-07-07T18:54:00",
        from: "Jacksonville (JAX)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N900PC)",
        status: "Landed 6:40 PM"
    },
    {
        flight: "DL268",
        time: "2025-07-07T18:55:00",
        from: "Sao Paulo (GRU)",
        airline: "Delta Air Lines",
        aircraft: "A333 (N807NW)",
        status: "Landed 6:45 PM"
    },
    {
        flight: "DL3032",
        time: "2025-07-07T18:55:00",
        from: "Columbia (CAE)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N955AT)",
        status: "Diverted to CAE"
    },
    {
        flight: "WN3260",
        time: "2025-07-07T18:55:00",
        from: "San Antonio (SAT)",
        airline: "Southwest Airlines",
        aircraft: "B737 (N7828A)",
        status: "Diverted to BNA"
    },
    {
        flight: "DL1883",
        time: "2025-07-07T18:58:00",
        from: "St. Thomas (STT)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N659DL)",
        status: "Landed 6:57 PM"
    },
    {
        flight: "DL5537",
        time: "2025-07-07T18:58:00",
        from: "Augusta (AGS)",
        airline: "Delta Connection",
        aircraft: "CRJ9 (N691CA)",
        status: "Unknown"
    },
    {
        flight: "DL2545",
        time: "2025-07-07T18:59:00",
        from: "Cleveland (CLE)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N946DZ)",
        status: "Landed 6:44 PM"
    },
    {
        flight: "F93600",
        time: "2025-07-07T18:59:00",
        from: "Denver (DEN)",
        airline: "Frontier (Rocket the Hammerhead Shark Livery)",
        aircraft: "A20N (N388FR)",
        status: "Landed 6:59 PM"
    },
    {
        flight: "WN417",
        time: "2025-07-07T19:00:00",
        from: "Kansas City (MCI)",
        airline: "Southwest Airlines (Nevada One Livery)",
        aircraft: "B738 (N8646B)",
        status: "Unknown"
    },
    {
        flight: "DL1036",
        time: "2025-07-07T19:04:00",
        from: "Minneapolis (MSP)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N856DN)",
        status: "Diverted to HSV"
    },
    {
        flight: "DL706",
        time: "2025-07-07T19:05:00",
        from: "Denver (DEN)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N114DN)",
        status: "Diverted to HSV"
    },
    {
        flight: "DL665",
        time: "2025-07-07T19:09:00",
        from: "Ontario (ONT)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N111DC)",
        status: "Landed 7:10 PM"
    },
    {
        flight: "DL539",
        time: "2025-07-07T19:10:00",
        from: "Portland (PDX)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N857DZ)",
        status: "Landed 7:01 PM"
    },
    {
        flight: "DL1572",
        time: "2025-07-07T19:10:00",
        from: "Houston (IAH)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N364DX)",
        status: "Landed 6:48 PM"
    },
    {
        flight: "DL1972",
        time: "2025-07-07T19:10:00",
        from: "Knoxville (TYS)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N963AT)",
        status: "Diverted to AGS"
    },
    {
        flight: "WN667",
        time: "2025-07-07T19:10:00",
        from: "Baltimore (BWI)",
        airline: "Southwest Airlines",
        aircraft: "B737 (N939WN)",
        status: "Diverted to GSP"
    },
    {
        flight: "WN667",
        time: "2025-07-07T19:10:00",
        from: "Baltimore (BWI)",
        airline: "Southwest Airlines",
        aircraft: "B737 (N939WN)",
        status: "Diverted to GSP"
    },
    {
        flight: "DL1683",
        time: "2025-07-07T19:12:00",
        from: "Nashville (BNA)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N958DZ)",
        status: "Unknown"
    },
    {
        flight: "DL5180",
        time: "2025-07-07T19:12:00",
        from: "Brunswick (BQK)",
        airline: "Delta Connection",
        aircraft: "CRJ7 (N354CA)",
        status: "Diverted to BQK"
    },
    {
        flight: "LXJ502",
        time: "2025-07-07T19:12:00",
        from: "Atlanta (PDK)",
        airline: "Flexjet",
        aircraft: "CL35",
        status: "Unknown"
    },
    {
        flight: "DL564",
        time: "2025-07-07T19:13:00",
        from: "Santa Ana (SNA)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N711ZX)",
        status: "Landed 7:11 PM"
    },
    {
        flight: "F92052",
        time: "2025-07-07T19:13:00",
        from: "New Orleans (MSY)",
        airline: "Frontier Airlines",
        aircraft: "A20N",
        status: "Unknown"
    },
    {
        flight: "DL2812",
        time: "2025-07-07T19:14:00",
        from: "Louisville (SDF)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N894AT)",
        status: "Landed 6:53 PM"
    },
    {
        flight: "DL3094",
        time: "2025-07-07T19:14:00",
        from: "Panama City (ECP)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N906AT)",
        status: "Diverted to BHM"
    },
    {
        flight: "DL777",
        time: "2025-07-07T19:15:00",
        from: "Las Vegas (LAS)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N6709)",
        status: "Landed 7:09 PM"
    },
    {
        flight: "DL906",
        time: "2025-07-07T19:18:00",
        from: "Salt Lake City (SLC)",
        airline: "Delta Air Lines",
        aircraft: "A21N (N513DA)",
        status: "Diverted to BHM"
    },
    {
        flight: "DL4033",
        time: "2025-07-07T19:18:00",
        from: "South Bend (SBN)",
        airline: "Delta Connection",
        aircraft: "CRJ9 (N833SK)",
        status: "Diverted to SAV"
    },
    {
        flight: "DL759",
        time: "2025-07-07T19:19:00",
        from: "Tampa (TPA)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N699DL)",
        status: "Diverted to TLH"
    },
    {
        flight: "DL1962",
        time: "2025-07-07T19:19:00",
        from: "Cancun (CUN)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N893DN)",
        status: "Landed 7:03 PM"
    },
    {
        flight: "DL2266",
        time: "2025-07-07T19:19:00",
        from: "Buffalo (BUF)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N339DN)",
        status: "Landed 7:14 PM"
    },
    {
        flight: "NK2560",
        time: "2025-07-07T19:19:00",
        from: "Indianapolis (IND)",
        airline: "Spirit Airlines",
        aircraft: "A320 (N697NK)",
        status: "Unknown"
    },
    {
        flight: "DL85",
        time: "2025-07-07T19:20:00",
        from: "Paris (CDG)",
        airline: "Delta Air Lines",
        aircraft: "B764 (N828MH)",
        status: "Landed 7:07 PM"
    },
    {
        flight: "DL399",
        time: "2025-07-07T19:20:00",
        from: "Boston (BOS)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N340DN)",
        status: "Landed 6:58 PM"
    },
    {
        flight: "DL1816",
        time: "2025-07-07T19:23:00",
        from: "Puerto Vallarta (PVR)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N815DN)",
        status: "Diverted to SAV"
    },
    {
        flight: "DL1695",
        time: "2025-07-07T19:24:00",
        from: "Washington (IAD)",
        airline: "Delta Air Lines",
        aircraft: "A319 (N358NB)",
        status: "Landed 7:01 PM"
    },
    {
        flight: "DL2803",
        time: "2025-07-07T19:25:00",
        from: "Destin Fort Walton Beach (VPS)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N967AT)",
        status: "Diverted to HSV"
    },
    {
        flight: "DL693",
        time: "2025-07-07T19:26:00",
        from: "San Francisco (SFO)",
        airline: "Delta Air Lines",
        aircraft: "B763 (N180DN)",
        status: "Landed 7:16 PM"
    },
    {
        flight: "DL1700",
        time: "2025-07-07T19:27:00",
        from: "Memphis (MEM)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N947DZ)",
        status: "Landed 7:10 PM"
    },
    {
        flight: "DL1182",
        time: "2025-07-07T19:28:00",
        from: "Colorado Springs (COS)",
        airline: "Delta Air Lines",
        aircraft: "B738 (N384DA)",
        status: "Diverted to HSV"
    },
    {
        flight: "F92871",
        time: "2025-07-07T19:28:00",
        from: "San Juan (SJU)",
        airline: "Frontier (Joaquin the Kit Fox Livery)",
        aircraft: "A20N (N387FR)",
        status: "Diverted to CLT"
    },
    {
        flight: "DL1516",
        time: "2025-07-07T19:29:00",
        from: "Cincinnati (CVG)",
        airline: "Delta Air Lines",
        aircraft: "B739",
        status: "Unknown"
    },
    {
        flight: "DL2381",
        time: "2025-07-07T19:29:00",
        from: "Houston (HOU)",
        airline: "Delta Air Lines",
        aircraft: "A319 (N354NB)",
        status: "Landed 6:56 PM"
    },
    {
        flight: "DL5266",
        time: "2025-07-07T19:29:00",
        from: "Charlottesville (CHO)",
        airline: "Delta Connection",
        aircraft: "CRJ7 (N690CA)",
        status: "Diverted to CHO"
    },
    {
        flight: "DL37",
        time: "2025-07-07T19:30:00",
        from: "London (LHR)",
        airline: "Delta Air Lines",
        aircraft: "A339 (N409DX)",
        status: "Diverted to CLT"
    },
    {
        flight: "DL446",
        time: "2025-07-07T19:30:00",
        from: "Los Angeles (LAX)",
        airline: "Delta Air Lines",
        aircraft: "B764 (N833MH)",
        status: "Delayed 9:30 PM"
    },
    {
        flight: "DL512",
        time: "2025-07-07T19:30:00",
        from: "Dallas (DAL)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N892AT)",
        status: "Landed 7:14 PM"
    },
    {
        flight: "DL1347",
        time: "2025-07-07T19:30:00",
        from: "Little Rock (LIT)",
        airline: "Delta Air Lines",
        aircraft: "B738 (N377DE)",
        status: "Landed 7:25 PM"
    },
    {
        flight: "DL2135",
        time: "2025-07-07T19:30:00",
        from: "Charlotte (CLT)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N923AT)",
        status: "Unknown"
    },
    {
        flight: "DL2496",
        time: "2025-07-07T19:30:00",
        from: "Philadelphia (PHL)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N392DN)",
        status: "Diverted to GSP"
    },
    {
        flight: "DL4993",
        time: "2025-07-07T19:30:00",
        from: "Valdosta (VLD)",
        airline: "Delta Connection",
        aircraft: "CRJ9 (N133EV)",
        status: "Canceled"
    },
    {
        flight: "DL5374",
        time: "2025-07-07T19:30:00",
        from: "Columbus (CSG)",
        airline: "Delta Connection",
        aircraft: "CRJ7 (N371CA)",
        status: "Unknown"
    },
    {
        flight: "F924",
        time: "2025-07-07T19:30:00",
        from: "Punta Cana (PUJ)",
        airline: "Frontier (Jo Jo the Grizzly Bear Livery)",
        aircraft: "A20N (N335FR)",
        status: "Landed 7:05 PM"
    },
    {
        flight: "DL3965",
        time: "2025-07-07T19:30:00",
        from: "Albany (ABY)",
        airline: "Delta Connection",
        aircraft: "CRJ9 (N822SK)",
        status: "Diverted to ABY"
    },
    {
        flight: "NK2710",
        time: "2025-07-07T19:30:00",
        from: "New Orleans (MSY)",
        airline: "Spirit Airlines",
        aircraft: "A21N (N710NK)",
        status: "Diverted to MYR"
    },
    {
        flight: "DL554",
        time: "2025-07-07T19:30:00",
        from: "Seattle (SEA)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N922DZ)",
        status: "Diverted to BHM"
    },
    {
        flight: "UA1329",
        time: "2025-07-07T19:31:00",
        from: "New York (EWR)",
        airline: "United Airlines",
        aircraft: "A319 (N801UA)",
        status: "Diverted to CLT"
    },
    {
        flight: "DL1812",
        time: "2025-07-07T19:31:00",
        from: "Liberia (LIR)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N892DN)",
        status: "Delayed 10:03 PM"
    },
    {
        flight: "UA1329",
        time: "2025-07-07T19:31:00",
        from: "New York (EWR)",
        airline: "United Airlines",
        aircraft: "A319 (N801UA)",
        status: "Diverted to CLT"
    },
    {
        flight: "AA2403",
        time: "2025-07-07T19:33:00",
        from: "Dallas (DFW)",
        airline: "American Airlines",
        aircraft: "A321 (N575UW)",
        status: "Canceled"
    },
    {
        flight: "DL1978",
        time: "2025-07-07T19:33:00",
        from: "San Salvador (SAL)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N845DN)",
        status: "Diverted to BHM"
    },
    {
        flight: "DL1150",
        time: "2025-07-07T19:35:00",
        from: "Orlando (MCO)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N555NW)",
        status: "Unknown"
    },
    {
        flight: "DL1739",
        time: "2025-07-07T19:35:00",
        from: "Chicago (MDW)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N926AT)",
        status: "Diverted to GSP"
    },
    {
        flight: "WN2913",
        time: "2025-07-07T19:35:00",
        from: "New York (LGA)",
        airline: "Southwest Airlines",
        aircraft: "B737 (N209WN)",
        status: "Delayed 9:31 PM"
    },
    {
        flight: "DL1186",
        time: "2025-07-07T19:37:00",
        from: "Tulsa (TUL)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N919AT)",
        status: "Diverted to CHA"
    },
    {
        flight: "DL3211",
        time: "2025-07-07T19:37:00",
        from: "Lexington (LEX)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N998AT)",
        status: "Diverted to LEX"
    },
    {
        flight: "DL5314",
        time: "2025-07-07T19:38:00",
        from: "Alexandria (AEX)",
        airline: "Delta Connection",
        aircraft: "CRJ9 (N913XJ)",
        status: "Diverted to MGM"
    },
    {
        flight: "DL1848",
        time: "2025-07-07T19:39:00",
        from: "San Jose del Cabo (SJD)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N6707A)",
        status: "Diverted to BNA"
    },
    {
        flight: "DL3231",
        time: "2025-07-07T19:39:00",
        from: "San Jose (SJO)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N667DN)",
        status: "Diverted to SAV"
    },
    {
        flight: "DL26",
        time: "2025-07-07T19:40:00",
        from: "Seoul (ICN)",
        airline: "Delta Air Lines",
        aircraft: "A359 (N526DN)",
        status: "Diverted to BNA"
    },
    {
        flight: "DL2772",
        time: "2025-07-07T19:40:00",
        from: "Charleston (CHS)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N934DZ)",
        status: "Unknown"
    },
    {
        flight: "DL2084",
        time: "2025-07-07T19:41:00",
        from: "Windsor Locks (BDL)",
        airline: "Delta Air Lines",
        aircraft: "A320 (N362NW)",
        status: "Delayed 9:36 PM"
    },
    {
        flight: "F91100",
        time: "2025-07-07T19:41:00",
        from: "Phoenix (PHX)",
        airline: "Frontier (Trixie the Fox Livery)",
        aircraft: "A20N (N329FR)",
        status: "Landed 7:05 PM"
    },
    {
        flight: "NK2850",
        time: "2025-07-07T19:41:00",
        from: "Detroit (DTW)",
        airline: "Spirit Airlines",
        aircraft: "A320 (N613NK)",
        status: "Landed 7:12 PM"
    },
    {
        flight: "DL1110",
        time: "2025-07-07T19:42:00",
        from: "Fort Myers (RSW)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N925DZ)",
        status: "Diverted to TLH"
    },
    {
        flight: "DL3016",
        time: "2025-07-07T19:42:00",
        from: "Wilmington (ILM)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N936AT)",
        status: "Landed 7:07 PM"
    },
    {
        flight: "DL968",
        time: "2025-07-07T19:43:00",
        from: "New York (LGA)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N112DN)",
        status: "Diverted to CLT"
    },
    {
        flight: "DL904",
        time: "2025-07-07T19:44:00",
        from: "Sacramento (SMF)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N829DN)",
        status: "Diverted to BHM"
    },
    {
        flight: "AA5175",
        time: "2025-07-07T19:47:00",
        from: "Charlotte (CLT)",
        airline: "American Eagle",
        aircraft: "CRJ9 (N559NN)",
        status: "Canceled"
    },
    {
        flight: "DL932",
        time: "2025-07-07T19:47:00",
        from: "San Diego (SAN)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N388DN)",
        status: "Diverted to BNA"
    },
    {
        flight: "DL1413",
        time: "2025-07-07T19:47:00",
        from: "Fort Lauderdale (FLL)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N688DL)",
        status: "Diverted to BHM"
    },
    {
        flight: "DL1758",
        time: "2025-07-07T19:47:00",
        from: "Panama City (PTY)",
        airline: "Delta Air Lines",
        aircraft: "B738 (N3762Y)",
        status: "Diverted to SAV"
    },
    {
        flight: "DL2379",
        time: "2025-07-07T19:48:00",
        from: "Chattanooga (CHA)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N943AT)",
        status: "Unknown"
    },
    {
        flight: "DL581",
        time: "2025-07-07T19:49:00",
        from: "Oranjestad (AUA)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N354DN)",
        status: "Diverted to GSP"
    },
    {
        flight: "DL787",
        time: "2025-07-07T19:49:00",
        from: "Spokane (GEG)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N877DN)",
        status: "Diverted to HSV"
    },
    {
        flight: "DL937",
        time: "2025-07-07T19:49:00",
        from: "Tucson (TUS)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N861DN)",
        status: "Diverted to BNA"
    },
    {
        flight: "DL1956",
        time: "2025-07-07T19:49:00",
        from: "Nassau (NAS)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N841DN)",
        status: "Diverted to HSV"
    },
    {
        flight: "DL1873",
        time: "2025-07-07T19:50:00",
        from: "Sint Maarten (SXM)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N6700)",
        status: "Landed 7:04 PM"
    },
    {
        flight: "DL3228",
        time: "2025-07-07T19:50:00",
        from: "Willemstad (CUR)",
        airline: "Delta Air Lines",
        aircraft: "B738 (N393DA)",
        status: "Diverted to SAV"
    },
    {
        flight: "TK31",
        time: "2025-07-07T19:50:00",
        from: "Istanbul (IST)",
        airline: "Turkish Airlines",
        aircraft: "B789 (TC-LLY)",
        status: "Diverted to CLT"
    },
    {
        flight: "5Y6039",
        time: "2025-07-07T19:50:00",
        from: "Chicago (ORD)",
        airline: "Atlas Air",
        aircraft: "74F",
        status: "Unknown"
    },
    {
        flight: "UA2081",
        time: "2025-07-07T19:52:00",
        from: "Washington (IAD)",
        airline: "United Airlines",
        aircraft: "B737 (N15710)",
        status: "Diverted to GSP"
    },
    {
        flight: "UA2081",
        time: "2025-07-07T19:52:00",
        from: "Washington (IAD)",
        airline: "United Airlines",
        aircraft: "B737 (N15710)",
        status: "Diverted to GSP"
    },
    {
        flight: "DL2892",
        time: "2025-07-07T19:53:00",
        from: "Columbus (CMH)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N933DZ)",
        status: "Diverted to CAE"
    },
    {
        flight: "DL921",
        time: "2025-07-07T19:54:00",
        from: "Dallas (DFW)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N360DN)",
        status: "Diverted to PNS"
    },
    {
        flight: "DL874",
        time: "2025-07-07T19:55:00",
        from: "Boise (BOI)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N390DN)",
        status: "Diverted to HSV"
    },
    {
        flight: "F92509",
        time: "2025-07-07T19:55:00",
        from: "Baltimore (BWI)",
        airline: "Frontier (Sammy the Squirrel Livery)",
        aircraft: "A320 (N232FR)",
        status: "Canceled"
    },
    {
        flight: "F9124",
        time: "2025-07-07T19:57:00",
        from: "Montego Bay (MBJ)",
        airline: "Frontier (Ed, Edwin & Eddie the Penguins Livery)",
        aircraft: "A20N (N344FR)",
        status: "Diverted to CLT"
    },
    {
        flight: "DL3564",
        time: "2025-07-07T19:59:00",
        from: "Fort Wayne (FWA)",
        airline: "Delta Connection",
        aircraft: "CRJ9 (N548CA)",
        status: "Diverted to MGM"
    },
    {
        flight: "DL2058",
        time: "2025-07-07T20:00:00",
        from: "Grand Rapids (GRR)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N899DN)",
        status: "Diverted to CHA"
    },
    {
        flight: "WN469",
        time: "2025-07-07T20:00:00",
        from: "Austin (AUS)",
        airline: "Southwest Airlines",
        aircraft: "B738 (N8508W)",
        status: "Diverted to ECP"
    },
    {
        flight: "DL3101",
        time: "2025-07-07T20:01:00",
        from: "Asheville (AVL)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N974AT)",
        status: "Unknown"
    },
    {
        flight: "DL1979",
        time: "2025-07-07T20:02:00",
        from: "San Antonio (SAT)",
        airline: "Delta Air Lines",
        aircraft: "A320 (N337NW)",
        status: "Diverted to BHM"
    },
    {
        flight: "F92400",
        time: "2025-07-07T20:05:00",
        from: "Houston (IAH)",
        airline: "Frontier (Brazos the Ridgway's Hawk)",
        aircraft: "A21N (N658FR)",
        status: "Diverted to BNA"
    },
    {
        flight: "WN998",
        time: "2025-07-07T20:05:00",
        from: "Nashville (BNA)",
        airline: "Southwest Airlines",
        aircraft: "B737 (N462WN)",
        status: "Unknown"
    },
    {
        flight: "DL809",
        time: "2025-07-07T20:09:00",
        from: "San Jose (SJC)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N814DN)",
        status: "Diverted to BNA"
    },
    {
        flight: "DL406",
        time: "2025-07-07T20:10:00",
        from: "Bozeman (BZN)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N6702)",
        status: "Diverted to BNA"
    },
    {
        flight: "DL1836",
        time: "2025-07-07T20:10:00",
        from: "Punta Cana (PUJ)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N103DY)",
        status: "Diverted to SAV"
    },
    {
        flight: "DL2329",
        time: "2025-07-07T20:15:00",
        from: "Norfolk (ORF)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N326DN)",
        status: "Unknown"
    },
    {
        flight: "LA2482",
        time: "2025-07-07T20:15:00",
        from: "Lima (LIM)",
        airline: "LATAM Airlines",
        aircraft: "B763 (CC-CXC)",
        status: "Delayed 9:11 PM"
    },
    {
        flight: "NK2352",
        time: "2025-07-07T20:15:00",
        from: "Los Angeles (LAX)",
        airline: "Spirit Airlines",
        aircraft: "A21N (N718NK)",
        status: "Diverted to BNA"
    },
    {
        flight: "DL5246",
        time: "2025-07-07T20:16:00",
        from: "Allentown (ABE)",
        airline: "Delta Connection",
        aircraft: "CRJ9 (N186GJ)",
        status: "Diverted to CAE"
    },
    {
        flight: "DL2152",
        time: "2025-07-07T20:18:00",
        from: "Milwaukee (MKE)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N301DV)",
        status: "Diverted to CHS"
    },
    {
        flight: "DL5205",
        time: "2025-07-07T20:18:00",
        from: "Huntsville (HSV)",
        airline: "Delta Connection",
        aircraft: "CRJ9 (N678CA)",
        status: "Unknown"
    },
    {
        flight: "DL880",
        time: "2025-07-07T20:20:00",
        from: "Cleveland (CLE)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N936DZ)",
        status: "Scheduled"
    },
    {
        flight: "DL2759",
        time: "2025-07-07T20:20:00",
        from: "New Orleans (MSY)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N818DA)",
        status: "Diverted to CHS"
    },
    {
        flight: "WN1938",
        time: "2025-07-07T20:20:00",
        from: "Houston (HOU)",
        airline: "Southwest Airlines",
        aircraft: "B737 (N7824A)",
        status: "Diverted to BNA"
    },
    {
        flight: "DL1386",
        time: "2025-07-07T20:20:00",
        from: "Miami (MIA)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N698DL)",
        status: "Diverted to JAX"
    },
    {
        flight: "DL466",
        time: "2025-07-07T20:21:00",
        from: "Las Vegas (LAS)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N687DL)",
        status: "Diverted to PNS"
    },
    {
        flight: "DL483",
        time: "2025-07-07T20:21:00",
        from: "Burbank (BUR)",
        airline: "Delta Air Lines",
        aircraft: "BCS3 (N301DU)",
        status: "Diverted to HSV"
    },
    {
        flight: "DL1485",
        time: "2025-07-07T20:21:00",
        from: "St. Louis (STL)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N952DZ)",
        status: "Diverted to SDF"
    },
    {
        flight: "DL3758",
        time: "2025-07-07T20:21:00",
        from: "Shreveport (SHV)",
        airline: "Delta Connection",
        aircraft: "CRJ9 (N816SK)",
        status: "Scheduled"
    },
    {
        flight: "DL957",
        time: "2025-07-07T20:23:00",
        from: "Denver (DEN)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N106DN)",
        status: "Diverted to BNA"
    },
    {
        flight: "DL2293",
        time: "2025-07-07T20:23:00",
        from: "New York (JFK)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N890DN)",
        status: "Diverted to GSO"
    },
    {
        flight: "F91116",
        time: "2025-07-07T20:24:00",
        from: "Las Vegas (LAS)",
        airline: "Frontier (Betty the Bluebird Livery)",
        aircraft: "A320 (N230FR)",
        status: "Delayed 9:33 PM"
    },
    {
        flight: "CI5346",
        time: "2025-07-07T20:24:00",
        from: "San Francisco (SFO)",
        airline: "China Airlines Cargo",
        aircraft: "B77L (B-18779)",
        status: "Delayed 9:32 PM"
    },
    {
        flight: "AF34",
        time: "2025-07-07T20:25:00",
        from: "Paris (CDG)",
        airline: "Air France",
        aircraft: "B772 (F-GSPM)",
        status: "Delayed 9:25 PM"
    },
    {
        flight: "DL2211",
        time: "2025-07-07T20:25:00",
        from: "Pensacola (PNS)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N949DZ)",
        status: "Scheduled"
    },
    {
        flight: "DL2314",
        time: "2025-07-07T20:25:00",
        from: "Greensboro (GSO)",
        airline: "Delta Air Lines",
        aircraft: "A319 (N315NB)",
        status: "Scheduled"
    },
    {
        flight: "KL621",
        time: "2025-07-07T20:25:00",
        from: "Amsterdam (AMS)",
        airline: "KLM",
        aircraft: "B77W (PH-BVN)",
        status: "Diverted to CLT"
    },
    {
        flight: "3S456",
        time: "2025-07-07T20:25:00",
        from: "Frankfurt (FRA)",
        airline: "DHL",
        aircraft: "B77L (D-AALT)",
        status: "Diverted to CVG"
    },
    {
        flight: "DL1267",
        time: "2025-07-07T20:26:00",
        from: "Baltimore (BWI)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N820DX)",
        status: "Scheduled"
    },
    {
        flight: "DL5325",
        time: "2025-07-07T20:26:00",
        from: "Tallahassee (TLH)",
        airline: "Delta Connection",
        aircraft: "CRJ9 (N903XJ)",
        status: "Scheduled"
    },
    {
        flight: "DL1568",
        time: "2025-07-07T20:27:00",
        from: "Pittsburgh (PIT)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N940DU)",
        status: "Scheduled"
    },
    {
        flight: "DL1458",
        time: "2025-07-07T20:28:00",
        from: "West Palm Beach (PBI)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N363DN)",
        status: "Scheduled"
    },
    {
        flight: "DL4958",
        time: "2025-07-07T20:28:00",
        from: "Moline (MLI)",
        airline: "Delta Connection",
        aircraft: "CRJ9 (N186GJ)",
        status: "Scheduled"
    },
    {
        flight: "DL796",
        time: "2025-07-07T20:28:00",
        from: "Phoenix (PHX)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N550NW)",
        status: "Diverted to MEM"
    },
    {
        flight: "DL1937",
        time: "2025-07-07T20:29:00",
        from: "Mobile (MOB)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N979AT)",
        status: "Scheduled"
    },
    {
        flight: "DL2053",
        time: "2025-07-07T20:29:00",
        from: "Detroit (DTW)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N381DZ)",
        status: "Scheduled"
    },
    {
        flight: "DL3158",
        time: "2025-07-07T20:29:00",
        from: "Richmond (RIC)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N673DL)",
        status: "Scheduled"
    },
    {
        flight: "DL3218",
        time: "2025-07-07T20:29:00",
        from: "Savannah (SAV)",
        airline: "Delta Air Lines",
        aircraft: "B738 (N397DA)",
        status: "Scheduled"
    },
    {
        flight: "DL1681",
        time: "2025-07-07T20:30:00",
        from: "Memphis (MEM)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N951DX)",
        status: "Scheduled"
    },
    {
        flight: "DL2312",
        time: "2025-07-07T20:30:00",
        from: "New York (EWR)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N874DN)",
        status: "Canceled"
    },
    {
        flight: "BA227",
        time: "2025-07-07T20:30:00",
        from: "London (LHR)",
        airline: "British Airways",
        aircraft: "B772 (G-VIIK)",
        status: "Diverted to TPA"
    },
    {
        flight: "DL1397",
        time: "2025-07-07T20:31:00",
        from: "Austin (AUS)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N863DN)",
        status: "Diverted to HSV"
    },
    {
        flight: "DL2600",
        time: "2025-07-07T20:31:00",
        from: "Raleigh-Durham (RDU)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N819DX)",
        status: "Scheduled"
    },
    {
        flight: "DL850",
        time: "2025-07-07T20:32:00",
        from: "Washington (DCA)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N117DX)",
        status: "Scheduled"
    },
    {
        flight: "DL2627",
        time: "2025-07-07T20:33:00",
        from: "Jacksonville (JAX)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N374DX)",
        status: "Delayed 9:09 PM"
    },
    {
        flight: "DL1785",
        time: "2025-07-07T20:34:00",
        from: "Vieux Fort (UVF)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N684DA)",
        status: "Diverted to CHS"
    },
    {
        flight: "DL2484",
        time: "2025-07-07T20:34:00",
        from: "Birmingham (BHM)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N954DZ)",
        status: "Scheduled"
    },
    {
        flight: "DL3922",
        time: "2025-07-07T20:34:00",
        from: "Dothan (DHN)",
        airline: "American Eagle",
        aircraft: "CRJ7 (N712SK)",
        status: "Scheduled"
    },
    {
        flight: "DL5185",
        time: "2025-07-07T20:34:00",
        from: "Monroe (MLU)",
        airline: "Delta Connection",
        aircraft: "CRJ9 (N133EV)",
        status: "Scheduled"
    },
    {
        flight: "DL5350",
        time: "2025-07-07T20:34:00",
        from: "Charleston (CRW)",
        airline: "Delta Connection",
        aircraft: "CRJ7 (N669CA)",
        status: "Scheduled"
    },
    {
        flight: "DL5529",
        time: "2025-07-07T20:34:00",
        from: "Lafayette (LFT)",
        airline: "Delta Connection",
        aircraft: "CRJ9 (N136EV)",
        status: "Diverted to LFT"
    },
    {
        flight: "DL4863",
        time: "2025-07-07T20:34:00",
        from: "Evansville (EVV)",
        airline: "Delta Connection",
        aircraft: "CRJ9 (N907XJ)",
        status: "Scheduled"
    },
    {
        flight: "DL1660",
        time: "2025-07-07T20:35:00",
        from: "Kansas City (MCI)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N948DZ)",
        status: "Diverted to BNA"
    },
    {
        flight: "DL1783",
        time: "2025-07-07T20:35:00",
        from: "Indianapolis (IND)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N956DZ)",
        status: "Delayed 9:31 PM"
    },
    {
        flight: "DL1821",
        time: "2025-07-07T20:35:00",
        from: "Jackson (JAN)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N896AT)",
        status: "Scheduled"
    },
    {
        flight: "DL2047",
        time: "2025-07-07T20:35:00",
        from: "Rochester (ROC)",
        airline: "Delta Air Lines",
        aircraft: "A320 (N340NW)",
        status: "Diverted to CLT"
    },
    {
        flight: "DL4640",
        time: "2025-07-07T20:35:00",
        from: "Montgomery (MGM)",
        airline: "Delta Connection",
        aircraft: "CRJ9 (N331PQ)",
        status: "Scheduled"
    },
    {
        flight: "DL2857",
        time: "2025-07-07T20:35:00",
        from: "Harrisburg (MDT)",
        airline: "Delta Air Lines",
        aircraft: "A320 (N319US)",
        status: "Diverted to RDU"
    },
    {
        flight: "DL1693",
        time: "2025-07-07T20:37:00",
        from: "Nashville (BNA)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N824DN)",
        status: "Scheduled"
    },
    {
        flight: "DL1984",
        time: "2025-07-07T20:39:00",
        from: "Bridgetown (BGI)",
        airline: "Delta Air Lines",
        aircraft: "B738 (N3743H)",
        status: "Diverted to JAX"
    },
    {
        flight: "DL2168",
        time: "2025-07-07T20:39:00",
        from: "Key West (EYW)",
        airline: "Delta Air Lines",
        aircraft: "A319 (N362NB)",
        status: "Scheduled"
    },
    {
        flight: "DL1169",
        time: "2025-07-07T20:42:00",
        from: "Philadelphia (PHL)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N825DN)",
        status: "Scheduled"
    },
    {
        flight: "DL1425",
        time: "2025-07-07T20:45:00",
        from: "Tampa (TPA)",
        airline: "Delta Air Lines",
        aircraft: "B763 (N192DN)",
        status: "Scheduled"
    },
    {
        flight: "DL2345",
        time: "2025-07-07T20:45:00",
        from: "Fort Lauderdale (FLL)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N544US)",
        status: "Diverted to JAX"
    },
    {
        flight: "WN434",
        time: "2025-07-07T20:45:00",
        from: "Washington (DCA)",
        airline: "Southwest Airlines",
        aircraft: "B737 (N904WN)",
        status: "Scheduled"
    },
    {
        flight: "DL395",
        time: "2025-07-07T20:46:00",
        from: "Los Angeles (LAX)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N329DN)",
        status: "Diverted to MEM"
    },
    {
        flight: "DL1325",
        time: "2025-07-07T20:46:00",
        from: "Madison (MSN)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N717JL)",
        status: "Canceled"
    },
    {
        flight: "DL3075",
        time: "2025-07-07T20:46:00",
        from: "Gainesville (GNV)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N980AT)",
        status: "Diverted to JAX"
    },
    {
        flight: "DL1028",
        time: "2025-07-07T20:47:00",
        from: "Minneapolis (MSP)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N809DN)",
        status: "Diverted to BNA"
    },
    {
        flight: "DL1742",
        time: "2025-07-07T20:47:00",
        from: "Orlando (MCO)",
        airline: "Delta Air Lines",
        aircraft: "B753 (N583NW)",
        status: "Scheduled"
    },
    {
        flight: "DL964",
        time: "2025-07-07T20:47:00",
        from: "New York (LGA)",
        airline: "Delta Air Lines",
        aircraft: "A321",
        status: "Diverted to RDU"
    },
    {
        flight: "DL964",
        time: "2025-07-07T20:47:00",
        from: "New York (LGA)",
        airline: "Delta Air Lines",
        aircraft: "A321",
        status: "Diverted to RDU"
    },
    {
        flight: "DL2714",
        time: "2025-07-07T20:48:00",
        from: "Toronto (YYZ)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N342DN)",
        status: "Diverted to CVG"
    },
    {
        flight: "DL2285",
        time: "2025-07-07T20:49:00",
        from: "Daytona Beach (DAB)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N929AT)",
        status: "Scheduled"
    },
    {
        flight: "F94316",
        time: "2025-07-07T20:49:00",
        from: "Los Angeles (LAX)",
        airline: "Frontier (Wiley the Bison Livery)",
        aircraft: "A20N (N313FR)",
        status: "Diverted to MEM"
    },
    {
        flight: "DL2862",
        time: "2025-07-07T20:50:00",
        from: "Oklahoma City (OKC)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N895AT)",
        status: "Diverted to MEM"
    },
    {
        flight: "F93723",
        time: "2025-07-07T20:50:00",
        from: "West Palm Beach (PBI)",
        airline: "Frontier (Lewis the Greater Sage-Grouse Livery)",
        aircraft: "A20N (N378FR)",
        status: "Delayed 10:05 PM"
    },
    {
        flight: "F94405",
        time: "2025-07-07T20:51:00",
        from: "Miami (MIA)",
        airline: "Frontier (Elrey the Elk Livery)",
        aircraft: "A20N (N370FR)",
        status: "Diverted to TPA"
    },
    {
        flight: "DL4809",
        time: "2025-07-07T20:53:00",
        from: "Bentonville (XNA)",
        airline: "Delta Connection",
        aircraft: "CRJ7 (N641CA)",
        status: "Scheduled"
    },
    {
        flight: "DL3043",
        time: "2025-07-07T20:57:00",
        from: "Melbourne (MLB)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N986AT)",
        status: "Scheduled"
    },
    {
        flight: "DL1987",
        time: "2025-07-07T21:00:00",
        from: "Montego Bay (MBJ)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N336DX)",
        status: "Diverted to TPA"
    },
    {
        flight: "DL3947",
        time: "2025-07-07T21:00:00",
        from: "Blountville (TRI)",
        airline: "Delta Connection",
        aircraft: "CRJ7 (N776SK)",
        status: "Scheduled"
    },
    {
        flight: "WN2157",
        time: "2025-07-07T21:00:00",
        from: "Dallas (DAL)",
        airline: "Southwest Airlines",
        aircraft: "B738 (N8673F)",
        status: "Delayed 10:33 PM"
    },
    {
        flight: "WN3777",
        time: "2025-07-07T21:00:00",
        from: "Chicago (MDW)",
        airline: "Southwest Airlines",
        aircraft: "B737 (N909WN)",
        status: "Scheduled"
    },
    {
        flight: "WN4253",
        time: "2025-07-07T21:00:00",
        from: "Baltimore (BWI)",
        airline: "Southwest Airlines",
        aircraft: "B737 (N917WN)",
        status: "Scheduled"
    },
    {
        flight: "AA9944",
        time: "2025-07-07T21:00:00",
        from: "Boston (BOS)",
        airline: "American Eagle",
        aircraft: "E75L (N419YX)",
        status: "Scheduled"
    },
    {
        flight: "AA9877",
        time: "2025-07-07T21:00:00",
        from: "Hilton Head Island (HHH)",
        airline: "American Eagle",
        aircraft: "E75L (N284JN)",
        status: "Delayed 9:24 PM"
    },
    {
        flight: "DL3042",
        time: "2025-07-07T21:01:00",
        from: "Knoxville (TYS)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N951AT)",
        status: "Scheduled"
    },
    {
        flight: "DL2193",
        time: "2025-07-07T21:04:00",
        from: "Columbia (CAE)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N891AT)",
        status: "Scheduled"
    },
    {
        flight: "DL32",
        time: "2025-07-07T21:05:00",
        from: "Dallas (DFW)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N311DN)",
        status: "Diverted to ECP"
    },
    {
        flight: "DL599",
        time: "2025-07-07T21:05:00",
        from: "Mexico City (MEX)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N6715C)",
        status: "Diverted to BNA"
    },
    {
        flight: "DL983",
        time: "2025-07-07T21:05:00",
        from: "Bogota (BOG)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N547US)",
        status: "Diverted to TLH"
    },
    {
        flight: "DL2738",
        time: "2025-07-07T21:05:00",
        from: "Chicago (ORD)",
        airline: "Delta Air Lines",
        aircraft: "B738 (N3736C)",
        status: "Scheduled"
    },
    {
        flight: "DL5282",
        time: "2025-07-07T21:05:00",
        from: "Augusta (AGS)",
        airline: "Delta Connection",
        aircraft: "CRJ9 (N228PQ)",
        status: "Scheduled"
    },
    {
        flight: "F94702",
        time: "2025-07-07T21:05:00",
        from: "Austin (AUS)",
        airline: "Frontier (Choo the Pika Livery)",
        aircraft: "A20N (N331FR)",
        status: "Scheduled"
    },
    {
        flight: "DL983",
        time: "2025-07-07T21:05:00",
        from: "Bogota (BOG)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N547US)",
        status: "Diverted to TLH"
    },
    {
        flight: "DL1852",
        time: "2025-07-07T21:07:00",
        from: "Fayetteville (FAY)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N985AT)",
        status: "Scheduled"
    },
    {
        flight: "DL5013",
        time: "2025-07-07T21:08:00",
        from: "White Plains (HPN)",
        airline: "Delta Connection",
        aircraft: "CRJ9 (N491PX)",
        status: "Diverted to RDU"
    },
    {
        flight: "",
        time: "2025-07-07T07:29:00",
        from: "Concord (USA)",
        airline: "-",
        aircraft: "CRJ7 (N519JG)",
        status: "Landed 7:55 AM"
    },
    {
        flight: "DL2464",
        time: "2025-07-07T21:10:00",
        from: "Boston (BOS)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N366DX)",
        status: "Diverted to CHS"
    },
    {
        flight: "DL2113",
        time: "2025-07-07T21:12:00",
        from: "Houston (IAH)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N309DN)",
        status: "Scheduled"
    },
    {
        flight: "DL2207",
        time: "2025-07-07T21:13:00",
        from: "Gulfport (GPT)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N966AT)",
        status: "Scheduled"
    },
    {
        flight: "DL3007",
        time: "2025-07-07T21:13:00",
        from: "Greenville-Spartanburg (GSP)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N850DN)",
        status: "Scheduled"
    },
    {
        flight: "DL5246",
        time: "2025-07-07T20:16:00",
        from: "Allentown (ABE)",
        airline: "Delta Connection",
        aircraft: "CRJ9 (N186GJ)",
        status: "Diverted to CAE"
    },
    {
        flight: "F94810",
        time: "2025-07-07T21:15:00",
        from: "San Antonio (SAT)",
        airline: "Frontier (Stretch the Great Blue Heron Livery)",
        aircraft: "A20N (N334FR)",
        status: "Scheduled"
    },
    {
        flight: "DL3088",
        time: "2025-07-07T21:17:00",
        from: "Dayton (DAY)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N607AT)",
        status: "Scheduled"
    },
    {
        flight: "DL4988",
        time: "2025-07-07T21:19:00",
        from: "Jacksonville (OAJ)",
        airline: "Delta Connection",
        aircraft: "CRJ7 (N398CA)",
        status: "Scheduled"
    },
    {
        flight: "F91101",
        time: "2025-07-07T21:19:00",
        from: "Philadelphia (PHL)",
        airline: "Frontier (D&A the Hispaniolan Parakeets Livery)",
        aircraft: "A21N (N635FR)",
        status: "Scheduled"
    },
    {
        flight: "F92496",
        time: "2025-07-07T21:19:00",
        from: "Dallas (DFW)",
        airline: "Frontier (Lone Star the Longhorn Steer Livery)",
        aircraft: "A20N (N347FR)",
        status: "Scheduled"
    },
    {
        flight: "F93053",
        time: "2025-07-07T21:20:00",
        from: "Tampa (TPA)",
        airline: "Frontier (Sonny the Lemon Shark Livery)",
        aircraft: "A20N (N382FR)",
        status: "Estimated 9:12 PM"
    },
    {
        flight: "WN2467",
        time: "2025-07-07T21:20:00",
        from: "Denver (DEN)",
        airline: "Southwest Airlines",
        aircraft: "B737 (N268WN)",
        status: "Estimated 9:31 PM"
    },
    {
        flight: "DL1182",
        time: "2025-07-07T19:28:00",
        from: "Colorado Springs (COS)",
        airline: "Delta Air Lines",
        aircraft: "B738 (N384DA)",
        status: "Diverted to HSV"
    },
    {
        flight: "DL1816",
        time: "2025-07-07T19:23:00",
        from: "Puerto Vallarta (PVR)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N815DN)",
        status: "Diverted to SAV"
    },
    {
        flight: "DL1871",
        time: "2025-07-07T21:25:00",
        from: "Charleston (CHS)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N944DZ)",
        status: "Scheduled"
    },
    {
        flight: "DL706",
        time: "2025-07-07T19:05:00",
        from: "Denver (DEN)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N114DN)",
        status: "Diverted to HSV"
    },
    {
        flight: "DL3564",
        time: "2025-07-07T19:59:00",
        from: "Fort Wayne (FWA)",
        airline: "Delta Connection",
        aircraft: "CRJ9 (N548CA)",
        status: "Diverted to MGM"
    },
    {
        flight: "DL2690",
        time: "2025-07-07T21:27:00",
        from: "Syracuse (SYR)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N331DN)",
        status: "Diverted to GSO"
    },
    {
        flight: "DL3180",
        time: "2025-07-07T21:27:00",
        from: "Jackson (JAN)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N953AT)",
        status: "Scheduled"
    },
    {
        flight: "UA1504",
        time: "2025-07-07T21:29:00",
        from: "Chicago (ORD)",
        airline: "United Airlines",
        aircraft: "B738 (N35236)",
        status: "Delayed 10:09 PM"
    },
    {
        flight: "DL5314",
        time: "2025-07-07T19:38:00",
        from: "Alexandria (AEX)",
        airline: "Delta Connection",
        aircraft: "CRJ9 (N913XJ)",
        status: "Diverted to MGM"
    },
    {
        flight: "DL2037",
        time: "2025-07-07T21:30:00",
        from: "Asheville (AVL)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N944AT)",
        status: "Scheduled"
    },
    {
        flight: "DL3178",
        time: "2025-07-07T21:31:00",
        from: "Myrtle Beach (MYR)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N893AT)",
        status: "Scheduled"
    },
    {
        flight: "AC1309",
        time: "2025-07-07T21:31:00",
        from: "Toronto (YYZ)",
        airline: "Air Canada",
        aircraft: "BCS3 (C-GMZN)",
        status: "Scheduled"
    },
    {
        flight: "DL542",
        time: "2025-07-07T21:32:00",
        from: "Seattle (SEA)",
        airline: "Delta Air Lines",
        aircraft: "B753 (N590NW)",
        status: "Diverted to MCI"
    },
    {
        flight: "DL875",
        time: "2025-07-07T21:32:00",
        from: "Salt Lake City (SLC)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N123DW)",
        status: "Estimated 9:44 PM"
    },
    {
        flight: "DL540",
        time: "2025-07-07T21:33:00",
        from: "San Diego (SAN)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N393DN)",
        status: "Diverted to PNS"
    },
    {
        flight: "DL1292",
        time: "2025-07-07T21:34:00",
        from: "Louisville (SDF)",
        airline: "Delta Air Lines (SkyTeam Livery)",
        aircraft: "B738 (N381DN)",
        status: "Scheduled"
    },
    {
        flight: "DL1827",
        time: "2025-07-07T21:34:00",
        from: "Cincinnati (CVG)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N872DN)",
        status: "Scheduled"
    },
    {
        flight: "WN667",
        time: "2025-07-07T19:10:00",
        from: "Baltimore (BWI)",
        airline: "Southwest Airlines",
        aircraft: "B737 (N939WN)",
        status: "Diverted to GSP"
    },
    {
        flight: "DL1488",
        time: "2025-07-07T21:35:00",
        from: "Fort Myers (RSW)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N697DL)",
        status: "Scheduled"
    },
    {
        flight: "DL26",
        time: "2025-07-07T19:40:00",
        from: "Seoul (ICN)",
        airline: "Delta Air Lines",
        aircraft: "A359 (N526DN)",
        status: "Diverted to BNA"
    },
    {
        flight: "DL1836",
        time: "2025-07-07T20:10:00",
        from: "Punta Cana (PUJ)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N103DY)",
        status: "Diverted to SAV"
    },
    {
        flight: "DL483",
        time: "2025-07-07T20:21:00",
        from: "Burbank (BUR)",
        airline: "Delta Air Lines",
        aircraft: "BCS3 (N301DU)",
        status: "Diverted to HSV"
    },
    {
        flight: "DL1594",
        time: "2025-07-07T21:37:00",
        from: "Tampa (TPA)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N556NW)",
        status: "Scheduled"
    },
    {
        flight: "DL531",
        time: "2025-07-07T21:38:00",
        from: "San Francisco (SFO)",
        airline: "Delta Air Lines",
        aircraft: "B763 (N177DN)",
        status: "Diverted to MCI"
    },
    {
        flight: "DL950",
        time: "2025-07-07T21:39:00",
        from: "Washington (DCA)",
        airline: "Delta Air Lines",
        aircraft: "A320 (N339NW)",
        status: "Scheduled"
    },
    {
        flight: "DL1323",
        time: "2025-07-07T21:39:00",
        from: "Miami (MIA)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N685DA)",
        status: "Scheduled"
    },
    {
        flight: "DL1348",
        time: "2025-07-07T21:39:00",
        from: "Richmond (RIC)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N955DZ)",
        status: "Scheduled"
    },
    {
        flight: "DL4033",
        time: "2025-07-07T19:18:00",
        from: "South Bend (SBN)",
        airline: "Delta Connection",
        aircraft: "CRJ9 (N833SK)",
        status: "Diverted to SAV"
    },
    {
        flight: "DL970",
        time: "2025-07-07T21:40:00",
        from: "New York (LGA)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N380DN)",
        status: "Scheduled"
    },
    {
        flight: "DL2928",
        time: "2025-07-07T21:40:00",
        from: "Baltimore (BWI)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N6712B)",
        status: "Scheduled"
    },
    {
        flight: "DL1687",
        time: "2025-07-07T21:41:00",
        from: "Washington (IAD)",
        airline: "Delta Air Lines",
        aircraft: "BCS3 (N332DU)",
        status: "Scheduled"
    },
    {
        flight: "DL1839",
        time: "2025-07-07T21:41:00",
        from: "Providence (PVD)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N313DN)",
        status: "Estimated 9:27 PM"
    },
    {
        flight: "DL2340",
        time: "2025-07-07T21:41:00",
        from: "New York (EWR)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N889DN)",
        status: "Canceled"
    },
    {
        flight: "AA2779",
        time: "2025-07-07T21:42:00",
        from: "Chicago (ORD)",
        airline: "American Airlines",
        aircraft: "A319 (N758US)",
        status: "Delayed 10:08 PM"
    },
    {
        flight: "DL1413",
        time: "2025-07-07T19:47:00",
        from: "Fort Lauderdale (FLL)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N688DL)",
        status: "Diverted to BHM"
    },
    {
        flight: "DL366",
        time: "2025-07-07T21:43:00",
        from: "Phoenix (PHX)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N823DX)",
        status: "Delayed 10:05 PM"
    },
    {
        flight: "DL1470",
        time: "2025-07-07T21:43:00",
        from: "Kansas City (MCI)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N937DZ)",
        status: "Scheduled"
    },
    {
        flight: "DL906",
        time: "2025-07-07T19:18:00",
        from: "Salt Lake City (SLC)",
        airline: "Delta Air Lines",
        aircraft: "A21N (N513DA)",
        status: "Diverted to BHM"
    },
    {
        flight: "OO3564",
        time: "2025-07-07T21:43:00",
        from: "Montgomery (MGM)",
        airline: "SkyWest Airlines",
        aircraft: "CRJ9",
        status: "Scheduled"
    },
    {
        flight: "DL1722",
        time: "2025-07-07T21:44:00",
        from: "Detroit (DTW)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N6701)",
        status: "Scheduled"
    },
    {
        flight: "F91442",
        time: "2025-07-07T21:44:00",
        from: "Chicago (ORD)",
        airline: "Frontier (Scarlet the Tanager Livery)",
        aircraft: "A20N (N354FR)",
        status: "Scheduled"
    },
    {
        flight: "DL5514",
        time: "2025-07-07T21:44:00",
        from: "Mobile (MOB)",
        airline: "Delta Connection",
        aircraft: "CRJ9 (N924XJ)",
        status: "Scheduled"
    },
    {
        flight: "DL5169",
        time: "2025-07-07T21:45:00",
        from: "Baton Rouge (BTR)",
        airline: "Delta Connection",
        aircraft: "CRJ7 (N668CA)",
        status: "Scheduled"
    },
    {
        flight: "F94209",
        time: "2025-07-07T21:45:00",
        from: "Cleveland (CLE)",
        airline: "Frontier Airlines",
        aircraft: "A21N (N667FR)",
        status: "Estimated 9:53 PM"
    },
    {
        flight: "WN4609",
        time: "2025-07-07T21:45:00",
        from: "St. Louis (STL)",
        airline: "Southwest Airlines",
        aircraft: "B737 (N216WR)",
        status: "Scheduled"
    },
    {
        flight: "DL1036",
        time: "2025-07-07T19:04:00",
        from: "Minneapolis (MSP)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N856DN)",
        status: "Diverted to HSV"
    },
    {
        flight: "DL1173",
        time: "2025-07-07T21:46:00",
        from: "Milwaukee (MKE)",
        airline: "Delta Air Lines",
        aircraft: "B738 (N3735D)",
        status: "Scheduled"
    },
    {
        flight: "DL1295",
        time: "2025-07-07T21:46:00",
        from: "Fort Lauderdale (FLL)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N669DN)",
        status: "Scheduled"
    },
    {
        flight: "DL1497",
        time: "2025-07-07T21:46:00",
        from: "Orlando (MCO)",
        airline: "Delta Air Lines",
        aircraft: "B753 (N592NW)",
        status: "Scheduled"
    },
    {
        flight: "DL3235",
        time: "2025-07-07T21:46:00",
        from: "Chattanooga (CHA)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N960AT)",
        status: "Scheduled"
    },
    {
        flight: "DL1465",
        time: "2025-07-07T21:47:00",
        from: "San Antonio (SAT)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N119DN)",
        status: "Scheduled"
    },
    {
        flight: "DL2689",
        time: "2025-07-07T21:47:00",
        from: "Nashville (BNA)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N960DZ)",
        status: "Scheduled"
    },
    {
        flight: "WN1287",
        time: "2025-07-07T16:55:00",
        from: "Washington (DCA)",
        airline: "Southwest Airlines",
        aircraft: "B737 (N938WN)",
        status: "Diverted to BNA"
    },
    {
        flight: "DL1109",
        time: "2025-07-07T21:48:00",
        from: "Albuquerque (ABQ)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N819DN)",
        status: "Diverted to DFW"
    },
    {
        flight: "DL2735",
        time: "2025-07-07T21:48:00",
        from: "Windsor Locks (BDL)",
        airline: "Delta Air Lines",
        aircraft: "A320 (N355NW)",
        status: "Scheduled"
    },
    {
        flight: "DL2979",
        time: "2025-07-07T21:48:00",
        from: "Indianapolis (IND)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N927DZ)",
        status: "Scheduled"
    },
    {
        flight: "DL1758",
        time: "2025-07-07T19:47:00",
        from: "Panama City (PTY)",
        airline: "Delta Air Lines",
        aircraft: "B738 (N3762Y)",
        status: "Diverted to SAV"
    },
    {
        flight: "DL1026",
        time: "2025-07-07T21:49:00",
        from: "Minneapolis (MSP)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N923DZ)",
        status: "Diverted to CVG"
    },
    {
        flight: "DL1491",
        time: "2025-07-07T21:49:00",
        from: "Austin (AUS)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N358DN)",
        status: "Scheduled"
    },
    {
        flight: "DL2786",
        time: "2025-07-07T21:49:00",
        from: "Columbus (CMH)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N939DZ)",
        status: "Scheduled"
    },
    {
        flight: "DL3219",
        time: "2025-07-07T21:49:00",
        from: "Savannah (SAV)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N957DZ)",
        status: "Scheduled"
    },
    {
        flight: "DL1978",
        time: "2025-07-07T19:33:00",
        from: "San Salvador (SAL)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N845DN)",
        status: "Diverted to BHM"
    },
    {
        flight: "DL591",
        time: "2025-07-07T21:50:00",
        from: "Las Vegas (LAS)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N551NW)",
        status: "Diverted to DFW"
    },
    {
        flight: "DL715",
        time: "2025-07-07T21:50:00",
        from: "Los Angeles (LAX)",
        airline: "Delta Air Lines",
        aircraft: "B753 (N594NW)",
        status: "Estimated 9:46 PM"
    },
    {
        flight: "DL1946",
        time: "2025-07-07T21:50:00",
        from: "San Juan (SJU)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N919DU)",
        status: "Diverted to MCO"
    },
    {
        flight: "F92171",
        time: "2025-07-07T21:50:00",
        from: "Fort Lauderdale (FLL)",
        airline: "Frontier(Savannah the Yellow-Headed Amazon Livery)",
        aircraft: "A21N (N636FR)",
        status: "Scheduled"
    },
    {
        flight: "DL1769",
        time: "2025-07-07T21:50:00",
        from: "Charlotte (CLT)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N6714Q)",
        status: "Scheduled"
    },
    {
        flight: "DL840",
        time: "2025-07-07T21:51:00",
        from: "Denver (DEN)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N129DN)",
        status: "Diverted to MCI"
    },
    {
        flight: "DL5247",
        time: "2025-07-07T21:51:00",
        from: "Roanoke (ROA)",
        airline: "Delta Connection",
        aircraft: "CRJ9 (N607LR)",
        status: "Scheduled"
    },
    {
        flight: "DL1956",
        time: "2025-07-07T19:49:00",
        from: "Nassau (NAS)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N841DN)",
        status: "Diverted to HSV"
    },
    {
        flight: "DL3228",
        time: "2025-07-07T19:50:00",
        from: "Willemstad (CUR)",
        airline: "Delta Air Lines",
        aircraft: "B738 (N393DA)",
        status: "Diverted to SAV"
    },
    {
        flight: "DL1739",
        time: "2025-07-07T19:35:00",
        from: "Chicago (MDW)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N926AT)",
        status: "Diverted to GSP"
    },
    {
        flight: "DL2625",
        time: "2025-07-07T21:52:00",
        from: "Montreal (YUL)",
        airline: "Delta Air Lines",
        aircraft: "A319 (N326NB)",
        status: "Diverted to RDU"
    },
    {
        flight: "DL2331",
        time: "2025-07-07T21:53:00",
        from: "Jacksonville (JAX)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N378DN)",
        status: "Scheduled"
    },
    {
        flight: "DL3246",
        time: "2025-07-07T21:53:00",
        from: "Raleigh-Durham (RDU)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N904DN)",
        status: "Scheduled"
    },
    {
        flight: "DL3059",
        time: "2025-07-07T21:53:00",
        from: "Pensacola (PNS)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N912DU)",
        status: "Scheduled"
    },
    {
        flight: "",
        time: "2025-07-07T07:29:00",
        from: "Concord (USA)",
        airline: "-",
        aircraft: "CRJ7 (N519JG)",
        status: "Landed 7:55 AM"
    },
    {
        flight: "DL1329",
        time: "2025-07-07T21:55:00",
        from: "Philadelphia (PHL)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N314DN)",
        status: "Scheduled"
    },
    {
        flight: "DL1350",
        time: "2025-07-07T21:55:00",
        from: "Cleveland (CLE)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N911DQ)",
        status: "Scheduled"
    },
    {
        flight: "DL2128",
        time: "2025-07-07T21:55:00",
        from: "Wichita (ICT)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N989AT)",
        status: "Scheduled"
    },
    {
        flight: "DL2364",
        time: "2025-07-07T21:55:00",
        from: "Omaha (OMA)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N988AT)",
        status: "Scheduled"
    },
    {
        flight: "AC1197",
        time: "2025-07-07T21:55:00",
        from: "Montreal (YUL)",
        airline: "Air Canada",
        aircraft: "BCS3 (C-GUPL)",
        status: "Delayed 10:16 PM"
    },
    {
        flight: "DL2541",
        time: "2025-07-07T21:55:00",
        from: "Sarasota (SRQ)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N953DZ)",
        status: "Scheduled"
    },
    {
        flight: "WN3677",
        time: "2025-07-07T21:55:00",
        from: "Orlando (MCO)",
        airline: "Southwest Airlines",
        aircraft: "B738 (N8698B)",
        status: "Scheduled"
    },
    {
        flight: "DL3094",
        time: "2025-07-07T19:14:00",
        from: "Panama City (ECP)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N906AT)",
        status: "Diverted to BHM"
    },
    {
        flight: "DL959",
        time: "2025-07-07T21:56:00",
        from: "West Palm Beach (PBI)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N362DN)",
        status: "Scheduled"
    },
    {
        flight: "DL2176",
        time: "2025-07-07T21:56:00",
        from: "Pittsburgh (PIT)",
        airline: "Delta Air Lines",
        aircraft: "B738 (N380DA)",
        status: "Scheduled"
    },
    {
        flight: "WN1287",
        time: "2025-07-07T16:55:00",
        from: "Washington (DCA)",
        airline: "Southwest Airlines",
        aircraft: "B737 (N938WN)",
        status: "Diverted to BNA"
    },
    {
        flight: "DL675",
        time: "2025-07-07T21:57:00",
        from: "Portland (PDX)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N828DN)",
        status: "Estimated 9:36 PM"
    },
    {
        flight: "DL1346",
        time: "2025-07-07T21:57:00",
        from: "Norfolk (ORF)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N6716C)",
        status: "Scheduled"
    },
    {
        flight: "UA6283",
        time: "2025-07-07T21:57:00",
        from: "Houston (IAH)",
        airline: "United Express",
        aircraft: "E75L (N85340)",
        status: "Scheduled"
    },
    {
        flight: "DL2939",
        time: "2025-07-07T21:57:00",
        from: "Memphis (MEM)",
        airline: "Delta Air Lines",
        aircraft: "B738 (N382DA)",
        status: "Scheduled"
    },
    {
        flight: "DL2060",
        time: "2025-07-07T21:58:00",
        from: "Chicago (MDW)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N995AT)",
        status: "Scheduled"
    },
    {
        flight: "DL2240",
        time: "2025-07-07T21:58:00",
        from: "Santa Ana (SNA)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N709TW)",
        status: "Diverted to DFW"
    },
    {
        flight: "DL488",
        time: "2025-07-07T21:58:00",
        from: "Raleigh-Durham (RDU)",
        airline: "Delta Air Lines",
        aircraft: "A320 (N350NA)",
        status: "Scheduled"
    },
    {
        flight: "DL488",
        time: "2025-07-07T21:58:00",
        from: "Raleigh-Durham (RDU)",
        airline: "Delta Air Lines",
        aircraft: "A320 (N350NA)",
        status: "Scheduled"
    },
    {
        flight: "AA3212",
        time: "2025-07-07T21:59:00",
        from: "Dallas (DFW)",
        airline: "American Airlines",
        aircraft: "A321 (N997AA)",
        status: "Scheduled"
    },
    {
        flight: "DL1393",
        time: "2025-07-07T21:59:00",
        from: "St. Louis (STL)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N962DZ)",
        status: "Scheduled"
    },
    {
        flight: "DL1895",
        time: "2025-07-07T21:59:00",
        from: "Albany (ALB)",
        airline: "Delta Air Lines",
        aircraft: "A320 (N373NW)",
        status: "Scheduled"
    },
    {
        flight: "DL5532",
        time: "2025-07-07T21:59:00",
        from: "Bentonville (XNA)",
        airline: "Delta Connection",
        aircraft: "CRJ9 (N928XJ)",
        status: "Scheduled"
    },
    {
        flight: "AA5528",
        time: "2025-07-07T21:59:00",
        from: "Charlotte (CLT)",
        airline: "American Eagle",
        aircraft: "CRJ9 (N584NN)",
        status: "Scheduled"
    },
    {
        flight: "DL581",
        time: "2025-07-07T19:49:00",
        from: "Oranjestad (AUA)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N354DN)",
        status: "Diverted to GSP"
    },
    {
        flight: "DL1186",
        time: "2025-07-07T19:37:00",
        from: "Tulsa (TUL)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N919AT)",
        status: "Diverted to CHA"
    },
    {
        flight: "DL1254",
        time: "2025-07-07T22:00:00",
        from: "Houston (HOU)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N994AT)",
        status: "Scheduled"
    },
    {
        flight: "DL1530",
        time: "2025-07-07T22:00:00",
        from: "Springfield (SGF)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N933AT)",
        status: "Scheduled"
    },
    {
        flight: "DL1539",
        time: "2025-07-07T22:00:00",
        from: "Tulsa (TUL)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N935AT)",
        status: "Scheduled"
    },
    {
        flight: "DL1897",
        time: "2025-07-07T22:00:00",
        from: "Lexington (LEX)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N922AT)",
        status: "Scheduled"
    },
    {
        flight: "DL1927",
        time: "2025-07-07T22:00:00",
        from: "New Orleans (MSY)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N6704Z)",
        status: "Scheduled"
    },
    {
        flight: "DL2050",
        time: "2025-07-07T22:00:00",
        from: "Buffalo (BUF)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N357DN)",
        status: "Scheduled"
    },
    {
        flight: "DL2780",
        time: "2025-07-07T22:00:00",
        from: "Dallas (DAL)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N946AT)",
        status: "Scheduled"
    },
    {
        flight: "DL2900",
        time: "2025-07-07T22:00:00",
        from: "Birmingham (BHM)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N982AT)",
        status: "Scheduled"
    },
    {
        flight: "DL1604",
        time: "2025-07-07T22:00:00",
        from: "Greensboro (GSO)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N991AT)",
        status: "Scheduled"
    },
    {
        flight: "DL3025",
        time: "2025-07-07T22:00:00",
        from: "Little Rock (LIT)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N954AT)",
        status: "Scheduled"
    },
    {
        flight: "DL3083",
        time: "2025-07-07T22:00:00",
        from: "Destin Fort Walton Beach (VPS)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N965AT)",
        status: "Scheduled"
    },
    {
        flight: "DL3176",
        time: "2025-07-07T22:00:00",
        from: "Jackson (JAN)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N953AT)",
        status: "Scheduled"
    },
    {
        flight: "DL3204",
        time: "2025-07-07T22:00:00",
        from: "Huntsville (HSV)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N942AT)",
        status: "Scheduled"
    },
    {
        flight: "AA3041",
        time: "2025-07-07T22:01:00",
        from: "Philadelphia (PHL)",
        airline: "American Airlines",
        aircraft: "A319 (N730US)",
        status: "Estimated 10:10 PM"
    },
    {
        flight: "DL3564",
        time: "2025-07-07T19:59:00",
        from: "Fort Wayne (FWA)",
        airline: "Delta Connection",
        aircraft: "CRJ9 (N548CA)",
        status: "Diverted to MGM"
    },
    {
        flight: "WN3260",
        time: "2025-07-07T18:55:00",
        from: "San Antonio (SAT)",
        airline: "Southwest Airlines",
        aircraft: "B737 (N7828A)",
        status: "Diverted to BNA"
    },
    {
        flight: "DL3115",
        time: "2025-07-07T22:04:00",
        from: "Augusta (AGS)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N932DZ)",
        status: "Scheduled"
    },
    {
        flight: "DL2803",
        time: "2025-07-07T19:25:00",
        from: "Destin Fort Walton Beach (VPS)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N967AT)",
        status: "Diverted to HSV"
    },
    {
        flight: "DL2086",
        time: "2025-07-07T22:05:00",
        from: "Des Moines (DSM)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N961AT)",
        status: "Scheduled"
    },
    {
        flight: "AA1045",
        time: "2025-07-07T22:06:00",
        from: "Miami (MIA)",
        airline: "American Airlines",
        aircraft: "B738 (N355PU)",
        status: "Scheduled"
    },
    {
        flight: "DL3053",
        time: "2025-07-07T22:07:00",
        from: "Panama City (ECP)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N939AT)",
        status: "Scheduled"
    },
    {
        flight: "AA2391",
        time: "2025-07-07T22:09:00",
        from: "Phoenix (PHX)",
        airline: "American Airlines",
        aircraft: "A320 (N679AW)",
        status: "Estimated 10:08 PM"
    },
    {
        flight: "DL937",
        time: "2025-07-07T19:49:00",
        from: "Tucson (TUS)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N861DN)",
        status: "Diverted to BNA"
    },
    {
        flight: "DL3075",
        time: "2025-07-07T20:46:00",
        from: "Gainesville (GNV)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N980AT)",
        status: "Diverted to JAX"
    },
    {
        flight: "DL1036",
        time: "2025-07-07T19:04:00",
        from: "Minneapolis (MSP)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N856DN)",
        status: "Diverted to HSV"
    },
    {
        flight: "DL2496",
        time: "2025-07-07T19:30:00",
        from: "Philadelphia (PHL)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N392DN)",
        status: "Diverted to GSP"
    },
    {
        flight: "DL904",
        time: "2025-07-07T19:44:00",
        from: "Sacramento (SMF)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N829DN)",
        status: "Diverted to BHM"
    },
    {
        flight: "DL1979",
        time: "2025-07-07T20:02:00",
        from: "San Antonio (SAT)",
        airline: "Delta Air Lines",
        aircraft: "A320 (N337NW)",
        status: "Diverted to BHM"
    },
    {
        flight: "DL787",
        time: "2025-07-07T19:49:00",
        from: "Spokane (GEG)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N877DN)",
        status: "Diverted to HSV"
    },
    {
        flight: "WN1938",
        time: "2025-07-07T20:20:00",
        from: "Houston (HOU)",
        airline: "Southwest Airlines",
        aircraft: "B737 (N7824A)",
        status: "Diverted to BNA"
    },
    {
        flight: "WN3260",
        time: "2025-07-07T18:55:00",
        from: "San Antonio (SAT)",
        airline: "Southwest Airlines",
        aircraft: "B737 (N7828A)",
        status: "Diverted to BNA"
    },
    {
        flight: "UA1877",
        time: "2025-07-07T22:13:00",
        from: "New York (EWR)",
        airline: "United Airlines",
        aircraft: "B38M (N27366)",
        status: "Scheduled"
    },
    {
        flight: "DL1972",
        time: "2025-07-07T19:10:00",
        from: "Knoxville (TYS)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N963AT)",
        status: "Diverted to AGS"
    },
    {
        flight: "DL1397",
        time: "2025-07-07T20:31:00",
        from: "Austin (AUS)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N863DN)",
        status: "Diverted to HSV"
    },
    {
        flight: "WN1938",
        time: "2025-07-07T20:20:00",
        from: "Houston (HOU)",
        airline: "Southwest Airlines",
        aircraft: "B737 (N7824A)",
        status: "Diverted to BNA"
    },
    {
        flight: "WN469",
        time: "2025-07-07T20:00:00",
        from: "Austin (AUS)",
        airline: "Southwest Airlines",
        aircraft: "B738 (N8508W)",
        status: "Diverted to ECP"
    },
    {
        flight: "DL2170",
        time: "2025-07-07T18:15:00",
        from: "New York (JFK)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N864DN)",
        status: "Diverted to AGS"
    },
    {
        flight: "DL1956",
        time: "2025-07-07T19:49:00",
        from: "Nassau (NAS)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N841DN)",
        status: "Diverted to HSV"
    },
    {
        flight: "DL1831",
        time: "2025-07-07T18:39:00",
        from: "Guatemala City (GUA)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N67171)",
        status: "Diverted to SAV"
    },
    {
        flight: "DL554",
        time: "2025-07-07T19:30:00",
        from: "Seattle (SEA)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N922DZ)",
        status: "Diverted to BHM"
    },
    {
        flight: "DL932",
        time: "2025-07-07T19:47:00",
        from: "San Diego (SAN)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N388DN)",
        status: "Diverted to BNA"
    },
    {
        flight: "F92871",
        time: "2025-07-07T19:28:00",
        from: "San Juan (SJU)",
        airline: "Frontier (Joaquin the Kit Fox Livery)",
        aircraft: "A20N (N387FR)",
        status: "Diverted to CLT"
    },
    {
        flight: "DL921",
        time: "2025-07-07T19:54:00",
        from: "Dallas (DFW)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N360DN)",
        status: "Diverted to PNS"
    },
    {
        flight: "DL957",
        time: "2025-07-07T20:23:00",
        from: "Denver (DEN)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N106DN)",
        status: "Diverted to BNA"
    },
    {
        flight: "NK2348",
        time: "2025-07-07T22:22:00",
        from: "Minneapolis (MSP)",
        airline: "Spirit Airlines",
        aircraft: "A21N (N741NK)",
        status: "Delayed 10:40 PM"
    },
    {
        flight: "DL3134",
        time: "2025-07-07T18:34:00",
        from: "Indianapolis (IND)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N950DZ)",
        status: "Diverted to CHS"
    },
    {
        flight: "DL874",
        time: "2025-07-07T19:55:00",
        from: "Boise (BOI)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N390DN)",
        status: "Diverted to HSV"
    },
    {
        flight: "DL2152",
        time: "2025-07-07T20:18:00",
        from: "Milwaukee (MKE)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N301DV)",
        status: "Diverted to CHS"
    },
    {
        flight: "DL2058",
        time: "2025-07-07T20:00:00",
        from: "Grand Rapids (GRR)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N899DN)",
        status: "Diverted to CHA"
    },
    {
        flight: "DL796",
        time: "2025-07-07T20:28:00",
        from: "Phoenix (PHX)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N550NW)",
        status: "Diverted to MEM"
    },
    {
        flight: "NK2352",
        time: "2025-07-07T20:15:00",
        from: "Los Angeles (LAX)",
        airline: "Spirit Airlines",
        aircraft: "A21N (N718NK)",
        status: "Diverted to BNA"
    },
    {
        flight: "DL2862",
        time: "2025-07-07T20:50:00",
        from: "Oklahoma City (OKC)",
        airline: "Delta Air Lines",
        aircraft: "B712 (N895AT)",
        status: "Diverted to MEM"
    },
    {
        flight: "DL37",
        time: "2025-07-07T19:30:00",
        from: "London (LHR)",
        airline: "Delta Air Lines",
        aircraft: "A339 (N409DX)",
        status: "Diverted to CLT"
    },
    {
        flight: "DL32",
        time: "2025-07-07T21:05:00",
        from: "Dallas (DFW)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N311DN)",
        status: "Diverted to ECP"
    },
    {
        flight: "DL1386",
        time: "2025-07-07T20:20:00",
        from: "Miami (MIA)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N698DL)",
        status: "Diverted to JAX"
    },
    {
        flight: "AA2910",
        time: "2025-07-07T14:54:00",
        from: "Chicago (ORD)",
        airline: "American Airlines",
        aircraft: "A319 (N804AW)",
        status: "Diverted to CLT"
    },
    {
        flight: "B61317",
        time: "2025-07-07T18:16:00",
        from: "Boston (BOS)",
        airline: "JetBlue",
        aircraft: "BCS3 (N3242J)",
        status: "Diverted to SAV"
    },
    {
        flight: "DL1457",
        time: "2025-07-07T22:37:00",
        from: "Tampa (TPA)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N542US)",
        status: "Canceled"
    },
    {
        flight: "DL395",
        time: "2025-07-07T20:46:00",
        from: "Los Angeles (LAX)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N329DN)",
        status: "Diverted to MEM"
    },
    {
        flight: "DL1110",
        time: "2025-07-07T19:42:00",
        from: "Fort Myers (RSW)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N925DZ)",
        status: "Diverted to TLH"
    },
    {
        flight: "DL599",
        time: "2025-07-07T21:05:00",
        from: "Mexico City (MEX)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N6715C)",
        status: "Diverted to BNA"
    },
    {
        flight: "",
        time: "2025-07-07T07:29:00",
        from: "Concord (USA)",
        airline: "-",
        aircraft: "CRJ7 (N519JG)",
        status: "Landed 7:55 AM"
    },
    {
        flight: "DL921",
        time: "2025-07-07T19:54:00",
        from: "Dallas (DFW)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N360DN)",
        status: "Diverted to PNS"
    },
    {
        flight: "WN329",
        time: "2025-07-07T18:40:00",
        from: "Tampa (TPA)",
        airline: "Southwest Airlines",
        aircraft: "B38M (N8943Q)",
        status: "Diverted to BNA"
    },
    {
        flight: "DL2892",
        time: "2025-07-07T19:53:00",
        from: "Columbus (CMH)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N933DZ)",
        status: "Diverted to CAE"
    },
    {
        flight: "DL964",
        time: "2025-07-07T20:47:00",
        from: "New York (LGA)",
        airline: "Delta Air Lines",
        aircraft: "A321",
        status: "Diverted to RDU"
    },
    {
        flight: "DL406",
        time: "2025-07-07T20:10:00",
        from: "Bozeman (BZN)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N6702)",
        status: "Diverted to BNA"
    },
    {
        flight: "UA1305",
        time: "2025-07-07T22:45:00",
        from: "Denver (DEN)",
        airline: "United Airlines",
        aircraft: "A319 (N842UA)",
        status: "Estimated 10:27 PM"
    },
    {
        flight: "DL2345",
        time: "2025-07-07T20:45:00",
        from: "Fort Lauderdale (FLL)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N544US)",
        status: "Diverted to JAX"
    },
    {
        flight: "3S456",
        time: "2025-07-07T20:25:00",
        from: "Frankfurt (FRA)",
        airline: "DHL",
        aircraft: "B77L (D-AALT)",
        status: "Diverted to CVG"
    },
    {
        flight: "DL1328",
        time: "2025-07-07T22:46:00",
        from: "Miami (MIA)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N6713Y)",
        status: "Scheduled"
    },
    {
        flight: "DL1848",
        time: "2025-07-07T19:39:00",
        from: "San Jose del Cabo (SJD)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N6707A)",
        status: "Diverted to BNA"
    },
    {
        flight: "DL1619",
        time: "2025-07-07T22:47:00",
        from: "Fort Lauderdale (FLL)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N6706Q)",
        status: "Scheduled"
    },
    {
        flight: "DL2035",
        time: "2025-07-07T22:47:00",
        from: "Orlando (MCO)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N668DN)",
        status: "Scheduled"
    },
    {
        flight: "DL2759",
        time: "2025-07-07T20:20:00",
        from: "New Orleans (MSY)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N818DA)",
        status: "Diverted to CHS"
    },
    {
        flight: "DL809",
        time: "2025-07-07T20:09:00",
        from: "San Jose (SJC)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N814DN)",
        status: "Diverted to BNA"
    },
    {
        flight: "NK2710",
        time: "2025-07-07T19:30:00",
        from: "New Orleans (MSY)",
        airline: "Spirit Airlines",
        aircraft: "A21N (N710NK)",
        status: "Diverted to MYR"
    },
    {
        flight: "F9124",
        time: "2025-07-07T19:57:00",
        from: "Montego Bay (MBJ)",
        airline: "Frontier (Ed, Edwin & Eddie the Penguins Livery)",
        aircraft: "A20N (N344FR)",
        status: "Diverted to CLT"
    },
    {
        flight: "DL832",
        time: "2025-07-07T22:51:00",
        from: "Washington (DCA)",
        airline: "Delta Air Lines",
        aircraft: "A320 (N367NW)",
        status: "Scheduled"
    },
    {
        flight: "DL1485",
        time: "2025-07-07T20:21:00",
        from: "St. Louis (STL)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N952DZ)",
        status: "Diverted to SDF"
    },
    {
        flight: "DL1984",
        time: "2025-07-07T20:39:00",
        from: "Bridgetown (BGI)",
        airline: "Delta Air Lines",
        aircraft: "B738 (N3743H)",
        status: "Diverted to JAX"
    },
    {
        flight: "DL2714",
        time: "2025-07-07T20:48:00",
        from: "Toronto (YYZ)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N342DN)",
        status: "Diverted to CVG"
    },
    {
        flight: "DL1028",
        time: "2025-07-07T20:47:00",
        from: "Minneapolis (MSP)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N809DN)",
        status: "Diverted to BNA"
    },
    {
        flight: "DL1946",
        time: "2025-07-07T21:50:00",
        from: "San Juan (SJU)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N919DU)",
        status: "Diverted to MCO"
    },
    {
        flight: "DL1785",
        time: "2025-07-07T20:34:00",
        from: "Vieux Fort (UVF)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N684DA)",
        status: "Diverted to CHS"
    },
    {
        flight: "B6697",
        time: "2025-07-07T22:53:00",
        from: "Boston (BOS)",
        airline: "JetBlue",
        aircraft: "A320 (N656JB)",
        status: "Delayed 11:16 PM"
    },
    {
        flight: "DL1660",
        time: "2025-07-07T20:35:00",
        from: "Kansas City (MCI)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N948DZ)",
        status: "Diverted to BNA"
    },
    {
        flight: "DL2047",
        time: "2025-07-07T20:35:00",
        from: "Rochester (ROC)",
        airline: "Delta Air Lines",
        aircraft: "A320 (N340NW)",
        status: "Diverted to CLT"
    },
    {
        flight: "WN329",
        time: "2025-07-07T18:40:00",
        from: "Tampa (TPA)",
        airline: "Southwest Airlines",
        aircraft: "B38M (N8943Q)",
        status: "Diverted to BNA"
    },
    {
        flight: "DL3231",
        time: "2025-07-07T19:39:00",
        from: "San Jose (SJO)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N667DN)",
        status: "Diverted to SAV"
    },
    {
        flight: "DL1028",
        time: "2025-07-07T20:47:00",
        from: "Minneapolis (MSP)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N809DN)",
        status: "Diverted to BNA"
    },
    {
        flight: "DL2322",
        time: "2025-07-07T17:51:00",
        from: "New York (EWR)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N332DN)",
        status: "Diverted to JAX"
    },
    {
        flight: "DL5435",
        time: "2025-07-07T18:47:00",
        from: "White Plains (HPN)",
        airline: "Delta Connection",
        aircraft: "CRJ9 (N146PQ)",
        status: "Diverted to RDU"
    },
    {
        flight: "DL1987",
        time: "2025-07-07T21:00:00",
        from: "Montego Bay (MBJ)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N336DX)",
        status: "Diverted to TPA"
    },
    {
        flight: "DL436",
        time: "2025-07-07T23:03:00",
        from: "Dallas (DFW)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N305DN)",
        status: "Scheduled"
    },
    {
        flight: "NK2710",
        time: "2025-07-07T19:30:00",
        from: "New Orleans (MSY)",
        airline: "Spirit Airlines",
        aircraft: "A21N (N710NK)",
        status: "Diverted to MYR"
    },
    {
        flight: "DL2293",
        time: "2025-07-07T20:23:00",
        from: "New York (JFK)",
        airline: "Delta Air Lines",
        aircraft: "B739 (N890DN)",
        status: "Diverted to GSO"
    },
    {
        flight: "DL597",
        time: "2025-07-07T17:59:00",
        from: "Cancun (CUN)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N670DN)",
        status: "Diverted to BNA"
    },
    {
        flight: "DL759",
        time: "2025-07-07T19:19:00",
        from: "Tampa (TPA)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N699DL)",
        status: "Diverted to TLH"
    },
    {
        flight: "DL1477",
        time: "2025-07-07T18:49:00",
        from: "Chicago (ORD)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N350DN)",
        status: "Diverted to MEM"
    },
    {
        flight: "DL5013",
        time: "2025-07-07T21:08:00",
        from: "White Plains (HPN)",
        airline: "Delta Connection",
        aircraft: "CRJ9 (N491PX)",
        status: "Diverted to RDU"
    },
    {
        flight: "DL560",
        time: "2025-07-07T23:09:00",
        from: "Seattle (SEA)",
        airline: "Delta Air Lines",
        aircraft: "B753 (N585NW)",
        status: "Estimated 10:46 PM"
    },
    {
        flight: "DL2857",
        time: "2025-07-07T20:35:00",
        from: "Harrisburg (MDT)",
        airline: "Delta Air Lines",
        aircraft: "A320 (N319US)",
        status: "Diverted to RDU"
    },
    {
        flight: "F94316",
        time: "2025-07-07T20:49:00",
        from: "Los Angeles (LAX)",
        airline: "Frontier (Wiley the Bison Livery)",
        aircraft: "A20N (N313FR)",
        status: "Diverted to MEM"
    },
    {
        flight: "DL1131",
        time: "2025-07-07T23:12:00",
        from: "Houston (IAH)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N317DN)",
        status: "Scheduled"
    },
    {
        flight: "DL2879",
        time: "2025-07-07T23:12:00",
        from: "Chicago (ORD)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N337DN)",
        status: "Scheduled"
    },
    {
        flight: "DL975",
        time: "2025-07-07T23:13:00",
        from: "New York (LGA)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N120DN)",
        status: "Canceled"
    },
    {
        flight: "DL1060",
        time: "2025-07-07T23:17:00",
        from: "Austin (AUS)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N315DN)",
        status: "Scheduled"
    },
    {
        flight: "DL750",
        time: "2025-07-07T23:18:00",
        from: "San Francisco (SFO)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N705TW)",
        status: "Estimated 10:52 PM"
    },
    {
        flight: "DL905",
        time: "2025-07-07T23:19:00",
        from: "Salt Lake City (SLC)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N107DN)",
        status: "Estimated 11:12 PM"
    },
    {
        flight: "DL1720",
        time: "2025-07-07T17:57:00",
        from: "Tampa (TPA)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N548US)",
        status: "Diverted to JAX"
    },
    {
        flight: "F94405",
        time: "2025-07-07T20:51:00",
        from: "Miami (MIA)",
        airline: "Frontier (Elrey the Elk Livery)",
        aircraft: "A20N (N370FR)",
        status: "Diverted to TPA"
    },
    {
        flight: "WN3546",
        time: "2025-07-07T23:25:00",
        from: "New York (LGA)",
        airline: "Southwest Airlines",
        aircraft: "B737",
        status: "Scheduled"
    },
    {
        flight: "F92400",
        time: "2025-07-07T20:05:00",
        from: "Houston (IAH)",
        airline: "Frontier (Brazos the Ridgway's Hawk)",
        aircraft: "A21N (N658FR)",
        status: "Diverted to BNA"
    },
    {
        flight: "DL466",
        time: "2025-07-07T20:21:00",
        from: "Las Vegas (LAS)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N687DL)",
        status: "Diverted to PNS"
    },
    {
        flight: "DL969",
        time: "2025-07-07T18:38:00",
        from: "New York (LGA)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N396DN)",
        status: "Diverted to CHS"
    },
    {
        flight: "DL968",
        time: "2025-07-07T19:43:00",
        from: "New York (LGA)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N112DN)",
        status: "Diverted to CLT"
    },
    {
        flight: "DL2240",
        time: "2025-07-07T21:58:00",
        from: "Santa Ana (SNA)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N709TW)",
        status: "Diverted to DFW"
    },
    {
        flight: "DL2690",
        time: "2025-07-07T21:27:00",
        from: "Syracuse (SYR)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N331DN)",
        status: "Diverted to GSO"
    },
    {
        flight: "F93975",
        time: "2025-07-07T23:32:00",
        from: "Orlando (MCO)",
        airline: "Frontier (Poppy the Prairie Dog Livery)",
        aircraft: "A20N (N303FR)",
        status: "Scheduled"
    },
    {
        flight: "DL540",
        time: "2025-07-07T21:33:00",
        from: "San Diego (SAN)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N393DN)",
        status: "Diverted to PNS"
    },
    {
        flight: "DL840",
        time: "2025-07-07T21:51:00",
        from: "Denver (DEN)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N129DN)",
        status: "Diverted to MCI"
    },
    {
        flight: "WN4079",
        time: "2025-07-07T23:35:00",
        from: "Houston (HOU)",
        airline: "Southwest Airlines",
        aircraft: "B38M (N8905Q)",
        status: "Scheduled"
    },
    {
        flight: "NK2358",
        time: "2025-07-07T23:37:00",
        from: "Dallas (DFW)",
        airline: "Spirit Airlines",
        aircraft: "A21N (N725NK)",
        status: "Scheduled"
    },
    {
        flight: "B6719",
        time: "2025-07-07T23:40:00",
        from: "New York (JFK)",
        airline: "JetBlue",
        aircraft: "A320 (N636JB)",
        status: "Canceled"
    },
    {
        flight: "WN2158",
        time: "2025-07-07T23:40:00",
        from: "Dallas (DAL)",
        airline: "Southwest Airlines",
        aircraft: "B737 (N7863A)",
        status: "Scheduled"
    },
    {
        flight: "UA283",
        time: "2025-07-07T23:44:00",
        from: "Houston (IAH)",
        airline: "United Airlines",
        aircraft: "A319 (N824UA)",
        status: "Scheduled"
    },
    {
        flight: "F92871",
        time: "2025-07-07T19:28:00",
        from: "San Juan (SJU)",
        airline: "Frontier (Joaquin the Kit Fox Livery)",
        aircraft: "A20N (N387FR)",
        status: "Diverted to CLT"
    },
    {
        flight: "DL2625",
        time: "2025-07-07T21:52:00",
        from: "Montreal (YUL)",
        airline: "Delta Air Lines",
        aircraft: "A319 (N326NB)",
        status: "Diverted to RDU"
    },
    {
        flight: "DL1653",
        time: "2025-07-07T23:50:00",
        from: "Detroit (DTW)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N658DL)",
        status: "Scheduled"
    },
    {
        flight: "DL531",
        time: "2025-07-07T21:38:00",
        from: "San Francisco (SFO)",
        airline: "Delta Air Lines",
        aircraft: "B763 (N177DN)",
        status: "Diverted to MCI"
    },
    {
        flight: "DL900",
        time: "2025-07-07T23:54:00",
        from: "Boston (BOS)",
        airline: "Delta Air Lines",
        aircraft: "A321 (N307DX)",
        status: "Scheduled"
    },
    {
        flight: "DL1032",
        time: "2025-07-07T23:54:00",
        from: "Minneapolis (MSP)",
        airline: "Delta Air Lines",
        aircraft: "B752 (N6710E)",
        status: "Scheduled"
    },
    {
        flight: "AA3579",
        time: "2025-07-07T23:58:00",
        from: "Charlotte (CLT)",
        airline: "American Eagle",
        aircraft: "E75L (N264NN)",
        status: "Canceled"
    },
    {
        flight: "AA4480",
        time: "2025-07-07T23:58:00",
        from: "Washington (DCA)",
        airline: "American Eagle",
        aircraft: "E75L (N419YX)",
        status: "Canceled"
    },
    {
        flight: "UA2677",
        time: "2025-07-07T23:59:00",
        from: "Washington (IAD)",
        airline: "United Airlines",
        aircraft: "B38M (N47282)",
        status: "Scheduled"
    },
    {
        flight: "AA2749",
        time: "2025-07-07T23:59:00",
        from: "Dallas (DFW)",
        airline: "American Airlines",
        aircraft: "B738 (N973NN)",
        status: "Scheduled"
    },
    {
        flight: "AS492",
        time: "2025-07-07T23:59:00",
        from: "Seattle (SEA)",
        airline: "Alaska Airlines",
        aircraft: "B739 (N297AK)",
        status: "Estimated 11:52 PM"
    }
];

export default MockArrivalData;