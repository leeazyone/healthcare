import React from "react";
import dementia1 from "../img/대한민국 치매현황2023_65세이상 추정치매환자 및 중증도별 현황_중앙치매센터.png"
import dementia2 from "../img/대한민국 치매현황2023_연도별 추정치매환자수 및 유병률_중앙치매센터.png"

export default function Home() {
  return <div className="home">
    <h1>고령화사회의 적, 치매</h1>
    <div className="dementia">
      <div>
        <img src={dementia1} alt="65세이상 추정치매환자 및 중증도별 현황"/>
        <span>전국 60세 이상 추정치매환자지수는 2018년 약 77만명, 2019년 약 82만명, 2020년 약 86만명, 2021년 약 91만명, 2022년 약 96만명으로 매년 약 5만명씩 증가하는 추세</span>
      </div>
      <div>
        <img src={dementia2} alt="연도별 추정치매환자수 및 유병률"/>
        <span>전국 60세 이상 추정치매환자지수는 2018년 약 77만명, 2019년 약 82만명, 2020년 약 86만명, 2021년 약 91만명, 2022년 약 96만명으로 매년 약 5만명씩 증가하는 추세</span>
      </div>
    </div>
  </div>;
}
