"use client"

import { motion } from "framer-motion"

const petals = [
    { left: "5%", duration: 14 },
    { left: "15%", duration: 18 },
    { left: "30%", duration: 16 },
    { left: "45%", duration: 20 },
    { left: "60%", duration: 17 },
    { left: "75%", duration: 19 },
    { left: "85%", duration: 15 },
    { left: "95%", duration: 21 },
]

// const flowers = [
//     { left: "8%", top: "15%" },
//     { left: "90%", top: "10%" },
//     { left: "10%", top: "75%" },
//     { left: "85%", top: "80%" },
// ]

export default function WeddingBackground() {
    return (
        <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">

            {/* romantic gradient background */}
            <div className="absolute inset-0 bg-gradient-to-b from-rose-50 via-white to-rose-50"></div>

            {/* glow effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-rose-200/30 blur-[120px] rounded-full"></div>

            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-pink-200/30 blur-[120px] rounded-full"></div>

            {/* floating flowers */}
            {/* {flowers.map((flower, i) => (
                <motion.div
                    key={i}
                    className="absolute text-rose-300 text-3xl"
                    style={{ left: flower.left, top: flower.top }}
                    animate={{
                        y: [0, -20, 0],
                        rotate: [0, 6, -6, 0],
                    }}
                    transition={{
                        duration: 6 + i,
                        repeat: Infinity,
                    }}
                >
                    🌸
                </motion.div>
            ))} */}

            {/* falling petals */}
            {petals.map((petal, i) => (
                <motion.div
                    key={`petal-${i}`}
                    className="absolute text-pink-300 text-xl"
                    style={{ left: petal.left, top: -20 }}
                    animate={{
                        y: "110vh",
                        rotate: 360
                    }}
                    transition={{
                        duration: petal.duration,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    🌸
                </motion.div>
            ))}

        </div>
    )
}