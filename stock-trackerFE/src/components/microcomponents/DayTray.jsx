const DayTray = () => {
  
  const buttonStyle =
    "flex items-center justify-center gap-2 px-8 py-2 rounded-full h-14 hover:cursor-pointer";

  return (
    <div className={` flex justify-between text-2xl w-3/4`}>
      <button className={`${buttonStyle} text-white bg-[#3a3546] hover:bg-[#3f3d47]`}>
        <img className="w-8 h-8 " src="/intraday.svg" alt="day" />
        <span className="relative bottom-0.5">Intraday</span>
      </button>
      <button className={`${buttonStyle} hover:bg-[#faf9fb]`}>
        <img className="w-8 h-8" src="/weekly.svg" alt="week" />
        <span className="relative bottom-0.5">Weekly</span>
        
      </button>
      <button className={`${buttonStyle} hover:bg-[#faf9fb]`}>
        <img className="w-8 h-8" src="/monthly.svg" alt="month" />
        <span className="relative bottom-0.5">Monthly</span>
      </button>
    </div>
  );
};

export default DayTray;
