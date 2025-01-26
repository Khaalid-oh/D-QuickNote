import React from "react";

function BadgeGroup() {
  return (
    <div className="flex gap-4 items-center w-fit bg-blue-100 px-1 py-1 pr-6 rounded-full text-blue-500 font-medium text-xs md:text-sm">
      <span className="bg-white rounded-full px-1.5 py-0.5">
        What&apos;s new?
      </span>
      <span>Doctor&apos;s Quick Note →</span>
    </div>
  );
}

export default BadgeGroup;
