import { ProTextEditor } from "@/ProUI/Form/Form"

const AboutInfo = ({formData, setFormData}) => {
  return <div className='mb-4 h-auto'>
  <div className='heading flex justify-between items-center mt-10 my-5'>
    <h2 className="md:text-lg font-semibold text-base">About</h2>
  </div>
  <ProTextEditor content={formData?.about} setContent={(content) => setFormData({ ...formData, about: content })} value={formData?.about} />
</div>
}

export default AboutInfo