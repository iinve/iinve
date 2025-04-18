



import { addToast, Select, SelectItem } from "@heroui/react";
import ActionButton from "ProUI/ActionButton/ActionButton";
import { ProInput } from "ProUI/Form/Form";
import ProIcon from "ProUI/Icons/icons";

const socialOptions = [
  { label: "LinkedIn", value: "FaLinkedinIn" },
  { label: "Instagram", value: "FaInstagram" },
  { label: "Facebook", value: "FaFacebookF" },
  { label: "X", value: "BsTwitterX" },
  { label: "Website", value: "BsBrowserChrome" },
];

export default function SocialLinksForm({ formData, setFormData }) {
  const selectedPlatforms = formData?.social_links?.map(link => link.platform) || [];

  const handleChange = (index, field, value) => {
    const updatedLinks = formData?.social_links?.map((link, i) =>
      i === index ? { ...link, [field]: value } : link
    );
    setFormData((prev) => ({
      ...prev,
      social_links: updatedLinks,
    }));
  };

  const addSocialLink = () => {
    if (formData?.social_links?.length >= 5) {
      // toast.warning("Oops! Can't add more than 5 links!");
      addToast({
        title: "Opps!",
        description: "Can't add more than 5 social accounts!",
        variant: 'flat',
        color: "warning",
        size: "md"
      })
      return;
    }
    setFormData((prev) => ({
      ...prev,
      social_links: [
        ...(prev.social_links || []), // Ensure existing links are retained
        { id: (prev.social_links?.length || 0) + 1, platform: "", url: "" }
      ],
    }));
  };

  const removeSocialLink = (index) => {
    const updatedLinks = formData?.social_links?.filter((_, i) => i !== index);
    setFormData((prev) => ({
      ...prev,
      social_links: updatedLinks,
    }));
  };


  return (
    <div>
      <h2 className='text-lg mt-10 mb-6 font-semibold'>Social Links</h2>

      {formData?.social_links?.map((link, index) => (
        <div key={link.id} className="flex items-center gap-3 mb-2">
          <Select
            className="w-1/3"
            selectedKeys={[formData.social_links.find((item)=> item.platform  === link.platform)?.platform]} 
            onChange={(e) => handleChange(index, "platform", e.target.value)}
            placeholder="Select Platform"
          >
            {socialOptions
              .filter(option => !selectedPlatforms.includes(option.value) || option.value === link.platform)
              .map(option => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
          </Select>

          <ProInput
            className="flex-1"
            type="url"
            value={link.url} // ✅ Pre-fill existing URL
            onChange={(e) => handleChange(index, "url", e.target.value)}
            placeholder="Enter URL"
            variant="faded"
          />

          {index > 0 && (
            <ActionButton isIconOnly color="danger" variant="light" onClick={() => removeSocialLink(index)}>
              <ProIcon name={"FaRegTrashAlt"} size={18} color="red" />
            </ActionButton>
          )}
        </div>
      ))}

      <ActionButton onPress={addSocialLink} variant="bordered" startContent={<ProIcon name={'GoPlus'} size={18} color="#fff"/>}>
        Add Social Link
      </ActionButton>
    </div>
  );
}
