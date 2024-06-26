import governorBg from '../assets/images/governor_bg.png'
import governorImg from '../assets/images/governor_Img.png'
import viceGov from '../assets/images/viceGov.png'
import leftArrow from '../assets/leftArrow.png'
import rightArrow from '../assets/rightArrow.png'
import congress1 from '../assets/images/congress1.png'
import congress2 from '../assets/images/congress2.png'
import congress3 from '../assets/images/congress3.png'
import congress4 from '../assets/images/congress4.png'
import congress5 from '../assets/images/congress5.png'
import congress6 from '../assets/images/congress6.png'
import board from '../assets/board.png'
import dept from '../assets/dept.png'
import board1 from '../assets/board1.svg'
import waveBottom from '../assets/WaveBottom.svg'
import waveBottom2 from '../assets/WaveBottom2.svg'
import waveTop from '../assets/WaveTop.svg'
import waveTop2 from '../assets/WaveTop2.svg'
import heroNewsImg from '../assets/images/heroNewsImage.png'
import newsImg from '../assets/images/newsImg.png'
import asideNewsImg from '../assets/images/asideNewsImg.png'
import mapImg from '../assets/images/mapImg.png'
import paperImg from '../assets/images/paperBg.png'
import scholar from '../assets/images/scholar.jpg'
import job from '../assets/images/job.jpg'
import section1 from '../assets/images/section1.jpg'
import section2 from '../assets/images/section2.jpg'
import section3 from '../assets/images/section3.jpg'
import section4 from '../assets/images/section4.jpg'
import section5 from '../assets/images/section5.jpg'
import section6 from '../assets/images/section6.jpg'
import section7 from '../assets/images/section7.jpg'
import section9 from '../assets/images/section9.jpg'




export {
    governorBg,  
    governorImg, 
    leftArrow,
    rightArrow,
    viceGov,
    congress1,
    congress2,
    congress3,
    congress4,
    congress5,
    congress6,
    board,
    dept,
    board1,
    waveBottom,
    waveBottom2,
    waveTop,
    waveTop2,
    heroNewsImg,
    newsImg,
    asideNewsImg,
    mapImg,
    paperImg,
    scholar,
    job,
    section1,
    section2,
    section3,
    section4,
    section5,
    section6,
    section7,
    section9
} 

export const newsData = [
    {
        aside:[
            {
                img: scholar,
                sub: 'Batangas PIO',
                time: 'May 9, 2024',
                title: 'Educational Assistance para sa 2nd semester ng Academic Year 2023 - 2024 ',
                text: '     Nagpapatuloy ang pamamahagi ng Educational Assistance sa mga Iskolar ng Pamahalaang Panlalawigan ng Batangas para sa 2nd semester ng Academic Year 2023 - 2024 ngayong araw, ika-7 ng Mayo 2024, sa Regina R. Mandanas Memorial DREAM Zone sa Lungsod ng Batangas.\n\n      778 na mga mag-aaral, na kabilang sa mga maintainer scholars, ang nabigyan ng tulong pang-edukasyon, na may kabuuang halagang ₱ 2.9M'
            },{ 
                img: job, 
                sub: 'Ornald Tabares',
                time: 'March 19, 2024',
                title: '1st Quarter Job Fair at libreng gupit para sa mga Batangueño, isinagawa sa Kapitolyo',
                text: '      Muling nagtipon ang mga employers at job seekers sa isinagawang Job Fair ng Pamahalaang Panlalawigan ng Batangas, sa pamamagitan ng Provincial Assistance for Community, Public Employment and Youth and Sports Development Office (PACPEYSDO), ngayong ika-19 ng Marso 2024 sa Regina R. Mandanas Memorial DREAM Zone, Batangas City. \n     Nasa labing-apat na mga rehistradong lokal na kumpanya at pitong overseas recruitment agencies ang nakiisa sa naturang job fair, na nilahukan naman ng may mahigit sa 400 na mga naghahanap ng trabaho. Tampok sa aktibidad ang naging pagbabahagi ng mga partner companies at agencies ng kanilang mga programa at pagsasanay, na maaaring ipagkaloob sa publiko para sa pagpapaunlad ng kabuhayan.'
            }
        ]
    },{
        side: [
            {
                img: section1,
                sub: 'Rochelle Amboya',
                time: 'April 30, 2024',
                title: 'Pagbuo ng Marine Protected Area Management Plans, tinutukan ng Kapitolyo, Malampaya Foundation'
            },{
                img: section2,
                sub: 'Edwin Zabarte',
                time: 'May 6, 2024',
                title: 'Batangueña PNPA 2024 Top Cadet, kinilala ng Batangas Capitol'
            },{
                img: section3,
                sub: 'PGENRO',
                time: 'May 2, 2024',
                title: 'Project LAWA at BINHI, ipinatupad ng Kapitolyo, DSWD sa Bayan ng Lian'
            },{
                img: section4,
                sub: 'Edwin Zabarte',
                time: 'March 22, 204',
                title: 'Batangas Province EL Niño Task Force handa na sa epekto ng tagtuyot sa lalawigan'
            },{
                img: section5,
                sub: 'Pulso ng Bayan',
                time: 'February 1, 2024',
                title: 'Muling nanguna bilang #TopPerformingGovernor sa CALABARZON Region si Batangas Gov. DODO Mandanas'
            },{
                img: section6,
                sub: 'Gian Escamillas',
                time: 'March 22,2204',
                title: '2024 Regional, Provincial Women’s Month Celebration, isinagawa sa Lalawigan ng Batangas'
            },{
                img: section7,
                sub: 'Gian Escamillas',
                time: 'April 20, 2024',
                title: '2-Day Capability Building Training para sa City/Municipal Anti-Drug Abuse Councils'
            },{
                img: section9,
                sub: 'Ornald Tabares',
                time: 'April 19, 2024',
                title: 'Pagbisita ng MV Doulos Hope, isang paglalayag ng kaalaman at inspirasyon'
            }
        ]
    }

    
]

export const governorData = [
    {
        governor:{
            id: 1,
            name: "Hon. Hermilando I. Mandanas",
            position: 'Governor',
            date: 'July 1, 2016 - Present',
            img: governorImg
        },
        viceGovernor: {
            id: 2,
            name: 'JOSE ANTONIO "MARK" SERMONIA LEVISTE II',
            position: 'Vice- Governor', 
            date: '2022 – present',
            img: viceGov 
        }
    }
]  

export const congressData = [
    {
        name: 'Cong. Eric Buhain',
        img: congress1,
        district: '1st District'
    },{
        name: 'Cong. Gerville Luistro',
        img: congress2,
        district: '2nd District'
    },{
        name: 'Cong. Ma. Theresa Collantes',
        img: congress3,
        district: '3rd District'
    },{
        name: 'Cong. Lianda Bolilia',
        img: congress4,
        district: '4th District'
    },{
        name: 'Cong. Mario Vittorio Marino',
        img: congress5,
        district: '5th District'
    },{ 
        name: 'Cong. Ralp G. Recto',
        img: congress1, 
        district: '6th District'
    },{ 
        name: 'Cong. Ralp G. Recto',
        img: congress2, 
        district: '7th District'
    },{ 
        name: 'Cong. Ralp G. Recto',
        img: congress3,  
        district: '8th District'
    }
]

export const boardMembers = [
    {
        district: '1st District',
        members: [
            'HON. CARLO ROMAN ROSALES',
            ' HON. ARMIE MARIE C. BAUSAS'
        ]    
    },{
        district: '2nd District',
        members: [
            'HON. WILSON LEANDRO T. RIVERA',
            ' HON. ARLINA B. MAGBOO'
        ] 
    },{
        district: '3rd District',
        members: [
            'HON. ALFREDO C. CORONA',
            ' HON. RODOLFO M. BALBA'
        ] 
    },{
        district: '4th District',
        members: [
            'HON. JONAS PATRICK M. GOZOS',
            ' HON. JESUS H. DE VEYRA'
        ] 
    },{
        district: '5th District',
        members: [
            'HON. MARIA CLAUDETTE U. AMBIDA',
            ' HON. ARTHUR G. BLANCO'
        ] 
    },{
        district: '6th District',
        members: [
            'HON. LYDIO A. LOPEZ JR.',
            ' HON. ARIES EMMANUEL D. MENDOZA'
        ] 
    },{
        district: 'PLC President',
        members: [
            'HON. MELVIN V. VIDAL'
        ] 
    },{
        district: 'ABC President', 
        members: [
            'HON. FERNANDO R. ROCAFORT' 
        ] 
    }
]

export const departmentHeads = [
    {
        name: [
            'Gov. Hermilando I. Mandanas',
            'Maria Isabel B. Bejasa',
            '(Chief of Staff)'
        ],
        member: [
            'Office of the Provincial Governor'
        ],
        phone: [
            "703-0115, 702-2509,702-2069,",
            "786-1288"
        ]
    },{
        name: [
            'Vice-Gov. Jose Antonio Leviste II'
        ],
        member: [
            'Office of the Vice Governor'
        ],
        phone: [
            "702-9886"
        ]
    },{
        name: [
            'Nelson M. Bayani (OIC)'
        ],
        member: [
            'Sangguniang Panlalawigan'
        ],
        phone: [
            "786-0139"
        ]
    },{
        name: [
            'Wilfredo D. Racelis'
        ],
        member: [
            'Office of the Provincial Administrator'
        ],
        phone: [
            "706-6540, 706-6520, 702-9754"
        ]
    },{
        name: [
            'Dra. Rosvilinda M. Ozaeta'
        ],
        member: [
            'Provincial Health Office'
        ],
        phone: [
            "740-2832, 723-0894"
        ]
    },{
        name: [
            'Florita C. Lachica, RSW'
        ],
        member: [
            'Provincial Social Welfare and Development Office'
        ],
        phone: [
            "723-4024, 723-6921, 723-7906,",
            "723-2859, 984-2069, 723-3779"
        ]
    },{
        name: [
            'Fredesvinda R. Mendoza'
        ],
        member: [
            'Provincial Assistance for Community Development'
        ],
        phone: [
            "980-0845, 980-0844"
        ]
    },{
        name: [
            'Maria Isabel B. Bejasa'
        ],
        member: [
            'Provincial Information Office'
        ],
        phone: [
            "723-4651"
        ]
    },{
        name: [
            'Katrin Erika A. Buted'
        ],
        member: [
            'Provincial Tourism and Cultural Affairs Office'
        ],
        phone: [
            "724-5435"
        ]
    },{
        name: [
            'Celia L. Atienza'
        ],
        member: [
            'Provincial Cooperative, Livelihood and Enterprise Development'
        ],
        phone: [
            "300-4377, 722-1079, 723-1739"
        ]
    },{
        name: [
            'Marisa M. Mendoza'
        ],
        member: [
            'Provincial Planning and Development Office'
        ],
        phone: [
            "722-2359, 706-4654, 706-4655, "
        ]
    },{
        name: [
            'Rhiza B. De Zosa'
        ],
        member: [
            'Provincial Human Resource Management Office'
        ],
        phone: [
            "723-5781, 726-0330"
        ]
    },{
        name: [
            'Marites S. Castillo'
        ],
        member: [
            'Office of the Provincial Accountant'
        ],
        phone: [
            "726-0221, 727-2139"
        ]
    },{
        name: [
            'Engr. Eduardo B. Cedo'
        ],
        member: [
            'Office of the Provincial Assessor'
        ],
        phone: [
            "723-0897, 706-6199"
        ]
    },{
        name: [
            'Victoria B. Culiat'
        ],
        member: [
            'Provincial Budget Office'
        ],
        phone: [
            "722-0372, 726-0258"
        ]
    },{
        name: [
            'Fortunata G. Lat'
        ],
        member: [
            'Office of the Provincial Treasurer'
        ],
        phone: [
            "723-0632, 702-6818"
        ]
    },{
        name: [
            'Paulita M. Maneja'
        ],
        member: [
            'General Services Office'
        ],
        phone: [
            "980-5970, 702-5935, 706-5263"
        ]
    },{
        name: [
            'Engr. Gilbert P.  Gatdula'
        ],
        member: [
            'Provincial Engineer’s Office'
        ],
        phone: [
            "402-5841"
        ]
    },{
        name: [
            'Luis A. Awitan'
        ],
        member: [
            'Environment and Natural Resources Office'
        ],
        phone: [
            "724-6553, 786-1245"
        ]
    },{
        name: [
            'Dr. Romelito R. Marasigan'
        ],
        member: [
            'Office of the Provincial Veterinarian'
        ],
        phone: [
            "740-8538, 740-9743"
        ]
    },{
        name: [
            'Dr. Rodrigo M. Bautista, Jr.'
        ],
        member: [
            'Office of the Provincial Agriculturist'
        ],
        phone: [
            "740-4980, 722-2207, 722-2075"
        ]
    },{
        name: [
            'Atty. Cesar L. Castor, Sr.'
        ],
        member: [
            'Provincial Legal Office'
        ],
        phone: [
            "723-1997, 723-9722"
        ]
    },{
        name: [
            'Lourdes G. Ramirez-Zapanta'
        ],
        member: [
            'Office of the Provincial Prosecutor'
        ],
        phone: [
            "722-0612"
        ]
    },{
        name: [
            'Atty. Genaro S. Cabral'
        ],
        member: [
            'Provincial Public Order and Safety Services Department'
        ],
        phone: [
            "723-0230, 723-9951"
        ]
    },{
        name: [
            'Gina I. Ferriols'
        ],
        member: [
            'Provincial  School Board'
        ],
        phone: [
            "984-3110"
        ]
    },{
        name: [
            'Rosita V. Masangkay'
        ],
        member: [
            'Provincial Library'
        ],
        phone: [
            "984-5532"
        ]
    },{
        name: [
            'Amor Banuelos-Calayan, PhD'
        ],
        member: [
            'Provincial Disaster Risk Reduction and Management Office'
        ],
        phone: [
            "786-0693, 706-8753, 723-9350"
        ]
    },{
        name: [
            'Atty. Genaro S. Cabral (OIC)'
        ],
        member: [
            'Provincial Jail'
        ],
        phone: [
            "723-3102"
        ]
    },{
        name: [
            'Atty. Virgilio I. Macasaet, Jr.'
        ],
        member: [
            'Internal Audit'
        ],
        phone: [
            "783-0993"
        ]
    },{
        name: [
            'Atty. Mary Remie Jane T. Marasigan-Ambida'
        ],
        member: [
            'BAC'
        ],
        phone: [
            "408-8163"
        ] 
    }
];
