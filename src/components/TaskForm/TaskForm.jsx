import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  AddTaskButton,
  BoxInput,
  BtnTxt,
  BtnWrapper,
  CancelButton,
  CheckedRadioBtnBlue,
  CheckedRadioBtnRed,
  CheckedRadioBtnYellow,
  Error,
  FormContainer,
  FormElement,
  FormField,
  FormLabel,
  HighPrioBtn,
  LowPrioBtn,
  MidPrioBtn,
  PriorityWrapper,
  RadioBtn,
  RadioLabelStyled,
  StyledEditBtn,
  StyledSVG,
  TimeFieldWrap,
  TimeInput,
  TimeWrapper,
} from './TaskForm.styled';
import sprite from '../Pictures/sprite.svg';
import { editTask, addTask } from '../../redux/task/taskOperations';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsError } from 'redux/task/taskSelectors';
import { useEffect } from 'react';
import { useState } from 'react';
import Checkmark from './Checkmark/Checkmark';
import { selectTheme } from 'redux/header/headerSlice';

const TaskForm = ({ closeModal, task }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const dispatch = useDispatch();
  const error = useSelector(selectIsError);
  const { title, start, end, priority } = task;
  const theme = useSelector(selectTheme);

  useEffect(() => {}, [error]);

  let taskSchema = Yup.object().shape({
    title: Yup.string()
      .min(2, 'Task name too short')
      .max(60, 'Task name too long.')
      .required('Task name is required'),
    start: Yup.string().required('Start time is required'),
    end: Yup.string()
      .required('End time is required')
      .test(
        'is-greater',
        'End time must be greater than start time',
        function (end) {
          const start = this.parent.start;
          return !start || !end || start < end;
        }
      ),
    priority: Yup.string()
      .oneOf(['low', 'medium', 'high'])
      .required('Priority is required'),
  });

  const onTaskSubmit = async values => {
    const newTask = { ...task, ...values };
    task._id ? dispatch(editTask(newTask)) : dispatch(addTask(newTask));
    setIsSubmitted(true);
    setTimeout(() => closeModal(), 1500);
  };

  return (
    <FormContainer bg={theme !== 'dark' ? '#fff' : 'var(--color-theme-dark)'}>
      {!isSubmitted && (
        <Formik
          initialValues={
            task._id
              ? { title, start, end, priority }
              : { title: '', start: '09:00', end: '10:00', priority: 'low' }
          }
          validationSchema={taskSchema}
          onSubmit={async values => {
            onTaskSubmit(values);
          }}
        >
          {({ values, errors, touched }) => {
            return (
              <FormElement>
                <FormLabel
                  htmlFor="title"
                  style={
                    theme === 'dark'
                      ? { color: 'rgba(250, 250, 250, 0.30)' }
                      : { color: 'rgba(52, 52, 52, 0.8)' }
                  }
                >
                  Title
                </FormLabel>
                <BoxInput>
                  <FormField
                    bg={
                      theme !== 'dark' ? '#f6f6f6' : 'var(--color-theme-dark)'
                    }
                    color={theme === 'dark' ? '#fff' : '#343434'}
                    style={{
                      border:
                        errors.title && touched.title
                          ? '1px solid red'
                          : theme === 'dark'
                          ? '1px solid rgba(52, 52, 52, 0.8)'
                          : '1px solid #FFF',
                    }}
                    id="title"
                    type="text"
                    name="title"
                    placeholder="Enter text"
                  />
                  {errors.title && touched.title ? (
                    <Error>{errors.title}</Error>
                  ) : null}
                </BoxInput>
                <TimeWrapper>
                  <TimeFieldWrap>
                    <FormLabel
                      htmlFor="start"
                      style={
                        theme === 'dark'
                          ? { color: 'rgba(250, 250, 250, 0.30)' }
                          : { color: 'rgba(52, 52, 52, 0.8)' }
                      }
                    >
                      Start
                    </FormLabel>
                    <TimeInput
                      bg={
                        theme !== 'dark' ? '#f6f6f6' : 'var(--color-theme-dark)'
                      }
                      color={theme === 'dark' ? '#fff' : '#343434'}
                      style={{
                        border:
                          errors.start && touched.start
                            ? '1px solid red'
                            : theme === 'dark'
                            ? '1px solid rgba(52, 52, 52, 0.8)'
                            : '1px solid #FFF',
                      }}
                      id="start"
                      type="time"
                      step="60"
                      name="start"
                    ></TimeInput>
                    {errors.start && touched.start ? (
                      <Error>{errors.start}</Error>
                    ) : null}
                    {!errors.start && errors.end && touched.end ? (
                      <Error>{errors.end}</Error>
                    ) : null}
                  </TimeFieldWrap>
                  <TimeFieldWrap>
                    <FormLabel
                      htmlFor="end"
                      style={
                        theme === 'dark'
                          ? { color: 'rgba(250, 250, 250, 0.30)' }
                          : { color: 'rgba(52, 52, 52, 0.8)' }
                      }
                    >
                      End
                    </FormLabel>
                    <TimeInput
                      bg={
                        theme !== 'dark' ? '#f6f6f6' : 'var(--color-theme-dark)'
                      }
                      color={theme === 'dark' ? '#fff' : '#343434'}
                      id="end"
                      type="time"
                      name="end"
                      style={{
                        border:
                          errors.end && touched.end
                            ? '1px solid red'
                            : theme === 'dark'
                            ? '1px solid rgba(52, 52, 52, 0.8)'
                            : '1px solid #FFF',
                      }}
                    ></TimeInput>
                  </TimeFieldWrap>
                </TimeWrapper>
                <PriorityWrapper role="group" id="priority-group">
                  <RadioLabelStyled
                    style={
                      theme === 'dark'
                        ? { color: '#FFF' }
                        : { color: 'rgba(52, 52, 52, 0.8)' }
                    }
                  >
                    <RadioBtn type="radio" name="priority" value="low" />
                    <CheckedRadioBtnBlue />
                    <LowPrioBtn
                      style={
                        theme === 'dark'
                          ? { backgroundColor: '#000000' }
                          : { backgroundColor: '#FFF' }
                      }
                    />
                    Low
                  </RadioLabelStyled>
                  <RadioLabelStyled
                    style={
                      theme === 'dark'
                        ? { color: '#FFF' }
                        : { color: 'rgba(52, 52, 52, 0.8)' }
                    }
                  >
                    <RadioBtn
                      type="radio"
                      name="priority"
                      value="medium"
                    ></RadioBtn>
                    <CheckedRadioBtnYellow />
                    <MidPrioBtn
                      style={
                        theme === 'dark'
                          ? { backgroundColor: '#000000' }
                          : { backgroundColor: '#FFF' }
                      }
                    />{' '}
                    Medium
                  </RadioLabelStyled>
                  <RadioLabelStyled
                    style={
                      theme === 'dark'
                        ? { color: '#FFF' }
                        : { color: 'rgba(52, 52, 52, 0.8)' }
                    }
                  >
                    <RadioBtn
                      type="radio"
                      name="priority"
                      value="high"
                    ></RadioBtn>
                    <CheckedRadioBtnRed />
                    <HighPrioBtn
                      style={
                        theme === 'dark'
                          ? { backgroundColor: '#000000' }
                          : { backgroundColor: '#FFF' }
                      }
                    />{' '}
                    High
                  </RadioLabelStyled>
                </PriorityWrapper>
                <BtnWrapper>
                  <AddTaskButton type="submit">
                    {task._id ? (
                      <StyledEditBtn style={{ marginRight: 8 }}>
                        <use href={sprite + '#edit-btn'}></use>
                      </StyledEditBtn>
                    ) : (
                      <StyledSVG>
                        <use href={sprite + '#plus-btn'}></use>
                      </StyledSVG>
                    )}
                    {task._id ? 'Edit' : <BtnTxt>Add</BtnTxt>}
                  </AddTaskButton>
                  <CancelButton onClick={closeModal}>Cancel</CancelButton>
                </BtnWrapper>
              </FormElement>
            );
          }}
        </Formik>
      )}
      {isSubmitted ? <Checkmark /> : null}
    </FormContainer>
  );
};

export default TaskForm;
