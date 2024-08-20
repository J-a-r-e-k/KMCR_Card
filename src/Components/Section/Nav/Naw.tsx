import Style from './Nav.module.scss';

const Naw = () => {
  //dodać zmienna klase nadajaca kolor elementowi który aktualnie jest aktwyny//
  // jeśli step jest == dodaj klase jesli nie to odejmij //
  // let activeStep =

  return (
    <div className={Style.nav}>
      <ul className={Style.wrapNav}>
        <li>
          <p className={Style.text}>Zdarzenie</p>
          <p className={Style.text}>Dane Pacjenta</p>
          <p className={Style.text}>Oświadczenie Pacjenta</p>
        </li>
      </ul>
    </div>
  );
};

export default Naw;
