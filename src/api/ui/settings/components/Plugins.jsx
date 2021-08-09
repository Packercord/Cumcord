import { React } from "commonModules";
const useState = React.useState;
import webpackModules from "webpackModules";

import PluginCard from "./PluginCard.jsx";
const FormTitle = webpackModules.findByDisplayName("FormTitle");
const FormSection = webpackModules.findByDisplayName("FormSection");
const Flex = webpackModules.findByDisplayName("Flex");
const TextInput = webpackModules.findByDisplayName("TextInput");
const Button = webpackModules.findByProps(
  "Sizes",
  "Colors",
  "Looks",
  "DropdownSizes"
);
const FormDivider = webpackModules.findByDisplayName("FormDivider");

export default () => {
  const [input, setInput] = useState("");
  const [plugins, setPlugins] = useState(Object.keys(window.cumcord.plugins.pluginCache));

  const updatePlugins = () => {
    setPlugins(Object.keys(window.cumcord.plugins.pluginCache));
  };

  return (
    <FormSection>
      <FormTitle tag="h1">Plugins</FormTitle>
      <Flex basis="auto" grow={1} shrink={1}>
        <TextInput
          className="cumcord-plugin-import"
          placeholder="https://example.com/plugin"
          type="text"
          value={input}
          onChange={e => setInput(e)}
        ></TextInput>
        <Button color={Button.Colors.BRAND} size={Button.Sizes.MEDIUM} onClick={
          () => {
            setInput("");
            window.cumcord.plugins.importPlugin(input).then(() => {
              updatePlugins();
            });
          }
        }>
          Add plugin
        </Button>
      </Flex>
      <FormDivider className="cumcord-plugin-divider" />
      { 
        plugins.map(
          plugin => {
            return <PluginCard updatePlugins={updatePlugins} pluginId={plugin}/>;
          }
        )
      }
    </FormSection>
  );
};
