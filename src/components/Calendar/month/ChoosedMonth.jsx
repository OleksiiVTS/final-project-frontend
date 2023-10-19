import CalendarHead from './CalendarHead';
import CalendarTable from './CalendarTable';
import { Container } from './ChoosedMonth.styled';

const ChoosedMonth = () => {
  return (
    <Container>
      {/* <h2>Month</h2> */}
      <CalendarHead />
      <CalendarTable />
    </Container>
  );
};

export default ChoosedMonth;
