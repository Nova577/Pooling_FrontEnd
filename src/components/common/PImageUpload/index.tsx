import { useState, forwardRef } from "react"
import imgUploadIcon from '@/assets/img_upload_icon.svg'
import { Image } from "@nextui-org/react"
import UploadCore from "../UploadCore"

interface Props {
  value?: File | null
  onChange?: (newValue: File) => void
}

const PImageUpload = forwardRef<HTMLInputElement, Props>(function PImageUpload (props, ref) {
  const { onChange, value } = props

  const [previewImgSrc, setPreviewImgSrc] = useState('')

  const onImageFileInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileInput = e.target;

    if (!fileInput.files) {
      return;
    }

    if (!fileInput.files || fileInput.files.length === 0) {
      return;
    }

    const file = fileInput.files[0];


    // const formData = new FormData();
    // formData.append("file", file);

    const reader = new FileReader()
    reader.onload = (e) => {
      setPreviewImgSrc(e.target!.result as string)
    }
    reader.readAsDataURL(file)

    onChange?.(file)
  };

  return (
    <UploadCore ref={ref} accept="image/*" value={value} onChange={onImageFileInputChange}>
      <div className="h-full w-full rounded-2xl bg-[#F6F1EE] cursor-pointer">
        {
          previewImgSrc
          ? (
            <Image className="aspect-video" src={previewImgSrc} alt="" />
          )
          : (
            <div className="h-full w-full flex flex-col items-center justify-center gap-unit-1">
              <img src={imgUploadIcon} alt="" />
      
              <span className="text-stone-400 text-[15px] font-normal font-playfair leading-tight">
                Add Relevant Picture
              </span>
            </div>
          )
        }
      </div>
    </UploadCore>
  )
})

export default PImageUpload
