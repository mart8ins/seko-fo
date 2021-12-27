const workoutsSeed = [
    {   wID: "w1u",
        body_part: "Upper body",
        name: "Tricep Pushdown Bar",
        image: "tricep_pushdown_bar",
        about: {
            start_position: "tricep_pushdown_bar_start",
            movement_position: "tricep_pushdown_bar_movement",
            end_position: "tricep_pushdown_bar_finish",
            muscle_groups: ["Triceps"],
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
                movement_position: "leg_press_movement",
                end_position: "leg_press_finish",
                muscle_groups: ["Quads", "Glutes", "Hamstrings", "Hips", "Calves"],
                instructions: "Sit down and position your feet on the sled with a shoulder width stance. Take a deep breath, extend your legs, and unlock the safeties. Lower the weight under control until the legs are roughly 45 degrees or slightly below. Drive the weight back to the starting position by extending the knees but don’t forcefully lockout."
            },
            video: "https://www.youtube.com/embed/-Nw8EWUrJuQ"
    },
    { 
      wID: "w22l",
        body_part: "Upper body",
        name: "Tricep Pushdown Rope",
        image: "tricep_pushdown_rope",
        about: {
                start_position: "tricep_pushdown_rope_start",
                movement_position: "tricep_pushdown_rope_movement",
                end_position: "tricep_pushdown_rope_finish",
                muscle_groups: ["Triceps"],
                instructions: "Stand one step away from the cable pulley, and grip a rope about shoulder width apart. Pull the rope down until your upper arms are perpendicular to the floor. This is the starting position. Push the rope down until your arms are fully extended. With control, let the handle up again."
            },
            video: "https://www.youtube.com/embed/vB5OHsJ3EME"
    },
{ 
      wID: "w3u",
        body_part: "Upper body",
        name: "Chest fly machine",
        image: "chest_fly_machine",
        about: {
                start_position: "chest_fly_machine_start",
                movement_position: "chest_fly_machine_movement",
                end_position: "chest_fly_machine_finish",
                muscle_groups: ["Chest, Shoulders"],
                instructions: "Sit up tall. Relax the neck and shoulders. The feet should be flat on the floor. Grab the handles so that your palms are facing the front. Press the arms together in front of your chest with a slow, controlled movement. Keep a slight, soft bend in the elbows with wrists relaxed. Once the arms are fully closed in front of your chest, pause for one second. Slowly bring the arms back to the starting position, opening the chest but keeping posture strong and upright."
            },
            video: "https://www.youtube.com/embed/u56jywgbvE4"
    }, 
{   wID: "w4u",
        body_part: "Upper body",
        name: "Bench press",
        image: "bench_press",
        about: {
            start_position: "bench_press_start",
            movement_position: "bench_press_movement",
            end_position: "bench_press_finish",
            muscle_groups: ["Chest, Shoulders"],
            instructions: "Lie flat on your back on a bench. Grip the bar with hands just wider than shoulder-width apart, so when you’re at the bottom of your move your hands are directly above your elbows.  This allows for maximum force generation. Bring the bar slowly down to your chest as you breathe in. Push up as you breathe out, gripping the bar hard and watching a spot on the ceiling rather than the bar, so you can ensure it travels the same path every time."
        },
        video: "https://www.youtube.com/embed/gRVjAtPip0Y"
    },
    {   wID: "w5u",
        body_part: "Upper body",
        name: "Incline bench press",
        image: "incline_bench_press",
        about: {
            start_position: "incline_bench_press_start",
            movement_position: "incline_bench_press_movement",
            end_position: "incline_bench_press_finish",
            muscle_groups: ["Chest, Shoulders"],
            instructions: "Set up your bench at an angle of around 30-45°. Lie back and place your hands on the bar, slightly wider than shoulder-width apart, with your palms facing up. Lift the bar out of the rack and press it up until your arms are extended and your hands are above your shoulders. Slowly lower the bar to your chest, then press it back up again. Make sure to reduce the weight when you first try the incline bench press, compared with what you normally bench."
        },
        video: "https://www.youtube.com/embed/jPLdzuHckI8"
    },
{   wID: "w6u",
        body_part: "Upper body",
        name: "Overhead press",
        image: "overhead_press",
        about: {
            start_position: "overhead_press_start",
            movement_position: "overhead_press_movement",
            end_position: "overhead_press_finish",
            muscle_groups: ["Chest, Shoulders", "Arms", "Upper back"],
            instructions: "Stand with your body upright and core muscles braced, looking straight ahead. Hold the bar on your upper chest, gripping it with hands just wider than shoulder-width apart. Press the bar directly overhead. Don't tilt your hips forward during the move."
        },
        video: "https://www.youtube.com/embed/F3QY5vMz_6I"
    },
    {   wID: "w7u",
        body_part: "Upper body",
        name: "Pec deck",
        image: "pec_deck",
        about: {
            start_position: "pec_deck_start",
            movement_position: "pec_deck_movement",
            end_position: "pec_deck_finish",
            muscle_groups: ["Chest"],
            instructions: "Adjust the seat so that, when you sit on it and grip the handles, your elbows are level with your shoulders and your upper arms are parallel to the floor. Select a light to moderate weight. Sit on the machine and place your feet on the floor or the footrests. Reach up and back and grab the handles. Place your forearms against the arm pads. Pull your shoulders down and back and brace your abs. Without jerking or leaning forward, smoothly squeeze your arms together until the machine arms touch lightly in front of your chest. Pause for 1-2 seconds. Open your arms and return to the starting position, stopping just short of touching the weights together."
        },
        video: "https://www.youtube.com/embed/22Q3bmNZk0Y"
    },
  {   wID: "w8u",
        body_part: "Upper body",
        name: "Shoulder press",
        image: "shoulder_press",
        about: {
            start_position: "shoulder_press_start",
            movement_position: "shoulder_press_movement",
            end_position: "shoulder_press_finish",
            muscle_groups: ["Chest", "Shoulders", "Arms", "Middle back"],
            instructions: "Keep a tight core and flat back as you remain seated in the shoulder press machine. Look straight ahead as you hold on to the handles. Slowly, press the handles up above your head. Do not lock out your elbow. Slowly, bring the handles back down but do not let the weight stack touch."
        },
        video: "https://www.youtube.com/embed/7ijGii2c02o"
    },
{   wID: "w11u",
        body_part: "Upper body",
        name: "Low row",
        image: "low_row",
        about: {
            start_position: "low_row_start",
            movement_position: "low_row_movement",
            end_position: "low_row_finish",
            muscle_groups: ["Upper back", "Middle back"],
            instructions: "Sit on the platform with your knees bent and grasp the cable attachment. It often has a triangle handle, but it may be a bar. Position yourself with your knees slightly bent and so that you have to reach to grab the handle with outstretched arms yet without curling the lower back over. Brace the abdominals and you're ready to row. Pull the handle and weight back toward the lower abdomen while trying not to use the momentum of the row too much by moving the torso backward with the arms. Target the middle to upper back by keeping your back straight and squeezing your shoulder blades together as you row, chest out. Return the handle forward under tension to full stretch, remembering to keep that back straight even though flexed at the hips. Repeat the exercise for the desired number of repetitions."
        },
        video: "https://www.youtube.com/embed/xQNrFHEMhI4"
 },
{   wID: "w10u",
        body_part: "Upper body",
        name: "Chest press",
        image: "chest_press",
        about: {
            start_position: "chest_press_start",
            movement_position: "chest_press_movement",
            end_position: "chest_press_finish",
            muscle_groups: ["Chest"],
            instructions: "Adjust the height of the seat and sit with your back against the backrest of the machine. Push your wrists together, keeping a pronation grip. Without taking off your back from the backrest, stretch your arms while blowing and then return to the starting position."
        },
        video: "https://www.youtube.com/embed/xUm0BiZCWlQ"
 },
    {   wID: "w12u",
        body_part: "Upper body",
        name: "Arm curl",
        image: "arm_curl",
        about: {
            start_position: "arm_curl_start",
            movement_position: "arm_curl_movement",
            end_position: "arm_curl_finish",
            muscle_groups: ["Biceps", "Forearms"],
            instructions: "Sit down in the seat and place the back of your arms on the pad in front of you. Grab the handles with your palms facing upwards. Now curl the handles up to your shoulders and then lower them back down."
        },
        video: "https://www.youtube.com/embed/M_uPvGrMx_o"
    },
    {   wID: "w13u",
        body_part: "Upper body",
        name: "Lateral raise",
        image: "lateral_raise",
        about: {
            start_position: "lateral_raise_start",
            movement_position: "lateral_raise_movement",
            end_position: "lateral_raise_finish",
            muscle_groups: ["Shoulders "],
            instructions: "Adjust the seat height and sit facing the machine with your feet flat on the floor around shoulder width apart. Secure your arms in the padding and grip the handles. Look straight ahead. You are now ready to begin the exercise. With a bend in the elbows and moving only at the shoulders, begin pushing the weight up until your forearms are just above parallel. Contract your shoulders at the height of the movement and begin slowly lowering the weight using the same semicircle motion you used raise it."
        },
        video: "https://www.youtube.com/embed/0FUpcwj_1z4"
    },
{   wID: "w14u",
        body_part: "Upper body",
        name: "Assisted Pullup",
        image: "assisted_pullup",
        about: {
            start_position: "assisted_pullup_start",
            movement_position: "assisted_pullup_movement",
            end_position: "assisted_pullup_finish",
            muscle_groups: ["Back", "Arms", "Shoulders"],
            instructions: "Grasp the assisted-pullup machine and place your knees on the kneepad. Pull your shoulders back and down and lock in this position. Holding this position, simultaneously bring the other knee onto the pad as you lift up into the top starting position. Keeping your shoulders drawn inward, slowly lower your body until your arms are fully lengthened. Pause at the top position before lowering."
        },
        video: "https://www.youtube.com/embed/y00_rMYk1Oc"
    },
{   wID: "w15u",
        body_part: "Upper body",
        name: "Assisted dip",
        image: "assisted_dip",
        about: {
            start_position: "assisted_dip_start",
            movement_position: "assisted_dip_movement",
            end_position: "assisted_dip_finish",
            muscle_groups: ["Triceps", "Chest", "Shoulders"],
            instructions: "Stand or kneel on the levered platform, grasping the handles of the machine with straight elbows. See how far you can lower yourself without assistance and without arching your back. If you're able to bend your arms 90 degrees and push yourself back to a straight arm position, see how many more you can do. This is your baseline. Move the pin to the weight plate you think you need, and try again. If you select the right weight, you should be able to lower yourself smoothly and return to the starting position with moderate effort."
        },
        video: "https://www.youtube.com/embed/sxtUdH5lxP4"
    },

{   wID: "w16u",
        body_part: "Upper body",
        name: "Lat pulldown",
        image: "lat_pulldown",
        about: {
            start_position: "lat_pulldown_start",
            movement_position: "lat_pulldown_movement",
            end_position: "lat_pulldown_finish",
            muscle_groups: ["Back", "Arms"],
            instructions: " Grasp the bar with a wide grip with an overhand, knuckles-up grip. Other positions and grips are possible, but start with this standard position. Pull the bar down until it's approximately level with the chin. Exhale on the downward motion. While shifting just slightly backward is OK, aim to keep your upper torso stationary. Keep your feet flat on the floor and engage your abs as you pull. The bottom of the motion should be where your elbows can't move downward any more without moving backward. Be sure to stop at that point and do not go lower. Squeeze the shoulder blades together while maintaining square shoulders. From the bottom position, with the bar close to your chin, slowly return the bar to the starting position while controlling its gradual ascent. Don't let it crash into the weight plates. "
        },
        video: "https://www.youtube.com/embed/an1BMInTXLk"
    },
{   wID: "w17u",
        body_part: "Upper body",
        name: "Delts front raise",
        image: "delts_front_raise",
        about: {
            start_position: "delts_front_raise_start",
            movement_position: "delts_front_raise_movement",
            end_position: "delts_front_raise_finish",
            muscle_groups: ["Shoulders"],
            instructions: " Assume a shoulder width stance with the cable running between your legs and grasp the handle with both hands using a pronated grip. Inhale, brace your abs, and raise the arms vertically while keeping the elbows slightly bent. Once the arms are parallel with the floor, slowly lower the handle back to the starting position. Don’t lean back as you raise the arms, keep the motion under control and don’t rely on momentum."
        },
        video: "https://www.youtube.com/embed/PmXz2Ik-On4"
    },
{   wID: "w18u",
        body_part: "Upper body",
        name: "Back extension",
        image: "back_extension",
        about: {
            start_position: "back_extension_start",
            movement_position: "back_extension_movement",
            end_position: "back_extension_finish",
            muscle_groups: ["Back"],
            instructions: "Adjust the apparatus so that the top of the leg pad is just below your waist. Secure your feet in front of the ankle pads and place your thighs against the thigh pads, with your legs straight. Begin with your upper body aligned with your lower body and your arms crossed over your chest. In other words, your torso should form a straight line from head to toe, with your spine in a neutral position. Bend at the waist to lower your torso toward the floor. When your waist reaches roughly a 90-degree angle, contract your lower-back muscles to lift your torso back to the start position."
        },
        video: "https://www.youtube.com/embed/ph3pddpKzzw"
    },
{   wID: "w19f",
        body_part: "Full body",
        name: "Deadlift",
        image: "deadlift",
        about: {
            start_position: "deadlift_start",
            movement_position: "deadlift_movement",
            end_position: "deadlift_finish",
            muscle_groups: ["Back", "Legs", "Core"],
            instructions: "Stand with your mid-foot under the barbell. Bend over and grab the bar with a shoulder-width grip. Bend your knees until your shins touch the bar. Lift your chest up and straighten your lower back. Take a big breath, hold it, and stand up with the weight. Hold the weight for a second at the top, with locked hips and knees. Then return the weight to the floor by moving your hips back while bending your legs. Rest a second at the bottom and repeat. Your lower back must stay neutral to avoid injury. Rounding it during heavy Deadlifts is dangerous for your spine. It puts uneven pressure on your spinal discs which can injure them. Always Deadlift with a neutral lower back – maintain the natural inward curve of your lower spine."
        },
        video: "https://www.youtube.com/embed/ytGaGIn3SjE"
    },
{   wID: "w20l",
        body_part: "Lower body",
        name: "Seated calf raise",
        image: "seated_calf_raise",
        about: {
            start_position: "seated_calf_raise_start",
            movement_position: "seated_calf_raise_movement",
            end_position: "seated_calf_raise_finish",
            muscle_groups: ["Legs"],
            instructions: " Take a seat on the machine and place the balls of your feet on the platform with your toes pointed forward - your heels will naturally hang off. Position the base of quads under the knee pad and allow your hands to rest on top. Extend your ankles and release the safety bar. Lower the heels by dorsiflexing the ankles until the calves are fully stretched. Extend the ankles and exhale as you flex the calves. Keep the repetitions slow and controlled. Limit momentum and pause at the top to emphasize the contraction. "
        },
        video: "https://www.youtube.com/embed/JbyjNymZOt0"
    },

{   wID: "w30l",
        body_part: "Lower body",
        name: "Leg curl",
        image: "leg_curl",
        about: {
            start_position: "leg_curl_start",
            movement_position: "leg_curl_movement",
            end_position: "leg_curl_finish",
            muscle_groups: ["Legs"],
            instructions: " Lie face down on the leg curl machine, stretching your legs out fully. The roller pad should rest a few inches over your calves, just above the heels. Grasp the support handles on each side of the machine. Exhale and flex your knees, pulling your ankles as close to your buttocks as you can. Keep your hips firmly on the bench. Hold briefly. Inhale as you return your feet to the starting position in a slow and controlled movement. "
        },
        video: "https://www.youtube.com/embed/1Tq3QdYUuHs"
    },
{   wID: "w29l",
        body_part: "Lower body",
        name: "Leg extension",
        image: "leg_extension",
        about: {
            start_position: "leg_extension_start",
            movement_position: "leg_extension_movement",
            end_position: "leg_extension_finish",
            muscle_groups: ["Legs"],
            instructions: " Sit up straight on the leg extension machine – imagine you have a seat belt pulling your waist into the seat. Adjust the pad so it sits on top of your shins just above your feet, which should be pointing forward. Hold the side bars. Ensuring that you are using your quads to power the movement, rather than kicking up with your feet, extend your legs straight out in front of you. Then slowly lower them back to the starting position. "
        },
        video: "https://www.youtube.com/embed/YyvSfVjQeL0"
    }
]






export {
    workoutsSeed
}