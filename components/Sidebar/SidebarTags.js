import React from 'react'

function SidebarTags({
    tagItem: {
        name,
        link,
        articles,
    }
}) {
  return (
    <div className="flex items-center justify-between px-2 pt-1 my-1 text-main hover:bg-main-hover rounded-md active:text-active active:font-medium">
      <h4 className="text-md truncate ...">{name}</h4>
      <div className="p-1 bg-main-hover rounded-md">
        <h4 className="text-sm text-green">{articles}+</h4>
      </div>
    </div>
  );
}

export default SidebarTags