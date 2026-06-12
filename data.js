// Daily Workout and Meals — data
// Edit this file to change your workouts or meals. No build step needed.

// ----- WORKOUT -----
// Each day has a title, an optional subtitle, and a list of blocks.
// A block has a name and items. Each item has a `name` and optional `detail`.
const WORKOUT = {
  Mon: {
    title: "Strength A",
    subtitle: "Upper body",
    blocks: [
      {
        name: "Warm-up",
        items: [{ name: "Row warm-up", detail: "5 min easy" }],
      },
      {
        name: "Strength",
        items: [
          { name: "Dumbbell rows", detail: "10 lb · 3 × 12", info: "dumbbellRow" },
          { name: "Floor chest press", detail: "10 lb · 3 × 10", info: "chestPress" },
          { name: "Shoulder press", detail: "7–10 lb · 3 × 8", info: "shoulderPress" },
          { name: "Reverse fly", detail: "3–7 lb · 3 × 12", info: "reverseFly" },
          { name: "Bicep curl", detail: "7–10 lb · 3 × 10", info: "bicepCurl" },
        ],
      },
      {
        name: "Core",
        items: [{ name: "Dead bugs", detail: "3 × 10", info: "deadBug" }],
      },
    ],
  },

  Tue: {
    title: "Row",
    subtitle: "Steady cardio",
    blocks: [
      {
        name: "Cardio",
        items: [{ name: "Rowing machine", detail: "25–30 min" }],
      },
    ],
  },

  Wed: {
    title: "Strength B",
    subtitle: "Lower + full body",
    blocks: [
      {
        name: "Strength",
        items: [
          { name: "Chair squats", detail: "3 × 12", info: "chairSquat" },
          { name: "Romanian deadlift", detail: "10 lb each hand · 3 × 12", info: "romanianDeadlift" },
          { name: "Glute bridge", detail: "3 × 15", info: "gluteBridge" },
          { name: "Dumbbell row", detail: "3 × 12", info: "dumbbellRow" },
          { name: "Farmer carry", detail: "3 rounds", info: "farmerCarry" },
        ],
      },
    ],
  },

  Thu: {
    title: "Walk + Mobility",
    subtitle: "Active recovery",
    blocks: [
      {
        name: "Recovery",
        items: [
          { name: "Easy walk", detail: "" },
          { name: "Mobility / stretching", detail: "" },
        ],
      },
    ],
  },

  Fri: {
    title: "Upper Body Shaping",
    subtitle: "Sculpt + core",
    blocks: [
      {
        name: "Warm-up",
        items: [{ name: "Rowing machine", detail: "5 min easy pace" }],
      },
      {
        name: "Strength",
        items: [
          { name: "Dumbbell rows", detail: "10 lb · 3 × 10–12 / side", info: "dumbbellRow" },
          { name: "Dumbbell chest press", detail: "10 lb · 3 × 10–12", info: "chestPress" },
          { name: "Lateral raises", detail: "3–7 lb (light) · 3 × 12–15", info: "lateralRaise" },
          { name: "Reverse fly", detail: "3–7 lb · 3 × 12–15", info: "reverseFly" },
          { name: "Triceps overhead extension", detail: "7–10 lb · 3 × 10–12", info: "tricepsExtension" },
        ],
      },
      {
        name: "Core",
        items: [
          { name: "Dead bugs", detail: "3 × 10 / side", info: "deadBug" },
          { name: "Plank", detail: "3 rounds × 20–40 sec", info: "plank" },
        ],
      },
    ],
  },

  Sat: {
    title: "Rowing + Walk",
    subtitle: "Easy cardio",
    blocks: [
      {
        name: "Cardio",
        items: [
          { name: "Rowing", detail: "" },
          { name: "Walk", detail: "" },
        ],
      },
    ],
  },

  Sun: {
    title: "Rest",
    subtitle: "Recover & recharge",
    rest: true,
    blocks: [],
  },
};

// ----- EXERCISE INFO -----
// Shared form guidance + illustration for each main strength/core move.
// Items above reference these by their `info` key, so a move used on
// multiple days (e.g. dumbbell rows) only needs one entry here.
const EXERCISE_INFO = {
  dumbbellRow: {
    img: "images/dumbbell-row.png",
    cues: {
      posture: "Hinge forward ~45°, flat back, soft knees, gaze down.",
      core: "Brace your abs and keep shoulders square — no twisting or rounding.",
      breathing: "Exhale as you pull the weight to your hip, inhale as you lower.",
      tip: "Lead with the elbow and squeeze the shoulder blade at the top.",
    },
  },
  chestPress: {
    img: "images/chest-press.png",
    cues: {
      posture: "On your back, knees bent, feet flat. Wrists stacked over elbows.",
      core: "Press low back gently toward the floor; ribs down, don't arch.",
      breathing: "Exhale as you press up, inhale as you lower with control.",
      tip: "Stop the lower at floor/elbow level — no need to over-stretch.",
    },
  },
  shoulderPress: {
    img: "images/shoulder-press.png",
    cues: {
      posture: "Sit or stand tall, weights at shoulder height, elbows under wrists.",
      core: "Squeeze glutes and brace abs so you don't lean back.",
      breathing: "Exhale pressing overhead, inhale lowering to the shoulders.",
      tip: "Stop just short of locking out; keep ribs from flaring.",
    },
  },
  reverseFly: {
    img: "images/reverse-fly.png",
    cues: {
      posture: "Hinge forward, flat back, slight elbow bend, arms hanging down.",
      core: "Keep the spine long and still — move only at the shoulders.",
      breathing: "Exhale as you raise arms out wide, inhale as you lower.",
      tip: "Think 'wings' — squeeze shoulder blades, lead with the pinkies.",
    },
  },
  bicepCurl: {
    img: "images/bicep-curl.png",
    cues: {
      posture: "Stand tall, elbows tucked at your sides, shoulders relaxed.",
      core: "Brace abs so the torso stays still — no swinging or rocking.",
      breathing: "Exhale curling up, inhale lowering slowly.",
      tip: "Control the lower for 2–3 seconds; keep elbows pinned.",
    },
  },
  deadBug: {
    img: "images/dead-bug.png",
    cues: {
      posture: "On your back, arms up over chest, knees stacked over hips at 90°.",
      core: "Press low back into the floor the whole time — this is the point.",
      breathing: "Exhale as you extend opposite arm and leg, inhale to return.",
      tip: "Only reach as far as you can keep the back flat. Move slow.",
    },
  },
  chairSquat: {
    img: "images/chair-squat.png",
    cues: {
      posture: "Feet hip-width, chest tall, weight in your heels.",
      core: "Brace abs; push hips back first as if reaching for the seat.",
      breathing: "Inhale as you sit back, exhale as you stand up.",
      tip: "Tap the chair lightly — don't fully sit or relax at the bottom.",
    },
  },
  romanianDeadlift: {
    img: "images/romanian-deadlift.png",
    cues: {
      posture: "Soft knees, flat back, weights close to the legs.",
      core: "Brace abs and keep the spine long — hinge from the hips, not the waist.",
      breathing: "Inhale as you hinge down, exhale as you drive hips forward to stand.",
      tip: "Feel a stretch in the hamstrings; stop before the back rounds.",
    },
  },
  gluteBridge: {
    img: "images/glute-bridge.png",
    cues: {
      posture: "On your back, knees bent, feet flat and hip-width.",
      core: "Tuck ribs and brace abs so you lift with glutes, not the low back.",
      breathing: "Exhale as you lift hips, inhale as you lower.",
      tip: "Squeeze glutes at the top; make a straight line shoulder-to-knee.",
    },
  },
  farmerCarry: {
    img: "images/farmer-carry.png",
    cues: {
      posture: "Stand tall, shoulders back and down, weights at your sides.",
      core: "Brace abs hard and stay upright — resist leaning to either side.",
      breathing: "Breathe steadily and evenly; don't hold your breath.",
      tip: "Take small, controlled steps; keep the weights from swinging.",
    },
  },
  lateralRaise: {
    img: "images/lateral-raise.png",
    cues: {
      posture: "Stand tall, slight elbow bend, light weights at your sides.",
      core: "Brace abs; keep torso still — no swinging to lift.",
      breathing: "Exhale as you raise out to shoulder height, inhale to lower.",
      tip: "Stop at shoulder height; lead with the elbows, not the hands.",
    },
  },
  tricepsExtension: {
    img: "images/triceps-extension.png",
    cues: {
      posture: "Stand tall, one weight held overhead with both hands.",
      core: "Brace abs and keep ribs down so you don't arch the back.",
      breathing: "Inhale lowering behind the head, exhale extending up.",
      tip: "Keep elbows pointing forward and close — only the forearms move.",
    },
  },
  plank: {
    img: "images/plank.png",
    cues: {
      posture: "Forearms under shoulders, body in one straight line head-to-heels.",
      core: "Brace abs and squeeze glutes; don't let hips sag or pike up.",
      breathing: "Breathe slow and steady — never hold your breath.",
      tip: "Quality over time: stop the set when the form breaks.",
    },
  },
};

// ----- MEALS -----
// Flexible PCOS-friendly ~1600 kcal plan. Each section offers options you pick from.
const MEALS = {
  targetCalories: 1600,
  sections: [
    {
      id: "tea",
      name: "Morning",
      caption: "After waking · ~80–120 kcal",
      options: [
        {
          id: "tea",
          title: "Tea",
          items: ["Milk tea (1 cup)", "Keep sugar low if possible"],
        },
      ],
    },
    {
      id: "breakfast",
      name: "Breakfast",
      caption: "350–450 kcal · ~30g protein",
      options: [
        {
          id: "poha",
          title: "Poha Protein Bowl",
          meta: "~30g protein",
          items: [
            "1 medium bowl poha",
            "Peanuts (1 tbsp)",
            "Vegetables if available",
            "1 scoop Oziva chocolate plant protein",
          ],
        },
        {
          id: "chilla",
          title: "Moong Dal Chilla",
          meta: "~30–35g protein",
          items: [
            "2 medium moong dal chillas",
            "Paneer filling (50g)",
            "Curd (½–1 bowl)",
          ],
        },
        {
          id: "paratha",
          title: "Paratha Breakfast",
          meta: "~30g protein",
          items: [
            "1–2 small parathas",
            "Curd (1 bowl)",
            "1 scoop plant protein",
          ],
        },
      ],
    },
    {
      id: "lunch",
      name: "Lunch",
      caption: "450–550 kcal · 30–40g protein · eat family food",
      options: [
        {
          id: "rice",
          title: "Rice Meal",
          items: [
            "Rice: ¾–1 cup cooked",
            "Dal / rajma / chole / lobia: 1.5–2 bowls",
            "Curd: 1 bowl",
            "Add paneer 75–100g if protein is low",
          ],
        },
        {
          id: "roti",
          title: "Roti Meal",
          items: [
            "2 rotis",
            "Vegetable curry",
            "Dal (1–1.5 bowls)",
            "Curd",
          ],
        },
      ],
      note: "Don't eat roti/rice + only vegetables. Always pair with dal / curd / paneer.",
    },
    {
      id: "snack",
      name: "Snack",
      caption: "200–250 kcal · 20–30g protein · with tea",
      options: [
        {
          id: "shake",
          title: "Protein Shake",
          items: ["Oziva plant protein shake"],
        },
        {
          id: "yogurt",
          title: "Greek Yogurt Bowl",
          items: ["Greek yogurt / curd bowl", "Chia seeds"],
        },
        {
          id: "chana",
          title: "Roasted Chana",
          items: ["Roasted chana", "Tea"],
        },
        {
          id: "paneer",
          title: "Paneer Cubes",
          items: ["Paneer cubes (50–75g)"],
        },
      ],
    },
    {
      id: "dinner",
      name: "Dinner",
      caption: "400–500 kcal · ~30g protein · family meal",
      options: [
        {
          id: "dosa",
          title: "Dosa Day",
          items: ["2 dosa", "Sambar", "Curd", "Add paneer / tofu if protein is low"],
        },
        {
          id: "rotiD",
          title: "Roti Day",
          items: ["2 rotis", "Sabzi", "Dal", "Curd"],
        },
        {
          id: "idli",
          title: "Idli Day",
          items: ["3 idli", "Sambar", "Curd"],
        },
      ],
    },
  ],
  notes: [
    {
      id: "sweets",
      title: "If craving sweets (1–2× / week)",
      items: [
        "Keep it planned: small dessert portion after a meal",
        "Avoid eating sweets alone when very hungry",
        "Pairing after protein/fiber reduces the glucose spike",
      ],
    },
    {
      id: "habits",
      title: "PCOS habits to pair daily",
      items: [
        "10 minute walk after lunch or dinner",
        "Protein at breakfast",
        "Strength training 4 days / week",
        "7k–10k steps average",
        "Don't cut rice/roti completely — focus on protein + portion + consistency",
      ],
    },
  ],
};
