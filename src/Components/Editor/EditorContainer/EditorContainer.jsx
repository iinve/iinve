'use client'





import ProAlert from 'ProUI/Alert/Alert';
import EditorLoader from '../EditorLoader/EditorLoader';
import { useEditor } from '../useEditor';
import Style from './EditorContainer.module.scss';
import { EDITOR_COMPONENT_LIST } from './EditorContainerFeatureList';
import { Progress } from '@heroui/react';
import { useSession } from 'next-auth/react';
import ActionButton from 'ProUI/ActionButton/ActionButton';
import ProIcon from 'ProUI/Icons/icons';
import PaymentStatusSheet from 'Components/PaymentSuccess/PaymentSuccess';
// import ConnectionDataForm from '../ConnectionDataFrom/ConnectionDataForm';


const EditorContainer = () => {
  const { data: userSession } = useSession()
  const {
    // avatar,
    loading,
    // userURL,
    formData,
    // userBanner,
    themeColors,
    // isProcessing,
    videosVisible,
    welcomeMessage,
    sessionStatus,
    enableGallery,
    isPaymentFailed,
    sheetsVisibility,
    // isPaymentSuccess,
    selectedTemplate,
    savedLastUserData,
    selectedThemeColor,
    selectedContentColor,
    selectedCollaboration,
    // setAvatar,
    setFormData,
    handleChange,
    // handlePayment,
    // setUserBanner,
    handleSubmit,
    handleAddLink,
    handleVideoLink,
    setIsPaymentFailed,
    handleRemoveLink,
    setWelcomeMessage,
    handleSaveChanges,
    handleAvatarUpload,
    handleEnableGallery,
    toggleSheetVisibility,
    handleRemoveVideoLink,
    handleEnableVideoLinks,
    handleChooseThemeColor,
    handleRemoveUploadedImage,
    handleCollaborationButtonChange,
  } = useEditor();  
  return (
    <form onSubmit={handleSubmit} className={`${Style.form_container}`}>
      {sessionStatus !== 'authenticated' || selectedTemplate === null ? <EditorLoader /> : <>
        <div className='mb-8'>
          <h2 className='text-center text-2xl'>{userSession?.user?.name}&apos;s Viiew {selectedTemplate?.name}</h2>
        </div>
        {welcomeMessage && <div className='pb-8 pt-2'>
          <ProAlert
            color={welcomeMessage?.type}
            title={welcomeMessage?.title}
            description={welcomeMessage?.description}
            variant="faded"
            isClosable
            endContent={welcomeMessage?.type === 'warning' &&
              <ActionButton color={welcomeMessage?.type} size="sm" variant="flat">
                Upgrade Now
              </ActionButton>
            }
            onClose={() => setWelcomeMessage(null)}
          />
        </div>}
        {selectedTemplate?.features?.map((feature) =>
          EDITOR_COMPONENT_LIST({
            featureName: feature,
            formData,
            themeColors,
            enableGallery,
            videosVisible,
            selectedThemeColor,
            selectedContentColor,
            selectedCollaboration,
            setFormData,
            handleChange,
            handleAddLink,
            handleVideoLink,
            handleRemoveLink,
            handleAvatarUpload,
            handleEnableGallery,
            handleRemoveVideoLink,
            handleChooseThemeColor,
            handleEnableVideoLinks,
            handleRemoveUploadedImage,
            handleCollaborationButtonChange,
          })
        )}
        {/* Submit Button */}
        <div className='mt-14 border-t border-[#333] w-full flex justify-center p-8'>
          {loading.progress && loading.progress < 100 ?
            <>
              <div className={Style.loader}>
                <Progress
                  classNames={{
                    base: "max-w-md",
                    track: "drop-shadow-md border border-default",
                    indicator: "bg-gradient-to-r from-[#000] to-[#485ddc]",
                    label: "tracking-wider font-medium text-default-600",
                    value: "text-foreground/60",
                  }}
                  label={`Generating ${userSession?.user?.name}'s viiew...`}
                  radius="md"
                  showValueLabel={true}
                  size="md"
                  value={loading.progress}

                />
              </div>

            </>
            : <>
              <ActionButton variant="flat" type="submit" size='lg' className='mr-4' onPress={() => toggleSheetVisibility(SHEETS.HELP, true)}>
                <ProIcon name='TbProgressHelp' size={18} color='#fff' /> Get Help
              </ActionButton>
              <ActionButton color="primary" variant="shadow" type="submit" size='lg' onPress={handleSaveChanges} isLoading={loading?.saveChanges}>
                <ProIcon name={selectedTemplate?.isPro ? 'LuCrown' : 'MdOutlinePublishedWithChanges'} size={18} color={selectedTemplate?.isPro ? '#eebc1d' : '#fff'} />  Save your changes
              </ActionButton>
            </>}
        </div>
        {/* Payment status Sheet */}
        <PaymentStatusSheet
          isSuccess={sheetsVisibility?.[SHEETS.PAYMENT_SUCCESS]}
          closeSheet={() => {
            toggleSheetVisibility(SHEETS.PAYMENT_SUCCESS, false)
            setIsPaymentFailed(false)
          }}
          isPaymentFailed={isPaymentFailed}
          savedLastUserData={savedLastUserData}
        />
      </>}
    </form>
  );
};

export default EditorContainer;
