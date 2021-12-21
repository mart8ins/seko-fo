import React from 'react';
import "./aboutStyle.css";

const MessageExp = ({ lang }) => {
    return (
        <div>
            {lang === "eng" ?
                <div>
                    <h3>Messages</h3>
                    <p>By default, <a className="about__link__to__content" href="/messages" target="_blank" rel="noreferrer">this section</a> of the app can be used only to send <span className="messages__highlights">messages to connected users</span> list.
                        It is also possible to chat with users who are not in your connection list, and this is possible if you
                        or another person has sent an <span className="messages__highlights">instant message via the user's card or user profile</span>. After that in messages
                        section this user automaticly shows in user list with whom you can start to chat. I use <a className="about__link__to__content" href="https://socket.io/" target="_blank" rel="noreferrer">Socket.IO</a> technology
                        for messaging, which allows you to <span className="messages__highlights">chat online in real time</span>.</p>
                </div> :
                <div>
                    <h3>Ziņapmaiņa</h3>
                    <p>Šajā <a className="about__link__to__content" href="/messages" target="_blank" rel="noreferrer">aplikācijas sadaļā</a> pēc noklusējuma var nosūtīt ziņu tikai lietotājiem, kas ir <span className="messages__highlights">draugu listē</span>.
                        Ir arī iespēja sarakstīties ar lietotājiem, kas nav draugu lokā un tas ir iespējams tad, ja pats lietotājs
                        vai otra persona ir nosūtījusi <span className="messages__highlights">ātro ziņu caur lietotāja kartiņu vai lietotāja profilu</span>. Sarakstē izmantoju <a className="about__link__to__content" href="https://socket.io/" target="_blank" rel="noreferrer">Socket.IO</a> tehnoloģiju, kas ļauj <span className="messages__highlights">sarakstīties tiešsaistē</span> redzot nosūtītās un saņemtās ziņas reālā laikā.</p>
                </div>}
        </div>
    )
}

export default MessageExp
