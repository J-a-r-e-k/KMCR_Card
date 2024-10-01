import Style from '../InjuryAssessment.module.scss';

export const Hypogastrium = ({
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
        className={currentActiveElement === 'hypogastrium' ? Style.active : ''}
        clip-path="url(#97d9544571)"
      >
        <path
          fill="#ffffff"
          d="M 192.378906 293.953125 L 260.988281 293.953125 L 260.988281 330.621094 L 192.378906 330.621094 Z M 192.378906 293.953125 "
          fill-opacity="1"
          fill-rule="nonzero"
          onClick={(e) => {
            active(e, 'hypogastrium');
          }}
        />
      </g>
      <g clip-path="url(#5809de9efc)">
        <path
          stroke-linecap="butt"
          transform="matrix(0.75, 0, 0, 0.75, 192.379797, 293.953219)"
          fill="none"
          stroke-linejoin="miter"
          d="M -0.00118742 -0.000125944 L 91.545691 -0.000125944 L 91.545691 48.890501 L -0.00118742 48.890501 Z M -0.00118742 -0.000125944 "
          stroke="#000000"
          stroke-width="8"
          stroke-opacity="1"
          stroke-miterlimit="4"
        />
        <foreignObject
          x="200"
          y="296"
          width="55"
          height="30"
          pointerEvents="none"
        >
          <div className={Style.svgInjuryText}>
            <p>{value}</p>
          </div>
        </foreignObject>
      </g>
    </>
  );
};
