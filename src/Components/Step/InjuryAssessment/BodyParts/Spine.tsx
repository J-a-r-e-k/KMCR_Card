import { useAppContext } from '../../../../context/AppContext';
import Style from '../InjuryAssessment.module.scss';

export const SpineCervical = ({
  active,
  currentActiveElement,
  value,
}: {
  currentActiveElement?: string;
  active: (part: string) => void;
  value: string;
}) => {
  const appContext = useAppContext();
  return (
    <>
      <g
        className={currentActiveElement === 'spineCervical' ? Style.active : ''}
        // clip-path="url(#851bbb445d)"
      >
        <path
          fill="#ffffff"
          d="M 220.609375 76.988281 L 234.917969 76.988281 L 234.917969 125.90625 L 220.609375 125.90625 Z M 220.609375 76.988281 "
          fill-opacity="1"
          fill-rule="nonzero"
          onClick={() => {
            active('spineCervical');
          }}
        />
        <foreignObject
          x="140"
          y="75"
          width="50"
          height="35"
          pointerEvents="none"
        >
          <div
            className={`${Style.svgInjuryText} ${Style.referenceInjury} ${Style.referenceInjuryLeft}`}
          >
            {value ? <p>{value}</p> : ''}
          </div>
        </foreignObject>
        <path
          d="M 227 115 L 190 109.5 "
          stroke={appContext.injuryAssessment.spineCervical ? 'black' : ''}
          stroke-width="1"
          fill="none"
        />
      </g>
      <g clip-path="url(#1d204dfbb4)">
        <path
          stroke-linecap="butt"
          transform="matrix(0.75, 0, 0, 0.75, 220.607832, 76.991729)"
          fill="none"
          stroke-linejoin="miter"
          d="M 0.00205678 0.000611713 L 19.080181 0.000611713 L 19.080181 65.198527 L 0.00205678 65.198527 Z M 0.00205678 0.000611713 "
          stroke="#000000"
          stroke-width="8"
          stroke-opacity="1"
          stroke-miterlimit="4"
        />
      </g>
    </>
  );
};

export const SpineThoracic = ({
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
        className={currentActiveElement === 'spineThoracic' ? Style.active : ''}
        // clip-path="url(#6c659188b6)"
      >
        <path
          fill="#ffffff"
          d="M 221.097656 121.957031 L 235.40625 121.957031 L 235.40625 254.617188 L 221.097656 254.617188 Z M 221.097656 121.957031 "
          fill-opacity="1"
          fill-rule="nonzero"
          onClick={() => {
            active('spineThoracic');
          }}
        />
        <foreignObject
          x="223.3"
          y="125"
          width="10"
          height="120"
          pointerEvents="none"
        >
          <div className={Style.svgInjuryText}>
            <p>{value}</p>
          </div>
        </foreignObject>
      </g>
      <g clip-path="url(#ec8c710352)">
        <path
          stroke-linecap="butt"
          transform="matrix(0.75, 0, 0, 0.75, 221.096796, 121.964276)"
          fill="none"
          stroke-linejoin="miter"
          d="M 0.00114648 0.000757538 L 19.079271 0.000757538 L 19.079271 176.870545 L 0.00114648 176.870545 Z M 0.00114648 0.000757538 "
          stroke="#000000"
          stroke-width="8"
          stroke-opacity="1"
          stroke-miterlimit="4"
        />
      </g>
    </>
  );
};

export const SpineLumbar = ({
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
        className={currentActiveElement === 'spineLumbar' ? Style.active : ''}
        clip-path="url(#f15559cdbb)"
      >
        <path
          fill="#ffffff"
          d="M 220.609375 247.085938 L 234.917969 247.085938 L 234.917969 299.410156 L 220.609375 299.410156 Z M 220.609375 247.085938 "
          fill-opacity="1"
          fill-rule="nonzero"
          onClick={() => {
            active('spineLumbar');
          }}
        />
      </g>
      <g clip-path="url(#4016b10a4c)">
        <path
          stroke-linecap="butt"
          transform="matrix(0.75, 0, 0, 0.75, 220.607832, 247.089823)"
          fill="none"
          stroke-linejoin="miter"
          d="M 0.00205678 0.00002759 L 19.080181 0.00002759 L 19.080181 69.723984 L 0.00205678 69.723984 Z M 0.00205678 0.00002759 "
          stroke="#000000"
          stroke-width="6"
          stroke-opacity="1"
          stroke-miterlimit="4"
        />
      </g>
      <foreignObject
        x="223"
        y="245"
        width="10"
        height="50"
        pointerEvents="none"
      >
        <div className={Style.svgInjuryText}>
          <p>{value}</p>
        </div>
      </foreignObject>
    </>
  );
};

export const Sacrum = ({
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
        className={currentActiveElement === 'sacrum' ? Style.active : ''}
        // clip-path="url(#05f8fb2feb)"
      >
        <path
          fill="#ffffff"
          d="M 220.609375 294.238281 L 234.917969 294.238281 L 234.917969 330.40625 L 220.609375 330.40625 Z M 220.609375 294.238281 "
          fill-opacity="1"
          fill-rule="nonzero"
          onClick={() => {
            active('sacrum');
          }}
        />
        <foreignObject
          x="136.5"
          y="320"
          width="29"
          height="45"
          pointerEvents="none"
        >
          <div className={`${Style.svgInjuryText} `}>
            {value ? (
              <p className={Style.referenceInjuryBorder}>{value}</p>
            ) : (
              ''
            )}
          </div>
        </foreignObject>
        <path
          d="M 226 320 L 165 345 "
          stroke={value ? 'black' : ''}
          stroke-width="1"
          fill="none"
        />
      </g>
      <g clip-path="url(#2736968074)">
        <path
          stroke-linecap="butt"
          transform="matrix(0.75, 0, 0, 0.75, 220.608375, 294.237487)"
          fill="none"
          stroke-linejoin="miter"
          d="M 0.00133358 0.00105841 L 19.074252 0.00105841 L 19.074252 48.204189 L 0.00133358 48.204189 Z M 0.00133358 0.00105841 "
          stroke="#000000"
          stroke-width="6"
          stroke-opacity="1"
          stroke-miterlimit="4"
        />
      </g>
    </>
  );
};
