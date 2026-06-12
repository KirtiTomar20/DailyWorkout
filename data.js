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
          { name: "Dumbbell rows", detail: "10 lb · 3 × 12" },
          { name: "Floor chest press", detail: "10 lb · 3 × 10" },
          { name: "Shoulder press", detail: "7–10 lb · 3 × 8" },
          { name: "Reverse fly", detail: "3–7 lb · 3 × 12" },
          { name: "Bicep curl", detail: "7–10 lb · 3 × 10" },
        ],
      },
      {
        name: "Core",
        items: [{ name: "Dead bugs", detail: "3 × 10" }],
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
          { name: "Chair squats", detail: "3 × 12" },
          { name: "Romanian deadlift", detail: "10 lb each hand · 3 × 12" },
          { name: "Glute bridge", detail: "3 × 15" },
          { name: "Dumbbell row", detail: "3 × 12" },
          { name: "Farmer carry", detail: "3 rounds" },
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
          { name: "Dumbbell rows", detail: "10 lb · 3 × 10–12 / side" },
          { name: "Dumbbell chest press", detail: "10 lb · 3 × 10–12" },
          { name: "Lateral raises", detail: "3–7 lb (light) · 3 × 12–15" },
          { name: "Reverse fly", detail: "3–7 lb · 3 × 12–15" },
          { name: "Triceps overhead extension", detail: "7–10 lb · 3 × 10–12" },
        ],
      },
      {
        name: "Core",
        items: [
          { name: "Dead bugs", detail: "3 × 10 / side" },
          { name: "Plank", detail: "3 rounds × 20–40 sec" },
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
