import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ element }) => {
  return (
    <button
      className="relative h-12 px-8 rounded-lg overflow-hidden transition-all duration-500 group cursor-pointer"
    >
      <div
        className="absolute inset-0 rounded-lg p-[2px] bg-gradient-to-b from-[#783128] via-[#5d180f] to-[#3e0f07]"
      >
        <div className="absolute inset-0 bg-[#5d180f] rounded-lg opacity-90"></div>
      </div>
      <div className="absolute inset-[2px] bg-[#5d180f] rounded-lg opacity-95"></div>
      <div
        className="absolute inset-[2px] bg-gradient-to-r from-[#5d180f] via-[#783128] to-[#5d180f] rounded-lg opacity-90"
      ></div>
      <div
        className="absolute inset-[2px] bg-gradient-to-b from-[#783128]/40 via-[#5d180f] to-[#3e0f07]/30 rounded-lg opacity-80"
      ></div>
      <div
        className="absolute inset-[2px] bg-gradient-to-br from-[#fff4e4]/10 via-[#5d180f] to-[#3e0f07]/50 rounded-lg"
      ></div>
      <div
        className="absolute inset-[2px] shadow-[inset_0_0_15px_rgba(120,49,40,0.15)] rounded-lg"
      ></div>
      <div className="relative flex items-center justify-center gap-2">
        <span
          className="text-lg font-normal bg-gradient-to-b from-[#fff4e4] to-[#fff4e4] bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(120,49,40,0.4)] tracking-tighter"
        >
          {element}
        </span>
      </div>
      <div
        className="absolute inset-[2px] opacity-0 transition-opacity duration-300 bg-gradient-to-r from-[#783128]/20 via-[#fff4e4]/10 to-[#783128]/20 group-hover:opacity-100 rounded-lg"
      ></div>
    </button>
  )
}

Button.propTypes = {
  element: PropTypes.node.isRequired,
}

export default Button