import { ButtonHTMLAttributes } from "react";

interface IWeekDayProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  day: string;
  title: string;
}

export function WeekDay({ day, title, ...rest }: IWeekDayProps) {
  return (
    <button title={title} {...rest} className="w-8 h-8 rounded bg-zinc-900">
      {day}
    </button>
  );
}
