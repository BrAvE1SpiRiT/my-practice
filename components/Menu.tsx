'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

type UserRole = 'student' | 'company' | null;

const Menu = () => {
  const pathname = usePathname();
  const role: UserRole = "student";

  const commonMenuItems = [{ icon: "/home.png", label: "Главная", href: "/" }];

  // Меню на основе роли
  const getMenuItems = (role: UserRole) => {
    switch (role) {
      case 'student':
        return [
          { icon: "/student.png", label: "Личный кабинет (Студент)", href: "/student" },
          { icon: "/profile.png", label: "Профиль (Студент)", href: "/profile/student" },
          { icon: "/teacher.png", label: "Найти практику", href: "/applications/id" },
        ];
      case 'company':
        return [
          { icon: "/student.png", label: "Личный кабинет (Компания)", href: "/company" },
          { icon: "/profile.png", label: "Профиль (Компания)", href: "/profile/company" },
          { icon: "/teacher.png", label: "Найти студентов", href: "/applications/id" },
        ];
      default:
        return [];
    }
  };

  const authMenuItems = getMenuItems(role);

  const menuItems = role
    ? [...commonMenuItems, ...authMenuItems]
    : [...commonMenuItems, { icon: "/logout.png", label: "Войти", href: "/auth/login" }];

  return (
    <div className="mt-4 text-sm flex flex-col gap-2">
      <span className="hidden lg:block text-gray-400 font-light my-4">MENU</span>

      {menuItems.map((item) => (
        <Link
          href={item.href}
          key={item.label}
          className={clsx("flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 md:px-2 rounded-md", {
            "bg-lamaSkyLight": pathname === item.href,
          })}
        >
          <Image src={item.icon} alt={item.label} width={20} height={20} />
          <span className="hidden lg:block">{item.label}</span>
        </Link>
      ))}

      {role && (
        <Link
          href="/auth/login"
          className={clsx("flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 md:px-2 rounded-md", {
            "bg-lamaSkyLight": pathname === "/auth/login",
          })}
        >
          <Image src="/logout.png" alt="Выйти" width={20} height={20} />
          <span className="hidden lg:block">Выйти</span>
        </Link>
      )}
    </div>
  );
};

export default Menu;
