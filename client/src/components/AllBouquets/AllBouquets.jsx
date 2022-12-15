import React from "react";
import Card from "../Card/Card";

const AllBouquets = ({arr}) => {
  // const arr = props.arr;
  // console.log(arr[0].id);
  return (
    <>
       <div>
        <p>Каталог букетов от мастерской "SweetBuket".</p>
        Выберите один из готовых букетов или закажите уникальный, который будет
        соответствовать всем вашим пожеланиям. Рекомендуем оформлять заказ за
        1-2 дня до Вашей даты! Некоторые виды букетов можем изготовить день в
        день, уточняйте у администратора Работаем по городу Сергиеву Посаду
      </div> 
      <div className="container text-center">
        <div >
          {arr.map((el) => (
            <Card el={el} key={el.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default AllBouquets;
