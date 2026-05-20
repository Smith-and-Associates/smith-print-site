import SetupPage from "../components/SetupPage";

export default function MacPage() {
  const macSteps = [
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
        <>
          <p className="mb-6">If the above method doesn't work, please download Mobility Print.</p>
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
    //     {
    //   title: "Alternative Option",
    //   content: (
    //     <div className="text-center px-4">
    //       <p className="text-[16px]"><a href="https://mp.cloud.papercut.com/?token=eyJhbGciOiJSUzI1NiIsIm9yZyI6Im9yZy0yNVJHQkJNSCIsInNydiI6InNydi1aVk1LNVpLSyIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3NzMxNzEzNDYsImlzcyI6InNydi1aVk1LNVpLSyIsImp0aSI6IkFMOEIxWFQ3IiwibG5rIjoiQUw4QjFYVDciLCJvcmciOiJvcmctMjVSR0JCTUgiLCJzcnYiOiJzcnYtWlZNSzVaS0siLCJzdWIiOiJ0b2tlbkNyZWF0aW9uIn0.b1W96lD7Sab8X5vWBwSR9i5lGO1QK9OgCyoYdZijU5R2Iq81jik5MgyRtwlSVAH5ZY4GQeuHbi2oftMtG5VI4fFjqDbSJ0WMS4-nHLeRH5dgXZ_mM5LYh0BMNbE0iFakX48Agb6sD4ka9z8vhnhcOvp_gI_7MKuW7K9ngvvlfhhV1WZa-J3CZaKXHvHu87A_rqBtwyom8qvw4FlKFj8jhrahQXUvhEqi2PkwDdudHO-QNYCwXxpzpyg0gGLrcnciGUwXnuHGuq5z5V418NLLcyACbIDfJXIxtFDa2VD2VmEMD-lnE2gTbieBnj41Gn_fg-NAUEv5KAYESqybnc4ddFPtFUzwfOOvKCmhHjmQLSAgtUkObwRyqB-2xzzk2fTuEdSrzADJXIk8mhNhw58uQepXUJX1jpshh6v0w7CUNsddXzRZ7C-0p8I_MaRD1SQ5NMjX4ppsm4f9pFB4uSowRjHmJ0lLnfG5FdyvFcK3hIeGfw1zoWO83HwjejTIlZHLnwaMAVfKvAZgQzk72HlrygmoFPSZXRLs9L_jvvfMCIqjZ_PhBsXnx_HJL-Othq6PO8G6Ta5idLwRzPQVR8QhTBlB3XWaZIbMkUKPBPWb_EjIShLmd2DhxN04edHnYY37aCA84n-tiqCJkfXLEnXZDPCwr8qbF4SNz8EMCASnRQA" className="text-[#6b46c1] underline" target="_blank" rel="noopener noreferrer">Download the macOS Mobility Print installer</a></p>
    //     </div>
    //   )
    // },
    {
      title: "Video Guide",
      content: (
        <div className="w-full aspect-video rounded-lg overflow-hidden bg-black mb-2 relative">
          <iframe
            src="https://www.youtube.com/embed/ZqEO5-SDB8Y"
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
    },
    {
      title: "Adding Printer by IP Address",
      content: (
        <>
          <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
            <iframe
            src="https://www.youtube.com/embed/QFPkhDOPJrM?si=gbt8hyy9y1n-FNs0"
            title="YouTube video player"
            className="absolute inset-0 w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          </div>
        </>
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