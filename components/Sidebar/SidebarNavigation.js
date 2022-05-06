import React from 'react'

function SidebarNavigation(
    {
        navitem: {
            name,
            link,
            icon,
        }
    }
) {
  return (
    <div className="flex text-main items-center gap-4 p-2 rounded-lg hover:bg-main-hover active:bg-main-hover active:text-active active:font-bold">
      <div className="text-xl">{icon}</div>
      <h1 className="font-sans font-medium text-md">{name}</h1>
    </div>
  );
}






export default SidebarNavigation