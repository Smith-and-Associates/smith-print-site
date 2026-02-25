import SetupPage from "../components/SetupPage";
import { Share, Printer, MoreHorizontal } from "lucide-react";

export default function IosPage() {
  const iosSteps = [
    {
      title: "How to print",
      content: (
        <div className="text-left px-4 space-y-6">
          <div className="space-y-4">
            <p>
              1. Open the app you want to print from and tap the <span className="font-bold">share icon</span>:
            </p>
            <div className="flex justify-center gap-8 text-slate-400 py-2">
              <img src="/icons/share-a.png" alt="Share" className="w-8 h-8 object-contain" />
              <Share size={32} strokeWidth={1.5} />
              <MoreHorizontal size={32} strokeWidth={1.5} />
            </div>
          </div>

          {/* Step 2: Print Action */}
          <div className="space-y-3">
            <p className="flex items-center gap-2">
              2. Scroll down and tap <Printer size={20} strokeWidth={1.5} /> or <span className="font-bold">Print</span>.
            </p>
            <p className="text-sm text-slate-500 italic pl-5">
              No print option? Check the app's User Guide or Help - not all apps support printing.
            </p>
          </div>

          {/* Steps 3-6 */}
          <ol className="list-decimal space-y-4 ml-5 marker:text-slate-500">
            <li>Select a printer.</li>
            <li>Select the number of copies and other options, like which pages you want to print.</li>
            <li>Tap <span className="font-bold">Print</span> in the top-right corner.</li>
            <li>If you're prompted, enter your PaperCut username and password.</li>
          </ol>
        </div>
      )
    },
    {
      title: "Extra: Configuration Profile",
      content: (
        <div className="text-center px-4">
          <p className="text-[16px]"><a href="/downloads/ios-mobility-print-profile.mobileconfig" className="text-[#6b46c1] underline" download target="_blank" rel="noopener noreferrer">Download the IOS Mobility Print Configuration Profile</a></p>
        </div>
      )
    }
  ];

  return (
    <div className="w-full">
      <SetupPage 
        title="Printing on your iPhone or iPad" 
        steps={iosSteps} 
        currentOS="ios" 
      />
    </div>
  );
}