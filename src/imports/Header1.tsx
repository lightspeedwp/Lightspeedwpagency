import svgPaths from "./svg-g3mn3q4y4o";

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
      <div className="relative shrink-0 size-[20px]" data-name="heroicons-outline/chevron-down">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g id="heroicons-outline/chevron-down">
            <path d={svgPaths.p2894d000} id="Vector 335" stroke="var(--stroke-0, #090909)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default function Header() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-0 py-[10px] relative size-full" data-name="Header / 1 /">
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
        <div className="bg-white content-stretch flex gap-[10px] items-center justify-end relative shrink-0" data-name="Nav">
          <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative shrink-0" data-name="Nav Item">
            <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Lexend:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[#1e6aff] text-[16px] text-nowrap underline">Nav Item</p>
          </div>
          <NavItem />
          <NavItem1 />
          <NavItem />
          <NavItem1 />
        </div>
      </div>
    </div>
  );
}