export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          name: string | null;
          role: 'user' | 'admin';
          ramadan_start_date: string | null;
          timezone: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          name?: string | null;
          role?: 'user' | 'admin';
          ramadan_start_date?: string | null;
          timezone?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string | null;
          role?: 'user' | 'admin';
          ramadan_start_date?: string | null;
          timezone?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      challenge_days: {
        Row: {
          id: number;
          day_index: number;
          surah_number: number;
          ayah_number: number;
          arabic_text: string;
          albanian_translation: string;
          transliteration: string | null;
          published: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: number;
          day_index: number;
          surah_number: number;
          ayah_number: number;
          arabic_text: string;
          albanian_translation: string;
          transliteration?: string | null;
          published?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: number;
          day_index?: number;
          surah_number?: number;
          ayah_number?: number;
          arabic_text?: string;
          albanian_translation?: string;
          transliteration?: string | null;
          published?: boolean;
          created_at?: string;
          updated_at?: string;
        };
      };
      word_by_word: {
        Row: {
          id: number;
          day_id: number;
          word_index: number;
          arabic_word: string;
          albanian_meaning: string;
          created_at: string;
        };
        Insert: {
          id?: number;
          day_id: number;
          word_index: number;
          arabic_word: string;
          albanian_meaning: string;
          created_at?: string;
        };
        Update: {
          id?: number;
          day_id?: number;
          word_index?: number;
          arabic_word?: string;
          albanian_meaning?: string;
          created_at?: string;
        };
      };
      audio_tracks: {
        Row: {
          id: number;
          day_id: number;
          storage_path: string;
          reciter_name: string;
          duration_seconds: number | null;
          created_at: string;
        };
        Insert: {
          id?: number;
          day_id: number;
          storage_path: string;
          reciter_name: string;
          duration_seconds?: number | null;
          created_at?: string;
        };
        Update: {
          id?: number;
          day_id?: number;
          storage_path?: string;
          reciter_name?: string;
          duration_seconds?: number | null;
          created_at?: string;
        };
      };
      user_progress: {
        Row: {
          id: number;
          user_id: string;
          day_index: number;
          completed: boolean;
          completed_at: string | null;
          note: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: number;
          user_id: string;
          day_index: number;
          completed?: boolean;
          completed_at?: string | null;
          note?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: number;
          user_id?: string;
          day_index?: number;
          completed?: boolean;
          completed_at?: string | null;
          note?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
    };
    Views: {};
    Functions: {};
    Enums: {};
  };
}

// Type helpers
export type Profile = Database['public']['Tables']['profiles']['Row'];
export type ChallengeDay = Database['public']['Tables']['challenge_days']['Row'];
export type WordByWord = Database['public']['Tables']['word_by_word']['Row'];
export type AudioTrack = Database['public']['Tables']['audio_tracks']['Row'];
export type UserProgress = Database['public']['Tables']['user_progress']['Row'];
