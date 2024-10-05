import carInfo from './car-info'

var question = [] //This array holds all the questions in the quiz
question[0] = { 
     questionText: "Do you have a mullet?",
     answers:
          [               
               { response: "Yes", nextQuestion: 1 },
               { response: "No", nextQuestion: 2 }
          ]
}
     question[1] = { 
          questionText: "Motorcycle or Mountain Bike?",
          answers: [{ response: "Motorcycle", calculatedCar: carInfo.ElCamino },
                    { response: "Mountain Bike", calculatedCar: carInfo.SubaruBaja }]          
          
     }
     question[2] = { 
          questionText: "When do you shower?",
          answers: [{ response: "Morning", nextQuestion: 4 },
                    { response: "Evening", nextQuestion: 3 },
                    { response: "Never", calculatedCar: carInfo.VolkswagenType2 }]
     }
          question[3] = { 
               questionText: "Watches or Shoes?",
               answers: [{ response: "Shoes", nextQuestion:  5},
                         { response: "Watches", nextQuestion: 6 },]
          }
               question[5] = { 
                    questionText: "What shoe are you pickin",
                    answers: [{ response: "Snow Boot", calculatedCar:  carInfo.SherpUTV },
                              { response: "Flip Flop", calculatedCar: carInfo.JeepWrangler },
                              { response: "Saddle Shoes", nextQuestion: 7 }]
               }
                    question[7] = { 
                         questionText: "Are you Cruella De Vil?",
                         answers: [{ response: "Yes", calculatedCar: carInfo.PantherDeVille },
                                   { response: "No", nextQuestion: 8 }]
                    }
                         question[8] = { 
                              questionText: "Pick a music genre",
                              answers: [{ response: "Prog Rock", calculatedCar: carInfo.DodgeRamb250 },
                                        { response: "Crunk", calculatedCar: carInfo.ScionXBinHotLavaOrange },
                                        { response: "Polka", calculatedCar: carInfo.VolkswagenPolo },
                                        { response: "Shoegaze", calculatedCar: carInfo.ToyotaCorollaStationWagon },
                                        { response: "Baroque", calculatedCar: carInfo.BenzPatentMotorwagen }]
                         }
               question[6] = { 
                    questionText: "Are you wearing a watch right now?",
                    answers: [{ response: "Yes", nextQuestion: 9 },
                              { response: "No", nextQuestion: 10 }]
               }
                    question[9] = { 
                         questionText: "What kind of watch?",
                         answers: [{ response: "Smart Watch", nextQuestion: 11 },
                                   { response: "Not Smart Watch", nextQuestion: 12 }]
                    }
                         question[11] = { 
                              questionText: "Google, Apple, or Samsung?",
                              answers: [{ response: "Google", calculatedCar: carInfo.BMWi3 },
                                        { response: "Samsung", calculatedCar: carInfo.Polestar2 },
                                        { response: "Apple", nextQuestion: 13 }]
                         }
                         question[13] = { 
                              questionText: "Is it the newest Apple watch?",
                              answers: [{ response: "Yes", nextQuestion: 14 },
                                        { response: "No", calculatedCar: carInfo.FiskerKarma }]
                         }
                              question[14] = { 
                                   questionText: "Do you know how to use it?",
                                   answers: [{ response: "Yes", calculatedCar: carInfo.TeslaModel3 },
                                             { response: "No", nextQuestion: 15 }]
                              }
                              question[15] = { 
                                   questionText: "Have you ever had braces?",
                                   answers: [{ response: "Yes", calculatedCar: carInfo.BentleyBentayga },
                                             { response: "No", calculatedCar: carInfo.RollsRoyceCullinan },
                                             { response: "I am a dentist", calculatedCar: carInfo.LucidAir }]
                              }
                         question[12] = { 
                              questionText: "Describe the watch",
                              answers: [{ response: "Cheap", calculatedCar: carInfo.HondaAccord },
                                        { response: "Rugged", calculatedCar: carInfo.SubaruOutback },
                                        { response: "Expensive", calculatedCar: carInfo.PorscheBoxster }]
                         }
                    question[10] = { 
                         questionText: "It’s the bottom of the 8th inning in game 7 of the 2001 World Series. You are Randy Johnson of the Arizona Diamondbacks. In an unorthodox move, your general manager Bob Brenly calls you to the mound to pitch the remaining 2 innings and keep the Yankees to 1 run. The thing is, you started last nights game and threw 104 pitches. Do you agree to play and risk the health of your throwing arm for the chance at greatness?",
                         answers: [{ response: "Yes (hell yeah)", calculatedCar: carInfo.C2Corvette },
                                   { response: "Also yes (also hell yeah)", calculatedCar: carInfo.C3Corvette }]
                    }
          question[4] = { 
               questionText: "Are you a morning person?",
               answers: [{ response: "Yes", nextQuestion: 17 },
                         { response: "No", nextQuestion: 16 }]
          }
               question[16] = { 
                    questionText: "What do you say when you step on the gas?",
                    answers: [{ response: "Yippee", nextQuestion: 18 },
                              { response: "Hell Yeah", nextQuestion: 19 },
                              { response: "AAAAAAAAAAAAAAA", calculatedCar: carInfo.VolvoV70R },
                              { response: "*Begins Praying*", calculatedCar: carInfo.FordPinto }]
               }
                    question[18] = { 
                         questionText: "Yippee because car fast?",
                         answers: [{ response: "Yippee (yes)", calculatedCar: carInfo.MazdaMiata },
                                   { response: "Yippee (no)", calculatedCar: carInfo.DaihatsuAtraiRTLimited },]
                    }
                    question[19] = { 
                         questionText: "Finish the sentence “Dudes will see this and think____”",
                         answers: [{ response: "Hell yeah (but again)", calculatedCar: carInfo.CadillacCT5VBlackwing},
                                   { response: "Hell yeah (in rainbow)", calculatedCar: carInfo.PlymouthProwler },
                                   { response: "EW", calculatedCar: carInfo.NissanJukeNismo }]
                    }
               question[17] = { 
                    questionText: "Do you like spicy food?",
                    answers: [{ response: "Yes", nextQuestion: 21 },
                              { response: "No", nextQuestion: 20 }]
               }
                    question[20] = { 
                         questionText: "What best describes you?",
                         answers: [{ response: "Cop", nextQuestion: 23 },
                                   { response: "British", calculatedCar: carInfo.AustinMiniCooper },
                                   { response: "Salt and pepper are spices", calculatedCar: carInfo.PTCruiser }]
                    } 
                         question[23] = { 
                              questionText: "Are you actually cop? You legally have to tell me >:|",
                              answers: [{ response: "Yes", calculatedCar: carInfo.TowTruck },
                                        { response: "No", nextQuestion: 24 }]
                         }
                              question[24] = { 
                                   questionText: "Are you a criminal?",
                                   answers: [{ response: "Yes", nextQuestion: 25 },
                                             { response: "No", nextQuestion: 26 }]
                              }
                                   question[25] = { 
                                        questionText: "Have you gotten caught?",
                                        answers: [{ response: "Yes", calculatedCar: carInfo.BootedCar },
                                                  { response: "No", calculatedCar: carInfo.ToyotaCentury }]
                                   }
                                   question[26] = { 
                                        questionText: "What do you say to your friend before you get into a fight",
                                        answers: [{ response: "Hold me back", calculatedCar: carInfo.DodgeDemon },
                                                  { response: "Hold my beer", calculatedCar: carInfo.FordF150 },
                                                  { response: "Hold my earrings", calculatedCar: carInfo.FiskerOcean }]
                                   }
                    question[21] = { 
                         questionText: "Are you on a diet?",
                         answers: [{ response: "Yes", nextQuestion: 28 },
                                   { response: "No", nextQuestion: 27 }]
                    }
                         question[27] = { 
                              questionText: "Are you gassy?",
                              answers: [{ response: "Yes", calculatedCar: carInfo.HummerH1 },
                                        { response: "No", calculatedCar: carInfo.VolkswagenSP2 }]
                         }
                         question[28] = { 
                              questionText: "Do you ever cheat on your diet?",
                              answers: [{ response: "Yes", calculatedCar: carInfo.ToyotaPrius },
                                        { response: "No", calculatedCar: carInfo.ToyotaMirai }]
                         } 
export default question