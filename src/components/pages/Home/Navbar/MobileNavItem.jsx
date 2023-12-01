function MobileNavItem({ title, description }) {
  return (
    <div className="flex items-center py-3 pl-10 gap-x-4">
      <div className="w-[2px] h-10 bg-blueClr"></div>
      <div>
        <h1 className="text-lg">{title}</h1>
        <p className="text-[#7b849b] text-sm font-medium">{description}</p>
      </div>
    </div>
  );
}

export default MobileNavItem;
