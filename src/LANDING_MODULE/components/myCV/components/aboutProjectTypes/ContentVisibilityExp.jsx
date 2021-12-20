import React from 'react';
import "./aboutStyle.css";


const ContentVisibilityExp = ({ lang }) => {
    return (
        <div>
            {lang === "eng" ?
                <div>
                    <h3>Content visibility</h3>
                    <p>The project has a <a className="about__link__to__content" href="/contentFeed" target="_blank">main content feed page</a>
                        what shows all the content that the application users have added (currently "Story" and "Workout"), which can also be filtered by type.
                        This feed's page also shows the most <span className="content__visibility__highlight">recently left comments</span> and <span className="content__visibility__highlight">rated stories</span>. You can also see <span className="content__visibility__highlight">friends</span> who are
                        currently <span className="content__visibility__highlight">online</span>.

                        Each user has their <a className="about__link__to__content" href="/userContentFeed" target="_blank">own content profile</a> where they can view all their content. Each
                        content type also has a <span className="content__visibility__highlight">statistics section</span> with statistics on that content, such as the most commented
                        "Story" or "Workout" most common workout exercise, etc..


                        In the <a className="about__link__to__content" href="/create" target="_blank">"Create" section</a> you can find content creation
                        cards which contains <span className="content__visibility__highlight">option buttons</span>. The main buttons are 1) create a new content and 2) view everything already
                        existing for content type. Additionaly for the Workout card, there is also a button that takes you to the <a className="about__link__to__content" href="/about/workouts" target="_blank">learning page</a>, where you can <span className="content__visibility__highlight">view all the training exercises</span> in the system, get instructions on how to do each.


                        As for viewing other <span className="content__visibility__highlight">users profiles</span>, you can see everything the same as in your own content profile, except for
                        statistics and possible "Story", which are set as private. I would also like to highlight the workout content in
                        more detail.

                        All training days are grouped into a <a className="about__link__to__content" href="/userContentFeed?type=workout" target="_blank">calendar</a>.

                        The outer cover of the content shows the year in which
                        the training data is available. When you open the year, you can see <span className="content__visibility__highlight">all the months in which the training days exist</span>.
                        Training days are highlighted each month, with <span className="content__visibility__highlight">each date linking to a more detailed view</span> of the training day. When
                        viewing a specific training day, there is an option to delete it as well. All sessions of the training day are also
                        visible. Each <span className="content__visibility__highlight">session can be expanded to see all the training exercises performed</span>, the repetitions performed and the
                        weight information. The <span className="content__visibility__highlight">training exercise card takes you</span> to a more detailed view, where there are instructions on how
                        to do it and it is possible to follow the progress of this exercise and statistics.</p>
                </div> :
                <div>
                    <h3>Radītā satura pārraudzība</h3>
                    <p>Projektā ir <a className="about__link__to__content" href="/contentFeed" target="_blank">galvenā satura plūsmas lapa</a>, kur ir redzams vis saturs, ko aplikācijas lietotāji ir
                        pievienojuši (uz šo brīdi "Story" un "Workout"), ko ir iespējams arī filtrēt pēc tipiem.
                        Tāpat arī šajā plūsmas lapā ir redzama pēdējā <span className="content__visibility__highlight">aktivitāte atstātajos komentāros un vērtējumos</span> lietotāju "Story". Redzami arī draudzībā
                        esošie <span className="content__visibility__highlight">lietotāji</span>, kas uz konkrēto brīdi ir tiešsaistē.

                        Katram lietotājam ir savs <a className="about__link__to__content" href="/userContentFeed" target="_blank">satura profils</a>, kur viņš var
                        apskatīt visu savu veidoto saturu. Katram satura tipam ir arī <span className="content__visibility__highlight">statistikas sadaļa</span>, kur ir attiecīgā satura statistika,
                        piemēram, komentētākais "Story" vai "Workout" visbiežāk veiktais treniņa vingrinājums utt..


                        Sadaļā, kur ir iespējams <a className="about__link__to__content" href="/create" target="_blank">radīt saturu</a>, ir satura kartiņas ar iespēju pogām. Pamata pogas ir 1) izveidot jaunu un 2) apskatīt visu jau esošo.
                        "Workout" kartiņai papildus ir arī poga, kas aizved uz <a className="about__link__to__content" href="/about/workouts" target="_blank">mācību lapu</a>, kur ir iespējams <span className="content__visibility__highlight">apskatīt visus sistēmā esošos treniņa vingrinājumus</span>, iegūt instrukciju par to, kā katrs ir veicams.


                        Kas attiecas uz citu lietotāju profila apskati,
                        tad redzams ir vis tas pats, kas pašam savā satura profilā, izņemot statistiku un iespējamos "Story", kas ir uzstādīti
                        kā lietotāja privātie. Vēlos arī izcelt detalizētāk "Workout" satura apskati.

                        Visas treniņu dienas tiek sagrupētas <a className="about__link__to__content" href="/userContentFeed?type=workout" target="_blank">kalendāra veidā</a>.

                        Satura ārējā apvalkā redzams gads, kurā ir eksistējoši treniņu dati. Atverot gadu, redzami visi
                        mēneši, kuros eksistē treniņu dienas. <span className="content__visibility__highlight">Treniņu dienas katrā mēnesī ir izceltas</span>, kur katrs datums ir links uz
                        detlaizētāku treniņa dienas apskati. Apskatot konkrētu treniņa dienu, pastāv opcija viņu arī nodzēst. Tāpat arī
                        redzamas visas treniņu dienas sesijas. Katru <span className="content__visibility__highlight">sesiju ir iespējams paplašināt</span>, redzot visus veiktos treniņa
                        vingrinājumus, vispārīgu atkārtojumu un svara informāciju. <span className="content__visibility__highlight">Treniņa vingrinājuma kartiņa</span> aizved uz detalizētāku
                        tā apskati, kur ir instrukcijas, kā tas ir veicams un ir iespējams sekot līdzi progresam šī vingrinājumu izpildijumā
                        un statistikai.</p>
                </div>}
        </div>
    )
}

export default ContentVisibilityExp
