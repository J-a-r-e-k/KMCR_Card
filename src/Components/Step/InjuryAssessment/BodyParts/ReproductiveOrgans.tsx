import { useAppContext } from '../../../../context/AppContext';
import Style from '../InjuryAssessment.module.scss';

export const ReproductiveOrgans = ({
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
      <g clip-path="url(#10f8746748)">
        <g
          className={
            currentActiveElement === 'reproductiveOrgans' ? Style.active : ''
          }
          clip-path="url(#226ea7b171)"
        >
          <path
            fill="#ffffff"
            d="M 193.097656 327.601562 L 261.796875 327.601562 L 261.796875 360.292969 L 193.097656 360.292969 Z M 193.097656 327.601562 "
            fill-opacity="1"
            fill-rule="nonzero"
            onClick={(e) => {
              active(e, 'reproductiveOrgans');
            }}
          />
        </g>
      </g>
      <g
      //   clip-path="url(#2f97823a56)"
      >
        <g clip-path="url(#8965c22935)">
          <path
            stroke-linecap="butt"
            transform="matrix(0.75, 0, 0, 0.75, 193.098654, 327.602965)"
            fill="none"
            stroke-linejoin="miter"
            d="M 45.779924 43.576259 L 91.555971 -0.0018703 L -0.00133085 -0.0018703 Z M 45.779924 43.576259 "
            stroke="#000000"
            stroke-width="6"
            stroke-opacity="1"
            stroke-miterlimit="4"
          />
        </g>
        <foreignObject
          x="293"
          y="320"
          width="30"
          height="60"
          pointerEvents="none"
        >
          <div className={`${Style.svgInjuryText} `}>
            {appContext.injuryAssessment.reproductiveOrgans ? (
              <p className={Style.referenceInjuryBorder}>{value}</p>
            ) : (
              ''
            )}
          </div>
        </foreignObject>
        <path
          d="M 230 340 L 293 345 "
          stroke={appContext.injuryAssessment.reproductiveOrgans ? 'black' : ''}
          stroke-width="1"
          fill="none"
        />
      </g>
    </>
  );
};
