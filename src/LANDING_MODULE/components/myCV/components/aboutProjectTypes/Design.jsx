import React from 'react'

const Design = ({ lang }) => {
    return (
        <div>
            {lang === "eng" ?
                <div>
                    <h3>Design</h3>
                    <p>I have tried to keep the design and structure of this project simple.
                        I focused on two colors, dark and light green. The project also has a responsive design,
                        with one breaking point in screen size - 768px.</p>
                </div> :
                <div>
                    <h3>Dizains</h3>
                    <p>Esmu centies šī projekta dizianu un struktūru saglabāt vienkāršu.
                        Koncentrējos uz divām krāsām, tumšu un zaļu toni.
                        Projektam piemīt arī responsive dizains, ar vienu breaking point ekrāna
                        izmērā – 768px.</p>
                </div>}
        </div>
    )
}

export default Design
