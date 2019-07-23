function faceSettings(props) {
  return (
    <Page>
      <Section
        title={
          <Text bold align="center">
            Background Color
          </Text>
        }
      >
        <ColorSelect
          settingsKey="background"
          colors={[
            { color: "#000000" },
            { color: "#212121" },
            { color: "#2C3E50" },
            { color: "#34495E" },
            { color: "#093145" },
            { color: "#0C374D" },
            { color: "#0D3D56" },
            { color: "#107896" },
            { color: "#1287A8" },
            { color: "#1496BB" },
            { color: "#5F436D" },
            { color: "#603F83" },
            { color: "#8E44AD" },
            { color: "#9B59B6" },
            { color: "#C66C98" },
            { color: "#E88EBA" }
          ]}
        />
      </Section>
      <Section
        title={
          <Text bold align="center">
            Show or Hide Elements
          </Text>
        }
      >
        <Toggle settingsKey="hideBattery" label="Hide Battery" />
        <Toggle settingsKey="hideDate" label="Hide Date" />
      </Section>
    </Page>
  );
}

registerSettingsPage(faceSettings);
