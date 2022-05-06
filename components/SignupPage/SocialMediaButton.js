import React from "react";

function SocialMediaButton({ socialMedia: { name, icon, color, onClick } }) {
  return (
    <div
      className="flex items-center justify-center gap-3 p-2 px-2 py-3 rounded-3xl border border-1 border-slate-200 hover:bg-main-hover cursor-pointer truncate"
      onClick={onClick}>
      <div className={`text-${color.toString()} text-md`}>{icon}</div>
      <h3 className="text-main font-semibold text-md">Continue with {name}</h3>
    </div>
  );
}

export default SocialMediaButton;
