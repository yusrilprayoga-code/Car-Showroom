"use client"

import { LoginButtonProps } from "@/types"
import Image from "next/image"

const LoginButton = ({ title, containerStyles, handleClick, btnType, textStyles, rightIcon}: LoginButtonProps) => {
  return (
    <button
        disabled={false}
        type={btnType || "button"}
        className={`custom-btn ${containerStyles}`}
        onClick={handleClick}
    >
        <span className={`flex-1 ${textStyles}`}>
            {title}
        </span>
        {rightIcon && (
            <div className="relative w-6 h-6">
                <Image src={rightIcon} alt="right arrow" fill className="object-contain" />
            </div>
        )}
    </button>
  )
}

export default LoginButton