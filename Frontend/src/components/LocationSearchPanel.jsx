import React from 'react';

// --- UPDATED DATA ---
// Mock data with different addresses for each id.
const locations = [
  {
    id: 1,
    line1: "24B, Near Kapoor's cafe, Sheryians",
    line2: "Coding School, Bhopal"
  },
  {
    id: 2,
    line1: "10, MP Nagar Zone 2",
    line2: "Bhopal, Madhya Pradesh"
  },
  {
    id: 3,
    line1: "Rani Kamalapati Railway Station",
    line2: "Habibgaj, Bhopal"
  },
  {
    id: 4,
    line1: "Van Vihar National Park",
    line2: "Lake View Walkway, Bhopal"
  },
];
// --- END OF DATA ---

const LocationSearchPanel = () => {
  return (
    // Main container: a white panel with a shadow
    <div className="w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden">
      
      {/* We create a list for the location items */}
      <ul className="divide-y divide-gray-200">
        
        {locations.map((location) => (
          
          // Each list item is a flex container to align the icon and text
          <li 
            key={location.id} 
            className="flex items-center p-4 hover:bg-gray-50 cursor-pointer"
          >
            {/* 1. Icon (Embedded SVG) */}
            <div className="mr-4">
              {/* This is the SVG for the map pin icon */}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 20 20" 
                fill="currentColor" 
                className="h-6 w-6 text-gray-600"
              >
                <path 
                  fillRule="evenodd" 
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" 
                  clipRule="evenodd" 
                />
              </svg>
            </div>

            {/* 2. Text Content */}
            <div>
              <div className="text-sm font-medium text-gray-900">
                {location.line1}
              </div>
              <div className="text-sm text-gray-500">
                {location.line2}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LocationSearchPanel;



/////////////
// import React from 'react'

// const LocationSearchPanel = ({ suggestions, setVehiclePanel, setPanelOpen, setPickup, setDestination, activeField }) => {

//     const handleSuggestionClick = (suggestion) => {
//         if (activeField === 'pickup') {
//             setPickup(suggestion)
//         } else if (activeField === 'destination') {
//             setDestination(suggestion)
//         }
//         // setVehiclePanel(true)
//         // setPanelOpen(false)
//     }

//     return (
//         <div>
//             {/* Display fetched suggestions */}
//             {
//                 suggestions.map((elem, idx) => (
//                     <div key={idx} onClick={() => handleSuggestionClick(elem)} className='flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start'>
//                         <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'><i className="ri-map-pin-fill"></i></h2>
//                         <h4 className='font-medium'>{elem}</h4>
//                     </div>
//                 ))
//             }
//         </div>
//     )
// }

// export default LocationSearchPanel