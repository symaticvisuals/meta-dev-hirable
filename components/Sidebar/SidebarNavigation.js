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
    <div className="flex text-main items-center gap-2 p-2 rounded-md hover:bg-main-hover active:bg-main-hover active:text-active">
      <div className="text-xl">{icon}</div>
      <h1 className="font-sans font-medium">{name}</h1>
    </div>
  );
}






export default SidebarNavigation