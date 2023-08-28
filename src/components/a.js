import ComponentB from "./b";

function ComponentA() {
  return (
    <div style={{ margin: "auto", width: "50%", marginTop: "100px" }}>
      <div style={{ border: "1px solid red", width: "500px", padding: "10px" }}>
        <p>Component A</p>
        <p>Hi : ...</p>
        <p>Balance : ...</p>
        <ComponentB />
      </div>
    </div>
  );
}

export default ComponentA;