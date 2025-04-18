'use client'
import { editorData } from '@/atoms/editorDataAtom'
import { userTemplateData } from '@/atoms/templateDataAtom'
import { templateData } from '@/data/templateData'
import ActionButton from '@/ProUI/ActionButton/ActionButton'
import { Sheet, SheetBody, SheetFooter } from '@/ProUI/Sheet/Sheet'
import { useState } from 'react'
import { useRecoilState } from 'recoil'
import { useEditor } from '../Editor/useEditor'
import TemplateCard from '../TemplateCard/TemplateCard'


const TemplateSelectSheet = (props) => {
  const { isOpen, handleClose} = props;
  const [clickedTemplate, setClickedTemplate] = useState(null);
  const [selectedTemplate, setSelectedTemplate] = useRecoilState(userTemplateData);
  const [formData, setFormData] = useRecoilState(editorData);
  const {setThemeColors} = useEditor()
  
  
  const handleClickTemplate=(template)=>{
    setClickedTemplate(template)
  }
  const handleChangeTemplate = async () => {
    setSelectedTemplate(clickedTemplate)
    handleClose();
    setFormData({...formData, template:clickedTemplate?.template_name, template_content_color: '#000000'})
    setThemeColors([])
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  return <Sheet isOpen={isOpen} placement="bottom" onClose={handleClose} size='2xl'>
    <SheetBody>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] mx-auto py-10">
        {templateData?.filter((template) => template?.id !== selectedTemplate?.id).map((template, index) => (
          <TemplateCard
            key={index}
            template={template}
            isPro={template?.isPro}
            selection
            isSelected={clickedTemplate?.id === template.id}
            onSelect={() => handleClickTemplate(template)}
          />
        ))}
      </div>
      </SheetBody>
      <SheetFooter>
        <ActionButton color='primary' size='lg' onPress={handleChangeTemplate}>Select</ActionButton>
      </SheetFooter>
  </Sheet>
}

export default TemplateSelectSheet