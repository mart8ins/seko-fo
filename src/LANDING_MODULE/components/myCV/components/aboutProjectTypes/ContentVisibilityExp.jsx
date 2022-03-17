import React from 'react';
import "./aboutStyle.css";


const ContentVisibilityExp = ({ lang }) => {
    return (
        <div>
            {lang === "eng" ?
                <div className="content">
                    <h3>Content visibility</h3>
                    <p >
                    The project has a <a className="about__link__to__content" href="/contentFeed" target="_blank">main content feed page</a> what shows all the content that the 
                    application users have added (currently "Story" and "Workout"), which can also be filtered by type. 
                    This feed's page also shows the most recently left comments and rated stories. You can also see friends 
                    who are currently online. Each user has their <a className="about__link__to__content" href="/userContentFeed" target="_blank">own content profile</a> where they can view all their content. 
                    Each content type also has a statistics section with statistics on that content, such as the most commented 
                    "Story" or "Workout" most common workout exercise, etc.. In the <a className="about__link__to__content" href="/create" target="_blank">"Create" section</a> you can find content
                     creation cards which contains option buttons. The main buttons are 1) create a new content and 2) view
                      everything already existing for content type. Additionaly for the "Workout" card, there is also a button
                       that takes you to the <a className="about__link__to__content" href="/about/workouts" target="_blank">learning page</a>, where you can view all the training exercises in the system, get
                        instructions on how to do each. As for viewing other users profiles, you can see everything the same
                         as in your own content profile, except for statistics and possible "Story", which are set as private.
                          I would also like to highlight the workout content in more detail.  All training days are grouped into
                           a <a className="about__link__to__content" href="/userContentFeed?type=workout" target="_blank">calendar</a>. There is year and months when trainind day exists. Training days are highlighted each month,
                            with each date linking to a more detailed view of the training day.

                    </p>
                </div> :
                <div className="content">
                    <h3>Radītā satura pārraudzība</h3>
                    <p>Projektā ir <a className="about__link__to__content" href="/contentFeed" target="_blank">galvenā satura plūsmas lapa</a>, kur ir redzams vis saturs, ko aplikācijas lietotāji ir 
                        pievienojuši (uz šo brīdi "Story" un "Workout"), ko ir iespējams arī filtrēt pēc tipiem. Tāpat arī šajā
                         plūsmas lapā ir redzama pēdējā aktivitāte atstātajos komentāros un vērtējumos lietotāju "Story". Redzami
                        arī draudzībā esošie lietotāji, kas uz konkrēto brīdi ir tiešsaistē. Katram lietotājam ir savs <a className="about__link__to__content" href="/userContentFeed" target="_blank">satura profils</a>, kur viņš var apskatīt visu savu veidoto saturu. Katram satura tipam ir arī statistikas sadaļa,
                        kur ir attiecīgā satura statistika, piemēram, komentētākais "Story" vai "Workout" visbiežāk veiktais 
                        treniņa vingrinājums utt.. Sadaļā, kur ir iespējams <a className="about__link__to__content" href="/create" target="_blank">radīt saturu</a>, ir satura kartiņas ar iespēju pogām. 
                        Pamata pogas ir 1) izveidot jaunu un 2) apskatīt visu jau esošo. "Workout" kartiņai papildus ir arī poga, 
                        kas aizved uz <a className="about__link__to__content" href="/about/workouts" target="_blank">mācību lapu</a>, kur ir iespējams apskatīt visus sistēmā esošos treniņa vingrinājumus, iegūt 
                        instrukciju par to, kā katrs ir veicams. Kas attiecas uz citu lietotāju profila apskati, tad redzams
                         ir vis tas pats, kas pašam savā satura profilā, izņemot statistiku un iespējamos "Story", kas ir uzstādīti
                          kā lietotāja privātie. Vēlos arī izcelt detalizētāk "Workout" satura apskati. Visas treniņu dienas tiek
                           sagrupētas <a className="about__link__to__content" href="/userContentFeed?type=workout" target="_blank">kalendāra veidā</a>. Redzams gads un mēneši, kuros ir eksistējoši treniņu dati. Treniņu dienas katrā
                            mēnesī ir izceltas, kur katrs datums ir links uz detlaizētāku treniņa dienas apskati.  
</p>
                </div>}
        </div>
    )
}

export default ContentVisibilityExp
