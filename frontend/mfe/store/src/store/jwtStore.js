import {create} from 'zustand';

const useJwtStore = create(set => ({
    jwt: undefined,
    setJwt: jwt => set({jwt}),
}));

export default useJwtStore;
