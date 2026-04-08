import SetupPage from "../components/SetupPage";

export default function AndroidPage() {
  const androidSteps = [
    {
      title: "Step 1",
      content: (
        <>
          <p className="mb-6">To access your organization's printers, first install Mobility Print.</p>
          <a 
            href="https://play.google.com/store/apps/details?id=com.papercut.projectbanksia"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#F37021] hover:bg-[#F37021] text-white font-bold py-2.5 px-8 rounded shadow-md transition-all no-underline"
          >
            Install Mobility Print
          </a>
        </>
      )
    },
    {
      title: "Step 2",
      content: (
        <div className="space-y-4">
          <p>Open the Mobility Print app and follow the instructions.</p>
          <p className="font-medium text-slate-800">You're now ready to print.</p>
        </div>
      )
    },
    {
      title: "How to print",
      content: (
        <div className="space-y-6">
          <p>
            Open the app you want to print from and tap <span className="font-bold">Print</span> or <span className="font-bold">Share &gt; Print</span>.
          </p>
          <p>
            Then select a printer with the PaperCut icon next to it and tap <span className="font-bold">Print</span>.
          </p>
        </div>
      )
    }
  ];

  return (
    <SetupPage 
      title="Set up printing on your Android device" 
      steps={androidSteps} 
      currentOS="android" 
    />
  );
}