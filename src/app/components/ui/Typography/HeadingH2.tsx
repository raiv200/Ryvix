"use client";

import clsx from "clsx";

type HeaderProps = React.ButtonHTMLAttributes<HTMLHeadingElement>;

export const H2 = ({ className, ...rest }: HeaderProps) => {
  return <h2
          className={clsx(
                "text-3xl lg:text-5xl text-gray-900 ",
                "font-bold",
                "scroll-m-20 " ,
                "leading-tight tracking-tighter lg:leading-[1.1]",
               className
           )} 
           {...rest} 
         />
};