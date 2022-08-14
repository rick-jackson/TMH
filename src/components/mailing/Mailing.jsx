import React from "react";
import "./mailing.scss";

const Mailing = () => {
  return (
    <section className="mailing">
      <div className="mailing__blur">
        <div className="mailing__wrapper">
          <div className="mailing__info">
            <h4 className="mailing__title">
              Слідкуйте за усіма акціями та вигідними пропозиціями легко{" "}
            </h4>
            <p className="mailing__description">
              Надішліть нам свою електронну адресу та отримуйте всі новини щодо
              навигідніших пропозицій та акцій нашої компанії. Не втрачайте шанс
              забезпечити свій захист за найкращу ціну!
            </p>
          </div>

          <form className="mailing__form mailing-form" action="#">
            <h4 className="mailing-form__title">
              Підписатися на розсилку усіх акцій та пропозицій
            </h4>
            <input
              className="mailing-form__input"
              type="text"
              placeholder="Ім’я"
            />
            <input
              className="mailing-form__input"
              type="text"
              placeholder="Номер телефону"
            />
            <input
              className="mailing-form__input"
              type="text"
              placeholder="E-mail"
            />
            <button className="mailing-form__button" type="submit">
              Підписатися
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Mailing;
