import React from 'react';
import "./aboutStyle.css";

const Design = ({ lang }) => {
    return (
        <div>
            {lang === "eng" ?
                <div>
                    <h3>Design</h3>
                    <p>I have tried to keep the design and structure of this project simple.
                        I focused on two colors, <span className="design__dark">dark</span> and <span className="design__green">light green</span>. The project also has a responsive design,
                        with one breaking point in screen size - <span className="design__768px">768px</span>.</p>
                </div> :
                <div>
                    <h3>Dizains</h3>
                    <p>Esmu centies šī projekta dizianu un struktūru saglabāt vienkāršu.
                        Koncentrējos uz divām krāsām, <span className="design__dark">tumšu</span> un <span className="design__green">zaļu toni</span>.
                        Projektam piemīt arī responsive dizains, ar vienu breaking point ekrāna
                        izmērā – <span className="design__768px">768px</span>.</p>
                </div>}
        </div>
    )
}

export default Design