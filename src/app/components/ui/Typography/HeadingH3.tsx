"use client";

import clsx from "clsx";

type HeaderProps = React.ButtonHTMLAttributes<HTMLHeadingElement>;

export const H3 = ({ className, ...rest }: HeaderProps) => {
  return <h3 
          className={clsx(
                "text-2xl lg:text-3xl text-gray-900 ",
                "font-semibold",
                "scroll-m-20 " ,
                "leading-tight tracking-tighter lg:leading-[1.1]",
               className
           )} 
           {...rest} 
         />
};