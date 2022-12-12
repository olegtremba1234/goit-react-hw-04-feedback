import PropTypes from "prop-types";
import style from "./FeedBackOptions.module.css"

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <>
      <div>
        {options.map(option => {
          return (
              <button
                 type="button"
                 onClick={() => onLeaveFeedback(option)}
                 key={option}
                 className={style.btn}
                >
                 {option}
                </button>
            )
          })}
      </div>
    </>
  )
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
}