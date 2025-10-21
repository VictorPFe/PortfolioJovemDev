import Image from "next/image"

interface CardProps{
  image: string;
  alt: string;
  message: string;
  onMouseEnter?: (message: string) => void;
  onMouseLeave?: () => void;
}

export function Card({ image, alt, onMouseEnter, onMouseLeave, message }: CardProps) {
  return(
    <div
      onMouseEnter={() => onMouseEnter?.(message ?? "")}
      onMouseLeave={onMouseLeave}
      className="bg-[#141C27] w-[90px] h-[90px] rounded-tl-lg rounded-br-lg p-5 flex justify-center items-center"
    >
      <Image src={image} alt={alt}/>
    </div>
  )
}
