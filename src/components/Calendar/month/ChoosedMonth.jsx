import CalendarHead from './CalendarHead';
import CalendarTable from './CalendarTable';
import { Container } from './ChoosedMonth.styled';

const ChoosedMonth = ({ theme }) => {
  return (
    <Container>
      {/* <h2>Month</h2> */}
      <CalendarHead theme={theme} />
      <CalendarTable theme={theme} />
    </Container>
  );
};

export default ChoosedMonth;
