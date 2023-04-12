import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Destination from './Destination';

const AgencyPage = () => {
  const { agencyId } = useParams();
  
  const [agencies,setAgencies] = useState({"-MNQgy9N5foEWTmmA_1U": {
    "naziv": "Aero-turs",
    "adresa": "Obrenovićeva bb T.C. Gorča,Beograd,11000",
    "godina": "2011",
    "logo": "https://i.imgur.com/OV15WM6.jpeg",
    "brojTelefona": "011/7872-78423",
    "email": "aero@mail.com",
    "destinacije": "-MNVEu6iMr2EFlQO6TW63"
},
"-MNQftJa4rskH-dBqE9Z": {
    "naziv": "Air Serbia",
    "adresa": " Bulevar umetnosti 16, Beograd, 11000",
    "godina": "2005",
    "logo": "https://i.imgur.com/jsFrKCn.jpeg",
    "brojTelefona": "011/3232-784323",
    "email": "airserbia381@mail.com",
    "destinacije": "-MNVEu6iMr2EFlQO6TW60"
},
"-MNQg8Nd8YPRs-5Kbgqu": {
    "naziv": "Bavka tours",
    "adresa": "Gornji Bunibrod bb, Lazarevac, 16221 ",
    "logo": "https://i.imgur.com/NhAzBBF.jpeg",
    "godina": "1990",
    "brojTelefona": "022/9874-589545",
    "email": "bavka@mail.com",
    "destinacije": "-MNVEu6iMr2EFlQO6TW61"
},
"-MNQgI0t2nV3AT1YxNAr": {
    "naziv": "Bečej prevoz",
    "adresa": "Danila Kiša 10, Bečej, 21220",
    "logo": "https://i.imgur.com/k4nEZm6.jpeg",
    "godina": "1980",
    "brojTelefona": "096/2121-322322",
    "email": "bavka@mail.com",
    "destinacije": "-MNVEu6iMr2EFlQO6TW62"
},
"-MNQgO7Cm756dkG36efQ": {
    "naziv": "Big Blue",
    "adresa": "Kolarčeva 3, Beograd, 11000",
    "logo": "https://i.imgur.com/nmAOOHF.jpeg",
    "godina": "1989",
    "brojTelefona": "088/6969-8745962",
    "email": "biblue011@mail.com",
    "destinacije": "-MNVEu6iMr2EFlQO6TW62"
},
"-MNQgUTr_lN9O7L8AoUS": {
    "naziv": "Planet AIR",
    "adresa": "Narodnog fronta 27, ovi Sad, 21000",
    "logo": "https://i.imgur.com/GXPCPrq.jpeg",
    "godina": "1992",
    "brojTelefona": "088/6969-8745962",
    "email": "bigblue011@mail.com",
    "destinacije": "-MNVEu6iMr2EFlQO6TW62"
},
"-MNQgfzXvQgwB8K-SVfF": {
    "naziv": "Rapsody Travel",
    "adresa": "Vojvode Šupljikca 19, Beogrd ,11000",
    "logo": "https://i.imgur.com/LpxNm2V.jpeg",
    "godina": "1992",
    "brojTelefona": "084/1234-145874",
    "email": "rapsody011@mail.com",
    "destinacije": "-MNVEu6iMr2EFlQO6TW63"
},
"-MNQgnHVDMtvSasYG0C8": {
    "naziv": "Viva Travel",
    "adresa": "Krunska 48, Beograd, 11000",
    "logo": "https://i.imgur.com/koU4UuR.jpeg",
    "godina": "1980",
    "brojTelefona": "062/8785-987612",
    "email": "viva123@mail.com",
    "destinacije": "-MNVEu6iMr2EFlQO6TW61"
},
"-MNQg_nhfUBoPJKBu72e": {
    "naziv": "Vip tours",
    "adresa": "Trg Pavla Stojkovića 12, Nis, 18000",
    "logo": "https://i.imgur.com/zUrrGam.jpeg",
    "godina": "2001",
    "brojTelefona": "054/1233-896574",
    "email": "vip.vip@mail.com",
    "destinacije": "-MNVEu6iMr2EFlQO6TW60"
}});

  const [destinations,setDestinations] = useState({
    "-MNVEu6iMr2EFlQO6TW60": {
        "-MNQftJa4rskH-dBqF9Z3": {
            "naziv": "Sitonija",
            "opis": "Sitonija zapravo predstavlja drugi prst Halkidikija i nalazi se između poluostrva Atos i Kasandra. Neverovatno grčko letovalište koje karakterišu luksuzni Sitonija apartmani sa izvanrednom uslugom i brojnim turističkim i kulturnim sadržajem. Sitonija apartmani 2023 su idealni za putnike koji su u potrazi za mirnim odmorom na mestu koje je pre svega zadržalo svoju prirodnu lepotu i nije toliko komercijalno razvijeno.",
            "slike": [
                "https://i.imgur.com/LMOgMnP.jpeg",
                "https://i.imgur.com/yBtIoEE.jpeg",
                "https://i.imgur.com/aHRcuqe.jpeg",
                "https://i.imgur.com/HxEZ2EO.jpeg",
                "https://i.imgur.com/WhhEFXe.jpeg"
            ],
            "tip": "Letovanje",
            "prevoz": "autobus",
            "cena": "21545",
            "maxOsoba": "52"
        },
        "-MNQftJa4rskH-dBqF9Z4": {
            "naziv": "Atos",
            "opis": "Atos, najistočnije poluostrvo Halkidikija, možda najmanje posećen, ali zato nedovoljno istražen i veoma atraktivan. Ovaj neotkriven raj je za miran i bezbrižan odmor. Poluostrvo je šumovito, a pored toga ističe se po planini Atos, čiji je najviši vrh 2033 m. Udaljenost od Beograda je oko 750 km, a od Soluna oko 100 km. Prema grčkoj mitologiji giganti su nastanjivali ovaj prostor, a po jednom od njih ovaj prst je dobio naziv.",
            "slike": [
                "https://i.imgur.com/13NPfCE.jpeg",
                "https://i.imgur.com/elM9ZuF.jpeg",
                "https://i.imgur.com/ljLJJPc.jpeg",
                "https://i.imgur.com/Ddo6ETm.jpeg"
            ],
            "tip": "Letovanje",
            "prevoz": "autobus",
            "cena": "19787",
            "maxOsoba": "44"
        },
        "-MNQftJa4rskH-dBqF9Z5": {
            "naziv": "Platamon",
            "opis": "Platamon je smešten u Olimpskoj Regiji (oblast Pieria) na manje od 4 kilometara od popularnog letovališta Nei Pori i desetak kilometara od Leptokarije. Do skoro ovo mesto bilo je ljubomorno čuvana tajna turista iz kopnenog dela Grčke ali u poslednjih par godina ovaj trend je počeo da se menja i sve više stranih posetioca dolazi u ovo mesto, a pogotovo iz Srbije.Platamon se može pohvaliti ne sa jednom već sa dve prelepe plaže i lukom koja se nalazi između i razdvaja ih. Obe plaže su šljunkovite odlično su uređene i na njima se nalaze beach barovi koji nude na raspolaganje ležaljke i suncobrane bez naknade za iznajmljivanje, već uz konzumaciju pića ih dobijate na korišćenje. U blizini se nalazi kamp Kalamaki a ispred ovog kampa se nalazi plaža prekrivena peskom, te ljubitelji ovakvih plaža imaju i ovu soluciju.",
            "slike": [
                "https://i.imgur.com/zHG54w5.jpeg",
                "https://i.imgur.com/UhJy3mO.jpeg",
                "https://i.imgur.com/oNkVgeB.jpeg",
                "https://i.imgur.com/AmAjjp9.jpeg"
            ],
            "tip": "Letovanje",
            "prevoz": "autobus",
            "cena": "24878",
            "maxOsoba": "42"
        },
        "-MNQftJa4rskH-dBqF9Z6": {
            "naziv": "Sarti",
            "opis": "Sarti je pre samog turističkog procvata važio za skromno i mirno ribarsko selo u kom živi oko 1200 stanovnika. Smešten je na istočnoj obali Sitonije, tačnije na drugom prstu svima poznatog poluostrva Halkidiki. Od grada Soluna je udaljen nešto više od 130km. Kada budete dane svog odmora provodili na peščanoj plaži Sartija, bićete u prilici da uživate u pogledu na fascinantan Atos.",
            "slike": [
                "https://i.imgur.com/S6vhQ9h.jpeg",
                "https://i.imgur.com/etlD1v9.jpeg",
                "https://i.imgur.com/RXo8fpd.jpeg",
                "https://i.imgur.com/38DNu92.jpeg"
            ],
            "tip": "Letovanje",
            "prevoz": "autobus",
            "cena": "24784",
            "maxOsoba": "41"
        },
        "-MNQftJa4rskH-dBqF9Z7": {
            "naziv": "Nea Vrasna",
            "opis": "Nea Vrasnu možemo opisati kao malo i mirno selo sa samo 2500 stanovnika. I u toku sezone, osim naravno buke i gužve zbog velikog broja turista, ostaje u večernjim satima prilično mirno zbog nedostatka klubova i organizovanog noćnog života. Zbog ovog podatka se najčešće preporučuje kao savršen izbor za porodice sa malom decom i ljude koji žele pravi odmor.Klima u ovom mestu je idealna, blagi povetarac čini da i najveće vrućine budu znatno podnošljivije, a večeri prijatnije. Međutim, ono na šta se mnogi turisti žale je veće prisustvo komaraca u odnosu na ostala letovališta. Stoga, ponesite Autan ili neko adekvatno sredstvo, naročito zbog vaših mališana.",
            "slike": [
                "https://i.imgur.com/QORUNqY.jpeg",
                "https://i.imgur.com/yW1f61r.jpeg",
                "https://i.imgur.com/dzDnwie.jpeg"
            ],
            "tip": "Letovanje",
            "prevoz": "autobus",
            "cena": "18999",
            "maxOsoba": "40"
        }
    },
    "-MNVEu6iMr2EFlQO6TW61": {
        "-MNQftJa4rskH-dBqE9Z0": {
            "naziv": "Kusadasi",
            "opis": "Kušadasi se nalazi na severnoj obali Egejskog mora.Od Izmira, jednog od većih turskih gradova, je udaljen 90 km a od aerodroma u Bodrumu oko 150 km.Naziv grada potiče od malog ostrva nazvanog „ostrvo ptica“ sa kojim je povezan uskim nasipom. Od malog ribarskog mesta prerastao je u jedan od glavnih turističkih centara ne egejskoj obali Turske, koji u sezoni poseti oko pola miliona turista.            Mnogi narodi su obeležili istoriju Kušadasija - Grci, Persijanci, Rimljani, Vizantijci, o čemu svedoče mnogi arheološki nalazi u okolinu grada. Drevna tvrđava iz XV veka nalazi se pored gradske plaže i predstavlja simbol grada. Duh otomanskog carstva možete osetiti na svakom koraku - šetajući kaldrmisanim ulicama, cenkajući se u nekoj od prodavnica i uživajući u specijalitetima turske kuhinje. Kušadasi krasi sedam predivnih plaža, nacionalni park, mnogobrojni restorani, turski barovi do kojih lako možete doći malim autobusima-dolmušima. Sam centar grada je dinamičan, pun različitih mesta za izlaske dok se van grada nalazi veliki broj hotela i plaža u mirnom okruženju.",
            "slike": [
                "https://i.imgur.com/Xr7tC1k.jpeg",
                "https://i.imgur.com/9O1Q9.jpeg",
                "https://i.imgur.com/ce5xcAr.jpeg",
                "https://i.imgur.com/cQkZ9iH.jpeg"
            ],
            "tip": "Letovanje",
            "prevoz": "avion",
            "cena": "50876",
            "maxOsoba": "79"
        },
        "-MNQftJa4rskH-dBqE9Z1": {
            "naziv": "Marmaris",
            "opis": "Marmaris - poznato letovalište u Turskoj, na obalama Egejskog mora. Nekada samo malo ribarsko naselje danas je preraslo u moderan turistički grad, jedan od najlepših na jugozapadnoj obali Turske. Marmaris je udaljen oko 90 km od aerodrome Dalaman i oko 150 km od aerodroma Milas u Bodrumu. U Marmarisu vlada sredozemna klima. Leta su duga, a lepo vreme je praktično zagarantovano od maja do kraja oktobra. Marmaris se nalazi u velikom prirodnom zalivu okružen borovim šumama. Dugo šetalište uz obalu mora čini ovo mesto veoma romantičnim. U starom gradu nalazi se marina poznata kao odredište luksuznih jahti iz celog sveta. Starim delom grada dominira tvrđava iz otomanskog perioda, koja bez obzira na oko nje podignute zgrade ili baš zahvaljujuci njima, predstavlja veoma živopisan spomenik istorije. Tu je i veliki bazar sa prodavnicama ćilima, tepiha, kože, nakita, porcelana i suvenira. Marmaris nudi ugodan odmor i sa svojim čudesnim plažama, lepom obalom, ljubaznim ljudima, dobrom hranom i u novije vreme sagrađenim prestižnim hotelima, postao je jedno od najlepših mesta za odmor.Ičmeler - izuzetno popularan turistički gradić u neposrednoj blizini Marmarisa. Nalazi se u uvali sa dugom peščanom plažom, najlepšom u regiji, okružen je planinama pod borovom šumom. Celo mesto je posvećeno isključivo turizmu sa izuzetno uređenom infrastrukturom koju čine hoteli, restorani, prodavnice... Sa Marmarisom je odlično povezan lokalnim dolmušima koji saobraćaju na nekoliko minuta.",
            "slike": [
                "https://i.imgur.com/G2CpQ7G.jpeg",
                "https://i.imgur.com/IDf3fDZ.jpeg",
                "https://i.imgur.com/QjTeoNa.jpeg",
                "https://i.imgur.com/7EFaYUX.jpeg"
            ],
            "tip": "Letovanje",
            "prevoz": "avion",
            "cena": "45889",
            "maxOsoba": "13"
        },
        "-MNQftJa4rskH-dBqE9Z2": {
            "naziv": "Belek",
            "opis": "Belek sa svojom sjajnom pozicijom na svega 40 kilometara od antalijskog aerodroma i mnoštvom luksuznih hotela okruženih gustim borovim šumama, sa dugim peščanim plažama predstavlja idealnu destinaciju za letnji odmor.Dobra pozicija Beleka, u čijoj se blizini nalaze i brojni istorijski lokaliteti (Aspendos, Perge, Side) omogućava ljubiteljima antičke kulture mogućnost za sadržajan boravak.Belek je i veoma poznata destinacija među ljubiteljima golfa. U blizini hotela se nalazi veliki broj vrhunskih golf terena koji zadovoljavaju kriterijume kako amaterskih tako i profesionalnih igrača.",
            "slike": [
                "https://i.imgur.com/exbQ5PA.jpeg",
                "https://i.imgur.com/bO54Wzy.jpeg",
                "https://i.imgur.com/WmAYEz0.jpeg"
            ],
            "tip": "Letovanje",
            "prevoz": "avion",
            "cena": "50876",
            "maxOsoba": "79"
        },
        "-MNQftJa4rskH-dBqE9Z3": {
            "naziv": "Side",
            "opis": "Side je jedan od najpoznatijih antičkih gradova u Turskoj, smešten na malom poluostrvu u Sredozemnom moru, na oko 75 km udaljenosti od Antalije. Prelepa obala Sidea i njegove plaže čine ga jednim od omiljenih turskih letovališta. Plaže Sidea, nedaleko od grada, poznate su kao istočna i zapadna plaža, obe su peščane, prekrivene zlatnim peskom. Side je primorski grad koga karakteriše mešavina drevnog i modernog, što možete videti kada prošetate duž ulice koja je postojala i mnogo vekova ranije, a danas se tu nalaze prodavnice i otmeni restorani. Rimska vladavina je dovela do napretka grada i ostavila za sobom ostatke brojnih zidina. Neke legende kažu da je predstavljao tajno mesto sastajanja čuvene Kleopatre i Marka Antonija. Side obiluje restoranima i tavernama u kojima možete probati tradicionalne turske specijalitete, kao i barovima i diskotekama. Ne zaboravite da kupite neki suvenir. Tradicionalni suvenir u Turskoj je nazar (evil eye stone) koji možete videti u različitim varijantama i na svakom koraku. Potiče iz turske mitologije i osnovna mu je funkcija da štiti od uroka. Okruglog je oblika, sa koncentričnim krugovima različitih boja, najčešće su napravljeni suveniri od stakla. Neki ga zovu plavim okom, jer najviše ih ima u plavoj boji, ili tigrovim okom.",
            "slike": [
                "https://i.imgur.com/4LRGGyb.jpeg",
                "https://i.imgur.com/PgVcwu1.jpeg",
                "https://i.imgur.com/6HXzmSc.jpeg",
                "https://i.imgur.com/Gm46ZVU.jpeg",
                "https://i.imgur.com/hFhqj6u.jpeg"
            ],
            "tip": "Letovanje",
            "prevoz": "avion",
            "cena": "44444",
            "maxOsoba": "79"
        },
        "-MNQftJa4rskH-dBqE9Z4": {
            "naziv": "Rim",
            "opis": " RIM je glavni i najveći grad Italije. Smešten je u centralnoj Italiji, u regionu Lacio, na mestu gde se spajaju reke Anijen i Tibar. Centar kulturnih i zabavnih dešavanja. Centralno mesto na turističkoj i modnoj mapi sveta. Svi putevi vode u Rim...",
            "slike": [
                "https://i.imgur.com/mHY2Ayb.jpeg",
                "https://i.imgur.com/bsDUf1e.jpeg",
                "https://i.imgur.com/Jaf1QAP.jpeg",
                "https://i.imgur.com/JmOPk9F.jpeg"
            ],
            "tip": "Gradovi Evrope",
            "prevoz": "autobus",
            "cena": "26345",
            "maxOsoba": "12"
        },
        "-MNQftJa4rskH-dBqE9Z5": {
            "naziv": "Milano",
            "opis": "MILANO grad kontrasta, svetske slave, usnulih ambijenata i užurbanih ljudi! Moderan, a u isto vreme i staromodan sa istorijskim spomenicima koji podsećaju na njegovo bogato istorijsko nasleđe. Upravo u Milanu se nalazi jedno od najčuvenijih remek-dela Leonarda da Vinčija, freska „Tajna večera“. Katedrala Duomo, jedna od najvećih gotskih crkvi na svetu.",
            "slike": [
                "https://i.imgur.com/Fia7una.jpeg",
                "https://i.imgur.com/g38s2Um.jpeg",
                "https://i.imgur.com/uyCP5UY.jpeg",
                "https://i.imgur.com/0eS4nvr.jpeg"
            ],
            "tip": "Gradovi Evrope",
            "prevoz": "autobus",
            "cena": "27854",
            "maxOsoba": "12"
        },
        "-MNQftJa4rskH-dBqE9Z6": {
            "naziv": "Venecija",
            "opis": "VENECIJA grad u Severnoj Italiji, poznat po kanalima, gondolama i bogatoj istoriji, glavni grad regije Veneto i istoimene talijanske provincije. Izrasla na ostrvima venecijanske lagune koje su njegovi prvi stanovnici koristili kao utočište pred varvarskim naletima.",
            "slike": [
                "https://i.imgur.com/qIL83Vn.jpeg",
                "https://i.imgur.com/AQGagK9.jpeg",
                "https://i.imgur.com/S1CHGHU.jpeg",
                "https://i.imgur.com/UptsBj2.jpeg",
                "https://i.imgur.com/J7uh4u3.jpeg",
                "https://i.imgur.com/5kMKf8Q.jpeg",
                "https://i.imgur.com/7twbq9o.jpeg",
                "https://i.imgur.com/2hNKHDR.jpeg",
                "https://i.imgur.com/ePvy1.jpeg"
            ],
            "tip": "Gradovi Evrope",
            "prevoz": "autobus",
            "cena": "22541",
            "maxOsoba": "12"
        }
    },
    "-MNVEu6iMr2EFlQO6TW62": {
        "-MNQftJa4rskH-dAqR9W0": {
            "naziv": "Nei Pori",
            "opis": "Nei Pori se zajedno sa svima poznatom Leptokarijom nalazi u grčkoj oblasti Pieria u Olimpskoj regiji. Smešten je na obali Egejskog mora, od grada Soluna je udaljen oko 105km, a od Paralije 48km.Nei Pori je nekada predstavljao skromno ribarsko selo. Danas je znatno urbanizovana, ali i dalje mirna lokacija sa neodoljivo ljubaznim i gostoljubivim meštanima. Sve ovo, zajedno sa idealnom klimom i blagim povetarcem zahvaljujući obližnjoj planini Olimp čini ga fantastičnom destinacijom za pravi odmor, naročito porodicama sa malom decom.",
            "slike": [
                "https://i.imgur.com/JHE7FzG.jpeg",
                "https://i.imgur.com/38DNu92.jpeg",
                "https://i.imgur.com/yW1f61r.jpeg"
            ],
            "tip": "Letovanje",
            "prevoz": "sopstveni",
            "cena": "50376",
            "maxOsoba": "77"
        },
        "-MNQftJa4rskH-dAqR9W1": {
            "naziv": "Leptokaria",
            "opis": "Leptokarija se nalazi u podnožju svima dobro poznate planine Olimp, na obali toplog Egejskog mora. Smeštena je u takozvanoj Olimpskoj regiji, a od grada Soluna udaljena samo oko 97km. Po poslednjem popisu, u ovom mestu živi malo manje od 5000 stanovnika.Jedna od specifičnosti ovog letovališta je to što se vodovod snabdeva kvalitetnom vodom sa izvora planine Olimp, pa ne morate baš u svakoj prilici kupovati flaširanu.",
            "slike": [
                "https://i.imgur.com/8eealIc.jpeg",
                "https://i.imgur.com/aIYwY6p.jpeg",
                "https://i.imgur.com/hI6NdRE.jpeg",
                "https://i.imgur.com/EbD3APf.jpeg"
            ],
            "tip": "Letovanje",
            "prevoz": "autobus",
            "cena": "41523",
            "maxOsoba": "77"
        },
        "-MNQftJa4rskH-dAqR9W2": {
            "naziv": "Asprovalta",
            "opis": "Asprovalta pripada opštini Volva i okrugu Solun, a od samog grada Soluna je udaljeno oko 80km. U njegovoj neposrednoj blizini, na samo 8km i par minuta vožnje se nalazi svima dobro poznato mesto Stavros. Sa tri strane je okružena planinama i bogatom prirodom, zbog čega je poznata po savršenoj klimi i svežem, čistom vazduhu.",
            "slike": [
                "https://i.imgur.com/NXNEpZB.jpeg",
                "https://i.imgur.com/Pn0UHiM.jpeg",
                "https://i.imgur.com/AqOxgvU.jpeg",
                "https://i.imgur.com/rEgCfvQ.jpeg"
            ],
            "tip": "Letovanje",
            "prevoz": "autobus",
            "cena": "50876",
            "maxOsoba": "79"
        },
        "-MNQftJa4rskH-dAqR9W3": {
            "naziv": "Stavros",
            "opis": "Stavros je malo mesto sa samo 4000 stanovnika, koje se nalazi u grčkoj oblasti Makedonija, tačnije u njenom središnjem delu. Pripada obali Egejskog mora i zalivu Strimoni. U njegovoj neposrednoj blizini su svima dobro poznata letovališta Asprovalta i Nea Vrasna, dok ga od Soluna deli samo 70km.Bilo da na ovo letovanje krenete kolima ili autobusom, očekuje vas vožnja od 700km iz Beograda, a iz Niša oko 480km. Put uopšte nije dugačak i naporan, pa je ovo jedan od glavnih razloga zašto je Stavros čest izbor srpskih posetilaca.Zbog toga malo ljudi iz naše zemlje putuje avionom, ali ako se odlučite za ovu opciju, najbliži aerodrom je naravno u Solunu.",
            "slike": [
                "https://i.imgur.com/HQjJRF5.jpeg",
                "https://i.imgur.com/8YrL46d.jpeg",
                "https://i.imgur.com/cMcL5sq.jpeg",
                "https://i.imgur.com/c1QUpXf.jpeg",
                "https://i.imgur.com/kIq4M4i.jpeg"
            ],
            "tip": "Letovanje",
            "prevoz": "autobus",
            "cena": "51454",
            "maxOsoba": "77"
        },
        "-MNQftJa4rskH-dAqR9W4": {
            "naziv": "Prag",
            "opis": "Glavni grad Republike Češke podignut je na obalama reke Vltave, sa dvorcem na stenovitom uzvišenju. Prag predstavlja veličanstven spoj prirode i arhitekture. Danas je on slika i prilika prestonice pre početka industrijske ere i jedna od retkih turističkih destinacija koje se mogu posetiti a koja je zadržala svoj izvorni oblik. Drveće i voćnjaci sa jedne strane spuštaju se tik do reke, a bezbroj kula, tornjeva i pozlaćenih kupola izdižu se u nebo. Upravo zato ga zovu i grad stotine tornjeva ili zlatni Prag. To je najbolje videti sa nekog od uzvišenja koja pružaju panoramski pogled na grad. Danas je ova prestonica poznata i po “Plešućoj zgradi” koja je dobila nadimak zbog svog neobičnog izgleda koji podseća na par koji pleše.",
            "slike": [
                "https://i.imgur.com/HJ7tFU2.jpeg",
                "https://i.imgur.com/4mJwavP.jpeg",
                "https://i.imgur.com/WovxmzR.jpeg",
                "https://i.imgur.com/QEq4pdc.jpeg",
                "https://i.imgur.com/on2Sj6m.jpeg"
            ],
            "tip": "Gradovi Evrope",
            "prevoz": "avion",
            "cena": "44111",
            "maxOsoba": "12"
        },
        "-MNQftJa4rskH-dAqR9W5": {
            "naziv": "Toskana",
            "opis": "TOSKANA je jedna od najromantičnijih regija Italije. Idealna je turistička destinacija za ljubitelje umetnosti koji pri tom vole da uživaju i u sporom ritmu countryside i vinskog turizma. Brežuljci pod vinogradima uobičajeni su pejzaž ove regije; gde god da krenete, sa obe strane puta prostiru se nepregledni vinogradi, tako da je odmah jasno zbog čega je Toskana jedna od najpopularnijih vinskih regija na svetu. Osim jako duge tradicije, koja seže još u doba Starog Rima, Toskana je čuvena i po nekoliko svetski priznatih vinskih oblasti – Chianti, Brunello di Montalcino i Vino Nobile di Montepulciano. Inače, više od 80% proizvodnje u Toskani čine crvena vina, po kojima je ona i postala slavna, a glavna sorta je sangiovese, koja se javlja u različitim lokalnim verzijama.",
            "slike": [
                "https://i.imgur.com/pSQfbd3.jpeg",
                "https://i.imgur.com/nobYaoy.jpeg",
                "https://i.imgur.com/aZLnuDt.jpeg",
                "https://i.imgur.com/1w0EmIg.jpeg",
                "https://i.imgur.com/HunVnmO.jpeg"
            ],
            "tip": "Gradovi Evrope",
            "prevoz": "autobus",
            "cena": "35201",
            "maxOsoba": "21"
        },
        "-MNQftJa4rskH-dAqR9W6": {
            "naziv": "Francuska",
            "opis": "Francuska skijanje... Uživajte u francuskoj sofisticiransti, poznatoj francuskoj kuhinji i božanstvenoj snežnoj idili. Zimovanje u Francuskoj 2023 se preporučuje svim ljubiteljima pravog skijanja. Francuska, zvanično Francuska Republika država je u zapadnoj Evropi. Francuskoj pripadaju i prekomorske teritorije, od kojih Gvadelup, Martinik, Francuska Gvajana i Reinion, Majot (u Indijskom okeanu) predstavljaju punopravni deo francuske republike. Površina Francuske (računajući i njene prekomorske posede) je 640.679 km², a njenog evropskog dela oko 547.030 km². Po površini je 42. država u svetu i najveća u Evropskoj uniji. Glavni i najveći grad Francuske je Pariz, a ostali veći gradovi su: Marselj, Lion, Nica, Nant, Strazbur i Lil.",
            "slike": [
                "https://i.imgur.com/OrzO5Nd.jpeg",
                "https://i.imgur.com/X2dpgUP.jpeg",
                "https://i.imgur.com/ub1UOGl.jpeg",
                "https://i.imgur.com/rd1QLOC.jpeg",
                "https://i.imgur.com/Wbe20Jn.jpeg"
            ],
            "tip": "Zimovanje",
            "prevoz": "sopstveni",
            "cena": "50876",
            "maxOsoba": "79"
        },
        "-MNQftJa4rskH-dAqR9W7": {
            "naziv": "Austrija",
            "opis": "Austrija Skijanje - Austrija je jedna od alpskih zemalja sa najrazvijenijom infrastrukturom za zimske sportove i zimski turizam. Skijanje Austrija 2022 ili zvanično Republika Austrija je država u centralnoj Evropi. Skijanje Austrija 2022 - Graniči se sa Nemačkom i Češkom na severu, Slovačkom i Mađarskom na istoku, Slovenijom i Italijom na jugu, Švajcarskom i Lihtenštajnom na zapadu i nema izlaz na more. Glavni grad je Beč. Po političkom uređenju Austrija je parlamentarna demokratija. Sastoji se od devet federalnih država, i jedna je od dve evropske države koje su proglasile stalnu neutralnost (druga je Švajcarska).",
            "slike": [
                "https://i.imgur.com/0pD1inU.jpeg",
                "https://i.imgur.com/Oe2Xy1Z.jpeg",
                "https://i.imgur.com/5lBmI5E.jpeg"
            ],
            "tip": "Zimovanje",
            "prevoz": "autobus",
            "cena": "80876",
            "maxOsoba": "49"
        },
        "-MNQftJa4rskH-dAqR9W8": {
            "naziv": "Slovenija",
            "opis": "Zimovanje u Sloveniji je popularno jer su cene uvek pristupačne, a skijališta su dobro održavana i uređena. Zimski aranžmani Slovenija - Poznata su takmičenja u skijaškim skokovima na Planici i trke u alpskom skijanju u Kranjskoj Gori i Pohorju. Tokom zime u skijaškim centrima Slovenije preko dana možete uživati u snežnim radostima, a uveče u dobrom provodu. Posetite Sloveniju za vreme skijaških trka ili skokova. Zimovanje Slovenija 2022 je možda pravo vreme za vas da uživate u dugim sunčanim i snežnim danima tokom februara i marta.",
            "slike": [
                "https://i.imgur.com/h2Ult2l.jpeg",
                "https://i.imgur.com/aZrq7YW.jpeg",
                "https://i.imgur.com/VAFxMqU.jpeg",
                "https://i.imgur.com/epFzema.jpeg",
                "https://i.imgur.com/3ecTSso.jpeg",
                "https://i.imgur.com/Bq4bvx1.jpeg"
            ],
            "tip": "Zimovanje",
            "prevoz": "sopstveni",
            "cena": "50876",
            "maxOsoba": "44"
        },
        "-MNQftJa4rskH-dAqR9W9": {
            "naziv": "Bosna i Hercegovina",
            "opis": "Bosna je pretežno planinska zemlja. Zauzima površinu od 51.209,2 km². Sastoji se od dve geografske i istorijske celine: bosanskog dela na severu (površine oko 42.000 km²) i nešto manjeg hecegovačkog na jugu. Bosna je mahom planinska zemlja, a isto se odnosi i na Hercegovinu. Poznato je da su Zimske olimpijske igre 1984. godine održane upravo u Sarajevo i ski centrima oko Sarajeva. Ski centri u BiH svake godine nastoje da podignu ponudu na viši nivo i posetiocima ponude nove sadržaje svake sezone.",
            "slike": [
                "https://i.imgur.com/hnnhsQM.jpeg",
                "https://i.imgur.com/RaiLS17.jpeg",
                "https://i.imgur.com/1mxMivE.jpeg",
                "https://i.imgur.com/PrNYIPc.jpeg",
                "https://i.imgur.com/rmTUJ.jpeg"
            ],
            "tip": "Zimovanje",
            "prevoz": "sopstveni",
            "cena": "39898",
            "maxOsoba": "20"
        }
    },
    "-MNVEu6iMr2EFlQO6TW63": {
        "-MNQftJa4rskH-dBqF9Z0": {
            "naziv": "Zanzibar",
            "opis": "Zanzibar u prevodu sa arapskog jezika znači ostrvo crnaca. Ovaj tropski raj je sastavni deo kopnene Tanzanije, smešten na istočnoj obali Afrike, a zapljuskuju ga vode Indijskog okeana. Prostire se na površini od 2461 km2, a broji oko 1 300 000 stanovnika, većinom Bantu crnaca, Arapa i Indusa.Kada je u pitanju veroispovest, 98% stanovništva su muslimani. Stoga je potrebno voditi računa o oblačenju prilikom posete nekih kulturnih centara i znamenitosti, kao i konzumiranju alkohola u javnosti, naročito za vreme njihovih praznika. Zvaničan jezik ovog koralnog ostrva je Svahili, ali ne brinite, meštani odlično znaju i engleski.Glavni grad se takođe zove Zanzibar, nalazi se na zapadnoj strani ostrva, a deli se na dva dela: stari deo, takozvani Kameni grad – Stone Town i novi deo Ng’ambo što u prevodu znači Druga strana.",
            "slike": [
                "https://i.imgur.com/nIhAjPQ.jpeg",
                "https://i.imgur.com/XJRsDJZ.jpeg",
                "https://i.imgur.com/CAx5RSt.jpeg",
                "https://i.imgur.com/WdrdkfY.jpeg",
                "https://i.imgur.com/ZGXCGm0.jpeg",
                "https://i.imgur.com/pN3ugei.jpeg"
            ],
            "tip": "Letovanje",
            "prevoz": "avion",
            "cena": "111256",
            "maxOsoba": "33"
        },
        "-MNQftJa4rskH-dBqF9Z1": {
            "naziv": "Maldivi",
            "opis": "Možda ovo nekima zvuči kao kliše, ali moramo priznati da su Maldivi odavno postali sinonim za luksuz, hedonizam i onu poznatu frazu ‘’raj na zemlji’’. Ova ostrvska država Indijskog okeana je smeštena u Južnoj Aziji, na oko 700km udaljenosti od obale Šri Lanke.Sastoji se od skoro 1200 malih koralnih ostrva koja su grupisana u 26 maldivskih atola. Svako od ovih ostrva predstavlja pravi egzotični raj, jedinstvene lepote netaknute prirode i bujne tropske vegetacije. Mnoga od njih su pusta i nenaseljena, a na najlepšim su izgrađeni impozantni turistički objekti.Maldivi broje malo manje od 400.000 stanovnika. Islamske su veroispovesti, a zvaničan jezik ove države je divehi. Meštani su veoma ljubazni i pristupačni i većina njih vrlo dobro zna engleski. Veliki su poštovaoci svoje religije i većina njih živi mirnim životom baveći se turizmom i ribolovom.",
            "slike": [
                "https://i.imgur.com/NJxBerG.jpeg",
                "https://i.imgur.com/vDxxJYW.jpeg",
                "https://i.imgur.com/bJVCCxK.jpeg",
                "https://i.imgur.com/X8x8IcT.png",
                "https://i.imgur.com/E6JJwO2.jpeg"
            ],
            "tip": "Letovanje",
            "prevoz": "avion",
            "cena": "103254",
            "maxOsoba": "22"
        },
        "-MNQftJa4rskH-dBqF9Z2": {
            "naziv": "Kopaonik",
            "opis": "Ukoliko je vaš izbor za zimovanje Kopaonik smeštaj koji zadovoljava sve potrebe turista, prirodne lepote koje oduzimaju dah, odlična hrana i pregršt aktivosti koje ova planina nudi uveriće vas da niste pogrešili.Iako je skijanje na Kopaoniku ono po čemu je ova planina poznata, i razlog zbog kog ona pre svega važi za zimsku destinaciju, leto na Kopaoniku je takođe odlična ideja. Za vas smo pripremili kompletan vodič za Kopaonik koji sadrži sve bitne informacije, ali i zanimljivosti o ovoj planini, pa saznajte šta vas tamo očekuje.",
            "slike": [
                "https://i.imgur.com/roanJFQ.jpeg",
                "https://i.imgur.com/pjX4CVq.jpeg",
                "https://i.imgur.com/5N6SBMa.jpeg",
                "https://i.imgur.com/wvTfgwW.jpeg",
                "https://i.imgur.com/AE9iOfg.jpeg",
                "https://i.imgur.com/Yw9hmxE.jpeg",
                "https://i.imgur.com/mbdQIzN.jpeg"
            ],
            "tip": "Zimovanje",
            "prevoz": "sopstveni",
            "cena": "77898",
            "maxOsoba": "50"
        }
    }
});

  return (
    <main>
      <div className="row">
        <div className="center-align">
          <h1>{agencies[agencyId]['naziv']}</h1>
        </div>
      </div>
      <div className="row">
        <div className="col m8 offset-m2 l4 offset-l4">
          <img className="responsive-img" src = {agencies[agencyId]['logo']} alt = "Logo" />
        </div>
      </div>
      <div className="row">
        <div className="center-align">
          <h3>Podaci</h3>
        </div>
      </div>
      <div className="row center-align">
        <div className="col s6 l3">
          Adresa:
          <strong>{agencies[agencyId]['adresa']}</strong>
        </div>
        <div className="col s6 l3">
          Godina osnivanja:
          <strong>{agencies[agencyId]['godina']}</strong>
        </div>
        <div className="col s6 l3">
          Broj telefona:
          <strong>{agencies[agencyId]['brojTelefona']}</strong>
        </div>
        <div className="col s6 l3">
          Email:
          <a href={"mailto: " + agencies[agencyId]['email']} rel="noopener noreferrer" target = "_blank">
          <strong>{agencies[agencyId]['email']}</strong>
                </a>
        </div>
      </div>
      <div className="row">
        <div className="center-align">
          <h3>Destinacije</h3>
        </div>
      </div>
      <div className = "row container">
      {
        Object.values(destinations[agencies[agencyId]['destinacije']]).map((value,index) => {
          return (
              <Destination item = {value} />
          );
        })
      }
      </div>
    </main>
  )
}

export default AgencyPage
