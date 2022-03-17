import React, { useContext } from 'react';
import "./landingNotAuth.css";
import { AuthContext } from '../../../context/auth-context';


const LandingNotAuth = ({ language }) => {
    const { authData, setAuthData } = useContext(AuthContext);


    // to close auth modal when clicking outside the signup/login form
    const openAuthModal = () => {
        setAuthData({
            ...authData,
            showAuthModal: true
        })
    }

    return (
        <div className="landing__not__auth__container">

            <div className="landing__not__auth__intro__container">

                <div className="landing__not__auth__intro__about__project">
                    <h1>{language === "eng" ? "About this project" : "Par projektu"}</h1>
                    {
                    language === "eng" 
                    ? 
                    <p>
                        Dear visitor! My name is Martins Meisters. Thank you for your time to visit this website and to get to know me. 
                        The aim of this project is to address potential employers in the field of IT and to show what and what technologies 
                        I have been able to learn and master in selflearning process. I have a great desire to continue to develop myself, 
                        acquiring new technologies and knowledge in general, in order to achieve the main goal – full time job as a programmer. 
                        In this project, you will be able to get more information about me - description of my personality, work experience, 
                        education, learned programming technologies and how I came to the desire to change my career. I will also provide more 
                        detailed description about what i have done in this project itself with gained knowledge. Once again big thank you, 
                        and I look forward to seeing you soon! <span>You can register as a new user or login with test profile, 
                        email - "test@test.lv", password - "test"</span>.
                    </p>
                    : 
                    <p>
                        Esiet sveicināti! Mans vārds ir Mārtiņš Meisters. Pateicos, ka esat gatavi veltīt savu laiku šīs mājaslapas apskatei 
                        un manis iepazīšanai. Šis projekts ir tapis ar mērķi uzrunāt potenciālos darba devējus IT sfērā un parādīt, ko un kādas 
                        tehnoloģijas es esmu spējis apgūt pašmācības ceļā. Manī ir ļoti liela vēlme turpināt attīstīt sevi, apgūstot jaunas 
                        tehnoloģijas un zināšanas kopumā, lai sasniegtu galveno mērķi – pilnas slodzes darbu kā programmētājam. Šajā projektā, 
                        varēsiet iegūt plašāku informāciju par mani - manas personības aprakstu, darba pieredzi, izglītību, apgūtās programmēšanas
                         tehnoloģijas un to, kā nonācu līdz vēlmei mainīt savu karjeru. Tāpat arī aprakstīšu galvenās lietas, ko es šajā 
                         projektā esmu paveicis, izmantojot apgūtās zināšanas. Vēlreiz liels paldies par uzmanību, un es ceru, ka uz drīzu 
                         tikšanos! <span>Variet reģistrēties kā jauns lietotājs vai ienākt sistēmā ar testa profilu - "test@test.lv", parole - "test"</span>.
                    </p>
                    }

                    <div className="landing__not__auth__redirect">
                        <button onClick={openAuthModal}>{language === "eng" ? "See more" : "Apskatīt vairāk"}</button>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default LandingNotAuth
