import React from "react";

type educationEntry = {
    id : string;
    degree : string;
    school : string;
    date_start : string;
    date_end : string;

}

const educations : educationEntry[] = [
    {
        id : "ed1",
        degree : "Computer Science BSc",
        school : "University of Warwick",
        date_start : "2022",
        date_end : "2025"
    },
    {
        id : "ed2",
        degree : "IB Diploma (A-level equivalent)",
        school : "Dartford Grammar School",
        date_start : "2020",
        date_end : "2022"
    }
]

const Education = () => {
  return (
    <div className="card bg-base-100 w-full h-full shadow-sm p-3">
        <div className="card-body flex h-full flex-col justify-between">
            <p className="text-xs uppercase tracking-[0.4em] text-secondary">Education</p>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            {educations.map((ed) => (
                <div key={ed.id}>
                    <button className="btn rounded-l" onClick={()=>document.getElementById(ed.id).showModal()}>
                    <div className="flex flex-wrap gap-2 text-xs text-base-content/60 justify-between w-full">
                    <span className="px-3 py-1">
                    <span className="text-secondary">{ed.degree}</span>, {ed.school}
                    </span>
                    <span className="rounded-full border border-secondary/40 px-3 py-1">
                    {ed.date_start} - {ed.date_end}
                    </span>
                    </div>
                    </button>
                    <dialog id={ed.id} className="modal">
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

export default Education;
