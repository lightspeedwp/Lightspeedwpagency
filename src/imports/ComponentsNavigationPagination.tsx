function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        {children}
      </svg>
    </div>
  );
}
type BoxTextProps = {
  text: string;
};

function BoxText({ text }: BoxTextProps) {
  return (
    <div className="content-stretch flex flex-col items-start px-[6px] py-0 relative shrink-0">
      <p className="font-['Lexend:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#1e6aff] text-[16px] text-nowrap">{text}</p>
    </div>
  );
}

export default function ComponentsNavigationPagination() {
  return (
    <div className="content-stretch flex items-center justify-between relative size-full" data-name="Components/Navigation/Pagination">
      <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Pagination Navigation">
        <Wrapper>
          <g id="heroicons-outline/arrow-left">
            <path d="M7 13L2 8M2 8L7 3M2 8H14" id="Vector" stroke="var(--stroke-0, #1E6AFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </Wrapper>
        <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Lexend:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[#1e6aff] text-[16px] text-nowrap underline">Previous</p>
      </div>
      <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Page Number">
        <div className="content-stretch flex flex-col items-start relative rounded-[4px] shrink-0" data-name="Pagination Number">
          <div aria-hidden="true" className="absolute border border-[#1e6aff] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <BoxText text="1" />
        </div>
        <div className="content-stretch flex flex-col items-start relative rounded-[4px] shrink-0" data-name="Pagination Number">
          <div aria-hidden="true" className="absolute border border-[#1e6aff] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <BoxText text="2" />
        </div>
        <div className="bg-[#1e6aff] content-stretch flex flex-col items-start relative rounded-[4px] shrink-0" data-name="Pagination Number">
          <div className="content-stretch flex flex-col items-start px-[6px] py-0 relative shrink-0" data-name="Box">
            <p className="font-['Lexend:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[16px] text-nowrap text-white">3</p>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start relative rounded-[4px] shrink-0" data-name="Pagination Number">
          <div aria-hidden="true" className="absolute border border-[#1e6aff] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <BoxText text="..." />
        </div>
        <div className="content-stretch flex flex-col items-start relative rounded-[4px] shrink-0" data-name="Pagination Number">
          <div aria-hidden="true" className="absolute border border-[#1e6aff] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <BoxText text="10" />
        </div>
      </div>
      <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Pagination Navigation">
        <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Lexend:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[#1e6aff] text-[16px] text-nowrap underline">Next</p>
        <Wrapper>
          <g id="heroicons-outline/arrow-right">
            <path d="M9 3L14 8M14 8L9 13M14 8H2" id="Vector" stroke="var(--stroke-0, #1E6AFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </Wrapper>
      </div>
    </div>
  );
}