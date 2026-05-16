import Box from "./_components/box";

export default function tiket (){
    return(
        <div className="bg-white flex justify-center items-center h-screen">
                <Box 
                day="Jum"
                date="15 Mei 2026"
                price= "1.100.000"
                />

                <Box
                day="Sab"
                date="16 Mei 2026"
                price= "1.000.000"
                />

                <Box
                day="Min"
                date="17 Mei 2026"
                price= "1.500.000"
                />

                <Box
                day="Sen"
                date="18 Mei 2026"
                price="1.800.000"
                />

                <Box
                day="Sel"
                date="19 Mei 2026"
                price= "2.000.000"
                />

                <Box
                day="Rab"
                date="20 Mei 2026"
                price="2.100.000"
                />

                <Box
                day="Kam"
                date="21 Mei 2026"
                price= "3.000.000"
                />
        </div>
    );
}