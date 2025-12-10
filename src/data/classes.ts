export interface YogaClass {
  id: string;
  title: string;
  category: ClassCategory;
  subcategory: string;
  description: string;
  intention: string;
  duration: number;
  level: "Beginner" | "Intermediate" | "Advanced" | "All Levels";
  instructor: string;
  image?: string;
}

export type ClassCategory =
  | "Physical Focus"
  | "Inner Intentions"
  | "Philosophical & Spiritual"
  | "Nature-Inspired"
  | "Modern Wellness";

export const categoryDescriptions: Record<ClassCategory, string> = {
  "Physical Focus":
    "Build strength, flexibility, and body awareness through targeted physical practices.",
  "Inner Intentions":
    "Cultivate mental clarity, emotional balance, and personal growth through mindful movement.",
  "Philosophical & Spiritual":
    "Explore the deeper dimensions of yoga through ancient wisdom and sacred practices.",
  "Nature-Inspired":
    "Connect with the natural world through flows inspired by earth's rhythms and elements.",
  "Modern Wellness":
    "Address contemporary challenges with yoga designed for today's lifestyle.",
};

export const classes: YogaClass[] = [
  // Physical Focus
  {
    id: "hip-openers",
    title: "Hip Openers",
    category: "Physical Focus",
    subcategory: "Flexibility",
    description:
      "Release deep tension in the hips and pelvis through gentle, sustained stretches and supportive postures.",
    intention: "Release & Surrender",
    duration: 60,
    level: "All Levels",
    instructor: "Maya Chen",
  },
  {
    id: "backbends",
    title: "Heart-Opening Backbends",
    category: "Physical Focus",
    subcategory: "Strength & Flexibility",
    description:
      "Open the front body, strengthen the back, and cultivate courage through progressive backbend sequences.",
    intention: "Courage & Expansion",
    duration: 75,
    level: "Intermediate",
    instructor: "James Wilson",
  },
  {
    id: "grounding",
    title: "Grounding & Stability",
    category: "Physical Focus",
    subcategory: "Foundation",
    description:
      "Build a strong foundation through standing poses, balance work, and rooting practices.",
    intention: "Stability & Presence",
    duration: 60,
    level: "Beginner",
    instructor: "Priya Sharma",
  },

  // Inner Intentions
  {
    id: "mental-clarity",
    title: "Mental Clarity",
    category: "Inner Intentions",
    subcategory: "Mind",
    description:
      "Clear mental fog and sharpen focus through breathwork, movement, and meditation techniques.",
    intention: "Focus & Clarity",
    duration: 60,
    level: "All Levels",
    instructor: "Luna Rodriguez",
  },
  {
    id: "self-love",
    title: "Self-Love Practice",
    category: "Inner Intentions",
    subcategory: "Heart",
    description:
      "Nurture self-compassion and acceptance through gentle movement and loving-kindness meditation.",
    intention: "Compassion & Acceptance",
    duration: 75,
    level: "All Levels",
    instructor: "Maya Chen",
  },
  {
    id: "courage",
    title: "Cultivating Courage",
    category: "Inner Intentions",
    subcategory: "Empowerment",
    description:
      "Build inner strength and confidence through empowering poses and affirmation practices.",
    intention: "Bravery & Confidence",
    duration: 60,
    level: "Intermediate",
    instructor: "James Wilson",
  },
  {
    id: "letting-go",
    title: "Letting Go",
    category: "Inner Intentions",
    subcategory: "Release",
    description:
      "Release what no longer serves you through restorative poses and guided visualization.",
    intention: "Release & Freedom",
    duration: 90,
    level: "All Levels",
    instructor: "Luna Rodriguez",
  },

  // Philosophical & Spiritual
  {
    id: "chakra-awakening",
    title: "Chakra Awakening",
    category: "Philosophical & Spiritual",
    subcategory: "Energy",
    description:
      "Journey through the seven chakras with poses, mantras, and meditations for each energy center.",
    intention: "Energy Balance",
    duration: 90,
    level: "Intermediate",
    instructor: "Priya Sharma",
  },
  {
    id: "yamas-niyamas",
    title: "Living the Yamas & Niyamas",
    category: "Philosophical & Spiritual",
    subcategory: "Philosophy",
    description:
      "Explore yoga's ethical guidelines through discussion, movement, and practical application.",
    intention: "Ethical Living",
    duration: 75,
    level: "All Levels",
    instructor: "Maya Chen",
  },
  {
    id: "moon-cycles",
    title: "Moon Ritual",
    category: "Philosophical & Spiritual",
    subcategory: "Cycles",
    description:
      "Align your practice with lunar cycles through intention-setting and intuitive movement.",
    intention: "Intuition & Flow",
    duration: 90,
    level: "All Levels",
    instructor: "Luna Rodriguez",
  },
  {
    id: "ganesha-flow",
    title: "Ganesha Flow",
    category: "Philosophical & Spiritual",
    subcategory: "Devotional",
    description:
      "Honor the remover of obstacles through a dynamic flow and traditional mantras.",
    intention: "New Beginnings",
    duration: 75,
    level: "Intermediate",
    instructor: "Priya Sharma",
  },

  // Nature-Inspired
  {
    id: "forest-flow",
    title: "Forest Flow",
    category: "Nature-Inspired",
    subcategory: "Earth",
    description:
      "Ground into the earth's energy with sequences inspired by trees, mountains, and forest creatures.",
    intention: "Grounding & Connection",
    duration: 60,
    level: "All Levels",
    instructor: "Maya Chen",
  },
  {
    id: "ocean-rhythm",
    title: "Ocean Rhythm",
    category: "Nature-Inspired",
    subcategory: "Water",
    description:
      "Flow like water through wave-like sequences that promote fluidity and emotional release.",
    intention: "Flow & Fluidity",
    duration: 60,
    level: "All Levels",
    instructor: "Luna Rodriguez",
  },
  {
    id: "earth-rooting",
    title: "Earth & Rooting",
    category: "Nature-Inspired",
    subcategory: "Foundation",
    description:
      "Connect with earth energy through grounding postures and nature meditation.",
    intention: "Stability & Peace",
    duration: 75,
    level: "Beginner",
    instructor: "James Wilson",
  },

  // Modern Wellness
  {
    id: "office-reset",
    title: "Office Worker Relief",
    category: "Modern Wellness",
    subcategory: "Desk Recovery",
    description:
      "Counter the effects of sitting with stretches targeting neck, shoulders, back, and hips.",
    intention: "Relief & Reset",
    duration: 45,
    level: "Beginner",
    instructor: "James Wilson",
  },
  {
    id: "pain-relief",
    title: "Pain Relief & Recovery",
    category: "Modern Wellness",
    subcategory: "Therapeutic",
    description:
      "Gentle therapeutic sequences designed to address common sources of chronic pain.",
    intention: "Healing & Comfort",
    duration: 60,
    level: "Beginner",
    instructor: "Priya Sharma",
  },
  {
    id: "stress-burnout",
    title: "Stress & Burnout Reset",
    category: "Modern Wellness",
    subcategory: "Restoration",
    description:
      "Combat modern exhaustion with restorative poses, breathwork, and nervous system regulation.",
    intention: "Restoration & Peace",
    duration: 75,
    level: "All Levels",
    instructor: "Maya Chen",
  },
];

export const instructors = [
  {
    id: "maya-chen",
    name: "Maya Chen",
    title: "Founder & Lead Teacher",
    focus: "Vinyasa, Philosophy, Meditation",
    philosophy:
      "Yoga is not about touching your toes—it's about what you learn on the way down.",
    bio: "Maya founded Soulful Flow after 15 years of study across India, Nepal, and Europe. Her teaching weaves traditional wisdom with accessible, modern practice.",
    certifications: ["E-RYT 500", "YACEP", "Ayurveda Practitioner"],
  },
  {
    id: "priya-sharma",
    name: "Priya Sharma",
    title: "Senior Teacher",
    focus: "Chakras, Therapeutic Yoga, Sanskrit",
    philosophy:
      "Every breath is an opportunity to come home to yourself.",
    bio: "Born into a lineage of yoga teachers in Rishikesh, Priya brings authentic traditional knowledge combined with modern therapeutic approaches.",
    certifications: ["E-RYT 500", "Yoga Therapy Certification"],
  },
  {
    id: "james-wilson",
    name: "James Wilson",
    title: "Wellness Specialist",
    focus: "Athletic Yoga, Injury Recovery, Strength",
    philosophy:
      "True strength is found in the balance of effort and ease.",
    bio: "Former professional athlete turned yoga teacher, James specializes in helping modern professionals and athletes find balance through practice.",
    certifications: ["RYT 500", "Sports Yoga Certification", "Personal Trainer"],
  },
  {
    id: "luna-rodriguez",
    name: "Luna Rodriguez",
    title: "Spiritual Arts Teacher",
    focus: "Moon Rituals, Restorative, Sound Healing",
    philosophy:
      "In stillness, we find our deepest wisdom.",
    bio: "Luna's classes are known for their deeply meditative quality, combining gentle movement with sound healing and energy work.",
    certifications: ["RYT 500", "Sound Healing Practitioner", "Reiki Master"],
  },
];
