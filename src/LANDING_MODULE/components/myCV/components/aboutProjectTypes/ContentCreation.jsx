import React from 'react';
import "./aboutStyle.css";

const ContentCreation = ({ lang }) => {
    return (
        <div>
            {lang === "eng" ?
                <div>
                    <h3>Content creation</h3>
                    <p>In the application at the moment it is <a className="about__link__to__content" href="/create" target="_blank">possible to create</a> two different types of content  -
                        <span className="create__highlights">"Story"</span> and <span className="create__highlights">"Workout"</span>. A "Story" is like a blog or story what user can write. Other users can <span className="create__highlights">rate</span> and
                        <span className="create__highlights">comment</span> on it. The user can make the story private or public, as well as block the comments. "Workout"
                        is the <span className="create__highlights">storage of user workout day data</span>. You can select the day of training, enter the name of the training
                        session and save the training data. Training data includes a <span className="create__highlights">variety of possible exercises performed</span>, sets for
                        repetitions and corresponding weight for repetition. You can add several training sessions per training day.</p>
                </div> :
                <div>
                    <h3>Satura radīšana</h3>
                    <p>Uz doto brīdi aplikācijā ir iespējams <a className="about__link__to__content" href="/create" target="_blank">izveidot divu dažāda veida saturu</a> – stāstu jeb <span className="create__highlights">"Story"</span> un ievadīt
                        treniņa datus jeb <span className="create__highlights">"Workout"</span>. "Story" ir tāds kā blogs vai stāsts ko lietotājs var uzrakstīt. Citi lietotāji to
                        var <span className="create__highlights">novērtēt un komentēt</span>. Pats lietotājs stāstu var padarīt privātu vai publisku, tāpat arī nobloķēt komentārus.
                        "Workout" ir lietotāja <span className="create__highlights">treniņa dienas datu saglabāšana</span>. Izvēlas dienu, kad trenējās, ievada sesijas nosaukumu un
                        savada treniņa datus – izpildītos vingrinājumus un atkārtojumu skaitu, svaru. Treniņa dienā var pievienot vairākas
                        treniņa sesijas.</p>
                </div>}
        </div>
    )
}

export default ContentCreation
