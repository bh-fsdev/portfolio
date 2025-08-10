import { Home, HelpCircle, FileText, SquareCode, ClipboardList, BriefcaseBusiness, PhoneCall } from "lucide-react";

import { ExpandableTabs } from "@/components/ui/expandable-tabs";
import type { TabItem } from "@/components/ui/expandable-tabs";



function Navmenu() {
    // const tabs = [
    //     { title: "Home", icon: Home,id: "home" },
    //     { title: "About me", icon: HelpCircle,id: "about" },
    //     { title: "Skills", icon:SquareCode,id: "skills" },
    //     { title: "Project", icon: ClipboardList,id: "project" },
    //     { title: "Experience", icon: BriefcaseBusiness,id: "experience" },
    //     { title: "Contact", icon: PhoneCall,id: "contact" },
    //     {type: "separator"},
    //     { title: "Resume", icon: FileText,id: "documents" },
    // ];

    const tabs: TabItem[] = [
        { title: "Home", icon: Home, id: "home" },
        { title: "About me", icon: HelpCircle, id: "about" },
        { title: "Skills", icon: SquareCode, id: "skills" },
        { title: "Project", icon: ClipboardList, id: "project" },
        { title: "Experience", icon: BriefcaseBusiness, id: "experience" },
        { title: "Contact", icon: PhoneCall, id: "contact" },
        { type: "separator" }, 
        { title: "Resume", icon: FileText, id: "documents" },
    ];

    return (
        <div className="flex sticky bottom-4 z-100 items-center justify-center">
            <ExpandableTabs
                tabs={tabs}
                activeColor="text-blue-500"
                className="border-blue-200 dark:border-white"
            />
        </div>
    );
}

export default Navmenu