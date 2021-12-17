import React from 'react'

const ConnectionsExp = ({ lang }) => {
    return (
        <div>
            {lang === "eng" ?
                <div>
                    <h3>Connections</h3>
                    <p>There are three main blocks for this section of the application - the block,
                        which shows all users of the application (except users of the existing friendship,
                        meaning user connections). A block where are users with accepted user connections.
                        Last block is where you can see the users to whom a friend request has been sent and the users
                        from whom the friend request has been received. Each user is represented on a user card where also
                        are option buttons. With these option buttons you can send direct message to user,
                        visit his profile and also there is button what indicates if you recieved connections
                        request from user or you already sent him requests yourself and offcourse option to send
                        connection request if neather of previosly mentioned happend.</p>
                </div> :
                <div>
                    <h3>Kontakti</h3>
                    <p>Ir trīs galvenie bloki šai aplikcijas sadaļai – bloks, kur redzami visi aplikācijas lietotāji
                        (izņemot pastāvošās draudzības lietotāji). Bloks,
                        kur redzami lietotāji, kas ir draugu lokā. Bloks, kas parāda lietotājus,
                        kam draudzības uzaicinājums ir nosūtīts un lietotājus no kuriem uzaicinājums ir
                        saņemts. Katrs lietotājs ir attēlots kartiņā, kur ir opciju pogas. Poga, lai nosūtīt ātru ziņu lietotājam.
                        Poga, lai uzaicinātu draudzēties vai atceltu draudzību. Tiek parādīts arī draudzības un nosūtīta/saņemta aicinājuma
                        status. Poga, kas aizved uz lietotāja profilu, kur arī ir iespējams veikt visas iepriekš minētās darbības
                        un redzēt aicinājumu statusus.</p>
                </div>}
        </div>
    )
}

export default ConnectionsExp
