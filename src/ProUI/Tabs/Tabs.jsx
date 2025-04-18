import { Tab, Tabs } from "@heroui/react";

export function ProTab(props){
  const {tabs, children}= props;
  return <Tabs aria-label="Dynamic tabs" items={tabs}>
  {(item) => (
    <Tab key={item.id} title={item.label}>
     {typeof children === "function" ? children(item) : children}
    </Tab>
  )}
</Tabs>
}