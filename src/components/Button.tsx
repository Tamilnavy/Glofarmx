import { forwardRef } from "react";
import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold tracking-wide transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-forest text-white hover:bg-forest-dark active:bg-forest-dark",
  secondary:
    "bg-white text-forest border border-forest/20 hover:border-forest/40 hover:bg-bg-light active:bg-bg-light",
  ghost:
    "bg-transparent text-white border border-white/70 hover:bg-white/10 active:bg-white/15",
};

interface CommonProps {
  variant?: Variant;
}

type ButtonProps = CommonProps & HTMLMotionProps<"button"> & { as?: "button" };
type LinkProps = CommonProps & HTMLMotionProps<"a"> & { as: "a" };

const tap = { scale: 0.97 };
const hover = { scale: 1.025 };

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps | LinkProps>(
  function Button(props, ref) {
    const { variant = "primary", className = "", ...rest } = props;
    const classes = `${base} ${variants[variant]} ${className}`;

    if (props.as === "a") {
      const { as: _as, ...anchorRest } = rest as LinkProps;
      return (
        <motion.a
          ref={ref as React.Ref<HTMLAnchorElement>}
          className={classes}
          whileHover={hover}
          whileTap={tap}
          transition={{ type: "spring", stiffness: 400, damping: 24 }}
          {...anchorRest}
        />
      );
    }

    const { as: _as, ...buttonRest } = rest as ButtonProps;
    return (
      <motion.button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={classes}
        whileHover={hover}
        whileTap={tap}
        transition={{ type: "spring", stiffness: 400, damping: 24 }}
        {...buttonRest}
      />
    );
  },
);
