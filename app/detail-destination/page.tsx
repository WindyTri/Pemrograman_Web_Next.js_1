import CardScheduleDestination from "./_components/box";
import Box from "./_components/box";

export default function tiket (){
    return(
        <div className="bg-white flex justify-center items-center h-screen">
                <CardScheduleDestination
                date="Jum, 15 Mei 2026"
                price= "1.100.000"
                />

                <CardScheduleDestination
                date="Sab, 16 Mei 2026"
                price= "1.000.000"
                />

                <CardScheduleDestination
                date="Min, 17 Mei 2026"
                price= "1.500.000"
                />

                <CardScheduleDestination
                date="Sen, 18 Mei 2026"
                price="1.800.000"
                />

                <CardScheduleDestination
                date="Sel, 19 Mei 2026"
                price= "2.000.000"
                />

                <CardScheduleDestination
                date="Rab, 20 Mei 2026"
                price="2.100.000"
                />

                <CardScheduleDestination
                date="Kam, 21 Mei 2026"
                price= "3.000.000"
                />
        </div>
    );
}