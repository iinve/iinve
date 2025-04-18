'use client'
import { atom } from 'recoil';

export const savedUserData = atom({
  key: 'savedUserData', 
  default: null,  
});