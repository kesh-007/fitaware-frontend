import Image from "next/image";

export default function CategoryCard(){

    return (
        <div className="w-[15rem]">
            <div className="relative">
                
                <div 
                    className="absolute rounded-lg top-0 left-0 right-0 bottom-0 flex flex-col justify-between"
                    style={{backgroundColor : "rgba(0,0,0,0.1)"}}
                > 
                    {/* <div className="p-5 text-white flex">
                        <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae nihil est ea rem repellendus fugiat aut vero illum vitae.</p>
                    </div> */}
                </div>
                <Image 
                    alt="loading" 
                     src={require("../../search/1.jpg")} 
                    // height={800} 
                    width={200}
                    className="w-full rounded-lg h-[10rem] "
                />
            </div>
        </div>
    );

}