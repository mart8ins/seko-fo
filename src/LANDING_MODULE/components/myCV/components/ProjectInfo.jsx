import React from 'react'

const ProjectInfo = ({ lang, pageToShow }) => {
    return (
        <div>
            {pageToShow === "elementi" &&
                <div className="other__project">
                    <div className="other__project__about">
                        {lang === "eng" ?
                            <p>
                                ExpressJS project. As database is used MongoDB Cloud Atlass. EJS template language is used for generating HMTL with Javascript.
                                E-shop. There are no default product categories, but you can create dynamic categories on the admins product management
                                page and add products to those categories accordingly. You can also add photos of products. Each product can be edited and
                                both the old and the new price can be changed, you can also mark the product as a sale product. It is also possible to hide
                                the product from trade. There are several order statuses in the order management section. In the received order you can see
                                the order and customer information. It is possible to change the status and leave a comment on the order status information
                                for the admin himself. The customer of the e-shop can place an order both by registering and without registering. When
                                registering, there is an advantage that the data previously entered in the customer's profile (phone number, address, etc.)
                                is automatically imported into the checkout. You can also keep track of the status of your orders on your profile.
                                You can login to view admin options <span className="span__title">user</span> <span className="span__login">viesis</span>, <span className="span__title">password</span> <span className="span__login">viesisviesis</span>.

                            </p>
                            :
                            <p>
                                ExpressJS projekts. Izmantotā datubāze ir MongoDB Cloud Atlass. HTML tiek ģenerēts ar Javascript izmantojot EJS template valodu.
                                E-veikals. Nav “default” preču kategoriju, bet admins produktu pārvaldības lapā var veidot dinamiskas kategorijas un
                                attiecīgi pievienot arī šīm kategorijām produktus. Ir iespējams pievienot arī bildes. Katru produktu var rediģēt un mainīt
                                gan veco, gan arī jauno cenu, pielikt atzīmi, ka produkts ir izpārdošanas produkts. Ir iespējams produktu arī paslēpt no
                                tirdzniecības. Pasūtījumu pārvaldības sadaļā pastāv vairāki pasūtījuma statusi. Saņemtajā pasūtījumā var redzēt pasūtījuma
                                un pasūtītāja informāciju. Ir iespējams mainīt statusu un atstāt pasūtījuma statusa informācijas komentāru priekš paša admina.
                                E-veikala klients var veikt pasūtījumu gan reģistrējoties, gan arī nereģistrējoties. Reģistrējoties ir priekšrocība, ka pie
                                “checkout” automātiski importējas pasūtītāja  profilā iepriekš ievadītie dati (tel. nummurs, adrese utt.). Tāpat arī savā profilā
                                var sekot līdzi savu pasūtījumu statusiem. Admina opciju apskatei variet ielogoties <span className="span__title">lietotājs</span> <span className="span__login">viesis</span>, <span className="span__title">parole</span> <span className="span__login">viesisviesis</span>.
                            </p>
                        }
                    </div>
                    <a className="other__project__link" href="https://limitless-oasis-47617.herokuapp.com/" target="_blank" rel="noreferrer">{lang === "eng" ? "Go to project" : "Uz projektu"}</a>
                </div>
            }

            {pageToShow === "blogzzz" &&
                <div className="other__project">
                    <div className="other__project__about">
                        {lang === "eng" ?
                            <p>ExpressJS project. As database is used MongoDB Cloud Atlass. EJS template language is used for generating HMTL with Javascript.
                                A simple blogging website with 5 themed sections. It is possible to comment and rate blogs. You can see all the blogs
                                you've created in your profile. It is also possible to view a summary of comments left by you on other users blogs and
                                to see comments left by other users on your own blogs.</p>
                            :
                            <p>ExpressJS projekts. Izmantotā datubāze ir MongoDB Cloud Atlass. HTML tiek ģenerēts ar Javascript izmantojot EJS
                                template valodu. Vienkārša blogošanas mājaslapa ar 5 tēmu sadaļām. Ir iespējama komentēšana un vērtēšana. Savā profilā
                                var redzēt visus savus izveidotos blogus. Tāpat arī iespējams apskatīt kopsavilkumu komentāriem, ko lietotājs atstājis
                                citu lietotāju blogos un redzēt arī citu lietotāju atstātos komentārus paša blogos.</p>

                        }
                    </div>
                    <a className="other__project__link" href="https://fathomless-waters-93208.herokuapp.com/" target="_blank" rel="noreferrer">{lang === "eng" ? "Go to project" : "Uz projektu"}</a>
                </div>
            }

            {pageToShow === "tvShows" &&
                <div className="other__project">
                    <div className="other__project__about">
                        {lang === "eng" ?
                            <p>ExpressJS project. EJS template language is used for generating HMTL with Javascript.
                                A simple website to search for TV shows. See their seasons and all episodes.
                                Used <a target="_blank" rel="noreferrer" href="http://api.tvmaze.com/">TVmaze API</a></p>
                            :
                            <p>ExpressJS projekts. HTML tiek ģenerēts ar Javascript izmantojot EJS template valodu.
                                Vienkārša mājaslapa, kur meklēt TV šovus. Var apskatīt to sezonas un sezonu epizodes.
                                Izmantots <a target="_blank" rel="noreferrer" href="http://api.tvmaze.com/">TVmaze API</a></p>

                        }
                    </div>
                    <a className="other__project__link" href="https://lit-shelf-87355.herokuapp.com/" target="_blank" rel="noreferrer">{lang === "eng" ? "Go to project" : "Uz projektu"}</a>
                </div>
            }
        </div>
    )
}

export default ProjectInfo
