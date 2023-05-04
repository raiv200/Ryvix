"use client";

import clsx from "clsx";

type HeaderProps = React.ButtonHTMLAttributes<HTMLHeadingElement>;

export const H1 = ({ className, ...rest }: HeaderProps) => {
  return <h1 
          className={clsx(
                "text-4xl lg:text-6xl text-gray-900 ",
                "font-extrabold",
                "scroll-m-20 " ,
                "leading-tight tracking-tighter lg:leading-[1.1]",
               className
           )} 
           {...rest} 
         />
};