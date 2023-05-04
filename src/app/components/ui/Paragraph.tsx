"use client";

import clsx from "clsx";

type ParagraphProps = React.ButtonHTMLAttributes<HTMLParagraphElement>;

export const P = ({ className, ...rest }: ParagraphProps) => {
  return <p 
          className={clsx(
                "text-md text-gray-900 md:text-md lg:text-lg  ",
                "py-0.5 px-0.5",
                " font-medium ",
                "[&:not(:first-child)]:mt-6",
                "selection:text-gray-100 selection:bg-gray-900",
               className
           )} 
           {...rest} 
         />;
};