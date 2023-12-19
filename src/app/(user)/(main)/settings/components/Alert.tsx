import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  
  
  export default function Alert({component , className , title , message, button1, button2}) {
    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          {/* <Button variant="outline">{component}</Button> */}
        {component}
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            {/* <AlertDialogTitle>Are you sure you want to log out?</AlertDialogTitle> */}
            <AlertDialogTitle>{title}</AlertDialogTitle>
            <AlertDialogDescription>
             {message}
            </AlertDialogDescription>
            {/* <AlertDialogDescription>
             Click "Logout" to proceed with the logout or "Cancel" to stay logged in.
            </AlertDialogDescription> */}
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>{button1}</AlertDialogCancel>
            <AlertDialogAction className={className}>{button2}</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  }
  