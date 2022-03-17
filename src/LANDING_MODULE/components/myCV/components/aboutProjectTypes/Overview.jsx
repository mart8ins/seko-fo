import React from 'react';
import "./aboutStyle.css";

const Overview = ({ lang }) => {
    return (
        <div>
            {lang === "eng" ?
                <div className="content">
                    <h3>Overview</h3>
                    <p >
                        The front-end of the application is built using Javascript library - ReactJS, while pure
                        CSS is used for the styling. The back-end is built on NodeJS using the ExpressJS library.
                        For database i used MongoDB, more precisely, the Cloud Atlas cloud service. For adding and
                        storing photos I used a third party service – <a className="about__link__to__content" href="https://cloudinary.com/" target="_blank" rel="noreferrer">Cloudinary</a>. I have chosen the <a className="about__link__to__content" href="https://www.heroku.com/" target="_blank" rel="noreferrer">Heroku</a> Cloud 
                        platform for back-end hosting, but the front-end is published on <a className="about__link__to__content" href="https://www.netlify.com/" target="_blank" rel="noreferrer">Netlify</a>. I have tried to 
                        keep the design and structure of this project simple. The project also has a responsive design.
                        I've tried to make this project as mobile-friendly as possible, but for a better 
                        user experience, I recommend browsing the project on a laptop using Chrome WEB browser. 
                        The project has authentication. The user can register and log in if they are already 
                        registered. The user is authorized to access and change only their own content - add, 
                        edit and delete. The user password on the server is encrypted. After authentication, a 
                        token with a validity period of 1 hour is sent to the client. After hour, the application 
                        automatically redirects the user to the landing page and logs off user.
                    </p>

                </div> :
                <div className="content">
                    <h3>Pārskats</h3>
                    <p>Aplikācijas klienta puse ir būvēta izmantojot Javascript blibliotēku ReactJS, 
                        bet vizuālajam izpildījumam izmantots tīrs CSS. Savukārt servera puse ir būvēta uz 
                        NodeJS izmantojot bibliotēku ExpressJS. Izmantotā datubāze ir MongoDB, precīzāk, 
                        Cloud Atlas mākoņa serviss. Projektā ir iespēja arī augšuplādēt bildes, tam tiek 
                        izmantots <a className="about__link__to__content" href="https://cloudinary.com/" target="_blank" rel="noreferrer">Cloudinary</a> serviss. Serveris tiek uzturēts mākoņ platformā <a className="about__link__to__content" href="https://www.heroku.com/" target="_blank" rel="noreferrer">Heroku</a>, bet 
                        klienta puse ir publicēta <a className="about__link__to__content" href="https://www.netlify.com/" target="_blank" rel="noreferrer">Netlify</a>. Esmu centies šī projekta dizianu un struktūru 
                        saglabāt vienkāršu. Projektam piemīt arī responsive dizains. Esmu centies pielāgot 
                        aplikāciju maksimāli ērtai lietošanai arī mobilajās ierīcēs, bet labākai lietotāja 
                        pieredzei, iesaku projektu skatīties portatīvajā datorā izmantojot Chrome WEB pārlūku. 
                        Projektā ir autentifikācija. Lietotājs var reģistrēties un ienākt sistēmā, ja jau ir 
                        reģistrēts. Lietotājs ir autorizēts piekļūt un ietekmēt tikai savu saturu – pievienot, 
                        rediģēt un dzēst savu saturu. Uz servera lietotāja parole ir šifrēta. Ienākot sistēmā 
                        klientam tiek atsūtīts tokens, kura derīguma termiņš ir 1 stunda. Pēc stundas aplikācija
                         automātiski izlogo un pārvirza klientu uz galveno lapu.</p>
                </div>}
        </div>
    )
}

export default Overview
