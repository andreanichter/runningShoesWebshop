import {atom} from 'recoil';

export const cartState = atom({
  key: 'cartState',
  default: [],
})

export const totalState = atom({
  key: 'totalState',
  default: 0,
})