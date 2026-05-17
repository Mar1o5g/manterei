function Heading() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Heading 2">
      <p className="font-['Amatic_SC:Bold',sans-serif] leading-[40px] not-italic relative shrink-0 text-[#0e4542] text-[48px] tracking-[0.9px] whitespace-nowrap">Grazie per averci contattato</p>
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
      <p className="flex-[1_0_0] font-['Jost:Regular',sans-serif] font-normal leading-[28px] min-w-px relative text-[18px] text-[rgba(14,69,66,0.7)]">A breve verrai contattato dal nostro staff e riceverai le informazioni di cui hai bisogno.</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[27px] items-start relative shrink-0 w-full">
      <Frame />
      <Paragraph />
    </div>
  );
}

function ActivityModal() {
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
      <ActivityModal />
    </div>
  );
}

export default function ModaleRichiediInformazioni() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip pb-[56px] pt-[48px] px-[56px] relative rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] size-full" data-name="Modale richiedi informazioni">
      <Frame1 />
    </div>
  );
}