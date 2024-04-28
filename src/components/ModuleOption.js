const ModuleOption = ({options}) => {
  return (
    <div className="module-options">
      {options.map(option => <p key={option}>{option}</p>)}
    </div>
  )
};

export default ModuleOption;