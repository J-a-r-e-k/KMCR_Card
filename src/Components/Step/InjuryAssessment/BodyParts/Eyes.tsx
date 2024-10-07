import Style from '../InjuryAssessment.module.scss';

export const EyeLeft = ({
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
      <g clip-path="url(#8afa2e1fd1)">
        <g
          className={currentActiveElement === 'leftEye' ? Style.active : ''}
          clip-path="url(#d599276457)"
        >
          <path
            fill="#ffffff"
            d="M 238.0625 26.539062 L 256.523438 26.539062 L 256.523438 45.003906 L 238.0625 45.003906 Z M 238.0625 26.539062 "
            fill-opacity="1"
            fill-rule="nonzero"
            onClick={() => {
              active('leftEye');
            }}
          />
        </g>
      </g>
      <g
      //  clip-path="url(#d84fc26f46)"
      >
        <g clip-path="url(#d3afa015b5)">
          <path
            stroke-linecap="butt"
            transform="matrix(0.75, 0, 0, 0.75, 238.061913, 26.540485)"
            fill="none"
            stroke-linejoin="miter"
            d="M 12.302867 -0.00189617 C 5.5112 -0.00189617 0.00078231 5.508521 0.00078231 12.305397 C 0.00078231 19.102273 5.5112 24.607481 12.302867 24.607481 C 19.099743 24.607481 24.61016 19.102273 24.61016 12.305397 C 24.61016 5.508521 19.099743 -0.00189617 12.302867 -0.00189617 Z M 12.302867 -0.00189617 "
            stroke="#000000"
            stroke-width="6"
            stroke-opacity="1"
            stroke-miterlimit="4"
          />
        </g>
        <foreignObject
          x="275"
          y="10"
          width="50"
          height="30"
          pointerEvents="none"
        >
          <div className={`${Style.svgInjuryText} ${Style.referenceInjury}`}>
            {value ? <p>{value}</p> : ''}
          </div>
        </foreignObject>
        <path
          d="M 250 38 L 275.5 39.5 "
          stroke={value ? 'black' : ''}
          stroke-width="1"
          fill="none"
        />
      </g>
    </>
  );
};
export const EyeRight = ({
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
      <g clip-path="url(#43947fb556)">
        <g
          className={currentActiveElement === 'rightEye' ? Style.active : ''}
          clip-path="url(#ac39f0d133)"
        >
          <path
            fill="#ffffff"
            d="M 200.296875 26.539062 L 218.761719 26.539062 L 218.761719 45.003906 L 200.296875 45.003906 Z M 200.296875 26.539062 "
            fill-opacity="1"
            fill-rule="nonzero"
            onClick={() => {
              active('rightEye');
            }}
          />
        </g>
      </g>
      <g
      // clip-path="url(#5369eaec91)"
      >
        <g clip-path="url(#4a354b5cd0)">
          <path
            stroke-linecap="butt"
            transform="matrix(0.75, 0, 0, 0.75, 200.298215, 26.540485)"
            fill="none"
            stroke-linejoin="miter"
            d="M 12.305506 -0.00189617 C 5.508631 -0.00189617 -0.00178651 5.508521 -0.00178651 12.305397 C -0.00178651 19.102273 5.508631 24.607481 12.305506 24.607481 C 19.102382 24.607481 24.607591 19.102273 24.607591 12.305397 C 24.607591 5.508521 19.102382 -0.00189617 12.305506 -0.00189617 Z M 12.305506 -0.00189617 "
            stroke="#000000"
            stroke-width="6"
            stroke-opacity="1"
            stroke-miterlimit="4"
          />
        </g>
        <foreignObject
          x="132"
          y="10"
          width="50"
          height="30"
          pointerEvents="none"
        >
          <div
            className={`${Style.svgInjuryText} ${Style.referenceInjury} ${Style.referenceInjuryLeft}`}
          >
            {value ? <p>{value}</p> : ''}
          </div>
        </foreignObject>
        <path
          d="M 205 38 L 180.5 39.5 "
          stroke={value ? 'black' : ''}
          stroke-width="1"
          fill="none"
        />
      </g>
    </>
  );
};
