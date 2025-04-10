// import { img } from 'framer-motion/client';
// import { useEffect, useRef, useState } from 'react'
// import CountUp from 'react-countup'
// import React from 'react'

// const Prizes = () => {

//   const [isVisible, setIsVisible] = useState(false)
//   const sectionRef = useRef(null)
//   const trackPrize = [
//     { name: 'AI/ML', prize: 2000, img: './aiml.svg' },
//     { name: 'WEB3', prize: 2000, img: './web3.svg' },
//     { name: 'ALL GIRLS', prize: 2000, img: './allgirls.png' },
//   ]

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true)
//           observer.disconnect()
//         }
//       },
//       {
//         threshold: 0.25,
//         rootMargin: "0px 0px -50px 0px",
//       },
//     )

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current)
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.disconnect()
//       }
//     }
//   }, [])

//   return (
//     <div>
//       <h1 className='font-bold text-3xl text-center'>Prizes</h1>
//       <h2 className="font-bold text-2xl my-4 text-center">
//         Prize Pool: ₹
//         {isVisible ? (
//           <CountUp start={0} end={100000} duration={2.5} separator="," suffix="+" useEasing={true} />
//         ) : (
//           "1,00,000+"
//         )}
//       </h2>
//       <div ref={sectionRef}>
//         <div className='flex items-center justify-center gap-4 flex-wrap'>
//           <div className='flex flex-col items-center justify-center gap-3 mt-16 p-6 rounded-2xl border-[#c0c0c0] border-4 bg-[#B89C7B] w-64' style={{ height: '300px' }}>
//             <div className='bg-white p-3 border-[#C0C0C0] border-4 rounded-full'>
//               <h1 className='text-7xl py-3'>🥈</h1>
//             </div>
//             <h1 className='font-bold text-2xl'>1<sup>st</sup> Runner Up</h1>
//             <h2 className="font-bold text-2xl text-[#c0c0c0]">
//               ₹{isVisible ? <CountUp start={0} end={30000} duration={2} separator="," useEasing={true} /> : "30,000"}
//             </h2>
//           </div>
//           <div className='flex flex-col items-center justify-center gap-3 mt-4 p-6 rounded-2xl border-[#FFD700] border-3 bg-[#B89C7B] w-64' style={{ height: '350px' }}>
//             <div className='bg-white p-3 w-40 h-40 border-[#FFD700] border-4 rounded-full'>
//               <img src="./first.png" alt="Winner" />
//             </div>
//             <h1 className='font-bold m-2 text-3xl'>Winner</h1>
//             <h2 className="font-bold text-2xl text-[#FFD700]">
//               ₹{isVisible ? <CountUp start={0} end={50000} duration={2.5} separator="," useEasing={true} /> : "50,000"}
//             </h2>
//           </div>
//           <div className='flex flex-col items-center justify-center gap-3 mt-28 p-6 rounded-2xl border-[#CD7F32] border-3 bg-[#B89C7B] w-64' style={{ height: '250px' }}>
//             <div className='bg-white p-3 border-[#CD7F32] border-4 rounded-full'>
//               <h1 className='text-6xl py-3'>🥉</h1>
//             </div>
//             <h1 className='font-bold text-2xl'>2<sup>nd</sup> Runner Up</h1>
//             <h2 className="font-bold text-2xl text-[#CD7F32]">
//               ₹{isVisible ? <CountUp start={0} end={20000} duration={1.5} separator="," useEasing={true} /> : "20,000"}
//             </h2>
//           </div>
//         </div>
//       </div>

//       {/* Track Prizes */}
//       <h1 className='font-bold text-3xl text-center mt-10'>Track Prizes</h1>
//       <div className='flex items-center justify-center gap-4 flex-wrap'>
//         {trackPrize.map((track, index) => (
//           <div key={index} className='flex flex-col items-center justify-center gap-3 mt-8 p-6 rounded-2xl border-[#773129] border-3 bg-[#B89C7B] w-64'>
//             <div className=' border-[#773129] border-2 rounded-full'>
//               <img src={track.img} alt={track.name} className="w-24 h-24" />
//             </div>
//             <h1 className='font-bold text-xl'>{track.name}</h1>
//             <h2 className="font-bold text-2xl text-yellow-200">
//               ₹
//               {isVisible ? (
//                 <CountUp
//                   start={0}
//                   end={track.prize}
//                   duration={1.5}
//                   separator=","
//                   useEasing={true}
//                   delay={0.5} 
//                 />
//               ) : (
//                 track.prize.toLocaleString()
//               )}
//             </h2>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Prizes;



import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import CountUp from "react-countup"

const Prizes = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)
  const trackPrize = [
    { name: "AI/ML", prize: 2000, img: "./aiml.svg" },
    { name: "WEB3", prize: 2000, img: "./web3.svg" },
    { name: "ALL GIRLS", prize: 2000, img: "./allgirls.png" },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.25,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.disconnect()
      }
    }
  }, [])

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const borderVariants = {
    hidden: {
      borderColor: "rgba(0,0,0,0)",
      boxShadow: "0 0 0 rgba(0,0,0,0)",
    },
    visible: {
      borderColor: "rgba(192,192,192,1)",
      boxShadow: "0 0 10px rgba(192,192,192,0.5)",
      transition: {
        duration: 1.5,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  }

  const goldBorderVariants = {
    hidden: {
      borderColor: "rgba(0,0,0,0)",
      boxShadow: "0 0 0 rgba(0,0,0,0)",
    },
    visible: {
      borderColor: "rgba(255,215,0,1)",
      boxShadow: "0 0 15px rgba(255,215,0,0.5)",
      transition: {
        duration: 1.5,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  }

  const bronzeBorderVariants = {
    hidden: {
      borderColor: "rgba(0,0,0,0)",
      boxShadow: "0 0 0 rgba(0,0,0,0)",
    },
    visible: {
      borderColor: "rgba(205,127,50,1)",
      boxShadow: "0 0 10px rgba(205,127,50,0.5)",
      transition: {
        duration: 1.5,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  }

  const trackBorderVariants = {
    hidden: {
      borderColor: "rgba(0,0,0,0)",
      boxShadow: "0 0 0 rgba(0,0,0,0)",
    },
    visible: {
      borderColor: "rgba(119,49,41,1)",
      boxShadow: "0 0 10px rgba(119,49,41,0.5)",
      transition: {
        duration: 1.5,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  }

  const iconVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <motion.h1
        className="font-bold text-3xl text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
      >
        Prizes
      </motion.h1>
      
      <motion.h2
        className="font-bold text-2xl my-4 p-2 w-80 rounded-4xl text-[#E5CF53] bg-[#773129] text-center"
        initial={{ opacity: 0, y: -10 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Prize Pool: ₹
        {isVisible ? (
          <CountUp start={0} end={100000} duration={3} separator="," suffix="+" useEasing={true} />
        ) : (
          "1,00,000+"
        )}
      </motion.h2>
      <div ref={sectionRef}>
        <motion.div
          className="flex items-center justify-center gap-4 flex-wrap"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.div
            className="flex flex-col items-center justify-center gap-3 mt-16 p-6 rounded-2xl border-[#c0c0c0] border-4 bg-[#B89C7B] w-64"
            style={{ height: "300px" }}
            variants={cardVariants}
            whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
          >
            <motion.div
              className="bg-white p-3 border-[#C0C0C0] border-4 rounded-full"
              variants={borderVariants}
              animate={isVisible ? "visible" : "hidden"}
            >
              <motion.h1 className="text-7xl py-3" variants={iconVariants}>
                🥈
              </motion.h1>
            </motion.div>
            <motion.h1 className="font-bold text-2xl" variants={textVariants}>
              1<sup>st</sup> Runner Up
            </motion.h1>
            <motion.h2 className="font-bold text-2xl text-[#c0c0c0]" variants={textVariants}>
              ₹{isVisible ? <CountUp start={0} end={30000} duration={2} separator="," useEasing={true} /> : "30,000"}
            </motion.h2>
          </motion.div>

          <motion.div
            className="flex flex-col items-center justify-center gap-3 mt-4 p-6 rounded-2xl border-[#FFD700] border-3 bg-[#B89C7B] w-64"
            style={{ height: "350px" }}
            variants={cardVariants}
            whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
          >
            <motion.div
              className="bg-white p-3 w-40 h-40 border-[#FFD700] border-4 rounded-full"
              variants={goldBorderVariants}
              animate={isVisible ? "visible" : "hidden"}
            >
              <motion.img
                src="./first.png"
                alt="Winner"
                variants={iconVariants}
                className="w-full h-full object-contain"
              />
            </motion.div>
            <motion.h1 className="font-bold m-2 text-3xl" variants={textVariants}>
              Winner
            </motion.h1>
            <motion.h2 className="font-bold text-2xl text-[#FFD700]" variants={textVariants}>
              ₹{isVisible ? <CountUp start={0} end={50000} duration={2.5} separator="," useEasing={true} /> : "50,000"}
            </motion.h2>
          </motion.div>

          <motion.div
            className="flex flex-col items-center justify-center gap-3 mt-4 lg:mt-28 p-6 rounded-2xl border-[#CD7F32] border-3 bg-[#B89C7B] w-64"
            style={{ height: "250px" }}
            variants={cardVariants}
            whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
          >
            <motion.div
              className="bg-white p-3 border-[#CD7F32] border-4 rounded-full"
              variants={bronzeBorderVariants}
              animate={isVisible ? "visible" : "hidden"}
            >
              <motion.h1 className="text-6xl py-3" variants={iconVariants}>
                🥉
              </motion.h1>
            </motion.div>
            <motion.h1 className="font-bold text-2xl" variants={textVariants}>
              2<sup>nd</sup> Runner Up
            </motion.h1>
            <motion.h2 className="font-bold text-2xl text-[#CD7F32]" variants={textVariants}>
              ₹{isVisible ? <CountUp start={0} end={20000} duration={1.5} separator="," useEasing={true} /> : "20,000"}
            </motion.h2>
          </motion.div>
        </motion.div>
      </div>

      {/* Track Prizes */}
      <motion.h1
        className="font-bold text-3xl text-center mt-10"
        initial={{ opacity: 0, y: -20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Track Prizes
      </motion.h1>
      <motion.div
        className="flex items-center justify-center gap-4 flex-wrap"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {trackPrize.map((track, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center gap-3 mt-8 p-6 rounded-2xl border-[#773129] border-3 bg-[#B89C7B] w-64"
            variants={cardVariants}
            custom={index}
            whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
          >
            <motion.div
              className="border-[#773129] border-2 rounded-full"
              variants={trackBorderVariants}
              animate={isVisible ? "visible" : "hidden"}
            >
              <motion.img src={track.img} alt={track.name} className="w-24 h-24" variants={iconVariants} />
            </motion.div>
            <motion.h1 className="font-bold text-xl" variants={textVariants}>
              {track.name}
            </motion.h1>
            <motion.h2 className="font-bold text-2xl text-yellow-200" variants={textVariants}>
              ₹
              {isVisible ? (
                <CountUp start={0} end={track.prize} duration={1.5} separator="," useEasing={true} delay={0.5} />
              ) : (
                track.prize.toLocaleString()
              )}
            </motion.h2>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Prizes
