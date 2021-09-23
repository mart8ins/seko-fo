import {createContext, useContext, useState, useEffect} from "react";
import {AuthContext} from "../context/auth-context";
import {getAllStories} from "../fetch/users/story";

export const StoryContext = createContext();

const StoryContextProvider = ({children}) => {
    const {authData: {token, userId}} = useContext(AuthContext);
    const [stories, setStories] = useState([]); // ALL STORIES
    const [userStories, setUserStories] = useState([]); // USER STORIES

    useEffect(()=> {
        fetchAllStories();
    },[token]);

    const fetchAllStories = async () => {
        const res = await getAllStories(token);
        console.log(res)
        setStories(res.data.stories);
    }

    useEffect(()=> {
        const user = stories.filter((story)=> {
            return story.author.userId === userId;
        })
        setUserStories(user.reverse());
    },[stories]);

    return <StoryContext.Provider value={{
        stories, 
        fetchAllStories,
        userStories
        }}>
                {children}
    </StoryContext.Provider>
}

export default StoryContextProvider;