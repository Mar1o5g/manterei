import svgPaths from "./svg-h03qt7snu1";
import imgImageWithFallback from "./f51f30e5621442560b0300513c04d04d9ee1649a.png";
import imgImageWithFallback1 from "./fa2d5111304f900eba040c5b26742acd5ac6eb59.png";
import imgImageWithFallback2 from "./ed6c3a4009458d7b70570a91cf2ba24e3aec05ed.png";
import imgImageWithFallback3 from "./dcb2352901f237cbace3f9d5b62d84284f43279d.png";
import imgImageWithFallback4 from "./6614c38e3fc5a05db4d477020363c8c3ae74e2be.png";
import imgContainer from "./c0cac8b344fb7e9a6c307868d7ee3e4f8b000cab.png";
import imgContainer1 from "./a2cd618734c7f97021e2771ce81bf99c470dbdf4.png";
import imgContainer2 from "./7e26595df8c28d32c656fd7da102771db8e439ab.png";
import imgContainer3 from "./ff388cde9ac3170a6b54126b706d5dcb4fa0e60e.png";
import imgContainer4 from "./d51d6a9916ef94d37ef0963e0afc74f643f2b4ef.png";
import imgContainer5 from "./9e5a97dd95c940fefb00deaf338d5a9763062563.png";
import imgContainer6 from "./2fe9d3cdc39bb3bdeeec5c3aad9d84f513a95d9c.png";
import imgTavolaDisegno9Copia143X1 from "./691b89532544a3162e1036a1e5ecf7e93c453aef.png";
import imgHero from "./2930859cb1f8618d31d2a0dd4c46bf8f04241caf.png";
import imgTavolaDisegno9Copia143X2 from "./b188fdf236a53a22e7df3df33de839b008f19010.png";

function Heading() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Amatic_SC:Bold',sans-serif] leading-[60px] left-0 not-italic text-[#0e4542] text-[60px] top-0 whitespace-nowrap">Chi Siamo</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[58.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Jost:Regular',sans-serif] font-normal leading-[0] left-0 text-[0px] text-[rgba(44,76,59,0.8)] top-[-1px] w-[608px]">
        <span className="leading-[29.25px] text-[18px]">{`La cooperativa sociale `}</span>
        <span className="font-['Jost:Bold',sans-serif] font-bold leading-[29.25px] text-[18px]">Manta Rei</span>
        <span className="leading-[29.25px] text-[18px]">{` nasce dall'esperienza nell'educazione ambientale e nell'accompagnamento in natura.`}</span>
      </p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="bg-[rgba(217,108,78,0.05)] h-[72px] relative rounded-br-[16px] rounded-tr-[16px] shrink-0 w-full" data-name="Paragraph">
      <div aria-hidden="true" className="absolute border-[#cc794d] border-l-4 border-solid inset-0 pointer-events-none rounded-br-[16px] rounded-tr-[16px]" />
      <p className="absolute font-['Jost:Medium',sans-serif] font-medium leading-[28px] left-[28px] text-[#cc794d] text-[20px] top-[7.5px] w-[580px]">{`La nostra missione è costruire un apprendimento stratificato orientato al benessere dell'individuo e della comunità.`}</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[87.75px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Jost:Regular',sans-serif] font-normal leading-[29.25px] left-0 text-[18px] text-[rgba(44,76,59,0.8)] top-[-1px] w-[608px]">{`Crediamo che l'ambiente naturale non sia solo uno scenario, ma un vero e proprio educatore. Attraverso le nostre attività, guidiamo bambini e ragazzi alla scoperta del mondo che li circonda e, di riflesso, di loro stessi.`}</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[266.25px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph />
      <Paragraph1 />
      <Paragraph2 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] h-[358.25px] items-start relative shrink-0 w-[608px]" data-name="Container">
      <Heading />
      <Container2 />
    </div>
  );
}

function ImageWithFallback() {
  return (
    <div className="h-[500px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col h-[500px] items-start overflow-clip relative rounded-[48px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] shrink-0 w-[608px]" data-name="Container">
      <ImageWithFallback />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[64px] items-center relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Container3 />
    </div>
  );
}

function AboutUs() {
  return (
    <div className="absolute bg-[#f9f6f0] content-stretch flex flex-col h-[692px] items-start left-0 pt-[96px] px-[71.5px] top-[818.09px] w-[1423px]" data-name="AboutUs">
      <Container />
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center px-[363px] relative size-full text-center whitespace-nowrap">
          <p className="font-['Amatic_SC:Bold',sans-serif] leading-[60px] not-italic relative shrink-0 text-[#0e4542] text-[60px]">Il Nostro Metodo</p>
          <p className="font-['Jost:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[20px] text-[rgba(44,76,59,0.8)]">{`Un approccio olistico che mette al centro la persona e l'ambiente.`}</p>
        </div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Icon">
          <path d={svgPaths.p13dfa480} id="Vector" stroke="var(--stroke-0, #CC794D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d={svgPaths.p19a01780} id="Vector_2" stroke="var(--stroke-0, #CC794D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-[rgba(204,121,77,0.1)] content-stretch flex items-center justify-center px-[20px] relative rounded-[16777200px] shrink-0 size-[80px]" data-name="Container">
      <Icon />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[40px] relative shrink-0 w-[100.156px]" data-name="Heading 3">
      <p className="-translate-x-1/2 absolute font-['Amatic_SC:Bold',sans-serif] leading-[40px] left-[50.5px] not-italic text-[#0e4542] text-[36px] text-center top-[-1px] whitespace-nowrap">Riscoprire</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[58.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Jost:Regular',sans-serif] font-normal leading-[29.25px] left-[163px] text-[18px] text-[rgba(44,76,59,0.7)] text-center top-[-1px] w-[326px]">{`La connessione autentica con la natura e con sé stessi, tornando all'essenziale.`}</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full">
      <Heading1 />
      <Paragraph3 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_1px_1.5px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.1)] flex flex-col gap-[24px] items-center p-[40px] relative rounded-[40px] shrink-0 w-[405.33px]">
      <Container7 />
      <Frame />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Icon">
          <path d={svgPaths.p1a2c7300} id="Vector" stroke="var(--stroke-0, #CC794D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d={svgPaths.p211a4cc0} id="Vector_2" stroke="var(--stroke-0, #CC794D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-[rgba(204,121,77,0.1)] content-stretch flex items-center justify-center px-[20px] relative rounded-[16777200px] shrink-0 size-[80px]" data-name="Container">
      <Icon1 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[40px] relative shrink-0 w-[100.156px]" data-name="Heading 3">
      <p className="-translate-x-1/2 absolute font-['Amatic_SC:Bold',sans-serif] leading-[40px] left-[50px] not-italic text-[#0e4542] text-[36px] text-center top-[-1px] whitespace-nowrap">Educare</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[58.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Jost:Regular',sans-serif] font-normal leading-[29.25px] left-[163px] text-[18px] text-[rgba(44,76,59,0.7)] text-center top-[-1px] w-[326px]">Attraverso metodologie esperienziali e non formali, fuori dalle aule tradizionali.</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full">
      <Heading2 />
      <Paragraph4 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_1px_1.5px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.1)] flex flex-col gap-[24px] items-center p-[40px] relative rounded-[40px] shrink-0 w-[405.33px]">
      <Container8 />
      <Frame3 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Icon">
          <path d="M20 11.6667V35" id="Vector" stroke="var(--stroke-0, #CC794D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d={svgPaths.p2ff76df0} id="Vector_2" stroke="var(--stroke-0, #CC794D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-[rgba(204,121,77,0.1)] content-stretch flex items-center justify-center px-[20px] relative rounded-[16777200px] shrink-0 size-[80px]" data-name="Container">
      <Icon2 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[40px] relative shrink-0 w-[100.156px]" data-name="Heading 3">
      <p className="-translate-x-1/2 absolute font-['Amatic_SC:Bold',sans-serif] leading-[40px] left-[50.5px] not-italic text-[#0e4542] text-[36px] text-center top-[-1px] whitespace-nowrap">Imparare</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[58.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Jost:Regular',sans-serif] font-normal leading-[29.25px] left-[163px] text-[18px] text-[rgba(44,76,59,0.7)] text-center top-[-1px] w-[326px]">In modo attivo e trasformativo, dove ogni esperienza diventa conoscenza radicata.</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full">
      <Heading3 />
      <Paragraph5 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_1px_1.5px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.1)] flex flex-col gap-[24px] items-center p-[40px] relative rounded-[40px] shrink-0 w-[405.33px]">
      <Container9 />
      <Frame5 />
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-between px-px relative size-full">
          <Frame1 />
          <Frame2 />
          <Frame4 />
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] h-[466.5px] items-start relative shrink-0 w-full" data-name="Container">
      <Container5 />
      <Container6 />
    </div>
  );
}

function Methodology() {
  return (
    <div className="absolute bg-[#e6efe9] content-stretch flex flex-col h-[658.5px] items-start left-0 pt-[96px] px-[71.5px] top-[1510.09px] w-[1423px]" data-name="Methodology">
      <Container4 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="-translate-x-1/2 absolute font-['Amatic_SC:Bold',sans-serif] leading-[60px] left-[640.25px] not-italic text-[#0e4542] text-[60px] text-center top-0 whitespace-nowrap">Le Nostre Attività</p>
    </div>
  );
}

function ImageWithFallback1() {
  return (
    <div className="absolute h-[377.5px] left-0 top-0 w-[302px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M4.16667 10H15.8333" id="Vector" stroke="var(--stroke-0, #0E4542)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1ae0b780} id="Vector_2" stroke="var(--stroke-0, #0E4542)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#f9f6f0] relative rounded-[16777200px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center p-[11px] relative size-full">
        <Icon3 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute bg-gradient-to-t content-stretch flex flex-col from-[rgba(44,76,59,0.9)] gap-[16px] h-[377.5px] items-start justify-end left-0 pb-[33px] pt-[304.5px] px-[32px] to-[rgba(0,0,0,0)] top-0 via-1/2 via-[rgba(44,76,59,0.2)] w-[302px]" data-name="Container">
      <p className="font-['Amatic_SC:Bold',sans-serif] leading-[40px] not-italic relative shrink-0 text-[36px] text-white tracking-[0.9px] whitespace-nowrap">Laboratori a scuola</p>
      <Button />
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] h-[377.5px] left-0 overflow-clip rounded-[32px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-0 w-[302px]" data-name="Container">
      <ImageWithFallback1 />
      <Container13 />
    </div>
  );
}

function ImageWithFallback2() {
  return (
    <div className="absolute h-[377.5px] left-0 top-0 w-[302px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback1} />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M4.16667 10H15.8333" id="Vector" stroke="var(--stroke-0, #0E4542)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1ae0b780} id="Vector_2" stroke="var(--stroke-0, #0E4542)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#f9f6f0] relative rounded-[16777200px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center p-[11px] relative size-full">
        <Icon4 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute bg-gradient-to-t content-stretch flex flex-col from-[rgba(44,76,59,0.9)] gap-[16px] h-[377.5px] items-start justify-end left-0 pb-[33px] pt-[304.5px] px-[32px] to-[rgba(0,0,0,0)] top-0 via-1/2 via-[rgba(44,76,59,0.2)] w-[302px]" data-name="Container">
      <p className="font-['Amatic_SC:Bold',sans-serif] leading-[40px] not-italic relative shrink-0 text-[36px] text-white tracking-[0.9px] whitespace-nowrap">Uscite giornaliere</p>
      <Button1 />
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] h-[377.5px] left-[326px] overflow-clip rounded-[32px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-0 w-[302px]" data-name="Container">
      <ImageWithFallback2 />
      <Container15 />
    </div>
  );
}

function ImageWithFallback3() {
  return (
    <div className="absolute h-[377.5px] left-0 top-0 w-[302px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback2} />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M4.16667 10H15.8333" id="Vector" stroke="var(--stroke-0, #0E4542)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1ae0b780} id="Vector_2" stroke="var(--stroke-0, #0E4542)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#f9f6f0] relative rounded-[16777200px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center p-[11px] relative size-full">
        <Icon5 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute bg-gradient-to-t content-stretch flex flex-col from-[rgba(44,76,59,0.9)] gap-[16px] h-[377.5px] items-start justify-end left-0 pb-[33px] pt-[304.5px] px-[32px] to-[rgba(0,0,0,0)] top-0 via-1/2 via-[rgba(44,76,59,0.2)] w-[302px]" data-name="Container">
      <p className="font-['Amatic_SC:Bold',sans-serif] leading-[40px] not-italic relative shrink-0 text-[36px] text-white tracking-[0.9px] whitespace-nowrap">Campi scuola</p>
      <Button2 />
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] h-[377.5px] left-[652px] overflow-clip rounded-[32px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-0 w-[302px]" data-name="Container">
      <ImageWithFallback3 />
      <Container17 />
    </div>
  );
}

function ImageWithFallback4() {
  return (
    <div className="absolute h-[377.5px] left-0 top-0 w-[302px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback3} />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M4.16667 10H15.8333" id="Vector" stroke="var(--stroke-0, #0E4542)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1ae0b780} id="Vector_2" stroke="var(--stroke-0, #0E4542)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#f9f6f0] relative rounded-[16777200px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center p-[11px] relative size-full">
        <Icon6 />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute bg-gradient-to-t content-stretch flex flex-col from-[rgba(44,76,59,0.9)] gap-[16px] h-[377.5px] items-start justify-end left-0 pb-[33px] pt-[304.5px] px-[32px] to-[rgba(0,0,0,0)] top-0 via-1/2 via-[rgba(44,76,59,0.2)] w-[302px]" data-name="Container">
      <p className="font-['Amatic_SC:Bold',sans-serif] leading-[40px] not-italic relative shrink-0 text-[36px] text-white tracking-[0.9px] whitespace-nowrap">Viaggi di istruzione</p>
      <Button3 />
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] h-[377.5px] left-[978px] overflow-clip rounded-[32px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-0 w-[302px]" data-name="Container">
      <ImageWithFallback4 />
      <Container19 />
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[377.5px] relative shrink-0 w-full" data-name="Container">
      <Container12 />
      <Container14 />
      <Container16 />
      <Container18 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] h-[485.5px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading4 />
      <Container11 />
    </div>
  );
}

function Activities() {
  return (
    <div className="absolute bg-[#f9f6f0] content-stretch flex flex-col h-[677.5px] items-start left-0 pt-[96px] px-[71.5px] top-[2168.59px] w-[1423px]" data-name="Activities">
      <Container10 />
    </div>
  );
}

function Container22() {
  return (
    <div className="bg-[#cc794d] content-stretch flex items-center justify-center px-[16px] py-[6px] relative rounded-[16777200px] shrink-0" data-name="Container">
      <p className="font-['Jost:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[14px] text-white tracking-[0.7px] uppercase whitespace-nowrap">IN EVIDENZA</p>
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Heading 2">
      <p className="font-['Amatic_SC:Bold',sans-serif] leading-[72px] not-italic relative shrink-0 text-[#f9f6f0] text-[72px] whitespace-nowrap">Progetti PCTO in Cilento</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Jost:Regular',sans-serif] font-normal leading-[0] min-w-px relative text-[0px] text-[rgba(249,246,240,0.9)]">
        <span className="leading-[32.5px] text-[20px]">{`Un'esperienza intensiva di 5 giorni dedicata agli istituti agrari. Ospitati presso l'`}</span>
        <span className="font-['Jost:Bold',sans-serif] font-bold leading-[32.5px] text-[20px]">Agriturismo Zio Cristoforo</span>
        <span className="leading-[32.5px] text-[20px]">{` nel cuore del Cilento, gli studenti vivranno un'immersione totale tra pratiche agricole sostenibili, scoperta del territorio e lavoro di squadra.`}</span>
      </p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Container22 />
      <Heading5 />
      <Paragraph6 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M2.1665 10H13.8332" id="Vector" stroke="var(--stroke-0, #0E4542)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.pc24a400} id="Vector_2" stroke="var(--stroke-0, #0E4542)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p25623240} id="Vector_3" stroke="var(--stroke-0, #0E4542)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#f9f6f0] content-stretch flex gap-[10px] items-center px-[24px] py-[9px] relative rounded-[16777200px] shrink-0" data-name="Button">
      <p className="font-['Jost:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#0e4542] text-[16px] text-center whitespace-nowrap">Scarica il programma completo</p>
      <div className="flex items-center justify-center relative shrink-0 size-[20px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <Icon7 />
        </div>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start px-[64px] relative shrink-0 w-[672px]" data-name="Container">
      <Frame8 />
      <Button4 />
    </div>
  );
}

function ImageWithFallback5() {
  return (
    <div className="h-[494px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback4} />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col h-[494px] items-start opacity-20 relative shrink-0 w-[640px]" data-name="Container">
      <ImageWithFallback5 />
    </div>
  );
}

function Container20() {
  return (
    <div className="bg-[#0e4542] content-stretch flex items-center overflow-clip relative rounded-[48px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] shrink-0 w-full" data-name="Container">
      <Container21 />
      <Container23 />
    </div>
  );
}

function PctoSection() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[686px] items-start left-0 overflow-clip pt-[96px] px-[71.5px] top-[2846.09px] w-[1423px]" data-name="PctoSection">
      <Container20 />
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[104px] relative shrink-0 text-center w-full whitespace-nowrap" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Amatic_SC:Bold',sans-serif] leading-[60px] left-[640.29px] not-italic text-[#0e4542] text-[60px] top-0">Le Nostre Destinazioni</p>
      <p className="-translate-x-1/2 absolute font-['Jost:Regular',sans-serif] font-normal leading-[28px] left-[640.09px] text-[20px] text-[rgba(44,76,59,0.8)] top-[75.5px]">Territori unici dove la natura incontra la cultura e la storia.</p>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p14548f00} id="Vector" stroke="var(--stroke-0, #CC794D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p17781bc0} id="Vector_2" stroke="var(--stroke-0, #CC794D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container28() {
  return (
    <div className="bg-[rgba(255,255,255,0.9)] content-stretch flex gap-[6px] h-[28px] items-center px-[12px] py-[4px] relative rounded-[16777200px] shrink-0" data-name="Container">
      <Icon8 />
      <p className="font-['Jost:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0e4542] text-[14px] tracking-[0.7px] uppercase whitespace-nowrap">SUD</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col h-[28px] items-end pr-[16px] relative shrink-0 w-[405px]">
      <Container28 />
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col h-[256px] items-start overflow-clip py-[16px] relative shrink-0 w-full" data-name="Container">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgContainer} />
      <Frame7 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[130px] relative size-full">
          <p className="font-['Amatic_SC:Bold',sans-serif] leading-[40px] not-italic relative shrink-0 text-[#0e4542] text-[36px] text-center whitespace-nowrap">Cilento</p>
        </div>
      </div>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="flex-[1_0_0] font-['Jost:Regular',sans-serif] font-normal leading-[28px] min-w-px relative text-[18px] text-[rgba(44,76,59,0.7)] text-center">Paestum e le meraviglie della Magna Grecia, Grotte del Bussento, gite in barca e in fattoria.</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start justify-center p-[32px] relative size-full">
          <Heading6 />
          <Paragraph7 />
        </div>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[484px] items-start overflow-clip relative rounded-[32px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 w-[406px]" data-name="Container">
      <Container27 />
      <Container29 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p14548f00} id="Vector" stroke="var(--stroke-0, #CC794D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p17781bc0} id="Vector_2" stroke="var(--stroke-0, #CC794D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container32() {
  return (
    <div className="bg-[rgba(255,255,255,0.9)] content-stretch flex gap-[6px] h-[28px] items-center px-[12px] py-[4px] relative rounded-[16777200px] shrink-0" data-name="Container">
      <Icon9 />
      <p className="font-['Jost:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0e4542] text-[14px] tracking-[0.7px] uppercase whitespace-nowrap">CENTRO</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col h-[28px] items-end pr-[16px] relative shrink-0 w-[405px]">
      <Container32 />
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col h-[256px] items-start overflow-clip py-[16px] relative shrink-0 w-full" data-name="Container">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgContainer1} />
      <Frame9 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[130px] relative size-full">
          <p className="font-['Amatic_SC:Bold',sans-serif] leading-[40px] not-italic relative shrink-0 text-[#0e4542] text-[36px] text-center whitespace-nowrap">Marche</p>
        </div>
      </div>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="flex-[1_0_0] font-['Jost:Regular',sans-serif] font-normal leading-[28px] min-w-px relative text-[18px] text-[rgba(44,76,59,0.7)] text-center">{`Urbino, Grotte di Frasassi e Fabriano, Gradara e Recanati con Casa Leopardi. `}</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start justify-center p-[32px] relative size-full">
          <Heading7 />
          <Paragraph8 />
        </div>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[484px] items-start overflow-clip relative rounded-[32px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 w-[405px]" data-name="Container">
      <Container31 />
      <Container33 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p14548f00} id="Vector" stroke="var(--stroke-0, #CC794D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p17781bc0} id="Vector_2" stroke="var(--stroke-0, #CC794D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container36() {
  return (
    <div className="bg-[rgba(255,255,255,0.9)] content-stretch flex gap-[6px] h-[28px] items-center px-[12px] py-[4px] relative rounded-[16777200px] shrink-0" data-name="Container">
      <Icon10 />
      <p className="font-['Jost:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0e4542] text-[14px] tracking-[0.7px] uppercase whitespace-nowrap">CENTRO</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col h-[28px] items-end pr-[16px] relative shrink-0 w-[405px]">
      <Container36 />
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col h-[256px] items-start overflow-clip py-[16px] relative shrink-0 w-full" data-name="Container">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgContainer2} />
      <Frame10 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[130px] relative size-full">
          <p className="font-['Amatic_SC:Bold',sans-serif] leading-[40px] not-italic relative shrink-0 text-[#0e4542] text-[36px] text-center whitespace-nowrap">Umbria</p>
        </div>
      </div>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="flex-[1_0_0] font-['Jost:Regular',sans-serif] font-normal leading-[28px] min-w-px relative text-[18px] text-[rgba(44,76,59,0.7)] text-center">{`Cascata delle Marmore, Assisi, Perugia, Spoleto, Lago Trasimeno e Isola Polvese. `}</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start justify-center p-[32px] relative size-full">
          <Heading8 />
          <Paragraph9 />
        </div>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[484px] items-start overflow-clip relative rounded-[32px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 w-[405px]" data-name="Container">
      <Container35 />
      <Container37 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p14548f00} id="Vector" stroke="var(--stroke-0, #CC794D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p17781bc0} id="Vector_2" stroke="var(--stroke-0, #CC794D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container40() {
  return (
    <div className="bg-[rgba(255,255,255,0.9)] content-stretch flex gap-[6px] h-[28px] items-center px-[12px] py-[4px] relative rounded-[16777200px] shrink-0" data-name="Container">
      <Icon11 />
      <p className="font-['Jost:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0e4542] text-[14px] tracking-[0.7px] uppercase whitespace-nowrap">CENTRO</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col h-[28px] items-end pr-[16px] relative shrink-0 w-[405px]">
      <Container40 />
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col h-[256px] items-start overflow-clip py-[16px] relative shrink-0 w-full" data-name="Container">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgContainer3} />
      <Frame11 />
    </div>
  );
}

function Heading9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[130px] relative size-full">
          <p className="font-['Amatic_SC:Bold',sans-serif] leading-[40px] not-italic relative shrink-0 text-[#0e4542] text-[36px] text-center whitespace-nowrap">{`Abruzzo `}</p>
        </div>
      </div>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="flex-[1_0_0] font-['Jost:Regular',sans-serif] font-normal leading-[28px] min-w-px relative text-[18px] text-[rgba(44,76,59,0.7)] text-center">{`Parco Nazionale di Lazio, Abruzzo e Molise, Centro visite dell'orso, Civitella Alfedena e i suoi lupi, riserva naturale de La Camosciara, centro visite Daini.`}</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start justify-center p-[32px] relative size-full">
          <Heading9 />
          <Paragraph10 />
        </div>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[32px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 w-[405.328px]" data-name="Container">
      <Container39 />
      <Container41 />
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p14548f00} id="Vector" stroke="var(--stroke-0, #CC794D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p17781bc0} id="Vector_2" stroke="var(--stroke-0, #CC794D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container44() {
  return (
    <div className="bg-[rgba(255,255,255,0.9)] content-stretch flex gap-[6px] h-[28px] items-center px-[12px] py-[4px] relative rounded-[16777200px] shrink-0" data-name="Container">
      <Icon12 />
      <p className="font-['Jost:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0e4542] text-[14px] tracking-[0.7px] uppercase whitespace-nowrap">CENTRO-NORD</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col h-[28px] items-end pr-[16px] relative shrink-0 w-[405px]">
      <Container44 />
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col h-[256px] items-start overflow-clip py-[16px] relative shrink-0 w-full" data-name="Container">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgContainer4} />
      <Frame12 />
    </div>
  );
}

function Heading10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[130px] relative size-full">
          <p className="font-['Amatic_SC:Bold',sans-serif] leading-[40px] not-italic relative shrink-0 text-[#0e4542] text-[36px] text-center whitespace-nowrap">Maremma</p>
        </div>
      </div>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="flex-[1_0_0] font-['Jost:Regular',sans-serif] font-normal leading-[28px] min-w-px relative text-[18px] text-[rgba(44,76,59,0.7)] text-center">{`Ecosistema della duna, Feniglia, Giardino dei tarocchi, Vulci, Volterra. `}</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start justify-center p-[32px] relative size-full">
          <Heading10 />
          <Paragraph11 />
        </div>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[484px] items-start overflow-clip relative rounded-[32px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 w-[405px]" data-name="Container">
      <Container43 />
      <Container45 />
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p14548f00} id="Vector" stroke="var(--stroke-0, #CC794D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p17781bc0} id="Vector_2" stroke="var(--stroke-0, #CC794D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container48() {
  return (
    <div className="bg-[rgba(255,255,255,0.9)] content-stretch flex gap-[6px] h-[28px] items-center px-[12px] py-[4px] relative rounded-[16777200px] shrink-0" data-name="Container">
      <Icon13 />
      <p className="font-['Jost:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0e4542] text-[14px] tracking-[0.7px] uppercase whitespace-nowrap">CENTRO-NORD</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col h-[28px] items-end pr-[16px] relative shrink-0 w-[405px]">
      <Container48 />
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col h-[256px] items-start overflow-clip py-[16px] relative shrink-0 w-full" data-name="Container">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgContainer5} />
      <Frame13 />
    </div>
  );
}

function Heading11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[130px] relative size-full">
          <p className="font-['Amatic_SC:Bold',sans-serif] leading-[40px] not-italic relative shrink-0 text-[#0e4542] text-[36px] text-center whitespace-nowrap">Monte Amiata</p>
        </div>
      </div>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="flex-[1_0_0] font-['Jost:Regular',sans-serif] font-normal h-full leading-[28px] min-w-px relative text-[18px] text-[rgba(44,76,59,0.7)] text-center">Museo Parco minerario Abbadia San Salvatore, Vetta monte Amiata, Siena.</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start justify-center p-[32px] relative size-full">
          <Heading11 />
          <Paragraph12 />
        </div>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[484px] items-start overflow-clip relative rounded-[32px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 w-[405px]" data-name="Container">
      <Container47 />
      <Container49 />
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p14548f00} id="Vector" stroke="var(--stroke-0, #CC794D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p17781bc0} id="Vector_2" stroke="var(--stroke-0, #CC794D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container52() {
  return (
    <div className="bg-[rgba(255,255,255,0.9)] content-stretch flex gap-[6px] h-[28px] items-center px-[12px] py-[4px] relative rounded-[16777200px] shrink-0" data-name="Container">
      <Icon14 />
      <p className="font-['Jost:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0e4542] text-[14px] tracking-[0.7px] uppercase whitespace-nowrap">CENTRO-NORD</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col h-[28px] items-end pr-[16px] relative shrink-0 w-[405px]">
      <Container52 />
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-col h-[256px] items-start overflow-clip py-[16px] relative shrink-0 w-full" data-name="Container">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgContainer6} />
      <Frame14 />
    </div>
  );
}

function Heading12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[130px] relative size-full">
          <p className="font-['Amatic_SC:Bold',sans-serif] leading-[40px] not-italic relative shrink-0 text-[#0e4542] text-[36px] text-center whitespace-nowrap">{`Toscana ed Emilia Romagna `}</p>
        </div>
      </div>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="flex-[1_0_0] font-['Jost:Regular',sans-serif] font-normal leading-[28px] min-w-px relative text-[18px] text-[rgba(44,76,59,0.7)] text-center">{`Arezzo e Santuario de La Verna, monte Fumaiolo e sorgenti del Tevere. `}</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start justify-center p-[32px] relative size-full">
          <Heading12 />
          <Paragraph13 />
        </div>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[484px] items-start overflow-clip relative rounded-[32px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 w-[405px]" data-name="Container">
      <Container51 />
      <Container53 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-center flex flex-wrap gap-[32px] items-center relative shrink-0 w-[1280px]">
      <Container26 />
      <Container30 />
      <Container34 />
      <Container38 />
      <Container42 />
      <Container46 />
      <Container50 />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start relative shrink-0 w-full" data-name="Container">
      <Container25 />
      <Frame6 />
    </div>
  );
}

function Destinations() {
  return (
    <div className="absolute bg-[#f9f6f0] content-stretch flex flex-col h-[1220px] items-start left-0 pt-[96px] px-[71.5px] top-[3532.09px] w-[1423px]" data-name="Destinations">
      <Container24 />
    </div>
  );
}

function App() {
  return (
    <div className="bg-[#f9f6f0] h-[5382px] relative shrink-0 w-full" data-name="App">
      <AboutUs />
      <Methodology />
      <Activities />
      <PctoSection />
      <Destinations />
    </div>
  );
}

function Heading13() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="-translate-x-1/2 absolute font-['Jost:Medium',sans-serif] font-medium leading-[36px] left-[336.04px] text-[#0e4542] text-[30px] text-center top-0 whitespace-nowrap">Richiedi informazioni</p>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Jost:Regular',sans-serif] font-normal leading-[28px] left-[335.79px] text-[18px] text-[rgba(14,69,66,0.7)] text-center top-[-0.5px] whitespace-nowrap">Lasciaci i tuoi dati e ti ricontatteremo per offrirti l’esperienza più adatta ale tue esigenze.</p>
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[76px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading13 />
      <Paragraph14 />
    </div>
  );
}

function Label() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Jost:Medium',sans-serif] font-medium leading-[24px] left-0 text-[#0e4542] text-[16px] top-[-0.5px] whitespace-nowrap">Nome *</p>
    </div>
  );
}

function TextInput() {
  return (
    <div className="bg-white h-[50px] relative rounded-[10px] shrink-0 w-full" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <p className="font-['Jost:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-[rgba(10,10,10,0.5)] whitespace-nowrap">Il tuo nome</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(14,69,66,0.2)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container57() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[82px] items-start left-0 top-0 w-[324px]" data-name="Container">
      <Label />
      <TextInput />
    </div>
  );
}

function Label1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Jost:Medium',sans-serif] font-medium leading-[24px] left-0 text-[#0e4542] text-[16px] top-[-0.5px] whitespace-nowrap">Cognome *</p>
    </div>
  );
}

function TextInput1() {
  return (
    <div className="bg-white h-[50px] relative rounded-[10px] shrink-0 w-full" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <p className="font-['Jost:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-[rgba(10,10,10,0.5)] whitespace-nowrap">Il tuo cognome</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(14,69,66,0.2)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container58() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[82px] items-start left-[348px] top-0 w-[324px]" data-name="Container">
      <Label1 />
      <TextInput1 />
    </div>
  );
}

function Container56() {
  return (
    <div className="h-[82px] relative shrink-0 w-full" data-name="Container">
      <Container57 />
      <Container58 />
    </div>
  );
}

function Label2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Jost:Medium',sans-serif] font-medium leading-[24px] left-0 text-[#0e4542] text-[16px] top-[-0.5px] whitespace-nowrap">Telefono *</p>
    </div>
  );
}

function PhoneInput() {
  return (
    <div className="bg-white h-[50px] relative rounded-[10px] shrink-0 w-full" data-name="Phone Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <p className="font-['Jost:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-[rgba(10,10,10,0.5)] whitespace-nowrap">+39 123 456 7890</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(14,69,66,0.2)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[82px] items-start relative shrink-0 w-full" data-name="Container">
      <Label2 />
      <PhoneInput />
    </div>
  );
}

function Label3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Jost:Medium',sans-serif] font-medium leading-[24px] left-0 text-[#0e4542] text-[16px] top-[-0.5px] whitespace-nowrap">Email *</p>
    </div>
  );
}

function EmailInput() {
  return (
    <div className="bg-white h-[50px] relative rounded-[10px] shrink-0 w-full" data-name="Email Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <p className="font-['Jost:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-[rgba(10,10,10,0.5)] whitespace-nowrap">tuaemail@esempio.com</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(14,69,66,0.2)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[82px] items-start relative shrink-0 w-full" data-name="Container">
      <Label3 />
      <EmailInput />
    </div>
  );
}

function Label4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Jost:Medium',sans-serif] font-medium leading-[24px] left-0 text-[#0e4542] text-[16px] top-[-0.5px] whitespace-nowrap">Tipo di attività *</p>
    </div>
  );
}

function Dropdown() {
  return (
    <div className="bg-white h-[51px] relative rounded-[10px] shrink-0 w-full" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border border-[rgba(14,69,66,0.2)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[83px] items-start relative shrink-0 w-full" data-name="Container">
      <Label4 />
      <Dropdown />
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#0e4542] h-[56px] relative rounded-[16777200px] shrink-0 w-full" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Jost:Medium',sans-serif] font-medium leading-[24px] left-[336.27px] text-[16px] text-center text-white top-[15.5px] whitespace-nowrap">Invia richiesta</p>
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[481px] items-start relative shrink-0 w-full" data-name="Form">
      <Container56 />
      <Container59 />
      <Container60 />
      <Container61 />
      <Button5 />
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] h-[589px] items-start relative shrink-0 w-full" data-name="Container">
      <Container55 />
      <Form />
    </div>
  );
}

function ContactForm() {
  return (
    <div className="bg-white h-[717px] relative shrink-0 w-full" data-name="ContactForm">
      <div className="content-stretch flex flex-col items-start pt-[64px] px-[375.5px] relative size-full">
        <Container54 />
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[1423px]" data-name="Body">
      <App />
      <ContactForm />
    </div>
  );
}

function Container64() {
  return (
    <div className="absolute h-[52px] left-0 top-0 w-[616px]" data-name="Container">
      <div className="absolute h-[32px] left-0 top-[6px] w-[245px]" data-name="Tavola disegno 9 copia 14@3x 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgTavolaDisegno9Copia143X1} />
      </div>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="absolute h-[87.75px] left-0 top-[68px] w-[448px]" data-name="Paragraph">
      <p className="absolute font-['Jost:Regular',sans-serif] font-normal leading-[29.25px] left-0 text-[18px] text-[rgba(249,246,240,0.8)] top-[-1px] w-[448px]">{`Cooperativa sociale specializzata nell'educazione ambientale e nell'accompagnamento in natura. Uniamo la conoscenza della natura a pratiche educative non formali.`}</p>
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M2.1665 10H13.8332" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.pc24a400} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p25623240} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container65() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.2)] content-stretch flex gap-[10px] items-center justify-center left-0 px-[24px] py-[9px] rounded-[16777200px] top-[195.75px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <p className="font-['Jost:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[16px] text-white whitespace-nowrap">Proposte per le Scuole 2026/2027</p>
      <div className="flex items-center justify-center relative shrink-0 size-[20px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <Icon15 />
        </div>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="absolute h-[237.75px] left-0 top-0 w-[616px]" data-name="Container">
      <Container64 />
      <Paragraph15 />
      <Container65 />
    </div>
  );
}

function Heading14() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Amatic_SC:Bold',sans-serif] leading-[36px] left-0 not-italic text-[30px] text-white top-0 whitespace-nowrap">Esplora</p>
    </div>
  );
}

function ListItem() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Jost:Regular',sans-serif] font-normal leading-[28px] left-0 text-[18px] text-[rgba(249,246,240,0.8)] top-[-0.5px] whitespace-nowrap">Chi Siamo</p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Jost:Regular',sans-serif] font-normal leading-[28px] left-0 text-[18px] text-[rgba(249,246,240,0.8)] top-[-0.5px] whitespace-nowrap">Le Nostre Attività</p>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Jost:Regular',sans-serif] font-normal leading-[28px] left-0 text-[18px] text-[rgba(249,246,240,0.8)] top-[-0.5px] whitespace-nowrap">Destinazioni</p>
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[116px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
    </div>
  );
}

function Container66() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[237.75px] items-start left-[664px] top-0 w-[284px]" data-name="Container">
      <Heading14 />
      <List />
    </div>
  );
}

function Heading15() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Amatic_SC:Bold',sans-serif] leading-[36px] left-0 not-italic text-[30px] text-white top-0 whitespace-nowrap">Contatti</p>
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.pd919a80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p189c1170} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Link() {
  return (
    <div className="h-[28px] relative shrink-0 w-[203.781px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Jost:Regular',sans-serif] font-normal leading-[28px] left-0 text-[18px] text-[rgba(249,246,240,0.8)] top-[-0.5px] whitespace-nowrap">scuole@coopmantarei.com</p>
      </div>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="content-stretch flex gap-[12px] h-[28px] items-center relative shrink-0 w-full" data-name="List Item">
      <Icon16 />
      <Link />
    </div>
  );
}

function Link1() {
  return (
    <div className="h-[28px] relative shrink-0 w-[209.18px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Jost:Regular',sans-serif] font-normal leading-[28px] left-0 text-[18px] text-[rgba(249,246,240,0.8)] top-[-0.5px] whitespace-nowrap">+39 333 1234567</p>
      </div>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="content-stretch flex gap-[12px] h-[28px] items-center relative shrink-0 w-full" data-name="List Item">
      <div className="relative shrink-0 size-[20px]" data-name="Communication & Messaging/call">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute inset-[10.79%_10.57%_10.21%_10.6%]" data-name="Vector">
            <div className="absolute inset-[-4.75%_-4.76%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.2674 17.3011">
                <path d={svgPaths.pee48480} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Link1 />
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem3 />
      <ListItem4 />
    </div>
  );
}

function Container67() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[237.75px] items-start left-[996px] top-0 w-[284px]" data-name="Container">
      <Heading15 />
      <List1 />
    </div>
  );
}

function Container62() {
  return (
    <div className="absolute border-[rgba(249,246,240,0.2)] border-b border-solid h-[302.75px] left-[71.5px] top-[80px] w-[1280px]" data-name="Container">
      <Container63 />
      <Container66 />
      <Container67 />
    </div>
  );
}

function Container68() {
  return (
    <div className="absolute h-[20px] left-[24px] top-[446.75px] w-[1375px]" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Jost:Regular',sans-serif] font-normal leading-[20px] left-[687.91px] text-[14px] text-[rgba(249,246,240,0.5)] text-center top-[-0.5px] whitespace-nowrap">© 2026 Manta Rei Cooperativa Sociale. Tutti i diritti riservati.</p>
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-[#0e4542] h-[506.75px] left-0 rounded-tl-[48px] rounded-tr-[48px] top-[6099px] w-[1423px]" data-name="Footer">
      <Container62 />
      <Container68 />
    </div>
  );
}

function Hero() {
  return (
    <div className="absolute h-[818.094px] left-0 overflow-clip top-0 w-[1423px]" data-name="Hero">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgHero} />
        <div className="absolute bg-[rgba(44,76,59,0.5)] inset-0" />
      </div>
      <p className="-translate-x-1/2 absolute font-['Amatic_SC:Bold',sans-serif] leading-[96px] left-[711.5px] not-italic text-[96px] text-center text-white top-[302.55px] tracking-[2.4px] w-[848px]">Riscoprire, Esplorare, Imparare</p>
      <p className="-translate-x-1/2 absolute font-['Jost:Medium',sans-serif] font-medium leading-[39px] left-[711.5px] text-[24px] text-[rgba(255,255,255,0.9)] text-center top-[518.05px] w-[768px]">Uniamo la conoscenza della natura a pratiche educative non formali per il benessere degli esseri umani e degli ecosistemi.</p>
    </div>
  );
}

function Link2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[72.156px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Jost:Medium',sans-serif] font-medium leading-[24px] left-0 text-[#0e4542] text-[16px] top-[-0.5px] whitespace-nowrap">Chi Siamo</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="h-[24px] relative shrink-0 w-[48.328px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Jost:Medium',sans-serif] font-medium leading-[24px] left-0 text-[#0e4542] text-[16px] top-[-0.5px] whitespace-nowrap">Attività</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="h-[24px] relative shrink-0 w-[86.047px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Jost:Medium',sans-serif] font-medium leading-[24px] left-0 text-[#0e4542] text-[16px] top-[-0.5px] whitespace-nowrap">Destinazioni</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="bg-[#0e4542] flex-[1_0_0] h-[44px] min-w-px relative rounded-[16777200px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Jost:Medium',sans-serif] font-medium leading-[24px] left-[24px] text-[16px] text-white top-[9.5px] whitespace-nowrap">Contattaci</p>
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="h-[44px] relative shrink-0 w-[420.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] items-center relative size-full">
        <Link2 />
        <Link3 />
        <Link4 />
        <Link5 />
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="h-[80px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[24px] relative size-full">
          <div className="h-[32px] relative shrink-0 w-[245px]" data-name="Tavola disegno 9 copia 14@3x 1">
            <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgTavolaDisegno9Copia143X2} />
          </div>
          <Container70 />
        </div>
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <div className="absolute bg-[rgba(249,246,240,0.9)] content-stretch flex flex-col items-start left-0 pb-px px-[71.5px] top-0 w-[1423px]" data-name="Navbar">
      <div aria-hidden="true" className="absolute border-[rgba(44,76,59,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <Container69 />
    </div>
  );
}

export default function Homepage() {
  return (
    <div className="bg-white relative size-full" data-name="homepage">
      <Body />
      <Footer />
      <Hero />
      <Navbar />
    </div>
  );
}