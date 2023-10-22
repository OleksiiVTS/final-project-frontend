import CalendarHead from './CalendarHead';
import CalendarTable from './CalendarTable';
import { Container } from './ChoosedMonth.styled';

const ChoosedMonth = ({ theme }) => {
  return (
    <Container>
      <CalendarHead theme={theme} />
      <CalendarTable theme={theme} />
    </Container>
  );
};

export default ChoosedMonth;
