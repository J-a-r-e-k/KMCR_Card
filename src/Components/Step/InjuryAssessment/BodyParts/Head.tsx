import Style from '../InjuryAssessment.module.scss';

export const Head = ({
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
      <g clip-path="url(#494a5d8c5a)">
        <g
          className={currentActiveElement === 'head' ? Style.active : ''}
          clip-path="url(#09b09af80e)"
        >
          <path
            fill="#ffffff"
            d="M 183.253906 3.242188 L 273.25 3.242188 L 273.25 93.238281 L 183.253906 93.238281 Z M 183.253906 3.242188 "
            fill-opacity="1"
            fill-rule="nonzero"
            onClick={() => {
              active('head');
            }}
          />
        </g>
        <foreignObject
          x="203"
          y="22"
          width="50"
          height="50"
          pointerEvents="none"
        >
          <div className={Style.svgInjuryText}>
            <p>{value}</p>
          </div>
        </foreignObject>
      </g>
      <g clip-path="url(#935d0cb807)">
        <g clip-path="url(#4054e35d90)">
          <path
            stroke-linecap="butt"
            transform="matrix(0.75, 0, 0, 0.75, 183.254772, 3.241426)"
            fill="none"
            stroke-linejoin="miter"
            d="M 59.99364 0.00101518 C 26.858222 0.00101518 -0.00115381 26.860391 -0.00115381 59.990601 C -0.00115381 93.126019 26.858222 119.985395 59.99364 119.985395 C 93.12385 119.985395 119.983226 93.126019 119.983226 59.990601 C 119.983226 26.860391 93.12385 0.00101518 59.99364 0.00101518 Z M 59.99364 0.00101518 "
            stroke="#000000"
            stroke-width="8"
            stroke-opacity="1"
            stroke-miterlimit="4"
          />
        </g>
      </g>
    </>
  );
};
