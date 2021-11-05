
// const workoutsSeed = [
//     {   wID: "w1",
//         name: "Tricep Pushdown Bar",
//         image: "tricep_pushdown_bar",
//         about: {
//             start_position: "Sākums",
//             end_position: "beigas",
//             muscle_groups: ["one", "two"],
//             description: "Baigi labi"
//         },
//         body_part: "Upper body"
//     },
//     { 
//         wID: "w2",
//         name: "Tricep Pushdown Rope",
//         image: "tricep_pushdown_rope"
//     },
//     { 
//         wID: "w3",
//         name: "Chest fly machine",
//         image: "chest_fly_machine"
//     },
//     { 
//         wID: "w4",
//         name: "Bench press",
//         image: "bench_press"
//     },
//     { 
//         wID: "w5",
//         name: "Incline bench press",
//         image: "incline_bench_press"
//     },
//     { 
//         wID: "w6",
//         name: "Overhead press",
//         image: "overhead_press"
//     },
//     { 
//         wID: "w7",
//         name: "Pec deck",
//         image: "pec_deck"
//     },
//     { 
//         wID: "w8",
//         name: "Shoulder press",
//         image: "shoulder_press"
//     },
//     { 
//         wID: "w9",
//         name: "Row",
//         image: "row"
//     },
//     { 
//         wID: "w10",
//         name: "Chest press",
//         image: "chest_press"
//     },
//     { 
//         wID: "w11",
//         name: "Low row",
//         image: "low_row"
//     },
//     { 
//         wID: "w12",
//         name: "Arm curl",
//         image: "arm_curl"
//     },
//     { 
//         wID: "w13",
//         name: "Lateral raise",
//         image: "lateral_raise"
//     },
//     { 
//         wID: "w14",
//         name: "Dip and Chin assist",
//         image: "dip_and_chin_assist"
//     },
//     { 
//         wID: "w15",
//         name: "Lat pulldown",
//         image: "lat_pulldown"
//     },
//     { 
//         wID: "w16",
//         name: "Delts front raise",
//         image: "delts_front_raise"
//     },
//     { 
//         wID: "w17",
//         name: "Back extension",
//         image: "back_extension"
//     },
//     { 
//         wID: "w18",
//         name: "Front squats",
//         image: "front_squats"
//     },
//     { 
//         wID: "w19",
//         name: "Deadlift",
//         image: "deadlift"
//     },
//     { 
//         wID: "w20",
//         name: "Seated calf raise",
//         image: "seated_calf_raise"
//     },
//     { 
//         wID: "w21",
//         name: "Leg press",
//         image: "leg_press"
//     },
//     { 
//         wID: "w22",
//         name: "Leg curl",
//         image: "leg_curl"
//     },
//     { 
//         wID: "w23",
//         name: "Leg extension",
//         image: "leg_extension"
//     }
// ]


const workoutsSeed = [
    {   wID: "w1u",
        body_part: "Upper body",
        name: "Tricep Pushdown Bar",
        image: "tricep_pushdown_bar",
        about: {
            start_position: "tricep_pushdown_bar_start",
            movement_position: "tricep_pushdown_bar_movement",
            end_position: "tricep_pushdown_bar_finish",
            muscle_groups: ["triceps"],
            instructions: "Stand one step away from the cable pulley, and grip a bar about shoulder width apart. Pull the handle down until your upper arms are perpendicular to the floor. This is the starting position. Push the handle down until your arms are fully extended. With control, let the handle up again."
        },
        video: "https://www.youtube.com/embed/GCa8Q4e7laU"
    },
   { 
        wID: "w18f",
        body_part: "Full body",
        name: "Front squats",
        image: "front_squats",
        about: {
                start_position: "front_squats_start",
                movement_position: "front_squats__movement",
                end_position: "front_squats_finish",
                muscle_groups: ["Upper back", "Quads", "Glutes", "Hamstrings"],
                instructions: "Safely load a barbell onto your front side, resting it on your shoulders. Hook your fingers in an underhand grip just outside your shoulders and push your elbows up. Begin to squat, initiating the movement in your hips and bending the knees, dropping your butt toward the floor. Ensure that your knees fall out and your chest stays up, resisting the pull to fall forward."
            },
            video: "https://www.youtube.com/embed/I5GaxSYLCSc"
    },
   { 
        wID: "w21l",
        body_part: "Lower body",
        name: "Leg press",
        image: "leg_press",
        about: {
                start_position: "leg_press_start",
                end_position: "leg_press_finish",
                muscle_groups: ["Quads", "Glutes", "Hamstrings", "Hips", "Calves"],
                instructions: "Sit down and position your feet on the sled with a shoulder width stance. Take a deep breath, extend your legs, and unlock the safeties. Lower the weight under control until the legs are roughly 45 degrees or slightly below. Drive the weight back to the starting position by extending the knees but don’t forcefully lockout."
            },
            video: "https://www.youtube.com/embed/-Nw8EWUrJuQ"
    },
    { 
        wID: "w2",
        name: "Tricep Pushdown Rope",
        image: "tricep_pushdown_rope"
    },
    { 
        wID: "w3",
        name: "Chest fly machine",
        image: "chest_fly_machine"
    },
    { 
        wID: "w4",
        name: "Bench press",
        image: "bench_press"
    },
    { 
        wID: "w5",
        name: "Incline bench press",
        image: "incline_bench_press"
    },
    { 
        wID: "w6",
        name: "Overhead press",
        image: "overhead_press"
    },
    { 
        wID: "w7",
        name: "Pec deck",
        image: "pec_deck"
    },
    { 
        wID: "w8",
        name: "Shoulder press",
        image: "shoulder_press"
    },
    { 
        wID: "w9",
        name: "Row",
        image: "row"
    },
    { 
        wID: "w10",
        name: "Chest press",
        image: "chest_press"
    },
    { 
        wID: "w11",
        name: "Low row",
        image: "low_row"
    },
    { 
        wID: "w12",
        name: "Arm curl",
        image: "arm_curl"
    },
    { 
        wID: "w13",
        name: "Lateral raise",
        image: "lateral_raise"
    },
    { 
        wID: "w14",
        name: "Dip and Chin assist",
        image: "dip_and_chin_assist"
    },
    { 
        wID: "w15",
        name: "Lat pulldown",
        image: "lat_pulldown"
    },
    { 
        wID: "w16",
        name: "Delts front raise",
        image: "delts_front_raise"
    },
    { 
        wID: "w17",
        name: "Back extension",
        image: "back_extension"
    },
    { 
        wID: "w19",
        name: "Deadlift",
        image: "deadlift"
    },
    { 
        wID: "w20",
        name: "Seated calf raise",
        image: "seated_calf_raise"
    },
    { 
        wID: "w22",
        name: "Leg curl",
        image: "leg_curl"
    },
    { 
        wID: "w23",
        name: "Leg extension",
        image: "leg_extension"
    }
];


export {
    workoutsSeed
}