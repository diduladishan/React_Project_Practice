import React, { useEffect, useState } from "react";

const TitleUpdater = () => {
  const [myTitle, setMyTitle] = useState("");

  useEffect(() => {
    document.title = myTitle || "React App";
  }, [myTitle]);

  return (
    <div>
      <input
        className="border border-black bg-[#b4eeb4]"
        placeholder="Enter Title"
        value={myTitle}
        onChange={(e) => setMyTitle(e.target.value)}
      />
    </div>
  );
};

export default TitleUpdater;
