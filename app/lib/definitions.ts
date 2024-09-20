export type User = {
  id: string;
  role: 'student' | 'company';
  name: string;
  email: string;
  password: string;
  university?: string; // для студентов
  city?: string; // для компаний
};

export type Company = {
  id: string;
  name: string;
  city: string;
  specialty: string;
  practice_dates: string;
};

export type Student = {
  id: string;
  name: string;
  city: string;
  specialty: string;
  available_dates: string;
};

export type Profile = {
  name: string;
  email: string;
  university?: string;
  city?: string;
};
