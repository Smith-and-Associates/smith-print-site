import SetupPage from "../components/SetupPage";

export default function MacPage() {
  const macSteps = [
    {
      title: "Video Guide",
      content: (
        <div className="w-full aspect-video rounded-lg overflow-hidden bg-black mb-2 relative">
          <iframe
            src="https://www.youtube.com/embed/Jw_uEQ9vgNw?si=KiafMWORVM4Cgo22"
            title="YouTube video player"
            className="absolute inset-0 w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      )
    },
    {
      title: "Set up",
      content: (
        <div className="text-left px-4">
          <ol className="list-decimal space-y-4 text-[16px]">
            <li>
              Go to <span className="font-bold">System Preferences &gt; Printers and Scanners.</span>
            </li>
            <li>
              Click the <span className="font-bold">+</span> icon and select a printer. Make sure it's a Bonjour kind of printer.
            </li>
            <li>
              Check that the <span className="font-bold">Use</span> box is set to <span className="font-bold">Secure AirPrint.</span> If it's not, close the dialog, disconnect and reconnect to the network, then go back to step 2.
            </li>
            <li>
              Click <span className="font-bold">Add</span> and you're ready to print!
            </li>
          </ol>
        </div>
      )
    },
    {
      title: "Alternative Option",
      content: (
        <div className="text-center px-4">
          <p className="text-[16px]"><a href="/downloads/macos-mobility-print-printer-setup-1.0.78.dmg" className="text-[#6b46c1] underline" download target="_blank" rel="noopener noreferrer">Download the macOS Mobility Print installer</a></p>
        </div>
      )
    },
    {
      title: "Tips",
      content: (
        <div className="flex text-left border-l-4 border-[#a2d033] bg-slate-50/50 p-4 -mx-4">
          <div className="flex p-2 items-start gap-6">
            <ul className="flex-1 space-y-4 text-[14px] text-[#4a5568]">
              <li className="relative pl-4">
                <span className="absolute left-0 text-[#a2d033] font-bold">•</span>
                If you're not sure how to print, take a look at <a href="https://support.apple.com/en-au/HT204135" target="_blank" className="text-[#6b46c1] underline decoration-1 underline-offset-2">Print from your Mac</a>.
              </li>
              <li className="relative pl-4">
                <span className="absolute left-0 text-[#a2d033] font-bold">•</span>
                If your job doesn't print, check the Print Queue.
                <ol className="mt-2 ml-4 space-y-2 list-decimal">
                  <li>Click the retry icon.</li>
                  <li>Re-type your credentials.</li>
                </ol>
              </li>
            </ul>
          </div>
        </div>
      )
    }
  ];

  return (
    <SetupPage 
      title="Set up printing on your Mac" 
      steps={macSteps} 
      currentOS="mac" 
    />
  );
}