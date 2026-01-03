import svgPaths from "./svg-5c4uz5iisb";

function ComponentsPlacholdersImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#f2f2f2] h-[300px] relative rounded-[4px] shrink-0 w-full">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">{children}</div>
      <div aria-hidden="true" className="absolute border border-[#757575] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function BreadcrumbsPage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Lexend:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#090909] text-[12px] text-nowrap underline">{children}</p>
    </div>
  );
}

function Wrapper3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#1e6aff] text-[12px] text-nowrap">{children}</p>
    </div>
  );
}

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        {children}
      </svg>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[32px]">
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(9, 9, 9, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          {children}
        </svg>
      </div>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper2>
      <g id="heroicons-outline/tag">
        <g id="Vector">{children}</g>
      </g>
    </Wrapper2>
  );
}
type LinkTextProps = {
  text: string;
};

function LinkText({ text }: LinkTextProps) {
  return (
    <div className="content-stretch flex items-start px-0 py-[4px] relative shrink-0 w-full">
      <p className="basis-0 font-['Lexend:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px relative shrink-0 text-[12px] text-black">{text}</p>
    </div>
  );
}

function BlogCardBody() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-start justify-center pb-[10px] pt-[20px] px-[10px] relative w-full">
          <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
            <p className="font-['Lexend:Medium',sans-serif] font-medium leading-[20px] min-w-full relative shrink-0 text-[#090909] text-[16px] tracking-[-0.02px] uppercase w-[min-content]">{"CATEGORY"}</p>
            <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
              <p className="font-['Lexend:Medium',sans-serif] font-medium leading-[30px] relative shrink-0 text-[#090909] text-[24px] tracking-[-0.02px] w-full">{"This is the Blog Card Title"}</p>
              <div className="content-start flex flex-wrap gap-[4px] items-start relative shrink-0 w-full">
                <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[12px] text-black text-nowrap">{"By"}</p>
                <Wrapper3>{`Author `}</Wrapper3>
                <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[12px] text-black text-nowrap">{`on `}</p>
                <Wrapper3>{"Date"}</Wrapper3>
              </div>
            </div>
            <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[24px] min-w-full relative shrink-0 text-[#090909] text-[16px] w-[min-content]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nulla libero, tempor eu mattis in, dapibus eget augue... `}</p>
            <div className="content-stretch flex items-center justify-center relative shrink-0">
              <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#1e6aff] text-[16px] text-nowrap">{"READ MORE"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
type BadgesText1Props = {
  text: string;
};

function BadgesText1({ text }: BadgesText1Props) {
  return (
    <div className="bg-[#0047d0] content-stretch flex gap-[4px] items-center justify-end px-[8px] py-[4px] relative rounded-[4px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#757575] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Wrapper>
        <path d={svgPaths.p22de9f00} stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        <path d="M5 5H5.00625V5.00625H5V5Z" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      </Wrapper>
      <p className="font-['Lexend:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[12px] text-nowrap text-right text-white">{text}</p>
    </div>
  );
}
type BadgesTextProps = {
  text: string;
};

function BadgesText({ text }: BadgesTextProps) {
  return (
    <div className="bg-white content-stretch flex gap-[4px] items-center justify-end px-[8px] py-[4px] relative rounded-[4px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#757575] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Wrapper>
        <path d={svgPaths.p22de9f00} stroke="var(--stroke-0, #0047D0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        <path d="M5 5H5.00625V5.00625H5V5Z" stroke="var(--stroke-0, #0047D0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      </Wrapper>
      <p className="font-['Lexend:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#0047d0] text-[12px] text-nowrap text-right">{text}</p>
    </div>
  );
}

function LightspeedPlaceholderIcon() {
  return (
    <div className="absolute h-[98.264px] left-[calc(50%+0.04px)] top-[calc(50%+0.15px)] translate-x-[-50%] translate-y-[-50%] w-[80px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 98.2639">
        <g id="lightspeed-placeholder-icon">
          <path clipRule="evenodd" d={svgPaths.pffccc80} fill="var(--fill-0, #E4E4E4)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p3c81e700} fill="var(--fill-0, #C6C6C6)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function NavItem() {
  return (
    <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative shrink-0" data-name="Nav Item">
      <p className="font-['Lexend:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#090909] text-[16px] text-nowrap">Nav Item</p>
    </div>
  );
}

function NavItem1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center px-[12px] py-[8px] relative shrink-0" data-name="Nav Item">
      <p className="font-['Lexend:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#090909] text-[16px] text-nowrap">Nav Item</p>
      <Wrapper2>
        <g id="heroicons-outline/chevron-down">
          <path d={svgPaths.p2894d000} id="Vector 335" stroke="var(--stroke-0, #090909)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </Wrapper2>
    </div>
  );
}

function IconSlash() {
  return (
    <div className="h-[16px] relative shrink-0 w-[8px]" data-name="Icon/Slash">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 16">
        <g id="Icon/Slash">
          <path d={svgPaths.p3b848c70} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

export default function AllArchives() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center px-0 py-[20px] relative size-full" data-name="All Archives">
      <div className="bg-white content-stretch flex items-center justify-between px-0 py-[10px] relative shrink-0 w-[1440px]" data-name="Header/True/Centered">
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-[1240px]" data-name="Container">
          <div className="h-[66.772px] overflow-clip relative shrink-0 w-[160px]" data-name="Site Logo">
            <div className="absolute inset-[0_1.13%_0_0]" data-name="Logo Frame">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 158.187 66.7717">
                <g id="Logo Frame">
                  <path d={svgPaths.p5af0f00} fill="var(--fill-0, black)" id="Vector" />
                  <path d={svgPaths.p37570e00} fill="var(--fill-0, black)" id="Vector_2" />
                  <path d={svgPaths.p2ae1f200} fill="var(--fill-0, black)" id="Vector_3" />
                  <path d={svgPaths.pee62180} fill="var(--fill-0, black)" id="Vector_4" />
                  <path d={svgPaths.p23cda980} fill="var(--fill-0, black)" id="Vector_5" />
                  <path d={svgPaths.pee3e300} fill="var(--fill-0, black)" id="Vector_6" />
                  <path d={svgPaths.p3f34f080} fill="var(--fill-0, black)" id="Vector_7" />
                  <path d={svgPaths.p1dd04200} fill="var(--fill-0, black)" id="Vector_8" />
                  <path d={svgPaths.p1debb00} fill="var(--fill-0, black)" id="Vector_9" />
                  <path clipRule="evenodd" d={svgPaths.p218f9c00} fill="var(--fill-0, #FF3131)" fillRule="evenodd" id="Vector_10" />
                  <path clipRule="evenodd" d={svgPaths.p2b3ce300} fill="var(--fill-0, #CC3F23)" fillRule="evenodd" id="Vector_11" />
                </g>
              </svg>
            </div>
          </div>
          <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0" data-name="Content">
            <div className="bg-white content-stretch flex gap-[10px] items-center justify-center pl-[200px] pr-0 py-0 relative shrink-0" data-name="Nav">
              <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative shrink-0" data-name="Nav Item">
                <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Lexend:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[#1e6aff] text-[16px] text-nowrap underline">Nav Item</p>
              </div>
              <NavItem />
              <NavItem1 />
              <NavItem />
              <NavItem1 />
            </div>
            <div className="content-stretch flex gap-[10px] items-center justify-end relative shrink-0" data-name="Content">
              <div className="content-stretch flex items-start p-[6px] relative shrink-0" data-name="Search Button">
                <Wrapper2>
                  <g id="heroicons-outline/magnifying-glass">
                    <path d={svgPaths.p2594b100} id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </g>
                </Wrapper2>
              </div>
              <div className="relative shrink-0 size-[32px]" data-name="heroicons-outline/bars-3">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                  <g id="heroicons-outline/bars-3">
                    <path d="M5 9H27M5 16H27M5 23H27" id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[50px] items-start justify-center relative shrink-0" data-name="Content">
        <div className="content-stretch flex flex-col gap-[50px] items-start relative shrink-0 w-full" data-name="Template Header">
          <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0 w-full" data-name="Components/Navigation/Breadcrumbs">
            <BreadcrumbsPage>{`Home `}</BreadcrumbsPage>
            <IconSlash />
            <BreadcrumbsPage>Page 1</BreadcrumbsPage>
            <IconSlash />
            <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Breadcrumbs Page">
              <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Lexend:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#1e6aff] text-[12px] text-nowrap underline">Current Page</p>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 text-black w-full" data-name="Content">
            <p className="font-['Lexend:Medium',sans-serif] font-medium leading-[75px] relative shrink-0 text-[60px] tracking-[-0.02px] w-full">Archive Title</p>
            <p className="font-['Manrope:Bold',sans-serif] font-bold leading-[27px] relative shrink-0 text-[20px] tracking-[0.2px] w-full">Archive description</p>
          </div>
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Results & Sorting">
            <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black text-nowrap">{`Showing 1 - 10 of 42 results `}</p>
            <div className="bg-white content-stretch flex gap-[10px] items-center justify-end overflow-clip p-[10px] relative shrink-0 w-[103px]" data-name="Sorting">
              <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black text-nowrap">Sort</p>
              <div className="relative shrink-0 size-[24px]" data-name="heroicons-outline/chevron-down">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <g id="heroicons-outline/chevron-down">
                    <path d="M19.5 8.25L12 15.75L4.5 8.25" id="Vector 335" stroke="var(--stroke-0, #090909)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[50px] items-start relative shrink-0 w-[1240px]" data-name="Post Collection">
          <div className="content-stretch flex gap-[50px] items-start relative shrink-0 w-full" data-name="Row">
            {[...Array(3).keys()].map((_, i) => (
              <div className="basis-0 bg-white content-stretch flex flex-col grow items-start min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Components/Blog/Blog Card">
                <div className="content-stretch flex flex-col gap-[10px] items-end relative rounded-[4px] shrink-0 w-full" data-name="Blog Card Image">
                  <ComponentsPlacholdersImage>
                    <div className="h-[98.31px] overflow-clip relative shrink-0 w-[80px]" data-name="Placeholder Icon">
                      <LightspeedPlaceholderIcon />
                    </div>
                  </ComponentsPlacholdersImage>
                  <div className="absolute content-stretch flex gap-[10px] items-start justify-end right-[10px] top-[10px]" data-name="Container-tags">
                    <BadgesText text="White Tag" />
                    <BadgesText1 text="Blue Tag" />
                  </div>
                </div>
                <BlogCardBody />
              </div>
            ))}
          </div>
          {[...Array(2).keys()].map((_, i) => (
            <div className="content-stretch flex gap-[40px] items-start relative shrink-0 w-full" data-name="Row">
              {[...Array(3).keys()].map((_, i) => (
                <div className="basis-0 bg-white content-stretch flex flex-col grow items-start min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Components/Blog/Blog Card">
                  <div className="content-stretch flex flex-col gap-[10px] items-end relative rounded-[4px] shrink-0 w-full" data-name="Blog Card Image">
                    <ComponentsPlacholdersImage>
                      <div className="h-[98.31px] overflow-clip relative shrink-0 w-[80px]" data-name="Placeholder Icon">
                        <LightspeedPlaceholderIcon />
                      </div>
                    </ComponentsPlacholdersImage>
                    <div className="absolute content-stretch flex gap-[10px] items-start justify-end right-[9.67px] top-[10px]" data-name="Container-tags">
                      <BadgesText text="White Tag" />
                      <BadgesText1 text="Blue Tag" />
                    </div>
                  </div>
                  <BlogCardBody />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white content-stretch flex flex-col items-center justify-center overflow-clip px-0 py-[70px] relative shrink-0 w-[1440px]" data-name="Footer / 1 /">
        <div className="content-stretch flex flex-col gap-[60px] items-start relative shrink-0 w-[1240px]" data-name="Content">
          <div className="content-stretch flex gap-[128px] items-start relative shrink-0 w-full" data-name="Content">
            <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[500px]" data-name="Newsletter">
              <div className="h-[50.079px] overflow-clip relative shrink-0 w-[120px]" data-name="Site Logo">
                <div className="absolute inset-[0_1.13%_0_0]" data-name="Logo Frame">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 118.64 50.0787">
                    <g id="Logo Frame">
                      <path d={svgPaths.p3d3cbc80} fill="var(--fill-0, black)" id="Vector" />
                      <path d={svgPaths.p2b66caf0} fill="var(--fill-0, black)" id="Vector_2" />
                      <path d={svgPaths.p1a944b00} fill="var(--fill-0, black)" id="Vector_3" />
                      <path d={svgPaths.p21c28100} fill="var(--fill-0, black)" id="Vector_4" />
                      <path d={svgPaths.p24789f00} fill="var(--fill-0, black)" id="Vector_5" />
                      <path d={svgPaths.p1a087080} fill="var(--fill-0, black)" id="Vector_6" />
                      <path d={svgPaths.p351225a0} fill="var(--fill-0, black)" id="Vector_7" />
                      <path d={svgPaths.p2deb1730} fill="var(--fill-0, black)" id="Vector_8" />
                      <path d={svgPaths.p159db080} fill="var(--fill-0, black)" id="Vector_9" />
                      <path clipRule="evenodd" d={svgPaths.p276b5200} fill="var(--fill-0, #FF3131)" fillRule="evenodd" id="Vector_10" />
                      <path clipRule="evenodd" d={svgPaths.p1caa0280} fill="var(--fill-0, #CC3F23)" fillRule="evenodd" id="Vector_11" />
                    </g>
                  </svg>
                </div>
              </div>
              <p className="font-['Lexend:Regular',sans-serif] font-normal leading-[24px] min-w-full relative shrink-0 text-[16px] text-black w-[min-content]">Join our newsletter to stay up to date on features and releases.</p>
              <div className="content-stretch flex flex-col gap-[16px] items-start pb-0 pt-[16px] px-0 relative shrink-0 w-full" data-name="Subscribe">
                <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Form">
                  <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Input Field">
                    <div aria-hidden="true" className="absolute border border-[#757575] border-solid inset-0 pointer-events-none rounded-[4px]" />
                    <div className="size-full">
                      <div className="content-stretch flex items-start p-[12px] relative w-full">
                        <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative self-stretch shrink-0" data-name="Input Contents">
                          <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
                            <p className="font-['Lexend:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#757575] text-[16px] text-nowrap">Enter your email</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#7be7ff] content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[8px] relative rounded-[4px] self-stretch shrink-0" data-name="Components/Button - Light">
                    <div className="flex flex-col font-['Lexend:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0e3278] text-[16px] text-center text-nowrap">
                      <p className="leading-[1.5]">Sign Up</p>
                    </div>
                  </div>
                </div>
                <p className="font-['Lexend:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#090909] text-[0px] text-[12px] w-full">
                  <span className="leading-[18px]">{`By subscribing you agree to with our `}</span>
                  <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Lexend:Medium',sans-serif] font-medium leading-[1.5] underline">{`Privacy Policy `}</span>
                  <span className="leading-[18px]">and provide consent to receive updates from our company.</span>
                </p>
              </div>
            </div>
            <div className="basis-0 content-stretch flex gap-[40px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Links">
              {[...Array(2).keys()].map((_, i) => (
                <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="Column">
                  <p className="font-['Lexend:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[16px] text-black w-full">Column One</p>
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Footer Links">
                    <LinkText text="Link One" />
                    <LinkText text="Link Two" />
                    <LinkText text="Link Three" />
                    <LinkText text="Link Four" />
                    <LinkText text="Link Five" />
                  </div>
                </div>
              ))}
              <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Column">
                <p className="font-['Lexend:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[16px] text-black w-full">Follow Us</p>
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Social Links">
                  <div className="content-stretch flex gap-[12px] items-center px-0 py-[8px] relative shrink-0 w-full" data-name="Link">
                    <Wrapper1>
                      <g id="Icon/Social/facebook">
                        <rect fill="var(--fill-0, #090909)" height="32" rx="16" width="32" />
                        <path d={svgPaths.p179a2400} fill="var(--fill-0, white)" id="Vector" />
                      </g>
                    </Wrapper1>
                    <p className="font-['Lexend:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black text-nowrap">Facebook</p>
                  </div>
                  <div className="content-stretch flex gap-[12px] items-center px-0 py-[8px] relative shrink-0 w-full" data-name="Link">
                    <Wrapper1>
                      <g id="Icon/Social/instagram">
                        <rect fill="var(--fill-0, #090909)" height="32" rx="16" width="32" />
                        <path d={svgPaths.p644fe7e} fill="var(--fill-0, white)" id="Vector" />
                      </g>
                    </Wrapper1>
                    <p className="font-['Lexend:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black text-nowrap">Instagram</p>
                  </div>
                  <div className="content-stretch flex gap-[12px] items-center px-0 py-[8px] relative shrink-0 w-full" data-name="Link">
                    <Wrapper1>
                      <g id="Icon/Social/x/twitter">
                        <rect fill="var(--fill-0, #090909)" height="32" rx="16" width="32" />
                        <path d={svgPaths.p1b1df500} fill="var(--fill-0, white)" id="Vector" />
                      </g>
                    </Wrapper1>
                    <p className="font-['Lexend:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black text-nowrap">X</p>
                  </div>
                  <div className="content-stretch flex gap-[12px] items-center px-0 py-[8px] relative shrink-0 w-full" data-name="Link">
                    <Wrapper1>
                      <g id="Icon/Social/linkedin">
                        <rect fill="var(--fill-0, #090909)" height="32" rx="16" width="32" />
                        <path d={svgPaths.p2fa54000} fill="var(--fill-0, white)" id="Vector" />
                      </g>
                    </Wrapper1>
                    <p className="font-['Lexend:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black text-nowrap">LinkedIn</p>
                  </div>
                  <div className="content-stretch flex gap-[12px] items-center px-0 py-[8px] relative shrink-0 w-full" data-name="Link">
                    <Wrapper1>
                      <g id="Icon/Social/youtube">
                        <rect fill="var(--fill-0, #090909)" height="32" rx="16" width="32" />
                        <path d={svgPaths.p36e71380} fill="var(--fill-0, white)" id="Vector" />
                      </g>
                    </Wrapper1>
                    <p className="font-['Lexend:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black text-nowrap">Youtube</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Credits">
            <div className="bg-black h-px relative shrink-0 w-full" data-name="Divider">
              <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
            </div>
            <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Row">
              <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Credits">
                <p className="font-['Lexend:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[12px] text-black text-nowrap">© 2024 LightSpeed. All rights reserved.</p>
              </div>
              <div className="content-stretch flex font-['Lexend:Medium',sans-serif] font-medium gap-[20px] items-start leading-[1.5] relative shrink-0 text-[12px] text-black text-nowrap underline" data-name="Footer Links">
                <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid relative shrink-0">Privacy Policy</p>
                <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid relative shrink-0">Terms of Service</p>
                <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid relative shrink-0">Cookies Settings</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}