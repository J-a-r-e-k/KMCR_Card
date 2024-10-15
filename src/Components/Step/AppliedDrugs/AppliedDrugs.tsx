//
import Style from './AppliedDrugs.module.scss';
// import { Formik } from 'formik';
import { useState } from 'react';
import { useAppContext } from '../../../context/AppContext';
import { FormNavigation } from '../../Section/FormNavigation/FormNavigation';

interface MedicineItem {
  lb: number;
  nameDrug: string;
  quantity: number;
  unitOfMeasure: string;
  unit: string;
}

const AppliedDrugs = () => {
  const appContext = useAppContext();
  const [btnNameDrug, setBtnNameDrug] = useState('');
  const [currentItem, setCurrentItem] = useState<MedicineItem>({
    lb: 0,
    nameDrug: '',
    quantity: 0,
    unitOfMeasure: '',
    unit: '',
  });
  const AddMedicine = () => {
    const addDrugToList = () => {
      if (
        !currentItem.nameDrug ||
        !currentItem.quantity ||
        !currentItem.unitOfMeasure ||
        !currentItem.unit
      )
        return alert('Wypełnij wszystkie pola');

      const nr = appContext.appliedDrugs.length + 1;
      const newDrug: MedicineItem = {
        lb: nr,
        nameDrug: currentItem.nameDrug,
        quantity: currentItem.quantity,
        unitOfMeasure: currentItem.unitOfMeasure,
        unit: currentItem.unit,
      };

      appContext.setAppliedDrugs((e) => [...e, newDrug]);
    };

    const Select = () => {
      const styleName = btnNameDrug + 'Select';

      const arraySelect = {
        nameDrug: [{ name: 'Dexaven' }],
        unitOfMeasure: [
          {
            name: 'mg',
          },
        ],
        unit: [
          {
            short: 'i.m. - ',
            name: 'domięśniowo',
          },
          {
            short: 'i.o. - ',
            name: 'doszpikowo',
          },
          {
            short: 'i.v. - ',
            name: 'dożylnie',
          },
          {
            short: 'p.o. - ',
            name: 'doustnie',
          },
          {
            short: 'p.r. - ',
            name: 'doodbytniczo',
          },
          {
            short: 'i.c. - ',
            name: 'śródskórnie',
          },
          {
            short: 's.c. - ',
            name: 'podskórnie',
          },
          {
            short: 's.l. - ',
            name: 'podjęzykowo',
          },
          {
            short: 'e.t. - ',
            name: 'dotchawiczo',
          },
          {
            short: 'inhalatio - ',
            name: 'wziewnie',
          },
          {
            short: 'p.v. - ',
            name: 'dopochwowo',
          },
          {
            short: 'i.a. - ',
            name: 'dotętniczo',
          },
          {
            short: 'i.a.c. - ',
            name: 'dowieńcowo',
          },
          {
            short: 'i.n. - ',
            name: 'donosowo',
          },
        ],
      };

      const selectionList = arraySelect[btnNameDrug].map((e, index) => {
        return (
          <li key={index}>
            <button
              type="button"
              className={Style.btnSelect}
              onClick={() => {
                console.log(e.name);
                setCurrentItem({ ...currentItem, nameDrug: e.name });
              }}
            >
              {e.short} {e.name}
            </button>
          </li>
        );
      });

      return (
        <>
          <ul className={`${Style.select} ${Style[styleName]}`}>
            {selectionList}
          </ul>
          <div
            className={Style.wrapSelect}
            onClick={() => setBtnNameDrug('')}
          ></div>
        </>
      );
    };
    //WPISUJE PO JEDNEJ LITERCE . TRZEBA USTAWIĆ NA VALIU BY SIE UZUPEŁNIAŁO

    return (
      <div>
        <button className={`${Style.btn} ${Style.btnNoDrugs} `}>
          Nie podano leków
        </button>
        <ul className={Style.wrapMedicine}>
          <li className={Style.wrapNameDrugs}>
            <label className={Style.description}>Nazwa leku</label>
            <input
              className={`${Style.textField}`}
              type="text"
              value={currentItem.nameDrug}
              onChange={(e) => {
                setCurrentItem({ ...currentItem, nameDrug: e.target.value });
              }}
            />
            {btnNameDrug == 'nameDrug' ? <Select /> : ''}
            <button
              className={Style.btn}
              onClick={() => setBtnNameDrug('nameDrug')}
              type="button"
            >
              ...
            </button>
            <button className={Style.btn} onClick={() => setBtnNameDrug('')}>
              X
            </button>
          </li>
          <li>
            <label className={Style.description}>ilość</label>
            <input
              className={`${Style.textField} ${Style.fieldQuantity}`}
              type="number"
              value={currentItem.quantity}
              onChange={(e) =>
                setCurrentItem({
                  ...currentItem,
                  quantity: Number(e.target.value),
                })
              }
            />
          </li>
          <li>
            <label className={Style.description}>j.m.</label>
            <input
              className={`${Style.textField} ${Style.fieldQuantity}`}
              type="text"
              value={currentItem.unitOfMeasure}
              onChange={(e) =>
                setCurrentItem({
                  ...currentItem,
                  unitOfMeasure: e.target.value,
                })
              }
            />
            <button
              className={Style.btn}
              onClick={() => setBtnNameDrug('unitOfMeasure')}
            >
              ...
            </button>
            {btnNameDrug == 'unitOfMeasure' ? <Select /> : ''}
            <button className={Style.btn}>X</button>
          </li>
          <li>
            <label className={Style.description}>Droga podania</label>
            <input
              className={Style.textField}
              type="text"
              value={currentItem.unit}
              onChange={(e) =>
                setCurrentItem({ ...currentItem, unit: e.target.value })
              }
            />
            <button
              className={Style.btn}
              onClick={() => setBtnNameDrug('unit')}
            >
              ...
            </button>
            {btnNameDrug == 'unit' ? <Select /> : ''}
            <button className={Style.btn}>X</button>
          </li>
          <button
            className={`${Style.btn} ${Style.btnDrugs} `}
            onClick={() => {
              addDrugToList();
            }}
            type="button"
          >
            Dodaj
          </button>
        </ul>
      </div>
    );
  };

  const ShowMedicineList = () => {
    if (appContext.appliedDrugs.length == 0) return;
    const medicine = appContext.appliedDrugs.map((e, index) => {
      return (
        <li key={index}>
          <p>
            {e.lb}. {e.nameDrug} {e.quantity}
            {e.unitOfMeasure} {e.unit}
          </p>
        </li>
      );
    });
    return (
      <>
        <ul>{medicine}</ul>
      </>
    );
  };

  return (
    <form>
      <h2>Zastosowane leki</h2>
      <AddMedicine />
      <div className={Style.wrapListMedicines}>
        <p className={Style.listDescription}>
          lp. nazwa ilość j.m. droga podania
        </p>
        <ShowMedicineList />
      </div>
      <FormNavigation />
    </form>
  );
};

export default AppliedDrugs;

{
  /* <Formik
initialValues={appContext.appliedDrugs}
onSubmit={(values, { setSubmitting }) => {
  setSubmitting(false);
  // appContext.setAppliedDrugs(values);
}}
>
{() => (
  <form>
    <h2>Zastosowane leki</h2>
    <AddMedicine />
    <div className={Style.wrapListMedicines}>
      <p className={Style.listDescription}>
        lp. nazwa ilość j.m. droga podania
      </p>
      <ShowMedicineList />
    </div>
    <FormNavigation />
  </form>
)}
</Formik> */
}
