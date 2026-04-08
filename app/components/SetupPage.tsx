import { Link } from "react-router";

interface Step {
  title: string;
  content: React.ReactNode;
}

interface SetupPageProps {
  title: string;
  steps: Step[];
  currentOS: 'pc' | 'mac' | 'android' | 'ios' | 'chromebook';
  footerText?: React.ReactNode;
}

export default function SetupPage({ title, steps, currentOS, footerText }: SetupPageProps) {
  
  const iconList = [
    { id: 'android', path: '/icons/android.png', route: '/android' },
    { id: 'chromebook', path: '/icons/chrome.png', route: '/chromebook' },
    { id: 'ios', path: '/icons/ios.png', route: '/ios' },
    { id: 'mac', path: '/icons/apple.png', route: '/mac' },
    { id: 'pc', path: '/icons/windows.png', route: '/pc' },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center py-12 px-4 font-sans text-[#4a5568] w-full">
      
      {/* PaperCut Arrow Logo */}
      <div className="mb-6">
        <svg width="40" height="40" viewBox="0 0 100 100" className="text-[#F37021]">
          <path fill="currentColor" d="M20 10 L80 50 L20 90 L40 50 Z" />
        </svg>
      </div>

      {/* Main Page Title */}
      <h1 className="text-2xl font-bold mb-10 text-[#2d3748] text-center">
        {title}
      </h1>

      {/* The White Cards (Steps) */}
      <div className="w-full max-w-xl space-y-12">
        {steps.map((step, index) => (
          <div 
            key={index} 
            className="relative bg-white rounded shadow-sm p-8 pt-10 text-center border border-white"
          >
            {/* The Floating Gray Badge */}
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#718096] text-white px-5 py-1 rounded-md text-sm font-bold shadow-sm">
              {step.title}
            </span>
            
            {/* The Content Inside the Step */}
            <div className="text-[17px] leading-relaxed">
              {step.content}
            </div>
          </div>
        ))}
      </div>

      {/* Optional "Print Normally" Text */}
      {footerText && (
        <div className="mt-12 text-center text-[#4a5568] text-[17px] max-w-md">
          {footerText}
        </div>
      )}

      {/* Manual Override Section (Icons) */}
      <div className="mt-12 text-center">
        <p className="text-sm text-[#718096] mb-8 font-medium">
          Not your operating system? Try one of these:
        </p>
        
        <div className="flex gap-8 justify-center items-center">
          {iconList.map((icon) => (
            // Only show the icon if it's NOT the current operating system
            currentOS !== icon.id && (
              <Link 
                key={icon.id} 
                to={icon.route} 
                className="hover:opacity-60 transition-opacity transform hover:scale-105"
              >
                <img 
                  src={icon.path} 
                  alt={`${icon.id} icon`} 
                  className="w-11 h-11 object-contain" 
                />
              </Link>
            )
          ))}
        </div>
      </div>
    </div>
  );
}