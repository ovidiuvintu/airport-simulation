import { create } from 'zustand';

export const useCounterStore = create((set) => ({
      count: 0, // Initial state
      increment: () => set((state) => ({ count: state.count + 1 })), // Action to update state
      decrement: () => set((state) => ({ count: state.count - 1 })), // Another action
}));

// The store holds the state and the logic to update it
export const useRunwayVisibilityStore = create((set) => ({
    isVisible: false, // The boolean state for visibility
    
    // Action to toggle the state from true to false, or vice versa
    setRunwayVisible: () => set({ isVisible: true }),
    setRunwayHidden: () => set({ isVisible: false })
}));