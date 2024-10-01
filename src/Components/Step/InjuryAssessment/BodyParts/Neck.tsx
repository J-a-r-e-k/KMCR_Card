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
          onClick={(e) => {
            active(e, 'neck');
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
