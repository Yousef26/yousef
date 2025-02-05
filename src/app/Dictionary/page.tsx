// 'use client';
// import React, { useState, useEffect } from 'react';
// import '../../../styles/globals.css';
// import Input from '@mui/joy/Input';
// import Stack from '@mui/joy/Stack';
// import './dic.css';
// import { m } from 'framer-motion';

// const Page = () => {
//     const [inputValue, setInputValue] = useState('');
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         if (inputValue.trim() !== '') {
//             const fetchData = async () => {
//                 try {
//                     const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue}`);
//                     const result = await response.json();
//                     setData(result || []);
//                 } catch (error) {
//                     console.error('Error fetching data:', error);
//                 }
//             };

//             fetchData();
//         }
//     }, [inputValue]);

//     return (
//         <div className="w-full h-screen bg-slate-700 -z-50">
//             <div className="flex flex-col justify-around items-center p-12">
//                 <Stack spacing={2}>
//                     <Input
//                         placeholder="Type in here…"
//                         variant="soft"
//                         value={inputValue}
//                         onChange={(e) => setInputValue(e.target.value)}
//                         sx={{
//                             '--Input-radius': '0px',
//                             borderBottom: '2px solid',
//                             borderColor: 'neutral.outlinedBorder',
//                             '&:hover': {
//                                 borderColor: 'neutral.outlinedHoverBorder',
//                             },
//                             '&::before': {
//                                 border: '1px solid #FB923C',
//                                 transform: 'scaleX(0)',
//                                 left: 0,
//                                 right: 0,
//                                 bottom: '-2px',
//                                 top: 'unset',
//                                 transition: 'transform .3s cubic-bezier(0.1,0.9,0.2,1)',
//                                 borderRadius: 0,
//                                 borderBottomLeftRadius: '64px 20px',
//                                 borderBottomRightRadius: '64px 20px',
//                             },
//                             '&:focus-within::before': {
//                                 transform: 'scaleX(1)',
//                             },
//                         }}
//                     />
//                 </Stack>
//             </div>
//             <div className="flex flex-col items-center justify-center w-full">
//                 <div className="w-1/2 bg-slate-300 border-slate-300 grid-cols grid border-solid border-2 p-4">
//                 {data.length > 0 && data[0].phonetics.length > 0 && data[0].phonetics[0].audio ? (
//     <>
//         <div className='flex justify-center items-center bg-slate-900'>voice</div>
//         <div className='flex justify-center items-center bg-slate-900'>
//         <audio controls className="mt-1">
//         <source src={data[0].phonetics[0].audio} type="audio/mpeg" />
//         Your browser does not support the audio element.
//     </audio>
//         </div>
//         <div className='flex justify-center items-center bg-slate-900'>identification</div>
//         <div className='flex justify-center items-center bg-slate-900'>
//             {data[0].meanings[0].definitions[0].definition}
//         </div>
//         <div className='flex justify-center items-center bg-slate-900'>synonyms</div>
//         <div className='flex justify-center items-center bg-slate-900'>
//         {data[0].meanings[0].definitions[0].synonyms[0]}
//         ii
//         </div>
//         <div className='flex justify-center items-center bg-slate-900'></div>
//         <div className='flex justify-center items-center bg-slate-900'></div>
//         <div className='flex justify-center items-center bg-slate-900'></div>
//         <div className='flex justify-center items-center bg-slate-900'></div>
//     </>
// ) : null}

//                     {/* {item.meanings.map((meaning, idx) => (
//                                     <div key={idx} className="mt-4">
//                                         <h3 className="text-lg font-semibold text-gray-800">{meaning.partOfSpeech}</h3>
//                                         {meaning.definitions.map((definition, defIdx) => (
//                                             <div key={defIdx} className="mt-2">
//                                                 <p className="text-gray-600">{definition.definition}</p>
//                                                 {definition.example && (
//                                                     <p className="text-gray-500 italic mt-1">"{definition.example}"</p>
//                                                 )}
//                                             </div>
//                                         ))}
//                                     </div>
//                                 ))} */}
//                 </div>


//             </div>
//         </div>
//     );
// };

// export default Page;
