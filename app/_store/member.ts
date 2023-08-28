import { create } from 'zustand';

export interface MemeberState {
  memberInfo: {
    email: string;
    nickname: string;
  };
  actions: MemberActions;
}

export interface MemberActions {
  setMemberInfo: (value: MemeberState['memberInfo']) => void;
}

export const memeberStore = create<MemeberState>(set => ({
  memberInfo: {
    email: '',
    nickname: '',
  },
  actions: {
    setMemberInfo: (value: MemeberState['memberInfo']) => set(() => ({ memberInfo: value })),
  },
}));

// State
export const useMemeberInfo = () => memeberStore(state => state.memberInfo);

// Actions
export const useMemberActions = () => memeberStore(state => state.actions);
