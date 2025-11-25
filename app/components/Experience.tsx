import React from "react";

type experienceEntry = {
    id : string;
    role : string;
    company : string;
    date_start : string;
    date_end : string;

}

const experiences : experienceEntry[] = [
    {
        id : "exp1",
        role : "Generative AI Engineer",
        company : "Flutter Entertainment",
        date_start : "Sept 2025",
        date_end : "Now"
    },
    {
        id : "exp2",
        role : "Software Developer Intern",
        company : "AVEVA",
        date_start : "June 2024",
        date_end : "Aug 2024"
    },
    {
        id: "exp3",
        role: "Tech Tutor",
        company : "Funtech",
        date_start : "July 2023",
        date_end : "Sept 2023"
    }
]

const Experience = () => {
  return (
    <div className="card bg-base-100 w-full h-full shadow-sm p-3">
        <div className="card-body flex h-full flex-col justify-between">
            <p className="text-xs uppercase tracking-[0.4em] text-secondary">Experience</p>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            {experiences.map((exp) => (
                <div key={exp.id}>
                    <button className="btn" onClick={()=>document.getElementById(exp.id).showModal()}>
                    <div className="flex flex-wrap gap-2 text-xs text-base-content/60 justify-between w-full">
                    <span className="px-3 py-1">
                    <span className="text-secondary">{exp.role}</span> @ {exp.company}
                    </span>
                    <span className="rounded-full border border-secondary/40 px-3 py-1">
                    {exp.date_start} - {exp.date_end}
                    </span>
                    </div>
                    </button>
                    <dialog id={exp.id} className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Hello!</h3>
                        <p className="py-4">Press ESC key or click outside to close</p>
                    </div>
                    <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                    </form>
                    </dialog>
                </div>
            ))}
            <div className="card-actions items-end justify-end">
            </div>
        </div>
    </div>
  );
};

export default Experience;
