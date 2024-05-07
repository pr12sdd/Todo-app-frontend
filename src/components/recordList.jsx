import Record from "./record";
function RecordList({ data, setData, decision, setDecision }) {
  return (
    <>
      {data.map((element) => (
        <Record
          value={element}
          key={element._id}
          data={data}
          setData={setData}
          decision={decision}
          setDecision={setDecision}
        />
      ))}
    </>
  );
}
export default RecordList;
