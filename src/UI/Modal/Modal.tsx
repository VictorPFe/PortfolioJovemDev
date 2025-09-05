import Image, { StaticImageData } from "next/image"

interface ModalProps{
  image: StaticImageData;
  alt: string;
  message: string;
  onMouseEnter?: (message: string) => void;
  onMouseLeave?: () => void;
  className?: string;
}

export function Modal({ image, alt, onMouseEnter, onMouseLeave, message, className }: ModalProps) {
  return(
    <div
      onMouseEnter={() => onMouseEnter?.(message ?? "")}
      onMouseLeave={onMouseLeave}
      className={className}
    >
      <Image src={image} alt={alt} priority/>
    </div>
  )
}
