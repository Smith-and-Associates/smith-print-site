import SetupPage from "../components/SetupPage";

export default function ChromebookPage() {
  const chromebookSteps = [
    {
      title: "Step 1",
      content: (
        <>
          <p className="mb-6 text-slate-600">
            To access your organization's printer, first add Mobility Print to Chrome.
          </p>
          <a 
            href="https://chromewebstore.google.com/detail/ndakideadaglgpbblmppfonobpdgggin?utm_source=item-share-cb"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#F37021] hover:bg-[#F37021] text-white font-bold py-2.5 px-8 rounded shadow-md transition-all no-underline"
          >
            Add Mobility Print to Chrome
          </a>
        </>
      )
    },
    {
      title: "How to print",
      content: (
        <div className="space-y-6">
          <p className="text-lg">
            Press <span className="font-bold">Ctrl + P</span>.
          </p>
          <p className="text-slate-600">
            Select a printer with the PaperCut icon next to it, then click <span className="font-bold">Print</span>.
          </p>
        </div>
      )
    }
  ];

  return (
    <SetupPage 
      title="Set up printing on your Chromebook" 
      steps={chromebookSteps} 
      currentOS="chromebook" 
    />
  );
}