import { Button } from "@/components/ui/button";

export default function Banner(){
    return (
        
        <div  className="flex p-3 min-h-[180px]  mt-4 mx-1 mb-3  rounded-xl text-white  bg-[#0F1828] font-sans items-center ">
                    <div className="p-2 flex flex-col w-[70%] ">
                        <div>
                            <p className="text-sm">Join our Workout Challenges and boost you fitness today!</p>
                        </div>
                        <div className="mt-4">
                            <Button className="rounded-full bg-[#F64D41]">
                                View Details
                            </Button>

                        </div>
                        
                    </div>
                    <div className="w-[40%] h-[100px] ">
                        <img alt="hackerresume-card" className="w-full h-full" src="https://img.freepik.com/premium-photo/contemporary-spotless-fitness-gym-center-interiorgenerative-ai_391052-10889.jpg?size=626&ext=jpg&ga=GA1.1.1074092265.1701874836&semt=ais"/>
                    </div>
        </div>
    )
}