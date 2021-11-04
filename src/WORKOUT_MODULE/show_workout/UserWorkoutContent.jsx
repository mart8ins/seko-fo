import React, { useEffect, useState, useContext } from 'react';
import "./userWorkoutContent.css";
import { v4 as uuidv4 } from 'uuid';
import NoContentToShow from "../../utils/noContentToShow/NoContentToShow";
import { getAllUserTrainingDays } from "../../fetch/workout";
import { AuthContext } from '../../context/auth-context';
import StatsHeaderForContent from "../../utils/statsHeaderForContent/StatsHeaderForContent";
import LinkToWorkout from "./components/linkToWorkout/LinkToWorkout";
import Calendar from "../../utils/workouts/calendar/Calendar";

const UserWorkoutContent = ({ user }) => {
    const { authData: { token, userId } } = useContext(AuthContext);
    // user training days
    const [trainingDays, setTrainingDays] = useState([]);

    const [years, setYears] = useState([]);

    useEffect(() => {
        if (user) {
            fetchAllUserSessions();
        }
    }, [user])

    const fetchAllUserSessions = async () => {
        const res = await getAllUserTrainingDays(token, user._id);
        setTrainingDays(res.data.userTrainingSessions)
    }




    // to get current years/months day count - returns nummber of dates in month
    const getDaysInMonth = (year, month) => {
        return new Date(year, month, 0).getDate();
    }

    // filter training by years, months
    useEffect(() => {
        const trainingYears = [];
        let year = undefined;

        trainingDays.forEach((trainingDay) => {

            const splitingDate = trainingDay.date.split("-");
            // current days year
            const y = splitingDate[0];
            // current days month
            const m = splitingDate[1];
            const mW0 = m[0] === "0" ? m[1] : m; // remove 0 from front of the month if there is
            // current days date
            const d = splitingDate[2];
            // get curent years and months days count
            const daysInMonth = String(getDaysInMonth(y, mW0));

            year = y;

            const existingYearIndex = trainingYears.findIndex((element) => element.year === year);

            // if year exists 
            if (existingYearIndex !== -1) {

                const existingMonthIndex = trainingYears[existingYearIndex].months.findIndex((element) => element.month === mW0);

                // if month dosent exist in current year
                if (existingMonthIndex === -1) {
                    trainingYears[existingYearIndex].months.push({
                        month: mW0,
                        daysInMonth,
                        training: [trainingDay]
                    })
                }
                // if month exists already, need to update only training
                if (existingMonthIndex !== -1) {
                    trainingYears[existingYearIndex].months[existingMonthIndex].training.push(trainingDay);
                }
            }

            // if year dosent exist
            if (existingYearIndex === -1) {
                trainingYears.push({
                    year: year,
                    months: [{
                        month: mW0,
                        daysInMonth,
                        training: [trainingDay]
                    }]
                })
            }
        })

        setYears(trainingYears)
    }, [trainingDays])




    return (
        <div>
            {user && String(user._id) === userId && <StatsHeaderForContent title="My workouts" contentStats={[]} />}

            {years.map((year) => {
                return <Calendar key={uuidv4()} year={year} />
            })}



            {/* <div className="container__for__links__to__workouts__days">
                {trainingDays.map((training) => {
                    return <LinkToWorkout key={uuidv4} training={training} />
                })}
            </div> */}

            {trainingDays && !trainingDays.length && user &&
                <NoContentToShow contentType={"workouts"} linkToContent={"workout"} loggedUserID={userId} userID={String(user._id)} />
            }

        </div>
    )
}

export default UserWorkoutContent
