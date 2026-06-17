import { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import tinycolor from "tinycolor2";
import {
  Avatar,
  RootElement,
  TopNavBar,
  Button,
  Card,
  Modal,
  ImageCard,
  Typography,
  Heading,
  Paragraph,
  Caption,
  HighlightText,
  Input,
  TextArea,
  Badge,
  Spinner,
  Tooltip,
  generateThemeColors,
  configureTheme,
  getThemeColors,
  // New components:
  Select,
  Checkbox,
  Radio,
  RadioGroup,
  Switch,
  Slider,
  FileUpload,
  Breadcrumbs,
  Pagination,
  Link,
  List,
  ListItem,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  ToastProvider,
  useToast,
  Banner,
  Accordion,
  AccordionItem,
  Grid,
  Col,
  Divider,
  Spacer,
  SettingsIcon,
  HomeIcon,
  UserIcon,
} from "$/main";
import useNavigation from "@/Utils/Constants/NavElements";

// --- Local Styled Showcase Components ---
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  padding: 12px;
  overflow-y: auto;
  box-sizing: border-box;
`;

const HeaderPanel = styled.div`
  background-color: ${(props) => getThemeColors(props).surfaceHigh};
  border: 1px solid ${(props) => getThemeColors(props).primaryHigh}40;
  border-radius: 16px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ThemeSelectorWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  background-color: ${(props) => getThemeColors(props).surfaceDefault};
  padding: 16px;
  border-radius: 12px;
  border: 1px solid ${(props) => getThemeColors(props).primaryHigh}20;
`;

const PresetColorButton = styled.button<{ $color: string; $isActive: boolean }>`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${({ $color }) => $color};
  border: 3px solid ${({ $isActive, ...props }) => ($isActive ? getThemeColors(props).primaryText : "transparent")};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.15);
  }
`;

const SwatchGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  gap: 12px;
  margin-top: 8px;
`;

const SwatchCard = styled.div`
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid ${(props) => getThemeColors(props).primaryHigh}30;
  background-color: ${(props) => getThemeColors(props).surfaceDefault};
  text-align: center;
  font-size: 11px;
`;

const SwatchColor = styled.div<{ $color: string }>`
  height: 60px;
  background-color: ${({ $color }) => $color};
  border-bottom: 1px solid ${(props) => getThemeColors(props).primaryHigh}20;
`;

const SwatchDetails = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  color: ${(props) => getThemeColors(props).primaryText};
  font-weight: 600;

  span {
    font-size: 10px;
    color: ${(props) => getThemeColors(props).secondaryTextHigh};
    font-weight: normal;
  }
`;

const ComponentBox = styled.div`
  background-color: ${(props) => getThemeColors(props).surfaceHigh};
  border: 1px solid ${(props) => getThemeColors(props).primaryHigh}30;
  border-radius: 16px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.02);
`;

const BoxHeader = styled.div`
  border-bottom: 1px solid ${(props) => getThemeColors(props).primaryHigh}20;
  padding-bottom: 10px;
  margin-bottom: 6px;
`;

const FlexRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
`;

const PRESET_COLORS = [
  { name: "Default (Olive)", hex: "#CCCB75" },
  { name: "Classic Blue", hex: "#1A73E8" },
  { name: "Emerald Green", hex: "#0F9D58" },
  { name: "Sunset Orange", hex: "#FF5722" },
  { name: "Rich Purple", hex: "#673AB7" },
  { name: "Crimson Rose", hex: "#E91E63" },
];

function SideNavBarContent() {
  const NavItems = useNavigation();
  const { toast } = useToast();
  const [isMobile, setisMobile] = useState(false);
  const [colorInput, setColorInput] = useState("#CCCB75");
  const [theme, setTheme] = useState(generateThemeColors("#CCCB75"));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [badges, setBadges] = useState(["React", "TypeScript", "Styled Components", "Vite"]);

  // New components interactive states
  const [selectedOpt, setSelectedOpt] = useState("react");
  const [selectedMulti, setSelectedMulti] = useState<string[]>(["react", "svelte"]);
  const [checkboxVal, setCheckboxVal] = useState(true);
  const [radioVal, setRadioVal] = useState("apple");
  const [switchVal, setSwitchVal] = useState(false);
  const [sliderVal, setSliderVal] = useState("45");
  const [currentPage, setCurrentPage] = useState(1);

  const selectOptions = [
    { value: "react", label: "React" },
    { value: "vue", label: "Vue" },
    { value: "angular", label: "Angular" },
    { value: "svelte", label: "Svelte" },
  ];

  const handleColorChange = (color: string) => {
    setColorInput(color);
    if (tinycolor(color).isValid()) {
      const updatedTheme = generateThemeColors(color);
      setTheme(updatedTheme);
      configureTheme(color);
    }
  };

  const handleResize = () => {
    setisMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const breadcrumbPaths = [
    { label: "Home", href: "#home" },
    { label: "Library", href: "#library" },
    { label: "Showcase", href: "#showcase" },
  ];

  return (
    <ThemeProvider theme={theme}>
      <RootElement $flexDirection={!isMobile ? "row" : "column"} $padding="12px">
        <TopNavBar
          topnavIcon={
            <Avatar
              label="Ranjith"
              $imageUrl="https://3.img-dpreview.com/files/p/TS600x450~sample_galleries/3002635523/4971879462.jpg"
            />
          }
          navbarHeaderText="Ranjith Neelipally"
          navBarHeaderDesc="Full Stack Developer"
          navItems={NavItems}
          $navLoaction={!isMobile ? "side" : ""}
        />
        <Container>
          {/* Header & Theme configuration */}
          <HeaderPanel>
            <div>
              <Heading level={2} gutterBottom>
                Design System Component Showcase
              </Heading>
              <Paragraph>
                This suite demonstrates our highly flexible color calculation engine. Provide a single primary color,
                and watch the entire suite adapt instantly with harmonious surface, border, background, and accessible contrast text colors.
              </Paragraph>
            </div>

            <ThemeSelectorWrapper id="mega">
              <div style={{ flex: 1, minWidth: "200px" }}>
                <Input
                  label="Primary Color Hex Code"
                  placeholder="#CCCB75"
                  value={colorInput}
                  onChange={(e) => handleColorChange(e.target.value)}
                  icon={
                    <div
                      style={{
                        width: "16px",
                        height: "16px",
                        borderRadius: "50%",
                        backgroundColor: tinycolor(colorInput).isValid() ? colorInput : "transparent",
                        border: "1px solid #aaa",
                      }}
                    />
                  }
                  error={!tinycolor(colorInput).isValid() ? "Please enter a valid Hex color code" : undefined}
                />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <span style={{ fontSize: "14px", fontWeight: 600, color: theme.primaryText }}>Presets</span>
                <FlexRow>
                  {PRESET_COLORS.map((pc) => (
                    <PresetColorButton
                      key={pc.hex}
                      $color={pc.hex}
                      $isActive={colorInput.toUpperCase() === pc.hex.toUpperCase()}
                      onClick={() => handleColorChange(pc.hex)}
                      title={pc.name}
                    />
                  ))}
                </FlexRow>
              </div>
            </ThemeSelectorWrapper>

            <div>
              <Heading level={4} gutterBottom>
                Generated Theme Colors
              </Heading>
              <SwatchGrid>
                <SwatchCard>
                  <SwatchColor $color={theme.primary} />
                  <SwatchDetails>
                    primary
                    <span>{theme.primary}</span>
                  </SwatchDetails>
                </SwatchCard>
                <SwatchCard>
                  <SwatchColor $color={theme.primaryHigh} />
                  <SwatchDetails>
                    primaryHigh
                    <span>{theme.primaryHigh}</span>
                  </SwatchDetails>
                </SwatchCard>
                <SwatchCard>
                  <SwatchColor $color={theme.primaryText} />
                  <SwatchDetails>
                    primaryText
                    <span>{theme.primaryText}</span>
                  </SwatchDetails>
                </SwatchCard>
                <SwatchCard>
                  <SwatchColor $color={theme.primaryContrastText} />
                  <SwatchDetails>
                    priContrastText
                    <span>{theme.primaryContrastText}</span>
                  </SwatchDetails>
                </SwatchCard>
                <SwatchCard>
                  <SwatchColor $color={theme.secondaryTextHigh} />
                  <SwatchDetails>
                    secTextHigh
                    <span>{theme.secondaryTextHigh}</span>
                  </SwatchDetails>
                </SwatchCard>
                <SwatchCard>
                  <SwatchColor $color={theme.surfaceDefault} />
                  <SwatchDetails>
                    surfDefault
                    <span>{theme.surfaceDefault}</span>
                  </SwatchDetails>
                </SwatchCard>
                <SwatchCard>
                  <SwatchColor $color={theme.surfaceHigh} />
                  <SwatchDetails>
                    surfHigh
                    <span>{theme.surfaceHigh}</span>
                  </SwatchDetails>
                </SwatchCard>
              </SwatchGrid>
            </div>
          </HeaderPanel>

          {/* Grid Layout System in Action */}
          <Grid columns={12} gap="24px">
            <Col span={{ sm: 12, md: 6 }}>
              {/* Typography */}
              <ComponentBox style={{ height: "100%" }}>
                <BoxHeader>
                  <Heading level={3}>Typography</Heading>
                </BoxHeader>
                <div>
                  <Heading level={1} gutterBottom>H1 Heading</Heading>
                  <Heading level={3} gutterBottom>H3 Subtitle</Heading>
                  <Paragraph gutterBottom>
                    This is a standard <HighlightText>highlighted</HighlightText> paragraph component pulling values from
                    the theme context.
                  </Paragraph>
                  <Caption>Caption note: standard desaturated description tags.</Caption>
                </div>
              </ComponentBox>
            </Col>

            <Col span={{ sm: 12, md: 6 }}>
              {/* Buttons & Badges */}
              <ComponentBox style={{ height: "100%" }}>
                <BoxHeader>
                  <Heading level={3}>Buttons & Badges</Heading>
                </BoxHeader>
                <FlexRow>
                  <Button>Filled Button</Button>
                  <Button $backgroundColor="transparent" $border={`1.5px solid ${theme.primary}`}>
                    Outline
                  </Button>
                  <Button disabled>Disabled</Button>
                </FlexRow>
                <FlexRow style={{ marginTop: "12px" }}>
                  {badges.map((b) => (
                    <Badge
                      key={b}
                      variant="subtle"
                      colorType="primary"
                      onClose={() => setBadges(badges.filter((badge) => badge !== b))}
                    >
                      {b}
                    </Badge>
                  ))}
                </FlexRow>
                <FlexRow>
                  <Badge variant="filled" colorType="success">Success</Badge>
                  <Badge variant="filled" colorType="warning">Warning</Badge>
                  <Badge variant="filled" colorType="danger">Danger</Badge>
                  <Badge variant="filled" colorType="info">Info</Badge>
                </FlexRow>
              </ComponentBox>
            </Col>

            <Col span={{ sm: 12, md: 6 }}>
              {/* Tooltips & Spinners */}
              <ComponentBox style={{ height: "100%" }}>
                <BoxHeader>
                  <Heading level={3}>Tooltips & Loaders</Heading>
                </BoxHeader>
                <FlexRow>
                  <Tooltip content="Tooltip on Top" position="top">
                    <Button>Hover Top</Button>
                  </Tooltip>
                  <Tooltip content="Tooltip on Right" position="right">
                    <Button>Hover Right</Button>
                  </Tooltip>
                  <Tooltip content="Tooltip on Left" position="left">
                    <Button>Hover Left</Button>
                  </Tooltip>
                  <Tooltip content="Tooltip on Bottom" position="bottom">
                    <Button>Hover Bottom</Button>
                  </Tooltip>
                </FlexRow>
                <FlexRow style={{ marginTop: "12px" }}>
                  <Spinner size="sm" />
                  <Spinner size="md" colorType="secondary" />
                  <Spinner size="lg" colorType="success" thickness={5} />
                </FlexRow>
              </ComponentBox>
            </Col>

            <Col span={{ sm: 12, md: 6 }}>
              {/* Inputs & Text Area */}
              <ComponentBox style={{ height: "100%" }}>
                <BoxHeader>
                  <Heading level={3}>Forms & Inputs</Heading>
                </BoxHeader>
                <Input label="Name Input" placeholder="John Doe" />
                <Input label="Form Error State" placeholder="Invalid details" error="This field is required" />
                <TextArea label="Message / Notes" placeholder="Write a nice comment here..." />
              </ComponentBox>
            </Col>

            <Col span={{ sm: 12, md: 6 }}>
              {/* Actions & Inputs Panel */}
              <ComponentBox style={{ height: "100%" }}>
                <BoxHeader>
                  <Heading level={3}>More Actions & Inputs</Heading>
                </BoxHeader>
                <Select
                  label="Select Framework"
                  options={selectOptions}
                  value={selectedOpt}
                  onChange={setSelectedOpt}
                />
                
                <Spacer y={12} />
                <Select
                  label="Select Frameworks (Multi-Select)"
                  options={selectOptions}
                  value={selectedMulti}
                  onChange={setSelectedMulti}
                  multiple
                />
                <Checkbox checked={checkboxVal} onChange={(e) => setCheckboxVal(e.target.checked)}>
                  Accept conditions
                </Checkbox>

                <Spacer y={12} />
                <Heading level={5}>Choose Option</Heading>
                <RadioGroup name="choices" value={radioVal} onChange={setRadioVal} direction="row">
                  <Radio value="apple">Apple</Radio>
                  <Radio value="banana">Banana</Radio>
                  <Radio value="orange">Orange</Radio>
                </RadioGroup>

                <Spacer y={12} />
                <Switch checked={switchVal} onChange={(e) => setSwitchVal(e.target.checked)}>
                  Enable Dark/Dynamic mode
                </Switch>

                <Spacer y={12} />
                <Slider
                  label="Adjust Volume"
                  value={sliderVal}
                  min={0}
                  max={100}
                  onChange={(e) => setSliderVal(e.target.value)}
                />
              </ComponentBox>
            </Col>

            <Col span={{ sm: 12, md: 6 }}>
              {/* File Upload Panel */}
              <ComponentBox style={{ height: "100%" }}>
                <BoxHeader>
                  <Heading level={3}>File Uploader</Heading>
                </BoxHeader>
                <FileUpload
                  label="Attachments"
                  multiple={true}
                  accept="image/*,application/pdf"
                  onChange={(files) => console.log("Uploaded files:", files)}
                />
              </ComponentBox>
            </Col>

            <Col span={{ sm: 12, md: 6 }}>
              {/* Navigation Components */}
              <ComponentBox style={{ height: "100%" }}>
                <BoxHeader>
                  <Heading level={3}>Navigation Suite</Heading>
                </BoxHeader>
                
                <Heading level={5}>Breadcrumbs</Heading>
                <Breadcrumbs items={breadcrumbPaths} />

                <Divider margin="16px 0" />

                <Heading level={5}>Pagination</Heading>
                <Pagination
                  currentPage={currentPage}
                  totalPages={10}
                  onPageChange={setCurrentPage}
                />

                <Divider margin="16px 0" />

                <Heading level={5}>Hyperlinks</Heading>
                <FlexRow>
                  <Link href="#internal">Normal Link</Link>
                  <Link href="https://google.com" external>
                    External Site
                  </Link>
                </FlexRow>
              </ComponentBox>
            </Col>

            <Col span={{ sm: 12, md: 6 }}>
              {/* Lists and Data Display */}
              <ComponentBox style={{ height: "100%" }}>
                <BoxHeader>
                  <Heading level={3}>Data Display</Heading>
                </BoxHeader>

                <Heading level={5}>Themed Lists</Heading>
                <List>
                  <ListItem icon={<HomeIcon size={16} color={theme.primary} />}>
                    Primary Dashboard Node
                  </ListItem>
                  <ListItem icon={<SettingsIcon size={16} color={theme.primary} />}>
                    Control Panel Settings
                  </ListItem>
                  <ListItem icon={<UserIcon size={16} color={theme.primary} />}>
                    Client Profile Node
                  </ListItem>
                </List>

                <Divider margin="16px 0" />

                <Heading level={5}>Zebra striped Tables</Heading>
                <Table responsive>
                  <Thead>
                    <Tr>
                      <Th>Component</Th>
                      <Th>Category</Th>
                      <Th>Status</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr striped>
                      <Td>Select</Td>
                      <Td>Inputs</Td>
                      <Td><Badge variant="filled" colorType="success">Done</Badge></Td>
                    </Tr>
                    <Tr>
                      <Td>Toast</Td>
                      <Td>Feedback</Td>
                      <Td><Badge variant="filled" colorType="success">Done</Badge></Td>
                    </Tr>
                    <Tr striped>
                      <Td>Grid</Td>
                      <Td>Layout</Td>
                      <Td><Badge variant="filled" colorType="success">Done</Badge></Td>
                    </Tr>
                  </Tbody>
                </Table>
              </ComponentBox>
            </Col>

            <Col span={12}>
              {/* Feedback and Overlays */}
              <ComponentBox>
                <BoxHeader>
                  <Heading level={3}>Feedback & Accordions</Heading>
                </BoxHeader>

                <Heading level={5}>Toast Notifications Trigger</Heading>
                <FlexRow>
                  <Button onClick={() => toast.success("Process finished successfully!", "Action Complete")}>
                    Trigger Success
                  </Button>
                  <Button onClick={() => toast.info("System update is scheduled for tonight.", "System Announcement")}>
                    Trigger Info
                  </Button>
                  <Button onClick={() => toast.warning("Session will expire in 5 minutes.", "Security Alert")}>
                    Trigger Warning
                  </Button>
                  <Button onClick={() => toast.error("Unable to connect to database.", "Network Error")}>
                    Trigger Error
                  </Button>
                </FlexRow>

                <Divider margin="16px 0" />

                <Heading level={5}>Announcement Banners</Heading>
                <Banner variant="success" title="Deployment Notice" closable>
                  Web application has been successfully updated to version 2.4.0.
                </Banner>
                <Spacer y={8} />
                <Banner variant="danger" title="System Outage">
                  Critical failure detected in the East Coast API nodes. Teams are investigating.
                </Banner>

                <Divider margin="16px 0" />

                <Heading level={5}>Accordion Expanders</Heading>
                <Accordion allowMultiple={false}>
                  <AccordionItem title="Can I customize theme colors?">
                    Yes! Simply enter a hex color in the header input panel, and TinyColor calculations will regenerate all contrast and theme colors dynamically.
                  </AccordionItem>
                  <AccordionItem title="Are these components accessible?">
                    We aim to provide solid support for accessible forms, screen reader helper labels, and keyboard events out of the box.
                  </AccordionItem>
                </Accordion>
              </ComponentBox>
            </Col>

            <Col span={12}>
              {/* Modal & Cards */}
              <ComponentBox>
                <BoxHeader>
                  <Heading level={3}>Modals & Custom Cards</Heading>
                </BoxHeader>
                <FlexRow style={{ marginBottom: "16px" }}>
                  <Button onClick={() => setIsModalOpen(true)}>Open Showcase Modal</Button>
                  <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Interactive Modal Dialog">
                    <Typography variant="body" gutterBottom>
                      This is our custom blur-backdrop glassmorphic Modal dialog container!
                    </Typography>
                    <Paragraph>
                      It manages scroll locks, closes on overlay clicks, and is fully styled with theme variables.
                    </Paragraph>
                    <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "24px" }}>
                      <Button onClick={() => setIsModalOpen(false)}>Close Modal</Button>
                    </div>
                  </Modal>
                </FlexRow>

                <Grid columns={2} gap="20px">
                  <Col span={{ sm: 2, md: 1 }}>
                    <Card
                      title="Portfolio Project Card"
                      description="A premium dynamic project details preview card styled with theme properties."
                      previewImage="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600"
                      buttonText="Learn More"
                    />
                  </Col>

                  <Col span={{ sm: 2, md: 1 }}>
                    <ImageCard
                      title="Hover Aspect Card"
                      subtitle="Modern UI Component"
                      description="Includes scaling zoom effects and depth shadow lifting transitions on hover state."
                      imageUrl="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=600"
                      onClick={() => alert("Card clicked!")}
                    />
                  </Col>
                </Grid>
              </ComponentBox>
            </Col>
          </Grid>
        </Container>
      </RootElement>
    </ThemeProvider>
  );
}

export function SideNavBar() {
  return (
    <ToastProvider>
      <SideNavBarContent />
    </ToastProvider>
  );
}

export default SideNavBar;
