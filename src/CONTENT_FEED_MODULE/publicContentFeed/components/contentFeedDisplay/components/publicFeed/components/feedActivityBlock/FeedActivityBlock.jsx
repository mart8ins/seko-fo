import React from 'react';
import "./feedActivityBlock.css";
import ActivityBlock from "./components/ActivityBlock";

const FeedActivityBlock = () => {
    // fetchot jaunu modeli, kas seko lidzi activity???

    const activity = {
        type: "comment",
        fromUser: "Aiga Meistere",
        toUser: "Martins Meisters",
        story: "Brauciens uz kipru! Un bija labs piedziivojums, kad bijam tur",
        storyId: "1",
        data: {
            comment: "Labs stāsts, vienmēr esmu gribējusi brukt uz Kipru!!!! Un kur tiesi tu biji tur? ko a?",
            givenRate: "9",
            storiesAvarageRate: "5.1"
        },
        date: "09102021"
    }

    const activity1 = {
        type: "rate",
        fromUser: "Aiga Meistere",
        toUser: "Martins Meisters",
        story: "Brauciens uz kipru! Un bija labs piedziivojums, kad bijam tur",
        data: {
            comment: "Labs stāsts, vienmēr esmu gribējusi brukt uz Kipru!!!! Un kur tiesi tu biji tur? ko a?",
            givenRate: "9",
            storiesAvarageRate: "5.1"
        },
        date: "09102021"
    }


    return (
        <div className="activity__block__container">
            <ActivityBlock
                type={activity.type}
                fromUser={activity.fromUser}
                toUser={activity.toUser}
                story={activity.story}
                storyId={activity.storyId}
                data={activity.data}
                date={activity.date}
            />

            <ActivityBlock
                type={activity1.type}
                fromUser={activity1.fromUser}
                toUser={activity1.toUser}
                story={activity1.story}
                storyId={activity1.storyId}
                data={activity1.data}
                date={activity1.date}
            />
        </div>
    )
}

export default FeedActivityBlock
