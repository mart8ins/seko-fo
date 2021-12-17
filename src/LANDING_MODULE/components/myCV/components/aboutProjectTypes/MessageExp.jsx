import React from 'react'

const MessageExp = ({ lang }) => {
    return (
        <div>
            {lang === "eng" ?
                <div>
                    <h3>Messages</h3>
                    <p>By default, this section of the app can be used only to send messages to connected users list.
                        It is also possible to chat with users who are not in your connection list, and this is possible if you
                        or another person has sent an instant message via the user's card or user profile. After that in messages
                        section this user automaticly shows in user list with whom you can start to chat. I use Socket.IO technology
                        for messaging, which allows you to chat online in real time.</p>
                </div> :
                <div>
                    <h3>Ziņapmaiņa</h3>
                    <p>Šajā aplikācijas sadaļā pēc noklusējuma var nosūtīt ziņu tikai lietotājiem, kas ir draugu listē.
                        Ir arī iespēja sarakstīties ar lietotājiem, kas nav draugu lokā un tas ir iespējams tad, ja pats lietotājs
                        vai otra persona ir nosūtījusi ātro ziņu caur lietotāja kartiņu vai lietotāja profilu. Sarakstē izmantoju Socket.IO
                        tehnoloģiju, kas ļauj sarakstīties tiešsaistē redzot nosūtītās un saņemtās ziņas reālā laikā.</p>
                </div>}
        </div>
    )
}

export default MessageExp
