import { create } from 'zustand';

export interface AuthActions {
  /**
   * 로그인 여부 설정
   */
  setIsLoggedIn: (value: boolean) => void;
}

export interface AuthState {
  /**
   * 로그인 여부
   */
  isLoggedIn: boolean;
  actions: AuthActions;
}

export const authStore = create<AuthState>(set => ({
  isLoggedIn: false,
  actions: {
    setIsLoggedIn: (value: boolean) => set(() => ({ isLoggedIn: value })),
  },
}));

// State
export const useIsLoggedIn = () => authStore(state => state.isLoggedIn);

// Actions
export const useAuthActions = () => authStore(state => state.actions);
