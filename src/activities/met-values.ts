export const MET_TABLE: Record<string, { label: string; met: number; intensity: string; category: string }> = {
  running_easy:     { label: 'Easy Jog',          met: 7.0,  intensity: 'low',    category: 'Running'  },
  running_moderate: { label: 'Moderate Run',       met: 9.8,  intensity: 'medium', category: 'Running'  },
  running_sprint:   { label: 'Sprint / Intervals', met: 13.5, intensity: 'high',   category: 'Running'  },
  walking_casual:   { label: 'Casual Walk',        met: 2.5,  intensity: 'low',    category: 'Walking'  },
  walking_brisk:    { label: 'Brisk Walk',         met: 3.8,  intensity: 'medium', category: 'Walking'  },
  hiking:           { label: 'Hiking',             met: 5.3,  intensity: 'medium', category: 'Walking'  },
  cycling_leisure:  { label: 'Leisure Cycling',    met: 4.0,  intensity: 'low',    category: 'Cycling'  },
  cycling_moderate: { label: 'Moderate Cycling',   met: 8.0,  intensity: 'medium', category: 'Cycling'  },
  cycling_intense:  { label: 'Intense Cycling',    met: 10.0, intensity: 'high',   category: 'Cycling'  },
  football:         { label: 'Football',           met: 7.0,  intensity: 'high',   category: 'Sports'   },
  basketball:       { label: 'Basketball',         met: 6.5,  intensity: 'high',   category: 'Sports'   },
  swimming_casual:  { label: 'Casual Swimming',    met: 5.8,  intensity: 'medium', category: 'Swimming' },
  swimming_laps:    { label: 'Swimming Laps',      met: 8.3,  intensity: 'high',   category: 'Swimming' },
  tennis:           { label: 'Tennis',             met: 7.3,  intensity: 'high',   category: 'Sports'   },
  volleyball:       { label: 'Volleyball',         met: 4.0,  intensity: 'medium', category: 'Sports'   },
  weight_training:  { label: 'Weight Training',    met: 3.5,  intensity: 'medium', category: 'Gym'      },
  hiit:             { label: 'HIIT',               met: 8.0,  intensity: 'high',   category: 'Gym'      },
  yoga:             { label: 'Yoga',               met: 2.5,  intensity: 'low',    category: 'Gym'      },
  pilates:          { label: 'Pilates',            met: 3.0,  intensity: 'low',    category: 'Gym'      },
  jump_rope:        { label: 'Jump Rope',          met: 11.0, intensity: 'high',   category: 'Gym'      },
  dancing:          { label: 'Dancing',            met: 4.5,  intensity: 'medium', category: 'Other'    },
  martial_arts:     { label: 'Martial Arts',       met: 7.0,  intensity: 'high',   category: 'Other'    },
  climbing:         { label: 'Rock Climbing',      met: 8.0,  intensity: 'high',   category: 'Other'    },
};

export function computeCalories(activityType: string, durationMinutes: number, weightKg: number): number {
  const entry = MET_TABLE[activityType];
  if (!entry) return 0;
  return Math.round(entry.met * weightKg * (durationMinutes / 60));
}
