"use client";

import { motion } from "framer-motion";

const flowers = [
    { x: "5%", y: "10%" },
    { x: "90%", y: "15%" },
    { x: "10%", y: "70%" },
    { x: "85%", y: "75%" },
    { x: "50%", y: "20%" },
];

export default function FloatingFlowers() {
    return (
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
            {flowers.map((pos, i) => (
                <motion.div
                    key={i}
                    className="absolute text-rose-300 text-2xl"
                    style={{ left: pos.x, top: pos.y }}
                    animate={{
                        y: [0, -20, 0],
                        rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                        duration: 6 + i,
                        repeat: Infinity,
                    }}
                >
                    🌸
                </motion.div>
            ))}
        </div>
    );
}