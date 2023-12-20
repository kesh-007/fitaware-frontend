
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";

import {DATA} from "../data/dummy";

export default function DataTable({data}:{data:any}){

    const table_heading = ['email','stepcounts',];

    return (
      
     <div>
            <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="bg- border border-gray-300 px-4 py-2">Email</th>
            <th className="bg- border border-gray-300 px-4 py-2">Step Counts</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item:any, index:any) => (
            <tr key={index}>
              <td className="border border-gray-300 px-4 py-2">{item.email}</td>
              <td className="border border-gray-300 px-4 py-2">{item.stepcounts}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
     </div>       
    );

}