// LocalStorage-based auth for demo (no backend needed)
// Replace with Supabase when ready

const STORAGE_KEY = 'mulk30_user';

interface User {
  id: string;
  email: string;
  name: string;
  created_at: string;
}

const getStoredUser = (): User | null => {
  if (typeof window === 'undefined') return null;
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : null;
};

const setStoredUser = (user: User | null) => {
  if (typeof window === 'undefined') return;
  if (user) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
  } else {
    localStorage.removeItem(STORAGE_KEY);
  }
};

// Auth helpers (LocalStorage version)
export const signUp = async (email: string, password: string, name: string) => {
  // Simple validation
  if (!email || !password || password.length < 6) {
    return { data: null, error: { message: 'Email dhe fjalëkalimi janë të detyrueshëm (min 6 karaktere)' } };
  }
  
  const user: User = {
    id: crypto.randomUUID(),
    email,
    name,
    created_at: new Date().toISOString()
  };
  
  setStoredUser(user);
  return { data: { user }, error: null };
};

export const signIn = async (email: string, password: string) => {
  const stored = getStoredUser();
  
  if (stored && stored.email === email) {
    return { data: { user: stored }, error: null };
  }
  
  // For demo: auto-create account on login
  const user: User = {
    id: crypto.randomUUID(),
    email,
    name: email.split('@')[0],
    created_at: new Date().toISOString()
  };
  
  setStoredUser(user);
  return { data: { user }, error: null };
};

export const signOut = async () => {
  setStoredUser(null);
  return { error: null };
};

export const getUser = async () => {
  const user = getStoredUser();
  return { user, error: null };
};

export const getSession = async () => {
  const user = getStoredUser();
  return { session: user ? { user } : null, error: null };
};
