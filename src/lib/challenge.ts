// Challenge state management using localStorage
// No auth needed for MVP

export interface ChallengeState {
  startDate: string; // ISO date string
  completedDays: number[]; // Array of completed day indices (1-30)
}

const STORAGE_KEY = 'mulk30_challenge';

// Ramadan 2026 starts approximately March 17, 2026
// For demo/dev, use a configurable start date
const DEFAULT_START_DATE = '2026-02-28';

export function getState(): ChallengeState {
  if (typeof window === 'undefined') {
    return { startDate: DEFAULT_START_DATE, completedDays: [] };
  }
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    const state: ChallengeState = {
      startDate: DEFAULT_START_DATE,
      completedDays: [],
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    return state;
  }
  return JSON.parse(raw);
}

export function saveState(state: ChallengeState): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function getCurrentDay(state: ChallengeState): number {
  const start = new Date(state.startDate);
  const now = new Date();
  start.setHours(0, 0, 0, 0);
  now.setHours(0, 0, 0, 0);
  const diff = Math.floor((now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) + 1;
  return Math.max(1, Math.min(30, diff));
}

export function toggleDay(dayIndex: number): ChallengeState {
  const state = getState();
  const idx = state.completedDays.indexOf(dayIndex);
  if (idx >= 0) {
    state.completedDays.splice(idx, 1);
  } else {
    state.completedDays.push(dayIndex);
  }
  state.completedDays.sort((a, b) => a - b);
  saveState(state);
  return state;
}

export function isDayCompleted(dayIndex: number): boolean {
  return getState().completedDays.includes(dayIndex);
}

export function getStreak(state: ChallengeState): number {
  const currentDay = getCurrentDay(state);
  let streak = 0;
  // Count backwards from current day (or day before if today not done)
  let checkDay = state.completedDays.includes(currentDay) ? currentDay : currentDay - 1;
  while (checkDay >= 1 && state.completedDays.includes(checkDay)) {
    streak++;
    checkDay--;
  }
  return streak;
}

export function getProgress(state: ChallengeState): number {
  return Math.round((state.completedDays.length / 30) * 100);
}

export type DayStatus = 'completed' | 'today' | 'upcoming' | 'missed';

export function getDayStatus(dayIndex: number, state: ChallengeState): DayStatus {
  const currentDay = getCurrentDay(state);
  if (state.completedDays.includes(dayIndex)) return 'completed';
  if (dayIndex === currentDay) return 'today';
  if (dayIndex < currentDay) return 'missed';
  return 'upcoming';
}

export function setStartDate(date: string): void {
  const state = getState();
  state.startDate = date;
  saveState(state);
}
