import { createContext } from 'react';

// types and classes
import { $TSFixMe } from '../types';

export const BasicSchoolInformationContext = createContext<$TSFixMe>(undefined);
export const BasicSchoolInformationProvider = BasicSchoolInformationContext.Provider;
