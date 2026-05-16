import { withCoalescedInvoke } from "next/dist/lib/coalesced-function";

export default function Box({
    day,
    date,
    price,
}: {
    day: string;
    date: string;
    price: string;
    }){
    return(
        <div className="flex flex-col justify-center items-center border-1 border-gray-300 w-40">
            <button>
                <p className="text-gray-500 text-[14px]">{day}, {date}</p>
                </button>
            <button>
                <p className="font-bold">IDR {price}</p>
            </button>
        </div>
    );
}