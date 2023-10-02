import { Document } from 'mongoose';
import { bookingType } from './booking.type';

export type userType = {
  name: string;
  email: string;
  password: string;
  photoUrl?: string;
  address?: string;
  phoneNumber?: number;
  role: 'user' | 'admin';
  booking: bookingType[];
} & Document;
