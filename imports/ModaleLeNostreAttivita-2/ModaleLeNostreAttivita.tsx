function Heading() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Heading 2">
      <p className="font-['Amatic_SC:Bold',sans-serif] leading-[40px] not-italic relative shrink-0 text-[#0e4542] text-[48px] tracking-[0.9px] whitespace-nowrap">Uscite giornaliere</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d="M13 1L1 13" id="Vector" stroke="var(--stroke-0, #0E4542)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d="M1 1L13 13" id="Vector" stroke="var(--stroke-0, #0E4542)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 size-[24px]" data-name="Button">
      <Icon />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Heading />
      <Button />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Jost:Regular',sans-serif] font-normal leading-[28px] min-w-px relative text-[18px] text-[rgba(14,69,66,0.7)]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  );
}

function Container1() {
  return <div className="absolute bg-[#0e4542] left-0 rounded-[16777200px] size-[8px] top-[8px]" data-name="Container" />;
}

function Paragraph1() {
  return (
    <div className="absolute h-[24px] left-[19.86px] top-0 w-[290px]" data-name="Paragraph">
      <p className="absolute font-['Jost:Regular',sans-serif] font-normal leading-[24px] left-[0.14px] text-[#0e4542] text-[16px] top-[-0.5px] whitespace-nowrap">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Paragraph1 />
    </div>
  );
}

function Container3() {
  return <div className="absolute bg-[#0e4542] left-0 rounded-[16777200px] size-[8px] top-[8px]" data-name="Container" />;
}

function Paragraph2() {
  return (
    <div className="absolute h-[24px] left-[19.98px] top-0 w-[272px]" data-name="Paragraph">
      <p className="absolute font-['Jost:Regular',sans-serif] font-normal leading-[24px] left-[0.02px] text-[#0e4542] text-[16px] top-[-0.5px] whitespace-nowrap">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <Container3 />
      <Paragraph2 />
    </div>
  );
}

function Container5() {
  return <div className="absolute bg-[#0e4542] left-0 rounded-[16777200px] size-[8px] top-[8px]" data-name="Container" />;
}

function Paragraph3() {
  return (
    <div className="absolute h-[24px] left-[19.97px] top-0 w-[246px]" data-name="Paragraph">
      <p className="absolute font-['Jost:Regular',sans-serif] font-normal leading-[24px] left-[0.03px] text-[#0e4542] text-[16px] top-[-0.5px] whitespace-nowrap">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <Container5 />
      <Paragraph3 />
    </div>
  );
}

function ActivityModal() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="ActivityModal">
      <Container />
      <Container2 />
      <Container4 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[27px] items-start relative shrink-0 w-full">
      <Frame />
      <Paragraph />
      <ActivityModal />
    </div>
  );
}

function ActivityModal1() {
  return (
    <div className="bg-[#0e4542] relative rounded-[16777200px] shrink-0 w-full" data-name="ActivityModal">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[232px] py-[16px] relative size-full">
          <p className="font-['Jost:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">Chiudi</p>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full">
      <Frame2 />
      <ActivityModal1 />
    </div>
  );
}

export default function ModaleLeNostreAttivita() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip pb-[56px] pt-[48px] px-[56px] relative rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] size-full" data-name="Modale le nostre attività">
      <Frame1 />
    </div>
  );
}