"use client";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

interface StarRatingProps {
  rating: number;
  maxStars?: number;
  starSize?: string; // e.g. "text-sm" "text-lg" "text-2xl"
  starColor?: string; // e.g. "text-yellow-400" "text-orange-500"
  emptyColor?: string; // e.g. "text-gray-400"
  showRating?: boolean; // show/hide number
  ratingSize?: string; // e.g. "text-sm" "text-base"
  ratingColor?: string; // e.g. "text-white" "text-gray-300"
  gap?: string; // e.g. "gap-1" "gap-2"
  className?: string; // extra wrapper classes
}

export default function StarRating({
  rating,
  maxStars = 5,
  starSize = "text-lg",
  starColor = "text-yellow-400",
  emptyColor = "text-gray-400",
  showRating = true,
  ratingSize = "text-sm",
  ratingColor = "text-white",
  gap = "gap-1",
  className = "",
}: StarRatingProps) {
  const stars = Array.from({ length: maxStars }, (_, i) => {
    const full = i + 1;
    if (rating >= full) return "full";
    if (rating >= full - 0.5) return "half";
    return "empty";
  });

  return (
    <div className={`flex items-center ${gap} ${className}`}>
      {stars.map((type, i) => (
        <span
          key={i}
          className={`${starSize} ${type === "empty" ? emptyColor : starColor}`}>
          {type === "full" && <FaStar />}
          {type === "half" && <FaStarHalfAlt />}
          {type === "empty" && <FaRegStar />}
        </span>
      ))}
      {showRating && (
        <span
          className={`font-heading font-medium ${ratingSize} ${ratingColor} ml-1`}>
          {rating}
        </span>
      )}
    </div>
  );
}
