import "./app-filter.css";

const AppFilter = (props) => {
  const buttonsdata = [
    { name: "all", label: "Все сотрудники", colored: false },
    { name: "rise", label: "На повышение", colored: false },
    { name: "moreThen1000", label: "З/П больше 1000$", colored: true },
  ];

  const buttons = buttonsdata.map(({ name, label, colored }) => {
    const active = props.filter === name;
    const clazz = active ? "btn-light" : "btn-outline-light";
    const style = colored ? { color: "black" } : null;
    return (
      <button
        type="button"
        className={`btn ${clazz}`}
        key={name}
        onClick={() => props.onFilterSelect(name)}
        style={style}
      >
        {label}
      </button>
    );
  });

  return <div className="btn-group">{buttons}</div>;
};

export default AppFilter;
