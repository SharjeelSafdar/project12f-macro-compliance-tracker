import React, { FC /* useState */ } from "react";
// import { GetStaticProps } from "next";
import Head from "next/head";
// import dayjs from "dayjs";

// import Result from "../components/result";
// import MCTForm from "../components/mctform";
import { Data /* , MacroNumbers, MacroNames */ } from "../next-env";

interface HomeProps {
  data: Data;
}

const Home: FC<HomeProps> = (/* { data } */) => {
  // const [results, setResults] = useState(data);

  // const onChange: React.ChangeEventHandler<HTMLInputElement> = e => {
  //   const data = { ...results };
  //   const name = e.target.name;
  //   const resultType = name.split(" ")[0] as MacroNumbers;
  //   const resultMacro = name.split(" ")[1] as MacroNames;

  //   data[resultMacro][resultType] = +e.target.value;

  //   setResults(data);
  // };

  // const getDataForPreviousDay = async () => {
  //   const currentDate = dayjs(results.date);
  //   const newDate = currentDate.subtract(1, "day").format("YYYY-MM-DD");
  //   const res = await fetch("https://macro-compliance-tracker-p12f.vercel.app/api/daily?date=" + newDate);
  //   const json = await res.json();

  //   setResults(json);
  // };

  // const getDataForNextDay = async () => {
  //   const currentDate = dayjs(results.date);
  //   const newDate = currentDate.add(1, "day").format("YYYY-MM-DD");
  //   const res = await fetch("http://localhost:3000/api/daily?date=" + newDate);
  //   const json = await res.json();

  //   setResults(json);
  // };

  // const updateMacros = async () => {
  //   await fetch("http://localhost:3000/api/daily", {
  //     method: "post",
  //     body: JSON.stringify(results),
  //   });
  // };

  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
          rel="stylesheet"
        />
      </Head>

      <div className="container mx-auto">
        <div className="flex text-center">
          <div className="w-full m-4">
            <h1 className="text-4xl">Macro Compliance Tracker</h1>
          </div>
        </div>

        {/* <div className="flex text-center">
          <button
            className="w-1/3 bg-gray-200 p-4"
            onClick={getDataForPreviousDay}
          >
            Previous Day
          </button>
          <div className="w-1/3 p-4">
            {dayjs(results.date).format("DD/MM/YYYY")}
          </div>
          <button className="w-1/3 bg-gray-200 p-4" onClick={getDataForNextDay}>
            Next Day
          </button>
        </div>

        <div className="flex mb-4 text-center">
          <Result results={results.calories} label="calories" />
          <Result results={results.carbs} label="carbs" />
          <Result results={results.fat} label="fat" />
          <Result results={results.protein} label="protein" />
        </div>

        <div className="flex">
          <MCTForm data={results} item="total" onChange={onChange} />
          <MCTForm data={results} item="target" onChange={onChange} />
          <MCTForm data={results} item="variant" onChange={onChange} />
        </div>

        <div className="flex text-center">
          <div className="w-full m-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={updateMacros}
            >
              Save
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

// export const getStaticProps: GetStaticProps = async () => {
//   const res = await fetch("http://localhost:3000/api/daily");
//   const json = await res.json();
//   return {
//     props: {
//       data: json,
//     },
//   };
// };

export default Home;
