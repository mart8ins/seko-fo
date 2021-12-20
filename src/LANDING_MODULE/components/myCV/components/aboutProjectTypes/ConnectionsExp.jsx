import React from 'react';
import "./aboutStyle.css";

const ConnectionsExp = ({ lang }) => {
    return (
        <div>
            {lang === "eng" ?
                <div>
                    <h3>Connections</h3>
                    <p>There are <a className="about__link__to__content" href="/connections" target="_blank">three main blocks</a> for this section of the application - the block,
                        which shows <span className="connections__highlights">all users</span> of the application (except users of the existing friendship,
                        meaning user connections). A block where are users with <span className="connections__highlights">accepted user connections</span>.
                        Last block is where you can see the users to whom a friend request has been <span className="connections__highlights">sent</span> and the users
                        from whom the friend request has been <span className="connections__highlights">recieved</span>. Each user is represented on a user card where also
                        are <span className="connections__highlights">option buttons</span>. With these option buttons you can send <span className="connections__highlights">direct message</span> to user,
                        <span className="connections__highlights">visit his profile</span> and also there is button what indicates if you recieved connections
                        request from user or you already sent him requests yourself and offcourse option to send
                        connection request if neather of previosly mentioned happend.</p>
                </div> :
                <div>
                    <h3>Kontakti</h3>
                    <p>Ir trīs <a className="about__link__to__content" href="/connections" target="_blank">galvenie bloki</a> šai aplikcijas sadaļai – bloks, kur redzami <span className="connections__highlights">visi aplikācijas lietotāji</span>
                        (izņemot pastāvošās draudzības lietotāji). Bloks,
                        kur redzami lietotāji, kas ir <span className="connections__highlights">draugu lokā</span>. Bloks, kas parāda lietotājus,
                        kam draudzības uzaicinājums ir <span className="connections__highlights">nosūtīts</span> un lietotājus no kuriem uzaicinājums ir
                        <span className="connections__highlights">saņemts</span>. Katrs lietotājs ir attēlots kartiņā, kur ir <span className="connections__highlights">opciju pogas</span>. Poga, lai nosūtīt ātru ziņu lietotājam.
                        Poga, lai <span className="connections__highlights">uzaicinātu draudzēties</span> vai atceltu draudzību. Tiek parādīts arī draudzības un <span className="connections__highlights">nosūtīta/saņemta aicinājuma</span>
                        status. Poga, kas aizved uz lietotāja profilu, kur arī ir iespējams veikt visas iepriekš minētās darbības
                        un redzēt aicinājumu statusus.</p>
                </div>}
        </div>
    )
}

export default ConnectionsExp
