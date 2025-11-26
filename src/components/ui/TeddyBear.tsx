import { motion } from 'framer-motion'

export function TeddyBear() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -8, 0],
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
        y: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }
      }}
      className="w-full h-full flex items-center justify-center"
    >
      <svg
        width="100%"
        height="100%"
        viewBox="-20 -140 360 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-2xl"
      >
        {/* Left Ear */}
        <motion.g
          initial={{ scale: 0, transformOrigin: "90px 30px" }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.4, type: "spring", stiffness: 200 }}
        >
          <circle cx="90" cy="30" r="32" fill="#c4a484" />
          <circle cx="90" cy="30" r="20" fill="#e8d4bf" />
        </motion.g>

        {/* Right Ear */}
        <motion.g
          initial={{ scale: 0, transformOrigin: "190px 30px" }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.4, type: "spring", stiffness: 200 }}
        >
          <circle cx="190" cy="30" r="32" fill="#c4a484" />
          <circle cx="190" cy="30" r="20" fill="#e8d4bf" />
        </motion.g>

        {/* Head */}
        <motion.g
          initial={{ scale: 0, transformOrigin: "140px 80px" }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.1, duration: 0.5, type: "spring", stiffness: 150 }}
        >
          <circle cx="140" cy="80" r="65" fill="#c4a484" />
          <ellipse cx="140" cy="95" rx="48" ry="42" fill="#e8d4bf" />
        </motion.g>

        {/* Left Eye - Bigger and Friendlier */}
        <motion.g
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.4, duration: 0.3, type: "spring" }}
        >
          <circle cx="115" cy="75" r="9" fill="#2d3d2d" />
          <circle cx="118" cy="72" r="4" fill="#ffffff" opacity="0.9" />
          <circle cx="116" cy="76" r="2" fill="#ffffff" opacity="0.6" />
        </motion.g>

        {/* Right Eye - Bigger and Friendlier */}
        <motion.g
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.45, duration: 0.3, type: "spring" }}
        >
          <circle cx="165" cy="75" r="9" fill="#2d3d2d" />
          <circle cx="168" cy="72" r="4" fill="#ffffff" opacity="0.9" />
          <circle cx="166" cy="76" r="2" fill="#ffffff" opacity="0.6" />
        </motion.g>

        {/* Rosy Cheeks */}
        <motion.g
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
        >
          <circle cx="95" cy="98" r="12" fill="#ff9999" />
          <circle cx="185" cy="98" r="12" fill="#ff9999" />
        </motion.g>

        {/* Nose */}
        <motion.ellipse
          cx="140"
          cy="95"
          rx="10"
          ry="8"
          fill="#8b7355"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, duration: 0.3, type: "spring" }}
        />

        {/* Big Happy Smile */}
        <motion.path
          d="M 110 105 Q 140 120 170 105"
          stroke="#8b7355"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        />

        {/* Body */}
        <motion.g
          initial={{ scale: 0, transformOrigin: "140px 200px" }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.15, duration: 0.5, type: "spring", stiffness: 150 }}
        >
          <ellipse cx="140" cy="200" rx="52" ry="58" fill="#c4a484" />
          <ellipse cx="140" cy="208" rx="35" ry="38" fill="#e8d4bf" />
        </motion.g>

        {/* Left Arm */}
        <motion.g
          initial={{ scale: 0, transformOrigin: "88px 190px" }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
        >
          <ellipse
            cx="88"
            cy="190"
            rx="20"
            ry="42"
            fill="#c4a484"
            transform="rotate(-15 88 190)"
          />
        </motion.g>

        {/* Right Arm - Raised for balloons */}
        <motion.g
          initial={{ scale: 0, transformOrigin: "200px 170px" }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
        >
          <ellipse
            cx="200"
            cy="170"
            rx="20"
            ry="42"
            fill="#c4a484"
            transform="rotate(35 200 170)"
          />
        </motion.g>

        {/* Right Hand/Paw holding balloons */}
        <motion.g
          initial={{ scale: 0, transformOrigin: "224px 136px" }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.35, duration: 0.3, ease: "easeOut" }}
        >
          <circle cx="224" cy="136" r="14" fill="#c4a484" />
          <circle cx="224" cy="136" r="10" fill="#e8d4bf" />
        </motion.g>

        {/* Balloon Strings */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 0.8, duration: 0.4 }}
        >
          <motion.path
            d="M 224 136 Q 222 65 220 53"
            stroke="#8b7355"
            strokeWidth="1.5"
            fill="none"
            animate={{
              d: [
                "M 224 136 Q 222 65 220 53",
                "M 224 136 Q 220 65 220 53",
                "M 224 136 Q 222 65 220 53",
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.path
            d="M 224 136 Q 250 50 270 28"
            stroke="#8b7355"
            strokeWidth="1.5"
            fill="none"
            animate={{
              d: [
                "M 224 136 Q 250 50 270 28",
                "M 224 136 Q 253 50 270 28",
                "M 224 136 Q 250 50 270 28",
              ]
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.path
            d="M 224 136 Q 190 50 170 25"
            stroke="#8b7355"
            strokeWidth="1.5"
            fill="none"
            animate={{
              d: [
                "M 224 136 Q 190 50 170 25",
                "M 224 136 Q 187 50 170 25",
                "M 224 136 Q 190 50 170 25",
              ]
            }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.g>

        {/* Balloon 1 - Sage Green */}
        <motion.g
          initial={{ scale: 0, transformOrigin: "220px -10px" }}
          animate={{
            scale: 1,
            y: [-2, 2, -2],
          }}
          transition={{
            scale: { delay: 0.9, duration: 0.4, type: "spring" },
            y: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <ellipse cx="220" cy="-10" rx="48" ry="63" fill="#5a7c59" opacity="0.9" />
          <ellipse cx="210" cy="-25" rx="16" ry="25" fill="white" opacity="0.4" />
          <path d="M 220 53 Q 217 59 220 63" stroke="#5a7c59" strokeWidth="4" fill="none" />
        </motion.g>

        {/* Balloon 2 - Mint */}
        <motion.g
          initial={{ scale: 0, transformOrigin: "270px -35px" }}
          animate={{
            scale: 1,
            y: [2, -2, 2],
            x: [-1, 1, -1],
          }}
          transition={{
            scale: { delay: 0.95, duration: 0.4, type: "spring" },
            y: { duration: 2.8, repeat: Infinity, ease: "easeInOut" },
            x: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <ellipse cx="270" cy="-35" rx="48" ry="63" fill="#c5e0c5" opacity="0.9" />
          <ellipse cx="260" cy="-50" rx="16" ry="25" fill="white" opacity="0.4" />
          <path d="M 270 28 Q 267 34 270 38" stroke="#c5e0c5" strokeWidth="4" fill="none" />
        </motion.g>

        {/* Balloon 3 - Pastel Sage */}
        <motion.g
          initial={{ scale: 0, transformOrigin: "170px -38px" }}
          animate={{
            scale: 1,
            y: [1, -3, 1],
            x: [1, -1, 1],
          }}
          transition={{
            scale: { delay: 1, duration: 0.4, type: "spring" },
            y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            x: { duration: 2.3, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <ellipse cx="170" cy="-38" rx="48" ry="63" fill="#d4e2d4" opacity="0.9" />
          <ellipse cx="160" cy="-53" rx="16" ry="25" fill="white" opacity="0.4" />
          <path d="M 170 25 Q 167 31 170 35" stroke="#d4e2d4" strokeWidth="4" fill="none" />
        </motion.g>

        {/* Left Foot */}
        <motion.ellipse
          cx="115"
          cy="265"
          rx="22"
          ry="15"
          fill="#c4a484"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.35, duration: 0.4, type: "spring" }}
        />

        {/* Right Foot */}
        <motion.ellipse
          cx="165"
          cy="265"
          rx="22"
          ry="15"
          fill="#c4a484"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.35, duration: 0.4, type: "spring" }}
        />

        {/* Bow - Sage Green Ribbon on Neck */}
        <motion.g
          initial={{ scale: 0, transformOrigin: "140px 148px" }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.7, duration: 0.4, type: "spring", stiffness: 200 }}
        >
          {/* Left bow loop */}
          <ellipse
            cx="115"
            cy="148"
            rx="20"
            ry="14"
            fill="#5a7c59"
            transform="rotate(-25 115 148)"
          />
          {/* Right bow loop */}
          <ellipse
            cx="165"
            cy="148"
            rx="20"
            ry="14"
            fill="#5a7c59"
            transform="rotate(25 165 148)"
          />
          {/* Center knot */}
          <circle cx="140" cy="148" r="10" fill="#7a9a79" />
          {/* Ribbon band behind bow */}
          <ellipse
            cx="140"
            cy="148"
            rx="50"
            ry="6"
            fill="#5a7c59"
            opacity="0.6"
          />
        </motion.g>

        {/* Sparkles */}
        <motion.g
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 1, 0],
            scale: [0, 1, 1, 0.8],
            rotate: [0, 180, 360, 360]
          }}
          transition={{
            delay: 1,
            duration: 2.5,
            repeat: Infinity,
            repeatDelay: 0.5
          }}
        >
          <path
            d="M 55 100 L 58 103 L 55 106 L 52 103 Z"
            fill="#f5c842"
            opacity="0.9"
          />
          <circle cx="55" cy="103" r="2" fill="#fff" opacity="0.8" />
        </motion.g>

        <motion.g
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 1, 0],
            scale: [0, 1, 1, 0.8],
            rotate: [0, -180, -360, -360]
          }}
          transition={{
            delay: 1.5,
            duration: 2.5,
            repeat: Infinity,
            repeatDelay: 0.5
          }}
        >
          <path
            d="M 250 120 L 253 123 L 250 126 L 247 123 Z"
            fill="#f5c842"
            opacity="0.9"
          />
          <circle cx="250" cy="123" r="2" fill="#fff" opacity="0.8" />
        </motion.g>
      </svg>
    </motion.div>
  )
}
