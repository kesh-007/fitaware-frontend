
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

    const table_heading = ['email'];

    return (
      
        <Table className="overflow-scroll w-[100%] ">
<TableHeader>
              <TableRow>
                {
                    table_heading.map((value , index) => (
                        <TableHead className="text-md font-semibold  " key={index}>
                            {value}
                        </TableHead>
                    ))
                }
              </TableRow>
            </TableHeader>
            <TableBody>
            {
                data.map((value:any , index:any) => (
                    <TableRow key={index}>
                        <TableCell>{value.user_id}</TableCell>
                        <TableCell className="font-medium">{value.user_name}</TableCell>
                        <TableCell>{value.age}</TableCell>
                        <TableCell>{value.gender}</TableCell>
                        <TableCell>{value.step_count}</TableCell>
                        <TableCell>{value.calories_burnt}</TableCell>
                        {value.status=="In Progress"?<TableCell className="text-green-600 font-semibold">{value.status}</TableCell>:
                        <TableCell className="text-blue-600 font-semibold">{value.status}</TableCell>}
                        
                    </TableRow>
                ))
            }
            </TableBody>
          </Table>
         
    );

}