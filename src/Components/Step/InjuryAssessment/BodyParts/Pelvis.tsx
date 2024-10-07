import Style from '../InjuryAssessment.module.scss';

export const Pelvis = ({
  active,
  currentActiveElement,
  value,
}: {
  currentActiveElement?: string;
  active: (part: string) => void;
  value: string;
}) => {
  return (
    <>
      <g
        className={currentActiveElement === 'pelvis' ? Style.active : ''}
        // clip-path="url(#5c52b86c1e)"
      >
        <path
          fill="#ffffff"
          d="M 192.378906 294.238281 L 260.988281 294.238281 L 260.988281 330.90625 L 192.378906 330.90625 Z M 192.378906 294.238281 "
          fill-opacity="1"
          fill-rule="nonzero"
          onClick={() => {
            active('pelvis');
          }}
        />
        <foreignObject
          x="293"
          y="280"
          width="31"
          height="45"
          pointerEvents="none"
        >
          <div className={`${Style.svgInjuryText}  ${Style.referenceInjury} `}>
            {value ? <p>{value}</p> : ''}
          </div>
        </foreignObject>
        <path
          d="M 240 323 L 292.5 325 "
          stroke={value ? 'black' : ''}
          stroke-width="1"
          fill="none"
        />
      </g>
      <g clip-path="url(#7a17289b17)">
        <path
          stroke-linecap="butt"
          transform="matrix(0.75, 0, 0, 0.75, 192.379797, 294.238044)"
          fill="none"
          stroke-linejoin="miter"
          d="M -0.00118742 0.000316006 L 91.545691 0.000316006 L 91.545691 48.890943 L -0.00118742 48.890943 Z M -0.00118742 0.000316006 "
          stroke="#000000"
          stroke-width="8"
          stroke-opacity="1"
          stroke-miterlimit="4"
        />
      </g>
    </>
  );
};
