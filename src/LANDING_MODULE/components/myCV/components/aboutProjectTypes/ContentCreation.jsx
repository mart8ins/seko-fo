import React from 'react'

const ContentCreation = ({ lang }) => {
    return (
        <div>
            {lang === "eng" ?
                <div>
                    <h3>Content creation</h3>
                    <p>In the application at the moment it is possible to create two different types of content  -
                        "Story" and "Workout". A "Story" is like a blog or story what user can write. Other users can rate and
                        comment on it. The user can make the story private or public, as well as block the comments. "Workout"
                        is the storage of user workout day data. You can select the day of training, enter the name of the training
                        session and save the training data. Training data includes a variety of possible exercises performed, sets for
                        repetitions and corresponding weight for repetition. You can add several training sessions per training day.</p>
                </div> :
                <div>
                    <h3>Satura radīšana</h3>
                    <p>Uz doto brīdi aplikācijā ir iespējams izveidot divu dažāda veida saturu – stāstu jeb "Story" un ievadīt
                        treniņa datus jeb "Workout". "Story" ir tāds kā blogs vai stāsts ko lietotājs var uzrakstīt. Citi lietotāji to
                        var novērtēt un komentēt. Pats lietotājs stāstu var padarīt privātu vai publisku, tāpat arī nobloķēt komentārus.
                        "Workout" ir lietotāja treniņa dienas datu saglabāšana. Izvēlas dienu, kad trenējās, ievada sesijas nosaukumu un
                        savada treniņa datus – izpildītos vingrinājumus un atkārtojumu skaitu, svaru. Treniņa dienā var pievienot vairākas
                        treniņa sesijas.</p>
                </div>}
        </div>
    )
}

export default ContentCreation
