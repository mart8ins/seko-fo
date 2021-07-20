import React from "react";

function LandingPage() {

    const onc = () => {
        console.log("landing pages!!!!!")
    }
    return <div onClick={onc}>
        Landing page
    </div>

}

export default LandingPage;