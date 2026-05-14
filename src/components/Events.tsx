import { useState } from "react";

export default function Events() {
  return (
    <section id="events" className="bg-[#070d1a] py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Yeh sirf title dikhayega */}

        {/* Empty State / Coming Soon Message */}
        <div className="flex flex-col items-center justify-center py-20 text-gray-500 bg-[#0a1628] border border-blue-500/15 rounded-2xl">
          <svg 
            className="w-16 h-16 mb-4 text-blue-500/50" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <h3 className="text-2xl font-bold text-white mb-2">No Upcoming Events</h3>
          <p className="text-gray-400">We are currently planning our next big events. Stay tuned!</p>
        </div>

      </div>
    </section>
  );
}
