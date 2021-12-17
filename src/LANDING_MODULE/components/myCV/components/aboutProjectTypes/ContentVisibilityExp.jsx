import React from 'react'

const ContentVisibilityExp = ({ lang }) => {
    return (
        <div>
            {lang === "eng" ?
                <div>
                    <h3>Content visibility</h3>
                    <p>The project has a main content feed page what shows all the content that the application
                        users have added (currently "Story" and "Workout"), which can also be filtered by type. This feed's
                        page also shows the most recently left comments and rated stories. You can also see friends who are
                        currently online. Each user has their own content profile where they can view all their content. Each
                        content type also has a statistics section with statistics on that content, such as the most commented
                        "Story" or "Workout" most common workout exercise, etc.. In the "Create" section you can find content creation
                        cards which contains option buttons. The main buttons are 1) create a new content and 2) view everything already
                        existing for content type. Additionaly for the Workout card, there is also a button that takes you to the
                        training page, where you can view all the training exercises in the system, get instructions on how to do each.
                        As for viewing other users profiles, you can see everything the same as in your own content profile, except for
                        statistics and possible "Story", which are set as private. I would also like to highlight the workout content in
                        more detail. All training days are grouped into a calendar. The outer cover of the content shows the year in which
                        the training data is available. When you open the year, you can see all the months in which the training days exist.
                        Training days are highlighted each month, with each date linking to a more detailed view of the training day. When
                        viewing a specific training day, there is an option to delete it as well. All sessions of the training day are also
                        visible. Each session can be expanded to see all the training exercises performed, the repetitions performed and the
                        weight information. The training exercise card takes you to a more detailed view, where there are instructions on how
                        to do it and it is possible to follow the progress of this exercise and statistics.</p>
                </div> :
                <div>
                    <h3>Radītā satura pārraudzība</h3>
                    <p>Projektā ir galvenā satura plūsmas lapa, kur ir redzams vis saturs, ko aplikācijas lietotāji ir
                        pievienojuši (uz šo brīdi "Story" un "Workout"), ko ir iespējams arī filtrēt pēc tipiem. Tāpat arī šajā plūsmas
                        lapā ir redzama pēdējā aktivitāte atstātajos komentāros un vērtējumos lietotāju "Story". Redzami arī draudzībā
                        esošie lietotāji, kas uz konkrēto brīdi ir tiešsaistē. Katram lietotājam ir savs satura profils, kur viņš var
                        apskatīt visu savu veidoto saturu. Katram satura tipam ir arī statistikas sadaļa, kur ir attiecīgā satura statistika,
                        piemēram, komentētākais "Story" vai "Workout" visbiežāk veiktais treniņa vingrinājums utt.. Sadaļā, kur ir iespējams
                        radīt saturu, ir satura kartiņas ar iespēju pogām. Pamata pogas ir 1) izveidot jaunu un 2) apskatīt visu jau esošo.
                        "Workout" kartiņai papildus ir arī poga, kas aizved uz mācību lapu, kur ir iespējams apskatīt visus sistēmā esošos
                        treniņa vingrinājumus, iegūt instrukciju par to, kā katrs ir veicams. Kas attiecas uz citu lietotāju profila apskati,
                        tad redzams ir vis tas pats, kas pašam savā satura profilā, izņemot statistiku un iespējamos "Story", kas ir uzstādīti
                        kā lietotāja privātie. Vēlos arī izcelt detalizētāk "Workout" satura apskati. Visas treniņu dienas tiek sagrupētas
                        kalendāra veidā. Satura ārējā apvalkā redzams gads, kurā ir eksistējoši treniņu dati. Atverot gadu, redzami visi
                        mēneši, kuros eksistē treniņu dienas. Treniņu dienas katrā mēnesī ir izceltas, kur katrs datums ir links uz
                        detlaizētāku treniņa dienas apskati. Apskatot konkrētu treniņa dienu, pastāv opcija viņu arī nodzēst. Tāpat arī
                        redzamas visas treniņu dienas sesijas. Katru sesiju ir iespējams paplašināt, redzot visus veiktos treniņa
                        vingrinājumus, vispārīgu atkārtojumu un svara informāciju. Treniņa vingrinājuma kartiņa aizved uz detalizētāku
                        tā apskati, kur ir instrukcijas, kā tas ir veicams un ir iespējams sekot līdzi progresam šī vingrinājumu izpildijumā
                        un statistikai.</p>
                </div>}
        </div>
    )
}

export default ContentVisibilityExp
