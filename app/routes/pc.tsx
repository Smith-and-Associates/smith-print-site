import SetupPage from "../components/SetupPage";

export default function PcPage() {
  const pcSteps = [
    {
      title: "Install Printers for PC",
      content: (
        <>
          <p className="mb-6">To access our Smith & Associates' printers, please download Mobility Print.</p>
          <a 
            href="https://mp.cloud.papercut.com/?token=eyJhbGciOiJSUzI1NiIsIm9yZyI6Im9yZy0yNVJHQkJNSCIsInNydiI6InNydi1aVk1LNVpLSyIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3NzMxNzEzNDYsImlzcyI6InNydi1aVk1LNVpLSyIsImp0aSI6IkFMOEIxWFQ3IiwibG5rIjoiQUw4QjFYVDciLCJvcmciOiJvcmctMjVSR0JCTUgiLCJzcnYiOiJzcnYtWlZNSzVaS0siLCJzdWIiOiJ0b2tlbkNyZWF0aW9uIn0.b1W96lD7Sab8X5vWBwSR9i5lGO1QK9OgCyoYdZijU5R2Iq81jik5MgyRtwlSVAH5ZY4GQeuHbi2oftMtG5VI4fFjqDbSJ0WMS4-nHLeRH5dgXZ_mM5LYh0BMNbE0iFakX48Agb6sD4ka9z8vhnhcOvp_gI_7MKuW7K9ngvvlfhhV1WZa-J3CZaKXHvHu87A_rqBtwyom8qvw4FlKFj8jhrahQXUvhEqi2PkwDdudHO-QNYCwXxpzpyg0gGLrcnciGUwXnuHGuq5z5V418NLLcyACbIDfJXIxtFDa2VD2VmEMD-lnE2gTbieBnj41Gn_fg-NAUEv5KAYESqybnc4ddFPtFUzwfOOvKCmhHjmQLSAgtUkObwRyqB-2xzzk2fTuEdSrzADJXIk8mhNhw58uQepXUJX1jpshh6v0w7CUNsddXzRZ7C-0p8I_MaRD1SQ5NMjX4ppsm4f9pFB4uSowRjHmJ0lLnfG5FdyvFcK3hIeGfw1zoWO83HwjejTIlZHLnwaMAVfKvAZgQzk72HlrygmoFPSZXRLs9L_jvvfMCIqjZ_PhBsXnx_HJL-Othq6PO8G6Ta5idLwRzPQVR8QhTBlB3XWaZIbMkUKPBPWb_EjIShLmd2DhxN04edHnYY37aCA84n-tiqCJkfXLEnXZDPCwr8qbF4SNz8EMCASnRQA" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-[#F37021] hover:bg-[#F37021] text-white font-bold py-2.5 px-8 rounded shadow-md transition-all no-underline"
          >
            Download Mobility Print
          </a>
        </>
      )
    },
    {
      title: "Tutorial",
      content: (
        <>
          <p className="mb-4">Watch this short tutorial for a visual walkthrough:</p>
          <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
            <iframe
              src="https://www.youtube.com/embed/n6Ay8tXr4ms"
              title="Mobility Print Tutorial"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
            />
          </div>
        </>
      )
    },
    {
      title: "Advanced Setup (Staff)",
      content: (
        <>
          <p className="mb-6">Download the Windows printer setup package.</p>
          <a
            href="/downloads/PC-Printer-Setup.zip"
            download
            className="inline-block bg-[#F37021] hover:bg-[#F37021] text-white font-bold py-2.5 px-8 rounded shadow-md transition-all no-underline"
          >
            Download PC Printer Setup
          </a>
          <div className="mt-6 text-left bg-amber-50 border-l-4 border-amber-500 text-amber-900 p-4 rounded text-[15px]">
            <p className="font-bold mb-2">Heads up: you may see a "Windows protected your PC" warning</p>
            <p className="mb-2">
              This blue box comes from Microsoft Defender SmartScreen. Windows tags downloaded files with a
              "Mark of the Web," which triggers the warning. To remove the tag before running the setup:
            </p>
            <ol className="list-decimal pl-5 space-y-1">
              <li>Right-click the downloaded <span className="font-bold">PC-Printer-Setup.zip</span> and choose <span className="font-bold">Properties</span>.</li>
              <li>At the bottom of the <span className="font-bold">General</span> tab, check <span className="font-bold">Unblock</span>, then click <span className="font-bold">OK</span>.</li>
              <li>Extract the zip and run the setup.</li>
            </ol>
          </div>
        </>
      )
    },
    {
      title: "Adding Printer by IP Address",
      content: (
        <>
          {/* <p className="mb-4">Watch this short tutorial for a visual walkthrough:</p> */}
          <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
            <iframe
              src="https://www.youtube.com/embed/sN_CtoW0PaA?si=rwSRjFN9CtjmD0tk"
              title="Mobility Print Tutorial"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
            />
          </div>
        </>
      )
    },
    {
      title: "Specialty USB Printing (Feed Tray)",
      content: (
        <>
          <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
            <iframe
              src="https://docs.google.com/presentation/d/1r5Wi8FJlpEua0RzuksiiVUmhCeoz3MokNhELO1LAomM/embed"
              title="Specialty USB Printing (Feed Tray)"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
            />
          </div>
        </>
      )
    }
  ];

  return (
    <SetupPage 
      title="Set up printing for Windows" 
      steps={pcSteps} 
      currentOS="pc" 
      // footerText="When it's time to print, just print like you normally do."
    />
  );
}