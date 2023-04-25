// import React, { useState } from "react";
// export default function Button() {
//   const [tabIndex, setTabIndex] = useState(0);

//   const handleTabChange = (index) => {
//     setTabIndex(index);
//   };

//   return (
//     <div className="App">
//       <div className="Sidebar">
//         <ul>
//           <li>Tab 1</li>
//           <li>Tab 2</li>
//           <li>Tab 3</li>
//           <li>Tab 4</li>
//           <li>Tab 5</li>
//         </ul>
//       </div>
//       <div className="Content">
//         <Tabs selectedIndex={tabIndex} onSelect={handleTabChange}>
//           <TabList>
//             <Tab>One</Tab>
//             {/* <Tab>Two</Tab> */}
//             <Tab>Extra</Tab>
//           </TabList>

//           <TabPanel>
//             <h2>One</h2>
//             <p>This is the content of tab one.</p>
//           </TabPanel>
//           <TabPanel>
//             <h2>Two</h2>
//             <p>This is the content of tab two.</p>
//           </TabPanel>
//           <TabPanel>
//             <h2>Extra</h2>
//             <p>This is the content of the extra tab.</p>
//           </TabPanel>
//         </Tabs>
//       </div>
//     </div>
//   );
// }
