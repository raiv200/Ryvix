"use client";

import clsx from "clsx";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({className, ...rest }: ButtonProps) => {
  return <button 
          className={clsx(
              "bg-indigo-500 text-white bg-opacity-90", 
              "py-3 px-6 leading-6",
              "rounded-lg",
              "font-semibold tracking-wide",
              "cursor-pointer",
              "inline-flex items-center justify-center",
              "relative shadow-sm",
              //Hover State
              "transition",
              "hover:bg-opacity-100 hover:shadow-lg",
              //Focus State
              "outline-none",
              "ring-indigo-500/70 ring-offset-2",
              "focus:ring-4 focus:scale-[0.98]",
              //Disbaled
              "disabled:bg-gray-500/30 hover:disabled:shadow-none disabled:cursor-not-allowed",
               className
           )} 
           {...rest} 
         />;
};
