import svgPaths from "./svg-gfmyhqpr46";

function Wrapper({ children }: React.PropsWithChildren<{}>) {
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

export default function Footer() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center px-0 py-[70px] relative size-full" data-name="Footer / 2 /">
      <div className="content-stretch flex flex-col gap-[60px] items-start relative shrink-0 w-[1240px]" data-name="Content">
        <div className="content-stretch flex gap-[128px] h-[248px] items-start relative shrink-0 w-full" data-name="Content">
          <div className="basis-0 content-stretch flex gap-[40px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Links">
            <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="Column">
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
            </div>
            {[...Array(3).keys()].map((_, i) => (
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
          </div>
          <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[500px]" data-name="Newslatter">
            <div className="content-stretch flex flex-col gap-[16px] items-start leading-[24px] relative shrink-0 text-[16px] text-black w-full">
              <p className="font-['Lexend:Medium',sans-serif] font-medium relative shrink-0 w-full">Subscribe</p>
              <p className="font-['Lexend:Regular',sans-serif] font-normal relative shrink-0 w-full">Join our newsletter to stay up to date on features and releases.</p>
            </div>
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
        </div>
        <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Credits">
          <div className="bg-black h-px relative shrink-0 w-full" data-name="Divider">
            <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
          </div>
          <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Row">
            <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Credits">
              <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Credits">
                <p className="font-['Lexend:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[12px] text-black text-nowrap">© 2024 LightSpeed. All rights reserved.</p>
              </div>
              <div className="content-stretch flex font-['Lexend:Medium',sans-serif] font-medium gap-[20px] items-start leading-[1.5] relative shrink-0 text-[12px] text-black text-nowrap underline" data-name="Footer Links">
                <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid relative shrink-0">Privacy Policy</p>
                <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid relative shrink-0">Terms of Service</p>
                <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid relative shrink-0">Cookies Settings</p>
              </div>
            </div>
            <div className="content-stretch flex gap-[20px] items-start relative shrink-0" data-name="Social Links">
              <Wrapper>
                <g id="Icon/Social/facebook">
                  <rect fill="var(--fill-0, #090909)" height="32" rx="16" width="32" />
                  <path d={svgPaths.p179a2400} fill="var(--fill-0, white)" id="Vector" />
                </g>
              </Wrapper>
              <Wrapper>
                <g id="Icon/Social/instagram">
                  <rect fill="var(--fill-0, #090909)" height="32" rx="16" width="32" />
                  <path d={svgPaths.p644fe7e} fill="var(--fill-0, white)" id="Vector" />
                </g>
              </Wrapper>
              <Wrapper>
                <g id="Icon/Social/x/twitter">
                  <rect fill="var(--fill-0, #090909)" height="32" rx="16" width="32" />
                  <path d={svgPaths.p1b1df500} fill="var(--fill-0, white)" id="Vector" />
                </g>
              </Wrapper>
              <Wrapper>
                <g id="Icon/Social/linkedin">
                  <rect fill="var(--fill-0, #090909)" height="32" rx="16" width="32" />
                  <path d={svgPaths.p2fa54000} fill="var(--fill-0, white)" id="Vector" />
                </g>
              </Wrapper>
              <Wrapper>
                <g id="Icon/Social/youtube">
                  <rect fill="var(--fill-0, #090909)" height="32" rx="16" width="32" />
                  <path d={svgPaths.p36e71380} fill="var(--fill-0, white)" id="Vector" />
                </g>
              </Wrapper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}