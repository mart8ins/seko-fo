export const notLogged = {
    title: {
        eng: "About this project",
        lv: "Par projektu"
    },
    description: {
        eng: `Dear visitor! My name is Martins Meisters. Thank you for your time to visit this website and 
        to get to know me. In my work experience and education you will not find anything related to the field of IT, 
        but there is a great desire and motivation to change my career. The aim of this project is to address potential 
        employers in the field of IT and to show what and what technologies I have been able to learn and master. I have a 
        great desire to continue to develop myself, acquiring new technologies and knowledge in general, in order to achieve 
        the main goal - work in the field of IT. By logging in, you will be able to get more information about me - a description 
        of my personality, work experience, education and how I came to the desire to change my career in the field of IT. Of course, 
        you will also be able to see the project itself, and I will also provide more detailed information on what and how I have done 
        in the project itself. Thanks, and I look forward to seeing you soon!`,

        lv: `Esiet sveicināti! Mani sauc Mārtiņš Meisters. Paldies, ka esat gatavi veltīt savu laiku šīs mājaslapas apskatei un
         manis iepazīšanai. Manā darba pieredzē un izglītībā neatradīsiet neko saistītu ar IT sfēru, bet ir ļoti liela vēlme un 
         motivācija mainīt savu karjeru. Šis projekts ir tapis ar mērķi uzrunāt potenciālos darba devējus IT sfērā un parādīt, ko un 
         kādas tehnoloģijas es esmu spējis iemācīties un apgūt. Manī ir ļoti liela vēlme turpināt attīstīt sevi, apgūstot jaunas 
         tehnoloģijas un zināšanas kopumā, lai sasniegtu galveno mērķi – darbu IT sfērā. Autorizējoties varēsiet iegūt plašāku 
         informāciju par mani - manas personības aprakstu, darba pieredzi, iglītību un to, kā nonācu līdz vēlmei mainīt savu karjeru 
         uz IT sfēru. Protams, apskatīt varēs arī pašu projektu, tāpat arī sniegšu arī sīkāku informāciju par to, ko un kā es esmu paveicis 
         pašā projektā. Paldies, un es ceru uz drīzu tikšanos!`
    },
    btn: {
        eng: "See more",
        lv: "Apskatīt vairāk"
    }
}



export const isLogged = {
    profile: {
        eng: {
            name: "Martins Meisters",
            email: "martins.meisters@inbox.lv",
            phone: "+371 29141645",
            country: "Latvia",
            city: "Riga"
        },
        lv: {
            name: "Mārtiņš Meisters",
            email: "martins.meisters@inbox.lv",
            phone: "+371 29141645",
            country: "Latvija",
            city: "Rīga"
        }
    },
    navigation: {
        eng: {
            aboutProject: "About project",
            aboutMe: "About me",
            education: "Education",
            workExp: "Work experience",
            coding: "Coding"
        },
        lv: {
            parProjektu: "Par projektu",
            parMani: "Par mani",
            izglitiba: "Izglītība",
            darbaPieredze: "Darba pieredze",
            programmesana: "Programmēšana"
        }
    },
    aboutProject: [
        {
            type: "Design",
            eng: "I have tried to keep the design and structure of this project simple. I focused on two colors, dark and light green. The project also has a responsive design, with one breaking point in screen size - 768px.",
            lv: "Esmu centies šī projekta dizianu un struktūru saglabāt vienkāršu. Koncentrējos uz divām krāsām, tumšu un zaļu toni. Projektam piemīt arī responsive dizains, ar vienu breaking point ekrāna izmērā – 768px. "
        },
        {
            type: "User",
            eng: "The project has authentication. The user can register and log in if they are already registered. The user is authorized to access and change only their own content - add, edit and delete also edit their profile data. The user password on the server is encrypted. After authentication, a token with a validity period of 1 hour is sent to the user. After that hour, the application automatically redirects the user to the landing page and logs off user. ",
            lv: "Projektā ir autentifikācija. Lietotājs var reģistrēties un ienākt sistēmā, ja jau ir reģistrēts.  Lietotājs ir autorizēts piekļūt un ietekmēt tikai savu saturu – pievienot, rediģēt un dzēst savu saturu, labot sava profila datus. Uz servera lietotāja parole ir šifrēta. Ienākot sistēmā klientam tiek atsūtīts tokens, kura derīguma termiņš ir 1 stunda. Pēc tās stundas aplikācija automātiski izlogo un pārvirza klientu uz galveno lapu."
        },
        {
            type: "Connections",
            eng: "",
            lv: "Ir trīs galvenie bloki šai aplikcijas sadaļai – bloks, kur redzami visi aplikācijas lietotāji (izņemot pastāvošās draudzības lietotāji). Bloks, kur redzami lietotāji, kas ir draugu lokā un bloks, kas parāda lietotājus, kam draudzības uzaicinājums ir nosūtīts un lietotājus no kuriem uzaicinājums ir saņemts. Katrs lietotājs ir attēlots kartiņā, kur ir opciju pogas. Opcijas pogas – poga, lai nosūtīt ātru ziņu lietotājam, poga, lai uzaicinātu draudzēties vai atceltu draudzību. Tiek parādīts arī draudzības un nosūtīta/saņemta aicinājuma status. Ir arī poga, kas aizved uz lietotāja profilu, kur arī ir iespējams veikt visas iepriekš minētās darbības."
        },
        {
            type: "Messages",
            eng: "",
            lv: "Šajā aplikācijas sadaļā pēc noklusējuma var nosūtīt ziņu tikai lietotājiem, kas ir draugu listē. Ir arī iespēja sarakstīties ar lietotājiem, kas nav draugu lokā un tas ir iespējams tad, ja pats lietotājs vai otra persona ir nosūtījusi ātro ziņu caur lietotāja kartiņu vai lietotāja profilu. Sarakstē izmantoju Socket.IO tehnoloģiju, kas ļauj sarakstīties arī tiešsaistē redzot nosūtītās un saņemtās ziņas reālā laikā."
        },
        {
            type: "Content creation",
            eng: "",
            lv: "Uz doto brīdi aplikācijā ir iespējams izveidot divu dažāda veida saturu – stāstu jeb ‘’Story’’ un ievadīt treniņa datus jeb ‘’Workout’’. ‘’Story’’ ir tāds kā blogs vai stāsts ko lietotājs var uzrakstīt. Citi lietotāji to var novērtēt un komentēt. Pats lietotājs stāstu var padarīt privātu vai publisku, tāpat arī nobloķēt komentārus. ‘’Workout’’ ir lietotāja treniņa dienas datu saglabāšana. Izvēlas dienu, kad trenējās, ievada sesijas nosaukumu un savada treniņa datus – izpildītos vingrinājumus un atkārtojumu skaitu, svaru. Treniņa dienā var pievienot vairākas treniņa sesijas. "
        },
        {
            type: "Content visibility",
            eng: "",
            lv: ""
        }
    ]
    ,
    aboutMe: {
        personality: {
            eng: {
                title: "My personality",
                text: ` By nature I am a friendly, calm and polite person. I have great demands on myself, and therefore on the people and colleagues around me. If I see and understand a goal while doing work, I will do my best to achieve it as quickly and efficiently as possible. I have a great sense of responsibility towards both my employer and the work I do. Punctual and always arrive on time. `
            },
            lv: {
                title: "Personība",
                text: `Pēc dabas esmu draudzīgs, mierīgs un pieklājīgs cilvēks. Manī ir lielas prasības pret sevi, līdz ar to arī no man apkārt esošajiem cilvēkiem un kolēģiem. Ja darot darbu, redzu un saprotu mērķi, darīšu visu, lai to sasniegtu maksimāli ātri un efektīvi. Piemīt liela atbildības sajūta gan pret savu darba devēju, gan arī pret darāmo darbu. Punktuāls, nekad nekavēju un vienmēr ierodos laicīgi.`
            }
        },
        hobbies: {
            eng: {
                title: "Interests / hobbies",
                text: `In my free time I do individual sports - running and going to the gym. I like any kind of active recreation both outdoors and indoors. I follow the sports news in the world. I also do winter swimming. I try to read books in English regularly to develop my language skills. The literature I like the most is based on human psychology and growth.`
            },
            lv: {
                title: "Intereses / vaļasprieki",
                text: `Brīvajā laikā nodarbojos ar indivinduālo sportu – skrienu un eju uz sportazāli. Patīk jebkāda veida aktīvā atpūta gan pie dabas, gan arī iekštelpās. Sekoju līdzi sporta jaunumiem pasaulē. Nodarbojos arī ar ziemas peldēm. Cenšos regulāri lasīt grāmatas angļu valodā, lai attīstītu valodas prasmi. Literatūra, kas visvairāk patīk, ir uz cilvēka psiholoģiju un izaugsmi balstīta.`
            }
        },
        goals: {
            eng: {
                title: "Goals",
                text: `For now, my biggest goal is to change my career to IT. Thanks to knowledge that i have gained i feel like im now able to work in this industry. Interest and motivation is big. I like the idea that the industry is constantly evolving, which means that there is an opportunity to continuously develop yourself, as well as see the results of your work.  For the last couple of years i have been actively studying on self-study. In my opinion, I have mastered enough to start a career in IT. I have focused on both client side programming (HTML, CSS, JS - React framework) and server side (Node - ExpressJS framework). I have learned MongoDB database using the Mongoose framework. Am I an expert in each of these technologies? I don't think so, but I'm getting better every day, I'm gaining a better understanding of the structure of projects, more efficient data flow, WEB requests, and security. Although I am focused on these technologies above, I am also open to offers to learn something new and go in other directions.`
            },
            lv: {
                title: "Mērķi",
                text: `Uz šo brīdi lielākais mērķis ir mainīt savu karjeru uz IT. Pateicoties iegūtajām zināšanām, jūtu, ka esmu spējīgs strādāt šajā nozarē. Interese un motivācija ir liela. Patīk doma, ka nozare nemitīgi attīstās, kas nozīmē to, ka ir iespēja nepārtraukti arī attīstīt sevi, tāpat arī redzēt darba rezultātu. Pēdējos pāris gadus esmu vairāk vai mazāk regulāri un aktīvi pašmācībā mācījies. Manuprāt, esmu apguvis pietiekami, lai varētu uzsākt karjeru IT. Esmu koncentrējies gan uz klienta puses programmēšanu (HTML, CSS, JS – React frameworks), gan arī servera pusi (Node – ExpressJS frameworks). No datubāzēm esmu apguvis MongoDB izmantojot Mongoose frameworku. Vai esmu eksperts katrā no minētajām tehnoloģijā? Domāju, ka nē, bet ar katru dienu palieku labāks, gūstu lielāku izpratni gan par skaidrāku struktūru projektiem, efektīvāku datu kustību, WEB requestiem un drošību. Neskatoties uz to, ka esmu koncentrējies uz šīm iepriekš minētajām tehnoloģijām, esmu atvērts arī piedāvājumiem apgūt kautko jaunu un doties citos virzienos.`
            }
        }
    }
    ,
    education: [
        {   type: "education",
            eng: {   
                diploma: {
                    year: "2016",
                    title: "Year of diploma"
                },
                school: "University of Latvia, Faculty of Economics and Management",
                education: "Bachelor's degree in the study program - Organizational Management"
            },
            lv: {   
                diploms: {
                    gads: "2016",
                    title: "Diploms iegūts"
                },
                iestade: "Latvijas Universitāte, Ekonomikas un Vadības fakultāte",
                izglitiba: "Bakalaura grāds studiju programmā - Organizāciju vadība"
            }
        },
        {
            type: "education",
            eng: {   
                diploma: {
                    year: "2005",
                    title: "Year of diploma"
                },
                school: "Ogre Secondary School No. 1",
                education: "Secondary education"
            },
            lv: {   
                diploms: {
                    gads: "2005",
                    title: "Diploms iegūts"
                },
                iestade: "Ogres 1. vidusskola",
                izglitiba: "Vidējā izglītība"
            }
        },
        {
            type: "education",
            eng: {   
                diploma: {
                    year: "2002",
                    title: "Year of diploma"
                },
                school: "Ogresgala primary school",
                education: "Elementary Education"
            },
            lv: {   
                diploms: {
                    gads: "2002",
                    title: "Diploms iegūts"
                },
                iestade: "Ogresgala pamatskola",
                izglitiba: "Pamatskolas izglītība"
            }
        }
    ],
    workExp: [
        {   type: "workExp",
        eng: {
            company: "SIA Elux",
            profession: "Wholesale purchasing / customer service manager",
            from: "Year 2017, April",
            to: "Still working"
        },
        lv: {
            company: "SIA Elux",
            profession: "Vairumtirdzniecības iepirkumu menedžeris / klientu atbalsts",
            from: "2017.gada Aprīlis",
            to: "Joprojām strādāju"
        }
    },

        {   type: "workExp",
        eng: {
            company: "SIA Xnet",
            profession: "Online shop purchasing / customer service manager",
            from: "Year 2012, June",
            to: "Year 2017, March"
        },
        lv: {
            company: "SIA Xnet",
            profession: "Internetveikala iepirkumu/klientu apkalpošanas menedžeris",
            from: "2012.gada Jūnijs",
            to: "2017. gada Marts"
        }
    },

        {   type: "workExp",
        eng: {
            company: "SIA Riesta",
            profession: "Salesman",
            from: "Year 2011, October",
            to: "Year 2012, May"
        },
        lv: {
            company: "SIA Riesta",
            profession: "Pārdevējs",
            from: "2011.gada Oktobris",
            to: "2012.gada Maijs"
        }
    },

        {   type: "workExp",
        eng: {
            company: "SIA Augstceltne",
            profession: "Salesman",
            from: "Year 2009, December",
            to: "Year 20011, September"
        },
        lv: {
            company: "SIA Augstceltne",
            profession: "DUS pārdevējs",
            from: "2009.gada Decembris",
            to: "2011.gada Septembris"
        }
    },

        {   type: "workExp",
        eng: {
            company: "Pub 'Čau, Rasma'",
            profession: "Bartender",
            from: "Year 2009, August",
            to: "Year 2009, November"
        },
        lv: {
            company: "Krodziņš 'Čau, Rasma' ",
            profession: "Bārmenis",
            from: "2009.gada Augusts",
            to: "2009.gada Novembris"
        }
    },


        {   type: "workExp",
        eng: {
            company: "SIA Latvija Statoil",
            profession: "Salesman",
            from: "Year 2006, August",
            to: "Year 2009, June"
        },
        lv: {
            company: "SIA Latvija Statoil",
            profession: "DUS pārdevējs",
            from: "2006.gada Augusts",
            to: "2009.gada Jūnijs"
        }
    },
        {   type: "workExp",
            eng: {
                company: "SIA Rīgas Pirmā garāža",
                profession: "Security guard",
                from: "Year 2005, July",
                to: "Year 2006, August"
            },
            lv: {
                company: "SIA Rīgas Pirmā garāža",
                profession: "Uzraugs - operators",
                from: "2005.gada Jūlijs",
                to: "2006.gada Augusts"
            }
        }
    ],
    coding: {
        title: {
            eng: "My coding skills",
            lv: "Manas programmēšanas prasmes"
        },
        stack: [
            {
                name: "HTML, HTTP",
                frameworks: [],
                eng: {
                    text: `HTML was the first one I encountered when started learning programming/WEB development. I understand its importance in the development and display of a WEB page. A skeleton that dictates what the structure of a WEB page will be. I know and had a good practice on how to use the most popular elements and attributes. I am also familiar with HTTP protocol methods and statuses. I have gained a good practice during this project, making frontend requests and backend responses.`
                },
                lv: {
                    text: `HTML bija pirmais ar ko saskāros, uzākot mācīties programēšanu/WEB izstrādi. Saprotu tā nozīmi WEB lapas izstrādē un attēlošanā. Skelets, kas diktē to, kāda struktūra būs WEB lapai. Pārzinu un protu izmantot populārākos elementus un atribūtus. Pārzinu arī HTTP protokola metodes un statusus. Ir iegūta arī laba pieredze šo metožu un statusu izmantošanā šī projekta ietvaros.`
                }
            },
            {
                name: "CSS",
                frameworks: [
                    {
                        name: "Bootstrap",
                        eng: `I know that there are many CSS frameworks. I have a little expierence with most popular, Bootstrap.  I had used it in some small learning projects but i stoped because wanted to learn more about the basics of CSS itself, without any frameworks. Also, pure CSS provides more freedom.`,
                        lv: `Zinu, ka CSS frameworki ir daudz un dažādi. Ar vis populārāko, Bootstrap, ir bijusi saskare, esmu nedaudz izmantojis to dažos mazos mācīšanās projektos, bet pārstāju to izmantot, jo vairāk vēlējos gūt praksi ar pašiem CSS pamatiem, bez nekādiem frameworkiem. Tāpat arī, tīrs CSS sniedz vairāk brīvības izpausmes.`
                    }
                ],
                eng:  {
                    text: `CSS i know at the avarage user level, mainly focusing on the basic CSS operations, such as positioning and visualizing elements. Im aware of what kind of impressive things can be done visually with CSS,  but I have little experience with it and I'm not really motivated to go in that direction.`
                    }
                  ,
                lv: {
                    text: `CSS pārvaldu vidējā lietotāja līmenī koncentrējoties uz pamata elementārām CSS darbībām, kā elementu savstarpēja pozicionēšana un vizuālā noformēšana. Zinu cik vizuāli iespaidīgas lietas var paveikt, tai skaitā izmantojot arī animācijas, ar CSS, bet ar to pieredze man ir maza un nav īsti arī aicinājums doties šajā virzienā.`
                }
            },
            {
                name: "JS",
                frameworks: [
                    {
                        name: "React",
                        eng: ` After learning the basics of Javascript and gaining practice, React is the frameworks I've focused on the most. I have knowledge on practically for all the main principles - JSX, element rendering, component structure and how data is transferred between different components via props (child -> parent, parent -> child), including globally in the application - using '' Context ''. I also have expierence on handling events, on controlled and uncontrolled forms, on the state of components and their lifecycle (including when used in conjunction with WEB requests). While learning React, I use mostly functional components and the hooks offered by React and also make some custom hooks myself. I also use the React Router in my projects.`
                        ,
                        lv: `Pēc Javascript pamatu apgūšanas un prakses iegūšanas, React ir frameworks uz ko esmu koncentrējies visvairāk. Pārvaldu praktiski visus galvenos principus – JSX, elementu renderēšanu, komponenšu uzbūvi un to, kā tiek nodoti dati starp dažādām komponentēm (child -> parent, parent -> child), tai skaitā globāli aplikācijā - izmantojot ‘’Context’’. Pārvaldu arī ‘’eventus’’, kontrolētas un nekontrolētas formas, komponenšu ’’state’’ un to  dzīvesciklu (tai skaitā arī izmantojot kopā ar WEB pieprasījumiem). Mācoties React izmantoju pārsvarā funckionālās komponentes un React piedāvātos ‘’hooks’’, tai skaitā esmu veidojis savus pielāgotos hooks. Savos projektos izmantoju arī React Router.`
                    },
                    {
                        name: "Angular",
                        eng: `I have been learning Angular during my 3-month Javascript distance learning course organized by the Turiba Business School. These courses introduced me to this framework. I have been actively using Angular for a while, but over time, as training projects got bigger, the project structure became too intrusive and more difficult to operate compared to React.`,
                        lv: `Ar Angular ir bijusi saskare laikā, kad piedalījos biznesa skolas “Turība” organizētos, 3 mēnešus garos, Javascript attālinātajos mācību kursos. Šie kursi mani iepazīstināja ar šo framework. Kādu laiku aktīvi izmantoju Angular, bet ar laiku, mācību projektiem kļūstos lielākiem, projekta struktūra kļuva pārāk uzbāzīga un sarežģītāk operējama salīdzinot ar React.`
                    }
                ],

            eng: {
                text: ` Javascript has been the programming language I have chosen to go to when starting to learn programming. This language is light enough and quick to understand and logical. I understand and i am able to use all the main principles of the language - variables and their scope, conditions, loops, simple and higher order functions, objects and object-oriented programming, AJAX, JSON, DOM manipulation, etc..`
            },
            lv: {
              text: `Javascript ir bijusi programmēšanas valoda, kuras virzienā esmu izvēlējis doties uzsākot macīties programmēšanu. Šī valoda ir pietiekami viegla un ātri uztverama, un loģiska. Saprotu un spēju pārvaldīt visus galvenos principus – variables un to scope, kondīcijas, loops, vienkāršās un augstākās klases funkcijas, objektus un objektu orientētu programmēšanu, AJAX, JSON, manipulācijas ar DOM u.c.. `
            }
            },
            {
                name: "NodeJs",
                frameworks: [
                    {
                        name: "Express",
                        eng: `This framework is light and easy to learn. I know how to process incoming requests and send responses to the frontend, as well as the methods and capabilities of these Express request and response objects. Im familiar with the built-in middleware functions of Express and i know how to create my own. Working with this framwork I have gained experience working with json payload, headers, cookies, token, data retrieval from url (params, query) etc.. I understand error handling in communication between the server and the frontend, as well as the nuances of security in WEB requests.`,
                        lv:  `Šis frameworks ir pietiekami viegls un skaidrs. Pārvaldu request apstrādi un response nosūtīšanu uz frontendu, tāpat arī šo Express objektu metodes un iespējas. Pārzinu Express iebūvētās middleware funkcijas un protu izmantot ar arī paša radītās. Strādājot ar šo framwork esmu ieguvis pieredzi darbā ar json payload, headers, cookies, token, datu iegūšanu no url adreses (params, query) u.c.. Saprotu erroru pārvaldību komunikācijā starp serveri un frontendu, tāpat arī nianses par drošību WEB pieprasījumos. `
                    }
                ],
                eng: {
                    text: `I understand what language NodeJS is and its importance in modern WEB applications. I have not mastered it in depth, but I use the ExpressJs framework in the learning process. I know and I regularly use NPM and the projects available there.`
                },
                lv: {
                    text: `Saprotu, kas par valodu ir NodeJS un tās nozīmi mūsdienu WEB aplikācijās. Padziļinātāk neesmu apguvis to, bet mācību procesā izmantoju ExpressJs frameworku. Protu un arī regulāri lietoju NPM, un tur pieejamos projektus.`
                }
            },
            {
                name: "MongoDB",
                frameworks: [
                    {
                        name: "Mongoose",
                        eng: "I use it quite regularly. I know how to create and use model schemes, as well as search for data and make changes.",
                        lv: "Izmantoju diezgan regulāri. Pārzinu modeļu shēmu taisīšanu un to izmantošanu, kā arī datu meklēšanu un izmaiņu veikšanu."
                    }
                ],
                eng: {
                    text: `MongoDB is the only database i had used in the learning process. I understand the difference between SQL and NoSQL databases. I have not mastered MongoDB directly, but through the Mongoose framework.`
                },
                lv: {
                    text: `MongoDB ir vienīgā datubāze ar ko es esmu saskāries un, ko izmantoju mācīšanās procesā. Saprotu atsķīrību starp SQL un NoSQL datubāzēm. Neesmu apguvis MongoDB tieši, bet gan caur Mongoose frameworku.`
                }
            }
        ]
    }

}