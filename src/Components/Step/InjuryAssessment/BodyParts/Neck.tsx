import Style from '../InjuryAssessment.module.scss';
export const Neck = ({
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
        className={currentActiveElement === 'neck' ? Style.active : ''}
        // clip-path="url(#1e562fb9a3)"
      >
        <path
          fill="#ffffff"
          d="M 205.335938 76.703125 L 249.917969 76.703125 L 249.917969 125.640625 L 205.335938 125.640625 Z M 205.335938 76.703125 "
          fill-opacity="1"
          fill-rule="nonzero"
          onClick={() => {
            active('neck');
          }}
        />
        <foreignObject
          x="192"
          y="90"
          width="70"
          height="35"
          pointerEvents="none"
        >
          <div className={Style.svgInjuryText}>
            <p>{value}</p>
          </div>
        </foreignObject>
      </g>
      <g clip-path="url(#73d9e59082)">
        <path
          stroke-linecap="butt"
          transform="matrix(0.75, 0, 0, 0.75, 205.335474, 76.705322)"
          fill="none"
          stroke-linejoin="miter"
          d="M 0.000618181 0.00227856 L 59.438121 0.00227856 L 59.438121 65.200198 L 0.000618181 65.200198 Z M 0.000618181 0.00227856 "
          stroke="#000000"
          stroke-width="6"
          stroke-opacity="1"
          stroke-miterlimit="4"
        />
      </g>
    </>
  );
};

export const NeckBack = ({
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
        className={currentActiveElement === 'neckBack' ? Style.active : ''}
        // clip-path="url(#5e74fc53b2)"
      >
        <path
          fill="#ffffff"
          d="M 205.609375 76.988281 L 249.917969 76.988281 L 249.917969 125.972656 L 205.609375 125.972656 Z M 205.609375 76.988281 "
          fill-opacity="1"
          fill-rule="nonzero"
          onClick={() => {
            active('neckBack');
          }}
        />
        <foreignObject
          x="252"
          y="85"
          width="45"
          height="35"
          pointerEvents="none"
        >
          <div className={`${Style.svgInjuryText} ${Style.referenceInjury}`}>
            {value ? <p>{value}</p> : ''}
          </div>
        </foreignObject>
        <path
          d="M 240 110 L 251.8 119.5 "
          stroke={value ? 'black' : ''}
          stroke-width="1"
          fill="none"
        />
      </g>
      <g clip-path="url(#b2e2bd7ee8)">
        <path
          stroke-linecap="butt"
          transform="matrix(0.75, 0, 0, 0.75, 205.608479, 76.989334)"
          fill="none"
          stroke-linejoin="miter"
          d="M 0.00119513 -0.00140302 L 59.074111 -0.00140302 L 59.074111 65.201721 L 0.00119513 65.201721 Z M 0.00119513 -0.00140302 "
          stroke="#000000"
          stroke-width="8"
          stroke-opacity="1"
          stroke-miterlimit="4"
        />
      </g>
    </>
  );
};
