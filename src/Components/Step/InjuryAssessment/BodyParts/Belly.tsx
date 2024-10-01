import Style from '../InjuryAssessment.module.scss';

export const BellyLeft = ({
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
      {' '}
      <g
        className={currentActiveElement === 'bellyL' ? Style.active : ''}
        clip-path="url(#65321abd1a)"
      >
        <path
          fill="#ffffff"
          d="M 225.109375 250.046875 L 282.722656 250.046875 L 282.722656 302.347656 L 225.109375 302.347656 Z M 225.109375 250.046875 "
          fill-opacity="1"
          fill-rule="nonzero"
          onClick={(e) => {
            active(e, 'bellyL');
          }}
        />
      </g>
      <g clip-path="url(#6f46be1a8b)">
        <path
          stroke-linecap="butt"
          transform="matrix(0.75, 0, 0, 0.75, 225.107832, 250.049921)"
          fill="none"
          stroke-linejoin="miter"
          d="M 0.00205704 0.00114763 L 76.736435 0.00114763 L 76.736435 69.725109 L 0.00205704 69.725109 Z M 0.00205704 0.00114763 "
          stroke="#000000"
          stroke-width="6"
          stroke-opacity="1"
          stroke-miterlimit="4"
        />
        <foreignObject
          x="227"
          y="250"
          width="55"
          height="38"
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

export const BellyRight = ({
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
        className={currentActiveElement === 'bellyR' ? Style.active : ''}
        clip-path="url(#1b91f36697)"
      >
        <path
          fill="#ffffff"
          d="M 173.839844 250.046875 L 228.171875 250.046875 L 228.171875 302.933594 L 173.839844 302.933594 Z M 173.839844 250.046875 "
          fill-opacity="1"
          fill-rule="nonzero"
          onClick={(e) => {
            active(e, 'bellyR');
          }}
        />
      </g>
      <g clip-path="url(#f1b50ce814)">
        <path
          stroke-linecap="butt"
          transform="matrix(0.75, 0, 0, 0.75, 173.842493, 250.04711)"
          fill="none"
          stroke-linejoin="miter"
          d="M 0.00167626 -0.000313508 L 72.538138 -0.000313508 L 72.538138 70.499689 L 0.00167626 70.499689 Z M 0.00167626 -0.000313508 "
          stroke="#000000"
          stroke-width="6"
          stroke-opacity="1"
          stroke-miterlimit="4"
        />
        <foreignObject
          x="170"
          y="250"
          width="55"
          height="38"
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
