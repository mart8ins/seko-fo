import React from 'react';
import "./aboutStyle.css";

const Overview = ({ lang }) => {
    return (
        <div>
            {lang === "eng" ?
                <div>
                    <h3>Overview</h3>
                    <p>The front-end of the application is built using Javascript library - <span className="overview__highlights">ReactJS</span>, while pure <span className="overview__highlights">CSS</span> is used for the visual execution.
                        The back-end is built on NodeJS using the <span className="overview__highlights">ExpressJS</span> library. For database i used <span className="overview__highlights">MongoDB</span>, more precisely, the
                        Cloud Atlas cloud service. For adding and storing photos I used a service – <a className="about__link__to__content" href="https://cloudinary.com/" target="_blank" rel="noreferrer">Cloudinary</a>. I have chosen the <a className="about__link__to__content" href="https://www.heroku.com/" target="_blank" rel="noreferrer">Heroku</a>
                        Cloud platform for back-end hosting, but the front-end is published on <a className="about__link__to__content" href="https://www.netlify.com/" target="_blank" rel="noreferrer">Netlify</a>. I have tried to keep the design and
                        structure of this project simple. I focused on two colors,
                        <span className="design__dark">dark</span> and <span className="design__green">light green</span>.
                        The project also has a responsive design, with one breaking point in screen size -
                        <span className="design__768px">768px</span>. I've tried to make the app as mobile-friendly as possible.
                        But for a better user experience, I recommend watching the project on a laptop using Chrome WEB browser.</p>

                </div> :
                <div>
                    <h3>Pārskats</h3>
                    <p>Aplikācijas front-end ir būvēts izmantojot Javascript blibliotēku <span className="overview__highlights">ReactJS</span>, bet vizuālajam izpildījumam
                        izmantots tīrs <span className="overview__highlights">CSS</span>. Savukārt back-end būvēts uz NodeJS izmantojot bibliotēku <span className="overview__highlights">ExpressJS</span>.
                        Izmantotā datubāze ir <span className="overview__highlights">MongoDB</span>, precīzāk, Cloud Atlas mākoņa serviss. Foto pievienošanai un
                        uzglabāšanai ir izmantots serviss <a className="about__link__to__content" href="https://cloudinary.com/" target="_blank" rel="noreferrer">Cloudinary</a>. Back-end uzturēšanai esmu izvēlējies Cloud platformu
                        <a className="about__link__to__content" href="https://www.heroku.com/" target="_blank" rel="noreferrer">Heroku</a>, bet front-end tiek publicēts servisā <a className="about__link__to__content" href="https://www.netlify.com/" target="_blank" rel="noreferrer">Netlify</a>. Esmu centies šī projekta dizianu un struktūru saglabāt
                        vienkāršu. Koncentrējos uz divām krāsām,
                        <span className="design__dark">tumšu</span> un <span className="design__green">zaļu toni</span>.
                        Projektam piemīt arī responsive dizains, ar vienu breaking point ekrāna izmērā – <span className="design__768px">768px</span>.
                        Esmu centies pielāgot aplikāciju maksimāli ērtai lietošanai arī mobilajās ierīcēs. Bet labākai lietotāja pieredzei, iesaku
                        projektu skatīties portatīvajā datorā izmantojot Chrome WEB pārlūku.</p>
                </div>}
        </div>
    )
}

export default Overview
