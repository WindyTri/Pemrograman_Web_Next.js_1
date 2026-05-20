import Fitur from "./_components/fitur";
export default function sidebar (){
    return(
        <div className="bg-black flex justify-center items-center">
            <div className="bg-gray-700 rounded-2xl ronded-full h-100 w-100 ">
                <div className="flex justify-between p-5 gap-60">
                    <div className="flex flex-row gap-3">
                        <img src="/logo_.png" className="h-10"/>
                        <div>
                            <p className="font-bold">Acme Inc</p>
                            <p>Enterprise</p>
                        </div>
                    </div>
                    <div className="pt-2">
                        <img src="/selector.svg" className="h-10"/>
                    </div>
                </div>
             {/*Bagian Bawah */}
                <div>
                    <p className="text-gray-200 pl-4">Platform</p>

                    <Fitur
                    image="/terminal-2.svg"
                    title="Playground"
                    />

                    <Fitur
                    image="/robot-face"
                    title="Models"
                    />

                    <Fitur
                    image="/book.svg"
                    title="Documentation"/>
                    <Fitur
                    image="/setinggs.svg"
                    title="Settings"/>
                    
                </div>    
            </div>
        </div>
    );
}