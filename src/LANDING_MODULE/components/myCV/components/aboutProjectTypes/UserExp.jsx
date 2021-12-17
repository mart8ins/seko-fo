import React from 'react'

const UserExp = ({ lang }) => {
    return (
        <div>
            {lang === "eng" ?
                <div>
                    <h3>User</h3>
                    <p>The project has authentication. The user can register and log in if they are already registered.
                        The user is authorized to access and change only their own content - add, edit and delete also edit their profile data.
                        The user password on the server is encrypted. After authentication, a token with a validity period of 1 hour is sent to the client.
                        After that hour, the application automatically redirects the user to the landing page and logs off user.</p>
                </div> :
                <div>
                    <h3>Lietotājs</h3>
                    <p>Projektā ir autentifikācija. Lietotājs var reģistrēties un ienākt sistēmā, ja jau ir reģistrēts.
                        Lietotājs ir autorizēts piekļūt un ietekmēt tikai savu saturu – pievienot, rediģēt un dzēst savu saturu,
                        labot sava profila datus. Uz servera lietotāja parole ir šifrēta.
                        Ienākot sistēmā klientam tiek atsūtīts tokens, kura derīguma termiņš ir 1 stunda.
                        Pēc tās stundas aplikācija automātiski izlogo un pārvirza klientu uz galveno lapu.</p>
                </div>}
        </div>
    )
}

export default UserExp
