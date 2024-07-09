import {create} from 'zustand';

// type State = {
//     firstName: string;
//     lastName: string;
// };

// type Action = {
//     updateFirstName: (firstName: State['firstName']) => void;
//     updateLastName: (lastName: State['lastName']) => void;
// };

export const usePersonStore = create((set) => ({
    firstName: '',
    lastName: '',
    updateFirstName: (firstName) => set(() => ({ firstName })),
    updateLastName: (lastName) => set(() => ({ lastName })),
}));
