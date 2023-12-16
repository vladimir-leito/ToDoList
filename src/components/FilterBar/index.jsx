import styles from './FilterBar.module.scss';

const FilterBar = (props) => {
  const buttonsData = [
    { name: 'all', label: 'All' },
    { name: 'completed', label: 'Completed' },
    { name: 'uncompleted', label: 'Uncompleted' },
  ];

  const buttons = buttonsData.map(({ name, label }) => {
    const active = props.filter === name;
    const cls = active ? 'light' : 'dark';

    return (
      <button
        type="button"
        className={`${styles.btn} ${styles[cls]}`}
        key={name}
        onClick={() => props.onFilterSelect(name)}>
        {label}
      </button>
    );
  });

  return <div className={styles.wrapper}>{buttons}</div>;
};

export default FilterBar;
