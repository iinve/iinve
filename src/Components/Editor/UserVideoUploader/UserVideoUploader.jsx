import ActionButton from "ProUI/ActionButton/ActionButton";
import { ProSwitch, Section } from "ProUI/Common/Common";
import { ProInput } from "ProUI/Form/Form";
import ProIcon from "ProUI/Icons/icons";
import useWindowDimensions from "utils/useWindowDimensions";






const UserVideoUploader = ({ formData, setFormData, videosVisible, handleEnableVideoLinks, handleRemoveVideoLink, handleVideoLink }) => {
  const { width } = useWindowDimensions()
  return <>
    <div className='heading flex justify-between items-center mt-10 my-5'>
        <h2 className='md:text-lg font-semibold text-base'>Video Links <span className='opacity-50'>(Add your any video link)</span></h2>
        <ProSwitch onChange={handleEnableVideoLinks} isSelected={videosVisible}>
        {width > 560 ? (videosVisible ? 'Disable Videos' : 'Enable Videos') : ''}
      </ProSwitch>
      </div>
    {videosVisible &&
      <>
        {formData?.video_links?.map((link, index) => (
          <Section key={link.id} className="link-box my-4" onClose={() => handleRemoveVideoLink(link.id)}>

            <ProInput
              className="mb-2"
              type="url"
              placeholder="Link"
              variant="faded"
              color="default"
              value={link.link} // Ensure controlled input
              onChange={(e) => {
                const updatedLinks = [...formData.video_links];
                updatedLinks[index] = { ...updatedLinks[index], url: e.target.value };
                setFormData({ ...formData, video_links: updatedLinks });
              }}
            />
          </Section>
        ))}

        <div className='my-8 w-full flex justify-center'>
          <ActionButton variant="bordered" onClick={handleVideoLink}>
            <ProIcon name={'GoPlus'} size={18} color='#fff' /> Add new video link
          </ActionButton>
        </div>

      </>
    }
  </>
}

export default UserVideoUploader