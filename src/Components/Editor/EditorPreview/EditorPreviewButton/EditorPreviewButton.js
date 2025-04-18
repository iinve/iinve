import ProIcon from "ProUI/Icons/icons"


const EditorPreviewButton = ({showEditorPreview, handleEditorPreview}) => {
  return  <button className='fixed top-[150px] right-0 z-50 bg-[#485ddc] rounded-[30px_0_0_30px] text-white px-4 py-2 text-lg flex items-center' onClick={handleEditorPreview}><ProIcon name={showEditorPreview ? "PiDeviceMobileSlashBold" : 'TbDeviceMobileHeart'} color="#fff" size={20} /> <span className="ml-2 text-lg"> {showEditorPreview ? "Hide" : "Show"} Preview</span></button>
}

export default EditorPreviewButton