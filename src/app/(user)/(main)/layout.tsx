import BottomNavBar from "@/components/main/BottomBar";
import React from "react";


const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="pagemin">
        {children}
      </div>
      <BottomNavBar/>
    </div>
  );
};

export default MainLayout;