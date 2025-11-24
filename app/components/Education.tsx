import React from "react";

const Education = () => {
  return (
    <div className="card bg-base-100 w-96 shadow-sm p-3">
        <div className="card-body">
            <p className="text-xs uppercase tracking-[0.4em] text-secondary">Education</p>
            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
            <div className="card-actions justify-end">
            </div>
            <div className="flex flex-wrap gap-2 text-xs text-base-content/60">
                <span className="rounded-full border border-secondary/40 px-3 py-1">
                2020 – 2023
                </span>
                <span className="rounded-full border border-secondary/40 px-3 py-1">
                Warwick
                </span>
            </div>
        </div>
    </div>
  );
};

export default Education;
