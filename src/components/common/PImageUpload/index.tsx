import { FC, useRef, useState } from "react"
import imgUploadIcon from '@/assets/img_upload_icon.svg'

const PImageUpload: FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [previewImgSrc, setPreviewImgSrc] = useState('')

  const handleClick = () => {
    fileInputRef.current?.click()
  }

  const onImageFileInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileInput = e.target;

    if (!fileInput.files) {
      return;
    }

    if (!fileInput.files || fileInput.files.length === 0) {
      return;
    }

    const file = fileInput.files[0];

    const formData = new FormData();
    formData.append("file", file);
    
  };

  return (
    <div className="h-full w-full rounded-2xl bg-[#F6F1EE] cursor-pointer" onClick={handleClick}>
      {
        previewImgSrc
        ? (
          <div>
            asdf
          </div>
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

      <input ref={fileInputRef} className="hidden" type="file" accept="image/*" onChange={onImageFileInputChange} />
    </div>
  )
}

export default PImageUpload
