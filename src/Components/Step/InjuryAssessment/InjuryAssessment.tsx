import Style from './InjuryAssessment.module.scss';
import { FormNavigation } from '../../Section/FormNavigation/FormNavigation';
import { Formik, Field } from 'formik';
import { useAppContext } from '../../../context/AppContext';
import { useState } from 'react';
import { InjurySVG } from './InjurySVG';
// import { useAppContext } from '../../../context/AppContext';
// import { useEffect } from 'react';

// onClick={() => {
//   active('face');
// }}
// />
// <text x="160" y="70" fill="black" fontSize="20">
// {appContext.injuryAssessment.face}
// </text>

const InjuryAssessment = () => {
  const appContext = useAppContext();
  // const appContext = useAppContext();

  // function cos(event) {
  //   // const centerX =
  //   //   event.target.closest('svg').getBoundingClientRect().left +
  //   //   event.target.getBBox().x;
  //   // console.log(event.target.getBBox().width);
  //   // const centerY =
  //   //   event.target.closest('svg').getBoundingClientRect().top +
  //   //   event.target.getBBox().y +
  //   //   event.target.getBBox().height / 2;

  //   const centerX = event.clientX;
  //   const centerY = event.clientY;

  //   const newDiv = document.createElement('div');
  //   newDiv.classList.add(Style.yyy);
  //   newDiv.textContent = 'Środek';
  //   newDiv.style.left = `${centerX}px`; // Ustawienie pozycji X
  //   newDiv.style.top = `${centerY}px`; // Ustawienie pozycji Y

  //   document.body.appendChild(newDiv);
  // }

  const [currentActiveElement, setCurrentAcitveElement] = useState<
    string | undefined
  >(undefined);

  const onRanaButtonClick = (type: string) => {
    // zapiszesz do app Contenxt
    // currentActiveElement -> info o czesci ciala
    // type -> typ rany
    //frontAnkleRF
    // appContext.setInjuryAssessment({
    //   [currentActiveElement /* frontAnkleRF*/]: type
    // })
  };

  function active(event, nameClass: string) {
    if (currentActiveElement === nameClass) {
      setCurrentAcitveElement(undefined);
    } else {
      setCurrentAcitveElement(nameClass);
    }

    // const svgElement = document.querySelector(`.${nameClass}`);
    // // svgElement?.classList.toggle(Style.active);

    // const centerX = event.clientX;
    // const centerY = event.clientY;

    // const newDiv = document.createElement('div');
    // newDiv.classList.add(Style.injuriesDiv);
    // newDiv.textContent = 'T';
    // newDiv.style.left = `${centerX}px`; // Ustawienie pozycji X
    // newDiv.style.top = `${centerY}px`; // Ustawienie pozycji Y

    // document.body.appendChild(newDiv);
  }
  return (
    <Formik
      initialValues={appContext.injuryAssessment}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
        appContext.setInjuryAssessment(values);
      }}
    >
      {({ handleSubmit, submitForm }) => (
        <form onSubmit={handleSubmit}>
          <div className={Style.wrap}>
            OBRAŻENIA
            <div className={Style.wrap}>
              <InjurySVG>
                {/* front Neck */}
                <g className="neck" clip-path="url(#4b089887fa)">
                  <path
                    fill="#ffffff"
                    d="M 165.34375 94.679688 L 209.925781 94.679688 L 209.925781 143.617188 L 165.34375 143.617188 Z M 165.34375 94.679688 "
                    fill-opacity="1"
                    fill-rule="nonzero"
                    onClick={(e) => {
                      active(e, 'neck');
                    }}
                  />
                </g>
                <g clip-path="url(#cf44761672)">
                  <path
                    stroke-linecap="butt"
                    transform="matrix(0.75, 0, 0, 0.75, 165.343237, 94.680316)"
                    fill="none"
                    stroke-linejoin="miter"
                    d="M 0.00068464 -0.000837947 L 59.438187 -0.000837947 L 59.438187 65.20229 L 0.00068464 65.20229 Z M 0.00068464 -0.000837947 "
                    stroke="#000000"
                    strokeWidth="6"
                    stroke-opacity="1"
                    stroke-miterlimit="4"
                  />
                </g>
                {/* face */}
                <g clip-path="url(#e7b9685b67)">
                  <g className="face" clip-path="url(#4e0df44614)">
                    <path
                      fill="#ffffff"
                      d="M 143.261719 20.929688 L 233.257812 20.929688 L 233.257812 110.925781 L 143.261719 110.925781 Z M 143.261719 20.929688 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                      onClick={(e) => {
                        active(e, 'face');
                      }}
                    />
                    <text x="160" y="70" fill="black" fontSize="20">
                      {appContext.injuryAssessment.front.face}
                    </text>
                  </g>
                </g>
                <g clip-path="url(#9f282b5a13)">
                  <g clip-path="url(#7c2e0329d4)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 143.26252, 20.931611)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 59.993726 -0.0025646 C 26.858308 -0.0025646 -0.00106815 26.86202 -0.00106815 59.99223 C -0.00106815 93.122439 26.858308 119.981816 59.993726 119.981816 C 93.123936 119.981816 119.983312 93.122439 119.983312 59.99223 C 119.983312 26.86202 93.123936 -0.0025646 59.993726 -0.0025646 Z M 59.993726 -0.0025646 "
                      stroke="#000000"
                      strokeWidth="8"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                {/* arm right front (ramie PP)*/}
                <g clip-path="url(#2c4750971e)">
                  <g className="rightFrontArm" clip-path="url(#6bebdcf9e2)">
                    <path
                      fill="#ffffff"
                      d="M 98.238281 162.230469 L 132.304688 173.023438 L 105.199219 258.589844 L 71.132812 247.796875 Z M 98.238281 162.230469 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                      onClick={(e) => {
                        active(e, 'rightFrontArm');
                      }}
                    />
                  </g>
                </g>
                <g clip-path="url(#23e565aa89)">
                  <g clip-path="url(#f7f2504a4d)">
                    <g clip-path="url(#de08d29240)">
                      <path
                        stroke-linecap="butt"
                        transform="matrix(0.714984, 0.226489, -0.226489, 0.714984, 98.236614, 162.235722)"
                        fill="none"
                        stroke-linejoin="miter"
                        d="M 0.00157717 -0.00238339 L 47.643619 0.00122637 L 47.643586 119.660749 L 0.00154463 119.657139 Z M 0.00157717 -0.00238339 "
                        stroke="#000000"
                        strokeWidth="8"
                        stroke-opacity="1"
                        stroke-miterlimit="4"
                      />
                    </g>
                  </g>
                </g>
                {/* arm left front (ramie LP)*/}
                <g clip-path="url(#13362ff8c2)">
                  <g className="leftFrontArm" clip-path="url(#881b6e3a9f)">
                    <path
                      fill="#ffffff"
                      d="M 241.132812 172.480469 L 275.367188 162.230469 L 301.15625 248.347656 L 266.921875 258.597656 Z M 241.132812 172.480469 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                      onClick={(e) => {
                        active(e, 'leftFrontArm');
                      }}
                    />
                  </g>
                </g>
                <g clip-path="url(#08fd2b9f4a)">
                  <g clip-path="url(#3de2adc6db)">
                    <g clip-path="url(#8df168f7ab)">
                      <path
                        stroke-linecap="butt"
                        transform="matrix(0.718476, -0.215157, 0.215157, 0.718476, 241.134482, 172.486654)"
                        fill="none"
                        stroke-linejoin="miter"
                        d="M -0.00275488 0.00143954 L 47.640134 0.00240372 L 47.639326 119.830488 L 0.00142655 119.831018 Z M -0.00275488 0.00143954 "
                        stroke="#000000"
                        strokeWidth="8"
                        stroke-opacity="1"
                        stroke-miterlimit="4"
                      />
                    </g>
                  </g>
                </g>
                {/* right lower limb front (noga PP) */}
                <g clip-path="url(#3f0f83d958)">
                  <g clip-path="url(#0841b7dfa0)">
                    <g
                      className="rightAnteriorLeg"
                      clip-path="url(#b99f8b8386)"
                    >
                      <path
                        fill="#ffffff"
                        d="M 156.1875 193.15625 L 216.53125 202.675781 L 160.320312 559.085938 L 99.976562 549.566406 Z M 156.1875 193.15625 "
                        fill-opacity="1"
                        fill-rule="nonzero"
                        onClick={(e) => {
                          active(e, 'rightAnteriorLeg');
                        }}
                      />
                    </g>
                  </g>
                </g>
                <g clip-path="url(#0d92f6c7f4)">
                  <g clip-path="url(#1c28efe8c0)">
                    <g clip-path="url(#19ae957a56)">
                      <g clip-path="url(#b970531405)">
                        <path
                          stroke-linecap="butt"
                          transform="matrix(0.740842, 0.116846, -0.116846, 0.740842, 156.18789, 193.159128)"
                          fill="none"
                          stroke-linejoin="miter"
                          d="M 40.725975 0.00021819 L 81.455208 183.752724 L 65.8987 481.072467 L 15.554732 481.072054 L 0.00265917 183.755158 Z M 40.725975 0.00021819 "
                          stroke="#000000"
                          strokeWidth="8"
                          stroke-opacity="1"
                          stroke-miterlimit="4"
                        />
                      </g>
                    </g>
                  </g>
                </g>
                {/* left lower limb front (noga LP) */}
                <g clip-path="url(#468632e5a2)">
                  <g clip-path="url(#498ca25b7d)">
                    <g
                      className={
                        currentActiveElement === 'leftAnteriorLeg'
                          ? Style.active
                          : ''
                      }
                      clip-path="url(#afb16207c0)"
                    >
                      <path
                        fill="#ffffff"
                        d="M 157.511719 202.933594 L 217.816406 193.15625 L 275.554688 549.324219 L 215.25 559.101562 Z M 157.511719 202.933594 "
                        fill-opacity="1"
                        fill-rule="nonzero"
                        onClick={(e) => {
                          active(e, 'leftAnteriorLeg');
                        }}
                      />
                    </g>
                  </g>
                </g>
                <g clip-path="url(#40cfeb31ca)">
                  <g clip-path="url(#872fab0be2)">
                    <g clip-path="url(#9b6758ca89)">
                      <g clip-path="url(#e0f78ac67f)">
                        <path
                          stroke-linecap="butt"
                          transform="matrix(0.740335, -0.120019, 0.120019, 0.740335, 157.512284, 202.935055)"
                          fill="none"
                          stroke-linejoin="miter"
                          d="M 40.727257 -0.000171631 L 81.450784 183.7545 L 65.89606 481.070864 L 15.554374 481.072215 L 0.000546705 183.75159 Z M 40.727257 -0.000171631 "
                          stroke="#000000"
                          strokeWidth="8"
                          stroke-opacity="1"
                          stroke-miterlimit="4"
                        />
                      </g>
                    </g>
                  </g>
                </g>
                {/* chest (klata) */}
                <g clip-path="url(#ca482ded4b)">
                  <g className="chest" clip-path="url(#5bcecf5b90)">
                    <path
                      fill="#ffffff"
                      d="M 99.976562 139.648438 L 275.710938 139.648438 L 275.710938 311.359375 L 99.976562 311.359375 Z M 99.976562 139.648438 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                      onClick={(e) => {
                        active(e, 'chest');
                      }}
                    />
                  </g>
                </g>
                <g clip-path="url(#26ca359c8a)">
                  <g clip-path="url(#c5110a6797)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 99.975911, 139.647861)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 58.526913 228.938278 L 175.58421 228.938278 L 234.110254 0.000768344 L 0.000869321 0.000768344 Z M 58.526913 228.938278 "
                      stroke="#000000"
                      strokeWidth="6"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                {/* belly (brzuch) */}
                <g className="belly" clip-path="url(#3805694659)">
                  <path
                    fill="#ffffff"
                    d="M 133.847656 268.023438 L 242.742188 268.023438 L 242.742188 320.324219 L 133.847656 320.324219 Z M 133.847656 268.023438 "
                    fill-opacity="1"
                    fill-rule="nonzero"
                    onClick={(e) => {
                      active(e, 'belly');
                    }}
                  />
                </g>
                <g clip-path="url(#030c15c93a)">
                  <path
                    stroke-linecap="butt"
                    transform="matrix(0.75, 0, 0, 0.75, 133.84624, 268.023232)"
                    fill="none"
                    stroke-linejoin="miter"
                    d="M 0.00188798 0.000274314 L 145.095644 0.000274314 L 145.095644 69.729444 L 0.00188798 69.729444 Z M 0.00188798 0.000274314 "
                    stroke="#000000"
                    strokeWidth="6"
                    stroke-opacity="1"
                    stroke-miterlimit="4"
                  />
                </g>
                {/* reproductive Organs (Narządy Rozrodcze) */}
                <g clip-path="url(#f6e2beab75)">
                  <g
                    className="reproductiveOrgans"
                    clip-path="url(#f8cfcffebc)"
                  >
                    <path
                      fill="#ffffff"
                      d="M 153.105469 345.578125 L 221.804688 345.578125 L 221.804688 378.269531 L 153.105469 378.269531 Z M 153.105469 345.578125 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                      onClick={(e) => {
                        active(e, 'reproductiveOrgans');
                      }}
                    />
                  </g>
                </g>
                <g clip-path="url(#394583aebb)">
                  <g clip-path="url(#42e505e1b9)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 153.106429, 345.577973)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 45.779974 43.578332 L 91.556021 0.000202326 L -0.00128039 0.000202326 Z M 45.779974 43.578332 "
                      stroke="#000000"
                      strokeWidth="6"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                {/* hypogastrium (podbrzusze) */}
                <g className="hypogastrium" clip-path="url(#508651ba44)">
                  <path
                    fill="#ffffff"
                    d="M 152.386719 311.925781 L 220.996094 311.925781 L 220.996094 348.597656 L 152.386719 348.597656 Z M 152.386719 311.925781 "
                    fill-opacity="1"
                    fill-rule="nonzero"
                    onClick={(e) => {
                      active(e, 'hypogastrium');
                    }}
                  />
                </g>
                <g clip-path="url(#90d5f8c338)">
                  <path
                    stroke-linecap="butt"
                    transform="matrix(0.75, 0, 0, 0.75, 152.387557, 311.928201)"
                    fill="none"
                    stroke-linejoin="miter"
                    d="M -0.00111776 0.00198188 L 91.545761 0.00198188 L 91.545761 48.887401 L -0.00111776 48.887401 Z M -0.00111776 0.00198188 "
                    stroke="#000000"
                    strokeWidth="8"
                    stroke-opacity="1"
                    stroke-miterlimit="4"
                  />
                </g>
                {/*  foot right front (stopa PP) */}
                <g className="footRF" clip-path="url(#264d03fd16)">
                  <path
                    fill="#ffffff"
                    d="M 53.671875 545.929688 L 148.039062 545.929688 L 148.039062 579.070312 L 53.671875 579.070312 Z M 53.671875 545.929688 "
                    fill-opacity="1"
                    fill-rule="nonzero"
                    onClick={(e) => {
                      active(e, 'footRF');
                    }}
                  />
                </g>
                <g clip-path="url(#c2c002438f)">
                  <path
                    stroke-linecap="butt"
                    transform="matrix(0.75, 0, 0, 0.75, 53.685951, 545.929269)"
                    fill="none"
                    stroke-linejoin="miter"
                    d="M 0.00206549 0.000558391 L 125.726029 0.000558391 L 125.726029 44.172435 L 0.00206549 44.172435 Z M 0.00206549 0.000558391 "
                    stroke="#000000"
                    strokeWidth="6"
                    stroke-opacity="1"
                    stroke-miterlimit="4"
                  />
                </g>
                {/*  foot left front (stopa LP) */}
                <g className="footLF" clip-path="url(#5212be32a9)">
                  <path
                    fill="#ffffff"
                    d="M 227.292969 545.929688 L 323.863281 545.929688 L 323.863281 579.070312 L 227.292969 579.070312 Z M 227.292969 545.929688 "
                    fill-opacity="1"
                    fill-rule="nonzero"
                    onClick={(e) => {
                      active(e, 'footLF');
                    }}
                  />
                </g>
                <g clip-path="url(#52620479ce)">
                  <path
                    stroke-linecap="butt"
                    transform="matrix(0.75, 0, 0, 0.75, 227.306371, 545.929269)"
                    fill="none"
                    stroke-linejoin="miter"
                    d="M -0.0022453 0.000558391 L 128.65401 0.000558391 L 128.65401 44.172435 L -0.0022453 44.172435 Z M -0.0022453 0.000558391 "
                    stroke="#000000"
                    strokeWidth="6"
                    stroke-opacity="1"
                    stroke-miterlimit="4"
                  />
                </g>
                {/* forearm left front (przedramie LP)*/}
                <g clip-path="url(#865ba32736)">
                  <g className="forearmLF" clip-path="url(#d25c17e42c)">
                    <path
                      fill="#ffffff"
                      d="M 266.558594 257.386719 L 300.792969 247.136719 L 327.222656 335.390625 L 292.988281 345.644531 Z M 266.558594 257.386719 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                      onClick={(e) => {
                        active(e, 'forearmLF');
                      }}
                    />
                  </g>
                </g>
                <g clip-path="url(#e955cd8c67)">
                  <g clip-path="url(#134f5f97c8)">
                    <g clip-path="url(#6835d25ca7)">
                      <path
                        stroke-linecap="butt"
                        transform="matrix(0.718476, -0.215157, 0.215157, 0.718476, 266.560537, 257.387733)"
                        fill="none"
                        stroke-linejoin="miter"
                        d="M -0.00209414 -0.00203881 L 47.640794 -0.00107464 L 47.640419 122.730421 L 0.00252047 122.730951 Z M -0.00209414 -0.00203881 "
                        stroke="#000000"
                        strokeWidth="8"
                        stroke-opacity="1"
                        stroke-miterlimit="4"
                      />
                    </g>
                  </g>
                </g>
                {/* hand left front (dłoń  LP)*/}
                <g clip-path="url(#5befc91b53)">
                  <g className="handLF" clip-path="url(#4200e3c120)">
                    <path
                      fill="#ffffff"
                      d="M 292.738281 344.804688 L 326.972656 334.554688 L 340.386719 379.351562 L 306.152344 389.605469 Z M 292.738281 344.804688 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                      onClick={(e) => {
                        active(e, 'handLF');
                      }}
                    />
                  </g>
                </g>
                <g clip-path="url(#714975b568)">
                  <g clip-path="url(#3e209df822)">
                    <g clip-path="url(#13e4acfe9b)">
                      <path
                        stroke-linecap="butt"
                        transform="matrix(0.718476, -0.215157, 0.215157, 0.718476, 292.73867, 344.807436)"
                        fill="none"
                        stroke-linejoin="miter"
                        d="M -0.000939564 0.00132935 L 47.641949 0.00229352 L 47.643285 62.434122 L 0.000396177 62.433157 Z M -0.000939564 0.00132935 "
                        stroke="#000000"
                        strokeWidth="8"
                        stroke-opacity="1"
                        stroke-miterlimit="4"
                      />
                    </g>
                  </g>
                </g>
                {/* forearm right front (przedramie PP)*/}
                <g clip-path="url(#8971ccb0d0)">
                  <g className="forearmRF" clip-path="url(#ceffa2f7e8)">
                    <path
                      fill="#ffffff"
                      d="M 71.339844 247.136719 L 105.40625 257.929688 L 77.628906 345.621094 L 43.5625 334.832031 Z M 71.339844 247.136719 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                      onClick={(e) => {
                        active(e, 'forearmRF');
                      }}
                    />
                  </g>
                </g>
                <g clip-path="url(#abb3e45156)">
                  <g clip-path="url(#2befa8d223)">
                    <g clip-path="url(#cb39194e83)">
                      <path
                        stroke-linecap="butt"
                        transform="matrix(0.714984, 0.226489, -0.226489, 0.714984, 71.340737, 247.137343)"
                        fill="none"
                        stroke-linejoin="miter"
                        d="M -0.00138617 -0.000434069 L 47.639082 -0.00178947 L 47.639832 122.574944 L -0.000636489 122.576299 Z M -0.00138617 -0.000434069 "
                        stroke="#000000"
                        strokeWidth="8"
                        stroke-opacity="1"
                        stroke-miterlimit="4"
                      />
                    </g>
                  </g>
                </g>
                {/* hand right front (dłoń  PP)*/}
                <g clip-path="url(#89f4460bb0)">
                  <g className="handRP" clip-path="url(#5e0b1ba85b)">
                    <path
                      fill="#ffffff"
                      d="M 43.648438 334.554688 L 77.714844 345.347656 L 63.679688 389.660156 L 29.613281 378.871094 Z M 43.648438 334.554688 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                      onClick={(e) => {
                        active(e, 'handRP');
                      }}
                    />
                  </g>
                </g>
                <g clip-path="url(#08e8fc04fe)">
                  <g clip-path="url(#afc9d17263)">
                    <g clip-path="url(#f9727ccd1d)">
                      <path
                        stroke-linecap="butt"
                        transform="matrix(0.714984, 0.226489, -0.226489, 0.714984, 43.64931, 334.556286)"
                        fill="none"
                        stroke-linejoin="miter"
                        d="M -0.00175218 -0.00168028 L 47.640289 0.00192948 L 47.639325 61.984573 L -0.00114334 61.985928 Z M -0.00175218 -0.00168028 "
                        stroke="#000000"
                        strokeWidth="8"
                        stroke-opacity="1"
                        stroke-miterlimit="4"
                      />
                    </g>
                  </g>
                </g>
                <g clip-path="url(#91d3e5e233)">
                  <g clip-path="url(#d34f4a8581)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 246.044404, 135.95663)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 27.352254 0.000534734 C 12.248086 0.000534734 -0.00191404 12.245327 -0.00191404 27.349494 C -0.00191404 42.45887 12.248086 54.703662 27.352254 54.703662 C 42.456421 54.703662 54.701213 42.45887 54.701213 27.349494 C 54.701213 12.245327 42.456421 0.000534734 27.352254 0.000534734 Z M 27.352254 0.000534734 "
                      stroke="#000000"
                      strokeWidth="8"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                {/* shoulder left front (bark LP)*/}
                <g clip-path="url(#53caa59239)">
                  <g className="shoulderLF" clip-path="url(#d3381ce6cd)">
                    <path
                      fill="#ffffff"
                      d="M 245.175781 135.957031 L 286.203125 135.957031 L 286.203125 176.984375 L 245.175781 176.984375 Z M 245.175781 135.957031 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                      onClick={(e) => {
                        active(e, 'shoulderLF');
                      }}
                    />
                  </g>
                </g>
                <g clip-path="url(#292f206112)">
                  <g clip-path="url(#fea7c437b8)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 245.175811, 135.95663)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 27.354129 0.000534734 C 12.244753 0.000534734 -0.0000392856 12.245327 -0.0000392856 27.349494 C -0.0000392856 42.45887 12.244753 54.703662 27.354129 54.703662 C 42.458296 54.703662 54.703088 42.45887 54.703088 27.349494 C 54.703088 12.245327 42.458296 0.000534734 27.354129 0.000534734 Z M 27.354129 0.000534734 "
                      stroke="#000000"
                      strokeWidth="8"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                {/* elbow left front (łokieć LP)*/}
                <g clip-path="url(#00e671e354)">
                  <g className="elbowLF" clip-path="url(#2c7bfd0936)">
                    <path
                      fill="#ffffff"
                      d="M 265.691406 231.867188 L 306.71875 231.867188 L 306.71875 272.894531 L 265.691406 272.894531 Z M 265.691406 231.867188 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                      onClick={(e) => {
                        active(e, 'elbowLF');
                      }}
                    />
                  </g>
                </g>
                <g clip-path="url(#092ed006e8)">
                  <g clip-path="url(#2b3249d4ba)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 265.690359, 231.866715)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 27.350355 0.000630124 C 12.246188 0.000630124 0.00139575 12.245422 0.00139575 27.34959 C 0.00139575 42.458965 12.246188 54.703757 27.350355 54.703757 C 42.459731 54.703757 54.704523 42.458965 54.704523 27.34959 C 54.704523 12.245422 42.459731 0.000630124 27.350355 0.000630124 Z M 27.350355 0.000630124 "
                      stroke="#000000"
                      strokeWidth="8"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                {/* wrist left front (nadgarstek LP)*/}
                <g clip-path="url(#c90d9557aa)">
                  <g className="wristLF" clip-path="url(#4ffb2b41d3)">
                    <path
                      fill="#ffffff"
                      d="M 292.738281 321.085938 L 333.765625 321.085938 L 333.765625 362.113281 L 292.738281 362.113281 Z M 292.738281 321.085938 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                      onClick={(e) => {
                        active(e, 'wristLF');
                      }}
                    />
                  </g>
                </g>
                <g clip-path="url(#cadea86a60)">
                  <g clip-path="url(#988c0071ea)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 292.737938, 321.084206)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 27.349417 0.00230933 C 12.245249 0.00230933 0.000457287 12.247102 0.000457287 27.351269 C 0.000457287 42.455436 12.245249 54.705437 27.349417 54.705437 C 42.458792 54.705437 54.703585 42.455436 54.703585 27.351269 C 54.703585 12.247102 42.458792 0.00230933 27.349417 0.00230933 Z M 27.349417 0.00230933 "
                      stroke="#000000"
                      strokeWidth="8"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                {/* elbow right front (łokieć PP)*/}
                <g clip-path="url(#f1d287e7a1)">
                  <g className="elbowRF" clip-path="url(#c013ed2a06)">
                    <path
                      fill="#ffffff"
                      d="M 66.527344 231.867188 L 107.554688 231.867188 L 107.554688 272.894531 L 66.527344 272.894531 Z M 66.527344 231.867188 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                      onClick={(e) => {
                        active(e, 'elbowRF');
                      }}
                    />
                  </g>
                </g>
                <g clip-path="url(#c46f180c80)">
                  <g clip-path="url(#43909f7e4d)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 66.525965, 231.866715)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 27.350798 0.000630124 C 12.246631 0.000630124 0.00183868 12.245422 0.00183868 27.34959 C 0.00183868 42.458965 12.246631 54.703757 27.350798 54.703757 C 42.454965 54.703757 54.704966 42.458965 54.704966 27.34959 C 54.704966 12.245422 42.454965 0.000630124 27.350798 0.000630124 Z M 27.350798 0.000630124 "
                      stroke="#000000"
                      strokeWidth="8"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                {/* wrist right front (nadgarstek PP)*/}
                <g clip-path="url(#a2cb1da519)">
                  <g className="wristRF" clip-path="url(#10eba03b52)">
                    <path
                      fill="#ffffff"
                      d="M 38.589844 320.894531 L 79.617188 320.894531 L 79.617188 361.921875 L 38.589844 361.921875 Z M 38.589844 320.894531 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                      onClick={(e) => {
                        active(e, 'wristRF');
                      }}
                    />
                  </g>
                </g>
                <g clip-path="url(#30dbb96fe8)">
                  <g clip-path="url(#24077bb8b0)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 38.588974, 320.893953)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 27.350119 0.000771389 C 12.245951 0.000771389 0.00115902 12.245564 0.00115902 27.349731 C 0.00115902 42.459107 12.245951 54.703899 27.350119 54.703899 C 42.459494 54.703899 54.704286 42.459107 54.704286 27.349731 C 54.704286 12.245564 42.459494 0.000771389 27.350119 0.000771389 Z M 27.350119 0.000771389 "
                      stroke="#000000"
                      strokeWidth="8"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                {/* shoulder right front (bark PP)*/}
                <g clip-path="url(#9ec6fa6c66)">
                  <g className="shoulderPF" clip-path="url(#a3d006b69e)">
                    <path
                      fill="#ffffff"
                      d="M 91.3125 135.957031 L 132.34375 135.957031 L 132.34375 176.984375 L 91.3125 176.984375 Z M 91.3125 135.957031 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                      onClick={(e) => {
                        active(e, 'shoulderPF');
                      }}
                    />
                  </g>
                </g>
                <g clip-path="url(#1763f1a999)">
                  <g clip-path="url(#29939b4ff2)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 91.314167, 135.95663)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 27.351945 0.000534734 C 12.247778 0.000534734 -0.00222251 12.245327 -0.00222251 27.349494 C -0.00222251 42.45887 12.247778 54.703662 27.351945 54.703662 C 42.456113 54.703662 54.700905 42.45887 54.700905 27.349494 C 54.700905 12.245327 42.456113 0.000534734 27.351945 0.000534734 Z M 27.351945 0.000534734 "
                      stroke="#000000"
                      strokeWidth="8"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                {/* knee right front ( kolano PP)*/}
                <g clip-path="url(#ae0303923e)">
                  <g className="kneeRF" clip-path="url(#b5654fcac1)">
                    <path
                      fill="#ffffff"
                      d="M 127.480469 429.269531 L 168.511719 429.269531 L 168.511719 470.296875 L 127.480469 470.296875 Z M 127.480469 429.269531 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                      onClick={(e) => {
                        active(e, 'kneeRF');
                      }}
                    />
                  </g>
                </g>
                <g clip-path="url(#72f8d46721)">
                  <g clip-path="url(#d43b65321c)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 127.482257, 429.26813)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 27.351784 0.00186875 C 12.247617 0.00186875 -0.00238371 12.246661 -0.00238371 27.350828 C -0.00238371 42.454996 12.247617 54.704996 27.351784 54.704996 C 42.455951 54.704996 54.700744 42.454996 54.700744 27.350828 C 54.700744 12.246661 42.455951 0.00186875 27.351784 0.00186875 Z M 27.351784 0.00186875 "
                      stroke="#000000"
                      strokeWidth="8"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                {/* knee left front ( kolano LP)*/}
                <g clip-path="url(#0e0f07a330)">
                  <g className="kneeLF" clip-path="url(#3156890040)">
                    <path
                      fill="#ffffff"
                      d="M 209.925781 429.269531 L 250.957031 429.269531 L 250.957031 470.296875 L 209.925781 470.296875 Z M 209.925781 429.269531 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                      onClick={(e) => {
                        active(e, 'kneeLF');
                      }}
                    />
                  </g>
                </g>
                <g clip-path="url(#e51e625665)">
                  <g clip-path="url(#1fb424e244)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 209.92688, 429.26813)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 27.352703 0.00186875 C 12.243327 0.00186875 -0.00146529 12.246661 -0.00146529 27.350828 C -0.00146529 42.454996 12.243327 54.704996 27.352703 54.704996 C 42.45687 54.704996 54.701662 42.454996 54.701662 27.350828 C 54.701662 12.246661 42.45687 0.00186875 27.352703 0.00186875 Z M 27.352703 0.00186875 "
                      stroke="#000000"
                      strokeWidth="8"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                {/* ankle left front ( kostka LP)*/}
                <g clip-path="url(#eb11071d09)">
                  <g className="ankleLF" clip-path="url(#53bcb665c6)">
                    <path
                      fill="#ffffff"
                      d="M 225.53125 525.046875 L 266.558594 525.046875 L 266.558594 566.078125 L 225.53125 566.078125 Z M 225.53125 525.046875 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                      onClick={(e) => {
                        active(e, 'ankleLF');
                      }}
                    />
                  </g>
                </g>
                <g clip-path="url(#57ce90690c)">
                  <g clip-path="url(#2640d9d076)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 225.529899, 525.047158)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 27.350761 -0.000376797 C 12.246594 -0.000376797 0.00180166 12.244415 0.00180166 27.353791 C 0.00180166 42.457958 12.246594 54.702751 27.350761 54.702751 C 42.454928 54.702751 54.704929 42.457958 54.704929 27.353791 C 54.704929 12.244415 42.454928 -0.000376797 27.350761 -0.000376797 Z M 27.350761 -0.000376797 "
                      stroke="#000000"
                      strokeWidth="8"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                {/* ankle right front ( kostka PP)*/}
                <g clip-path="url(#fa2ada7137)">
                  <g className="ankleRF" clip-path="url(#ad925abbaf)">
                    <path
                      fill="#ffffff"
                      d="M 108.738281 525.414062 L 149.765625 525.414062 L 149.765625 566.445312 L 108.738281 566.445312 Z M 108.738281 525.414062 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                      onClick={(e) => {
                        active(e, 'ankleRF');
                      }}
                    />
                  </g>
                </g>
                <g clip-path="url(#54ce1715f3)">
                  <g clip-path="url(#67850f263f)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 108.737501, 525.414718)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 27.349999 -0.000873443 C 12.245832 -0.000873443 0.00103989 12.243919 0.00103989 27.353294 C 0.00103989 42.457462 12.245832 54.702254 27.349999 54.702254 C 42.459375 54.702254 54.704167 42.457462 54.704167 27.353294 C 54.704167 12.243919 42.459375 -0.000873443 27.349999 -0.000873443 Z M 27.349999 -0.000873443 "
                      stroke="#000000"
                      strokeWidth="8"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                {/* right Hip  front (biodro PP)*/}
                <g clip-path="url(#a16037565b)">
                  <g className="hipRF" clip-path="url(#3c68eec129)">
                    <path
                      fill="#ffffff"
                      d="M 124.585938 300.570312 L 165.617188 300.570312 L 165.617188 341.597656 L 124.585938 341.597656 Z M 124.585938 300.570312 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                      onClick={(e) => {
                        active(e, 'hipRF');
                      }}
                    />
                  </g>
                </g>
                <g clip-path="url(#50ad23960b)">
                  <g clip-path="url(#0e22e3e491)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 124.586539, 300.569686)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 27.353366 0.000835899 C 12.24399 0.000835899 -0.000802079 12.245628 -0.000802079 27.349795 C -0.000802079 42.459171 12.24399 54.703963 27.353366 54.703963 C 42.457533 54.703963 54.702325 42.459171 54.702325 27.349795 C 54.702325 12.245628 42.457533 0.000835899 27.353366 0.000835899 Z M 27.353366 0.000835899 "
                      stroke="#000000"
                      strokeWidth="8"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                {/* left Hip  front (biodro LP)*/}
                <g clip-path="url(#3df7d3077c)">
                  <g className="hipLF" clip-path="url(#30a1d4aea4)">
                    <path
                      fill="#ffffff"
                      d="M 209.925781 300.378906 L 250.957031 300.378906 L 250.957031 341.410156 L 209.925781 341.410156 Z M 209.925781 300.378906 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                      onClick={(e) => {
                        active(e, 'hipLF');
                      }}
                    />
                  </g>
                </g>
                <g clip-path="url(#f7f1e0c2fe)">
                  <g clip-path="url(#7ff1ce40e0)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 209.92688, 300.379459)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 27.352703 -0.000737245 C 12.243327 -0.000737245 -0.00146529 12.244055 -0.00146529 27.353431 C -0.00146529 42.457598 12.243327 54.70239 27.352703 54.70239 C 42.45687 54.70239 54.701662 42.457598 54.701662 27.353431 C 54.701662 12.244055 42.45687 -0.000737245 27.352703 -0.000737245 Z M 27.352703 -0.000737245 "
                      stroke="#000000"
                      strokeWidth="8"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                {/* mouth  (usta)*/}
                <g clip-path="url(#8114620226)">
                  <g className="mouth" clip-path="url(#006058160f)">
                    <path
                      fill="#ffffff"
                      d="M 168.511719 84.902344 L 207.324219 84.902344 L 207.324219 100.625 L 168.511719 100.625 Z M 168.511719 84.902344 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                      onClick={(e) => {
                        active(e, 'mouth');
                      }}
                    />
                  </g>
                </g>
                <g clip-path="url(#8f81a05e02)">
                  <g clip-path="url(#d0a4dcac74)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 168.519192, 84.903372)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 37.333787 -0.00137044 C 45.266079 -0.00137044 51.698371 4.691338 51.698371 10.477797 C 51.698371 16.264255 45.266079 20.951755 37.333787 20.951755 L 14.365036 20.951755 C 6.432744 20.951755 0.00045182 16.264255 0.00045182 10.477797 C 0.00045182 4.691338 6.432744 -0.00137044 14.365036 -0.00137044 Z M 37.333787 -0.00137044 "
                      stroke="#000000"
                      strokeWidth="6"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                {/* nose */}
                <g clip-path="url(#a70628ac5d)">
                  <g className="nose" clip-path="url(#e8ce298b1b)">
                    <path
                      fill="#ffffff"
                      d="M 174.265625 51.496094 L 202.253906 51.496094 L 202.253906 80.359375 L 174.265625 80.359375 Z M 174.265625 51.496094 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                      onClick={(e) => {
                        active(e, 'nose');
                      }}
                    />
                  </g>
                </g>
                <g clip-path="url(#1afae67171)">
                  <g clip-path="url(#4975f6805f)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 174.266477, 51.495611)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 18.655114 0.000644196 L 37.311363 38.485018 L -0.00113592 38.485018 Z M 18.655114 0.000644196 "
                      stroke="#000000"
                      strokeWidth="6"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                {/* right Eye */}
                <g clip-path="url(#e25ed07c4f)">
                  <g className="rightEye" clip-path="url(#17f5b2bc19)">
                    <path
                      fill="#ffffff"
                      d="M 160.304688 44.515625 L 178.769531 44.515625 L 178.769531 62.980469 L 160.304688 62.980469 Z M 160.304688 44.515625 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                      onClick={(e) => {
                        active(e, 'rightEye');
                      }}
                    />
                  </g>
                </g>
                <g clip-path="url(#c019244797)">
                  <g clip-path="url(#8e437fd747)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 160.305975, 44.515473)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 12.305576 0.000203332 C 5.5087 0.000203332 -0.00171685 5.510621 -0.00171685 12.302288 C -0.00171685 19.099164 5.5087 24.609581 12.305576 24.609581 C 19.102452 24.609581 24.607661 19.099164 24.607661 12.302288 C 24.607661 5.510621 19.102452 0.000203332 12.305576 0.000203332 Z M 12.305576 0.000203332 "
                      stroke="#000000"
                      strokeWidth="6"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                {/* left Eye */}
                <g clip-path="url(#4a9302509b)">
                  <g className="leftEye" clip-path="url(#958fba1e45)">
                    <path
                      fill="#ffffff"
                      d="M 198.070312 44.515625 L 216.53125 44.515625 L 216.53125 62.980469 L 198.070312 62.980469 Z M 198.070312 44.515625 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                      onClick={(e) => {
                        active(e, 'leftEye');
                      }}
                    />
                  </g>
                </g>
                <g clip-path="url(#f850044c12)">
                  <g clip-path="url(#634c051203)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 198.06969, 44.515473)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 12.302914 0.000203332 C 5.511247 0.000203332 0.000829568 5.510621 0.000829568 12.302288 C 0.000829568 19.099164 5.511247 24.609581 12.302914 24.609581 C 19.09979 24.609581 24.610207 19.099164 24.610207 12.302288 C 24.610207 5.510621 19.09979 0.000203332 12.302914 0.000203332 Z M 12.302914 0.000203332 "
                      stroke="#000000"
                      strokeWidth="6"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>

                {/* back Neck ( szyja tył  ) */}
                <g clip-path="url(#44acebc3fb)">
                  <path
                    fill="#ffffff"
                    d="M 535.660156 95.25 L 579.972656 95.25 L 579.972656 144.234375 L 535.660156 144.234375 Z M 535.660156 95.25 "
                    fill-opacity="1"
                    fill-rule="nonzero"
                  />
                </g>
                <g clip-path="url(#61fe2225f1)">
                  <path
                    stroke-linecap="butt"
                    transform="matrix(0.75, 0, 0, 0.75, 535.662458, 95.249152)"
                    fill="none"
                    stroke-linejoin="miter"
                    d="M 0.00213997 0.00113075 L 59.075055 0.00113075 L 59.075055 65.204254 L 0.00213997 65.204254 Z M 0.00213997 0.00113075 "
                    stroke="#000000"
                    strokeWidth="8"
                    stroke-opacity="1"
                    stroke-miterlimit="4"
                  />
                </g>
                {/* cervical Spine ( kręgosłup szyjny ) */}
                <g clip-path="url(#b0983c6bf0)">
                  <path
                    fill="#ffffff"
                    d="M 550.660156 95.25 L 564.972656 95.25 L 564.972656 144.164062 L 550.660156 144.164062 Z M 550.660156 95.25 "
                    fill-opacity="1"
                    fill-rule="nonzero"
                  />
                </g>
                <g clip-path="url(#086b3b0c38)">
                  <path
                    stroke-linecap="butt"
                    transform="matrix(0.75, 0, 0, 0.75, 550.661809, 95.251547)"
                    fill="none"
                    stroke-linejoin="miter"
                    d="M -0.00220351 -0.00206285 L 19.075921 -0.00206285 L 19.075921 65.195852 L -0.00220351 65.195852 Z M -0.00220351 -0.00206285 "
                    stroke="#000000"
                    strokeWidth="8"
                    stroke-opacity="1"
                    stroke-miterlimit="4"
                  />
                </g>
                {/* back Head ( głowa tył ) */}
                <g clip-path="url(#e3d65892e7)">
                  <g clip-path="url(#bcdcae4099)">
                    <path
                      fill="#ffffff"
                      d="M 513.308594 21.5 L 603.304688 21.5 L 603.304688 111.496094 L 513.308594 111.496094 Z M 513.308594 21.5 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#691ae4926b)">
                  <g clip-path="url(#7a7eab5006)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 513.308762, 21.501292)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 59.994569 -0.00172294 C 26.859151 -0.00172294 -0.000224965 26.857653 -0.000224965 59.993071 C -0.000224965 93.123281 26.859151 119.982657 59.994569 119.982657 C 93.124779 119.982657 119.984155 93.123281 119.984155 59.993071 C 119.984155 26.857653 93.124779 -0.00172294 59.994569 -0.00172294 Z M 59.994569 -0.00172294 "
                      stroke="#000000"
                      strokeWidth="8"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                {/* arm left back (ramie LT)*/}
                <g clip-path="url(#4ca2b07d82)">
                  <g clip-path="url(#dd91c66e04)">
                    <path
                      fill="#ffffff"
                      d="M 468.285156 162.800781 L 502.351562 173.59375 L 475.246094 259.15625 L 441.179688 248.367188 Z M 468.285156 162.800781 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#984471be4b)">
                  <g clip-path="url(#3ed50eca1c)">
                    <g clip-path="url(#9e57adc0d6)">
                      <path
                        stroke-linecap="butt"
                        transform="matrix(0.714984, 0.226489, -0.226489, 0.714984, 468.28282, 162.805398)"
                        fill="none"
                        stroke-linejoin="miter"
                        d="M -0.00228212 -0.000270604 L 47.638186 -0.00162601 L 47.638154 119.657896 L -0.00231467 119.659252 Z M -0.00228212 -0.000270604 "
                        stroke="#000000"
                        strokeWidth="8"
                        stroke-opacity="1"
                        stroke-miterlimit="4"
                      />
                    </g>
                  </g>
                </g>
                {/* arm right back (ramie PT)*/}
                <g clip-path="url(#ac3c64dccd)">
                  <g clip-path="url(#91b516c930)">
                    <path
                      fill="#ffffff"
                      d="M 611.179688 173.050781 L 645.414062 162.800781 L 671.199219 248.917969 L 636.96875 259.167969 Z M 611.179688 173.050781 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#4eca32db63)">
                  <g clip-path="url(#e5acb9e9ea)">
                    <g clip-path="url(#a447d3a09e)">
                      <path
                        stroke-linecap="butt"
                        transform="matrix(0.718476, -0.215157, 0.215157, 0.718476, 611.180782, 173.05633)"
                        fill="none"
                        stroke-linejoin="miter"
                        d="M -0.000770034 -0.00251699 L 47.642118 -0.00155282 L 47.639816 119.831521 L -0.00307217 119.830557 Z M -0.000770034 -0.00251699 "
                        stroke="#000000"
                        strokeWidth="8"
                        stroke-opacity="1"
                        stroke-miterlimit="4"
                      />
                    </g>
                  </g>
                </g>
                {/* left lower limb back (noga LT) */}
                <g clip-path="url(#0265b046f2)">
                  <g clip-path="url(#92e87a28c3)">
                    <g clip-path="url(#d203e44d3c)">
                      <path
                        fill="#ffffff"
                        d="M 526.234375 193.726562 L 586.578125 203.246094 L 530.367188 559.65625 L 470.019531 550.136719 Z M 526.234375 193.726562 "
                        fill-opacity="1"
                        fill-rule="nonzero"
                      />
                    </g>
                  </g>
                </g>
                <g clip-path="url(#b84ad256dc)">
                  <g clip-path="url(#d6f7b81762)">
                    <g clip-path="url(#8d8a4d7f94)">
                      <g clip-path="url(#6b335218c6)">
                        <path
                          stroke-linecap="butt"
                          transform="matrix(0.740842, 0.116846, -0.116846, 0.740842, 526.23413, 193.728792)"
                          fill="none"
                          stroke-linejoin="miter"
                          d="M 40.726946 0.000940468 L 81.451034 183.754257 L 65.894526 481.074001 L 15.555703 481.072776 L -0.00232623 183.751547 Z M 40.726946 0.000940468 "
                          stroke="#000000"
                          strokeWidth="8"
                          stroke-opacity="1"
                          stroke-miterlimit="4"
                        />
                      </g>
                    </g>
                  </g>
                </g>
                {/* right lower limb back (noga PT) */}
                <g clip-path="url(#c33a3be201)">
                  <g clip-path="url(#ab899c30d1)">
                    <g clip-path="url(#7198299110)">
                      <path
                        fill="#ffffff"
                        d="M 527.558594 203.503906 L 587.863281 193.726562 L 645.601562 549.894531 L 585.296875 559.667969 Z M 527.558594 203.503906 "
                        fill-opacity="1"
                        fill-rule="nonzero"
                      />
                    </g>
                  </g>
                </g>
                <g clip-path="url(#2f30d162bd)">
                  <g clip-path="url(#9c5c0b2c12)">
                    <g clip-path="url(#b2e6f82b91)">
                      <g clip-path="url(#a560fc14f5)">
                        <path
                          stroke-linecap="butt"
                          transform="matrix(0.740335, -0.120019, 0.120019, 0.740335, 527.558522, 203.504747)"
                          fill="none"
                          stroke-linejoin="miter"
                          d="M 40.727963 0.000779975 L 81.45149 183.755451 L 65.896766 481.071815 L 15.555081 481.073166 L 0.00125311 183.752542 Z M 40.727963 0.000779975 "
                          stroke="#000000"
                          strokeWidth="8"
                          stroke-opacity="1"
                          stroke-miterlimit="4"
                        />
                      </g>
                    </g>
                  </g>
                </g>
                <g clip-path="url(#dfd3764c8e)">
                  <g clip-path="url(#6029485b04)">
                    <path
                      fill="#ffffff"
                      d="M 470.023438 140.21875 L 645.398438 140.21875 L 645.398438 306.5 L 470.023438 306.5 Z M 470.023438 140.21875 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#d9c851bb82)">
                  <g clip-path="url(#9e36e6954b)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 470.022148, 140.218857)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 58.527763 221.697783 L 175.579851 221.697783 L 234.111104 -0.000142956 L 0.00171891 -0.000142956 Z M 58.527763 221.697783 "
                      stroke="#000000"
                      strokeWidth="6"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                {/* lower Back ( dolna część pleców ) */}
                <g clip-path="url(#2ffd328c7c)">
                  <path
                    fill="#ffffff"
                    d="M 502.351562 265.34375 L 611.246094 265.34375 L 611.246094 317.648438 L 502.351562 317.648438 Z M 502.351562 265.34375 "
                    fill-opacity="1"
                    fill-rule="nonzero"
                  />
                </g>
                <g clip-path="url(#c541d81b56)">
                  <path
                    stroke-linecap="butt"
                    transform="matrix(0.75, 0, 0, 0.75, 502.351275, 265.346553)"
                    fill="none"
                    stroke-linejoin="miter"
                    d="M 0.000383412 0.00147143 L 145.09414 0.00147143 L 145.09414 69.730641 L 0.000383412 69.730641 Z M 0.000383412 0.00147143 "
                    stroke="#000000"
                    strokeWidth="6"
                    stroke-opacity="1"
                    stroke-miterlimit="4"
                  />
                </g>
                {/* lumbar Spine ( Kręgosłup lędźwiowy ) */}
                <g clip-path="url(#c44e4bba93)">
                  <path
                    fill="#ffffff"
                    d="M 550.660156 265.34375 L 564.972656 265.34375 L 564.972656 317.671875 L 550.660156 317.671875 Z M 550.660156 265.34375 "
                    fill-opacity="1"
                    fill-rule="nonzero"
                  />
                </g>
                <g clip-path="url(#078c1a0bf4)">
                  <path
                    stroke-linecap="butt"
                    transform="matrix(0.75, 0, 0, 0.75, 550.661809, 265.349627)"
                    fill="none"
                    stroke-linejoin="miter"
                    d="M -0.00220351 0.00258056 L 19.075921 0.00258056 L 19.075921 69.721329 L -0.00220351 69.721329 Z M -0.00220351 0.00258056 "
                    stroke="#000000"
                    strokeWidth="6"
                    stroke-opacity="1"
                    stroke-miterlimit="4"
                  />
                </g>
                {/* spine ( kręgosłup ) */}
                <g clip-path="url(#6874c65fb2)">
                  <path
                    fill="#ffffff"
                    d="M 551.152344 140.21875 L 565.460938 140.21875 L 565.460938 272.875 L 551.152344 272.875 Z M 551.152344 140.21875 "
                    fill-opacity="1"
                    fill-rule="nonzero"
                  />
                </g>
                <g clip-path="url(#ec1c4bf152)">
                  <path
                    stroke-linecap="butt"
                    transform="matrix(0.75, 0, 0, 0.75, 551.150785, 140.225112)"
                    fill="none"
                    stroke-linejoin="miter"
                    d="M 0.00207852 0.00193451 L 19.080203 0.00193451 L 19.080203 166.804014 L 0.00207852 166.804014 Z M 0.00207852 0.00193451 "
                    stroke="#000000"
                    strokeWidth="6"
                    stroke-opacity="1"
                    stroke-miterlimit="4"
                  />
                </g>
                {/*  buttocks ( pośladki ) */}
                <g clip-path="url(#bf6b35dbaa)">
                  <g clip-path="url(#d36a9a70fc)">
                    <path
                      fill="#ffffff"
                      d="M 523.148438 346.148438 L 591.851562 346.148438 L 591.851562 378.835938 L 523.148438 378.835938 Z M 523.148438 346.148438 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#17a55fb54d)">
                  <g clip-path="url(#46a7171c7c)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 523.152626, 346.147652)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 45.77567 43.579177 L 91.556925 0.00104783 L -0.000376405 0.00104783 Z M 45.77567 43.579177 "
                      stroke="#000000"
                      strokeWidth="6"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                {/*  pelvis ( miednica ) */}
                <g clip-path="url(#31fde01856)">
                  <path
                    fill="#ffffff"
                    d="M 522.433594 312.496094 L 591.042969 312.496094 L 591.042969 349.164062 L 522.433594 349.164062 Z M 522.433594 312.496094 "
                    fill-opacity="1"
                    fill-rule="nonzero"
                  />
                </g>
                <g clip-path="url(#6d13c85904)">
                  <path
                    stroke-linecap="butt"
                    transform="matrix(0.75, 0, 0, 0.75, 522.433802, 312.497877)"
                    fill="none"
                    stroke-linejoin="miter"
                    d="M -0.000277779 -0.00237776 L 91.546601 -0.00237776 L 91.546601 48.888249 L -0.000277779 48.888249 Z M -0.000277779 -0.00237776 "
                    stroke="#000000"
                    strokeWidth="8"
                    stroke-opacity="1"
                    stroke-miterlimit="4"
                  />
                </g>
                {/*  foot left back (stopa LT) */}
                <g clip-path="url(#5751b98a72)">
                  <path
                    fill="#ffffff"
                    d="M 423.71875 546.5 L 518.085938 546.5 L 518.085938 579.636719 L 423.71875 579.636719 Z M 423.71875 546.5 "
                    fill-opacity="1"
                    fill-rule="nonzero"
                  />
                </g>
                <g clip-path="url(#0048dac56f)">
                  <path
                    stroke-linecap="butt"
                    transform="matrix(0.75, 0, 0, 0.75, 423.732198, 546.498981)"
                    fill="none"
                    stroke-linejoin="miter"
                    d="M -0.00230606 0.00135909 L 125.726866 0.00135909 L 125.726866 44.173236 L -0.00230606 44.173236 Z M -0.00230606 0.00135909 "
                    stroke="#000000"
                    strokeWidth="6"
                    stroke-opacity="1"
                    stroke-miterlimit="4"
                  />
                </g>
                {/*  foot right back (stopa PT) */}
                <g clip-path="url(#69fd15b2ed)">
                  <path
                    fill="#ffffff"
                    d="M 597.339844 546.5 L 693.910156 546.5 L 693.910156 579.636719 L 597.339844 579.636719 Z M 597.339844 546.5 "
                    fill-opacity="1"
                    fill-rule="nonzero"
                  />
                </g>
                <g clip-path="url(#a8dffde390)">
                  <path
                    stroke-linecap="butt"
                    transform="matrix(0.75, 0, 0, 0.75, 597.352655, 546.498981)"
                    fill="none"
                    stroke-linejoin="miter"
                    d="M -0.00145652 0.00135909 L 128.654799 0.00135909 L 128.654799 44.173236 L -0.00145652 44.173236 Z M -0.00145652 0.00135909 "
                    stroke="#000000"
                    strokeWidth="6"
                    stroke-opacity="1"
                    stroke-miterlimit="4"
                  />
                </g>
                {/* forearm right back (przedramie PT)*/}
                <g clip-path="url(#c2f1b79f14)">
                  <g clip-path="url(#1f98166f7e)">
                    <path
                      fill="#ffffff"
                      d="M 636.605469 257.957031 L 670.839844 247.703125 L 697.269531 335.960938 L 663.035156 346.214844 Z M 636.605469 257.957031 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#09f8797fce)">
                  <g clip-path="url(#793b266799)">
                    <g clip-path="url(#374b6fbb74)">
                      <path
                        stroke-linecap="butt"
                        transform="matrix(0.718476, -0.215157, 0.215157, 0.718476, 636.606837, 257.95744)"
                        fill="none"
                        stroke-linejoin="miter"
                        d="M -0.0015915 -0.00104578 L 47.641297 -0.0000816071 L 47.640922 122.731414 L -0.00196631 122.73045 Z M -0.0015915 -0.00104578 "
                        stroke="#000000"
                        strokeWidth="8"
                        stroke-opacity="1"
                        stroke-miterlimit="4"
                      />
                    </g>
                  </g>
                </g>
                {/* hand right back (dłoń  PT)*/}
                <g clip-path="url(#f9086edf40)">
                  <g clip-path="url(#d90f7ebb35)">
                    <path
                      fill="#ffffff"
                      d="M 662.785156 345.375 L 697.019531 335.125 L 710.433594 379.921875 L 676.199219 390.171875 Z M 662.785156 345.375 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#b40557f5f9)">
                  <g clip-path="url(#459133069e)">
                    <g clip-path="url(#a3a84f7f4c)">
                      <path
                        stroke-linecap="butt"
                        transform="matrix(0.718476, -0.215157, 0.215157, 0.718476, 662.784932, 345.377115)"
                        fill="none"
                        stroke-linejoin="miter"
                        d="M -0.000398898 0.00237386 L 47.638994 -0.00314553 L 47.638836 62.433672 L 0.000936844 62.434202 Z M -0.000398898 0.00237386 "
                        stroke="#000000"
                        strokeWidth="8"
                        stroke-opacity="1"
                        stroke-miterlimit="4"
                      />
                    </g>
                  </g>
                </g>
                {/* forearm left back (przedramie LT)*/}
                <g clip-path="url(#7b14319a59)">
                  <g clip-path="url(#c97e0a2c3e)">
                    <path
                      fill="#ffffff"
                      d="M 441.386719 247.707031 L 475.453125 258.496094 L 447.675781 346.191406 L 413.609375 335.402344 Z M 441.386719 247.707031 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#ebfdd9a8b0)">
                  <g clip-path="url(#22179eb1c0)">
                    <g clip-path="url(#88a02fa022)">
                      <path
                        stroke-linecap="butt"
                        transform="matrix(0.714984, 0.226489, -0.226489, 0.714984, 441.386982, 247.70705)"
                        fill="none"
                        stroke-linejoin="miter"
                        d="M -0.000341674 0.0000816859 L 47.640127 -0.00127372 L 47.640877 122.57546 L 0.000408011 122.576815 Z M -0.000341674 0.0000816859 "
                        stroke="#000000"
                        strokeWidth="8"
                        stroke-opacity="1"
                        stroke-miterlimit="4"
                      />
                    </g>
                  </g>
                </g>
                {/* hand left back (dłoń  LT)*/}
                <g clip-path="url(#8da73921a2)">
                  <g clip-path="url(#810b4e8504)">
                    <path
                      fill="#ffffff"
                      d="M 413.695312 335.125 L 447.761719 345.917969 L 433.726562 390.230469 L 399.65625 379.4375 Z M 413.695312 335.125 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#d55f3ec7ad)">
                  <g clip-path="url(#02744a58cd)">
                    <g clip-path="url(#e05d0d51ec)">
                      <path
                        stroke-linecap="butt"
                        transform="matrix(0.714984, 0.226489, -0.226489, 0.714984, 413.695567, 335.125993)"
                        fill="none"
                        stroke-linejoin="miter"
                        d="M -0.000722928 -0.0011597 L 47.639746 -0.0025151 L 47.640354 61.985093 L -0.000114095 61.986449 Z M -0.000722928 -0.0011597 "
                        stroke="#000000"
                        strokeWidth="8"
                        stroke-opacity="1"
                        stroke-miterlimit="4"
                      />
                    </g>
                  </g>
                </g>
                <g clip-path="url(#15080dd38e)">
                  <g clip-path="url(#a77f13e266)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 616.090702, 136.526323)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 27.353023 0.00136103 C 12.243648 0.00136103 -0.00114445 12.246153 -0.00114445 27.350321 C -0.00114445 42.459696 12.243648 54.704488 27.353023 54.704488 C 42.457191 54.704488 54.701983 42.459696 54.701983 27.350321 C 54.701983 12.246153 42.457191 0.00136103 27.353023 0.00136103 Z M 27.353023 0.00136103 "
                      stroke="#000000"
                      strokeWidth="8"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                {/* shoulder right back (bark PT)*/}
                <g clip-path="url(#99b64ff38c)">
                  <g clip-path="url(#8149524f00)">
                    <path
                      fill="#ffffff"
                      d="M 615.222656 136.527344 L 656.25 136.527344 L 656.25 177.554688 L 615.222656 177.554688 Z M 615.222656 136.527344 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#1eb52cdd80)">
                  <g clip-path="url(#408d2af576)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 615.222094, 136.526323)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 27.349709 0.00136103 C 12.245542 0.00136103 0.000749499 12.246153 0.000749499 27.350321 C 0.000749499 42.459696 12.245542 54.704488 27.349709 54.704488 C 42.459085 54.704488 54.703877 42.459696 54.703877 27.350321 C 54.703877 12.246153 42.459085 0.00136103 27.349709 0.00136103 Z M 27.349709 0.00136103 "
                      stroke="#000000"
                      strokeWidth="8"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                {/* elbow right back (łokieć PT)*/}
                <g clip-path="url(#43a8011bb9)">
                  <g clip-path="url(#1c0823d7c9)">
                    <path
                      fill="#ffffff"
                      d="M 635.738281 232.4375 L 676.765625 232.4375 L 676.765625 273.464844 L 635.738281 273.464844 Z M 635.738281 232.4375 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#964e8209e8)">
                  <g clip-path="url(#9a2b23671d)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 635.736597, 232.436408)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 27.351205 0.00145642 C 12.247038 0.00145642 0.00224533 12.246249 0.00224533 27.350416 C 0.00224533 42.459792 12.247038 54.704584 27.351205 54.704584 C 42.455372 54.704584 54.705373 42.459792 54.705373 27.350416 C 54.705373 12.246249 42.455372 0.00145642 27.351205 0.00145642 Z M 27.351205 0.00145642 "
                      stroke="#000000"
                      strokeWidth="8"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                {/* wrist right back (nadgarstek PT)*/}
                <g clip-path="url(#4867c31346)">
                  <g clip-path="url(#5dd5e3e2a6)">
                    <path
                      fill="#ffffff"
                      d="M 662.785156 321.652344 L 703.8125 321.652344 L 703.8125 362.683594 L 662.785156 362.683594 Z M 662.785156 321.652344 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#3a5494e87b)">
                  <g clip-path="url(#c81f5fa234)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 662.784164, 321.653913)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 27.350282 -0.0020919 C 12.246115 -0.0020919 0.00132287 12.247909 0.00132287 27.352076 C 0.00132287 42.456243 12.246115 54.701035 27.350282 54.701035 C 42.459658 54.701035 54.70445 42.456243 54.70445 27.352076 C 54.70445 12.247909 42.459658 -0.0020919 27.350282 -0.0020919 Z M 27.350282 -0.0020919 "
                      stroke="#000000"
                      strokeWidth="8"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                {/* elbow left back (łokieć LT)*/}
                <g clip-path="url(#da3c8e7e95)">
                  <g clip-path="url(#dbc7a35ed3)">
                    <path
                      fill="#ffffff"
                      d="M 436.570312 232.4375 L 477.601562 232.4375 L 477.601562 273.464844 L 436.570312 273.464844 Z M 436.570312 232.4375 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#634ba1019e)">
                  <g clip-path="url(#16ec87ffd2)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 436.572222, 232.436408)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 27.351622 0.00145642 C 12.247455 0.00145642 -0.00254566 12.246249 -0.00254566 27.350416 C -0.00254566 42.459792 12.247455 54.704584 27.351622 54.704584 C 42.455789 54.704584 54.700582 42.459792 54.700582 27.350416 C 54.700582 12.246249 42.455789 0.00145642 27.351622 0.00145642 Z M 27.351622 0.00145642 "
                      stroke="#000000"
                      strokeWidth="8"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                {/* wrist left back (nadgarstek LT)*/}
                <g clip-path="url(#71cb582a6d)">
                  <g clip-path="url(#bb08274015)">
                    <path
                      fill="#ffffff"
                      d="M 408.636719 321.464844 L 449.664062 321.464844 L 449.664062 362.492188 L 408.636719 362.492188 Z M 408.636719 321.464844 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#d60496bcbb)">
                  <g clip-path="url(#eec8b4b6c0)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 408.635239, 321.463657)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 27.350933 0.00158169 C 12.246765 0.00158169 0.00197308 12.246374 0.00197308 27.350541 C 0.00197308 42.459917 12.246765 54.704709 27.350933 54.704709 C 42.4551 54.704709 54.7051 42.459917 54.7051 27.350541 C 54.7051 12.246374 42.4551 0.00158169 27.350933 0.00158169 Z M 27.350933 0.00158169 "
                      stroke="#000000"
                      strokeWidth="8"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                {/* shoulder left back (bark LT)*/}
                <g clip-path="url(#dc0de0bdb5)">
                  <g clip-path="url(#b5edeb9b32)">
                    <path
                      fill="#ffffff"
                      d="M 461.359375 136.527344 L 502.390625 136.527344 L 502.390625 177.554688 L 461.359375 177.554688 Z M 461.359375 136.527344 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#fde0e56ceb)">
                  <g clip-path="url(#4b91e40fbc)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 461.360405, 136.526323)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 27.352795 0.00136103 C 12.243419 0.00136103 -0.00137292 12.246153 -0.00137292 27.350321 C -0.00137292 42.459696 12.243419 54.704488 27.352795 54.704488 C 42.456962 54.704488 54.701754 42.459696 54.701754 27.350321 C 54.701754 12.246153 42.456962 0.00136103 27.352795 0.00136103 Z M 27.352795 0.00136103 "
                      stroke="#000000"
                      strokeWidth="8"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                {/* knee left back ( kolano LT)*/}
                <g clip-path="url(#1d9dcbde10)">
                  <g clip-path="url(#b0ab8facc6)">
                    <path
                      fill="#ffffff"
                      d="M 497.527344 429.835938 L 538.558594 429.835938 L 538.558594 470.867188 L 497.527344 470.867188 Z M 497.527344 429.835938 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#df8020f8c9)">
                  <g clip-path="url(#a0e06bec9d)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 497.528475, 429.837794)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 27.352659 -0.00247488 C 12.243284 -0.00247488 -0.00150853 12.247526 -0.00150853 27.351693 C -0.00150853 42.45586 12.243284 54.700652 27.352659 54.700652 C 42.456827 54.700652 54.701619 42.45586 54.701619 27.351693 C 54.701619 12.247526 42.456827 -0.00247488 27.352659 -0.00247488 Z M 27.352659 -0.00247488 "
                      stroke="#000000"
                      strokeWidth="8"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                {/* knee right back ( kolano PT)*/}
                <g clip-path="url(#1fb5cde58c)">
                  <g clip-path="url(#bee7024c6d)">
                    <path
                      fill="#ffffff"
                      d="M 579.972656 429.835938 L 621.003906 429.835938 L 621.003906 470.867188 L 579.972656 470.867188 Z M 579.972656 429.835938 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#9592d8c50c)">
                  <g clip-path="url(#cb2d6fa909)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 579.973152, 429.837794)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 27.353507 -0.00247488 C 12.244132 -0.00247488 -0.000660506 12.247526 -0.000660506 27.351693 C -0.000660506 42.45586 12.244132 54.700652 27.353507 54.700652 C 42.457675 54.700652 54.702467 42.45586 54.702467 27.351693 C 54.702467 12.247526 42.457675 -0.00247488 27.353507 -0.00247488 Z M 27.353507 -0.00247488 "
                      stroke="#000000"
                      strokeWidth="8"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                {/* ankle right back ( kostka PT)*/}
                <g clip-path="url(#7e0c59ecc0)">
                  <g clip-path="url(#c549c2e97d)">
                    <path
                      fill="#ffffff"
                      d="M 595.574219 525.617188 L 636.605469 525.617188 L 636.605469 566.644531 L 595.574219 566.644531 Z M 595.574219 525.617188 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#34137cc7dd)">
                  <g clip-path="url(#2400f9fca7)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 595.576151, 525.61687)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 27.351592 0.000423902 C 12.247424 0.000423902 -0.00257629 12.245216 -0.00257629 27.349383 C -0.00257629 42.458759 12.247424 54.703551 27.351592 54.703551 C 42.455759 54.703551 54.700551 42.458759 54.700551 27.349383 C 54.700551 12.245216 42.455759 0.000423902 27.351592 0.000423902 Z M 27.351592 0.000423902 "
                      stroke="#000000"
                      strokeWidth="8"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                {/* ankle left back ( kostka LT)*/}
                <g clip-path="url(#abc8ea8129)">
                  <g clip-path="url(#d805fb2d0c)">
                    <path
                      fill="#ffffff"
                      d="M 478.785156 525.984375 L 519.8125 525.984375 L 519.8125 567.011719 L 478.785156 567.011719 Z M 478.785156 525.984375 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#e122c182d4)">
                  <g clip-path="url(#7d28628f40)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 478.783756, 525.98443)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 27.350827 -0.000072744 C 12.246659 -0.000072744 0.00186707 12.244719 0.00186707 27.354095 C 0.00186707 42.458262 12.246659 54.703055 27.350827 54.703055 C 42.454994 54.703055 54.704994 42.458262 54.704994 27.354095 C 54.704994 12.244719 42.454994 -0.000072744 27.350827 -0.000072744 Z M 27.350827 -0.000072744 "
                      stroke="#000000"
                      strokeWidth="8"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                {/* left Hip back (biodro LT)*/}
                <g clip-path="url(#ce2f693cd4)">
                  <g clip-path="url(#b1e3274be2)">
                    <path
                      fill="#ffffff"
                      d="M 494.632812 301.140625 L 535.660156 301.140625 L 535.660156 342.167969 L 494.632812 342.167969 Z M 494.632812 301.140625 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 494.632827, 301.139393)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 27.354148 0.001643 C 12.244772 0.001643 -0.0000196942 12.246435 -0.0000196942 27.350602 C -0.0000196942 42.459978 12.244772 54.70477 27.354148 54.70477 C 42.458315 54.70477 54.703108 42.459978 54.703108 27.350602 C 54.703108 12.246435 42.458315 0.001643 27.354148 0.001643 Z M 27.354148 0.001643 "
                      stroke="#000000"
                      strokeWidth="8"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
                {/* right Hip  back (biodro PT)*/}
                <g clip-path="url(#47455643f0)">
                  <g clip-path="url(#4b020ec5ae)">
                    <path
                      fill="#ffffff"
                      d="M 579.972656 300.949219 L 621.003906 300.949219 L 621.003906 341.976562 L 579.972656 341.976562 Z M 579.972656 300.949219 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
                <g clip-path="url(#ff55a39482)">
                  <g clip-path="url(#a4277814d4)">
                    <path
                      stroke-linecap="butt"
                      transform="matrix(0.75, 0, 0, 0.75, 579.973152, 300.949138)"
                      fill="none"
                      stroke-linejoin="miter"
                      d="M 27.353507 0.000108254 C 12.244132 0.000108254 -0.000660506 12.2449 -0.000660506 27.349068 C -0.000660506 42.458443 12.244132 54.703236 27.353507 54.703236 C 42.457675 54.703236 54.702467 42.458443 54.702467 27.349068 C 54.702467 12.2449 42.457675 0.000108254 27.353507 0.000108254 Z M 27.353507 0.000108254 "
                      stroke="#000000"
                      strokeWidth="8"
                      stroke-opacity="1"
                      stroke-miterlimit="4"
                    />
                  </g>
                </g>
              </InjurySVG>
            </div>
            {currentActiveElement && (
              <div className={Style.btnPanel}>
                {currentActiveElement}
                <ul>
                  <li className={Style.wrapCheck}>
                    <Field
                      className={Style.check}
                      name="skinAppearance.pale"
                      type="checkbox"
                    />
                    <p>brak obrażeń</p>
                  </li>
                  <li>
                    <button>O - złamanie otwarte</button>
                  </li>
                  <li>
                    <button>Z - złamanie zamknięte</button>
                  </li>
                  <li>
                    <button>W - zwichnięcie </button>
                  </li>
                  <li>
                    <button>S - stłuczenie </button>
                  </li>
                  <li>
                    <button>R - rana </button>
                  </li>
                  <li>
                    <button>K - krwotok z rany </button>
                  </li>
                  <li>
                    <button>M - zmiażdżenie </button>
                  </li>
                  <li>
                    <button>A - amputacja </button>
                  </li>
                  <li>
                    <button>N - ból nieurazowy </button>
                  </li>
                  <li>
                    <button>P - oparzenie </button>
                  </li>
                </ul>
                <div> oparzenie</div>
              </div>
            )}
            <FormNavigation onSaveForm={submitForm} />
          </div>
        </form>
      )}
    </Formik>
  );
};

export default InjuryAssessment;
