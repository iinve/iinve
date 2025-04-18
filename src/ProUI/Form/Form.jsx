'use client'
import { Checkbox, CheckboxGroup, Form, Input, Radio, RadioGroup, Select, SelectItem, Textarea } from "@heroui/react"; // Ensure correct import
import AvatarIcon from "@rsuite/icons/legacy/Avatar";
import Image from "next/image";
import { useState } from "react";
// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Loader, Message, Uploader, useToaster } from "rsuite";
import 'rsuite/dist/rsuite-no-reset.min.css';
import Style from './Form.module.scss';
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });




export function ProForm(props) {
  const { className, validationBehavior, onSubmit, children } = props;
  return <Form
    className={className}
    validationBehavior={validationBehavior}
    onReset={() => { }}
    onSubmit={(e) => {
      e.preventDefault();
      let data = Object.fromEntries(new FormData(e.currentTarget));
      onSubmit(data);
    }}
  >{children}</Form>
}
export function ProInput(props) {
  const { type, placeholder, name, isRequired, errorMessage, label, labelPlacement, variant, color, ...rest } = props;

  return (
    <Input
      isRequired={isRequired || false}
      errorMessage={errorMessage}
      label={label}
      labelPlacement={labelPlacement}
      name={name}
      placeholder={placeholder}
      type={type}
      variant={variant}
      color={color}
      {...rest}
    />
  );
}

export function ProAvatarUploader(props) {
  const { onUpload, action, ...rest} = props
  const [uploading, setUploading] = useState(false);
  const [fileInfo, setFileInfo] = useState(null);
  const toaster = useToaster();

  const previewFile = (file, callback) => {
    const reader = new FileReader();
    reader.onloadend = () => callback(reader.result);
    reader.readAsDataURL(file);
  };

  return (
    <Uploader
      className={Style.AvatarUploader}
      fileListVisible={false}
      listType="picture"
      action={action}
      onUpload={(file) => {
        setUploading(true);
        previewFile(file.blobFile, (value) => {
          setFileInfo(value);
          onUpload(value)
        });
      }}
      onSuccess={() => {
        setUploading(false);
        toaster.push(<Message type="success">Uploaded successfully</Message>);
      }}
      onError={() => {
        setFileInfo(null);
        setUploading(false);
        toaster.push(<Message type="error">Upload failed</Message>);
      }}
      {...rest}
    >
      <button style={{ width: "100%", height: "100%", padding:'10px' }}>
        {uploading && <Loader backdrop center />}
        {fileInfo ? (
          <Image src={fileInfo} fill alt="Preview" />
        ) : (
          <div className={Style.AvatarUploader_thumb}>
            <AvatarIcon style={{ fontSize: 80 }} />
          </div>
        )}
      </button>
    </Uploader>
  );
}


export function ProUploader(props) {
  const { placeholder, savePreviews, multiple, action, ...rest } = props;
  const previewFile = (file, callback) => {
    const reader = new FileReader();
    reader.onloadend = () => callback(reader.result);
    reader.readAsDataURL(file);
  };
  return <Uploader action={action} multiple={multiple} draggable onUpload={(file) => {
    // setUploading(true);
    previewFile(file.blobFile, (value) => {
      savePreviews(value, file.blobFile);
    });
  }} {...rest}>
    <div style={{ height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent', borderRadius: "10px" }} className={Style.ProUploader}>
      <span>{placeholder}</span>
    </div>
  </Uploader>
}
export function ProTextArea(props) {
  const { placeholder, name, isRequired, label, labelPlacement, variant, color, ...rest } = props;
  return <Textarea label={label} placeholder={placeholder} name={name} isRequired={isRequired} labelPlacement={labelPlacement} variant={variant} color={color} {...rest} />
}

export function ProTextEditor({ content, setContent }) {
  return <ReactQuill value={content} onChange={setContent} theme="snow" className={Style.quill} />

}

export function ProCheckBox(props) {
  const { defaultSelected, children, ...rest } = props;
  return <Checkbox defaultSelected={defaultSelected} {...rest}>{children}</Checkbox>
}

export function ProCheckBoxGroup(props) {
  const { defaultValue, color, label, orientation, children, ...rest } = props;
  return <CheckboxGroup
    color={color}
    defaultValue={defaultValue}
    label={label}
    orientation={orientation}
    {...rest}
  >
    {children}
  </CheckboxGroup>
}


export function ProRadio(props) {
  const { children, ...rest } = props;
  return <Radio {...rest}>{children}</Radio>
}

export function ProRadioGroup(props) {
  const { children, ...rest } = props;
  return <RadioGroup {...rest}>{children}</RadioGroup>
}

export function ProSelect({ children, placeholder, className, value, onChange, ...rest }) {
  return (
    <Select
      className={className}
      selectedKeys={value ? new Set([value]) : new Set()} 
      onSelectionChange={(keys) => {
        const selectedValue = keys.values().next().value;
        onChange({ target: { value: selectedValue } });
      }}
      placeholder={placeholder}
      {...rest}
    >
      {children}
    </Select>
  );
}


export function ProOption({ children, value, ...rest }) {
  return (
    <SelectItem key={value} value={value} {...rest}> 
      {children}
    </SelectItem>
  );
}