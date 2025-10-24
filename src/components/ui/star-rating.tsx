import * as React from "react";
import { cn } from "~/lib/utils";

type StarRatingProps = {
  value: number; // 0..5, supports 0.5 increments
  onChange?: (nextValue: number) => void;
  readOnly?: boolean;
  className?: string;
  size?: number; // px - fallback for non-responsive sizing
  responsiveSize?: string; // tailwind responsive size classes (e.g., "w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6")
  fullColorClassName?: string; // tailwind classes for filled stars
  emptyColorClassName?: string; // tailwind classes for empty stars
  halfColorClassName?: string; // tailwind classes for half stars (foreground)
  id?: string;
  name?: string;
};

const clampToPrecision = (raw: number, precision: number, min = 0, max = 5) => {
  const clamped = Math.min(Math.max(raw, min), max);
  const steps = Math.round(clamped / precision);
  return steps * precision;
};

const StarIcon: React.FC<{
  className?: string;
  size?: number;
  responsiveSize?: string;
}> = ({ className, size, responsiveSize }) => {
  const sizeStyle = responsiveSize ? {} : { width: size, height: size };
  const responsiveClasses = responsiveSize || "";

  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="1"
      aria-hidden="true"
      className={cn(className, responsiveClasses)}
      style={sizeStyle}
    >
      <path d="M12 2.75l2.905 5.89 6.5.945-4.703 4.582 1.11 6.478L12 17.98 6.188 20.645l1.11-6.478L2.594 9.585l6.5-.945L12 2.75z" />
    </svg>
  );
};

export const StarRating: React.FC<StarRatingProps> = ({
  value,
  onChange,
  readOnly = false,
  className,
  size = 20,
  responsiveSize,
  fullColorClassName = "text-yellow-400 stroke-black stroke-1",
  emptyColorClassName = "text-gray-300 dark:text-gray-600 stroke-black stroke-1",
  halfColorClassName = "text-yellow-400 stroke-black stroke-1",
  id,
  name,
}) => {
  const precision = 0.5;
  const normalized = clampToPrecision(value ?? 0, precision);
  const isInteractive = Boolean(onChange) && !readOnly;

  const handleSelect = (next: number) => () => {
    if (!isInteractive) return;
    onChange?.(clampToPrecision(next, precision));
  };

  // Build 5 stars, each may be empty, half, or full based on normalized value
  const stars = Array.from({ length: 5 }, (_, index) => {
    const starNumber = index + 1;
    const starValueFull = starNumber;
    const starValueHalf = starNumber - 0.5;

    const isFull = normalized >= starValueFull;
    const isHalf = !isFull && normalized >= starValueHalf;

    // For half stars, we layer a gray star and clip a yellow half on top
    return (
      <span
        key={index}
        className="relative inline-flex"
        aria-hidden={isInteractive ? true : undefined}
      >
        {/* Empty base */}
        <StarIcon
          className={cn(emptyColorClassName)}
          size={size}
          responsiveSize={responsiveSize}
        />

        {/* Filled or half overlay */}
        {isFull ? (
          <span className="absolute inset-0">
            <StarIcon
              className={cn(fullColorClassName)}
              size={size}
              responsiveSize={responsiveSize}
            />
          </span>
        ) : isHalf ? (
          <span
            className="absolute inset-0 overflow-hidden"
            style={{ width: "50%" }}
          >
            <StarIcon
              size={size}
              className={cn(halfColorClassName)}
              responsiveSize={responsiveSize}
            />
          </span>
        ) : null}
      </span>
    );
  });

  // MOBILE-only display: just 1 bintang & rating number (default: mobile = <sm, tailwind breakpoint)
  // Desktop/tablet: stars as usual
  // Uses Tailwind "sm:" for responsive visibility

  // (default: gap is 1. adjust as needed)
  if (!isInteractive) {
    return (
      <div
        className={cn("inline-flex items-center gap-1", className)}
        aria-label={`${normalized} dari 5 bintang`}
      >
        {/* Mobile: only 1 star and number */}
        <div className="flex items-center gap-0.5 sm:hidden">
          <span className="relative inline-flex">
            {/* Handle full/half/empty for only the first star */}
            {(() => {
              const isFull = normalized >= 1;
              const isHalf = !isFull && normalized >= 0.5;
              return (
                <>
                  <StarIcon
                    className={cn(emptyColorClassName)}
                    size={size}
                    responsiveSize={responsiveSize}
                  />
                  {isFull ? (
                    <span className="absolute inset-0">
                      <StarIcon
                        className={cn(fullColorClassName)}
                        size={size}
                        responsiveSize={responsiveSize}
                      />
                    </span>
                  ) : isHalf ? (
                    <span
                      className="absolute inset-0 overflow-hidden"
                      style={{ width: "50%" }}
                    >
                      <StarIcon
                        size={size}
                        className={cn(halfColorClassName)}
                        responsiveSize={responsiveSize}
                      />
                    </span>
                  ) : null}
                </>
              );
            })()}
          </span>
          <span className="text-xs font-semibold">{normalized.toFixed(1)}</span>
        </div>
        {/* Desktop/tablet: 5 stars as usual */}
        <div className="hidden sm:inline-flex items-center gap-1">{stars}</div>
      </div>
    );
  }

  // Interactive mode (for rating): full control, not typically used on mobile
  const steps = Array.from({ length: 10 }, (_, i) => (i + 1) * 0.5);
  const groupName =
    name || id || `star-rating-${Math.random().toString(36).slice(2, 8)}`;

  return (
    <div className={cn("inline-flex items-center gap-1", className)}>
      <div className="inline-flex items-center gap-1" aria-hidden>
        {/* Mobile: one bintang and number */}
        <div className="flex items-center gap-0.5 sm:hidden">
          <span className="relative inline-flex">
            {(() => {
              const isFull = normalized >= 1;
              const isHalf = !isFull && normalized >= 0.5;
              return (
                <>
                  <StarIcon
                    className={cn(emptyColorClassName)}
                    size={size}
                    responsiveSize={responsiveSize}
                  />
                  {isFull ? (
                    <span className="absolute inset-0">
                      <StarIcon
                        className={cn(fullColorClassName)}
                        size={size}
                        responsiveSize={responsiveSize}
                      />
                    </span>
                  ) : isHalf ? (
                    <span
                      className="absolute inset-0 overflow-hidden"
                      style={{ width: "50%" }}
                    >
                      <StarIcon
                        size={size}
                        className={cn(halfColorClassName)}
                        responsiveSize={responsiveSize}
                      />
                    </span>
                  ) : null}
                </>
              );
            })()}
          </span>
          <span className="text-xs font-semibold">{normalized.toFixed(1)}</span>
        </div>
        {/* Desktop/tablet: 5 stars as usual */}
        <div className="hidden sm:inline-flex items-center gap-1">{stars}</div>
      </div>
      {/* Accessible controls (screen-reader visible, visually minimal) */}
      <div
        className="sr-only"
        role="radiogroup"
        aria-label="Penilaian bintang"
        aria-valuemin={0}
        aria-valuemax={5}
        aria-valuenow={normalized}
      >
        {steps.map((step) => (
          <label key={step}>
            <input
              type="radio"
              name={groupName}
              value={step}
              checked={normalized === step}
              onChange={handleSelect(step)}
            />
            {step} bintang
          </label>
        ))}
      </div>
    </div>
  );
};

export default StarRating;
