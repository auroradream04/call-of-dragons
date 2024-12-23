import { BsPeople } from "react-icons/bs";
import { TbPigMoney } from "react-icons/tb";
import { MdOutlineReceiptLong } from "react-icons/md";
import { PiClockCountdown } from "react-icons/pi";

const iconClassName = "w-4 h-4";
const stats = [
    {
        title: "500+ Happy Customers",
        icon: <BsPeople className={iconClassName} />,
    },
    {
        title: "$100,000+ Refunded",
        icon: <TbPigMoney className={iconClassName} />,
    },
    {
        title: "10,000+ Receipts Refunded",
        icon: <MdOutlineReceiptLong className={iconClassName} />,
    },
    {
        title: "2+ Years of Experience",
        icon: <PiClockCountdown className={iconClassName} />,
    }
];

export default function StatsCounter() {
    return (
        <section className="w-full pt-12 border-gray-200 max-w-6xl mx-auto">
            <div className="container mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div 
                            key={stat.title} 
                            className="flex items-center lg:justify-center gap-3 text-gray-600"
                        >
                            <div className="p-3 bg-gray-200 rounded-lg">
                                {stat.icon}
                            </div>
                            <p className="text-sm font-semibold">
                                {stat.title}
                            </p>
                            {/* Add separator line except for last item */}
                            {index !== stats.length - 1 && (
                                <div className="hidden md:block h-12 w-px bg-gray-200 absolute right-0" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
