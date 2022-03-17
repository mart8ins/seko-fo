import React from 'react';
import "./aboutStyle.css";

const MessageExp = ({ lang }) => {
    return (
        <div >
            {lang === "eng" ?
                <div className="content">
                    <h3>Messages</h3>
                    <p>By default, this <a className="about__link__to__content" href="/messages" target="_blank" rel="noreferrer">section</a> of the app can be used only to send messages to connected 
                        (accepted friendships) users list. It is also possible to chat with users who are not in 
                        your connection list, and this is possible if you or another person has sent an instant message
                         via the user's card or user profile. After that in messages section this user automaticly shows
                          in user list with whom you can start to chat. I use <a className="about__link__to__content" href="https://socket.io/" target="_blank" rel="noreferrer">Socket.IO</a> technology for messaging, which
                           allows you to chat online in real time.</p>
                </div> :
                <div className="content">
                    <h3>Ziņapmaiņa</h3>
                    <p>Šajā aplikācijas <a className="about__link__to__content" href="/messages" target="_blank" rel="noreferrer">sadaļā</a> pēc noklusējuma var nosūtīt ziņu tikai lietotājiem, kas ir draugu listē. 
                        Ir arī iespēja sarakstīties ar lietotājiem, kas nav draugu lokā un tas ir iespējams tad, ja pats 
                        lietotājs vai otra persona ir nosūtījusi ātro ziņu caur lietotāja kartiņu vai lietotāja profilu. 
                        Sarakstē izmantoju <a className="about__link__to__content" href="https://socket.io/" target="_blank" rel="noreferrer">Socket.IO</a> tehnoloģiju, kas ļauj sarakstīties tiešsaistē redzot nosūtītās un 
                        saņemtās ziņas reālā laikā.</p>
                </div>}
        </div>
    )
}

export default MessageExp
