import Style from '../InjuryAssessment.module.scss';

export const Face = ({
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
      <g clip-path="url(#c45697694c)">
        <g
          className={currentActiveElement === 'face' ? Style.active : ''}
          clip-path="url(#3f7defe887)"
        >
          <path
            fill="#ffffff"
            d="M 183.253906 2.957031 L 273.25 2.957031 L 273.25 92.953125 L 183.253906 92.953125 Z M 183.253906 2.957031 "
            fill-opacity="1"
            fill-rule="nonzero"
            onClick={(e) => {
              active(e, 'face');
            }}
          />
        </g>
      </g>
      <g clip-path="url(#7a6cdac304)">
        <g clip-path="url(#426735efc3)">
          <path
            stroke-linecap="butt"
            transform="matrix(0.75, 0, 0, 0.75, 183.254772, 2.956624)"
            fill="none"
            stroke-linejoin="miter"
            d="M 59.99364 0.000542859 C 26.858222 0.000542859 -0.00115381 26.859919 -0.00115381 59.990129 C -0.00115381 93.125547 26.858222 119.984923 59.99364 119.984923 C 93.12385 119.984923 119.983226 93.125547 119.983226 59.990129 C 119.983226 26.859919 93.12385 0.000542859 59.99364 0.000542859 Z M 59.99364 0.000542859 "
            stroke="#000000"
            stroke-width="8"
            stroke-opacity="1"
            stroke-miterlimit="4"
          />
        </g>
        <foreignObject
          x="185"
          y="0"
          width="85"
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
