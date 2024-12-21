import { Button } from "@/components/ui/button";
import { BiPhoneCall } from "react-icons/bi";

export default function CTA() {
    return (
        <div className="flex items-center gap-2 mb-4">
            <Button className="w-fit px-8 py-5 mx-auto md:mx-0">
                <BiPhoneCall className="w-4 h-4" />
                Contact Us
            </Button>
        </div>
    );
}