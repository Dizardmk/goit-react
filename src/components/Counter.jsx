import { connect } from 'react-redux';
import * as actions from '../redux/counter/counter-actions';

const Counter = ({ value, step, onIncrement, onDecrement }) => (
  <div>
    {console.dir(Counter)}
    <span>{value}</span>
    <div>
      <button type="button" onClick={() => onIncrement(step)}>
        increase by +{step}
      </button>
      <button type="button" onClick={() => onDecrement(step)}>
        decrease by -{step}
      </button>
    </div>
  </div>
);

const mapStateToProps = state => ({
  value: state.counter.value,
  step: state.counter.step,
});

const mapDispatchToProps = dispatch => ({
  onIncrement: step => dispatch(actions.increment(step)),
  onDecrement: step => dispatch(actions.decrement(step)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
