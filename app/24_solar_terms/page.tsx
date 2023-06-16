'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

export default function twentyFourSolarTerms() {
  const [term, setTerm] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const nowDate = new Date();
      const nowMonth = nowDate.getMonth() + 1;
      const nowDay = nowDate.getDay();
      const endpoint = `http://localhost:3000/api/24_solar_terms/get24SolarTerms?monthDate=${nowMonth}-${nowDay}`;
      const response = await axios.get(endpoint);
      setTerm(response.data.solarTerm);
    }
    fetchData();
  }, []);

  return (
    <div className="grid min-h-screen grid-rows-3 grid-rows-[3rem_1fr_3rem]">
      <Header />
      <main className="bg-[#B3C890] p-4">
        <p>今日は「{term}」です。</p>
      </main>
      <Footer />
    </div>
  );
}
