import ProgressCharts from "../../(main)/analytics/Components/ProgressCharts";
import StepCounter from "../../(main)/analytics/Components/StepCounter";
import Graph from "../Components/Graph";
import MapComponent from "../Components/Maps";
import NavigationBar from "../Components/NavigationBar";

export default function Walkathon({params}:{params:any}) {
  return (
    <div className='flex flex-1 min-h-screen flex-col'>
      
    <NavigationBar name = {params.name} style={"Name"}/>
        <StepCounter/>
        <Graph/> 
        
        <ProgressCharts />

        <div className="h-3"/>
     <MapComponent/>
     <div className="h-10"/>

    </div>
    
    
  );
}