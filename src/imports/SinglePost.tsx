import svgPaths from "./svg-vlldlbw4n2";
import clsx from "clsx";

function MetaChip({ children }: React.PropsWithChildren<{}>) {
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
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        {children}
      </svg>
    </div>
  );
}

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
type ComponentsBlogBlogCommentProps = {
  additionalClassNames?: string;
};

function ComponentsBlogBlogComment({ children, additionalClassNames = "" }: React.PropsWithChildren<ComponentsBlogBlogCommentProps>) {
  return (
    <div className={clsx("relative rounded-[8px] shrink-0 w-full", additionalClassNames)}>
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[20px] relative w-full">{children}</div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#757575] border-solid inset-0 pointer-events-none rounded-[8px]" />
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
type TextProps = {
  text: string;
  additionalClassNames?: string;
};

function Text({ text, additionalClassNames = "" }: TextProps) {
  return (
    <div className={clsx("content-stretch flex relative shrink-0", additionalClassNames)}>
      <p className="font-['Manrope:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#090909] text-[16px] text-nowrap">{text}</p>
    </div>
  );
}
type CommentsReplyTextProps = {
  text: string;
};

function CommentsReplyText({ text }: CommentsReplyTextProps) {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0">
      <p className="font-['Lexend:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#0047d0] text-[12px] text-nowrap">{text}</p>
      <Wrapper1>
        <g id="heroicons-outline/arrow-uturn-left">
          <path d={svgPaths.pdc90b80} id="Vector" stroke="var(--stroke-0, #0047D0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </Wrapper1>
    </div>
  );
}
type ContentTextProps = {
  text: string;
};

function ContentText({ text }: ContentTextProps) {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <p className="basis-0 font-['Lexend:Regular',sans-serif] font-normal grow leading-[1.5] min-h-px min-w-px relative shrink-0 text-[#090909] text-[20px]">{text}</p>
    </div>
  );
}
type ContentProps = {
  text: string;
  text1: string;
};

function Content({ text, text1 }: ContentProps) {
  return (
    <div className="content-stretch flex gap-[4px] items-center leading-[18px] relative shrink-0 text-[12px] text-nowrap">
      <p className="font-['Lexend:Medium',sans-serif] font-medium relative shrink-0 text-[#090909]">{text}</p>
      <p className="font-['Lexend:Bold',sans-serif] font-bold relative shrink-0 text-[#0047d0]">{text1}</p>
    </div>
  );
}

function HeroiconsOutlineBlogDate() {
  return (
    <Wrapper2>
      <g id="heroicons-outline/blog-date">
        <path d={svgPaths.pc689100} id="Vector" stroke="var(--stroke-0, #090909)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      </g>
    </Wrapper2>
  );
}

function ComponentsPlacholdersMysteryPerson() {
  return (
    <div className="relative shrink-0 size-[80px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
        <g id="Components/Placholders/Mystery Person">
          <g clipPath="url(#clip0_7_4330)">
            <path d="M512 0H0V512H512V0Z" fill="var(--fill-0, #565656)" id="Vector" />
            <path d={svgPaths.p2319af80} fill="var(--fill-0, #E4E4E4)" id="Vector_2" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_7_4330">
            <path d={svgPaths.p2cd01c00} fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function HeroiconsOutlineHandThumbUp() {
  return (
    <Wrapper2>
      <g id="heroicons-outline/hand-thumb-up">
        <path d={svgPaths.pf563d00} id="Vector" stroke="var(--stroke-0, #090909)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      </g>
    </Wrapper2>
  );
}

function LightspeedPlaceholderIcon() {
  return (
    <div className="absolute inset-[0.05%_0.02%_0.03%_0.02%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 255.909 314.333">
        <g id="lightspeed-placeholder-icon">
          <path clipRule="evenodd" d={svgPaths.p17c82900} fill="var(--fill-0, #E4E4E4)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p3da4a100} fill="var(--fill-0, #C6C6C6)" fillRule="evenodd" id="Vector_2" />
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

function Section() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 text-[#090909] w-full" data-name="Section">
      <p className="font-['Lexend:Medium',sans-serif] font-medium leading-[40px] relative shrink-0 text-[32px] tracking-[-0.02px] w-full">This is a subheading</p>
      <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu massa lectus. Phasellus in erat a arcu mattis fermentum in sit amet arcu. Mauris mauris lectus, imperdiet sed leo et, interdum pulvinar purus. Quisque cursus dui eget euismod dictum. Nulla vulputate nulla non elit scelerisque egestas vel et augue. Vivamus tempus sodales eleifend. Pellentesque in molestie arcu. Mauris at purus ac neque facilisis elementum a ut lectus. Integer faucibus felis sit amet ipsum fringilla, nec sodales ligula consectetur. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris imperdiet urna ut mattis ullamcorper.</p>
      <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu massa lectus. Phasellus in erat a arcu mattis fermentum in sit amet arcu. Mauris mauris lectus, imperdiet sed leo et, interdum pulvinar purus. Quisque cursus dui eget euismod dictum. Nulla vulputate nulla non elit scelerisque egestas vel et augue. Vivamus tempus sodales eleifend. Pellentesque in molestie arcu. Mauris at purus ac neque facilisis elementum a ut lectus. Integer faucibus felis sit amet ipsum fringilla, nec sodales ligula consectetur. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris imperdiet urna ut mattis ullamcorper.</p>
    </div>
  );
}

export default function SinglePost() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative size-full" data-name="Single Post">
      <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Content">
        <div className="bg-white content-stretch flex items-center justify-between px-0 py-[10px] relative shrink-0 w-full" data-name="Header/True/Centered">
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
        <div className="bg-white content-stretch flex flex-col items-center overflow-clip px-0 py-[40px] relative shrink-0 w-[1440px]" data-name="Blog Post Header / 4 /">
          <div className="content-stretch flex gap-[60px] items-start relative shrink-0 w-[1240px]" data-name="Content">
            <div className="content-stretch flex flex-col gap-[50px] items-start relative shrink-0 w-[420px]" data-name="Content">
              <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Single Post Back">
                <Wrapper2>
                  <g id="heroicons-outline/chevron-left">
                    <path d={svgPaths.p2c584980} id="Vector 335" stroke="var(--stroke-0, #090909)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </g>
                </Wrapper2>
                <p className="font-['Lexend:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#090909] text-[16px] text-nowrap">All Posts</p>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content">
                <p className="font-['Lexend:Medium',sans-serif] font-medium leading-[40px] relative shrink-0 text-[#090909] text-[32px] tracking-[-0.02px] w-full">Blog title heading will go here</p>
              </div>
              <div className="content-start flex flex-wrap gap-[4px] items-start relative shrink-0" data-name="Blog Card Meta Top">
                <div className="content-stretch flex items-start relative shrink-0" data-name="Date">
                  <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#090909] text-[12px] text-nowrap">Jan 1, 2024</p>
                </div>
                <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#090909] text-[12px] text-nowrap">{`— by `}</p>
                <MetaChip>{`Author `}</MetaChip>
                <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[12px] text-black text-nowrap">{`in `}</p>
                <MetaChip>Category 1,</MetaChip>
                <MetaChip>{`Category 2 `}</MetaChip>
              </div>
            </div>
            <div className="basis-0 bg-[#f2f2f2] grow h-[501px] min-h-px min-w-px relative shrink-0" data-name="Components/Placholders/Image">
              <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
                <div className="h-[314.592px] overflow-clip relative shrink-0 w-[256px]" data-name="Placeholder Icon">
                  <LightspeedPlaceholderIcon />
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-[#757575] border-solid inset-0 pointer-events-none" />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[20px] items-center relative rounded-[8px] shrink-0 w-[768px]" data-name="Single Post Content / 1 /">
          <div className="content-stretch flex flex-col gap-[50px] items-center relative shrink-0 w-full" data-name="Text Content">
            <Section />
            <Section />
            <div className="bg-[#f2f2f2] h-[488px] relative rounded-[8px] shrink-0 w-full" data-name="Components/Placholders/Image">
              <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
                <div className="h-[314.592px] overflow-clip relative shrink-0 w-[256px]" data-name="Placeholder Icon">
                  <LightspeedPlaceholderIcon />
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-[#757575] border-solid inset-0 pointer-events-none rounded-[8px]" />
            </div>
            <Section />
            <Section />
          </div>
          <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Likes">
            <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Blog Likes">
              <HeroiconsOutlineHandThumbUp />
              <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Content">
                <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#090909] text-[16px] text-nowrap">42 people like this</p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[20px] items-start justify-center relative shrink-0 w-full" data-name="Comments">
            <p className="font-['Lexend:SemiBold',sans-serif] font-semibold leading-[32.4px] relative shrink-0 text-[#090909] text-[32px] tracking-[0.32px] w-full">Comments</p>
            <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Comment">
              <ComponentsBlogBlogComment additionalClassNames="bg-white">
                <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0 w-full" data-name="Content">
                  <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Header">
                    <ComponentsPlacholdersMysteryPerson />
                    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[688px]" data-name="Author Date">
                      <p className="font-['Lexend:Medium',sans-serif] font-medium leading-[30px] relative shrink-0 text-[#05164d] text-[20px] w-[676px]">{`Some Author `}</p>
                      <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Blog Comment Meta Date">
                        <HeroiconsOutlineBlogDate />
                        <Content text="March 13, 2024 at 9:36 am" text1="(Edit)" />
                      </div>
                    </div>
                  </div>
                  <ContentText text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nulla libero, tempor eu mattis in, dapibus eget augue. Nam et dui nisl. Sed vitae ligula fermentum, vulputate dui id, congue nibh." />
                  <CommentsReplyText text="Reply" />
                </div>
              </ComponentsBlogBlogComment>
            </div>
            <div className="relative shrink-0 w-full" data-name="Reply">
              <div className="flex flex-col justify-center size-full">
                <div className="content-stretch flex flex-col items-start justify-center pl-[50px] pr-0 py-0 relative w-full">
                  <ComponentsBlogBlogComment additionalClassNames="bg-[#e1e6ff]">
                    <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0 w-full" data-name="Content">
                      <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Header">
                        <ComponentsPlacholdersMysteryPerson />
                        <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[688px]" data-name="Author Date">
                          <p className="font-['Lexend:Medium',sans-serif] font-medium leading-[30px] relative shrink-0 text-[#05164d] text-[20px] w-[676px]">{`Some Author `}</p>
                          <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Blog Comment Meta Date">
                            <HeroiconsOutlineBlogDate />
                            <Content text="March 13, 2024 at 9:36 am" text1="(Edit)" />
                          </div>
                        </div>
                      </div>
                      <ContentText text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nulla libero, tempor eu mattis in, dapibus eget augue. Nam et dui nisl. Sed vitae ligula fermentum, vulputate dui id, congue nibh." />
                      <CommentsReplyText text="Reply" />
                    </div>
                  </ComponentsBlogBlogComment>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Comment">
              <ComponentsBlogBlogComment additionalClassNames="bg-white">
                <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0 w-full" data-name="Content">
                  <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Header">
                    <ComponentsPlacholdersMysteryPerson />
                    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[688px]" data-name="Author Date">
                      <p className="font-['Lexend:Medium',sans-serif] font-medium leading-[30px] relative shrink-0 text-[#05164d] text-[20px] w-[676px]">{`Some Author `}</p>
                      <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Blog Comment Meta Date">
                        <HeroiconsOutlineBlogDate />
                        <Content text="March 13, 2024 at 9:36 am" text1="(Edit)" />
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Content">
                    <p className="font-['Lexend:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#090909] text-[20px] w-[760px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nulla libero, tempor eu mattis in, dapibus eget augue. Nam et dui nisl. Sed vitae ligula fermentum, vulputate dui id, congue nibh.</p>
                  </div>
                  <CommentsReplyText text="Reply" />
                </div>
              </ComponentsBlogBlogComment>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Post Comment">
            <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0" data-name="Components/Blog/Comment">
              <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[649px]" data-name="Components/Form/Message Input">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label & Description">
                  <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Form Label">
                    <p className="font-['Lexend:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#090909] text-[16px] text-nowrap">Comment</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Input Message">
                  <div className="bg-white h-[163px] relative rounded-[4px] shrink-0 w-full" data-name="Input">
                    <div aria-hidden="true" className="absolute border border-[#757575] border-solid inset-0 pointer-events-none rounded-[4px]" />
                    <div className="size-full">
                      <div className="content-stretch flex items-start p-[10px] relative size-full">
                        <p className="basis-0 font-['Lexend:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#757575] text-[16px]">Input Placeholder...</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#7be7ff] relative rounded-[8px] shrink-0 w-full" data-name="Components/Button - Light">
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="content-stretch flex gap-[12px] items-center justify-center px-[24px] py-[16px] relative w-full">
                    <div className="flex flex-col font-['Lexend:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0e3278] text-[20px] text-center text-nowrap">
                      <p className="leading-[1.5]">Post Comment</p>
                    </div>
                    <div className="relative shrink-0 size-[30px]" data-name="Icon/Arrow/Circe/Right Outline">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
                        <g id="Icon/Arrow/Circe/Right Outline">
                          <path d={svgPaths.p316b4200} id="Vector" stroke="var(--stroke-0, #0E3278)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[20px] items-start justify-center relative shrink-0 w-full" data-name="Related Posts">
            <p className="capitalize font-['Inter:Bold',sans-serif] font-bold leading-[36px] not-italic relative shrink-0 text-[#05164d] text-[24px] w-full">Related Posts</p>
            <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Pagination">
              <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Pagination Navigation">
                <Wrapper1>
                  <g id="heroicons-outline/chevron-double-left">
                    <path d={svgPaths.p249e8180} id="Vector" stroke="var(--stroke-0, #1E6AFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </g>
                </Wrapper1>
                <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Lexend:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[#1e6aff] text-[16px] text-nowrap underline">Previous</p>
              </div>
              <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Pagination Navigation">
                <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Lexend:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[#1e6aff] text-[16px] text-nowrap underline">Next</p>
                <Wrapper1>
                  <g id="heroicons-outline/chevron-double-right">
                    <path d={svgPaths.p26e8bb40} id="Vector" stroke="var(--stroke-0, #1E6AFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </g>
                </Wrapper1>
              </div>
            </div>
            <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full" data-name="Posts">
              {[...Array(2).keys()].map((_, i) => (
                <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Blog Card/False/Bottom/True/Default">
                  <div aria-hidden="true" className="absolute border border-[#757575] border-solid inset-0 pointer-events-none rounded-[10px]" />
                  <div className="size-full">
                    <div className="content-stretch flex flex-col gap-[10px] items-start p-[16px] relative w-full">
                      <div className="content-stretch flex flex-col h-[215px] items-end justify-end relative rounded-[8px] shrink-0 w-full" data-name="Container Image">
                        <div className="basis-0 bg-[#f2f2f2] grow min-h-px min-w-px relative rounded-[8px] shrink-0 w-full" data-name="Components/Placholders/Image">
                          <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
                            <div className="h-[98.31px] overflow-clip relative shrink-0 w-[80px]" data-name="Placeholder Icon">
                              <div className="absolute h-[98.264px] left-[calc(50%+0.04px)] top-[calc(50%+0.15px)] translate-x-[-50%] translate-y-[-50%] w-[80px]" data-name="lightspeed-placeholder-icon">
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 98.2639">
                                  <g id="lightspeed-placeholder-icon">
                                    <path clipRule="evenodd" d={svgPaths.pffccc80} fill="var(--fill-0, #E4E4E4)" fillRule="evenodd" id="Vector" />
                                    <path clipRule="evenodd" d={svgPaths.p3c81e700} fill="var(--fill-0, #C6C6C6)" fillRule="evenodd" id="Vector_2" />
                                  </g>
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div aria-hidden="true" className="absolute border border-[#757575] border-solid inset-0 pointer-events-none rounded-[8px]" />
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Container Body">
                        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container-text">
                          <p className="font-['Lexend:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#090909] text-[16px] tracking-[-0.02px] w-full">This is the Blog Card Title</p>
                          <div className="font-['Lexend:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#1c293c] text-[0px] text-[20px] w-full">
                            <p className="leading-[1.5] mb-0 text-[#090909]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nulla libero, tempor eu mattis in, dapibus eget augue... `}</p>
                            <p className="font-['Lexend:Bold',sans-serif] font-bold leading-[30px] text-[#0047d0]">READ MORE</p>
                          </div>
                        </div>
                        <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Blog Card Meta">
                          <div className="content-stretch flex gap-[10px] items-start justify-center relative shrink-0" data-name="Author Date">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Blog Author">
                              <Wrapper2>
                                <g id="heroicons-outline/user-circle">
                                  <path d={svgPaths.p45fa600} id="Vector" stroke="var(--stroke-0, #090909)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                                </g>
                              </Wrapper2>
                              <Text text="Author" additionalClassNames="items-center" />
                            </div>
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Blog Date">
                              <HeroiconsOutlineBlogDate />
                              <Text text="April 11, 2024" additionalClassNames="items-center justify-center" />
                            </div>
                          </div>
                          <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Likes Comments">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Blog Likes">
                              <HeroiconsOutlineHandThumbUp />
                              <Text text="42" additionalClassNames="flex-col items-start justify-center" />
                            </div>
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Blog Card Comments">
                              <Wrapper1>
                                <g id="heroicons-outline/blog-comments">
                                  <path d={svgPaths.p15724600} id="Vector" stroke="var(--stroke-0, #090909)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                                </g>
                              </Wrapper1>
                              <p className="font-['Manrope:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#090909] text-[16px] text-nowrap">16</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
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
                    <Wrapper>
                      <g id="Icon/Social/facebook">
                        <rect fill="var(--fill-0, #090909)" height="32" rx="16" width="32" />
                        <path d={svgPaths.p179a2400} fill="var(--fill-0, white)" id="Vector" />
                      </g>
                    </Wrapper>
                    <p className="font-['Lexend:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black text-nowrap">Facebook</p>
                  </div>
                  <div className="content-stretch flex gap-[12px] items-center px-0 py-[8px] relative shrink-0 w-full" data-name="Link">
                    <Wrapper>
                      <g id="Icon/Social/instagram">
                        <rect fill="var(--fill-0, #090909)" height="32" rx="16" width="32" />
                        <path d={svgPaths.p644fe7e} fill="var(--fill-0, white)" id="Vector" />
                      </g>
                    </Wrapper>
                    <p className="font-['Lexend:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black text-nowrap">Instagram</p>
                  </div>
                  <div className="content-stretch flex gap-[12px] items-center px-0 py-[8px] relative shrink-0 w-full" data-name="Link">
                    <Wrapper>
                      <g id="Icon/Social/x/twitter">
                        <rect fill="var(--fill-0, #090909)" height="32" rx="16" width="32" />
                        <path d={svgPaths.p1b1df500} fill="var(--fill-0, white)" id="Vector" />
                      </g>
                    </Wrapper>
                    <p className="font-['Lexend:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black text-nowrap">X</p>
                  </div>
                  <div className="content-stretch flex gap-[12px] items-center px-0 py-[8px] relative shrink-0 w-full" data-name="Link">
                    <Wrapper>
                      <g id="Icon/Social/linkedin">
                        <rect fill="var(--fill-0, #090909)" height="32" rx="16" width="32" />
                        <path d={svgPaths.p2fa54000} fill="var(--fill-0, white)" id="Vector" />
                      </g>
                    </Wrapper>
                    <p className="font-['Lexend:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black text-nowrap">LinkedIn</p>
                  </div>
                  <div className="content-stretch flex gap-[12px] items-center px-0 py-[8px] relative shrink-0 w-full" data-name="Link">
                    <Wrapper>
                      <g id="Icon/Social/youtube">
                        <rect fill="var(--fill-0, #090909)" height="32" rx="16" width="32" />
                        <path d={svgPaths.p36e71380} fill="var(--fill-0, white)" id="Vector" />
                      </g>
                    </Wrapper>
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