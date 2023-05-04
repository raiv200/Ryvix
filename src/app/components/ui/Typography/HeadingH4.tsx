"use client";

import clsx from "clsx";

type HeaderProps = React.ButtonHTMLAttributes<HTMLHeadingElement>;

export const H4 = ({ className, ...rest }: HeaderProps) => {
  return <h4 
          className={clsx(
                "text-xl lg:text-2xl text-gray-900 ",
                "font-medium",
                "scroll-m-20 " ,
                "leading-tight tracking-tighter lg:leading-[1.1]",
               className
           )} 
           {...rest} 
         />
};