// Пользователи
const users = [
  {
    id: '1',
    role: 'student',
    name: 'Иван Иванов',
    email: 'ivan@student.com',
    password: 'student123',
    university: 'УрФУ',
  },
  {
    id: '2',
    role: 'company',
    name: 'ООО "ТехИнвест"',
    email: 'hr@techinvest.com',
    password: 'company123',
    city: 'Екатеринбург',
  },
];

// Компании для биржи практик
const companies = [
  {
    id: '1',
    name: 'ООО "ТехИнвест"',
    city: 'Екатеринбург',
    specialty: '09.03.03. Прикладная информатика',
    practice_dates: '01.07.2024 - 31.08.2024',
  },
  {
    id: '2',
    name: 'АО "ИнфоТех"',
    city: 'Челябинск',
    specialty: '01.03.02. Прикладная математика',
    practice_dates: '15.06.2024 - 15.09.2024',
  },
];

// Студенты для компании
const students = [
  {
    id: '1',
    name: 'Иван Иванов',
    city: 'Екатеринбург',
    specialty: '09.03.03. Прикладная информатика',
    available_dates: '01.07.2024 - 31.08.2024',
  },
  {
    id: '2',
    name: 'Анна Петрова',
    city: 'Челябинск',
    specialty: '02.03.04. Информационные системы',
    available_dates: '15.06.2024 - 15.09.2024',
  },
];

// Профили
const profiles = {
  student: {
    name: 'Иван Иванов',
    email: 'ivan@student.com',
    university: 'УрФУ',
    specialty: '09.03.03. Прикладная информатика',
  },
  company: {
    name: 'ООО "ТехИнвест"',
    email: 'hr@techinvest.com',
    city: 'Екатеринбург',
  },
};

export { users, companies, students, profiles };
