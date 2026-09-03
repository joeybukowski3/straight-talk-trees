/** Original CSS/SVG backdrop. Suggests Charlotte without copied skyline art. */
export function CharlotteHeroBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <svg
        className="absolute inset-x-0 bottom-0 h-[58%] w-full min-h-[11rem] text-[color:var(--forest-foreground)] sm:h-[66%]"
        viewBox="0 0 1440 360"
        preserveAspectRatio="xMidYMax slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="currentColor" opacity="0.2">
          <rect x="48" y="214" width="36" height="146" />
          <rect x="90" y="188" width="44" height="172" />
          <rect x="142" y="228" width="28" height="132" />
          <rect x="248" y="176" width="40" height="184" />
          <rect x="294" y="204" width="52" height="156" />
          <rect x="352" y="168" width="38" height="192" />
          <rect x="430" y="196" width="46" height="164" />
          <rect x="980" y="186" width="50" height="174" />
          <rect x="1038" y="214" width="36" height="146" />
          <rect x="1082" y="172" width="44" height="188" />
          <rect x="1188" y="208" width="40" height="152" />
          <rect x="1234" y="190" width="54" height="170" />
          <rect x="1296" y="226" width="32" height="134" />
          <rect x="1336" y="204" width="42" height="156" />
        </g>

        <g fill="currentColor" opacity="0.32">
          {/* Slender residential tower with needle */}
          <rect x="178" y="142" width="34" height="218" />
          <polygon points="195,78 199,142 191,142" />

          {/* Mid-rise cluster west of center */}
          <rect x="484" y="128" width="58" height="232" />
          <path d="M490 128h46v-16h-8v-10h-30v10h-8z" />

          {/* Tallest tower — stepped crown and center spire */}
          <rect x="586" y="72" width="72" height="288" />
          <path d="M594 72h56v-18h-8l-8-22h-8v-28h-8v28h-8l-8 22h-8z" />
          <rect x="618" y="4" width="8" height="28" />

          {/* Diamond-crown tower */}
          <rect x="678" y="108" width="58" height="252" />
          <polygon points="707,58 736,108 678,108" />

          {/* Flared-crown tower */}
          <rect x="756" y="96" width="66" height="264" />
          <path d="M764 96h50l8-16h-66z" />

          {/* Broad modern tower */}
          <rect x="844" y="88" width="78" height="272" />
          <rect x="858" y="74" width="50" height="14" />

          {/* East mid-rise with small cap */}
          <rect x="1128" y="136" width="48" height="224" />
          <polygon points="1152,104 1176,136 1128,136" />
        </g>

        <g fill="currentColor" opacity="0.5">
          <ellipse cx="70" cy="338" rx="78" ry="46" />
          <ellipse cx="170" cy="348" rx="64" ry="38" />
          <polygon points="250,360 292,214 334,360" />
          <ellipse cx="390" cy="344" rx="90" ry="52" />
          <polygon points="470,360 504,236 538,360" />
          <ellipse cx="620" cy="352" rx="110" ry="44" />
          <ellipse cx="820" cy="346" rx="96" ry="50" />
          <polygon points="910,360 948,228 986,360" />
          <ellipse cx="1080" cy="348" rx="88" ry="46" />
          <polygon points="1188,360 1224,242 1260,360" />
          <ellipse cx="1348" cy="350" rx="92" ry="48" />
        </g>
      </svg>
    </div>
  );
}
