"use client";

import { forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import clsx from "clsx";
import { twMerge } from 'tailwind-merge'

const Loading = () => {
  return (
    <div className="absolute inline-flex  items-center">
      {/* <div className="w-5 h-5 rounded-full border-[3px] border-b-transparent animate-spin border-[inherit]" /> */}
      <svg
        className="animate-spin  h-5 w-5 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    </div>
  );
};

const variants = cva(
  [
    "rounded-lg",
    "tracking-wide",
    "outline-none",
    "transition",
    "relative",
    "inline-flex items-center justify-center",
    "cursor-pointer",
    "focus:animate-pressed active:animate-none",
    "disabled:cursor-not-allowed",
    "hover:disabled:shadow-none",
  ],

  {
    variants: {
      variant: {
        primary: [
          "bg-indigo-500",
          "text-white",
          "bg-opacity-90",
          "font-semibold ",
          "shadow-sm",
          "disabled:bg-opacity-50",
          "disabled:shadow",
          "ring-indigo-500/70",
          "ring-offset-2",
          "focus-visible:ring-4",
          "hover:bg-opacity-100",
          "hover:shadow-lg",
        ],
        secondary: [
          'font-normal',
          'bg-gray-50',
          'hover:bg-gray-100',
          'disabled:bg-gray-50',
          'text-gray-950',
          'shadow',
          'border',
          'border-neutral-200/50',
          'ring-offset-2',
          'focus-visible:ring-2',
          'ring-gray-200',
        ],
        destructive: [
          'font-semibold',
          'bg-red-500',
          'hover:bg-red-600',
          'text-white',
          'rounded-lg',
          'shadow',
          'hover:shadow-md',
          'disabled:bg-red-500/50',
          'disabled:shadow',
          'ring-offset-2',
          'focus-visible:ring-2',
          'ring-red-500',
        ],
        ghost: [
          'font-light',
          'text-gray-950',
          'hover:text-gray-600',
          'disabled:text-gray-950',
          'ring-gray-300',
          'focus-visible:ring-1',
        ],
        link: [
          'font-light',
          'text-indigo-500',
          'hover:text-indigo-600',
          'disabled:text-indigo-500/50',
          'disabled:no-underline',
          'hover:underline',
          'ring-indigo-300',
          'focus-visible:ring-1',
        ],
      },
      size: {
        small: ["text-sm","px-4 py-2"],
        default: ["text-base","py-3 px-6 leading-6"],
        large: ["text-lg","py-4 px-8 leading-6"],
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof variants> & {
    loading?: boolean;
  };

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant,size,children, loading, ...rest }, ref) => {
    return (
      <button ref={ref} className={twMerge(clsx(variants({ variant, size, className })))}
      {...rest}>
        {loading && <Loading />}

        <span
          className={clsx("transition", {
            "opacity-0": loading,
            "opacity-100": !loading,
          })}
        >
          {children}
        </span>
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
