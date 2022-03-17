import React from 'react';
import "./aboutStyle.css";

const ConnectionsExp = ({ lang }) => {
    return (
        <div>
            {lang === "eng" ?
                <div className="content">
                    <h3>Connections</h3>
                    <p>This is one of the biggest <a className="about__link__to__content" href="/connections" target="_blank">parts</a> of the project, including the functionality and logic of 
                        the user's existing friendships with other users. Section with recieved and sent friendship
                         requests and section with all app users. Relevant friendship statuses on the user profile
                          card and in the user profile itself and also throughout all the application. Ability to
                           send an instant message via the user's profile card or the profile itself.</p>
                </div> :
                <div className="content">
                    <h3>Kontakti</h3>
                    <p>Šī ir viena no lielākajām projekta <a className="about__link__to__content" href="/connections" target="_blank">daļām</a> ietverot funkcionalitāti un loģiku par lietotāja 
                        esošajām draudzībām ar citiem lietotājiem. Saņemtie un nosūtītie uzaicinājumi. Visi aplikācijas 
                        lietotāji un savā draugu lokā esošie aplikācijas lietotāji. Attiecīgie statusi lietotāja profila 
                        kartiņai un pašā lietotāja profilā un viscaur aplikācijā. Iespēja nosūtīt ātro ziņu caur lietotāja 
                        profila kartiņu vai pašu profilu. </p>
                </div>}
        </div>
    )
}

export default ConnectionsExp
