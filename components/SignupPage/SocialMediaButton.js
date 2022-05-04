import React from "react";

function SocialMediaButton({ socialMedia: { name, icon, color, onClick } }) {
  return (
    <div className="flex items-center justify-center gap-2 p-2 px-10 rounded-3xl border border-1 border-slate-200 hover:bg-main-hover cursor-pointer" onClick={onClick}>
      <div className={`text-${color.toString()} text-md`}>{icon}</div>
      <h3 className="text-main font-medium text-md">Continue with {name}</h3>
    </div>
  );
}

export default SocialMediaButton;
