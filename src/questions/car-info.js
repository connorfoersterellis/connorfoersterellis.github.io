
import {
    BentleyBentayga,
    CadillacCT5VBlackwing,
    ChevroletCorvetteC3,
    ChevroletCorvetteC2,
    ChevroletElCaminoSS,
    DodgeChallengerSRTDemon,
    GMCHummerEVSUV,
    JeepWrangler,
    MazdaMX5MiataNA,
    PlymouthProwler,
    Polestar2,
    PorscheBoxster986,
    SubaruBaja,
    SubaruOutback,
    TeslaModel3,
    ToyotaCorollaXSEHatchback,
    VolvoV70R,
    HondaAccord,
    ChryslerPTCruiser,
    FordF150
} from "../silhouttes/export-helper"


const carInfo = {
    ElCamino: {
        Name: "El Camino",
        Link: "https://en.wikipedia.org/wiki/Chevrolet_El_Camino",
        Picture: "https://upload.wikimedia.org/wikipedia/commons/4/45/ElCamino1979_0969.jpg",
        Description: "The Chevrolet El Camino is a coupé utility vehicle that was produced by Chevrolet between 1959–60 and 1964–1987. Unlike a standard pickup truck, the El Camino was adapted from a two-door station wagon platform that integrated the cab and cargo bed into the body.",
        Silhoutte: ChevroletElCaminoSS,
        Reason:"The El Camino is literally a mullet on wheels. Business in the front, party in the back. Also your motorcycle could fit back there."
    },
    SubaruBaja: {
        Name: "Subaru Baja",
        Link: "https://en.wikipedia.org/wiki/Subaru_Baja",
        Picture: "https://en.wikipedia.org/wiki/File:Subaru_Baja_2.5_2003_(13155493485).jpg",
        Description: "The Subaru Baja is an all-wheel-drive, four passenger, four-door coupe utility manufactured from 2002 to 2006 by Subaru and marketed for model years 2003 to 2006.",
        Silhoutte: SubaruBaja,
        Reason:"The Baja is a mullet of a car. Because of the mountain bike pick, you get the subaru mullet car."
    },
    VolkswagenType2: {
        Name: "Volkswagen Type 2",
        Link: "https://en.wikipedia.org/wiki/Volkswagen_Type_2",
        Picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/0385_Porsche_Diesel_Bus_blau.jpg/798px-0385_Porsche_Diesel_Bus_blau.jpg",
        Description: "The Volkswagen Type 2, known officially (depending on body type) as the Transporter, Kombi or Microbus, or, informally, as the Bus (US) or Camper (UK), is a forward control light commercial vehicle introduced in 1950 by the German automaker Volkswagen as its second car model.",
        Reason:"Dude, showers are overrated. You can just live in your van down by the river. Rivers are free showers."
    },
    SherpUTV: {
        Name: "Sherp UTV",
        Link: "https://en.wikipedia.org/wiki/Sherp",
        Picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Freedom_Convoy_2022%2C_Ottawa%2C_February_12_%2856%29.jpg/1200px-Freedom_Convoy_2022%2C_Ottawa%2C_February_12_%2856%29.jpg",
        Description: "SHERP is a Ukrainian UTV designed for rough and soggy terrain. The company is certified with international quality standards ISO 9001 and its headquartered in Kyiv (Ukraine). Its vehicles are sold all over the world through a wide dealership network including ARGO and STREIT Group.",
        Reason:"Dude, what are you up to!? You're not going to the grocery store, you're going to the MOON."
    },
    JeepWrangler: {
        Name: "Jeep Wrangler",
        Link: "https://en.wikipedia.org/wiki/Jeep_Wrangler",
        Picture: "https://pictures.dealer.com/e/elgincdjramcllc/1985/3f52dcf1131eef90453a35ed2f358123x.jpg?impolicy=downsize_bkpt&w=2500",
        Description: "The Jeep Wrangler is a series of compact and mid-size (2-door Wrangler, and a longer wheelbase / 4-door Wrangler Unlimited) four-wheel drive off-road SUVs, manufactured by Jeep since 1986, and currently in its fourth generation.",
        Silhoutte: JeepWrangler,
        Reason:"The Jeep Wrangler without any doors on it looks like a flip flop. Also most flip flop drivers are Jeep Wrangler drivers."
    },
    PantherDeVille: {
        Name: "1977 Panther De Ville",
        Link: "https://en.wikipedia.org/wiki/Panther_De_Ville",
        Picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Cruella_de_Vil_Panther.jpg/1280px-Cruella_de_Vil_Panther.jpg",
        Description: "The Panther De Ville is a neo-classic luxury vehicle which was produced by Panther Westwinds, a British specialty maker, from 1974 to 1985. The car was conceived by Robert Jankel to appeal to the tastes of nouveau riche customers.",
        Reason:"'I'm looking for a car that could fit ~100 dogs'"
    },
    DodgeRamb250: {
        Name: "Dodge Ram b250",
        Link: "https://en.wikipedia.org/wiki/Dodge_Ram_Van",
        Picture: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Dodge-Ram-Wagon.jpg",
        Description: "The Dodge Ram Van (also known as the Dodge B-series) is a range of full-size vans that were produced by Chrysler Corporation from the 1971 to 2003 model years. Replacing the Dodge A100, the Ram Van transitioned to a front-engine drivetrain configuration. Mostly offered as a cargo van and a passenger van, the model line was also initially offered as a cutaway van chassis.",
        Reason:"This thing probably has 300k miles and the carpet is sticky. Those poor speakers have seen too many 11/4 breakdowns."
    },
    ScionXBinHotLavaOrange: {
        Name: "Scion XB in Hot Lava Orange",
        Link: "https://en.wikipedia.org/wiki/Scion_xB",
        Picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/2004-Scion-xB-RS-1.0.jpg/800px-2004-Scion-xB-RS-1.0.jpg",
        Description: "The Scion xB is a compact car (subcompact car in its first generation) made by Toyota for the United States market and sold under their youth-oriented Scion brand. It is a box-shaped, 5-door hatchback.",
        Reason:"'Nobody loves me, nobody cares, Nobody loves me, nobody owes me a thing, Nobody loves me, nobody cares, Nobody loves me, maybe I’ll go eat worms' -Fred Durst"
    },
    VolkswagenPolo: {
        Name: "1975 Volkswagen Polo MK1",
        Link: "https://en.wikipedia.org/wiki/Volkswagen_Polo",
        Picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/VW_Polo_I_front_20090810.jpg/1920px-VW_Polo_I_front_20090810.jpg",
        Description: "The Volkswagen Polo is a supermini car (B-segment) produced by the German automotive manufacturer Volkswagen since 1975. It is sold in Europe and other markets worldwide in hatchback, sedan and estate variants.",
        Reason:"If the speakers in this thing still worked, you know polka would be blasting."
    },
    ToyotaCorollaStationWagon: {
        Name: "Toyota Corolla Station Wagon",
        Link: "https://en.wikipedia.org/wiki/Toyota_Corolla_(E100)",
        Picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Toyota_Corolla_Wagon_1.6_L-Touring_Limited_4WD_AE104G.JPG/1920px-Toyota_Corolla_Wagon_1.6_L-Touring_Limited_4WD_AE104G.JPG",
        Description: "The Toyota Corolla is a line of subcompact and compact cars manufactured by Toyota. Introduced in 1966, the Corolla was the best-selling car worldwide by 1974 and has been one of the best-selling cars in the world since then.",
        Silhoutte: ToyotaCorollaXSEHatchback,
        Reason:"The only car that is more depressed than its driver."
    },
    BenzPatentMotorwagen: {
        Name: "Benz Patent Motorwagen",
        Link: "https://en.wikipedia.org/wiki/Benz_Patent-Motorwagen",
        Picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/1885Benz.jpg/800px-1885Benz.jpg",
        Description: "The Benz Patent-Motorwagen (or motorcar), built in 1885, is widely regarded as the world's first automobile; that is, a vehicle designed to be propelled by an internal combustion engine. The original cost of the vehicle in 1885 was $1,000.",
        Reason:"You need a degree to drive this thing. Also, you need a personal blacksmith to fix it. I hope your happy with all the horses you scared."
    },
    BMWi3: {
        Name: "BMW i3",
        Link: "https://en.wikipedia.org/wiki/BMW_i3",
        Picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/2018_BMW_i3_facelift_%281%29.jpg/800px-2018_BMW_i3_facelift_%281%29.jpg",
        Description: "The BMW i3 is a B-class, high-roof hatchback manufactured and marketed by BMW with an electric powertrain using rear wheel drive via a single-speed transmission and featuring an underfloor Li-ion battery pack.",
        Reason:"You are a techy person but not an IPhone owner. I bet you know what a raspberry pi is."
    },
    Polestar2: {
        Name: "Polestar 2",
        Link: "https://en.wikipedia.org/wiki/Polestar_2",
        Picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Polestar_2_%E2%80%93_f_02042021.jpg/1920px-Polestar_2_%E2%80%93_f_02042021.jpg",
        Description: "The Polestar 2 is a fully electric 5-door fastback developed and produced by Polestar. It was unveiled on 27 February 2019 and production started in March 2020.",
        Silhoutte: Polestar2,
        Reason:"You watch Marques Brownlee but you don't buy anything in his videos."
    },
    FiskerKarma: {
        Name: "Fisker Karma",
        Link: "https://en.wikipedia.org/wiki/Fisker_Karma",
        Picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Fisker_Karma_EVer_EcoChic_%E2%80%93_Frontansicht_%281%29%2C_6._Juni_2012%2C_D%C3%BCsseldorf.jpg/800px-Fisker_Karma_EVer_EcoChic_%E2%80%93_Frontansicht_%281%29%2C_6._Juni_2012%2C_D%C3%BCsseldorf.jpg",
        Description: "The Fisker Karma is a luxury plug-in range-extended electric sports sedan produced by Fisker Automotive in 2012. The cars were manufactured at Valmet Automotive in Finland. Production was suspended in November 2012 when the sole battery supplier to Fisker Automotive, A123 Systems, filed for bankruptcy following two battery recalls. Fisker Automotive was unable to carry on production of the Fisker Karma in the absence of its sole battery supplier, with about 2,450 Karmas built since 2011.",
        Reason:"Fisker just went bankrupt AGAIN. You had tech flavored mid-life crisis about 12 years ago."
    },
    TeslaModel3: {
        Name: "Tesla Model 3",
        Link: "https://en.wikipedia.org/wiki/Tesla_Model_3",
        Picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/2019_Tesla_Model_3_Performance_AWD_Front.jpg/800px-2019_Tesla_Model_3_Performance_AWD_Front.jpg",
        Description: "The Tesla Model 3 is an electric four-door fastback sedan developed by Tesla. The Model 3 Standard Range Plus version delivers an EPA-rated all-electric range of 263 miles (423 km) and the Long Range versions deliver 353 miles (568 km).",
        Silhoutte: TeslaModel3,
        Reason:"You watch Marques Brownlee and you buy everything in his videos."
    },
    BentleyBentayga: {
        Name: "Bentley Bentayga",
        Link: "https://en.wikipedia.org/wiki/Bentley_Bentayga",
        Picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Bentley_Bentayga_V8_%28FL%29_IMG_0005.jpg/800px-Bentley_Bentayga_V8_%28FL%29_IMG_0005.jpg",
        Description: "The Bentley Bentayga is a full-size luxury crossover SUV manufactured by British luxury car manufacturer Bentley. The Bentayga was launched in 2015 and is the first SUV launched by the British luxury car manufacturer.",
        Silhoutte: BentleyBentayga,
        Reason:"You don't know how to use your expensive watch. You don't drive the car yourself. The braces you had when you were 9 now describe the front grll of your luxury SUV."
    },
    RollsRoyceCullinan: {
        Name: "Rolls-Royce Cullinan",
        Link: "https://en.wikipedia.org/wiki/Rolls-Royce_Cullinan",
        Picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/2019_Rolls-Royce_Cullinan_V12_Automatic_6.75_Front.jpg/800px-2019_Rolls-Royce_Cullinan_V12_Automatic_6.75_Front.jpg",
        Description: "The Rolls-Royce Cullinan is a full-sized luxury SUV produced by Rolls-Royce Motor Cars. The Cullinan is the first SUV to be launched by the Rolls-Royce marque, and is also the brand's first all-wheel drive vehicle.",
        Reason:"You don't know how to use your expensive watch. You don't drive the car yourself. You were just born into crazy money and luck. Like the perfect teeth you were naturally born with. That is, if you haven't covered them with veneers."
    },
    LucidAir: {
        Name: "Lucid Air",
        Link: "https://en.wikipedia.org/wiki/Lucid_Air",
        Picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/2022_Lucid_Air_Grand_Touring_in_Zenith_Red%2C_front_left.jpg/800px-2022_Lucid_Air_Grand_Touring_in_Zenith_Red%2C_front_left.jpg",
        Description: "The Lucid Air is a luxury electric car produced by American automotive company Lucid Motors. The car was unveiled in December 2016, and the production version was presented in September 2020.",
        Reason:"I have a dentist uncle with a Lucid, I legally have to put this car in here."
    },
    HondaAccord: {
        Name: "Honda Accord",
        Link: "https://en.wikipedia.org/wiki/Honda_Accord",
        Picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/2023_Honda_Accord_LX%2C_front_left%2C_07-13-2023.jpg/800px-2023_Honda_Accord_LX%2C_front_left%2C_07-13-2023.jpg",
        Description: "The Honda Accord is a series of automobiles manufactured by Honda since 1976, best known for its four-door sedan variant, which has been one of the best-selling cars in the United States since 1989.",
        Silhoutte: HondaAccord,
        Reason:"You are a responsible adult. You are on time every time. You have a 401k and you know what that means. You have a Costco membership and you know what that means. You have a Honda Accord and you know what that means."
    },
    SubaruOutback: {
        Name: "Subaru Outback",
        Link: "https://en.wikipedia.org/wiki/Subaru_Outback",
        Picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/2023_Subaru_Outback_Premium%2C_front_right%2C_09-09-2023.jpg/800px-2023_Subaru_Outback_Premium%2C_front_right%2C_09-09-2023.jpg",
        Description: "The Subaru Outback is an automotive nameplate used by the Japanese automaker Subaru for two different vehicles: a Legacy-based station wagon (1994–2022) and a crossover SUV (2022–present).",
        Silhoutte: SubaruOutback,
        Reason:"You thought about doing a 'mud run' once. You have a dog that you take on hikes."
    },
    PorscheBoxster: {
        Name: "Porsche Boxster",
        Link: "https://en.wikipedia.org/wiki/Porsche_Boxster",
        Picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/1999_Porsche_Boxster_%2843627278335%29_%28cropped%29.jpg/800px-1999_Porsche_Boxster_%2843627278335%29_%28cropped%29.jpg",
        Description: "Th Porsche Boxster is a mid-engine two-seater roadster built by Porsche. The Boxster is Porsche's first road vehicle to be originally designed as a roadster since the 550 Spyder.",
        Silhoutte: PorscheBoxster986,
        Reason: "A lexus is too boring for you. Old money runs through your blood. This is your 'summer' car."
    },
    C2Corvette: {
        Name: "1963 Chevrolet Corvette",
        Link: "https://en.wikipedia.org/wiki/Chevrolet_Corvette_(C2)",
        Picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/1963_Chevrolet_Corvette_Sting_Ray_Sport_Coupe%2C_front_left%2C_08-25-2024.jpg/800px-1963_Chevrolet_Corvette_Sting_Ray_Sport_Coupe%2C_front_left%2C_08-25-2024.jpg",
        Description: "The Chevrolet Corvette (C2) is the second generation of the Chevrolet Corvette sports car, produced by the Chevrolet division of General Motors for the 1963 to 1967 model years.",
        Silhoutte: ChevroletCorvetteC2,
        Reason:"This is pure American class. You have a tattoo of a bald eagle on your chest. You have a tattoo of a bald eagle on your back. You have a tattoo of a bald eagle on your face."
    },
    C3Corvette: {
        Name: "1973 Chevrolet Corvette",
        Link: "https://en.wikipedia.org/wiki/Chevrolet_Corvette_(C3)",
        Picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Chevrolet_Corvette_C3_Stingray_IMG_3199.jpg/800px-Chevrolet_Corvette_C3_Stingray_IMG_3199.jpg",
        Description: "The Chevrolet Corvette (C3) is a sports car that was produced from 1967 to 1982 by Chevrolet for the 1968 through 1982 model years. Engines and chassis components were mostly carried over from the previous generation, but the body and interior were new.",
        Silhoutte: ChevroletCorvetteC3,
        Reason:"This is pure American class. You have a tattoo of a bald eagle on your chest. You have a tattoo of a bald eagle on your back. You have a tattoo of a bald eagle on your face. (also hell yeah)"
    },
    VolvoV70R: {
        Name: "Volvo V70 R",
        Link: "https://en.wikipedia.org/wiki/Volvo_V70",
        Picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Volvo_V70R_AWD_%286073666554%29.jpg/800px-Volvo_V70R_AWD_%286073666554%29.jpg",
        Description: "The Volvo V70 is an executive car manufactured and marketed by Volvo Cars from 1996 to 2016 across three generations. The name V70 combines the letter V, standing for versatility, and 70, denoting relative platform size (e.g., a V70 is larger than a V40 but smaller than a V90).",
        Silhoutte: VolvoV70R,
        Reason:"You might be screaming because you didn't expect this family wagon to have 300 horsepower and a turbo."
    },
    FordPinto: {
        Name: "Ford Pinto",
        Link: "https://en.wikipedia.org/wiki/Ford_Pinto",
        Picture: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Ford_Pinto.jpg",
        Description: "The Ford Pinto is a subcompact car that was manufactured and marketed by Ford Motor Company in North America from the 1971 to the 1980 model years. The smallest American Ford vehicle since 1907, the Pinto was the first subcompact vehicle produced by Ford in North America.",
        Reason:"This thing is held together with zipties and rust. The person who owned this car before you was a smoker."
    },
    MazdaMiata: {
        Name: "Mazda MX-5 Miata",
        Link: "https://en.wikipedia.org/wiki/Mazda_MX-5",
        Picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/1992-1993_Mazda_MX-5_%28NA%29_roadster_%282011-11-18%29_01.jpg/800px-1992-1993_Mazda_MX-5_%28NA%29_roadster_%282011-11-18%29_01.jpg",
        Description: "The Mazda MX-5 is a lightweight two-passenger roadster sports car manufactured and marketed by Mazda with a front mid-engine, rear-wheel-drive layout. The convertible is marketed as the Mazda MX-5 Miata in North America, where it is widely known as the Miata.",
        Silhoutte: MazdaMX5MiataNA,
        Reason:"YIPPEEEEEEEE"
    },
    DaihatsuAtraiRTLimited: {
        Name: "Daihatsu Atrai s130v classic",
        Link: "https://en.wikipedia.org/wiki/Daihatsu_Atrai",
        Picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Daihatsu_atrai_s130v_classic_1_f.jpg/800px-Daihatsu_atrai_s130v_classic_1_f.jpg",
        Description: "The Daihatsu Atrai is a series of compact MPVs, originally a mid-engined minivan and later a kei car produced by the Japanese automaker Daihatsu since 1981. The Atrai is based on the chassis of the Daihatsu Hijet truck.",
        Reason:"YIPPEEEEEEEE but in a different way"
    },
    CadillacCT5VBlackwing: {
        Name: "Cadillac CT5-V Blackwing",
        Link: "https://en.wikipedia.org/wiki/Cadillac_CT5",
        Picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/2022_Cadillac_CT5-V_Blackwing_in_Dark_Emerald_Frost%2C_front_left.jpg/800px-2022_Cadillac_CT5-V_Blackwing_in_Dark_Emerald_Frost%2C_front_left.jpg",
        Description: "The Cadillac CT5 is a mid-size luxury sedan manufactured and marketed by General Motors under the Cadillac brand. The CT5 is a replacement for the Cadillac CTS.",
        Silhoutte: CadillacCT5VBlackwing,
        Reason:"DOUBLE HELL YEAH?! Thats a Cadillac for sure. This this is 4000 pounds, but still goes 0-60 in 3.6 seconds."
    },
    PlymouthProwler: {
        Name: "Plymouth Prowler",
        Link: "https://en.wikipedia.org/wiki/Chrysler_Prowler",
        Picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/1999_Plymouth_Prowler_%2815118085727%29.jpg/800px-1999_Plymouth_Prowler_%2815118085727%29.jpg",
        Description: "The Plymouth Prowler, later the Chrysler Prowler, is a retro-styled production car manufactured and marketed in 1997 and 1999–2002 by DaimlerChrysler, based on the 1993 concept car of the same name.",
        Silhoutte: PlymouthProwler,
        Reason:"You like American cars but you also like the color purple. You have a diecast model of your car in the trunk."
    },
    NissanJukeNismo: {
        Name: "Nissan Juke Nismo",
        Link: "https://en.wikipedia.org/wiki/Nissan_Juke",
        Picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Nissan_Juke_1.6_DIG-T_Nismo_%E2%80%93_Frontansicht%2C_15._M%C3%A4rz_2015%2C_D%C3%BCsseldorf.jpg/800px-Nissan_Juke_1.6_DIG-T_Nismo_%E2%80%93_Frontansicht%2C_15._M%C3%A4rz_2015%2C_D%C3%BCsseldorf.jpg",
        Description: "The Nissan Juke is a subcompact crossover SUV produced by the Japanese car manufacturer Nissan since 2010. The production version made its debut at the 2010 Geneva Motor Show in March, and was introduced to North America at the 2010 New York International Auto Show.",
        Reason:"This is the Ferrari of Nissan Jukes. The red trim on the bottom of it makes it faster."
    },
    AustinMiniCooper: {
        Name: "1967 Austin Mini Cooper",
        Link: "https://en.wikipedia.org/wiki/Mini",
        Picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/1969_Austin_Mini_-_South_American_build_with_fiberglass_body_%283447765583%29.jpg/1280px-1969_Austin_Mini_-_South_American_build_with_fiberglass_body_%283447765583%29.jpg",
        Description: "The Mini is a small economy car produced by the English-based British Motor Corporation (BMC) and its successors from 1959 until 2000. The original is considered an icon of 1960s British popular culture.",
        Reason:"This car will ask you when 'fookin chea chime' is."
    },
    PTCruiser: {
        Name: "Chrysler PT Cruiser",
        Link: "https://en.wikipedia.org/wiki/Chrysler_PT_Cruiser",
        Picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/06-08_Chrysler_PT_Cruiser.jpg/1920px-06-08_Chrysler_PT_Cruiser.jpg",
        Description: "The Chrysler PT Cruiser is a front-engine, front-wheel drive, small family car/compact MPV manufactured and marketed internationally by Chrysler in 5-door hatchback (2000–2010) and 2-door convertible (2005–2008) body styles—over a single generation, with an intermediate facelift for model year 2006.",
        Silhoutte: ChryslerPTCruiser,
        Reason:"This is the whitest american car ever made."
    },
    TowTruck: {
        Name: "Tow Truck",
        Link: "https://en.wikipedia.org/wiki/Tow_truck",
        Picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Bois_d%27Arc_Bash_2016_43_%28parade%29.jpg/800px-Bois_d%27Arc_Bash_2016_43_%28parade%29.jpg",
        Description: "A tow truck (also called a wrecker, a breakdown truck, recovery vehicle or a breakdown lorry) is a truck used to move disabled, improperly parked, impounded, or otherwise indisposed motor vehicles.",
        Reason:"You physically apprened cars, you are the cop of the car world."
    },
    BootedCar: {
        Name: "Car with a boot on it haha",
        Link: "https://en.wikipedia.org/wiki/Wheel_clamp",
        Picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Denver_boot.jpg/1280px-Denver_boot.jpg",
        Description: "A wheel clamp, also known as wheel boot, parking boot, or Denver boot, is a device that is designed to prevent vehicles from being moved. In its most common form, it consists of a clamp that surrounds a vehicle wheel, designed to prevent removal of both itself and the wheel.",
        Reason:"haha you got caught ahhaah"
    },
    ToyotaCentury: {
        Name: "Toyota Century",
        Link: "https://en.wikipedia.org/wiki/Toyota_Century",
        Picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Toyota_Century%2C_Paris%2C_France.jpg/800px-Toyota_Century%2C_Paris%2C_France.jpg",
        Description: "The Toyota Century is a large four-door limousine produced mainly for the Japanese market, serving as Toyota's flagship car within Japan; globally the unrelated Lexus LS series is Toyota's flagship luxury model.",
        Reason:"You are probably a member of the Japanese yakusa. The trunk could easily fit a body. The quietest V12 ever made."
    },
    DodgeDemon: {
        Name: "Dodge Demon",
        Link: "https://en.wikipedia.org/wiki/Dodge_Demon",
        Picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Dodge_Challenger_SRT8_%282015%29_Hirschaid-20220709-RM-120221.jpg/1280px-Dodge_Challenger_SRT8_%282015%29_Hirschaid-20220709-RM-120221.jpg",
        Description: "The Dodge Demon is a nameplate used by Dodge for two separate production vehicles: a muscle car built between 1971 and 1972 and a drag racer built in 2018.",
        Silhoutte: DodgeChallengerSRTDemon,
        Reason:"If these things aren't aming at a crowd of people during a burnout competition, they are probably at the gas station."
    },
    FordF150: {
        Name: "Ford F-150",
        Link: "https://en.wikipedia.org/wiki/Ford_F-Series",
        Picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/2018_Ford_F-150_XLT_Crew_Cab%2C_front_11.10.19.jpg/800px-2018_Ford_F-150_XLT_Crew_Cab%2C_front_11.10.19.jpg",
        Description: "The Ford F-Series is a series of trucks marketed and manufactured by Ford. In production since 1948, the F-Series is a range of light-duty trucks marketed as full-size pickup trucks, slotted above the compact Ford Ranger in the Ford truck model range.",
        Silhoutte: FordF150,
        Reason:"If the plastic in the interior of this 2 year old truck is the nicest thing your ever felt. You haven't felt sandpaper."
    },
    FiskerOcean: {
        Name: "Fisker Ocean",
        Link: "https://en.wikipedia.org/wiki/Fisker_Ocean",
        Picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Fisker_Ocean_Motorworld_Munich_1X7A0079.jpg/800px-Fisker_Ocean_Motorworld_Munich_1X7A0079.jpg",
        Description: "The Fisker Ocean is an all-electric luxury compact SUV produced by Fisker Inc. The Ocean was unveiled at the 2020 Consumer Electronics Show in Las Vegas, with production expected to begin in 2022.",
        Reason:"Can you believe these one-year-old cars have already lost HALF of their value?!"
    },
    HummerH1: {
        Name: "Hummer H1",
        Link: "https://en.wikipedia.org/wiki/Hummer_H1",
        Picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/94-00_AM_General_Hummer_soft_top.jpg/800px-94-00_AM_General_Hummer_soft_top.jpg",
        Description: "The Hummer H1 is a four-wheel-drive utility vehicle based on the M998 Humvee, which was created by AM General. The vehicle was produced from 1992 through 2006, and was the first of what became the Hummer line.",
        Silhoutte: GMCHummerEVSUV,
        Reason:"You're gassy, should I explain it more?"
    },
    VolkswagenSP2: {
        Name: "Volkswagen SP2",
        Link: "https://en.wikipedia.org/wiki/Volkswagen_SP2",
        Picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Volkswagen_SP2_June_2017_02.jpg/800px-Volkswagen_SP2_June_2017_02.jpg",
        Description: "The Volkswagen SP2 is a sports car developed by Volkswagen do Brasil for that market, from 1972 to 1976. It was a variant of the Type 3 platform.",
        Reason:"This thing looks super fast but is super slow."
    },
    ToyotaPrius: {
        Name: "Toyota Prius",
        Link: "https://en.wikipedia.org/wiki/Toyota_Prius",
        Picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/2016_Toyota_Prius_%28ZVW50L%29_Hybrid_liftback_%282016-04-02%29_01.jpg/800px-2016_Toyota_Prius_%28ZVW50L%29_Hybrid_liftback_%282016-04-02%29_01.jpg",
        Description: "The Toyota Prius is a full hybrid electric automobile developed and manufactured by Toyota since 1997. Initially offered as a 4-door sedan, it has been produced only as a 5-door liftback since 2003.",
        Reason:"Its a hybrid! Get it?! HA! HAHA!"
    },
    ToyotaMirai: {
        Name: "Toyota Mirai",
        Link: "https://en.wikipedia.org/wiki/Toyota_Mirai",
        Picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Toyota_Mirai_%28JPD20%29_IMG_5303.jpg/800px-Toyota_Mirai_%28JPD20%29_IMG_5303.jpg",
        Description: "The Toyota Mirai is a mid-size hydrogen fuel cell car manufactured by Toyota, one of the first such sedan-like vehicles to be sold commercially. The Mirai was unveiled at the November 2014 Los Angeles Auto Show.",
        Reason:"Its got a hydrogen fuel cell! This car has a super specific diet and can only eat one thing."
    }
}

export default carInfo
