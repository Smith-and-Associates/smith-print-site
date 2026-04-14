import SetupPage from "../components/SetupPage";

export default function MacPage() {
  const macSteps = [
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
          <p className="text-[16px]"><a href="https://mp.cloud.papercut.com/?token=eyJhbGciOiJSUzI1NiIsIm9yZyI6Im9yZy0yNVJHQkJNSCIsInNydiI6InNydi1aVk1LNVpLSyIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3NzMxNzEzNDYsImlzcyI6InNydi1aVk1LNVpLSyIsImp0aSI6IkFMOEIxWFQ3IiwibG5rIjoiQUw4QjFYVDciLCJvcmciOiJvcmctMjVSR0JCTUgiLCJzcnYiOiJzcnYtWlZNSzVaS0siLCJzdWIiOiJ0b2tlbkNyZWF0aW9uIn0.b1W96lD7Sab8X5vWBwSR9i5lGO1QK9OgCyoYdZijU5R2Iq81jik5MgyRtwlSVAH5ZY4GQeuHbi2oftMtG5VI4fFjqDbSJ0WMS4-nHLeRH5dgXZ_mM5LYh0BMNbE0iFakX48Agb6sD4ka9z8vhnhcOvp_gI_7MKuW7K9ngvvlfhhV1WZa-J3CZaKXHvHu87A_rqBtwyom8qvw4FlKFj8jhrahQXUvhEqi2PkwDdudHO-QNYCwXxpzpyg0gGLrcnciGUwXnuHGuq5z5V418NLLcyACbIDfJXIxtFDa2VD2VmEMD-lnE2gTbieBnj41Gn_fg-NAUEv5KAYESqybnc4ddFPtFUzwfOOvKCmhHjmQLSAgtUkObwRyqB-2xzzk2fTuEdSrzADJXIk8mhNhw58uQepXUJX1jpshh6v0w7CUNsddXzRZ7C-0p8I_MaRD1SQ5NMjX4ppsm4f9pFB4uSowRjHmJ0lLnfG5FdyvFcK3hIeGfw1zoWO83HwjejTIlZHLnwaMAVfKvAZgQzk72HlrygmoFPSZXRLs9L_jvvfMCIqjZ_PhBsXnx_HJL-Othq6PO8G6Ta5idLwRzPQVR8QhTBlB3XWaZIbMkUKPBPWb_EjIShLmd2DhxN04edHnYY37aCA84n-tiqCJkfXLEnXZDPCwr8qbF4SNz8EMCASnRQA" className="text-[#6b46c1] underline" target="_blank" rel="noopener noreferrer">Download the macOS Mobility Print installer</a></p>
        </div>
      )
    },
    {
      title: "Tips",
      content: (
        <div className="flex text-left border-l-4 border-[#F37021] bg-slate-50/50 p-4 -mx-4">
          <div className="flex p-2 items-start gap-6">
            <ul className="flex-1 space-y-4 text-[14px] text-[#4a5568]">
              <li className="relative pl-4">
                <span className="absolute left-0 text-[#F37021] font-bold">•</span>
                If you're not sure how to print, take a look at <a href="https://support.apple.com/en-au/HT204135" target="_blank" className="text-[#6b46c1] underline decoration-1 underline-offset-2">Print from your Mac</a>.
              </li>
              <li className="relative pl-4">
                <span className="absolute left-0 text-[#F37021] font-bold">•</span>
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