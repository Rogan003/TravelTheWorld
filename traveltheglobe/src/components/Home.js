import React, { useEffect, useState } from 'react'
import { db } from '../firebase-config' 
import Agency from './Agency'

const Home = () => {
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

  return (
    <main className = "center-align valign-wrapper">
      <div className = "row container">
      {
        Object.values(agencies).map((value,index) => {
          return (
              <Agency item = {value} address = {Object.keys(agencies)[index]} />
          );
        })
      }
      </div>
    </main>
  )
}

export default Home
