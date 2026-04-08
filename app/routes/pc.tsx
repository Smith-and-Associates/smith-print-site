import SetupPage from "../components/SetupPage";

export default function PcPage() {
  const pcSteps = [
    {
      title: "Step 1",
      content: (
        <>
          <p className="mb-6">To access your organization's printers, first download Mobility Print.</p>
          <a 
            href="https://mp.cloud.papercut.com/?token=eyJhbGciOiJSUzI1NiIsIm9yZyI6Im9yZy0yNVJHQkJNSCIsInNydiI6InNydi1aVk1LNVpLSyIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3NzMxNzEzNDYsImlzcyI6InNydi1aVk1LNVpLSyIsImp0aSI6IkFMOEIxWFQ3IiwibG5rIjoiQUw4QjFYVDciLCJvcmciOiJvcmctMjVSR0JCTUgiLCJzcnYiOiJzcnYtWlZNSzVaS0siLCJzdWIiOiJ0b2tlbkNyZWF0aW9uIn0.b1W96lD7Sab8X5vWBwSR9i5lGO1QK9OgCyoYdZijU5R2Iq81jik5MgyRtwlSVAH5ZY4GQeuHbi2oftMtG5VI4fFjqDbSJ0WMS4-nHLeRH5dgXZ_mM5LYh0BMNbE0iFakX48Agb6sD4ka9z8vhnhcOvp_gI_7MKuW7K9ngvvlfhhV1WZa-J3CZaKXHvHu87A_rqBtwyom8qvw4FlKFj8jhrahQXUvhEqi2PkwDdudHO-QNYCwXxpzpyg0gGLrcnciGUwXnuHGuq5z5V418NLLcyACbIDfJXIxtFDa2VD2VmEMD-lnE2gTbieBnj41Gn_fg-NAUEv5KAYESqybnc4ddFPtFUzwfOOvKCmhHjmQLSAgtUkObwRyqB-2xzzk2fTuEdSrzADJXIk8mhNhw58uQepXUJX1jpshh6v0w7CUNsddXzRZ7C-0p8I_MaRD1SQ5NMjX4ppsm4f9pFB4uSowRjHmJ0lLnfG5FdyvFcK3hIeGfw1zoWO83HwjejTIlZHLnwaMAVfKvAZgQzk72HlrygmoFPSZXRLs9L_jvvfMCIqjZ_PhBsXnx_HJL-Othq6PO8G6Ta5idLwRzPQVR8QhTBlB3XWaZIbMkUKPBPWb_EjIShLmd2DhxN04edHnYY37aCA84n-tiqCJkfXLEnXZDPCwr8qbF4SNz8EMCASnRQA"
            className="inline-block bg-[#F37021] hover:bg-[#F37021] text-white font-bold py-2.5 px-8 rounded shadow-md transition-all no-underline"
          >
            Download Mobility Print
          </a>
        </>
      )
    },
    {
      title: "Step 2",
      content: (
        <p>Run the Mobility Print installer to select and install the printers you want to use.<br /><br />
        <span className="text-[#718096]">If prompted, enter your PaperCut username and password.</span></p>
      )
    },
    {
      title: "Tutorial",
      content: (
        <>
          <p className="mb-4">Watch this short tutorial for a visual walkthrough:</p>
          <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
            <iframe
              src="https://www.youtube.com/embed/Or-jsM20IQ0"
              title="Mobility Print Tutorial"
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
      footerText="When it's time to print, just print like you normally do."
    />
  );
}