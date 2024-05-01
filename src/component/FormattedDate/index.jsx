const FormattedDate = ({ isHighlight, children }) => {
  return (
    <div>
      <span className={`text-sm ${isHighlight ? "text-primaryTitle" : ""}`}>
        {children}
      </span>
    </div>
  );
};

export default FormattedDate;
