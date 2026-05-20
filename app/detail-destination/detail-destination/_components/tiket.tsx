import { withCoalescedInvoke } from "next/dist/lib/coalesced-function";

export default function CardScheduleDestination({
    date,
    price,
}: {
    date: string;
    price: string;
    }){
    return(
        <div className="flex flex-col justify-center items-center border-1 border-gray-300 w-40">
            <button>
                <p className="text-gray-500 text-[14px]">{date}</p>
                <p className="font-bold">IDR {price}</p>
            </button>
        </div>
    );
}