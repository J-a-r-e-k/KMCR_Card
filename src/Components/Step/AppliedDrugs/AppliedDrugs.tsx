//
import Style from './AppliedDrugs.module.scss';
import { Formik, Field } from 'formik';
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
    quantity: NaN,
    unitOfMeasure: '',
    unit: '',
  });
  const AddMedicine = () => {
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

    return (
      <Formik
        initialValues={currentItem}
        enableReinitialize={true}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
          setCurrentItem(values);
          addDrugToList(values);
        }}
      >
        {({ handleSubmit, submitForm }) => (
          <form className={Style.wrapFormDrugs} onSubmit={handleSubmit}>
            <button className={`${Style.btn} ${Style.btnNoDrugs} `}>
              Nie podano leków
            </button>
            <ul className={Style.wrapMedicine}>
              <li className={Style.wrapNameDrugs}>
                <label className={Style.description}>Nazwa leku</label>
                <Field
                  className={`${Style.textField}`}
                  type="text"
                  // value={currentItem.nameDrug}
                  name="nameDrug"
                />

                {btnNameDrug == 'nameDrug' ? <Select /> : ''}
                <button
                  className={Style.btn}
                  onClick={() => {
                    setBtnNameDrug('nameDrug');
                  }}
                  type="button"
                >
                  ...
                </button>
                <button
                  className={Style.btn}
                  onClick={() => setBtnNameDrug('')}
                >
                  X
                </button>
              </li>
              <li>
                <label className={Style.description}>ilość</label>
                <Field
                  className={`${Style.textField} ${Style.fieldQuantity}`}
                  type="number"
                  // value={currentItem.nameDrug}
                  name="quantity"
                />
              </li>
              <li>
                <label className={Style.description}>j.m.</label>
                <Field
                  className={`${Style.textField} ${Style.fieldQuantity}`}
                  type="text"
                  // value={currentItem.nameDrug}
                  name="unitOfMeasure"
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
                <Field
                  className={Style.textField}
                  type="text"
                  // value={currentItem.nameDrug}
                  name="unit"
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
                  submitForm();
                }}
                type="button"
              >
                Dodaj
              </button>
            </ul>
          </form>
        )}
      </Formik>
    );
  };
  const addDrugToList = (item: MedicineItem) => {
    if (!item.nameDrug || !item.quantity || !item.unitOfMeasure || !item.unit)
      return alert('Wypełnij wszystkie pola');

    const nr = appContext.appliedDrugs.length + 1;
    const newDrug: MedicineItem = {
      lb: nr,
      nameDrug: item.nameDrug,
      quantity: item.quantity,
      unitOfMeasure: item.unitOfMeasure,
      unit: item.unit,
    };

    appContext.setAppliedDrugs((e) => [...e, newDrug]);
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
