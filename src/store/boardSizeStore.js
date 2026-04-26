import { create } from 'zustand'

export const useBoardSize = create((set) => ({
  boardSize: 8,
  updateBoardSize: (newBoardSize) => set({ boardSize: newBoardSize }),
}));

export default { useBoardSize };